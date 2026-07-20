import { 
  ArrowLeft,
  MessageSquare,
  Smartphone
} from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'
import mobileAppHero from '../../assets/mobile_app_hero.png'
import productDesignTeam from '../../assets/product_design_team.png'

export default function MobileApp({ setActiveTab }) {
  const handleConsultationClick = () => {
    const url = import.meta.env.VITE_CALENDLY_URL
    if (url) {
      window.open(url, '_blank', 'noreferrer')
    } else {
      setActiveTab("Let's Talk")
    }
  }

  const capabilities = [
    {
      title: 'Android App Development',
      description: 'Let us build robust and scalable Android apps tailored specifically to your business needs, ensuring top performance and user satisfaction.'
    },
    {
      title: 'iOS App Development',
      description: 'Partner with us to craft elegant and efficient iOS apps, delivering seamless user experiences that drive engagement and growth for your business.'
    },
    {
      title: 'Hybrid Mobile App Development',
      description: 'Work with us to develop versatile hybrid apps that combine native performance with cross platform flexibility, offering the best of both worlds for your users.'
    },
    {
      title: 'App Store & Play Store Launch',
      description: 'We handle the full deployment process, including submission, compliance, metadata optimization, and launch, so your app reaches users smoothly on day one.'
    }
  ]

  return (
    <div className="py-12 md:py-20 relative overflow-hidden bg-white dark:bg-[#070C15] transition-colors duration-300">
      {/* Background ambient glows */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className={themeStyles.container}>
        {/* Back navigation button */}
        <button
          onClick={() => setActiveTab('Services')}
          className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 dark:text-neutral-400 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors mb-10 group cursor-pointer"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Services
        </button>

        {/* 1. Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-[52px] font-black tracking-tight text-[#002FA7] dark:text-white leading-[1.1] font-display">
              Mobile App <br />
              Development
            </h1>
            <p className="text-sm sm:text-base font-normal text-neutral-600 dark:text-neutral-350 leading-relaxed max-w-xl">
              We are a leading mobile app development company, excelling in scalable Android, iOS, and hybrid app solutions. Our proven track record makes us the top choice for innovative mobile solutions.
            </p>
            <div className="pt-4">
              <button
                onClick={handleConsultationClick}
                className="px-6 py-3.5 bg-[#002FA7] hover:bg-[#002687] text-white font-bold rounded-xl text-xs active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
              >
                <Smartphone size={14} />
                Book a Free Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Custom Phone Mockup Illustration */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm h-[420px] flex items-center justify-center">

              {/* ── BACK PHONE (slightly offset right & scaled down) ── */}
              <div className="absolute right-0 top-8 w-[170px] h-[340px] bg-[#08132B] rounded-[2rem] border-[4px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col opacity-90" style={{transform:'rotate(6deg)'}}>
                {/* Status bar */}
                <div className="flex justify-between items-center px-3 pt-2 pb-1">
                  <span className="text-[7px] text-white font-mono font-bold">9:41</span>
                  <div className="flex items-center gap-0.5">
                    <div className="flex items-end gap-[1px]">
                      {[3,4,5,6].map(h => <span key={h} style={{height:h}} className="w-[1.5px] bg-white/80 rounded-sm block"></span>)}
                    </div>
                    <div className="w-3 h-1.5 rounded-[2px] border border-white/60 ml-1 relative overflow-hidden">
                      <div className="absolute inset-[1px] bg-white/60 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                {/* Analytics screen */}
                <div className="flex-1 bg-[#0D1838] px-3 py-2 space-y-2">
                  <p className="text-[8px] font-black text-white">Analytics</p>
                  {/* Mini line chart */}
                  <div className="bg-white/5 rounded-xl p-2">
                    <p className="text-[6px] text-blue-300 font-semibold mb-1">Monthly Growth</p>
                    <svg viewBox="0 0 100 40" className="w-full h-[30px]" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="mGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,35 L15,28 L30,20 L45,22 L60,12 L75,15 L90,8 L100,10 L100,40 L0,40 Z" fill="url(#mGrad)"/>
                      <polyline points="0,35 15,28 30,20 45,22 60,12 75,15 90,8 100,10" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
                      <circle cx="90" cy="8" r="2" fill="#3B82F6"/>
                    </svg>
                  </div>
                  {/* 2 metric tiles */}
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      { label: 'Users', val: '12.4K', up: true },
                      { label: 'Revenue', val: '$8.2K', up: true },
                    ].map(m => (
                      <div key={m.label} className="bg-white/5 rounded-lg p-1.5">
                        <p className="text-[5px] text-neutral-400">{m.label}</p>
                        <p className="text-[9px] font-black text-white leading-tight">{m.val}</p>
                        <p className="text-[5px] text-emerald-400">↑ 14%</p>
                      </div>
                    ))}
                  </div>
                  {/* Bar chart */}
                  <div className="bg-white/5 rounded-xl p-2">
                    <p className="text-[6px] text-neutral-400 mb-1">Weekly Sessions</p>
                    <div className="flex items-end gap-1 h-[20px]">
                      {[10,14,8,18,12,20,16].map((h, i) => (
                        <div key={i} style={{height:`${h}px`}} className={`flex-1 rounded-sm ${i === 5 ? 'bg-brand-blue' : 'bg-white/20'}`}></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-0.5">
                      {['M','T','W','T','F','S','S'].map((d, i) => (
                        <span key={i} className="text-[4px] text-neutral-500 flex-1 text-center">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Bottom nav */}
                <div className="bg-[#08132B] border-t border-white/10 flex justify-around py-1.5 px-2">
                  {['M10 20v-6h4l3 3v3', 'M3 12h18M3 6h18M3 18h18', 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z'].map((d, i) => (
                    <svg key={i} viewBox="0 0 24 24" className={`w-3.5 h-3.5 ${i === 0 ? 'fill-brand-blue' : 'fill-white/30'}`}><path d={d}/></svg>
                  ))}
                </div>
              </div>

              {/* ── FRONT PHONE (main, centered) ── */}
              <div className="relative left-[-24px] w-[185px] h-[370px] bg-[#F8FAFC] dark:bg-[#0D1117] rounded-[2.2rem] border-[5px] border-neutral-900 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col z-10">
                {/* Status bar */}
                <div className="bg-brand-blue flex justify-between items-center px-3.5 pt-2 pb-1">
                  <span className="text-[7px] text-white font-mono font-bold">9:41</span>
                  <div className="flex items-center gap-0.5">
                    <div className="flex items-end gap-[1px]">
                      {[3,4,5,6].map(h => <span key={h} style={{height:h}} className="w-[1.5px] bg-white rounded-sm block"></span>)}
                    </div>
                    <div className="w-3 h-1.5 rounded-[2px] border border-white ml-1 relative overflow-hidden">
                      <div className="absolute inset-[1px] bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
                {/* Header */}
                <div className="bg-brand-blue px-3.5 pb-3 pt-1">
                  <p className="text-[7px] text-blue-200">Good Morning 👋</p>
                  <p className="text-[11px] font-black text-white">Kriscore App</p>
                  {/* Balance card */}
                  <div className="mt-2 bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2 flex justify-between items-center">
                    <div>
                      <p className="text-[6px] text-blue-100">Total Revenue</p>
                      <p className="text-[14px] font-black text-white leading-tight">$24,580</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="flex-1 bg-[#F8FAFC] dark:bg-[#0D1117] px-3 py-2.5 space-y-2.5 overflow-hidden">
                  {/* Quick actions */}
                  <div>
                    <p className="text-[6px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-1.5">Quick Actions</p>
                    <div className="grid grid-cols-4 gap-1">
                      {[
                        { label: 'Send',     color: 'bg-blue-100 dark:bg-blue-900/30',   icon: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z', iconColor: 'fill-brand-blue' },
                        { label: 'Receive',  color: 'bg-emerald-100 dark:bg-emerald-900/30', icon: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z', iconColor: 'fill-emerald-500' },
                        { label: 'Pay',      color: 'bg-violet-100 dark:bg-violet-900/30',   icon: 'M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z', iconColor: 'fill-violet-500' },
                        { label: 'More',     color: 'bg-amber-100 dark:bg-amber-900/30',    icon: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', iconColor: 'fill-amber-500' },
                      ].map(a => (
                        <div key={a.label} className="flex flex-col items-center gap-0.5">
                          <div className={`w-8 h-8 rounded-xl ${a.color} flex items-center justify-center`}>
                            <svg viewBox="0 0 24 24" className={`w-4 h-4 ${a.iconColor}`}><path d={a.icon}/></svg>
                          </div>
                          <span className="text-[5.5px] text-neutral-500 dark:text-neutral-400 font-semibold">{a.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Recent Activity */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[6px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">Recent Activity</p>
                      <span className="text-[5.5px] text-brand-blue font-bold">See all</span>
                    </div>
                    <div className="space-y-1">
                      {[
                        { name: 'Recent update',  amount: '-$120', color: 'bg-blue-100 dark:bg-blue-900/30', iconFill: 'fill-brand-blue', d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' },
                        { name: 'Recent update',  amount: '+$340', color: 'bg-emerald-100 dark:bg-emerald-900/30', iconFill: 'fill-emerald-500', d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' },
                        { name: 'Recent update',  amount: '-$85',  color: 'bg-violet-100 dark:bg-violet-900/30', iconFill: 'fill-violet-500', d: 'M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' },
                      ].map((t, i) => (
                        <div key={i} className="flex items-center justify-between p-1.5 rounded-lg bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/5">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-5 h-5 rounded-lg ${t.color} flex items-center justify-center flex-shrink-0`}>
                              <svg viewBox="0 0 24 24" className={`w-2.5 h-2.5 ${t.iconFill}`}><path d={t.d}/></svg>
                            </div>
                            <div>
                              <p className="text-[6px] font-bold text-neutral-700 dark:text-neutral-200 leading-none">{t.name}</p>
                              <p className="text-[5px] text-neutral-400 leading-none">Today</p>
                            </div>
                          </div>
                          <span className={`text-[6px] font-black ${t.amount.startsWith('+') ? 'text-emerald-500' : 'text-red-400'}`}>{t.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Bottom nav */}
                <div className="bg-white dark:bg-[#0D1117] border-t border-neutral-100 dark:border-neutral-800 flex justify-around py-2 px-3">
                  {[
                    { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', active: true },
                    { d: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z', active: false },
                    { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z', active: false },
                    { d: 'M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z', active: false },
                  ].map((n, i) => (
                    <svg key={i} viewBox="0 0 24 24" className={`w-4 h-4 ${n.active ? 'fill-brand-blue' : 'fill-neutral-300 dark:fill-neutral-600'}`}><path d={n.d}/></svg>
                  ))}
                </div>
              </div>

              {/* Floating badge: App Store */}
              <div className="absolute top-4 left-0 bg-white dark:bg-[#161B22] rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 px-3 py-2 flex items-center gap-2 z-20">
                <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                </div>
                <div>
                  <p className="text-[8px] font-black text-neutral-900 dark:text-white">App Store</p>
                  <p className="text-[7px] text-neutral-400">★★★★★ 4.9</p>
                </div>
              </div>

              {/* Floating badge: Android */}
              <div className="absolute bottom-12 left-0 bg-white dark:bg-[#161B22] rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 px-3 py-2 flex items-center gap-2 z-20">
                <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.523 15.341a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-11.046 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.405-6.02l1.505-2.607a.3.3 0 00-.52-.3l-1.526 2.642A9.03 9.03 0 0012 8.046a9.03 9.03 0 00-5.341 1.01L5.133 6.414a.3.3 0 00-.52.3l1.505 2.607C3.69 10.67 2.017 13.048 2 15.75h20c-.017-2.702-1.69-5.08-4.118-6.429z"/></svg>
                </div>
                <div>
                  <p className="text-[8px] font-black text-neutral-900 dark:text-white">Play Store</p>
                  <p className="text-[7px] text-neutral-400">★★★★★ 4.8</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Capabilities Grid Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/80">
              <img
                src={productDesignTeam}
                alt="Kriscore Mobile Development Team"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Grid & CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {capabilities.map(({ title, description }) => (
                <div key={title} className="space-y-3">
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#002FA7] dark:text-white font-display tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleConsultationClick}
                className="px-6 py-3.5 bg-[#002FA7] hover:bg-[#002687] text-white font-bold rounded-xl text-xs active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* 3. Client Projects Showcase Header */}
        <section className="border-t border-neutral-100 dark:border-neutral-850 pt-16 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002FA7] dark:text-white font-display leading-[1.25]">
              Some of the projects we have designed and built for our clients.
            </h2>
          </div>
        </section>

        {/* 4. Insights Hub & Footer Banner */}
        <section className="mb-8 relative mt-16 overflow-hidden rounded-[2.5rem] border border-neutral-200/50 dark:border-neutral-850 shadow-[0_20px_50px_rgba(0,75,206,0.12)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#002FA7] via-[#004BCE] to-[#050B1B] opacity-95 pointer-events-none" />
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-200 bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/15">
                Insights Hub
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-none">
                Related Insights
              </h3>
              <p className="text-blue-100/90 text-sm font-normal tracking-wide">
                Know about mobile app development trends and industry best practices.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {[
                  'Cross-Platform vs Native Development',
                  'Mobile-First UI Architecture',
                  'Performance Optimization Strategies'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:col-span-1 justify-self-center h-48 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

            {/* Right Side */}
            <div className="lg:col-span-6 space-y-6 text-left lg:pl-4">
              <div className="relative">
                <span className="absolute -top-8 -left-6 text-7xl font-serif text-white/10 select-none">"</span>
                <blockquote className="text-xl sm:text-2xl font-black text-white font-display tracking-tight leading-normal relative z-10">
                  Providing the simplest solution for the most complex problems.
                </blockquote>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleConsultationClick}
                  className="px-8 py-4 bg-white hover:bg-neutral-100 text-[#002FA7] font-bold rounded-xl text-xs active:scale-[0.98] transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-black/15 hover:scale-105"
                >
                  Talk to us
                  <MessageSquare size={14} className="transition-transform hover:rotate-12" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
