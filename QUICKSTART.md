# 🚗 NAJEM Quick Start Guide

## 5-Minute Setup

### Step 1: Clone & Install
```bash
# Install dependencies
npm install
```

### Step 2: Setup MongoDB
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up (free account)
3. Create a cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string

### Step 3: Configure Environment
1. Create `.env.local` file in root directory
2. Paste your MongoDB URI:
```env
MONGODB_URI=your_connection_string_here
```

### Step 4: Run Development Server
```bash
npm run dev
```

### Step 5: Access the Platform
- **Customer Site**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin

## 🎯 Quick Admin Tutorial

### Add Your First Category
1. Go to http://localhost:3000/admin/categories
2. Click "Add Category"
3. Enter name, description
4. Click Save

### Add a Brand
1. Go to http://localhost:3000/admin/brands
2. Click "Add Brand"
3. Fill in brand details
4. Click Save

### Add a Vehicle
1. Go to http://localhost:3000/admin/vehicles
2. Click "Add Vehicle"
3. Select brand and category
4. Fill in all specifications (horsepower, acceleration, etc.)
5. Set price and availability
6. Click Save

## 🎨 Customize Your Store

### Change Colors
Edit `/app/globals.css` to modify:
- `--neon-cyan`: Primary accent color
- `--neon-magenta`: Secondary accent
- `--neon-lime`: Success color
- `--neon-yellow`: Warning color

### Change Logo/Branding
Edit `/components/header.tsx` to update:
- Company name
- Logo/icon
- Navigation links

### Change Content
Edit `/lib/vehicle-data.ts` to modify:
- Sample data
- Default categories
- Featured vehicles

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project" → Select your repo
4. Add `MONGODB_URI` env variable
5. Deploy!

## 💡 Features Overview

### For Customers
✅ Browse luxury & sports cars
✅ Filter by category and brand
✅ View detailed specifications
✅ Responsive mobile design
✅ Multi-language support (EN, FR, ZH)
✅ Beautiful Fast & Furious inspired design

### For Admins
✅ Manage vehicle inventory
✅ Create/edit categories
✅ Manage brands
✅ Real-time dashboard
✅ Advanced search & filtering
✅ Bulk operations

## 🆘 Need Help?

### Common Issues

**MongoDB Connection Failed**
- Check your MONGODB_URI is correct
- Verify IP whitelist in MongoDB Atlas
- Ensure network is connected

**Admin page won't load**
- Clear browser cache
- Check browser console for errors
- Restart dev server

**Styles look broken**
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run dev`
- Check globals.css is imported

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [MongoDB Atlas Guide](https://docs.atlas.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com)

## 🎬 Inspired by Fast & Furious

This platform captures the speed, style, and drama of the Fast and Furious franchise. Dark theme with neon accents creates an immersive shopping experience that makes buyers want to drive away in their dream car!

---

Ready to revolutionize your car sales? Let's go! 🏁
