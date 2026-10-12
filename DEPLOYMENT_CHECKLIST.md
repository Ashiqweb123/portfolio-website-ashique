# Netlify Deployment Checklist

## Before Deployment
- [ ] All dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] All images are in the correct paths
- [ ] No console errors in development
- [ ] All links work properly
- [ ] Responsive design tested

## Files Created
- [ ] `netlify.toml` - Netlify configuration
- [ ] `.gitignore` - Git ignore file
- [ ] `package.json` - Has correct build scripts

## Git Setup
- [ ] Repository initialized (`git init`)
- [ ] Files committed (`git add .` && `git commit -m "message"`)
- [ ] Pushed to GitHub (`git push origin main`)

## Netlify Deployment
- [ ] Connected GitHub repository
- [ ] Build settings configured:
  - Build command: `npm run build`
  - Publish directory: `build`
- [ ] Site deployed successfully
- [ ] Custom domain configured (optional)

## Post-Deployment Testing
- [ ] Site loads correctly
- [ ] All pages/sections work
- [ ] Images display properly
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] Dark/Light mode toggle works
- [ ] All project links work

## Common Issues & Solutions
- **Build fails**: Check package.json dependencies
- **Images not loading**: Ensure correct paths (use `/images/` for public folder)
- **404 errors**: Check netlify.toml redirects configuration
- **Slow loading**: Optimize images and check bundle size