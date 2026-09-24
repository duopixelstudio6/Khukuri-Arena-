import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  HardDrive, 
  Tag, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle, 
  ExternalLink,
  Settings,
  FolderOpen,
  PlaySquare,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { APP_DETAILS, APK_DOWNLOAD_URL, BRAND_ASSETS } from '../config';

interface DownloadSectionProps {
  onOpenGuide: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenGuide }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const isReady = Boolean(APK_DOWNLOAD_URL && APK_DOWNLOAD_URL.trim() !== '');

  const handleCopyLink = () => {
    if (isReady) {
      navigator.clipboard.writeText(APK_DOWNLOAD_URL);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const steps = [
    {
      step: '01',
      title: 'Download the APK',
      desc: 'Tap the Download Khukuri Arena APK button above to start downloading the file to your Android phone.',
      icon: Download,
    },
    {
      step: '02',
      title: 'Open the Downloaded File',
      desc: 'Once the download finishes, pull down your notification tray or open your phone’s Files/Downloads folder.',
      icon: FolderOpen,
    },
    {
      step: '03',
      title: 'Allow Installation from this Source',
      desc: 'If Android prompts you about installing unknown apps from your browser, tap Settings and enable "Allow from this source".',
      icon: Settings,
    },
    {
      step: '04',
      title: 'Install & Launch Khukuri Arena',
      desc: 'Tap Install on the package screen. Once complete, open Khukuri Arena, log in, and join your first tournament!',
      icon: PlaySquare,
    },
  ];

  return (
    <section id="download" className="relative py-20 sm:py-28 bg-[#06070a] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
            <Smartphone className="w-4 h-4 text-red-500" />
            <span>Official Android APK</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-wider text-white mb-4">
            Get <span className="text-silver-gradient">Khukuri Arena</span>
          </h2>
          <p className="text-base text-neutral-400 font-normal leading-relaxed">
            Download the official Android package file directly to your smartphone. Free to download, safe, and ready for competition.
          </p>
        </div>

        {/* Main Download Card */}
        <div className="relative rounded-3xl bg-[#0c0e15] border border-neutral-800 p-6 sm:p-10 mb-16 shadow-2xl shadow-black/80">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Logo Column */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-2 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-center justify-center">
                <img
                  src={BRAND_ASSETS.logo}
                  alt="Khukuri Arena Official Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(220,38,38,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Official Release
              </span>
            </div>

            {/* App Details & Download Button */}
            <div className="flex-grow w-full text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">
                    {APP_DETAILS.name}
                  </h3>
                  <p className="text-sm text-red-500 font-medium">
                    {APP_DETAILS.tagline}
                  </p>
                </div>
                
                <div className="flex items-center justify-center lg:justify-end gap-2 text-xs font-semibold text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Safe &amp; Verified APK</span>
                </div>
              </div>

              {/* App Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 my-4 border-y border-white/5 text-left">
                <div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5">
                  <span className="block text-[11px] font-medium text-neutral-400">Platform</span>
                  <span className="font-heading text-base font-bold text-white uppercase">{APP_DETAILS.platform}</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5">
                  <span className="block text-[11px] font-medium text-neutral-400">App Type</span>
                  <span className="font-heading text-base font-bold text-white uppercase">{APP_DETAILS.packageType}</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5">
                  <span className="block text-[11px] font-medium text-neutral-400">Version</span>
                  <span className="font-heading text-base font-bold text-white uppercase">v{APP_DETAILS.version}</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5">
                  <span className="block text-[11px] font-medium text-neutral-400">App Size</span>
                  <span className="font-heading text-base font-bold text-white uppercase">~{APP_DETAILS.fileSize}</span>
                </div>
              </div>

              {/* Primary Download Action Button */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {isReady ? (
                  <a
                    href={APK_DOWNLOAD_URL}
                    download={`KhukuriArena_v${APP_DETAILS.version}.apk`}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl shadow-xl shadow-red-950/60 hover:shadow-red-600/40 transition-all cursor-pointer"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Khukuri Arena APK</span>
                  </a>
                ) : (
                  <button
                    disabled
                    aria-disabled="true"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-heading font-bold uppercase tracking-wider text-neutral-400 bg-neutral-900/90 border border-neutral-800 rounded-xl cursor-not-allowed opacity-85"
                  >
                    <Download className="w-5 h-5 text-neutral-400" />
                    <span>Download link coming soon</span>
                  </button>
                )}

                {isReady && (
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
                    title="Copy direct download link"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedLink ? 'Copied' : 'Copy Link'}</span>
                  </button>
                )}
              </div>

              {/* Status explanation notice */}
              {!isReady && (
                <div className="mt-4 p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/30 flex items-start gap-3 text-left">
                  <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    <span className="font-semibold text-amber-400">Download Link Coming Soon: </span>
                    The official APK for v1.0 is currently undergoing final tournament server tests. As soon as the developer adds the direct link in <code className="px-1 py-0.5 rounded bg-black/50 text-neutral-300 font-mono text-[11px]">src/config.ts</code>, this button will become active immediately.
                  </div>
                </div>
              )}

              {/* Developer Configuration Quick Link */}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400 pt-2">
                <span>Developer: {APP_DETAILS.developer}</span>
                <button
                  onClick={onOpenGuide}
                  className="text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors cursor-pointer"
                >
                  How to configure APK link
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Simple Android Installation Instructions (Requirement 3) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-heading text-3xl font-bold uppercase tracking-wider text-white mb-2">
              How to Install the APK on Android
            </h3>
            <p className="text-sm text-neutral-400">
              Follow these 4 simple steps to install Khukuri Arena on your Android device.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((item) => {
              const StepIcon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative p-6 rounded-2xl bg-[#0b0d13] border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-2xl font-bold text-red-500">
                        {item.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-neutral-900/80 border border-white/5 flex items-center justify-center text-neutral-300">
                        <StepIcon className="w-4 h-4 text-red-400" />
                      </div>
                    </div>
                    <h4 className="font-heading text-lg font-bold uppercase text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <CheckCircle className="w-3.5 h-3.5 text-red-500/70" />
                    <span>Android standard step</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
