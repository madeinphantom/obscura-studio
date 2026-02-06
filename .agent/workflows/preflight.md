---
description: Run build, lint, and RAMS audit before pushing
---

# Preflight Check

Run this before pushing code to catch issues early.

## Steps

1. Run the build to check for compilation errors:

```bash
npm run build
```

2. Run ESLint to catch code quality issues:

```bash
npm run lint
```

3. If `$ARGUMENTS` specifies a file, run a RAMS accessibility audit on that file. Otherwise, ask which file(s) to review or skip this step.

4. Report a summary:
   - ✅ Build: passed/failed
   - ✅ Lint: X warnings, X errors
   - ✅ RAMS: X critical, X serious issues

5. If all checks pass, confirm it's safe to push. If any fail, offer to fix them.
