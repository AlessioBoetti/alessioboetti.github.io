# Data Scientist Portfolio

A clean, professional portfolio website for data scientists, hosted for free on GitHub Pages.

## 🚀 Quick Start - Deploy to GitHub Pages

### Prerequisites
- A GitHub account
- Git installed on your computer
- Your portfolio content ready to add

### Step 1: Create Repository
1. Go to [GitHub](https://github.com) and sign in
2. Create a new repository named `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
3. Make sure it's set to **Public**
4. Do NOT initialize with README (we already have one)

### Step 2: Prepare Your Files
1. Download/clone this portfolio folder to your computer
2. Navigate to the portfolio folder in your terminal/command prompt

### Step 3: Deploy to GitHub

Run these commands in your terminal (one at a time):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select branch: **main** and folder: **/ (root)**
5. Click **Save**

### Step 5: View Your Site
Your site will be live at: `https://yourusername.github.io` (usually within 1-2 minutes)

---

## ✏️ Customization Guide

### Update Personal Information

#### 1. **index.html**
Open `index.html` and search for comments starting with `<!-- EDIT:` - these mark all the sections you need to customize:

- **Hero Section** (lines ~20-35): Update name, title, and tagline
- **Skills** (lines ~40-60): Add/remove your tech skills
- **Projects** (lines ~65-150): Update all 3 project cards with your actual projects
- **About** (lines ~155-180): Add your bio and expertise
- **Contact** (lines ~185-210): Update email and social links

#### 2. **styles.css**
If you want to customize colors, fonts, or spacing:
- Open `assets/css/styles.css`
- Edit the CSS variables at the top (lines 10-30)
- Current palette is inspired by the Björk WordPress theme (minimal, clean)

#### 3. **Add Your Images**

**Profile Photo:**
- Add your photo to `assets/images/` (e.g., `profile.jpg`)
- In `index.html`, replace the placeholder `<div class="profile-placeholder">` with:
  ```html
  <img src="assets/images/profile.jpg" alt="Your Name">
  ```

**Project Screenshots:**
- Add screenshots to `assets/images/` (e.g., `project1.jpg`, `project2.jpg`, `project3.jpg`)
- Update image paths in the project cards

#### 4. **Add Your Resume**
- Save your resume as `resume.pdf` in the root folder
- Or update the download link in the hero section

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file - EDIT THIS
├── README.md               # This file
├── resume.pdf              # Your resume PDF (add your own)
└── assets/
    ├── css/
    │   └── styles.css      # All styles - EDIT for design changes
    ├── js/
    │   └── main.js         # Minimal JavaScript for interactions
    └── images/
        ├── project1.jpg    # ADD: Project screenshot 1
        ├── project2.jpg    # ADD: Project screenshot 2
        ├── project3.jpg    # ADD: Project screenshot 3
        └── profile.jpg     # ADD: Your professional headshot
```

---

## 🎨 Design Features

- **Björk-inspired Design**: Clean, minimal aesthetic with excellent readability
- **Fully Responsive**: Looks great on mobile, tablet, and desktop
- **Subtle Animations**: Smooth fade-ins and hover effects
- **Accessible**: Semantic HTML, proper ARIA labels, keyboard navigation
- **Fast Loading**: Minimal CSS (~10KB), no heavy frameworks
- **SEO Friendly**: Proper meta tags and semantic structure

---

## 🛠️ Local Development

To preview your site locally before deploying:

1. **Simple Method**: Just open `index.html` in your web browser

2. **With Local Server** (recommended for testing):
   ```bash
   # If you have Python installed:
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

---

## 📝 Content Guidelines

### Projects Section
Each project should include:
- **Title**: Clear, concise project name
- **Description**: 2-4 sentences covering:
  - What problem did you solve?
  - What approach/methods did you use?
  - What were the results/metrics?
- **Technologies**: List 3-5 key technologies
- **Links**: GitHub repo and/or live demo

### About Section
Write 2-4 sentences covering:
- Your background and experience
- Your specializations
- What drives you / your mission

### Skills
List 10-20 of your most relevant technical skills

---

## 🔧 Advanced Customization

### Change Color Scheme
Edit CSS variables in `assets/css/styles.css` (lines 10-20):
```css
:root {
    --color-bg: #ffffff;          /* Background color */
    --color-text: #1a1a1a;        /* Text color */
    --color-accent: #2d2d2d;      /* Accent/button color */
    /* etc. */
}
```

### Add More Projects
Copy an entire `<article class="project-card">` block and paste it within the projects grid. Update all content.

### Change Fonts
The site uses Inter font from Google Fonts. To use a different font:
1. Update the Google Fonts link in `index.html` (line ~10)
2. Update `--font-primary` in `styles.css`

---

## 🐛 Troubleshooting

**Site not showing up after deploy?**
- Wait 2-3 minutes after pushing
- Check GitHub Pages settings (Settings → Pages)
- Make sure repository is named correctly: `username.github.io`
- Ensure repository is set to Public

**Images not loading?**
- Check file paths are correct (case-sensitive)
- Make sure images are in `assets/images/` folder
- Verify images were pushed to GitHub: `git add assets/images/*`

**Want to update your site?**
1. Make changes to your files locally
2. Run:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Changes will appear within 1-2 minutes

---

## 📄 License

Free to use and modify for your personal portfolio. 

---

## 🤝 Credits

- Design inspired by [Björk WordPress Theme](https://wordpress.org/themes/bjork/) by Anders Norén
- Icons: Inline SVG (no external dependencies)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson

---

## 💡 Tips for Success

1. **Keep it Updated**: Regularly add new projects as you complete them
2. **Show Impact**: Always include metrics and results in project descriptions
3. **Quality over Quantity**: 3-5 great projects beat 10 mediocre ones
4. **Mobile First**: Most recruiters will view on mobile - test it!
5. **Proofread**: Have someone review your content for typos
6. **Link to GitHub**: Make sure your GitHub profile is polished too
7. **Custom Domain** (optional): You can add a custom domain in GitHub Pages settings

---

**Questions or Issues?**
Open an issue on the GitHub repository or reach out via the contact information in your portfolio.

**Good luck with your job search! 🚀**