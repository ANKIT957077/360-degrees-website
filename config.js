/**
 * 360 DEGREES CONSULTING - GLOBAL SITE CONFIGURATION
 * 
 * What this file does:
 * - Central single source of truth for site branding, contact details, and navigation links.
 * - Used by js/site.js to inject identical, synced navigation and footer across all pages.
 * 
 * What to edit:
 * - To change nav links: edit the `navItems` array below.
 * - To change company footer links: edit `footer.companyLinks`.
 * - To change email / LinkedIn: edit `contact.email` and `contact.linkedin`.
 */

const SITE_CONFIG = {
  // Brand details
  name: "360 Degrees Consulting",
  tagline: "RESEARCH • STRATEGY • IMPACT",
  description: "An institutional-grade multidisciplinary consulting firm delivering research-led commercial solutions.",
  
  // Contact details
  contact: {
    email: "team360degreesconsulting@gmail.com",
    linkedin: "https://www.linkedin.com/company/team-360-degrees-consulting/"
  },
  
  // Primary Call-To-Action button (Navbar & Mobile Menu)
  cta: {
    label: "Bring Us Your Problem",
    href: "contact.html"
  },
  
  // Main Navigation links (Hierarchical structure, relative to site root)
  navItems: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { 
      label: "Services", 
      href: "services.html",
      children: [
        { label: "Strategy", href: "services/strategy.html" },
        { label: "Market & Research", href: "services/market-research.html" },
        { label: "Marketing & Brand", href: "services/marketing-brand.html" },
        { label: "Growth & GTM", href: "services/growth-gtm.html" },
        { label: "Finance", href: "services/finance.html" },
        { label: "Operations", href: "services/operations.html" },
        { label: "Outreach & Partnerships", href: "services/outreach-partnerships.html" },
        { label: "Education & Institutional", href: "services/education-institutional.html" },
        { label: "Custom / Specialised", href: "services/custom-specialised.html" }
      ]
    },
    { label: "Talent Ecosystem", href: "talent-ecosystem.html" },
    { label: "Work", href: "work.html" },
    { label: "Insights", href: "insights.html" },
    { label: "Contact", href: "contact.html" }
  ],
  
  // Footer columns & legal row
  footer: {
    companyLinks: [
      { label: "About", href: "about.html" },
      { label: "Talent Ecosystem", href: "talent-ecosystem.html" },
      { label: "Work", href: "work.html" },
      { label: "Insights", href: "insights.html" },
      { label: "Team", href: "team.html" },
      { label: "Careers", href: "careers.html" }
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "privacy.html" },
      { label: "Terms", href: "terms.html" }
    ],
    copyright: "© 2026 360 Degrees Consulting. All rights reserved."
  }
};
