---
description: Find and kill duplicated code
---

# Tech Debt: Duplicate Code Detection

Run this at the end of every session to identify and eliminate code duplication.

## Steps

1. Install `jscpd` (JavaScript Copy/Paste Detector) if not already installed:

```bash
npm install -g jscpd
```

2. Run duplicate code detection on the codebase (excluding node_modules):

```bash
npx jscpd src --min-lines 5 --min-tokens 50 --ignore "**/node_modules/**,**/.next/**,**/dist/**" --reporters "console,markdown" --output "./techdebt-report"
```

3. Review the generated report at `./techdebt-report/jscpd-report.md`

4. Analyze the top duplications:
   - Focus on duplicates with **>10 lines** or **>100 tokens** first
   - Prioritize duplicates in **core business logic** (not config files)
   - Look for patterns in components, utilities, and hooks

5. Refactor duplicated code:
   - **Extract to shared utilities**: Move duplicated logic to `/src/lib/utils/`
   - **Create reusable components**: Extract duplicated JSX to `/src/components/shared/`
   - **Create custom hooks**: Extract duplicated React logic to `/src/hooks/`
   - **Create helper functions**: Extract duplicated functions to appropriate modules

6. Run a focused scan on specific directories if needed:

```bash
# Scan only components
npx jscpd src/components --min-lines 5 --min-tokens 50

# Scan only app routes
npx jscpd src/app --min-lines 5 --min-tokens 50
```

7. Generate a summary report:
   - **Total duplications found**: X
   - **Critical duplications (>20 lines)**: X
   - **Files with most duplication**: List top 3
   - **Recommended refactorings**: List specific actions

8. Clean up the report directory after review:

```bash
rm -rf ./techdebt-report
```

## Configuration

You can customize detection sensitivity by adjusting:

- `--min-lines`: Minimum lines to consider (default: 5)
- `--min-tokens`: Minimum tokens to consider (default: 50)
- `--threshold`: Percentage threshold (default: none)

## Best Practices

- Run this **before major commits** or **end of session**
- Focus on **business logic duplication**, not boilerplate
- Create **GitHub issues** for large refactoring tasks
- Update this workflow if you find better tools or patterns
