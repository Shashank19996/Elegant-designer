# Deploying Elegant Designer to Vercel

This guide will walk you through deploying your Elegant Designer website to Vercel.

## Preparation

We've already prepared your project for Vercel deployment:
- Created a `vercel.json` configuration file
- Created a `build` directory with all necessary files
- Set up serverless API endpoints in the `api` folder

## Deployment Steps

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com) and sign up for an account
   - You can sign up with GitHub, GitLab, Bitbucket, or email

2. **Install Vercel CLI (Optional, if you want to deploy from command line)**
   - We've already installed it for you with `npm install -g vercel`

3. **Deploy via Vercel Dashboard (Easiest Method)**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Connect your GitHub account if you haven't already
   - Import your repository (or you can drag and drop your project folder directly)
   - Configure your project settings:
     - Framework Preset: "Other"
     - Build Command: Leave empty (we've already built the site)
     - Output Directory: "build"
   - Click "Deploy"

4. **Alternatively, Deploy via Vercel CLI**
   - Open a terminal in your project directory
   - Run `vercel login` and follow the prompts to log in
   - Run `vercel` and follow the interactive prompts
   - For production deployment, run `vercel --prod`

5. **Update Environment Variables (if needed)**
   - In your Vercel dashboard, go to your project settings
   - Add any environment variables needed for the project

## After Deployment

- Vercel will provide you with a URL where your site is deployed
- You can set up a custom domain in the Vercel dashboard
- Each time you push changes to your connected repository, Vercel will automatically redeploy

## Troubleshooting

- If your API endpoints aren't working, check the Vercel Function Logs in your dashboard
- Make sure your API routes are correctly defined in the `vercel.json` file
- Ensure all server-side code is properly configured for serverless environment

## Need Help?

- Check [Vercel Documentation](https://vercel.com/docs)
- Visit [Vercel Support](https://vercel.com/support)
