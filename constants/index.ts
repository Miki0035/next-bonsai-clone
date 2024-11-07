import { FooterContentType, TemplateDescriptionType } from "@/types";

export const gridCardContent = [
  {
    id: 1,
    image: "/dollar-card-icon.svg",
    title: "Invoices",
    description:
      "Get paid faster with automatic invoicing, online payments and more",
  },
  {
    id: 2,
    image: "/circle-card-icon.svg",
    title: "Proposals",
    description:
      "Create client-winning proposals with open receipts, custom packages and electronic approvals",
  },
  {
    id: 3,
    image: "/contracts-card-icon.svg",
    title: "Contracts",
    description:
      "Protect your business with fully-customizable contract templates. Edit and e-sign hassle free",
  },
  {
    id: 4,
    image: "/people-outline.svg",
    title: "Client CRM",
    description:
      "Add leads, manage existing clients and track projects easily from one place",
  },
  {
    id: 5,
    image: "/reader-outline.svg",
    title: "Forms & Automations",
    description:
      "Boost client intake and automate feedback with custom web forms and questionnaires",
  },
  {
    id: 6,
    image: "/time-tracking-icon.svg",
    title: "Time Tracking",
    description:
      "Stay organized with Bonsai's all-in-one time tracker, automated timesheets and billing system",
  },
  {
    id: 7,
    image: "/accounting.svg",
    title: "Accounting",
    description:
      "Manage your finances easily with income reports, expense tracking, tax reminders and more",
  },
  {
    id: 8,
    image: "/dollar-card-icon.svg",
    title: "Task Tracking",
    description:
      "Stress-free task management with project templates and integrated timesheets",
  },
];

export const productCardContent = [
  {
    id: 1,

    title: "Bonsai Tax",
    description:
      " Track expenses, maximize tax write offs, and estimate taxes without the headache",
  },
  {
    id: 2,
    title: "Bonsai Cash",
    description:
      " Bonsai's all-in-one financial hub: No fees and lightning fast payouts",
  },
];

export const gridTemplateCards = [
  {
    id: 1,
    title: "Contract Templates",
    img: "./contracts-card-icon.svg",
  },
  {
    id: 2,
    title: "Proposal Templates",
    img: "./contracts-card-icon.svg",
  },
  {
    id: 3,
    title: "Invoice Templates",
    img: "./dollar-card-icon.svg",
  },
  {
    id: 4,
    title: "Agreement Templates",
    img: "./reader-outline.svg",
  },
  {
    id: 5,
    title: "Quote Templates",
    img: "./circle-card-icon.svg",
  },
  {
    id: 6,
    title: "Scope of Work Templates",
    img: "./time-tracking-icon.svg",
  },
  {
    id: 7,
    title: "Brief Templates",
    img: "./circle-card-icon.svg",
  },
];

export const gridTemplateDescriptions: TemplateDescriptionType[] = [
  {
    id: 1,
    title: "Contract Templates",
    descriptions: [
      "Free Contract Maker",
      "Social Media Management Contract Template",
      "Graphic Design Contract Template",
      "Digital Marketing Contract Template",
    ],
    link: "See All Templates",
  },
  {
    id: 2,
    title: "Proposal Templates",

    descriptions: [
      "Graphic Design Proposal Template",
      "Business Proposal Template",
      "Brand Ambassador Proposal Template",
      "Data Entry Proposal Letter Template",
    ],
    link: "See All Templates",
  },
  {
    id: 3,
    title: "Invoice Templates",

    descriptions: [
      "Social Media Invoice Template",
      "Contract Invoice Template",
      "Web Design Invoice Template",
      "Influencer Invoice Template",
    ],
    link: "See All Templates",
  },
  {
    id: 4,
    title: "Agreement Templates",

    descriptions: [
      "Inflencer Agreement Template",
      "Influencer Collaboration Agreement Template",
      "Monthly Retainer Agreement Template",
      "Writer Agreement Template",
    ],
    link: "See All Templates",
  },

  {
    id: 5,
    title: "Qoute Templates",

    descriptions: [
      "Web Design Quotation Template",
      "Interior Design Quotation Template",
      "Digital Marketing Quotation Template",
      "Video Production Quotation Template",
    ],
    link: "See All Templates",
  },

  {
    id: 6,
    title: "Scope of Work Templates",
    descriptions: [
      "Website Development Scope of Work Template",
      "Digital Marketing Scope of Work Template",
      "Consultant Scope of Work Template",
      "Interior Design Scope of Work Template",
    ],
    link: "See All Templates",
  },
  {
    id: 7,
    title: "Brief Templates",
    descriptions: [
      "Design Brief Template",
      "Architecture Design Brief",
      "Fashion Design Brief",
      "Creative Brief Template",
    ],
    link: "",
  },
];

export const MobileNavProductBoardItems = [
  {
    id: 0,
    title: "Bonsai Workflow",
    subtitle: "Organize your business & look professional",
  },
  {
    id: 1,
    title: "Bonsai Tax",
    subtitle: "Maximize write-offs, and estimate and save for 1099 taxes",
  },
  {
    id: 2,
    title: "Bonsai Cash",
    subtitle: "Manage your money with a no-fee business account",
  },
];

export const priceCards = [
  {
    id: 0,
    title: "Starter",
    subtitle: "Ideal for freelancers and contractors just starting out.",
    monthlyPrice: 24,
    yearlyPrice: 17,
    descriptions: [
      "All Templates",
      "Unlimited Clients & Projects",
      "Invoicing & Payments",
      "Proposals & Contracts",
      "Tasks & Time Tracking",
      "Client CRM",
      "Expense Tracking",
      "Up to 5 Project Collaborators",
    ],
  },
  {
    id: 1,
    title: "Professional",
    subtitle: "Everything a growing independent business needs to thrive.",
    monthlyPrice: 39,
    yearlyPrice: 32,
    descriptions: [
      "Everything in Starter plus...",
      "Custom Branding",
      "Forms & Questionnaires",
      "Workflow Automations",
      "Client Portal",
      "QuickBooks Integration",
      "Calendly Integration",
      "Zapier Integration",
      "Up to 15 Project Collaborators",
    ],
  },
  {
    id: 2,
    title: "Business",
    subtitle: "The perfect package for small businesses and agencies",
    monthlyPrice: 52,
    yearlyPrice: 17,
    descriptions: [
      "Everything in Starter and Professional plus...",
      "Subcontractor Management",
      "Hiring Agreement Templates(1099 contracts)",
      "Subcontractor Onboarding",
      "Talent Pool",
      "3 Team Seats (additional seats $9/month)",
      "Accountant Access",
      "Connect Multiple Bank Accounts",
      "Unlimited Subcontractors",
      "Unlimited Project Collaborators",
    ],
  },
];

export const addonsText = {
  monthly: [
    {
      id: 0,
      title: "Collaborators",
      subtitle:
        "Invite other users to specific projects for limited access and functionality.",
      monthly: 0,
      link: "",
    },
    {
      id: 1,
      title: "Partners",
      subtitle:
        "Invite other users for full account access and company management.",
      monthly: 9,
      link: "",
    },
    {
      id: 2,
      title: "Bonsai Tax",
      subtitle:
        "Track expenses, identify write-offs, and estimate quarterly taxes easily.",
      monthly: 10,
      link: "LEARN MORE",
    },
  ],
  yearly: [
    {
      id: 0,
      title: "Accounting & Tax Assistant",
      subtitle:
        "Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.",
      yearly: 100,
      link: "LEARN MORE",
    },
    {
      id: 1,
      title: "Partners",
      subtitle:
        "Invite other users for full account access and company management.",
      yearly: 90,
      link: "",
    },
    {
      id: 3,
      title: "Collaborators",
      subtitle:
        "Invite other users to specific projects for limited access and functionality.",
      yearly: 0,
      link: "",
    },
  ],
};

//Accoridion Text
export const frequentAskedQuestion = [
  {
    id: 0,
    heading: "How does the free trial work",
    answer: `When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.`,
  },
  {
    id: 1,
    heading: "Can I change plans anytime",
    answer: `Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".`,
  },
  {
    id: 2,
    heading: "How do I pause my Bonsai subscription",
    answer: `We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.`,
  },
  {
    id: 3,
    heading: "What is your refund policy",
    answer: `If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.`,
  },
];

// Footer Text
export const footerContent: FooterContentType = {
  product: {
    title: "Product",
    links: [
      {
        id: 0,
        link: "Proposals",
        sublink: [],
      },
      {
        id: 1,
        link: "Contracts",
        sublink: [],
      },
      {
        id: 2,
        link: "Invoicing",
        sublink: [],
      },
      {
        id: 3,
        link: "Client CRM",
        sublink: [],
      },
      {
        id: 4,
        link: "Time Tracking",
        sublink: [],
      },
      {
        id: 5,
        link: "Task Tracking",
        sublink: [],
      },
      {
        id: 6,
        link: "Forms",
        sublink: [],
      },
      {
        id: 7,
        link: "Accounting",
        sublink: [],
      },
      {
        id: 8,
        link: "Bonsai Tax",
        sublink: [],
      },
      {
        id: 9,
        link: "Bonsai Cash",
        sublink: [],
      },
    ],
  },
  pricing: {
    title: "Pricing",
    links: [
      {
        id: 0,
        link: "Bonsai Reviews",
        sublink: [],
      },
    ],
  },
  freeResource: {
    title: "Free Resource",
    links: [
      {
        id: 0,
        link: "Freelance Resources",
        sublink: [],
      },
      {
        id: 1,
        link: "Freelance Blog by Bonsai",
        sublink: [],
      },
      {
        id: 2,
        link: "How to Write a Contract",
        sublink: [],
      },
      {
        id: 3,
        link: "Online Signature Maker",
        sublink: [],
      },
      {
        id: 4,
        link: "Self-Employed Taxes Hub",
        sublink: [],
      },
      {
        id: 5,
        link: "Self-Employed Taxes Calculator",
        sublink: [],
      },
      {
        id: 6,
        link: "Self-Employed Taxes Deductions",
        sublink: [],
      },
    ],
  },
  templates: {
    title: "Templates",
    links: [
      {
        id: 0,
        link: "Invoice Templates",
        sublink: [
          "Invoice Generator",
          "Blank Invoice Template",
          "Consultant Invoice Template",
          "Editable Invoice Template",
          "Graphic Design Invoice",
          "Web Design Invoice",
          "Contractor Invoice Template",
          "Photography Invoice Template",
          "Self Employed Invoice Template",
        ],
      },
      {
        id: 1,
        link: "Proposal Templates",
        sublink: [
          "Website Proposal Template",
          "Digital Marketing Proposal Template",
          "Social Media Marketing Proposal",
          "Graphic Design Proposal",
          "Freelance Proposal Template",
          "SEO Proposal Template",
        ],
      },
      {
        id: 2,
        link: "Contract Templates",
        sublink: [
          "Online Contract",
          "Graphic Design Contract",
          "Freelance Contract Template",
          "Social Media Marketing Contract",
          "Software Development Contract",
          "Web Design  Contract",
          "Video Production Contract",
          "Public Relations Contract",
          "Translation Contract",
        ],
      },
      {
        id: 3,
        link: "Agreement Templates",
        sublink: [
          "Retainer Agreement Templates",
          "Influencer Agreement Templates",
          "Collaboration Agreement Template",
          "Software Development Agreement",
          "Marketing Agreement Template",
        ],
      },
      {
        id: 4,
        link: "Scope of Work Templates",
        sublink: [
          "Website Development Scope of Work",
          "Digital Marketing Scope of Work",
          "Consultant Statement of Work Template",
          "Software Development Scope of Work",
        ],
      },
      {
        id: 5,
        link: "Quote Templates",
        sublink: [
          "Freelance Quotation Template",
          "Web Design Quotation Template",
          "Graphic Design Quotation Template",
          "Interior Design Quotation Template",
          "Video Production Quotation Template",
          "Social Media Marketing Quotation",
        ],
      },
      {
        id: 6,
        link: "Credit Note Templates",
        sublink: [],
      },
      {
        id: 7,
        link: "Estimate Templates",
        sublink: [],
      },
      {
        id: 8,
        link: "Form Templates",
        sublink: [],
      },
    ],
  },
  bonsai: {
    title: "Bonsai",
    links: [
      {
        id: 0,
        link: "About",
        sublink: [],
      },
      {
        id: 1,
        link: "Careers",
        sublink: [],
      },
      {
        id: 2,
        link: "Support",
        sublink: [],
      },
      {
        id: 3,
        link: "LinkedIn",
        sublink: [],
      },
      {
        id: 4,
        link: "Twitter",
        sublink: [],
      },
      {
        id: 5,
        link: "Privacy Policy",
        sublink: [],
      },
      {
        id: 6,
        link: "Legal",
        sublink: [],
      },
      {
        id: 7,
        link: "Affilates",
        sublink: [],
      },
      {
        id: 8,
        link: "Write for Us",
        sublink: [],
      },
      {
        id: 9,
        link: "Comparisons",
        sublink: [
          "Freshbooks Alternatives",
          "Quickbooks Alternatives",
          "Wave vs Quickbooks",
          "Xero vs Quickbooks",
          "Freshbooks vs Quickbooks",
        ],
      },
    ],
  },
};
