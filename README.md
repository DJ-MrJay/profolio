# My Portfolio

This is a modern portfolio website, showcasing my skills, projects, and professional experience. The portfolio features responsive design, smooth animations, and a clean, professional aesthetic. It is built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/). It showcases my work, articles, and contact information in a clean single-page layout.

---

## 🔗 Live Demo

[Visit the live site](https://mrjay.co.ke/)  

---

## 🛠️ Tech Stack

- **Framework:** <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js ↗</a>  
- **Styling:** <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS ↗</a>  
- **UI Components:** <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">shadcn/ui ↗</a>  
- **Animations:** <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion ↗</a>  
- **Theme Toggle:** <a href="https://github.com/pacocoursey/next-themes" target="_blank" rel="noopener noreferrer">next-themes ↗</a>

---

## 📁 Features

- Fully responsive design
- Light and dark mode toggle
- Sticky, animated navbar with scroll detection
- Custom components: Navbar, Footer, Container, etc.
- Clean project structure for scalability
- SEO-friendly setup using Next.js `<Head>`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DJ-MrJay/next-portfolio.git
cd next-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure contact email

Create a local `.env.local` file with your SMTP settings before testing the
contact form.

```bash
SMTP_HOST=mail.mrjay.co.ke
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@mrjay.co.ke
SMTP_PASS=your-smtp-password
CONTACT_EMAIL_TO=contact@mrjay.co.ke
CONTACT_EMAIL_FROM=contact@mrjay.co.ke
```

If you use a full SMTP connection string instead, set `SMTP_URL` instead of
`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, and `SMTP_PASS`.

reCAPTCHA v3 is optional. To enable it, add both keys:

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
RECAPTCHA_MIN_SCORE=0.5
```

### 4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to view the project in your browser.

---

## 📸 Screenshots

<div align="center">
  <table>
    <tr>
      <td style="padding: 10px;"><img src="/public/assets/images/landing-page.jpg" alt="Homepage"/></td>
      <td style="padding: 10px;"><img src="/public/screenshots/about-page.jpg" alt="About Page"/></td>
    </tr>
    <tr>
      <td style="padding: 10px;"><img src="/public/screenshots/skills-section.jpg" alt="Skills & Experience Section"/></td>
      <td style="padding: 10px;"><img src="/public/screenshots/articles-section.jpg" alt="Articles Section"/></td>
    </tr>
    <tr>
      <td style="padding: 10px;"><img src="/public/screenshots/contact-section.jpg" alt="Contact Section"/></td>
      <td style="padding: 10px;"><img src="/public/screenshots/work-section.jpg" alt="Work Section"/></td>
    </tr>
  </table>
</div>

---

## 📄 License

This project is open-source and available under the [MIT Licence](./MIT.md).

## 🙋‍♂️ Author

**Jonah Wambua** - [GitHub](https://github.com/DJ-MrJay/) | [LinkedIn](https://www.linkedin.com/in/jonah-wambua/)
