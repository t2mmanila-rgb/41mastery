---
name: GitHub and Vercel Deployment Skill
description: Process to create a GitHub repository for t2mmanila@gmail.com and deploy to Vercel.
---

# GitHub and Vercel Deployment Skill

This skill documents the process for creating a GitHub repository and deploying to Vercel for the user `t2mmanila@gmail.com`.

## Triggers
- "please push to Github"
- "please create github repository"

## Pre-Execution Requirements
Before executing any deployment commands, the assistant MUST:

1. **Confirm Vercel Account**: Ask the user: "Which Vercel account would you like to use? (e.g., t2mmanila@gmail.com)"
2. **Confirm Repository & Deployment Name**: Confirm the exact names: "What should be the name of the GitHub repository and the Vercel deployment name?"
3. **Verify Auth**: Ensure `gh` and `vercel` are authenticated for the requested accounts.

## Execution Steps

### 1. GitHub Repository Creation
If the `gh` CLI is available and authenticated:
```bash
gh repo create [REPO_NAME] --public --source=. --remote=origin --push
```
If `gh` CLI is not available (e.g., only the npm package is present), guide the user to create it manually at https://github.com/new and then:
```bash
git remote add origin https://github.com/t2mmanila-rgb/[REPO_NAME].git
git branch -M main
git push -u origin main
```

### 2. Vercel Deployment
Link the project to the correct Vercel account and trigger a production deployment:
```bash
npx vercel link --yes --project [DEPLOYMENT_NAME]
npx vercel --prod --confirm --yes
```

### 3. Connect Git to Vercel
Ensure automatic deployments are enabled:
```bash
npx vercel git connect --yes https://github.com/t2mmanila-rgb/[REPO_NAME].git
```

## Verification
- Verify the live URL on Vercel.
- Verify the code is visible on the GitHub repository.
