# Deploying SpyHair to Vercel

This guide will help you deploy your SpyHair website to Vercel for free hosting.

## Prerequisites

- Your SpyHair project (this folder)
- A Vercel account (free) - Sign up at [vercel.com](https://vercel.com)

## Method 1: Vercel CLI (Recommended - Easiest)

### Step 1: Install Vercel CLI

Open PowerShell in your project folder and run:

```powershell
npm install -g vercel
```

### Step 2: Login to Vercel

```powershell
vercel login
```

This will open your browser. Choose your preferred login method (GitHub, GitLab, Bitbucket, or Email).

### Step 3: Deploy

In your project folder, run:

```powershell
vercel
```

Answer the prompts:
- **Set up and deploy?** → Press `Y` (Yes)
- **Which scope?** → Select your account
- **Link to existing project?** → Press `N` (No)
- **What's your project's name?** → Press Enter (or type `spyhair`)
- **In which directory is your code located?** → Press Enter (`./ ` is correct)
- **Want to modify settings?** → Press `N` (No)

Vercel will:
1. Build your project automatically
2. Deploy it to a production URL
3. Give you a live URL like: `https://spyhair-xxx.vercel.app`

### Step 4: Deploy Updates

Whenever you make changes, just run:

```powershell
vercel --prod
```

---

## Method 2: Vercel Website (Manual Upload)

### Step 1: Build Your Project

Double-click `build_project.bat` or run:

```powershell
npm run build
```

This creates a `dist` folder with your production files.

### Step 2: Deploy on Vercel Website

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New..."** → **"Project"**
3. Click **"Deploy"** without connecting Git
4. Drag and drop your entire project folder (or just the `dist` folder)
5. Vercel will detect it's a Vite project and deploy it

---

## Method 3: GitHub + Vercel (Best for Long-term)

### Step 1: Install Git

Download and install Git from [git-scm.com](https://git-scm.com/downloads)

### Step 2: Initialize Git Repository

```powershell
git init
git add .
git commit -m "Initial commit - SpyHair website"
```

### Step 3: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it `spyhair` (or whatever you prefer)
3. Don't initialize with README

### Step 4: Push to GitHub

```powershell
git remote add origin https://github.com/YOUR_USERNAME/spyhair.git
git branch -M main
git push -u origin main
```

### Step 5: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your `spyhair` repository
5. Vercel will auto-detect settings
6. Click **"Deploy"**

**Benefits:**
- Automatic deployments on every push to GitHub
- Preview deployments for branches
- Easy rollbacks
- Team collaboration

---

## Configuration Files

Your project includes:

- ✅ **vercel.json** - Handles client-side routing for React Router
- ✅ **.gitignore** - Excludes unnecessary files from Git
- ✅ **package.json** - Contains all dependencies and build scripts

---

## Environment Variables (If Needed)

If you add environment variables later:

1. Go to your project on Vercel
2. Click **Settings** → **Environment Variables**
3. Add your variables (e.g., `VITE_API_URL`)
4. Redeploy

---

## Custom Domain (Optional)

To use your own domain:

1. Go to your project on Vercel
2. Click **Settings** → **Domains**
3. Add your domain
4. Update your domain's DNS settings as instructed

---

## Troubleshooting

### Build Fails
- Make sure `npm run build` works locally first
- Check the build logs on Vercel for errors

### 404 on Routes
- Ensure `vercel.json` exists with the rewrite rules
- This handles React Router client-side routing

### Images Not Loading
- Check image URLs are correct
- External images (like from HairZilla) should work fine

---

## Quick Reference

**Deploy:** `vercel`  
**Deploy to Production:** `vercel --prod`  
**View Deployments:** `vercel ls`  
**Remove Project:** `vercel remove`

---

## Your Live URLs

After deployment, you'll get:
- **Production:** `https://spyhair.vercel.app` (or your custom domain)
- **Preview:** Unique URLs for each deployment

Share your production URL with anyone to show off your SpyHair website! 🎉
