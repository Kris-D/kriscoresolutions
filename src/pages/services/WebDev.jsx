import { 
  ArrowLeft,
  MessageSquare,
  Laptop
} from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'
import webDevHero from '../../assets/web_dev_hero.png'
import productDesignTeam from '../../assets/product_design_team.png'

export default function WebDev({ setActiveTab }) {
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
      title: 'Frontend Development',
      description: "Maximize your website's potential with our expert frontend development services, featuring responsive web design, intuitive UI/UX, and fast loading speeds to increase engagement, and elevate your online presence."
    },
    {
      title: 'Backend Development',
      description: "Power your application's core with our secure backend development, featuring scalable architecture, robust APIs, and secure data management to drive performance, efficiency, and business growth."
    },
    {
      title: 'Content Management System (CMS) Integration',
      description: 'Elevate your online presence with seamless CMS integration, enabling easy content updates, efficient workflows, and dynamic content delivery to drive engagement and conversions.'
    },
    {
      title: 'Database Design and Development',
      description: 'We Optimize data management and fuel business growth with robust database design and development, featuring scalable architecture, high performance, and secure data storage solutions.'
    }
  ]

  return (
    <div className="py-12 md:py-20 relative overflow-hidden bg-white dark:bg-[#070C15] transition-colors duration-300">
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className={themeStyles.container}>
        <button
          onClick={() => setActiveTab('Services')}
          className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 dark:text-neutral-400 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors mb-10 group cursor-pointer"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Services
        </button>

        {/* 1. Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-[52px] font-black tracking-tight text-[#002FA7] dark:text-white leading-[1.1] font-display">
              Website Design & <br />
              Development
            </h1>
            <p className="text-sm sm:text-base font-normal text-neutral-600 dark:text-neutral-350 leading-relaxed max-w-xl">
              We are a leading web design and development company, excelling in scalable front-end and back-end solutions. Our proven track record makes us the top choice for innovative web solutions.
            </p>
            <div className="pt-4">
              <button
                onClick={handleConsultationClick}
                className="px-6 py-3.5 bg-[#002FA7] hover:bg-[#002687] text-white font-bold rounded-xl text-xs active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
              >
                <Laptop size={14} />
                Book a Free Consultation
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Browser mockup */}
              <div className="w-full rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0D1117]">

                {/* Browser chrome */}
                <div className="bg-neutral-100 dark:bg-[#161B22] px-4 py-2.5 flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-[#0D1117] rounded-md px-3 py-1 border border-neutral-200 dark:border-neutral-700 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-neutral-400 flex-shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                    <span className="text-[10px] text-neutral-400 font-mono">kriscore.io</span>
                    <span className="ml-auto text-[8px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold">Secure</span>
                  </div>
                </div>

                {/* Page preview */}
                <div className="bg-white dark:bg-[#0D1117] p-4 space-y-3">

                  {/* Navbar preview */}
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-50 dark:bg-[#161B22] border border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-brand-blue"></div>
                      <div className="w-10 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
                    </div>
                    <div className="flex gap-3">
                      {[40, 32, 36, 28].map((w, i) => (
                        <div key={i} style={{width: w}} className="h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
                      ))}
                    </div>
                    <div className="w-14 h-5 rounded-full bg-brand-blue"></div>
                  </div>

                  {/* Hero section preview */}
                  <div className="rounded-lg bg-gradient-to-br from-[#EEF2FF] to-[#F0F9FF] dark:from-[#0D1630] dark:to-[#0A1020] p-4 space-y-2">
                    <div className="w-16 h-1.5 bg-brand-blue/40 rounded-full"></div>
                    <div className="w-40 h-3 bg-neutral-800 dark:bg-white rounded-full opacity-80"></div>
                    <div className="w-32 h-3 bg-neutral-800 dark:bg-white rounded-full opacity-60"></div>
                    <div className="space-y-1 pt-1">
                      <div className="w-full h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-full opacity-70"></div>
                      <div className="w-4/5 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-full opacity-60"></div>
                      <div className="w-3/5 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-full opacity-50"></div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <div className="w-20 h-6 rounded-full bg-brand-blue"></div>
                      <div className="w-20 h-6 rounded-full border border-neutral-300 dark:border-neutral-700"></div>
                    </div>
                  </div>

                  {/* Feature cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { color: 'bg-blue-100 dark:bg-blue-900/30', icon: 'bg-brand-blue' },
                      { color: 'bg-emerald-100 dark:bg-emerald-900/30', icon: 'bg-emerald-500' },
                      { color: 'bg-violet-100 dark:bg-violet-900/30', icon: 'bg-violet-500' },
                    ].map((c, i) => (
                      <div key={i} className={`rounded-lg ${c.color} p-2.5 space-y-1.5`}>
                        <div className={`w-5 h-5 rounded-md ${c.icon}`}></div>
                        <div className="w-full h-1.5 bg-neutral-300/60 dark:bg-neutral-600/60 rounded-full"></div>
                        <div className="w-4/5 h-1.5 bg-neutral-300/40 dark:bg-neutral-600/40 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating code snippet card */}
              <div className="absolute -bottom-6 -left-6 w-52 bg-[#0D1117] rounded-xl shadow-2xl border border-neutral-800 p-3 font-mono text-[10px] leading-relaxed">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="ml-1 text-[9px] text-neutral-500">index.jsx</span>
                </div>
                <div><span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">App</span> <span className="text-white">= () =&gt; {'{'}</span></div>
                <div className="pl-3"><span className="text-[#FF7B72]">return</span> <span className="text-[#79C0FF]">(</span></div>
                <div className="pl-6"><span className="text-[#7EE787]">&lt;div</span> <span className="text-[#FFA657]">className</span><span className="text-white">=</span><span className="text-[#A5D6FF]">"app"</span><span className="text-[#7EE787]">&gt;</span></div>
                <div className="pl-9"><span className="text-[#7EE787]">&lt;Hero</span> <span className="text-[#FFA657]">brand</span><span className="text-[#7EE787]">/&gt;</span></div>
                <div className="pl-6"><span className="text-[#7EE787]">&lt;/div&gt;</span></div>
                <div className="pl-3"><span className="text-[#79C0FF]">)</span></div>
                <div><span className="text-white">{'}'}</span></div>
              </div>

              {/* Floating performance badge */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-[#161B22] rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 px-3 py-2 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-neutral-900 dark:text-white">100</p>
                  <p className="text-[8px] text-neutral-400">Performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Capabilities Grid Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/80">
              <img
                src={productDesignTeam}
                alt="Kriscore Web Development Team"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square"
              />
            </div>
          </div>

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
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-200 bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/15">
                Insights Hub
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-none">
                Related Insights
              </h3>
              <p className="text-blue-100/90 text-sm font-normal tracking-wide">
                Know about web development trends and industry best practices.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {[
                  'Modern Full-Stack Architecture',
                  'High-Performance Web Applications',
                  'Scalable API & Database Systems'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1 justify-self-center h-48 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

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
