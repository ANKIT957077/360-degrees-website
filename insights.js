/**
 * =============================================================================
 * 360 DEGREES CONSULTING — INSIGHTS CONTENT MANAGEMENT SYSTEM (CMS)
 * File: data/insights.js
 * =============================================================================
 * 
 * WELCOME! This file is the single place where all research reports, strategy
 * memos, and thought leadership articles are stored and managed.
 * 
 * YOU DO NOT NEED TO EDIT ANY HTML OR CSS TO ADD ARTICLES.
 * Adding a new article here will automatically display it on the Insights hub!
 * 
 * -----------------------------------------------------------------------------
 * HOW TO ADD A NEW ARTICLE:
 * -----------------------------------------------------------------------------
 * 1. Scroll down to window.INSIGHTS_DATA = [ ... ];
 * 2. Copy one of the existing article objects (from { to },).
 * 3. Paste it at the top of the array.
 * 4. Fill in the fields:
 *    - id: A web-friendly name with hyphens, e.g. "edtech-market-entry-2026"
 *    - type: Either "report" (in-depth research paper) or "memo" (short strategic memo)
 *    - title: The headline of your piece
 *    - subtitle: A one-sentence summary or subtitle
 *    - category: Must match one of the categories in INSIGHTS_CATEGORIES below
 *    - author: Name of the author or pod, e.g. "Rachit (Founder)"
 *    - authorLinkedIn: URL to author profile (or "#" placeholder)
 *    - date: Publication date, e.g. "September 2026"
 *    - readingTime: Estimated read time, e.g. "8 min read"
 *    - summary: A 2-3 sentence overview shown on the card
 *    - keyTakeaways: An array of bullet points in quotes: ["Point 1", "Point 2"]
 *    - featured: Set to true if this should be the big hero card at the top (only one article should be true)
 *    - tags: Keywords in quotes, e.g. ["EdTech", "Strategy", "Higher Education"]
 * 5. Save this file. That's it!
 * 
 * -----------------------------------------------------------------------------
 * HOW TO ADD A NEW CATEGORY:
 * -----------------------------------------------------------------------------
 * 1. Look at window.INSIGHTS_CATEGORIES below.
 * 2. Add your new category name in quotes followed by a comma, e.g. "Artificial Intelligence",
 * 3. Save the file. The filter button will automatically appear on the website!
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// 1. CMS CATEGORIES TAXONOMY
// -----------------------------------------------------------------------------
window.INSIGHTS_CATEGORIES = [
  "Research Reports",
  "Strategy",
  "Markets & Industries",
  "Consumer Insights",
  "Technology",
  "Finance",
  "Marketing & Growth",
  "Operations",
  "Education",
  "Startups",
  "Social Impact",
  "Case Studies",
  "Consulting Memos",
  "Perspectives"
];

// -----------------------------------------------------------------------------
// 2. CMS ARTICLES DATABASE
// -----------------------------------------------------------------------------
window.INSIGHTS_DATA = [
  {
    id: "placeholder-report-1",
    type: "report",
    title: "Lorem Ipsum Research Report",
    subtitle: "A comprehensive empirical investigation into modern commercial inflection points.",
    category: "Research Reports",
    author: "Rachit (Founder)",
    authorLinkedIn: "#",
    date: "September 2026",
    readingTime: "12 min read",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    keyTakeaways: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia."
    ],
    featured: true,
    tags: ["Research", "Strategy", "Empirical Data", "Market Analysis"]
  },
  {
    id: "placeholder-memo-1",
    type: "memo",
    title: "Lorem Ipsum Strategy Memo",
    subtitle: "Actionable strategic frameworks for high-growth enterprise execution.",
    category: "Strategy",
    author: "Agrim (Co-Founder)",
    authorLinkedIn: "#",
    date: "September 2026",
    readingTime: "6 min read",
    summary: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    keyTakeaways: [
      "Integer in mauris eu nibh euismod gravida duis ac tellus.",
      "Vestibulum lacinia arcu eget nulla class aptent taciti sociosqu.",
      "Curabitur sodales ligula in libero sed dignissim lacinia nunc."
    ],
    featured: false,
    tags: ["Strategy", "Frameworks", "Growth", "Execution"]
  },
  {
    id: "placeholder-memo-2",
    type: "memo",
    title: "Lorem Ipsum Market Perspective",
    subtitle: "Analyzing shifting demand dynamics and consumer sentiment across collegiate ecosystems.",
    category: "Markets & Industries",
    author: "Rishabh (Research Director)",
    authorLinkedIn: "#",
    date: "August 2026",
    readingTime: "7 min read",
    summary: "Pellentesque nibh felis, eleifend id, facilisis sit amet, molestie nec, sem. Phasellus magna. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    keyTakeaways: [
      "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      "Nullam dictum felis eu pede mollis pretium integer tincidunt cras.",
      "Vivamus elementum semper nisi aenean vulputate eleifend tellus."
    ],
    featured: false,
    tags: ["Markets", "Consumer Insights", "Economics", "Collegiate"]
  }
];
