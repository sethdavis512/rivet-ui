import { Glob } from 'bun';

// Discover all component entrypoints
const componentEntrypoints: string[] = [];
const glob = new Glob('src/components/*/index.ts');
for await (const file of glob.scan('.')) {
    componentEntrypoints.push(file);
}

const result = await Bun.build({
    entrypoints: ['src/index.ts', ...componentEntrypoints, 'src/utils/cn.ts'],
    outdir: './dist',
    root: './src',
    format: 'esm',
    target: 'browser',
    splitting: true,
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@base-ui/react',
        '@base-ui/react/*'
    ],
    sourcemap: 'external',
    define: {
        'process.env.NODE_ENV': '"production"'
    }
});

if (!result.success) {
    console.error('Build failed');

    for (const message of result.logs) {
        console.error(message);
    }

    process.exit(1);
}

// Fix Bun bundler duplicate export blocks (splitting + re-exports bug)
const jsGlob = new Glob('dist/**/*.js');
for await (const file of jsGlob.scan('.')) {
    const content = await Bun.file(file).text();
    const exportBlockRe = /^export \{[^}]*\};$/gm;
    const matches = content.match(exportBlockRe);
    if (matches && matches.length > 1) {
        const allNames = new Set<string>();
        for (const block of matches) {
            const inner = block.slice('export {'.length, -'};'.length);
            for (const name of inner.split(',')) {
                const trimmed = name.trim();
                if (trimmed) allNames.add(trimmed);
            }
        }
        const merged = `export {\n  ${[...allNames].join(',\n  ')}\n};`;
        const fixed = content.replace(exportBlockRe, () => '').replace(
            /\/\/#\s*debugId=/,
            `${merged}\n\n//# debugId=`
        );
        await Bun.write(file, fixed);
    }
}

const cssProc = Bun.spawnSync([
    'bunx', '@tailwindcss/cli',
    '-i', 'src/styles.css',
    '-o', 'dist/styles.css',
    '--minify'
]);

if (cssProc.exitCode !== 0) {
    console.error('CSS build failed');
    console.error(cssProc.stderr.toString());
    process.exit(1);
}

await Bun.write('dist/fonts.css', Bun.file('src/fonts.css'));

console.log('✓ Build complete');
