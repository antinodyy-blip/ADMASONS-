export type BlogPost = {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'scaled-d2c-brand-1-2x-to-4-5x-roas',
    title: 'How We Scaled a D2C Brand from 1.2× to 4.5× ROAS in 90 Days',
    category: 'Case Study',
    date: 'June 2026',
    readTime: '6 min read',
    excerpt:
      'A practical playbook for moving from a low-return campaign mix to a profitable growth engine with better targeting, creatives, and conversion optimization.',
    content: [
      'This case study explores the exact steps our team took to transform a D2C brand’s paid media performance in 90 days.',
      'We focused on restructuring campaigns, refining audience segments, and introducing creative tests that aligned with customer intent.',
      'The result was stronger ROAS, improved conversion rates, and a sustainable marketing cadence for long-term scaling.',
    ],
  },
  {
    slug: 'amazon-ppc-2026-indian-sellers',
    title: "Amazon PPC in 2026: What's Actually Working for Indian Sellers",
    category: 'Marketplace',
    date: 'June 2026',
    readTime: '5 min read',
    excerpt:
      'A concise guide to the Amazon ad tactics Indian sellers should be using today, from targeting to bidding and content optimization.',
    content: [
      'Amazon PPC has evolved again in 2026, and the brands that win are the ones that combine data-driven campaigns with category-specific listing strategies.',
      'We cover the most effective ad types, search strategies, and optimization rhythms for today’s marketplace landscape.',
      'The focus is on long-term profitability instead of chasing top-of-funnel volume at all costs.',
    ],
  },
  {
    slug: 'why-d2c-brands-burn-meta-ad-budget',
    title: 'Why Most D2C Brands Burn Their Meta Ad Budget (And How to Fix It)',
    category: 'Performance Marketing',
    date: 'May 2026',
    readTime: '6 min read',
    excerpt:
      'A breakdown of the common Meta ad mistakes D2C teams make, plus the corrective actions that preserve budget and improve scale.',
    content: [
      'Spending more does not equal scaling more. Most D2C brands burn ad budget because they neglect funnel balance and creative velocity.',
      'We explain the three biggest leaks in Meta campaigns and how to plug them with better structure, audience hygiene, and content testing.',
      'This article is built for marketers who want to keep their campaigns profitable while still growing aggressively.',
    ],
  },
  {
    slug: 'full-funnel-marketing-strategy-premium-d2c',
    title: 'Full-Funnel Marketing Strategy for Premium Indian D2C Brands',
    category: 'Strategy',
    date: 'May 2026',
    readTime: '5 min read',
    excerpt:
      'A premium D2C growth framework that blends brand-building, performance, and retention for higher customer lifetime value.',
    content: [
      'Premium D2C brands need more than discount-driven growth. They need a full-funnel approach that supports brand value and long-term loyalty.',
      'This post lays out each stage of the funnel, from awareness to retention, with the right channel mix for Indian premium audiences.',
      'You’ll learn how to keep acquisition costs under control while building a brand that customers trust and return to.',
    ],
  },
  {
    slug: 'build-high-converting-shopify-store-indian-market',
    title: 'How to Build a High-Converting Shopify Store for the Indian Market',
    category: 'Web Development',
    date: 'April 2026',
    readTime: '6 min read',
    excerpt:
      'Practical Shopify design and conversion tactics that help Indian brands turn traffic into buyers, not just page views.',
    content: [
      'Building for the Indian market requires clarity, trust signals, and a checkout experience that removes friction for price-sensitive shoppers.',
      'This article shares the key UX decisions, speed improvements, and content anchors that improve checkout conversion.',
      'The end goal is a store that feels premium, loads fast, and makes it easy for customers to buy with confidence.',
    ],
  },
]

export const getBlogPostSlugs = () => blogPosts.map((post) => ({ slug: post.slug }))

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug)
