import React from 'react';
import { 
  Trophy, 
  Coins, 
  KeyRound, 
  UserCheck, 
  Wallet, 
  ShieldCheck, 
  Crosshair, 
  Flame,
  Info
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
}

const APP_FEATURES: FeatureItem[] = [
  {
    id: 'tournaments',
    title: 'Free Fire Tournaments',
    category: 'Daily Matches & Brackets',
    icon: Trophy,
    description: 'Participate in structured Free Fire tournaments organized throughout the week across classic maps like Bermuda, Purgatory, and Kalahari.',
    highlights: [
      'Solo, Duo, and Squad Battle Royale rooms',
      'Clash Squad (CS) competitive matches',
      'Real-time schedule of upcoming custom matches',
    ],
  },
  {
    id: 'prize-pools',
    title: 'Entry Fees & Prize Pools',
    category: 'Transparent Rewards',
    icon: Coins,
    description: 'Every tournament in the app displays fixed low entry fees alongside guaranteed prize pools and per-kill reward breakdowns before you register.',
    highlights: [
      'Transparent match entry fee requirements',
      'Calculated per-kill earnings & top-placement prizes',
      'Instant post-match points & reward distribution',
    ],
  },
  {
    id: 'room-details',
    title: 'Match Room Details & Rules',
    category: 'Fair Play & Room Keys',
    icon: KeyRound,
    description: 'Registered players receive the private Custom Room ID and Password directly inside their app account 15 minutes prior to match start time.',
    highlights: [
      'Encrypted room ID and password distribution',
      'Standard esports tournament rules & gun property rules',
      'Zero-tolerance anti-cheat & fair play monitoring',
    ],
  },
  {
    id: 'player-profile',
    title: 'Player Account & Points System',
    category: 'Career Tracking',
    icon: UserCheck,
    description: 'Build your competitive gaming profile with comprehensive match history, overall kill stats, tournament standings, and victory points.',
    highlights: [
      'Personal player profile tied to your Free Fire UID',
      'Track total matches played, kills, and tournament wins',
      'Level up your arena rank as you compete',
    ],
  },
  {
    id: 'payments',
    title: 'eSewa & Khalti Payment Support',
    category: 'Nepali Wallet Integration',
    icon: Wallet,
    description: 'Engineered specifically for players in Nepal, supporting direct, hassle-free wallet payments for match entries and prize pool withdrawals.',
    highlights: [
      'Seamless match fee top-ups via eSewa & Khalti',
      'Fast, direct prize pool withdrawal to your wallet',
      'Zero foreign exchange conversion hassles (NPR native)',
    ],
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-[#090a0f] border-t border-b border-neutral-900 overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
            <Flame className="w-4 h-4 text-red-500" />
            <span>Built For Competitive Mobile Gamers</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-wider text-white mb-4">
            Khukuri Arena <span className="text-fire-gradient">Features</span>
          </h2>
          <p className="text-base text-neutral-400 font-normal leading-relaxed">
            Everything Nepali Free Fire players need to compete in organized custom room tournaments, monitor performance, and win cash prizes.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {APP_FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            const isHighlight = idx === 0 || idx === 4;

            return (
              <div
                key={feature.id}
                className={`relative flex flex-col p-6 sm:p-7 rounded-2xl bg-[#0e1017] border transition-all duration-200 hover:-translate-y-1 ${
                  isHighlight 
                    ? 'border-red-900/40 hover:border-red-600/60 shadow-lg shadow-red-950/20' 
                    : 'border-white/5 hover:border-white/15'
                }`}
              >
                {/* Category kicker */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-red-400">
                    {feature.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900/90 border border-white/5 flex items-center justify-center text-red-500">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white mb-2.5">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                {/* Highlights List */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  {feature.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Crosshair className="w-3.5 h-3.5 text-red-500/80 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* 6th Card: Fair Play & Security Assurance */}
          <div className="relative flex flex-col p-6 sm:p-7 rounded-2xl bg-[#0e1017] border border-white/5 hover:border-white/15 transition-all duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                Integrity &amp; Fair Play
              </span>
              <div className="w-10 h-10 rounded-xl bg-neutral-900/90 border border-white/5 flex items-center justify-center text-neutral-300">
                <ShieldCheck className="w-5 h-5 text-neutral-300" />
              </div>
            </div>

            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white mb-2.5">
              Strict Anti-Cheat Policy
            </h3>

            <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">
              Khukuri Arena maintains strict tournament regulations to ensure clean competition for all participants.
            </p>

            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="flex items-start gap-2 text-xs text-neutral-300">
                <Crosshair className="w-3.5 h-3.5 text-neutral-500 mt-0.5 flex-shrink-0" />
                <span>Zero tolerance for hacks, scripts, and third-party tools</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-300">
                <Crosshair className="w-3.5 h-3.5 text-neutral-500 mt-0.5 flex-shrink-0" />
                <span>Screenshot submission for score verification</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-300">
                <Crosshair className="w-3.5 h-3.5 text-neutral-500 mt-0.5 flex-shrink-0" />
                <span>Fair match rooms monitored by tournament referees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory App Feature Clarification Disclaimer */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#07080c] border border-neutral-800 flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" />
          <div className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            <span className="font-semibold text-neutral-200">Mobile App Features Notice: </span>
            The features and tournament systems described above operate entirely inside the Khukuri Arena Android mobile application. This website serves as the official portal for APK downloads, version updates, and app information.
          </div>
        </div>

      </div>
    </section>
  );
};
