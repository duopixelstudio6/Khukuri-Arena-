import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ExternalLink, Copy, Check, Clock, UserCheck } from 'lucide-react';
import { APP_DETAILS, CONTACT_CONFIG } from '../config';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#07080d] border-t border-neutral-900 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
            <MessageSquare className="w-4 h-4 text-red-500" />
            <span>Official Support &amp; Developer</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-wider text-white mb-4">
            Contact <span className="text-fire-gradient">Khukuri Arena</span>
          </h2>
          <p className="text-base text-neutral-400 font-normal leading-relaxed">
            Have questions about tournaments, APK installation, or business inquiries? Connect directly with the official development and support team.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          
          {/* Card 1: Official Email Support */}
          <div className="relative p-7 sm:p-8 rounded-2xl bg-[#0c0e15] border border-neutral-800 hover:border-red-900/50 transition-all duration-200 flex flex-col justify-between shadow-xl shadow-black/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{CONTACT_CONFIG.supportHours}</span>
                </span>
              </div>

              <span className="block text-xs font-semibold uppercase tracking-wider text-red-400 mb-1">
                Official Support Email
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Email Support Team
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                Send your tournament inquiries, player ID verification issues, or partnership proposals directly to our inbox.
              </p>

              {/* Email Address Display Box with Copy */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs sm:text-sm text-neutral-200 truncate select-all">
                  {CONTACT_CONFIG.supportEmail}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_CONFIG.supportEmail, 'email')}
                  className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Email Action Button */}
            <a
              href={`mailto:${CONTACT_CONFIG.supportEmail}`}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl shadow-lg shadow-red-950/40 hover:shadow-red-600/30 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email Support</span>
            </a>
          </div>

          {/* Card 2: Phone / WhatsApp Direct Contact */}
          <div className="relative p-7 sm:p-8 rounded-2xl bg-[#0c0e15] border border-neutral-800 hover:border-emerald-900/50 transition-all duration-200 flex flex-col justify-between shadow-xl shadow-black/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/15 border border-emerald-600/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct WhatsApp Line</span>
                </span>
              </div>

              <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                Phone &amp; WhatsApp
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                Connect directly for instant match room assistance, wallet payment support, or fast help with the Android APK.
              </p>

              {/* WhatsApp Number Display Box with Copy */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-sm text-neutral-200 truncate select-all">
                  {CONTACT_CONFIG.whatsappNumber}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_CONFIG.whatsappNumber, 'phone')}
                  className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                  title="Copy WhatsApp number"
                  aria-label="Copy WhatsApp number"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Action Button */}
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Developer Studio Attribution Bar */}
        <div className="p-5 rounded-2xl bg-[#090b10] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-300">
              <UserCheck className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <span className="block text-xs text-neutral-400">Official App Developer</span>
              <span className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                {APP_DETAILS.developer}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`mailto:${CONTACT_CONFIG.supportEmail}`}
              className="text-neutral-400 hover:text-red-400 transition-colors"
            >
              {CONTACT_CONFIG.supportEmail}
            </a>
            <span className="text-neutral-600">·</span>
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              {CONTACT_CONFIG.whatsappNumber}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
