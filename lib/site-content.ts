export const visionDescription =
  "Latch is a digital membership platform that makes premier dining, wellness, fitness, travel, and lifestyle experiences affordable while giving merchants a smarter way to fill seats and reach new customers.";

export const problemCards = [
  {
    audience: "Consumers",
    tone: "teal",
    items: [
      {
        value: "$63",
        label: "average spend per restaurant visit",
        detail: "up 12.5% YoY"
      },
      {
        value: "88%",
        label: "say price is #1 factor when spending",
        detail: ""
      },
      {
        value: "84%",
        label: "are more selective about where they go",
        detail: ""
      }
    ]
  },
  {
    audience: "Merchants",
    tone: "dark",
    items: [
      {
        value: "80%",
        label: "of Canadian restaurants carry debt",
        detail: ""
      },
      {
        value: "3-5%",
        label: "profit margins for full-service restaurants",
        detail: ""
      },
      {
        value: "$30K",
        label: "avg annual marketing spend",
        detail: "unclear ROI"
      }
    ]
  }
] as const;

export const solutionCards = [
  {
    title: "For Consumers",
    body: "Premium lifestyle memberships across dining, wellness, fitness, activities, travel and more. 3 coupons per merchant, per year. Earn loyalty points through discovery."
  },
  {
    title: "For Merchants",
    body: "Guaranteed exposure to thousands of active subscribers. Trackable foot traffic, zero delivery commissions. New customers walking through your door."
  },
  {
    title: "For Growth",
    body: "Three compounding revenue streams. Asset-light model. Phased expansion from dining into every lifestyle vertical across North America."
  }
] as const;

export const industryVerticals = [
  {
    title: "Drink & Dining",
    description: "Restaurants, bars, cafes"
  },
  {
    title: "Health & Wellness",
    description: "Dental, physio, therapy, pet health & wellness"
  },
  {
    title: "Fitness & Leisure",
    description: "Gyms, yoga, spas"
  },
  {
    title: "Activities",
    description: "Events, parks"
  },
  {
    title: "Retail",
    description: "Fashion, beauty, lifestyle"
  },
  {
    title: "Hotels",
    description: "Boutique stays, resorts"
  },
  {
    title: "Airlines & Travel",
    description: "Lounge access, upgrades"
  }
] as const;

export const consumerJourney = [
  "Subscribe to Latch",
  "Browse merchants across all categories",
  "Redeem 3 coupons per merchant/year",
  "Earn loyalty points by discovering new places",
  "Redeem points for bonus coupons at favourites"
] as const;

export const merchantJourney = [
  "Pay one-time annual onboarding deposit",
  "Set up profile, offers, and business details",
  "Get listed to every subscriber in your area",
  "Receive trackable new customer visits",
  "Access analytics dashboard for real insights"
] as const;

export const productPrinciples = [
  "3 coupons per merchant",
  "Annual reset",
  "Earn more through discovery",
  "No unlimited deal abuse"
] as const;

export const loyaltyMechanics = [
  {
    number: "01",
    title: "3 Coupons Per Merchant",
    body: "Each subscriber gets 3 coupons per merchant. Caps exposure. Prevents abuse."
  },
  {
    number: "02",
    title: "Cross-Merchant Discovery",
    body: "Redeeming at different merchants earns loyalty points. Drives the exploration merchants need."
  },
  {
    number: "03",
    title: "Points Unlock More",
    body: "Points redeemable for bonus coupons at favourites. Discover -> Earn -> Return."
  },
  {
    number: "04",
    title: "Annual Reset",
    body: "Coupons reset at renewal. Fresh cycle, fresh opportunities. Sustainable for all."
  }
] as const;

export const marketMetrics = [
  {
    label: "TAM",
    value: "$135.2B",
    description: "Canada's total restaurant & lifestyle services industry"
  },
  {
    label: "SAM",
    value: "$8.4B",
    description: "Ontario foodservice & wellness market"
  },
  {
    label: "SOM",
    value: "$240M+",
    description: "Toronto dining & lifestyle addressable market"
  }
] as const;

export const marketInlineStats = [
  {
    value: "9,378",
    label: "Restaurants in Toronto"
  },
  {
    value: "76%",
    label: "Favour loyalty programs"
  },
  {
    value: "42%",
    label: "Are loyalty members"
  },
  {
    value: "3.2%",
    label: "Traffic growth H1 2025"
  }
] as const;

export const revenueStreams = [
  {
    number: "01",
    title: "Merchant Onboarding",
    phase: "LIVE AT LAUNCH",
    body: "$2,000-$2,500/year nonrefundable deposit. Founding merchants get Year 1 waived. Premium placement available."
  },
  {
    number: "02",
    title: "Consumer Subscriptions",
    phase: "LIVE AT LAUNCH",
    body: "Monthly and annual plans from $5.99 to $49.99/mo. Four tiers: General, Student/Senior, Premium, Traveler."
  },
  {
    number: "03",
    title: "Payment Processing",
    phase: "PHASE 2",
    body: "In-app payments with auto-calculated discounts. Processing fee from merchants. Third compounding revenue layer."
  }
] as const;

export const roiMath = [
  {
    label: "Onboarding deposit",
    value: "$2,000"
  },
  {
    label: "New customers/mo via Latch",
    value: "15"
  },
  {
    label: "Avg spend per visit",
    value: "$63"
  },
  {
    label: "Annual new revenue",
    value: "$11,340"
  },
  {
    label: "BOGO cost (~$15 x 180)",
    value: "-$2,700"
  }
] as const;

export const roiSummary = "NET: $6,640 | 3.3x ROI | Paid back in 4 months";

export const currentOptions = [
  {
    name: "UberEats / DoorDash",
    points: ["25-30% commission per order", "No in-store traffic"]
  },
  {
    name: "Instagram / Google Ads",
    points: ["$500-2,000/month", "Unclear attribution"]
  },
  {
    name: "Groupon",
    points: ["50% of deal value", "Deal-seekers, no loyalty"]
  },
  {
    name: "Latch",
    points: ["$2,000-$2,500/year deposit", "Tracked foot traffic, 3.3x ROI"]
  }
] as const;

export const comparisonRows = [
  {
    label: "Model",
    values: ["One-off deals", "Delivery commissions", "Reviews", "Membership Discounts"]
  },
  {
    label: "Cost",
    values: ["50% of deal", "25-30%/order", "Ads + fees", "$2K/yr deposit"]
  },
  {
    label: "Customers",
    values: ["Deal seekers", "Convenience", "Browsing", "Discovery + loyalty"]
  },
  {
    label: "In-Store",
    values: ["Minimal", "None", "Some", "Primary focus"]
  },
  {
    label: "Limits",
    values: ["Unlimited", "Unlimited", "N/A", "3/merchant/yr"]
  },
  {
    label: "ROI",
    values: ["Negative", "Margin loss", "Unclear", "3.3x tracked"]
  }
] as const;

export const roadmapPhases = [
  {
    quarter: "Q1 2026",
    title: "Foundation",
    active: true,
    items: [
      "Incorporate & legal",
      "Build MVP app",
      "Merchant outreach",
      "Secure founding partners"
    ]
  },
  {
    quarter: "Q2 2026",
    title: "Beta Launch",
    active: false,
    items: [
      "50+ founding merchants",
      "Beta with free trials",
      "Gather feedback",
      "Iterate product"
    ]
  },
  {
    quarter: "Q3 2026",
    title: "Public Launch",
    active: false,
    items: [
      "Paid subscriptions",
      "2,500 subscribers",
      "Toronto coverage",
      "Loyalty engine live"
    ]
  },
  {
    quarter: "Q4 2026+",
    title: "Scale",
    active: false,
    items: [
      "5,000+ subscribers",
      "200+ merchants",
      "Expand to Canada-wide",
      "Phase 2 verticals"
    ]
  }
] as const;

export const teamMembers = [
  {
    name: "Nikhil Karani",
    initials: "NK",
    role: "Co-Founder & CEO",
    description: "Vision, overall strategic direction, driving growth, and maximizing profitability."
  },
  {
    name: "Dwayne Fernandes",
    initials: "DF",
    role: "Co-Founder & COO",
    description: "Operations & merchant partnerships. Leading supply-side growth, acquisition, and onboarding."
  },
  {
    name: "Liam Fernandes",
    initials: "LF",
    role: "Co-Founder & CFO",
    description: "Financial strategy and health. FP&A, risk management, and operational performance."
  },
  {
    name: "Yusuf Moola",
    initials: "YM",
    role: "Co-Founder & CTO",
    description: "Platform engineering, infrastructure, and analytics systems. Backend, frontend, and data architecture."
  },
  {
    name: "Aazain Khan",
    initials: "AK",
    role: "Co-Founder & CTO",
    description: "Product & technology. App development, payment infrastructure, and analytics."
  }
] as const;

export const fundingBreakdown = [
  {
    label: "Product & Engineering",
    value: 40
  },
  {
    label: "Sales & Merchant Acquisition",
    value: 25
  },
  {
    label: "Marketing & Consumer Growth",
    value: 20
  },
  {
    label: "Operations & Legal",
    value: 15
  }
] as const;

export const raiseTargets = [
  {
    value: "5,000+",
    label: "Subscribers"
  },
  {
    value: "200+",
    label: "Merchants"
  },
  {
    value: "$500K+",
    label: "ARR"
  }
] as const;
