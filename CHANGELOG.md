# rivet-ui

## 0.4.1

### Patch Changes

- 72cf07e: Align bundle-export dedupe pass in `build.ts` with lone-star-ui — same in-place regex replace approach that preserves insertion order and removes empty blocks. Functionally equivalent output; keeps the two sister libraries on identical build logic.

## 0.4.0

### Minor Changes

- ef9476f: Add Textarea component with variant (default, error) and size (sm, md, lg) support

### Patch Changes

- 84a9e43: Add type stubs for CSS subpath exports (`./styles`, `./theme`, `./fonts`) so TypeScript with `moduleResolution: bundler` / `nodenext` can resolve side-effect imports like `import 'rivet-ui/styles'`. Also exposes `./styles.css`, `./theme.css`, `./fonts.css` aliases for bundlers that prefer explicit extensions.
- 84a9e43: Align with `@base-ui/react@1.4.1`. The Drawer namespace export graduated from preview (`DrawerPreview` → `Drawer`) in 1.3.0; the source already used the new name, so this just bumps the locked peer.
