/**
 * =============================================================================
 * 360 DEGREES CONSULTING — CASE STUDIES & ENGAGEMENTS CMS
 * File: data/work.js
 * =============================================================================
 * 
 * WELCOME! This file is the centralized content store for all client case studies
 * and consulting engagement summaries.
 * 
 * YOU DO NOT NEED TO EDIT ANY HTML CODE TO ADD A NEW CASE STUDY.
 * Simply adding an object here will automatically update the Work page!
 * 
 * -----------------------------------------------------------------------------
 * HOW TO ADD A NEW CASE STUDY:
 * -----------------------------------------------------------------------------
 * 1. Scroll down to window.WORK_DATA = [ ... ];
 * 2. Copy one of the existing case study blocks (from { to },).
 * 3. Paste it at the top of the array.
 * 4. Fill in the fields:
 *    - id: A unique slug with hyphens, e.g. "market-entry-edtech"
 *    - title: Project title, e.g. "Pan-India Higher Education Market Entry"
 *    - client: Anonymised client label, e.g. "Confidential — Series-A EdTech Startup"
 *    - sector: Must match one of the sectors in WORK_SECTORS below
 *    - serviceAreas: Array of practice areas, e.g. ["Strategy", "Research", "Growth"]
 *    - duration: Engagement duration, e.g. "6 weeks"
 *    - year: Year of engagement, e.g. "2026"
 *    - problem: 2-3 lines describing the client's commercial or strategic bottleneck
 *    - approach: 2-3 lines describing what 360 did (methodology and pod deployment)
 *    - outcome: 2-3 lines describing the result or commercial impact achieved
 *    - deliverables: Array of 3-4 deliverable strings e.g. ["Market sizing model", "Competitor matrix"]
 *    - featured: Set to true if this should be the hero showcase card at the top (only ONE at a time)
 * 5. Save this file. That's it!
 * 
 * -----------------------------------------------------------------------------
 * HOW TO ADD A NEW SECTOR:
 * -----------------------------------------------------------------------------
 * 1. Look at window.WORK_SECTORS below.
 * 2. Add your new sector name in quotes followed by a comma, e.g. "Renewable Energy",
 * 3. Save the file. The filter pill will appear on the page automatically!
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// 1. INDUSTRY SECTORS TAXONOMY
// -----------------------------------------------------------------------------
window.WORK_SECTORS = [
  "EdTech",
  "Consumer Brands",
  "Financial Services",
  "Healthcare",
  "Real Estate",
  "Social Impact",
  "Technology",
  "Education",
  "Operations"
];

// -----------------------------------------------------------------------------
// 2. CASE STUDIES DATABASE
// -----------------------------------------------------------------------------
window.WORK_DATA = [
  {
    id: "market-entry-edtech",
    title: "Pan-India Higher Education Market Entry",
    client: "Confidential — Series-A EdTech Startup",
    sector: "EdTech",
    serviceAreas: ["Strategy", "Research", "Growth"],
    duration: "6 weeks",
    year: "2026",
    problem: "An emerging EdTech platform needed to validate commercial viability for a new collegiate upskilling product across Tier-1 and Tier-2 Indian universities before committing capital.",
    approach: "360 deployed a 4-person multidisciplinary pod to conduct 1,200+ student surveys, 45 university administrator interviews, and built an addressable TAM/SAM model.",
    outcome: "Identified a validated $45M addressable market niche, preventing premature spend on non-viable product verticals and charting a 3-phase university rollout.",
    deliverables: [
      "Addressable Market (TAM/SAM) Model",
      "Competitor Pricing Elasticity Matrix",
      "Campus Distribution Playbook",
      "Executive Board Decision Memo"
    ],
    featured: true
  },
  {
    id: "brand-repositioning-d2c",
    title: "Omnichannel Brand Repositioning & GTM",
    client: "Confidential — Consumer Brand",
    sector: "Consumer Brands",
    serviceAreas: ["Marketing", "Growth"],
    duration: "8 weeks",
    year: "2026",
    problem: "A fast-growing direct-to-consumer lifestyle brand faced rising customer acquisition costs and sought a defensible brand architecture for nationwide retail expansion.",
    approach: "Audited customer cohort retention curves, synthesized consumer persona interviews, and mapped competitor retail shelf positioning across 25 modern trade outlets.",
    outcome: "Restructured product tiering and launched an institutional campus ambassador channel, lowering blended CAC by 28% across launch territories.",
    deliverables: [
      "Consumer Persona Segmentation Deck",
      "Retail Channel Partner Evaluation",
      "Campus Ambassador Program Blueprint",
      "Acquisition Funnel Financial Model"
    ],
    featured: false
  },
  {
    id: "financial-sustainability-model",
    title: "Financial Sustainability & Operational Audit",
    client: "Confidential — Social Impact Foundation",
    sector: "Social Impact",
    serviceAreas: ["Finance", "Operations"],
    duration: "5 weeks",
    year: "2026",
    problem: "A national education non-profit required a rigorous 5-year financial forecast model and unit-cost audit to support multi-year institutional donor fundraising.",
    approach: "Analyzed program expenditure across 12 regional centres, benchmarked operational overheads, and stress-tested variable grant absorption scenarios.",
    outcome: "Surfaced 18% in operational overhead efficiencies and provided leadership with a standardized model for institutional grant allocation.",
    deliverables: [
      "Dynamic 5-Year Financial Model",
      "Unit-Cost Operational Benchmark",
      "Institutional Grant Allocation Plan",
      "Board Strategy Roadmap"
    ],
    featured: false
  }
];
