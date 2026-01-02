# GitHub Pages Setup Instructions

## Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/MohammadSajidShaik/portfolio
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Click **Save**

## Step 2: Update Your Token (if needed)

If you get an error about workflow scope:

1. Go to: https://github.com/settings/tokens
2. Either:
   - **Edit your existing token** and add `workflow` scope
   - **Create a new token** with `repo` and `workflow` scopes
3. Use the new token to push the workflow file

## Step 3: Push the Workflow File

Once you have a token with `workflow` scope:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

## Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the workflow running
3. Once it completes, your site will be live at:
   **https://mohammadsajidshaik.github.io/portfolio/**

## Alternative: Manual Deployment (if Actions don't work)

If you prefer manual deployment:

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. In GitHub Settings → Pages, select `gh-pages` branch as source.

