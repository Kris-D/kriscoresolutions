import { 
  ArrowRight, 
  Search, 
  Compass, 
  Map, 
  Sparkles, 
  ArrowLeft,
  Calendar,
  MessageSquare
} from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'
import productDesignTeam from '../../assets/product_design_team.png'
import productDesignHero from '../../assets/product_design_hero.png'

export default function ProductDesign({ setActiveTab }) {
  // Navigation helper
  const handleConsultationClick = () => {
    const url = import.meta.env.VITE_CALENDLY_URL
    if (url) {
      window.open(url, '_blank', 'noreferrer')
    } else {
      setActiveTab("Let's Talk")
    }
  }

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

        {/* 1. Hero Section (Aligned with Screenshot 1) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-[52px] font-black tracking-tight text-[#002FA7] dark:text-white leading-[1.1] font-display">
              Product Design & <br />
              User Experience
            </h1>
            <p className="text-sm sm:text-base font-normal text-neutral-600 dark:text-neutral-350 leading-relaxed max-w-xl">
              We are a leading product design company, excelling in creating scalable and innovative design solutions. Our proven track record makes us the top choice for groundbreaking product designs.
            </p>
            <div className="pt-4">
              <button
                onClick={handleConsultationClick}
                className="px-6 py-3.5 bg-[#002FA7] hover:bg-[#002687] text-white font-bold rounded-xl text-xs active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
          
          {/* Right Column: Custom Design Tool Illustration */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">

              {/* ── Main design canvas card ── */}
              <div className="w-full rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1E1E2E]">

                {/* App toolbar */}
                <div className="bg-neutral-100 dark:bg-[#2A2A3C] px-4 py-2 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[9px] font-bold text-neutral-500 dark:text-neutral-400 ml-2">Kriscore Design System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-0.5 rounded bg-brand-blue text-white text-[8px] font-bold">Share</div>
                    <div className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Canvas area with left tools + content */}
                <div className="flex" style={{minHeight:'280px'}}>

                  {/* Left tool rail */}
                  <div className="w-9 bg-neutral-50 dark:bg-[#252536] border-r border-neutral-200 dark:border-neutral-700 flex flex-col items-center py-3 gap-3">
                    {[
                      'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
                      'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
                      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z',
                      'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z',
                    ].map((d, i) => (
                      <div key={i} className={`w-6 h-6 rounded-md flex items-center justify-center cursor-pointer ${i === 1 ? 'bg-brand-blue/10' : 'hover:bg-neutral-200 dark:hover:bg-neutral-600'}`}>
                        <svg viewBox="0 0 24 24" className={`w-3.5 h-3.5 ${i === 1 ? 'fill-brand-blue' : 'fill-neutral-500 dark:fill-neutral-400'}`}><path d={d}/></svg>
                      </div>
                    ))}
                  </div>

                  {/* Canvas content */}
                  <div className="flex-1 bg-[#F4F5F7] dark:bg-[#181825] p-3 space-y-2 overflow-hidden">

                    {/* Frame label */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[7px] font-bold text-neutral-400">Frame 1</span>
                      <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700"></div>
                      <span className="text-[7px] text-neutral-400">375 × 812</span>
                    </div>

                    {/* Mobile screen wireframe */}
                    <div className="bg-white dark:bg-[#1E1E2E] rounded-xl border-2 border-dashed border-brand-blue/30 p-3 space-y-2">
                      {/* Wireframe nav */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          <div className="w-8 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
                          <div className="w-5 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
                        </div>
                        <div className="w-4 h-4 rounded bg-brand-blue/20 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-brand-blue"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        </div>
                      </div>
                      {/* Hero block */}
                      <div className="rounded-lg bg-gradient-to-br from-brand-blue/10 to-violet-500/10 p-3">
                        <div className="w-16 h-2 bg-brand-blue/40 rounded-full mb-1.5"></div>
                        <div className="w-28 h-3 bg-neutral-800 dark:bg-white/80 rounded-full mb-1"></div>
                        <div className="w-20 h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full mb-2"></div>
                        <div className="flex gap-1.5">
                          <div className="w-14 h-5 rounded-full bg-brand-blue"></div>
                          <div className="w-14 h-5 rounded-full border border-neutral-300 dark:border-neutral-600"></div>
                        </div>
                      </div>
                      {/* Cards row */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          'bg-blue-50 dark:bg-blue-900/20',
                          'bg-violet-50 dark:bg-violet-900/20',
                        ].map((c, i) => (
                          <div key={i} className={`rounded-lg ${c} p-2`}>
                            <div className="w-4 h-4 rounded bg-neutral-300 dark:bg-neutral-600 mb-1"></div>
                            <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-0.5"></div>
                            <div className="w-3/4 h-1 bg-neutral-100 dark:bg-neutral-800 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Color palette row */}
                    <div className="bg-white dark:bg-[#1E1E2E] rounded-xl p-2.5">
                      <p className="text-[7px] font-bold text-neutral-400 mb-1.5">Color Palette</p>
                      <div className="flex gap-1.5">
                        {['#004BCE','#3B82F6','#8B5CF6','#10B981','#F59E0B','#EF4444','#F8FAFC'].map((color, i) => (
                          <div key={i} className="relative group">
                            <div style={{backgroundColor: color}} className="w-5 h-5 rounded-md border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm cursor-pointer"></div>
                            {i === 0 && (
                              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[5px] font-mono px-1 py-0.5 rounded whitespace-nowrap">Primary</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typography sample */}
                    <div className="bg-white dark:bg-[#1E1E2E] rounded-xl p-2.5">
                      <p className="text-[7px] font-bold text-neutral-400 mb-1.5">Typography</p>
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[11px] font-black text-neutral-900 dark:text-white leading-none">Aa</span>
                          <span className="text-[7px] text-neutral-400">Inter — Display</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[8px] font-bold text-neutral-700 dark:text-neutral-300 leading-none">Aa</span>
                          <span className="text-[7px] text-neutral-400">Inter — Body</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right panel: layers */}
                  <div className="w-24 bg-white dark:bg-[#252536] border-l border-neutral-200 dark:border-neutral-700 px-2 py-3 space-y-1 flex-shrink-0">
                    <p className="text-[7px] font-bold text-neutral-400 mb-2">Layers</p>
                    {[
                      { label: 'Frame 1', indent: 0, icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' },
                      { label: 'Navbar', indent: 1, icon: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' },
                      { label: 'Hero',   indent: 1, icon: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z' },
                      { label: 'Button', indent: 2, icon: 'M19 3H5c-1.1 0-2 .9-2 2v3h2V5h14v14H5v-3H3v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' },
                      { label: 'Cards',  indent: 1, icon: 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z' },
                      { label: 'Colors', indent: 1, icon: 'M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65A2.5 2.5 0 0 1 14.5 15h1.77c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z' },
                    ].map((l, i) => (
                      <div key={i} className="flex items-center gap-1 py-0.5 rounded px-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer" style={{paddingLeft: `${(l.indent * 8) + 4}px`}}>
                        <svg viewBox="0 0 24 24" className={`w-2.5 h-2.5 flex-shrink-0 ${i === 2 ? 'fill-brand-blue' : 'fill-neutral-400'}`}><path d={l.icon}/></svg>
                        <span className={`text-[7px] truncate ${i === 2 ? 'text-brand-blue font-bold' : 'text-neutral-500 dark:text-neutral-400'}`}>{l.label}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Floating UX annotation badge */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-[#252536] rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 px-3 py-2 flex items-center gap-2 z-10">
                <div className="w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-violet-600 dark:fill-violet-400"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65A2.5 2.5 0 0 1 14.5 15h1.77c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-neutral-900 dark:text-white">UX First</p>
                  <p className="text-[7px] text-neutral-400">User Centered</p>
                </div>
              </div>

              {/* Floating component badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#252536] rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 px-3 py-2 flex items-center gap-2 z-10">
                <div className="w-7 h-7 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-blue"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-neutral-900 dark:text-white">Design System</p>
                  <p className="text-[7px] text-neutral-400">Components</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Four-Stage Process Section (Aligned with Screenshot 2) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Process Team Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/80">
              <img
                src={productDesignTeam}
                alt="Kriscore Design Team Collaborating"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Capabilities Grid & CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  title: 'Market Research & Analysis',
                  description: 'We dig deep into your market to uncover trends and understand your customers, ensuring your product hits the mark.'
                },
                {
                  title: 'Product Vision & Strategy',
                  description: 'Together, we’ll shape your product’s vision and strategy, giving you a clear path to success and a plan that resonates with your goals.'
                },
                {
                  title: 'Product Roadmap & feature prioritization',
                  description: 'Let’s map out your product’s journey, focusing on the features that matter most to achieve your vision and drive your success.'
                },
                {
                  title: 'UI/UX Design',
                  description: 'We design user experiences that not only look amazing but also feel intuitive, making sure your product is a joy to use.'
                }
              ].map(({ title, description }) => (
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

        {/* 3. Client Projects Showcase Header (Aligned with Screenshot 3) */}
        <section className="border-t border-neutral-100 dark:border-neutral-850 pt-16 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002FA7] dark:text-white font-display leading-[1.25]">
              Some of the projects we have designed and built for our clients.
            </h2>
          </div>
        </section>

        {/* 4. Related Insights & Footer Banner (Unified, Creative, and Constructive Layout) */}
        <section className="mb-8 relative mt-16 overflow-hidden rounded-[2.5rem] border border-neutral-200/50 dark:border-neutral-850 shadow-[0_20px_50px_rgba(0,75,206,0.12)]">
          {/* Background gradient & grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#002FA7] via-[#004BCE] to-[#050B1B] opacity-95 pointer-events-none" />
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Unified Content Container */}
          <div className="relative z-10 p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Topic Info & Badges */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-200 bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/15">
                Insights Hub
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-none">
                Related Insights
              </h3>
              <p className="text-blue-100/90 text-sm font-semibold tracking-wide">
                Know about product design trends and industry best practices.
              </p>
              
              {/* Constructive visual list */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {[
                  'Scalable UI Design Systems',
                  'User-Centered Validation',
                  'Simplicity in Complex Architecture'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Vertical Divider (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-1 justify-self-center h-48 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

            {/* Right Side: The Big Quote & CTA Button */}
            <div className="lg:col-span-6 space-y-6 text-left lg:pl-4">
              <div className="relative">
                {/* Visual quotes mark */}
                <span className="absolute -top-8 -left-6 text-7xl font-serif text-white/10 select-none">“</span>
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
