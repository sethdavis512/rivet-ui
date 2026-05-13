---
"rivet-ui": patch
---

Align bundle-export dedupe pass in `build.ts` with lone-star-ui — same in-place regex replace approach that preserves insertion order and removes empty blocks. Functionally equivalent output; keeps the two sister libraries on identical build logic.
