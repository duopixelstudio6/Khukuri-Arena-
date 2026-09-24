import React from 'react';
import { Download, ShieldCheck, Zap, Trophy, ChevronRight, CheckCircle2 } from 'lucide-react';
import { APP_DETAILS, APK_DOWNLOAD_URL, BRAND_ASSETS } from '../config';

export const Hero: React.FC = () => {
  const isDownloadReady = Boolean(APK_DOWNLOAD_URL && APK_DOWNLOAD_URL.trim() !== '');

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isDownloadReady) {
      // Smoothly navigate to the download section where the detailed status is shown
      e.preventDefault();
      const el = document.getElementById('download');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-[#060709] pointer-events-none">
        {/* Radial red spotlight behind the logo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-red-600/15 rounded-full blur-[100px] sm:blur-[140px]" />
        
        {/* Dark subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
        
        {/* Bottom fade into section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#060709] to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Subtle Tagline Kicker (Zero-Pill compliant clean typography) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-red-500 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>Nepal&apos;s Dedicated Free Fire Tournament Platform</span>
        </div>

        {/* 1. Large Official Khukuri Arena Logo */}
        <div className="relative mb-8 group">
          {/* Subtle logo back-glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-b from-red-600/25 via-red-900/10 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 p-2 mx-auto flex items-center justify-center">
            <img
              src={BRAND_ASSETS.logo}
              alt="Khukuri Arena Official Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(220,38,38,0.5)] transform transition-transform duration-300 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>
        </div>

        {/* Heading: KHUKURI ARENA */}
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-wider text-white leading-none mb-3">
          <span className="text-silver-gradient">KHUKURI</span>{' '}
          <span className="text-fire-gradient">ARENA</span>
        </h1>

        {/* Tagline: Your Arena. Your Victory. */}
        <p className="font-heading text-xl sm:text-3xl md:text-4xl font-bold tracking-wide text-neutral-200 mb-4">
          Your Arena. <span className="text-red-500">Your Victory.</span>
        </p>

        {/* Short description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-10 text-balance">
          Join Free Fire tournaments, compete with players, and claim your victories with Khukuri Arena.
        </p>

        {/* Action Button & Metadata */}
        <div className="w-full max-w-md flex flex-col items-center gap-4">
          <a
            href={isDownloadReady ? APK_DOWNLOAD_URL : "#download"}
            onClick={handleDownloadClick}
            download={isDownloadReady ? `KhukuriArena_v${APP_DETAILS.version}.apk` : undefined}
            className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl shadow-xl shadow-red-950/60 hover:shadow-red-600/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Download className="w-5 h-5 text-white" />
            <span>Download APK</span>
            <span className="text-xs font-sans font-medium px-2 py-0.5 rounded bg-black/30 text-white/90">
              v{APP_DETAILS.version}
            </span>
          </a>

          {/* Direct status indicator */}
          {!isDownloadReady ? (
            <p className="text-xs text-neutral-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              <span>Official v1.0 release link coming soon · Tap for details</span>
            </p>
          ) : (
            <p className="text-xs text-neutral-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified direct APK download · Fast &amp; Virus-Free</span>
            </p>
          )}

          {/* Quick Specification Badges (Unboxed metadata with typographic separators) */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-400 pt-2">
            <span>Android 7.0+</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Approx. {APP_DETAILS.fileSize}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Nepal Esports</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Duo Pixel Studio</span>
          </div>
        </div>

      </div>
    </section>
  );
};
