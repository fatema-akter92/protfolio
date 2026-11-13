# Personal Portfolio Website - Fatema Akter (Meem)

Aspiring Network Engineer &amp; Backend Developer | Network Architecture | Cloud &amp; Infrastructure
Computer Science &amp; Engineering Student Exploring Full Stack Development | Computer Networking Enthusiast Focused on building scalable and real-world software systems

Live Demo: [http://localhost:5173](http://localhost:5173)  
GitHub Profile: [https://github.com/fatema-akter92](https://github.com/fatema-akter92)  
LinkedIn: [https://www.linkedin.com/in/fatema-akter-meem-502342334](https://www.linkedin.com/in/fatema-akter-meem-502342334)

---

## 🚀 Features Implemented

### 1. Required Sections
- **A. Navbar**:
  - Displays Logo (`FA`) and name.
  - Smooth-scrolling links: *Home*, *About*, *Skills*, *Projects*, *Contact*.
  - Fully responsive with mobile drawer / hamburger menu.
  - Active section highlighting on scroll.
- **B. Home / Hero Section**:
  - Full Name: **Fatema Akter** (*Meem*).
  - Professional Title: **Frontend & Full Stack Developer**.
  - Short introduction & location metadata.
  - Profile picture with modern gradient border and glow effects.
  - **Two Action Buttons**: `Download CV` and `View Projects`.
- **C. About Me**:
  - Comprehensive bio describing background and passion.
  - Educational Background at **Daffodil International University (DIU)**.
  - Career goals and technical aspirations.
  - Profile metadata (Location, Email, Degree, Availability status).
- **D. Skills Section**:
  - Interactive category filter (*All*, *Frontend*, *Backend*, *Tools*).
  - Visual cards with proficiency progress bars (HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Python, Django, Git & GitHub, etc.).
  - Tech badge cloud.
- **E. Projects Section**:
  - Features real projects from GitHub repository stored in an array and displayed using `.map()`.
  - Filter projects by technology (*React*, *JavaScript*, *Full Stack*, *AI & Python*).
  - Each card includes: Project screenshot, title, description, technology tags, **Live Demo** button, and **GitHub** button.
- **F. Contact Section**:
  - Controlled form inputs using React `useState`.
  - Handled submission via `onSubmit`.
  - Comprehensive validation for all required fields (Name, Email, Subject, Message) and email format.
  - Success message banner upon valid submission with automatic form reset.
- **G. Footer**:
  - Display name and professional tagline.
  - Social media links (GitHub, LinkedIn, Facebook, Email).
  - Dynamic copyright notice.

### 2. Additional Features (All 5 Implemented! 🌟)
1. **Dark/Light Mode**: Smooth theme toggle button with `localStorage` persistence and system preference detection.
2. **Project Filtering**: Dynamic filtering by technology category.
3. **Mobile Responsive**: Fully adaptive design for mobile, tablet, and desktop viewports.
4. **Scroll to Top**: Floating button with smooth return-to-top interaction.
5. **Dynamic Navbar**: Real-time active navigation link indicator tracked via scroll position.
6. **Bonus Interactive CV Modal**: Preview and download formatted resume directly.

---

## 💻 Tech Stack
- **Library**: React 19 (Functional Components & Hooks)
- **Tooling**: Vite 8
- **Styling**: Tailwind CSS v4 & Modern Glassmorphism
- **Icons**: Lucide React & Custom SVG Brand Icons
- **Fonts**: Plus Jakarta Sans & JetBrains Mono

---

## 🛠️ How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to: **`http://localhost:5173`**

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Deployment Instructions

### Deploy on Vercel
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal Portfolio Website"
   git branch -M main
   git remote add origin https://github.com/fatema-akter92/portfolio-react.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio-react` repository.
4. Keep the default settings (Framework Preset: **Vite**, Root Directory: `./`).
5. Click **"Deploy"**!

### Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select GitHub and pick the repository.
4. Build command: `npm run build`  
   Publish directory: `dist`
5. Click **"Deploy site"**!

---

© 2026 Fatema Akter. All rights reserved.
