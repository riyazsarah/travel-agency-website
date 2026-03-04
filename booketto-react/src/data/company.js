export const company = {
  name: 'Booketto Tourism LLC',
  tagline: 'Journey Beyond the Ordinary',
  description: 'A licensed Destination Management Company (DMC) operating across Dubai, UAE and India, crafting unforgettable travel experiences since 2021.',
  whatsapp: 'https://wa.me/917770020600',
  whatsappNumber: '+91 7770020600',
  email: 'holidays@booketto.in',
  phone: '+971 54 746 0786',
  phoneIndia: '+91 7770020600',
  addressIndia: 'Jafar Nagar, Nagpur',
  addressDubai: 'Abu Hail Building-26, Dubai',
  social: {
    twitter: 'https://x.com/Bookett0',
    whatsapp: 'https://wa.me/917770020600',
    tripadvisor: 'https://www.tripadvisor.in/Attraction_Review-g295424-d23554149-Reviews-Booketto_DMC-Dubai_Emirate_of_Dubai.html',
    instagram: 'https://instagram.com/booketto',
    facebook: 'https://facebook.com/booketto',
  },
  badges: ['Licensed DMC', 'IATA Member', 'UAE Tourism'],
};

export const footerColumns = [
  {
    title: 'Destinations',
    links: [
      { label: 'Dubai', href: '#destinations' },
      { label: 'Abu Dhabi', href: '#destinations' },
      { label: 'Malaysia', href: '#destinations' },
      { label: 'Singapore', href: '#destinations' },
      { label: 'Thailand', href: '#destinations' },
      { label: 'All Destinations \u2192', href: '#destinations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers (Coming Soon)', href: '#contact' },
      { label: 'Legal Notice (Coming Soon)', href: '#contact' },
      { label: 'Privacy Policy (Coming Soon)', href: '#contact' },
      { label: 'Terms & Conditions (Coming Soon)', href: '#contact' },
    ],
  },
  {
    title: 'Get In Touch',
    offices: [
      {
        name: 'India Office',
        lines: [
          { text: 'Jafar Nagar, Nagpur' },
          { text: '+91 7770020600', href: 'tel:+917770020600' },
          { text: 'holidays@booketto.in', href: 'mailto:holidays@booketto.in' },
        ],
      },
      {
        name: 'Dubai Office',
        lines: [
          { text: 'Abu Hail Building-26, Dubai' },
          { text: '054 746 0786', href: 'tel:+971547460786' },
          { text: 'holidays@booketto.in', href: 'mailto:holidays@booketto.in' },
          { text: 'sales@booketto.in', href: 'mailto:sales@booketto.in' },
        ],
      },
    ],
  },
];

export const searchTags = [
  { label: 'Dubai 5N from \u20B985,000', accent: 'var(--accent-amber)' },
  { label: 'Thailand 7N from \u20B978,000', accent: 'var(--accent-emerald)' },
  { label: 'Malaysia+Singapore from \u20B992,000', accent: 'var(--accent-blue)' },
  { label: 'Turkey 6N from \u20B995,000', accent: 'var(--accent-rose)' },
  { label: 'Baku 4N from \u20B965,000', accent: 'var(--accent-blue)' },
];

export const heroStats = [
  { value: 12, suffix: '+', label: 'Destinations' },
  { value: 5000, suffix: '+', label: 'Happy Travellers' },
  { value: 24, suffix: '/7', label: 'Support' },
  { value: 4.9, suffix: '\u2605', label: 'Avg Rating', isDecimal: true },
];
