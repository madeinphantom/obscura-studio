---
description: Sync Supabase schema and types locally
---

# Database Sync

Pull the latest Supabase schema and regenerate TypeScript types.

## Steps

1. Check if Supabase CLI is installed:

```bash
supabase --version
```

If not installed, inform the user they need to install it: `brew install supabase/tap/supabase`

2. Pull the latest database schema:

```bash
supabase db pull
```

3. Generate TypeScript types from the schema:

```bash
# TODO: Update PROJECT_ID when OBSCURA-AI has a Supabase project
supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/supabase.ts
```

4. Report what changed:
   - New tables added
   - Columns modified
   - Types regenerated

5. If any schema conflicts exist, ask the user how to resolve them.

## Setup Required

Before using this workflow, update the `--project-id` in step 3 with your Supabase project ID.

Current available projects:

- `cmfwlmmiobpnbfyogfdu` (MAINHUB)
- `kozycziwlyjlkakuvkbb` (Project ARCHE - inactive)
