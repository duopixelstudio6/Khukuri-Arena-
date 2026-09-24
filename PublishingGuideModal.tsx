import React, { useState } from 'react';
import { X, Copy, Check, Smartphone, Globe, Link2, ExternalLink, Code, Sparkles, AlertCircle } from 'lucide-react';
import { APK_DOWNLOAD_URL, SITE_URL, CONTACT_CONFIG } from '../config';

interface PublishingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublishingGuideModal: React.FC<PublishingGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'config' | 'mobile-hosting' | 'seo'>('config');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0c0e17] border border-neutral-700 shadow-2xl p-6 sm:p-8 my-8 text-neutral-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-500">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
                Website Publisher &amp; Setup Guide
              </h3>
              <p className="text-xs text-neutral-400">
                Easy configuration and free hosting guide designed for Android phone owners
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 mb-6 p-1 bg-neutral-900 rounded-xl border border-white/5">
          <button
            onClick={() => setActiveTab('config')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'config'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            1. Where to Add APK &amp; Info
          </button>
          <button
            onClick={() => setActiveTab('mobile-hosting')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'mobile-hosting'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            2. Free Android Hosting
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'seo'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            3. Google Search &amp; Social
          </button>
        </div>

        {/* Tab 1: Configuration */}
        {activeTab === 'config' && (
          <div className="space-y-6 text-sm">
            <div className="p-4 rounded-xl bg-neutral-900/70 border border-white/5">
              <span className="font-heading text-lg font-bold uppercase text-white block mb-1">
                Single Configuration File: <code className="text-red-400 font-mono text-xs">src/config.ts</code>
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All customizable values for the website are located inside <strong className="text-neutral-200">src/config.ts</strong>. You can open and edit this file directly in GitHub on your mobile Chrome browser.
              </p>
            </div>

            {/* Step A: Real APK URL */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Link2 className="w-4 h-4 text-red-500" />
                  A. Add your Real APK Download Link
                </span>
                <span className="text-[11px] text-neutral-400">Lines ~15–18</span>
              </div>
              <p className="text-xs text-neutral-400">
                Upload your APK to Google Drive, MediaFire, or GitHub Releases, and paste the direct link:
              </p>
              <div className="relative group">
                <pre className="p-3 rounded-xl bg-black/60 border border-neutral-800 text-xs font-mono text-emerald-400 overflow-x-auto">
{`// When you have your APK, replace "" with your link:
export const APK_DOWNLOAD_URL: string = "https://your-server.com/KhukuriArena_v1.0.apk";`}
                </pre>
                <button
                  onClick={() => handleCopy(`export const APK_DOWNLOAD_URL: string = "https://your-server.com/KhukuriArena_v1.0.apk";`, 'apk')}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                  title="Copy snippet"
                >
                  {copiedKey === 'apk' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Step B: Final Website Domain */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-sky-400" />
                  B. Add your Final Website URL
                </span>
                <span className="text-[11px] text-neutral-400">Line ~35</span>
              </div>
              <p className="text-xs text-neutral-400">
                Update with your custom domain or your free hosting address (e.g. Vercel/GitHub Pages):
              </p>
              <div className="relative group">
                <pre className="p-3 rounded-xl bg-black/60 border border-neutral-800 text-xs font-mono text-sky-300 overflow-x-auto">
{`export const SITE_URL: string = "https://khukuriarena.com";`}
                </pre>
                <button
                  onClick={() => handleCopy(`export const SITE_URL: string = "https://khukuriarena.com";`, 'site')}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                >
                  {copiedKey === 'site' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Step C: Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-amber-400" />
                  C. Add your Contact &amp; Community Channels
                </span>
                <span className="text-[11px] text-neutral-400">Lines ~40–50</span>
              </div>
              <p className="text-xs text-neutral-400">
                Edit support email, WhatsApp number, Telegram, Discord, and YouTube links:
              </p>
              <div className="relative group">
                <pre className="p-3 rounded-xl bg-black/60 border border-neutral-800 text-xs font-mono text-neutral-300 overflow-x-auto">
{`export const CONTACT_CONFIG = {
  developerStudio: "Duo Pixel Studio",
  supportEmail: "duopixelstudio6@gmail.com",
  whatsappNumber: "+9779846711977",
  whatsappUrl: "https://wa.me/9779846711977",
  mailtoUrl: "mailto:duopixelstudio6@gmail.com",
  supportHours: "10:00 AM – 10:00 PM NPT (Daily)",
};`}
                </pre>
                <button
                  onClick={() => handleCopy(`export const CONTACT_CONFIG = {
  developerStudio: "Duo Pixel Studio",
  supportEmail: "duopixelstudio6@gmail.com",
  whatsappNumber: "+9779846711977",
  whatsappUrl: "https://wa.me/9779846711977",
  mailtoUrl: "mailto:duopixelstudio6@gmail.com",
  supportHours: "10:00 AM – 10:00 PM NPT (Daily)",
};`, 'contact')}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                >
                  {copiedKey === 'contact' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Hosting from Android Phone */}
        {activeTab === 'mobile-hosting' && (
          <div className="space-y-5 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-emerald-300">
              <strong className="block text-emerald-400 mb-1">100% Free Hosting — No Credit Card Needed</strong>
              You can deploy this site in under 3 minutes directly using Chrome on your Android smartphone!
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-900 border border-white/5">
                <h4 className="font-heading text-base font-bold uppercase text-white mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-sans">1</span>
                  Option A: Vercel (Recommended, Fastest)
                </h4>
                <ol className="list-decimal pl-5 space-y-1.5 text-neutral-400 text-xs">
                  <li>Open <strong className="text-white">github.com</strong> on your phone and create a free repository for this code.</li>
                  <li>Go to <strong className="text-white">vercel.com</strong> on your phone and tap &ldquo;Sign up with GitHub&rdquo;.</li>
                  <li>Tap &ldquo;Add New Project&rdquo;, select your <strong className="text-white">Khukuri Arena</strong> repository, and tap <strong className="text-white">Deploy</strong>.</li>
                  <li>Within 30 seconds, Vercel gives you a free live SSL link (e.g., <code className="text-emerald-400">khukuri-arena.vercel.app</code>) that you can immediately share on YouTube &amp; TikTok.</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-white/5">
                <h4 className="font-heading text-base font-bold uppercase text-white mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-sans">2</span>
                  Option B: Netlify
                </h4>
                <ol className="list-decimal pl-5 space-y-1.5 text-neutral-400 text-xs">
                  <li>Sign in to <strong className="text-white">app.netlify.com</strong> using GitHub.</li>
                  <li>Tap &ldquo;Import from Git&rdquo; &rarr; Choose your repository.</li>
                  <li>Build command is <code className="text-neutral-200">npm run build</code>, publish directory is <code className="text-neutral-200">dist</code>.</li>
                  <li>Click &ldquo;Deploy site&rdquo;. Your website is live worldwide!</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-white/5">
                <h4 className="font-heading text-base font-bold uppercase text-white mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-sans">3</span>
                  Connecting a Custom Domain (.com / .com.np)
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  You can register a free <strong className="text-white">.com.np</strong> domain (free for Nepali citizens via register.com.np) or buy a <strong className="text-white">.com</strong> domain, then link it to Vercel/Netlify with one CNAME record.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Google SEO & Social Promotion */}
        {activeTab === 'seo' && (
          <div className="space-y-5 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/5">
              <h4 className="font-heading text-base font-bold uppercase text-white mb-2">
                Already Pre-Configured for Google Search:
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span><strong>Title &amp; Meta Description:</strong> Optimized for &ldquo;Khukuri Arena&rdquo;, &ldquo;Free Fire tournament Nepal&rdquo;, and &ldquo;Download APK&rdquo;.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span><strong>robots.txt:</strong> Generated at <code className="text-red-400 font-mono">/robots.txt</code> allowing search engine bots.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span><strong>sitemap.xml:</strong> Generated at <code className="text-red-400 font-mono">/sitemap.xml</code> with all key sections.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span><strong>Open Graph &amp; Twitter Cards:</strong> Shows full preview cards when pasted into WhatsApp, Facebook, TikTok, Discord, and YouTube descriptions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span><strong>Schema.org SoftwareApplication:</strong> Valid JSON-LD structured data for Android APK (27.5MB, Duo Pixel Studio).</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-white/5 space-y-2">
              <h4 className="font-heading text-base font-bold uppercase text-white">
                How to Get Indexed on Google Search Quickly:
              </h4>
              <ol className="list-decimal pl-5 space-y-2 text-neutral-400 text-xs">
                <li>Go to <strong className="text-white">search.google.com/search-console</strong> on your phone.</li>
                <li>Add your published website URL (e.g., <code className="text-sky-300">https://khukuriarena.com</code>).</li>
                <li>Go to the <strong className="text-white">Sitemaps</strong> tab and submit <code className="text-red-400 font-mono">sitemap.xml</code>.</li>
                <li>Share your link in your YouTube video descriptions and TikTok profile bio — Google picks up external links rapidly!</li>
              </ol>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-xl transition-colors cursor-pointer"
          >
            Got it, Back to Website
          </button>
        </div>

      </div>
    </div>
  );
};
