# Data Scientist Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, designed for deployment on GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone this repository**
```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   cd YOUR-USERNAME.github.io
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start development server**
```bash
   npm start
```
   Your site will open at `http://localhost:3000`

## ✏️ Customize Your Portfolio

### Update Personal Information
Edit `src/App.js` and find the `portfolioData` object (around line 50):
```javascript
const portfolioData = {
  name: "Your Name Here",
  title: "Your Title Here",
  tagline: "Your tagline...",
  bio: "Your bio...",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername", // Optional
  resumeUrl: "/resume.pdf",
  
  skills: [
    // Add your skills here
  ],
  
  projects: [
    // Add your projects here
  ]
};
```

### Add Your Resume
Place your resume PDF in the `public/` folder and name it `resume.pdf`

### Add Project Images
1. Place images in `public/images/`
2. Update project objects with image paths:
```javascript
   image: "/images/project1.png"
```

### Update Colors (Optional)
Edit `tailwind.config.js` to customize the color scheme

## 📤 Deploy to GitHub Pages

### First-Time Setup

1. **Update package.json**
   Replace `YOUR-USERNAME` with your GitHub username:
```json
   "homepage": "https://YOUR-USERNAME.github.io"
```

2. **Create GitHub repository**
   - Go to GitHub and create a new repository
   - Name it exactly: `YOUR-USERNAME.github.io`
   - Make it public

3. **Deploy with these commands**
```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio commit"
   
   # Add remote (replace YOUR-USERNAME)
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   
   # Push to main branch
   git branch -M main
   git push -u origin main
   
   # Install gh-pages package
   npm install --save-dev gh-pages
   
   # Deploy to GitHub Pages
   npm run deploy
```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source should be set to `gh-pages` branch
   - Your site will be live at `https://YOUR-USERNAME.github.io`

### Update Your Portfolio Later
```bash
# Make your changes to the code
# Then run:
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## 🎨 Design Features

- ✅ Minimal, clean design inspired by Björk WordPress theme
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Fade-in animations
- ✅ Project modal for detailed views
- ✅ Accessible and semantic HTML
- ✅ Fast loading with optimized React build

## 📁 Project Structure
```
portfolio/
├── public/           # Static files
│   ├── index.html   # HTML template
│   └── resume.pdf   # Your resume (add this)
├── src/
│   ├── App.js       # Main React component (EDIT THIS)
│   ├── index.js     # React entry point
│   └── index.css    # Global styles with Tailwind
├── package.json     # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
└── README.md        # This file
```

## 🛠 Technologies Used

- React 18
- Tailwind CSS
- Lucide React (icons)
- GitHub Pages

## 📝 License

This project is open source and available for personal use.

## 💬 Support

If you encounter issues deploying to GitHub Pages, check:
1. Repository name is exactly `YOUR-USERNAME.github.io`
2. Repository is public
3. GitHub Pages is enabled in settings
4. `homepage` in package.json matches your GitHub Pages URL

---

Built with ❤️ and GitHub Pages