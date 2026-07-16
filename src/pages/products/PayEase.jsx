import React from 'react'
import { ArrowLeft, Zap, ShieldCheck, Wifi, Tv, Smartphone, CheckCircle2 } from 'lucide-react'
import payeaseFeatureBill from '../../assets/payease_feature_bill.png'
import payeaseStoreFeature from '../../assets/payease_store_feature.png'
import payeaseLogo from '../../assets/payeaselogo.png'

/* ─── Inline SVG phone icon helper ─── */
const SvgIcon = ({ d, className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d={d} />
  </svg>
)

/* ─── Why Choose feature data ─── */
const WHY_FEATURES = [
  {
    icon: <Zap size={22} />,
    title: 'Lightning-Fast Transactions',
    body: 'Complete purchases in seconds with instant delivery across all supported services.',
    accent: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Secure Every Step',
    body: 'Modern security standards protect every transaction, giving you peace of mind every time.',
    accent: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    title: 'Reliable Service',
    body: 'Built for consistency — PayEase keeps your essential digital services running without interruption.',
    accent: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3L11 13V7h1.5v5.4l4.8 2.85-.95 1.65-.05-.6z"/>
      </svg>
    ),
    title: 'Available Anytime',
    body: 'Purchase digital services at your convenience — morning, night, or on the go.',
    accent: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
    ),
    title: 'Simple & Intuitive',
    body: 'A clean, user-friendly interface makes buying digital services effortless for everyone.',
    accent: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
  },
  {
    icon: <CheckCircle2 size={22} />,
    title: 'Built for Everyday Use',
    body: 'Everything you need for digital utility payments is available in one easy-to-use platform.',
    accent: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
  },
]

/* ─── Services data ─── */
const SERVICES = [
  {
    label: 'Airtime Recharge',
    body: 'Top up airtime for all major mobile networks instantly.',
    iconBg: 'bg-violet-100 dark:bg-violet-900/30',
    iconColor: 'text-violet-600 dark:text-violet-300',
    d: 'M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z',
  },
  {
    label: 'Data Bundles',
    body: 'Purchase affordable internet data plans with fast activation.',
    iconBg: 'bg-pink-100 dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-300',
    d: 'M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z',
  },
  {
    label: 'Electricity Bills',
    body: 'Buy electricity tokens and receive them instantly after payment.',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-300',
    d: 'M7 2v11h3v9l7-12h-4l4-8z',
  },
  {
    label: 'Cable TV Subscription',
    body: 'Renew your favourite TV subscription without visiting an agent.',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconColor: 'text-cyan-600 dark:text-cyan-300',
    d: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z',
  },
  {
    label: 'Digital Utility Payments',
    body: 'Manage all your digital utility services from one convenient platform.',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-300',
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
  },
]

/* ─── How it works steps ─── */
const STEPS = [
  {
    num: '01',
    title: 'Create Your Account',
    body: 'Sign up in just a few minutes and get started immediately.',
  },
  {
    num: '02',
    title: 'Select a Service',
    body: 'Choose airtime, data, electricity, cable TV, or another available digital utility.',
  },
  {
    num: '03',
    title: 'Complete Your Payment',
    body: 'Review your order and pay securely in one step.',
  },
  {
    num: '04',
    title: 'Instant Delivery',
    body: 'Your purchase is processed immediately so you can continue with your day.',
  },
]

export default function PayEase({ onBack }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080D1C] text-neutral-900 dark:text-white transition-colors duration-300">

      {/* ─── BACK BUTTON ─── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] dark:text-[#A78BFA] hover:opacity-75 cursor-pointer transition-opacity"
        >
          <ArrowLeft size={16} />
          Back to Product
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Phone mockup left │ Headline + tagline right
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT ── phone card */}
          <div className="bg-[#EEF3FB] dark:bg-[#0D1630] rounded-3xl p-8 md:p-12 flex items-center justify-center min-h-[500px]">
            <div className="w-[240px] h-[410px] bg-white dark:bg-[#0D0D1A] rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-[#1a1a2e] dark:border-neutral-800 flex flex-col text-left">
              
              {/* ===== PURPLE HEADER ===== */}
              <div className="bg-gradient-to-br from-[#8B3CF7] via-[#7C3AED] to-[#6D28D9] px-3.5 pt-2.5 pb-3.5 flex flex-col gap-2">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-white">
                  <span className="text-[7.5px] font-bold font-mono">9:41</span>
                  <div className="flex items-center gap-0.5">
                    <div className="flex items-end gap-[1px]">
                      <span className="w-[1.5px] h-[3px] bg-white rounded-sm"></span>
                      <span className="w-[1.5px] h-[4px] bg-white rounded-sm"></span>
                      <span className="w-[1.5px] h-[5px] bg-white rounded-sm"></span>
                      <span className="w-[1.5px] h-[6px] bg-white rounded-sm"></span>
                    </div>
                    <svg width="8" height="6" viewBox="0 0 10 8" fill="white" className="mx-0.5"><path d="M5 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM1.5 3.5C2.7 2.3 3.8 1.5 5 1.5s2.3.8 3.5 2l1-1C8.1 1.1 6.6 0 5 0S1.9 1.1.5 2.5l1 1zm1.5 1.5C3.7 4.3 4.3 4 5 4s1.3.3 2 1l1-1C7.1 3.1 6.1 2.5 5 2.5S2.9 3.1 2 4l1 1z"/></svg>
                    <div className="flex items-center gap-[1px]">
                      <div className="w-3.5 h-1.5 rounded-[2px] border border-white relative overflow-hidden">
                        <div className="absolute inset-[1px] bg-white rounded-sm"></div>
                      </div>
                      <div className="w-[1px] h-1 bg-white rounded-r-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Profile Row */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6.5 h-6.5 rounded-full bg-[#4C1D95] border-2 border-white/30 overflow-hidden flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/80"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                    </div>
                    <div className="leading-none text-left">
                      <span className="text-[7px] text-white/80 font-medium block">Welcome Back</span>
                      <span className="text-[10px] font-extrabold text-white block">Kris4</span>
                    </div>
                  </div>
                  <div className="w-6.5 h-6.5 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                  </div>
                </div>

                {/* Wallet History link */}
                <div className="flex justify-end">
                  <span className="text-[7px] text-white/70 font-semibold flex items-center gap-0.5">
                    Wallet History
                    <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white/70"><path d="M10 17l5-5-5-5v10z"/></svg>
                  </span>
                </div>

                {/* Available Balance Card */}
                <div className="bg-[#EDE9FE] dark:bg-[#2E1A5A] rounded-xl px-3 py-2.5 flex justify-between items-center shadow-md">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[6.5px] font-semibold text-neutral-600 dark:text-purple-200 block">Available balance</span>
                    <span className="text-[15px] font-black text-neutral-900 dark:text-white tracking-tight leading-none">₦105,000</span>
                  </div>
                  <div className="bg-[#7C3AED] text-white text-[7px] font-extrabold px-2.5 py-1.5 rounded-lg shadow-sm whitespace-nowrap">
                    Fund Wallet
                  </div>
                </div>
              </div>

              {/* ===== WHITE BODY — 3x2 SVG ICON GRID + REFERRAL ===== */}
              <div className="bg-white dark:bg-[#0D0D1A] flex-1 px-3 pt-3 pb-3 flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Airtime',     d: 'M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z' },
                    { label: 'Data',        d: 'M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z' },
                    { label: 'Electricity', d: 'M7 2v11h3v9l7-12h-4l4-8z' },
                    { label: 'Betting',     d: 'M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2z' },
                    { label: 'Internet',    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
                    { label: 'Cable TV',    d: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white dark:bg-[#161626] border border-[#EDE9FE] dark:border-[#2E1A5A] rounded-xl flex flex-col items-center justify-center py-2 gap-0.5 shadow-sm">
                      <div className="w-5.5 h-5.5 rounded-full bg-[#F3EEFE] dark:bg-[#2E1A5A] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#7C3AED] dark:fill-[#A78BFA]">
                          <path d={item.d} />
                        </svg>
                      </div>
                      <span className="text-[7.5px] font-bold text-neutral-700 dark:text-neutral-300 text-center leading-tight">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* ===== REFERRAL CARD ===== */}
                <div className="p-2.5 bg-neutral-50 dark:bg-white/5 rounded-2xl flex justify-between items-center border border-neutral-100 dark:border-white/5">
                  <div className="space-y-1 text-left">
                    <div>
                      <span className="text-[5.5px] font-semibold text-neutral-400 dark:text-neutral-500 block leading-none mb-0.5">Referral Balance</span>
                      <span className="text-[8px] font-extrabold text-neutral-900 dark:text-white leading-none">+₦ 0.00</span>
                    </div>
                    <div>
                      <span className="text-[5.5px] font-semibold text-neutral-400 dark:text-neutral-500 block leading-none mb-0.5">Referral Code</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[8px] font-extrabold text-neutral-900 dark:text-white leading-none">Kris8284</span>
                        <svg viewBox="0 0 24 24" className="w-2 h-2 fill-[#7C3AED] dark:fill-[#A78BFA]"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button className="bg-[#F3EEFE] dark:bg-[#2E1A5A] text-[#7C3AED] dark:text-[#A78BFA] text-[6.5px] font-extrabold px-2 py-1 rounded-md whitespace-nowrap leading-none cursor-pointer">
                      Add to Wallet
                    </button>
                    <button className="bg-[#F3EEFE] dark:bg-[#2E1A5A] text-[#7C3AED] dark:text-[#A78BFA] text-[6.5px] font-extrabold px-2 py-1 rounded-md whitespace-nowrap leading-none cursor-pointer">
                      Share Code
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT ── headline */}
          <div className="space-y-7">
            <div className="flex items-center">
              <img
                src={payeaseLogo}
                alt="PayEase Logo"
                className="h-10 w-10 object-cover object-left rounded-xl"
              />
              <span className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white font-display">
                PayEase
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight text-neutral-950 dark:text-white">
              Buy airtime, data, electricity &amp; TV in <span className="text-[#7C3AED] dark:text-[#A78BFA]">seconds.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
              PayEase is a modern Virtual Top-Up (VTU) platform designed to make everyday
              digital utility payments effortlessly fast, secure, and reliable every single time.
            </p>

            <a
              href="https://calendly.com/kriscoresolutions/30min?month=2026-07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] dark:bg-[#7C3AED] dark:hover:bg-[#6D28D9] text-white font-bold text-base shadow-lg transition-all duration-200 cursor-pointer"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHY CHOOSE PAYEASE
          Dark navy full-width — 3×2 feature card grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#2D1060] dark:bg-[#160730] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Heading */}
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-4">Why Choose PayEase</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
              Everything you need, nothing you don't.
            </h2>
          </div>

          {/* 3-col feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_FEATURES.map(({ icon, title, body, accent }) => (
              <div
                key={title}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-7 space-y-4 transition-colors duration-200"
              >
                <div className={`w-11 h-11 rounded-xl ${accent} flex items-center justify-center`}>
                  {icon}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{title}</h3>
                <p className="text-sm text-purple-100/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — EVERYTHING YOU NEED (white bg, image + services grid)
          Image left │ Service cards right
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#080D1C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT ── image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={payeaseFeatureBill}
                alt="PayEase in action"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
              />
            </div>

            {/* RIGHT ── services */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED] dark:text-[#A78BFA] mb-3">Everything in One App</p>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
                  Five services. One platform.
                </h2>
              </div>

              <div className="space-y-4">
                {SERVICES.map(({ label, body, iconBg, iconColor, d }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 hover:border-[#7C3AED]/30 dark:hover:border-[#A78BFA]/30 transition-colors duration-200">
                    <div className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0`}>
                      <SvgIcon d={d} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-0.5">{label}</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — HOW IT WORKS (light gray bg, full-width)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0FF] dark:bg-[#0E0720] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Heading */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED] dark:text-[#A78BFA] mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
              Up and running in minutes.
            </h2>
          </div>

          {/* 4-column step grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ num, title, body }, i) => (
              <div key={num} className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-px bg-neutral-200 dark:bg-white/10" />
                )}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-black text-lg shadow-lg shadow-purple-500/20 relative z-10">
                    {num}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">{title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — SIMPLICITY STATEMENT (image left, copy right)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#080D1C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT ── copy */}
            <div className="space-y-7 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
                Designed around simplicity.
              </h2>
              <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Technology should simplify your life — not complicate it. PayEase combines speed,
                reliability, and thoughtful design to deliver a premium VTU experience that's easy
                to use for anyone.
              </p>
              <ul className="space-y-3">
                {[
                  'Instant airtime recharge',
                  'Affordable data bundles',
                  'Electricity token purchases',
                  'Cable TV subscription renewal',
                  'Secure payments, every time',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 size={18} className="text-[#7C3AED] dark:text-[#A78BFA] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/kriscoresolutions/30min?month=2026-07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] dark:bg-[#7C3AED] dark:hover:bg-[#6D28D9] text-white font-bold text-sm shadow-lg transition-all duration-200 cursor-pointer"
              >
                Take Control Today
              </a>
            </div>

            {/* RIGHT ── image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src={payeaseStoreFeature}
                alt="PayEase — simple and reliable"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — CTA BANNER (dark navy full-width)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#2D1060] dark:bg-[#160730] py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center space-y-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">Get Started Today</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-tight tracking-tight text-white">
            Take control of your everyday digital utility payments with PayEase.
          </h2>
          <p className="text-base text-purple-100/60 leading-relaxed max-w-lg mx-auto">
            Join thousands of users who trust PayEase for fast, reliable, and secure
            digital utility payments every day.
          </p>
          <a
            href="https://calendly.com/kriscoresolutions/30min?month=2026-07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white hover:bg-purple-50 text-[#2D1060] font-bold text-base shadow-2xl transition-all duration-200 cursor-pointer"
          >
            Get Started Free
          </a>
        </div>
      </section>

    </div>
  )
}
