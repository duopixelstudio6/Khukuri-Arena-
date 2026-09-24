import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { APP_DETAILS } from '../config';

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 'what-is',
      question: 'What is Khukuri Arena?',
      answer: 'Khukuri Arena is an esports tournament mobile app built specifically for Free Fire players in Nepal. Developed by Duo Pixel Studio, it offers organized daily custom room tournaments, transparent prize pools, fair-play monitoring, and direct integration with local digital wallets like eSewa and Khalti.',
    },
    {
      id: 'is-free',
      question: 'Is Khukuri Arena free to download?',
      answer: 'Yes, downloading and installing the Khukuri Arena APK is completely free. There are no fees to set up your player account. You only pay standard entry fees when you decide to register for specific cash prize tournaments.',
    },
    {
      id: 'how-install',
      question: 'How do I install the APK?',
      answer: (
        <div className="space-y-2">
          <p>Installing the APK on Android is straightforward:</p>
          <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-neutral-300">
            <li>Download the official APK file from the Download section on this website.</li>
            <li>Tap the downloaded file from your browser downloads or phone notification.</li>
            <li>If your phone asks for permission to install apps from your browser or file manager, tap Settings and toggle on &ldquo;Allow from this source&rdquo;.</li>
            <li>Tap &ldquo;Install&rdquo; and wait for the installation to finish, then launch Khukuri Arena.</li>
          </ol>
        </div>
      ),
    },
    {
      id: 'google-play',
      question: 'Is Khukuri Arena available on Google Play?',
      answer: (
        <div className="space-y-2">
          <p className="font-semibold text-red-400">
            No, Khukuri Arena is not distributed on the Google Play Store.
          </p>
          <p>
            Due to Google Play policies regarding real-money tournament prize distributions, Khukuri Arena is distributed exclusively as an authentic direct Android APK through this official website.
          </p>
          <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 text-xs text-neutral-400 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Always verify that you download Khukuri Arena only from this official domain to guarantee authentic, virus-free builds.</span>
          </div>
        </div>
      ),
    },
    {
      id: 'how-join',
      question: 'How do I join tournaments?',
      answer: (
        <div className="space-y-2">
          <p>Joining tournaments takes just a few steps inside the mobile app:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-neutral-300">
            <li>Open the Khukuri Arena app and register your account with your Free Fire in-game UID and nickname.</li>
            <li>Browse the tournament lobby to choose your preferred match (Solo, Duo, or Squad).</li>
            <li>Pay the match entry fee securely using your eSewa or Khalti account.</li>
            <li>15 minutes before match time, your app will reveal the private Custom Room ID and Password.</li>
            <li>Open Garena Free Fire, enter the Custom Room, and fight for victory and cash rewards!</li>
          </ul>
        </div>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#090a0f] border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
            <HelpCircle className="w-4 h-4 text-red-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-wider text-white mb-4">
            Got <span className="text-silver-gradient">Questions?</span>
          </h2>
          <p className="text-base text-neutral-400 font-normal leading-relaxed">
            Find answers to commonly asked questions about the Khukuri Arena APK, tournaments, and compatibility.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'bg-[#0f1118] border-red-900/40 shadow-lg shadow-black/40'
                    : 'bg-[#0c0d13] border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-400 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-red-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
