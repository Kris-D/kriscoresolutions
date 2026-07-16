import React from 'react'
import { ArrowLeft, Search, ShieldCheck, Bell, MessageCircle, Heart, CheckCircle2 } from 'lucide-react'
import homelinkFeatureEscrow from '../../assets/homelink_feature_escrow.png'
import homelinkWhoItsFor from '../../assets/homelink_who_its_for.png'
import homelinkLogo from '../../assets/homelinklogo.png'

/* ─── Inline SVG icon helper ─── */
const SvgIcon = ({ d, className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d={d} />
  </svg>
)

/* ─── Why Choose HomeLink feature data ─── */
const WHY_FEATURES = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Verified Listings',
    body: 'Every property on HomeLink is carefully verified. No fake listings. No outdated information. Just genuine opportunities.',
    accent: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: <Search size={22} />,
    title: 'Smart Search',
    body: 'Powerful filters let you search by location, budget, property type, bedrooms, amenities, furnishing, and more.',
    accent: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'Direct Communication',
    body: 'Connect directly with verified agents and property owners — ask questions, request info, and schedule inspections from within the platform.',
    accent: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: <Bell size={22} />,
    title: 'Real-Time Updates',
    body: "Never miss a great opportunity. Get notified when new properties match your search, prices change, or listings become available.",
    accent: 'bg-lime-50 dark:bg-lime-900/20 text-lime-600 dark:text-lime-400',
  },
  {
    icon: <Heart size={22} />,
    title: 'Save Your Favorites',
    body: "Found something you love? Save listings to your favorites and compare properties whenever you're ready to decide.",
    accent: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
  },
  {
    icon: <CheckCircle2 size={22} />,
    title: 'Secure Experience',
    body: 'HomeLink is built with modern security standards to protect your personal information and provide a trustworthy real estate experience.',
    accent: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
  },
]

/* ─── Features / Services data ─── */
const FEATURES = [
  {
    label: 'Verified Property Listings',
    body: 'Browse thousands of carefully verified properties for sale and rent — genuine opportunities only.',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-700 dark:text-emerald-300',
    d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    label: 'Smart Search',
    body: "Find exactly what you're looking for using powerful filters: location, budget, type, bedrooms, bathrooms, amenities, furnishing, and availability.",
    iconBg: 'bg-teal-100 dark:bg-teal-900/30',
    iconColor: 'text-teal-700 dark:text-teal-300',
    d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    label: 'Interactive Property Details',
    body: 'Every listing includes high-quality photos, descriptions, pricing, features, nearby locations, contact info, and property specifications.',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconColor: 'text-cyan-700 dark:text-cyan-300',
    d: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    label: 'Direct Communication',
    body: 'Contact verified agents and property owners directly. Ask questions, request info, or schedule inspections — all from within the platform.',
    iconBg: 'bg-lime-100 dark:bg-lime-900/30',
    iconColor: 'text-lime-700 dark:text-lime-300',
    d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    label: 'Save Your Favorites',
    body: "Save listings you love and compare multiple properties side by side whenever you're ready.",
    iconBg: 'bg-rose-100 dark:bg-rose-900/30',
    iconColor: 'text-rose-700 dark:text-rose-300',
    d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
]

/* ─── How It Works steps ─── */
const STEPS = [
  {
    num: '01',
    title: 'Create an Account',
    body: 'Sign up in minutes and personalize your property preferences.',
  },
  {
    num: '02',
    title: 'Search Properties',
    body: 'Browse verified listings using smart filters tailored to your needs.',
  },
  {
    num: '03',
    title: 'Connect',
    body: 'Contact agents or property owners directly from within the platform.',
  },
  {
    num: '04',
    title: 'Visit',
    body: 'Schedule inspections and explore your shortlisted properties in person.',
  },
  {
    num: '05',
    title: 'Move In',
    body: 'Complete your real estate journey and move into your new home with confidence.',
  },
]

export default function HomeLink({ onBack }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080D1C] text-neutral-900 dark:text-white transition-colors duration-300">

      {/* ─── BACK BUTTON ─── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:opacity-75 cursor-pointer transition-opacity"
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

          {/* LEFT ── desktop app / browser mockup */}
          <div className="bg-[#EEF9F3] dark:bg-[#091710] rounded-3xl p-6 md:p-10 flex items-center justify-center min-h-[500px]">
            {/* Browser Chrome Frame */}
            <div className="w-full max-w-[520px] rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-emerald-900/40 flex flex-col text-left bg-white dark:bg-[#0A1A10]">

              {/* ── Browser Top Bar ── */}
              <div className="bg-neutral-100 dark:bg-[#0D1F12] px-3 py-2 flex items-center gap-2 border-b border-neutral-200 dark:border-emerald-900/30 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                </div>
                <div className="flex-1 bg-white dark:bg-[#111E14] rounded-md px-2.5 py-1 flex items-center gap-1.5 border border-neutral-200 dark:border-emerald-900/30 mx-2">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-neutral-400 flex-shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  <span className="text-[9px] text-neutral-400 font-medium tracking-wide truncate">app.homelink.ng/dashboard</span>
                </div>
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-neutral-400 flex-shrink-0"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
              </div>

              {/* ── App Shell: Sidebar + Main ── */}
              <div className="flex flex-1 min-h-0" style={{ height: '340px' }}>

                {/* Dark Green Sidebar */}
                <div className="w-[52px] bg-[#0D2818] flex flex-col items-center py-2.5 gap-2 flex-shrink-0">
                  <div className="flex flex-col items-center gap-0.5 mb-2">
                    <div className="w-6 h-6 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    </div>
                    <span className="text-[5px] font-extrabold text-emerald-300 tracking-tight leading-none mt-0.5">HomeLink</span>
                  </div>
                  {[
                    { d: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z', active: true, label: 'Home' },
                    { d: 'M20 6h-2.18c.07-.44.18-.88.18-1.33C18 2.54 15.96.5 13.5.5S9 2.54 9 4.67c0 .45.11.89.18 1.33H7C5.9 6 5 6.9 5 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z', active: false, label: 'Search' },
                    { d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z', active: false, label: 'Escrow' },
                    { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z', active: false, label: 'Profile' },
                  ].map((item, i) => (
                    <div key={i} title={item.label} className={`w-9 h-8 rounded-lg flex flex-col items-center justify-center gap-0.5 ${item.active ? 'bg-[#1B4332]' : 'hover:bg-white/5'}`}>
                      <svg viewBox="0 0 24 24" className={`w-3.5 h-3.5 ${item.active ? 'fill-emerald-400' : 'fill-white/40'}`}><path d={item.d}/></svg>
                      <span className={`text-[4px] font-bold ${item.active ? 'text-emerald-300' : 'text-white/30'}`}>{item.label}</span>
                    </div>
                  ))}
                  {/* bottom avatar */}
                  <div className="mt-auto mb-1 w-7 h-7 rounded-full bg-emerald-700 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/80"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white dark:bg-[#0A1A10] flex flex-col overflow-hidden">

                  {/* Top Header */}
                  <div className="px-3 py-2 border-b border-neutral-100 dark:border-emerald-900/20 flex justify-between items-center flex-shrink-0">
                    <div>
                      <p className="text-[8px] font-extrabold text-neutral-900 dark:text-white leading-none">Welcome back, Ayo</p>
                      <p className="text-[6px] text-neutral-400 mt-0.5">Here's what's happening with your investment.</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 rounded-full px-2 py-0.5">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-emerald-600 dark:fill-emerald-400"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                        <span className="text-[6px] font-bold text-emerald-700 dark:text-emerald-400">2 Alerts</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Body */}
                  <div className="flex-1 overflow-hidden px-3 py-2 space-y-2">

                    {/* Active Property Banner */}
                    <div className="bg-[#0D2818] rounded-xl p-2.5 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-7 rounded-lg bg-emerald-900/60 flex items-center justify-center flex-shrink-0">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-400"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="text-[7px] font-extrabold text-white">Greenview Villa</p>
                            <span className="text-[5px] bg-emerald-500/30 text-emerald-300 px-1 py-0.5 rounded font-bold">Active</span>
                          </div>
                          <p className="text-[5.5px] text-white/50 mt-0.5">Lekki, Lagos · HLK-2024-0768</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[5px] text-white/50">Build Progress</p>
                        <p className="text-[10px] font-extrabold text-white leading-none">75%</p>
                        <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden mt-1">
                          <div className="h-full w-3/4 bg-emerald-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Build Phase Timeline */}
                    <div className="bg-neutral-50 dark:bg-[#0D1F12] rounded-xl p-2">
                      <p className="text-[6px] font-extrabold text-neutral-700 dark:text-white mb-1.5">Build Phase</p>
                      <div className="flex items-start">
                        {[
                          { label: 'Foundation', status: 'done',    sub: 'Completed' },
                          { label: 'Blockwork',  status: 'done',    sub: 'Completed' },
                          { label: 'Roofing',    status: 'active',  sub: '75%' },
                          { label: 'Finishing',  status: 'pending', sub: 'Pending' },
                          { label: 'Handover',   status: 'pending', sub: 'Pending' },
                        ].map((p, i, arr) => (
                          <div key={i} className="flex-1 flex flex-col items-center relative">
                            {i < arr.length - 1 && (
                              <div className={`absolute top-2 left-1/2 w-full h-[2px] ${p.status === 'done' ? 'bg-emerald-400' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
                            )}
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center z-10 border-2 flex-shrink-0 ${
                              p.status === 'done'    ? 'bg-emerald-500 border-emerald-500' :
                              p.status === 'active'  ? 'bg-white dark:bg-[#0D1F12] border-emerald-500' :
                                                       'bg-white dark:bg-[#0D1F12] border-neutral-300 dark:border-neutral-700'
                            }`}>
                              {p.status === 'done'   && <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>}
                              {p.status === 'active' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>}
                            </div>
                            <p className="text-[5px] text-center text-neutral-500 dark:text-neutral-400 mt-0.5 leading-tight">{p.label}</p>
                            <p className={`text-[4.5px] font-bold text-center leading-tight ${p.status === 'pending' ? 'text-neutral-400' : 'text-emerald-500'}`}>{p.sub}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="bg-neutral-50 dark:bg-[#0D1F12] rounded-xl p-2">
                        <p className="text-[5px] text-neutral-400 font-semibold">Total Escrow</p>
                        <p className="text-[9px] font-extrabold text-neutral-900 dark:text-white">$250,000</p>
                        <p className="text-[4.5px] text-emerald-600 dark:text-emerald-400 mt-0.5 font-semibold">Secured $187,500</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-[#0D2818] rounded-xl p-2">
                        <p className="text-[5px] text-neutral-400 font-semibold">Next Milestone</p>
                        <p className="text-[9px] font-extrabold text-neutral-900 dark:text-white">Roofing</p>
                        <span className="text-[4.5px] bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-1 py-0.5 rounded font-bold inline-block mt-0.5">On Track</span>
                      </div>
                      <div className="bg-neutral-50 dark:bg-[#0D1F12] rounded-xl p-2">
                        <p className="text-[5px] text-neutral-400 font-semibold">Saved Listings</p>
                        <p className="text-[9px] font-extrabold text-neutral-900 dark:text-white">12</p>
                        <p className="text-[4.5px] text-neutral-500 mt-0.5 font-semibold">3 New Today</p>
                      </div>
                    </div>

                    {/* Property Listings Row */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-[6px] font-extrabold text-neutral-800 dark:text-white">Recommended Listings</p>
                        <span className="text-[5px] font-bold text-emerald-600 dark:text-emerald-400">View All →</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          { name: '3-Bed Apartment', loc: 'Ikoyi, Lagos', price: '₦8.5M', tag: 'For Sale', tagColor: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' },
                          { name: '2-Bed Flat',      loc: 'VI, Lagos',   price: '₦450K/yr', tag: 'For Rent', tagColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' },
                        ].map((listing) => (
                          <div key={listing.name} className="bg-neutral-50 dark:bg-[#0D1F12] rounded-lg p-1.5 border border-neutral-100 dark:border-emerald-900/20">
                            <div className="w-full h-8 bg-emerald-900/20 dark:bg-emerald-900/30 rounded-md mb-1 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-400/60"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                            </div>
                            <p className="text-[6px] font-extrabold text-neutral-900 dark:text-white leading-tight">{listing.name}</p>
                            <p className="text-[5px] text-neutral-400">{listing.loc}</p>
                            <div className="flex items-center justify-between mt-1">
                              <p className="text-[6px] font-extrabold text-emerald-700 dark:text-emerald-400">{listing.price}</p>
                              <span className={`text-[4.5px] font-bold px-1 py-0.5 rounded ${listing.tagColor}`}>{listing.tag}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* RIGHT ── headline */}
          <div className="space-y-7">
            <div className="flex items-center">
              <img
                src={homelinkLogo}
                alt="HomeLink Logo"
                className="h-10 w-10 object-cover object-left rounded-xl"
              />
              <span className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white font-display">
                HomeLink
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight text-neutral-950 dark:text-white">
              Buy, Rent, Sell &amp; Discover verified properties with <span className="text-emerald-700 dark:text-emerald-400">confidence.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
              HomeLink simplifies real estate with smart search, verified listings, secure communication, and an intuitive experience designed for modern living. Your next home is just a few taps away.
            </p>

            <a
              href="https://calendly.com/kriscoresolutions/30min?month=2026-07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-bold text-base shadow-lg transition-all duration-200 cursor-pointer"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHY CHOOSE HOMELINK
          Dark green full-width — 3×2 feature card grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B2516] dark:bg-[#060D0A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Heading */}
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4">Why Choose HomeLink</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
              Finding a property shouldn't be stressful.
            </h2>
            <p className="mt-4 text-base text-emerald-100/60 leading-relaxed max-w-xl">
              HomeLink makes every step simple — giving you access to verified listings, powerful search tools, and trusted real estate professionals. Whether you're moving into your first apartment or investing in property, HomeLink helps you make smarter decisions with confidence.
            </p>
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
                <p className="text-sm text-emerald-100/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — FEATURES (white bg, image + features list)
          Image left │ Feature cards right
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#080D1C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT ── image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={homelinkFeatureEscrow}
                alt="HomeLink features in action"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
              />
            </div>

            {/* RIGHT ── features */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 mb-3">Features</p>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
                  Everything you need. One platform.
                </h2>
              </div>

              <div className="space-y-4">
                {FEATURES.map(({ label, body, iconBg, iconColor, d }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-colors duration-200">
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
          SECTION 4 — HOW IT WORKS (light green bg, full-width)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F0FAF5] dark:bg-[#0C1A0F] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Heading */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
              Your real estate journey in 5 simple steps.
            </h2>
          </div>

          {/* 5-column step grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map(({ num, title, body }, i) => (
              <div key={num} className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-px bg-emerald-200 dark:bg-white/10" />
                )}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-emerald-500/20 relative z-10">
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
          SECTION 5 — WHO IS HOMELINK FOR? (copy left, image right)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#080D1C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT ── copy */}
            <div className="space-y-7 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
                Built for everyone in real estate.
              </h2>
              <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Whether you're a first-time renter or a seasoned property investor, HomeLink is designed to make your real estate journey effortless and confident.
              </p>
              <ul className="space-y-3">
                {[
                  'Home Buyers — discover verified homes that fit your lifestyle and budget',
                  'Renters — find apartments, houses, and short-term rentals quickly',
                  'Property Owners — reach more buyers and tenants by listing with ease',
                  'Real Estate Agents — showcase listings and connect with qualified clients',
                  'Property Investors — explore opportunities with detailed market-ready listings',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 size={18} className="text-emerald-700 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/kriscoresolutions/30min?month=2026-07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-bold text-sm shadow-lg transition-all duration-200 cursor-pointer"
              >
                Find Your Next Home
              </a>
            </div>

            {/* RIGHT ── image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src={homelinkWhoItsFor}
                alt="HomeLink — for everyone in real estate"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — CTA BANNER (dark green full-width)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B2516] dark:bg-[#060D0A] py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center space-y-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Get Started Today</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-tight tracking-tight text-white">
            Find the perfect property, connect with trusted agents, and manage your real estate journey — all from one platform.
          </h2>
          <p className="text-base text-emerald-100/60 leading-relaxed max-w-lg mx-auto">
            Join thousands of buyers, renters, sellers, and agents who trust HomeLink to make smarter real estate decisions every day.
          </p>
          <a
            href="https://calendly.com/kriscoresolutions/30min?month=2026-07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-base shadow-2xl transition-all duration-200 cursor-pointer"
          >
            Get Started Free
          </a>
        </div>
      </section>

    </div>
  )
}

