# 📘 Complete Setup Guide for DMA Rentals Website

## 🎯 Step-by-Step Installation

### Step 1: Prepare Your System

**Install Node.js (if not already installed):**

1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Install and verify:
```bash
node --version  # Should show v18 or higher
npm --version   # Should show v9 or higher
```

### Step 2: Get the Project Files

You have the complete project in the `dmarealtors` folder.

### Step 3: Install Dependencies

Open terminal/command prompt in the project folder:

```bash
cd dmarealtors
npm install
```

This will install all required packages (~2-3 minutes).

### Step 4: Start Development Server

```bash
npm run dev
```

You'll see:
```
  VITE v8.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/dmarealtors/
  ➜  Network: use --host to expose
```

Open http://localhost:5173/dmarealtors/ in your browser!

## 🔄 Upgrading All Packages to Latest

### Method 1: Using npx (Recommended - No Installation)

```bash
# Check what can be updated
npx npm-check-updates

# Update package.json to latest versions
npx npm-check-updates -u

# Install the updated packages
npm install
```

### Method 2: Using npm-check-updates (Global Install)

```bash
# Install globally (one time)
npm install -g npm-check-updates

# Check updates
ncu

# Update package.json
ncu -u

# Install
npm install
```

### Method 3: Manual Updates

```bash
# Check what's outdated
npm outdated

# Update specific package
npm install react@latest
npm install react-dom@latest
# etc.
```

## 📁 Project Folder Structure Explained

```
dmarealtors/
│
├── 📄 index.html              # Main HTML file (entry point)
├── 📄 package.json            # Project dependencies & scripts
├── 📄 vite.config.ts          # Vite build configuration
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 README.md               # Project documentation
├── 📄 .gitignore              # Git ignore rules
│
├── 📂 src/                    # Source code folder
│   ├── 📄 main.tsx            # JavaScript entry point
│   ├── 📄 App.tsx             # Main React component with routing
│   ├── 📄 vite-env.d.ts       # TypeScript definitions
│   │
│   ├── 📂 components/         # Reusable UI components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Footer.tsx         # Footer section
│   │   └── PropertyCard.tsx   # Property display card
│   │
│   ├── 📂 pages/              # Page components
│   │   ├── Home.tsx           # Home page
│   │   ├── About.tsx          # About us page
│   │   ├── Services.tsx       # Services page
│   │   ├── Properties.tsx     # Properties listing page
│   │   └── Contact.tsx        # Contact page
│   │
│   ├── 📂 data/               # Static data & types
│   │   └── properties.ts      # Property listings, testimonials, loan types
│   │
│   └── 📂 styles/             # CSS styles
│       └── index.css          # Global styles & Tailwind config
│
├── 📂 dist/                   # Production build (created after build)
└── 📂 node_modules/           # Installed dependencies (auto-generated)
```

### What Each Folder Contains:

**Keep/Edit:**
- ✅ `src/` - All your source code
- ✅ `src/components/` - UI building blocks
- ✅ `src/pages/` - Website pages
- ✅ `src/data/` - Property data, testimonials
- ✅ `src/styles/` - Design & colors
- ✅ `index.html` - Main HTML
- ✅ `package.json` - Dependencies
- ✅ Config files (vite.config.ts, tsconfig.json)

**Don't Touch:**
- ❌ `node_modules/` - Auto-generated
- ❌ `dist/` - Auto-generated during build

## 🎨 Customization Guide

### 1. Change Colors

Edit `src/styles/index.css`:

```css
@theme {
  --color-primary: #1a3a2e;        /* Change main color */
  --color-accent: #c8a875;         /* Change accent color */
}
```

### 2. Update Contact Information

**Phone Number:** Search and replace `+918618938686` in all files
**Email:** Search and replace `info@dmarentals.com`
**Address:** Search and replace `Singapura, Bengaluru – 560097`

Files to update:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`
- `index.html`

### 3. Add/Edit Properties

Edit `src/data/properties.ts`:

```typescript
export const properties: Property[] = [
  {
    id: 1,
    title: "New Property Name",
    type: "rental",  // or "sale"
    category: "residential",  // or "commercial"
    propertyType: "Apartment",
    price: "₹25,000/month",
    location: "Location Name",
    area: "1,450 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://image-url.com/image.jpg",
    featured: true,
    description: "Property description here",
    amenities: ["Parking", "Security", "Power Backup"]
  }
  // Add more properties...
];
```

### 4. Change Fonts

Edit `index.html` Google Fonts link and `src/styles/index.css`:

```css
@theme {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### 5. Update Business Name

Search and replace:
- `DMA Rentals` → Your business name
- `dmarealtors` → your-business-name (in URLs)

## 🚀 Building for Production

### Create Production Build

```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Preview Production Build Locally

```bash
npm run preview
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/dmarealtors.git
git push -u origin main
```

3. Deploy:
```bash
npm run deploy
```

Your site will be live at: `https://YOUR-USERNAME.github.io/dmarealtors/`

### Option 2: Vercel (Free)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 3: Netlify (Free)

1. Build the project:
```bash
npm run build
```

2. Drag & drop the `dist` folder to Netlify: https://app.netlify.com/drop

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 5173 already in use

**Solution:**
```bash
# Use different port
npm run dev -- --port 3000
```

### Issue: Images not loading

**Solution:**
- Check internet connection (images use external URLs)
- Replace image URLs in `src/data/properties.ts`

### Issue: Build fails

**Solution:**
```bash
# Check TypeScript errors
npx tsc --noEmit

# Fix any reported errors
```

## 📊 Performance Optimization Tips

1. **Optimize Images:**
   - Use WebP format
   - Compress images (use TinyPNG)
   - Use appropriate sizes

2. **Enable Caching:**
   - Configure in hosting platform

3. **Lazy Loading:**
   - Already enabled for images

4. **Bundle Size:**
   - Check with: `npm run build -- --mode analyze`

## 🔐 Security Best Practices

1. **Never commit sensitive data:**
   - API keys
   - Passwords
   - Private information

2. **Keep dependencies updated:**
```bash
npm audit
npm audit fix
```

3. **Use HTTPS:**
   - Enable in hosting platform

## 📞 Getting Help

If you encounter issues:

1. Check this guide first
2. Read error messages carefully
3. Search error on Google/Stack Overflow
4. Contact: +91 86189 38686

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] All contact information is correct
- [ ] Property listings are accurate
- [ ] Links work (test all navigation)
- [ ] Forms submit correctly
- [ ] Mobile responsive (test on phone)
- [ ] Images load properly
- [ ] SEO meta tags are set
- [ ] Google Analytics added (optional)
- [ ] SSL certificate enabled
- [ ] Domain name configured

## 🎉 You're Ready!

Your DMA Rentals website is now set up and ready to launch!

**Next Steps:**
1. Customize content
2. Add real property images
3. Test thoroughly
4. Deploy to production
5. Share with the world!

---

**Happy Building! 🏗️**

*From Finding Spaces to Funding Dreams* 🏢
