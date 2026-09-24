import React from 'react';
import { Mail, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { APP_DETAILS, CONTACT_CONFIG, BRAND_ASSETS } from '../config';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050608] border-t border-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand & Developer Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={BRAND_ASSETS.logo}
                  alt="Khukuri Arena Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(220,38,38,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-wider text-white">
                  KHUKURI ARENA
                </span>
                <span className="block text-[11px] text-red-500 font-semibold uppercase tracking-wider">
                  Esports Platform Nepal
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Nepal&apos;s premier Free Fire tournament and custom room community. Built for competitive players to battle, rank up, and claim victory.
            </p>

            <div className="text-xs text-neutral-300 font-medium pt-1">
              Developed by <span className="text-white font-bold">{APP_DETAILS.developer}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-red-400 transition-colors">
                  App Features
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-red-400 transition-colors">
                  Download APK (v{APP_DETAILS.version})
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  Contact &amp; Support
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGuide}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Website Owner &amp; Hosting Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Official Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4">
              Official Contact &amp; Support
            </h4>
            <p className="text-xs text-neutral-400">
              For direct assistance, tournament issues, or app support, reach out to <strong className="text-neutral-200">{APP_DETAILS.developer}</strong> through our official channels:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              
              {/* Email Support Box */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>Support Email</span>
                </div>
                <div className="text-xs font-mono text-white select-all break-all">
                  {CONTACT_CONFIG.supportEmail}
                </div>
                <a
                  href={`mailto:${CONTACT_CONFIG.supportEmail}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Support</span>
                </a>
              </div>

              {/* WhatsApp Contact Box */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Phone / WhatsApp</span>
                </div>
                <div className="text-xs font-mono text-white select-all">
                  {CONTACT_CONFIG.whatsappNumber}
                </div>
                <a
                  href={CONTACT_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Contact on WhatsApp</span>
                </a>
              </div>

            </div>

            <div className="text-[11px] text-neutral-400">
              Operating Hours: {CONTACT_CONFIG.supportHours}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center md:text-left">
          <div>
            &copy; {currentYear} Khukuri Arena. Developed by{' '}
            <span className="text-neutral-300 font-semibold">{APP_DETAILS.developer}</span>. All rights reserved.
          </div>

          <div className="max-w-xl text-[11px] text-neutral-400 leading-normal">
            Khukuri Arena is an independent tournament organization platform for Nepali players. Free Fire and Garena are registered trademarks of their respective owners.
          </div>
        </div>

      </div>
    </footer>
  );
};
