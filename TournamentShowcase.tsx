import React from 'react';
import { Swords, Users, ShieldAlert, Award, Timer, ChevronRight } from 'lucide-react';
import heroArenaImg from '../assets/images/hero_tournament_arena_1790171343502.jpg';
import matchRoomImg from '../assets/images/tournament_match_room_1790171357203.jpg';

export const TournamentShowcase: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-[#07080d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Esports Split Banner */}
        <div className="relative rounded-3xl bg-[#0b0d14] border border-neutral-800 overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-500">
                <Swords className="w-4 h-4 text-red-500" />
                <span>The Battleground Experience</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white leading-tight">
                Built For Serious <span className="text-fire-gradient">Free Fire</span> Competitors
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Whether you prefer Solo survival runs or Squad skirmishes across Bermuda and Kalahari, Khukuri Arena organizes regular competitive custom rooms with verified Nepali players.
              </p>

              {/* Tournament Mode Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
                  <span className="block font-heading text-2xl font-bold text-white">SOLO &amp; SQUAD</span>
                  <span className="text-xs text-neutral-400">Battle Royale Matches</span>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
                  <span className="block font-heading text-2xl font-bold text-red-500">CLASH SQUAD</span>
                  <span className="text-xs text-neutral-400">4v4 Custom Rooms</span>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="block font-heading text-2xl font-bold text-white">15 MIN</span>
                  <span className="text-xs text-neutral-400">Prior Room Key Delivery</span>
                </div>
              </div>

              {/* Notice */}
              <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
                <Timer className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Match timings, room passwords, and kill rewards are managed strictly inside the Android app.</span>
              </div>
            </div>

            {/* Right Visual Image Showcase Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src={heroArenaImg}
                  alt="Khukuri Arena Esports Tournament Stage"
                  className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Bottom text overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block font-heading text-sm font-bold text-white uppercase">
                      Nepal Esports Stage
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      High intensity Free Fire tournament rooms
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-red-600/30 border border-red-500/40 flex items-center justify-center text-red-400">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
