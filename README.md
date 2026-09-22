# 360 Degrees Consulting — Official Website

Welcome to the official website repository for **360 Degrees Consulting** (`RESEARCH • STRATEGY • IMPACT`).

This website is custom-built with pure HTML5, CSS3, and vanilla JavaScript. It uses **no heavy external frameworks or build tools**, making it exceptionally fast, lightweight, secure, and easy to maintain by anyone on the team.

---

## 1. Repository Structure

Here is a quick overview of how files and folders are organised:

```text
project-360/
├── index.html                  # Homepage (complete 12 sections)
├── about.html                  # About Us page
├── talent-ecosystem.html       # Talent Ecosystem & USP page
├── services.html               # Practice areas index page
├── work.html                   # Case studies & client work portfolio
├── insights.html               # 360° Insights hub (research & memos)
├── team.html                   # Team directory (leadership, advisory, core, ecosystem)
├── contact.html                # Contact & project inquiry form
├── careers.html                # Careers & fellowship application page
├── privacy.html                # Privacy policy
├── terms.html                  # Terms of engagement
├── 404.html                    # Custom 404 error page
├── sitemap.xml                 # Search engine sitemap with page priorities
├── robots.txt                  # Search engine crawler instructions
│
├── css/
│   └── style.css               # Global stylesheets, typography, grid, and themes
│
├── js/
│   ├── config.js               # Global site configuration (navigation links & footer data)
│   └── site.js                 # Global navbar/footer injector and mobile menu logic
│
├── data/
│   ├── insights.js             # Data file containing all articles & research reports
│   └── work.js                 # Data file containing all case studies & projects
│
├── services/                   # Individual practice area pages
│   ├── strategy.html
│   ├── market-research.html
│   ├── marketing-brand.html
│   ├── growth-gtm.html
│   ├── finance.html
│   ├── operations.html
│   ├── outreach-partnerships.html
│   ├── education-institutional.html
│   └── custom-specialised.html
│
├── insights/                   # Article & research report templates
│   ├── report-template.html
│   └── memo-template.html
│
├── work/                       # Case study templates
│   └── case-template.html
│
└── assets/                     # Logos, icons, portraits, and brand imagery
    ├── logo.png
    └── og-image.jpg (placeholder for 1200x630 social preview image)
```

---

## 2. How to Edit Team Members

All team member information is kept in `team.html`:
1. Open [`team.html`](team.html) in your text editor.
2. Scroll to the relevant section:
   - **Leadership** (Founders / Partners)
   - **Strategic Advisory Council**
   - **Core Team** (Engagement Managers, Lead Analysts)
   - **Talent Ecosystem** (Specialist roster across IITs, IIMs, DU)
3. Locate the card you want to modify and edit the details:
   - Name
   - Role / Title
   - College / Institution (e.g., `IIT Delhi`, `IIM Ahmedabad`, `SRCC`)
   - 2-line bio description
   - LinkedIn profile URL
4. Save the file. The changes are live immediately.

---

## 3. How to Add a New Insight or Article

All articles and research memos are managed in a simple data file that acts as our content management system (CMS):
1. Open [`data/insights.js`](data/insights.js).
2. Look at the existing articles inside the `window.INSIGHTS_DATA` array.
3. Copy one of the existing objects, paste it at the top of the array, and update the fields:
   ```javascript
   {
     id: "new-article-slug",
     type: "report", // or "memo"
     title: "Your Article Title Here",
     subtitle: "A short one-line summary of what this piece covers.",
     category: "Strategy & GTM", // e.g. Market Research, Finance & Economics, etc.
     author: "Author Name",
     authorLinkedIn: "https://www.linkedin.com/in/...",
     date: "October 2026",
     readingTime: "6 min read",
     summary: "A 2-3 sentence overview shown in preview cards.",
     keyTakeaways: [
       "First key empirical takeaway.",
       "Second key empirical takeaway.",
       "Third key empirical takeaway."
     ],
     featured: true // set true to feature on the homepage / hub header
   }
   ```
4. Save the file. The insights hub ([`insights.html`](insights.html)) and homepage teaser will automatically show your new article.

---

## 4. How to Add a New Case Study

Case studies work the same way as insights:
1. Open [`data/work.js`](data/work.js).
2. Look at the `window.WORK_DATA` array.
3. Duplicate an existing object and update the fields:
   ```javascript
   {
     id: "market-expansion-fintech",
     title: "Market Expansion Strategy for Series A Fintech",
     client: "Confidential — FinTech Startup",
     sector: "Financial Services",
     serviceAreas: ["Strategy", "Market & Research", "Growth & GTM"],
     duration: "6 weeks",
     year: "2026",
     problem: "Short description of the client's business challenge.",
     approach: "Summary of research and strategic methodology deployed.",
     deliverables: [
       "Market sizing and TAM breakdown across Tier 1 & 2 cities",
       "Competitive matrix analysing 8 incumbent players",
       "Phased 12-month commercial rollout architecture"
     ],
     impact: "High-impact summary or key outcome metric achieved."
   }
   ```
4. Save the file. The work portfolio page ([`work.html`](work.html)) will instantly display the updated case study and filters.

---

## 5. How to Add a New Practice Area / Service Page

1. Inside the `services/` directory, duplicate an existing service file (such as `services/strategy.html`) and rename it (e.g. `services/new-service.html`).
2. Open your new file and edit:
   - `<title>` and `<meta name="description">` in the `<head>`
   - The H1 title and eyebrow label in the `.page-header` band
   - Core offerings, methodology points, and client deliverables
3. Open [`services.html`](services.html) and add a card linking to your new page.
4. If you want it in the global navigation menu, add it to [`js/config.js`](js/config.js).
5. Add the new page URL to [`sitemap.xml`](sitemap.xml).

---

## 6. How to Edit the Navigation Bar and Footer

The site uses a unified global header and footer driven by [`js/config.js`](js/config.js). You do not need to update 20 different HTML files when changing links:
1. Open [`js/config.js`](js/config.js).
2. To modify top navbar links, edit the `navLinks` array.
3. To modify footer links, edit the `footerColumns` or `legalLinks` arrays.
4. Save the file. The changes will instantly reflect across every page on the entire site.

---

## 7. How to Connect the Contact Form to Email

The contact form is configured to work out-of-the-box with **Formspree** (a free form-to-email handling service):
1. Sign up for a free account at [Formspree.io](https://formspree.io).
2. Create a new form and copy your unique Form ID (e.g., `xpwzqabk`).
3. Open [`contact.html`](contact.html).
4. Locate the `<form>` tag:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```
5. Replace `YOUR_FORMSPREE_ID` with your actual Formspree ID.
6. Now, whenever someone submits a project inquiry, it will be emailed directly to your inbox.

---

## 8. Launch Checklist: Find and Replace Placeholders

Before officially launching the website on your custom domain, perform these two simple global search-and-replace steps in your editor:

1. **Domain Name**:
   - Find: `[DOMAIN PLACEHOLDER]`
   - Replace with your actual domain (e.g. `360degreesconsulting.in` or `360degreesconsulting.com`).
   - This updates all canonical links, Open Graph social tags, Twitter cards, `sitemap.xml`, and `robots.txt`.

2. **Social Preview Image**:
   - Create a branded 1200x630px JPG image representing the firm.
   - Save it as `assets/og-image.jpg`.
   - Ensure the Open Graph image tags point to `https://your-domain.com/assets/og-image.jpg`.

---

## 9. How to Deploy (Zero Configuration)

Because this website uses clean standard HTML, CSS, and JavaScript with no build steps, deployment is instant and free.

### Recommended: Vercel
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Leave all settings at their default values (no build command or output directory needed).
5. Click **"Deploy"**. Your site is live in under 15 seconds with global CDN caching and free automatic SSL certificates.
6. Under Project Settings → Domains, connect your custom domain (e.g., `360degreesconsulting.com`).

### Alternative: Netlify or GitHub Pages
- **Netlify**: Drag and drop the folder onto the Netlify dashboard, or connect the GitHub repository.
- **GitHub Pages**: Go to repository Settings → Pages → select `master` branch → root `/` → Save.

---

## 10. Technical Specifications & Guidelines

- **Typography**: Playfair Display (editorial serif) & Inter (clean modern sans-serif).
- **Colour Palette**:
  - Deep Navy: `#0a192f`
  - Slate Blue: `#1e3a5f`
  - Warm Amber: `#c48b28` / Accent Amber: `#d49a3d`
  - Off-White Background: `#f8f9fa`
  - Dark Charcoal Text: `#1f2937`
  - Muted Grey Text: `#64748b`
- **Responsiveness**: Mobile-first architecture tested rigorously across 375px (mobile), 768px (tablet), and 1280px+ (desktop).
- **SEO & Performance**: 100% compliant with Open Graph standards, Twitter cards, Schema.org Organization structured data, preconnected fonts, lazy-loaded off-screen assets, and valid XML sitemap.
