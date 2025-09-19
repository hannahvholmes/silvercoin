"use client";

import { motion } from "framer-motion";
import {
  Star,
  Crown,
  Coins,
  Settings,
  ShoppingBag,
  User,
  Search,
  ChevronRight,
} from "lucide-react";
import type { ReactNode } from "react";

/* ---------- Small UI helpers ---------- */
const Chip = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-400/30 px-3 py-1 text-xs font-medium shadow-[inset_0_0_0_1px_rgba(0,0,0,.2)]">
    {children}
  </span>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-zinc-800/70 border border-zinc-700 px-3 py-1 text-xs text-zinc-200">
    {children}
  </span>
);

const Section = ({
  title,
  children,
  cta,
}: {
  title: string;
  children: ReactNode;
  cta?: ReactNode;
}) => (
  <section className="mt-8">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-lg font-semibold tracking-wide text-amber-200 drop-shadow-[0_1px_0_rgba(0,0,0,.8)]">
        {title}
      </h2>
      {cta}
    </div>
    {children}
  </section>
);

/* ---------- Sample data ---------- */
const SLOTS = [
  { key: "wild-joker", label: "Wild Joker" },
  { key: "treasure-trove", label: "Treasure Trove" },
  { key: "royal-spins", label: "Royal Spins" },
  { key: "pyramid-riches", label: "Pyramid Riches" },
  { key: "neon-7s", label: "Neon 7s" },
  { key: "lucky-lanterns", label: "Lucky Lanterns" },
];
const TABLES = [
  { key: "roulette", label: "Roulette" },
  { key: "craps", label: "Craps" },
  { key: "wheel", label: "Wheel" },
  { key: "baccarat", label: "Baccarat" },
];
const CARDS = [
  { key: "blackjack", label: "Blackjack" },
  { key: "holdem", label: "Texas Hold'em" },
  { key: "baccarat-card", label: "Baccarat" },
  { key: "three-card", label: "Three Card" },
];

/* ---------- Game tile ---------- */
function GameTile({ name }: { name: string }) {
  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative aspect-[4/3] rounded-2xl border border-amber-400/20 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 shadow-[0_6px_20px_rgba(0,0,0,.4)] overflow-hidden group"
    >
      <div className="absolute inset-0 rounded-2xl ring-1 ring-amber-500/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl">🎰</span>
      </div>
      <div className="absolute -inset-x-6 -top-10 h-24 bg-gradient-to-b from-white/20 to-transparent rotate-6" />
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
        <div className="flex items-center gap-2">
          <Star className="size-4 text-amber-300 drop-shadow" />
          <span className="text-sm font-semibold tracking-wide text-amber-200">
            {name}
          </span>
        </div>
      </div>
    </motion.button>
  );
}

/* ---------- Mobile-safe Top Bar ---------- */
function TopBar() {
  return (
    <div className="w-full bg-zinc-950/70 border-b border-amber-400/10 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
        <div className="flex items-center gap-2 md:gap-3 py-2 flex-wrap sm:flex-nowrap min-w-0">
          <div className="flex items-center gap-2 text-amber-200 shrink-0">
            <Coins className="size-4" />
            <span className="text-xs">Gold Coins</span>
            <Pill>2,000,000</Pill>
          </div>

          <div className="flex items-center gap-2 text-amber-200 shrink-0">
            <Crown className="size-4" />
            <span className="text-xs">VIP</span>
            <Chip>Level 10</Chip>
          </div>

          <div className="ml-auto flex items-center gap-2 min-w-0">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700 w-full max-w-[200px]">
              <Search className="size-4 text-zinc-400 shrink-0" />
              <input
                placeholder="Search games"
                className="bg-transparent outline-none text-sm placeholder:text-zinc-500 w-full min-w-0"
              />
            </div>

            <button className="shrink-0 inline-flex items-center gap-2 rounded-full bg-amber-500 text-zinc-950 px-4 py-1.5 text-sm font-semibold shadow hover:bg-amber-400">
              <ShoppingBag className="size-4" /> Store
            </button>
            <button className="shrink-0 inline-flex items-center gap-2 rounded-full bg-zinc-800 border border-zinc-700 px-4 py-1.5 text-sm text-zinc-200 hover:bg-zinc-700">
              <User className="size-4" /> Account
            </button>
            <button className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-700">
              <Settings className="size-4" /> Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Header / Logo ---------- */
function MarqueeLogo() {
  return (
    <div className="relative flex flex-col items-center text-center py-6">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="relative">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-8 py-4 rounded-[24px] border-2 border-amber-400/70 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_0_0_6px_rgba(217,119,6,.15),0_12px_40px_rgba(0,0,0,.6)]"
        >
          <div className="text-[clamp(24px,5vw,44px)] font-extrabold tracking-wider text-amber-300 drop-shadow">
            SILVER COIN
          </div>
          <div className="mt-1 text-[clamp(10px,2.6vw,14px)] tracking-[0.35em] text-amber-200/80">
            SOCIAL CASINO
          </div>
        </motion.div>
      </div>
      <p className="relative mt-3 text-sm text-amber-100/70 max-w-prose">
        A nostalgic Rat Pack–era vibe with modern polish. Play slots, table
        games, and cards in Gold or Sweeps mode.
      </p>
    </div>
  );
}

/* ---------- Grid & Footer ---------- */
function Grid({ items }: { items: { key: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
      {items.map((g) => (
        <GameTile key={g.key} name={g.label} />
      ))}
    </div>
  );
}

function FooterCTA() {
  return (
    <div className="mt-10 mb-8">
      <button className="group inline-flex items-center gap-2 rounded-full bg-amber-500 text-zinc-950 px-6 py-2 font-semibold shadow hover:bg-amber-400">
        Browse All Games{" "}
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}

/* ---------- Page ---------- */
export default function SilverCoinLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f08] via-[#2a1309] to-[#120904] text-amber-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(255,200,50,.15),transparent_60%)]" />
      <TopBar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 overflow-hidden">
        <MarqueeLogo />
        <Section
          title="Slots"
          cta={<a className="text-xs text-amber-300 hover:underline" href="#">See all</a>}
        >
          <Grid items={SLOTS} />
        </Section>
        <Section title="Table Games">
          <Grid items={TABLES} />
        </Section>
        <Section title="Card Games">
          <Grid items={CARDS} />
        </Section>
        <FooterCTA />
      </main>
    </div>
  );
}