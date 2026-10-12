# How to Update Project Links

## Current Project Links

Your Projects section is fully functional! Here are the current placeholder links:

### Project 1: Garments Order Tracking System
- **Client**: `https://github.com/ashiqweb123/garments-client`
- **Server**: `https://github.com/ashiqweb123/garments-server`
- **Live**: `https://garments-tracking.netlify.app/`

### Project 2: Krishi Link App
- **Client**: `https://github.com/ashiqweb123/krishi-client`
- **Server**: `https://github.com/ashiqweb123/krishi-server`
- **Live**: `https://krishi-app-project.netlify.app/`

### Project 3: Real Apps Project
- **Live**: `https://my-top-app.netlify.app/`
- (No client/server repos for this one)

## 🔧 How to Update Links

### Option 1: If Links Are Correct
If the links above are correct, you're all set! No changes needed.

### Option 2: Update Individual Links
Open `src/components/Projects.js` and find the `projects` array (around line 8).

Update the `links` object for each project:

```javascript
links: {
  client: 'YOUR_ACTUAL_CLIENT_REPO_URL',
  server: 'YOUR_ACTUAL_SERVER_REPO_URL',
  live: 'YOUR_ACTUAL_LIVE_SITE_URL'
}
```

### Example:
```javascript
{
  title: 'Garments Order Tracking System',
  // ... other properties ...
  links: {
    client: 'https://github.com/YOUR-USERNAME/garments-client',
    server: 'https://github.com/YOUR-USERNAME/garments-server',
    live: 'https://garments-live.netlify.app/'
  }
}
```

## 📸 Update Project Images

Replace the placeholder images in `src/assets/images/`:
- `project1.png` - Screenshot of Garments system
- `project2.png` - Screenshot of Krishi Link
- `project3.png` - Screenshot of Real Apps

**Recommended size**: 800x600px or similar aspect ratio

## ✅ After Updating

1. Save the file
2. Test locally: `npm start`
3. Click each link to verify they work
4. Rebuild: `npm run build`
5. Redeploy to Netlify

## 🎨 Customize Further

You can also update:
- **Project titles**
- **Descriptions**
- **Technologies** (will auto-color based on tech name)
- **Features** (bullet points)

All in the same `projects` array in `src/components/Projects.js`!
