# Anar Modi - Professional Portfolio

A modern, responsive React portfolio website showcasing the professional experience and skills of Anar Modi, a PMP® Certified IT Project Manager.

## 🌟 Features

### ✨ **Complete Sections**
- **Hero Section** - Animated introduction with availability badge and call-to-action buttons
- **About** - Professional journey, statistics, and core strengths
- **Skills** - Interactive skill bars with categories and proficiency levels
- **Experience** - Timeline layout with detailed work history
- **Certifications** - Professional certifications and achievements
- **Projects** - Filterable project showcase with detailed information
- **Contact** - Contact form with EmailJS integration
- **Footer** - Social links, quick navigation, and last updated date

### 🎨 **Design & Animations**
- **Unique Design** - Modern glassmorphism effects with gradient backgrounds
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Interactive Elements** - Hover effects, scroll-triggered animations
- **Custom Scrollbar** - Styled scrollbar with gradient colors

### 🚀 **Advanced Features**
- **Floating "Hire Me" Button** - Expandable quick action menu
- **Smooth Scrolling Navigation** - One-page navigation with active states
- **Contact Form** - EmailJS integration for direct messaging
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Google Analytics Ready** - Just add your tracking ID
- **Resume Download** - Hosted PDF download functionality

### 📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Flexible grid layouts

## 🛠️ **Tech Stack**

- **Frontend**: React 18, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Email Service**: EmailJS
- **Build Tool**: Create React App
- **Styling**: Custom CSS with Tailwind utilities

## 📋 **Prerequisites**

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 **Getting Started**

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/anar-modi-portfolio.git
cd anar-modi-portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure EmailJS (Optional)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `src/components/Contact.js`:
```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // Replace with your service ID
  'YOUR_TEMPLATE_ID',   // Replace with your template ID
  form.current,
  'YOUR_PUBLIC_KEY'     // Replace with your public key
);
```

### 4. Add Google Analytics (Optional)
Update the Google Analytics tracking ID in `public/index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_TRACKING_ID');
</script>
```

### 5. Replace Resume PDF
Replace `public/resume.pdf` with your actual resume file.

### 6. Start Development Server
```bash
npm start
# or
yarn start
```

The application will open at `http://localhost:3000`

## 🏗️ **Build for Production**

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## 📁 **Project Structure**

```
src/
├── components/
│   ├── Navigation.js       # Fixed navigation with smooth scrolling
│   ├── Hero.js            # Hero section with animations
│   ├── About.js           # About section with stats
│   ├── Skills.js          # Skills with animated progress bars
│   ├── Experience.js      # Timeline-based experience
│   ├── Certifications.js  # Certifications and achievements
│   ├── Projects.js        # Filterable project showcase
│   ├── Contact.js         # Contact form with EmailJS
│   ├── Footer.js          # Footer with social links
│   └── FloatingHireButton.js # Floating action button
├── App.js                 # Main app component
├── index.js              # App entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 **Customization**

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Purple gradient (#a855f7 to #9333ea)

### Content
Update the content in each component file to match your information:
- Personal details in `Hero.js`
- Professional experience in `Experience.js`
- Skills and certifications in respective components
- Project portfolio in `Projects.js`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Tailwind classes in JSX
- Custom animations: Framer Motion variants

## 📧 **EmailJS Setup**

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{company}}` - Sender's company
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Update the credentials in the Contact component

## 🔧 **Performance Optimizations**

- **Lazy Loading**: Components load on scroll
- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Automatic code splitting with Create React App
- **Minification**: Production build is minified and optimized
- **Caching**: Proper cache headers for static assets

## 📱 **Browser Support**

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 **Deployment**

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
The build folder can be deployed to any static hosting service.

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/anar-modi-portfolio/issues).

## 📞 **Contact**

**Anar Modi**
- Email: anarhmodi@gmail.com
- Phone: +91 97222 32832
- LinkedIn: [linkedin.com/in/anarmodi](https://www.linkedin.com/in/anarmodi/)

---

⭐ **Star this repository if you found it helpful!**