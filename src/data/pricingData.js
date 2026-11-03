export const audienceItems = [
  {
    title: "Adults Preparing for Chemotherapy",
    description: "Individuals planning ahead to capture natural hair characteristics before planned medical treatment."
  },
  {
    title: "People Living with Alopecia",
    description: "Those navigating androgenetic, areata, totalis or universalis hair loss seeking an exact, secure anatomical fit."
  },
  {
    title: "Personalised Fit & Appearance",
    description: "Individuals looking for tailored scalp curvature, specific parting directions, accurate hair densities and natural colour matching."
  },
  {
    title: "Independent Wig Studios",
    description: "Specialist wig studios interested in adopting the CrownForm capture and digital specification method under future licensing."
  }
];

export const mainProstheses = [
  {
    id: "synthetic",
    name: "CrownForm Synthetic",
    prominentPrice: "£1,074",
    vatNote: "including VAT",
    secondaryPrice: "£895 before VAT",
    description: "Custom cap with heat-friendly synthetic hair.",
    features: [
      "Custom-tailored cap built to your scalp geometry",
      "Calibrated hairline, parting & density placement",
      "Premium heat-friendly synthetic fibres",
      "Specialist quality inspection prior to delivery"
    ],
    ctaText: "Enquire About Synthetic"
  },
  {
    id: "human-hair",
    name: "CrownForm Human Hair",
    prominentPrice: "£1,500",
    vatNote: "including VAT",
    secondaryPrice: "£1,250 before VAT",
    description: "Custom cap with hand-ventilated human hair.",
    features: [
      "Individually hand-knotted natural human hair",
      "Precision-matched hair colour, texture & parting",
      "Tailored anatomical cap base for daily comfort",
      "Full craft traceability and final workshop check"
    ],
    ctaText: "Enquire About Human Hair"
  },
  {
    id: "silicone-secure",
    name: "CrownForm Silicone Secure",
    prominentPrice: "£2,220",
    vatNote: "including VAT",
    secondaryPrice: "£1,850 before VAT",
    description: "Human hair on a custom cap with a medical-grade silicone perimeter for adhesive-free security.",
    features: [
      "Medical-grade silicone grip perimeter",
      "Secure wear without adhesives or tapes",
      "Hand-ventilated premium human hair",
      "Engineered for active lifestyles and sensitive skin"
    ],
    ctaText: "Enquire About Silicone Secure"
  }
];

export const additionalProducts = [
  {
    name: "HairPrint Kit",
    prominentPrice: "£58.80 including VAT",
    secondaryPrice: "£49 before VAT",
    detail: "Includes calibration band, colour reference card, hair-sample envelope, comprehensive guide and prepaid return.",
    note: "The £49 before-VAT kit fee is fully credited against any prosthesis purchase. Kits are planned to be provided free through healthcare referral partners under the planned service."
  },
  {
    name: "Backup Unit",
    prominentPrice: "25% below the price of the first unit",
    secondaryPrice: "Calculated based on chosen prosthesis specification",
    detail: "A second prosthesis cloned directly from your approved digital HairPrint and workshop specification without requiring repeat measurements.",
    note: "Offers peace of mind during maintenance, cleaning cycles or styling changes."
  },
  {
    name: "CrownCare Aftercare",
    prominentPrice: "£22.80/month or £238.80/year",
    vatNote: "including VAT",
    secondaryPrice: "£19/month or £199/year before VAT",
    detail: "Comprehensive planned maintenance programme.",
    features: [
      "Cleaning and restyle credits",
      "Refit scan every six months to track anatomical comfort",
      "Priority replacement queue access"
    ],
    note: "Optional rolling support to preserve comfort, cleanliness and cap integrity over time."
  }
];

export const studioLicensing = {
  heading: "For independent wig studios",
  subheading: "Expand your salon or studio with precision digital capture and custom workshop specifications.",
  fees: [
    { label: "Monthly Platform Licence", amount: "£250", vat: "per month, before VAT" },
    { label: "Per-Design Processing", amount: "£40", vat: "per design, before VAT" },
    { label: "Staff Certification", amount: "£950", vat: "one-off to certify two staff, before VAT" }
  ],
  terms: "Studios retain their clients, brand and fitting relationship while using CrownForm’s method. Planned initial term: twelve months, renewing monthly afterwards. Planned rollout from Month 15.",
  ctaText: "Register Studio Interest"
};

export const futureNhsPathway = {
  title: "Conditional Future NHS Voucher Pathway",
  status: "Targeted from Month 25, subject to approved-supplier status and local commissioning arrangements.",
  description: "The business plan proposes an NHS voucher pathway to make custom prostheses accessible through healthcare allowances.",
  pricingExample: {
    baseSynthetic: "£805.50 before VAT",
    discountNote: "Synthetic tier after proposed 10% supplier discount",
    topUpEstimate: "Estimated patient top-up of approximately £606–£706 before VAT (assuming an NHS voucher contribution of £100–£200)."
  },
  disclaimer: "Presented strictly as a conditional planning illustration. This is not an available checkout price, guaranteed benefit, or contracted NHS service."
};
