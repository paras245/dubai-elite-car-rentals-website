export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'youtube' | 'linkedin' | 'globe' | 'phone' | 'mail' | 'message-circle';
}

export const siteConfig = {
  name: 'Dubai Elite Car Rentals',
  arabicName: 'دبي إيليت لتأجير السيارات الفارهة',
  tagline: 'Experience Dubai In Ultimate Luxury',
  arabicTagline: 'عش تجربة دبي بأعلى مستويات الفخامة والأناقة',
  founder: {
    name: 'Paras Panchal',
    title: 'Founder & Principal Engineer',
  },
  contact: {
    phoneDisplay: '+91 502877414',
    phoneTel: '+91502877414',
    whatsappNumber: '91502877414',
    whatsappDisplay: '+91 502877414',
    email: 'paraspanchal5555@gmail.com',
    serviceArea: 'VIP White-Glove Delivery Across Dubai & UAE',
    arabicServiceArea: 'خدمة توصيل ملكية لجميع مناطق دبي والإمارات',
  },
  socials: {
    github: 'https://github.com/paras245',
    youtube: 'https://youtube.com/@paraspanchal9708',
    linkedin: 'https://linkedin.com/in/paras-panchal-718679223',
    portfolio: 'https://paras-panchal.netlify.app',
  },
  stats: {
    fleetSize: '150+',
    happyClients: '12,500+',
    yearsExperience: '10+',
    avgRating: '4.9/5',
  },
};
