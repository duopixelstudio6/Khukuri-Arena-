import React, { useState } from 'react';
import { Download, Menu, X, BookOpen, Shield } from 'lucide-react';
import { APP_DETAILS, BRAND_ASSETS } from '../config';

interface HeaderProps {
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07070a]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <a href="#" className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <img
                src={BRAND_ASSETS.logo}
                alt="Khukuri Arena Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(220,38,38,0.5)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-wider text-white leading-none group-hover:text-red-500 transition-colors">
                KHUKURI ARENA
              </span>
              <span className="text-[11px] font-medium tracking-widest uppercase text-neutral-400">
                Free Fire Esports Nepal
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#download" className="hover:text-white transition-colors">
              Download
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-300 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer"
              title="Publishing & Configuration Guide for Android/Web"
            >
              <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
              <span>Owner Guide</span>
            </button>

            <a
              href="#download"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-md shadow-red-950/40 hover:shadow-red-600/30 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Get APK v{APP_DETAILS.version}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#download"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d12] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-md transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-md transition-colors"
            >
              Features
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-md transition-colors"
            >
              Download APK
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-md transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-md transition-colors"
            >
              Contact &amp; Support
            </a>
          </nav>

          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-red-500" />
              <span>Publisher Setup &amp; Help</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
