import React from 'react';
import { Github, Youtube, Linkedin, Globe, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/site.config';

interface SocialIconsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`flex items-center gap-2.5 flex-wrap ${className}`}>
      {/* GitHub - Dark Charcoal with Violet/White */}
      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile (Paras Panchal)"
        className={`${sizeClasses[size]} rounded-xl bg-[#24292e] text-white flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30 transition-all border border-neutral-700`}
      >
        <Github className={iconSizes[size]} />
      </a>

      {/* YouTube - Iconic Crimson Red */}
      <a
        href={siteConfig.socials.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube Channel (Paras Panchal)"
        className={`${sizeClasses[size]} rounded-xl bg-[#FF0000] text-white flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-red-600/40 transition-all border border-red-500`}
      >
        <Youtube className={iconSizes[size]} />
      </a>

      {/* LinkedIn - Official Brand Blue */}
      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile (Paras Panchal)"
        className={`${sizeClasses[size]} rounded-xl bg-[#0A66C2] text-white flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-blue-600/40 transition-all border border-blue-400`}
      >
        <Linkedin className={iconSizes[size]} />
      </a>

      {/* Portfolio - Shimmering Dubai Gold */}
      <a
        href={siteConfig.socials.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Portfolio Website (Paras Panchal)"
        className={`${sizeClasses[size]} rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-black font-bold flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all border border-[#D4AF37]`}
      >
        <Globe className={iconSizes[size]} />
      </a>

      {/* WhatsApp - Vibrant Green */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact"
        className={`${sizeClasses[size]} rounded-xl bg-[#25D366] text-black flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/40 transition-all border border-[#25D366]`}
      >
        <MessageCircle className={iconSizes[size]} />
      </a>

      {/* Email - Google Mail Red */}
      <a
        href={`mailto:${siteConfig.contact.email}`}
        aria-label="Send Direct Email"
        className={`${sizeClasses[size]} rounded-xl bg-[#EA4335] text-white flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition-all border border-red-400`}
      >
        <Mail className={iconSizes[size]} />
      </a>
    </div>
  );
};
