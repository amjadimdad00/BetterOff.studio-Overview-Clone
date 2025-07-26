export type PlanType = "badgeCard" | "custom";

export interface Plan {
  type: PlanType;
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
  price?: string;
  priceLabel?: string;
  description?: string;
  ctaText: string;
  ctaUrl?: string;
  infoText?: string;
  infoUrl?: string;
  features: string[];
}

export const SubscriptionPlan: Plan[] = [
  {
    type: "badgeCard",
    badge: "Most Popular",
    badgeColor: "bg-[#cfa9ed]",
    title: "Part-time Pro",
    subtitle:
      "One part-time creative dedicated to your continuous stream of projects.",
    price: "10200",
    priceLabel: "/month",
    description: "For ongoing tasks.",
    ctaText: "Subscribe Now",
    infoText: "Need more info? Let’s chat.",
    features: [
      "Dedicated creative, 20 hrs weekly",
      "Two ongoing tasks",
      "Multiple revisions",
      "Access to 2 services",
      "Lightning turnarounds",
      "Pause or cancel anytime",
    ],
  },
  {
    type: "badgeCard",
    badge: "Best Value",
    badgeColor: "bg-[#e0f07d]",
    title: "Full-time Premium",
    subtitle:
      "One elite full-timer working simultaneously on multiple projects.",
    price: "15200",
    priceLabel: "/month",
    description: "Your augmented team.",
    ctaText: "Subscribe Now",
    infoText: "Still not sure? Let’s discuss.",
    features: [
      "Senior creative, 40 hrs a week",
      "Up to 4 ongoing tasks",
      "Multiple revisions",
      "Access to 3 services",
      "For robust workloads",
      "Pause or cancel anytime",
    ],
  },
  {
    type: "custom",
    title: "Build your own subscription. We’ll tailor the perfect team.",
    ctaText: "Customize my plan",
    features: [
      "Full access to all creative capabilities",
      "Coverage from kickoff to delivery",
      "Senior-level talent",
      "Creative direction",
      "Project management",
      "Easy add-on services mid-project",
    ],
  },
];

export const ProjectPlan: Plan[] = [
  {
    type: "badgeCard",
    badge: "Client Pick",
    badgeColor: "bg-[#cfa9ed]",
    title: "Brand Identity",
    subtitle: "Complete brand build from kickoff to delivery in 30 days.",
    price: "32500",
    priceLabel: "/flat fee",
    description: "Timeline: 6 weeks",
    ctaText: "Start Project",
    infoText: "Need more info? Let’s chat.",
    features: [
      "Brand Strategy",
      "Concept Development",
      "Visual Direction",
      "Brand Messaging",
      "Website/Socials Direction",
      "Brand Guidelines",
    ],
  },
  {
    type: "badgeCard",
    badge: "Award Winner",
    badgeColor: "bg-[#e0f07d]",
    title: "Integrated Campaign",
    subtitle:
      "Translate business objectives into results across all touch points.",
    price: "18600",
    priceLabel: "/flat fee",
    description: "Timeline: 4–6 weeks",
    ctaText: "Start Project",
    infoText: "Need more info? Let’s chat.",
    features: [
      "Messaging Strategy",
      "Multichannel Media Strategy",
      "Multiple Concept Directions",
      "Web/Social/Collateral Design",
      "Final Files Designed to Specs",
      "Content Launch Plan",
    ],
  },
  {
    type: "badgeCard",
    badge: "Hot Seller",
    badgeColor: "bg-[#cfa9ed]",
    title: "Website Update",
    subtitle:
      "Maximize leads and engagement with a design and functionality refresh.",
    price: "42500",
    priceLabel: "/flat fee",
    description: "Timeline: 12 weeks",
    ctaText: "Start Project",
    infoText: "Need more info? Let’s chat.",
    features: [
      "Optimization audit",
      "Information Architecture",
      "UI/UX Design",
      "Full stack development",
      "SEO diagnostics",
      "Testing and launch",
    ],
  },
  {
    type: "badgeCard",
    badge: "Best-in-Class",
    badgeColor: "bg-[#e0f07d]",
    title: "Custom Website",
    subtitle:
      "End-to-end design and technology that best reflects your brand and vision.",
    price: "64000",
    priceLabel: "/flat fee",
    description: "Timeline: 16 weeks",
    ctaText: "Start Project",
    infoText: "Need more info? Let’s chat.",
    features: [
      "Digital strategy",
      "Concept development",
      "IA, Sitemap, UI/UX Design",
      "Full Stack Development",
      "E-commerce Integration",
      "Testing and launch",
    ],
  },
  {
    type: "badgeCard",
    badge: "Flexibility",
    badgeColor: "bg-[#cfa9ed]",
    title: "40-hrs Essentials Bucket",
    subtitle:
      "Hourly coverage for crucial maintenance tasks, broken into a bite-sized bundle.",
    price: "4000",
    priceLabel: "/month\n$100 per/hr",
    description: "Unlock Coverage",
    ctaText: "Unlock Coverage",
    ctaUrl: "/start-project/essentials-bucket",
    infoText: "Need more info? Let’s chat.",
    infoUrl: "/contact",
    features: [
      "Site maintenance",
      "SEO optimization",
      "Content updates",
      "Repricing",
      "Collateral design",
      "Marketing support",
    ],
  },
  {
    type: "badgeCard",
    badge: "Bandwidth",
    badgeColor: "bg-[#e0f07d]",
    title: "60-hrs Intensive Bucket",
    subtitle:
      "Hourly coverage for multiple complex tasks or two priority initiatives per month.",
    price: "5400",
    priceLabel: "/month\n$90 per/hr",
    description: "Unlock Coverage",
    ctaText: "Unlock Coverage",
    ctaUrl: "/start-project/intensive-bucket",
    infoText: "Still not sure? Let’s discuss.",
    infoUrl: "/contact",
    features: [
      "Post blog articles",
      "Update site copy",
      "Expand products",
      "Event promo design",
      "Website maintenance",
      "Quick-turn projects",
    ],
  },
  {
    type: "custom",
    title: "Build your own project. Custom to meet your exact specs.",
    ctaText: "Customize my project",
    infoText: "Need more info? Let’s chat.",
    features: [
      "Full Creative Service Capabilities",
      "Coverage from Kickoff to Execution",
      "Award-Winning, Premium Talent",
      "Creative Direction",
      "Project Management",
      "Easy Add-On Services Mid-Project",
    ],
  },
];
