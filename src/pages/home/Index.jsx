import { useState, useEffect } from 'react'
import { 
  Sun, 
  Moon, 
  ArrowRight, 
  Laptop, 
  Smartphone, 
  Palette, 
  CloudLightning, 
  Layers,
  Sparkles, 
  Settings, 
  Phone, 
  Mail, 
  MapPin, 
  Code2, 
  Cpu, 
  Flame, 
  Globe, 
  Server, 
  Shield, 
  CheckCircle2, 
  TrendingUp, 
  Headphones
} from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'
import heroMockup from '../../assets/Hero.svg'
import logoImg from '../../assets/logo.png'
import logoDarkImg from '../../assets/logo_dark.png'
import payeaseMockup from '../../assets/payeaselogo.png'
import homeMockup from '../../assets/homelinklogo.png'
import clinicMockup from '../../assets/clinicpluslogo.png'
import AboutIndex from '../about/Index'
import TalkIndex from '../talk/Index'
import ProductsIndex from '../products/Index'

const WORDS = [
  "Modern World",
  "Future",
  "Digital Age",
  "Connected World",
  "Next Generation",
  "Evolving World",
  "Global Marketplace",
  "Intelligent Era",
  "Modern Enterprise",
  "Innovation Economy",
  "Emerging Future",
  "New Era",
  "Digital Economy",
  "Business Landscape",
  "Connected Future"
]

export default function Index() {
  const [isDark, setIsDark] = useState(true)
  const [activeTab, setActiveTab] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [fadeProp, setFadeProp] = useState('opacity-100 translate-y-0 scale-100')

  useEffect(() => {
    const wordInterval = setInterval(() => {
      // 1. Fade out
      setFadeProp('opacity-0 -translate-y-2 scale-95')
      
      // 2. Change word and fade in
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length)
        setFadeProp('opacity-0 translate-y-2 scale-95')
        setTimeout(() => {
          setFadeProp('opacity-100 translate-y-0 scale-100')
        }, 50)
      }, 400) // Wait for fade out duration
    }, 10000)

    return () => clearInterval(wordInterval)
  }, [])
  
  // Products Mockup states for interaction
  


  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    if (activeTab === 'Home' || activeTab === 'About Us' || activeTab === 'Blog' || activeTab === "Let's Talk" || activeTab === 'Products') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (activeTab === 'Services') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    } else if (activeTab === 'Our Work') {
      document.getElementById('our-work')?.scrollIntoView({ behavior: 'smooth' })
    } else if (activeTab === 'Contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [activeTab])

  const toggleTheme = () => setIsDark(!isDark)

  const navLinks = ['Home', 'About Us', 'Services', 'Our Work',  'Contact']

  return (
    <div className={themeStyles.wrapper}>
      {/* 1. Header / Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
        <div className={`${themeStyles.container} h-20 flex items-center justify-between`}>
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <img 
              src={isDark ? logoDarkImg : logoImg} 
              alt="Kriscore Solutions Ltd" 
              className="h-20 md:h-24 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveTab(link)}
                className={`${
                  activeTab === link 
                    ? "text-sm font-semibold cursor-pointer text-blue-500 dark:text-blue-400 transition-colors" 
                    : "text-sm font-medium transition-colors cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400"
                } flex items-center gap-1`}
              >
                {link}
                {link === 'Services' && (
                  <svg className="w-3 h-3 opacity-80 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Let's Talk CTA */}
            <a 
              href="https://calendly.com/kriscoresolutions/30min"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 text-sm font-semibold rounded-xl active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              {"Let's Talk"} <ArrowRight size={15} className="text-blue-500" />
            </a>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer text-neutral-700 dark:text-neutral-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Slide-Down Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-t border-neutral-200/50 dark:border-neutral-800/50`}>
          <div className="px-6 py-5 flex flex-col gap-4">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => { setActiveTab(link); setMobileMenuOpen(false); }}
                className={`text-left text-base font-semibold py-2 border-b border-neutral-100 dark:border-neutral-800/60 ${
                  activeTab === link
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400'
                } transition-colors`}
              >
                {link}
              </button>
            ))}

            {/* Mobile Bottom Actions */}
            <div className="flex items-center justify-between pt-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>

              {/* Let's Talk CTA */}
              <a
                href="https://calendly.com/kriscoresolutions/30min"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl active:scale-[0.98] transition-all inline-flex items-center gap-2"
              >
                {"Let's Talk"} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Products Page */}
      {activeTab === 'Products' && (
        <div className={themeStyles.wrapper}>
          <ProductsIndex />
        </div>
      )}

      {activeTab !== 'About Us' && activeTab !== "Let's Talk" && activeTab !== 'Products' && (
        <>
          {/* 2. Hero Section */}
          <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* === Light/Dark Mode Glow Meshes === */}
        {/* Strong vivid blue glow — left side behind heading */}
        <div className="glow-float absolute -top-20 -left-20 w-[700px] h-[700px] bg-blue-600/30 dark:bg-blue-600/30 rounded-full blur-[120px] pointer-events-none" style={{ animationDelay: '0s' }}></div>
        {/* Soft indigo glow — bottom right */}
        <div className="glow-pulse absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/25 dark:bg-indigo-500/25 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: '2s' }}></div>
        {/* Accent blue orb — top right behind mockup */}
        <div className="glow-drift absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-500/20 dark:bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" style={{ animationDelay: '4s' }}></div>

        <div className={`${themeStyles.container} grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center`}>
          {/* Hero Left Content */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left z-10">
            <span className="text-[11px] font-extrabold tracking-widest uppercase text-blue-600 dark:text-blue-500 block">
              WELCOME TO KRISCORE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
              Building Digital Solutions for the{' '}
              <span className={`bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 bg-clip-text text-transparent block sm:inline-block pb-3 -mb-3 transition-all duration-500 ease-out transform ${fadeProp}`}>
                {WORDS[wordIndex]}
              </span>
            </h1>
            <p className={themeStyles.bodyLg}>
              Kriscore Solutions is a software engineering and digital product company. We help organizations build custom websites, mobile apps, and enterprise systems while also creating our own innovative technology products that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button 
                onClick={() => setActiveTab('Services')}
                className={themeStyles.btnPrimary}
              >
                Our Services <ArrowRight size={18} />
              </button>
              <a 
                href="https://calendly.com/kriscoresolutions/30min"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 font-semibold rounded-xl active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Contact Us
              </a>
            </div>

            {/* Feature badges with distinct icons matching target design */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6">
              {[
                { label: 'Innovative Solutions', icon: Shield },
                { label: 'Quality Assurance',    icon: CheckCircle2 },
                { label: 'Scalable Systems',     icon: TrendingUp },
                { label: 'Reliable Support',     icon: Headphones },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-full border border-blue-500/40 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 bg-blue-500/8 dark:bg-blue-500/10 shadow-sm">
                    <Icon size={17} strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 tracking-wide leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Mockup Graphics */}
          <div className="lg:col-span-7 z-10 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-3xl group transition-all duration-700">
              {/* Underlying glowing light effect to match the target premium mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/20 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <img 
                src={heroMockup} 
                alt="Kriscore Premium Tech Mockup" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 3. We Build. We Innovate. We Deliver — Unified Section */}
      <section id="services" className={`${themeStyles.sectionPadding} bg-neutral-100/50 dark:bg-neutral-900/20 transition-colors duration-300`}>
        <div className={themeStyles.container}>

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              We Build. We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent italic">
                Innovate.
              </span>{' '}
              We Deliver.
            </h2>
            <p className={`${themeStyles.body} text-sm`}>
              End-to-end digital solutions for businesses—and innovative products for everyone.
            </p>
          </div>

          {/* Dark two-panel container */}
          <div className="bg-[#080C18] rounded-[2rem] p-8 lg:p-12 shadow-2xl border border-neutral-800/60">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* ── LEFT: Solutions for Businesses ── */}
              <div className="space-y-7">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-500 block mb-3">
                    SOLUTIONS FOR BUSINESSES
                  </span>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                    We Build for Clients
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Custom digital solutions that help businesses streamline operations, engage customers, and achieve their goals.
                  </p>
                </div>

                {/* 3×2 Service Icon Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Web Development',           icon: Laptop },
                    { label: 'Mobile App Development',    icon: Smartphone },
                    { label: 'UI/UX Design',              icon: Palette },
                    { label: 'SaaS & Product Development',icon: Layers },
                    { label: 'Enterprise Solutions',      icon: Server },
                  ].map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 cursor-pointer group text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-600/15 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} />
                      </div>
                      <span className="text-[11px] font-semibold text-neutral-300 leading-tight">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveTab('Services')}
                  className="text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group transition-colors"
                >
                  View All Solutions <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* ── RIGHT: Products We Own ── */}
              <div className="space-y-7">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-500 block mb-3">
                    OUR PRODUCTS
                  </span>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                    Products We Own
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Innovative products we've built to solve real problems across payments, property, healthcare, and beyond.
                  </p>
                </div>

                {/* Product List */}
                <div className="space-y-3">
                  {/* PayEase */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <img src={payeaseMockup} alt="PayEase logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white">PayEase</p>
                      <p className="text-xs text-neutral-400 truncate">PayEase is a digital payments and VTU platform that lets users fund a wallet, purchase airtime and data, pay utility bills, and manage everyday digital payments from one place.</p>
                    </div>
                    <ArrowRight size={14} className="text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>

                  {/* HomeLink */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <img src={homeMockup} alt="HomeLink logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white">HomeLink</p>
                      <p className="text-xs text-neutral-400 truncate">Homelink is a digital property management and investment platform that connects diaspora investors with verified developers, contractors, and financial services, allowing them to manage construction projects remotely with complete transparency.</p>
                    </div>
                    <ArrowRight size={14} className="text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>

                  {/* ClinicPlus */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <img src={clinicMockup} alt="ClinicPlus logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white">ClinicPlus</p>
                      <p className="text-xs text-neutral-400 truncate">ClinicPlus is a modern, cloud-based Healthcare Management System (HMS) designed to help clinics, hospitals, diagnostic centers, and medical practices streamline their daily operations from a single, intelligent platform.</p>
                    </div>
                    <ArrowRight size={14} className="text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>

                  {/* More coming soon */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-white/15 text-neutral-500">
                    <Sparkles size={18} className="shrink-0" />
                    <p className="text-xs font-medium">More innovations coming soon...</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('Products')}
                  className="text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group transition-colors"
                >
                  View All Products <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 5. Technologies Section */}
      <section className={`bg-neutral-100/30 dark:bg-neutral-900/10 transition-colors duration-300 border-y border-neutral-200/50 dark:border-neutral-800/50 py-16`}>
        <div className={themeStyles.container}>
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Technologies We Use</span>
          </div>
          
          {/* Tech logos display */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { name: 'React', icon: Globe, color: 'text-sky-500' },
              { name: 'Next.js', icon: Code2, color: 'text-neutral-950 dark:text-white' },
              { name: 'Node.js', icon: Server, color: 'text-emerald-500' },
              { name: 'MongoDB', icon: Cpu, color: 'text-green-600' },
              { name: 'Tailwind CSS', icon: Sparkles, color: 'text-cyan-400' },
              { name: 'Firebase', icon: Flame, color: 'text-amber-500' },
            ].map((tech) => (
              <div 
                key={tech.name} 
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:scale-105 transition-all shadow-sm"
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action / Contact Banner */}
      <section id="contact" className={themeStyles.sectionPadding}>
        <div className={themeStyles.container}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 to-indigo-950 text-white p-8 md:p-16 shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                  {"Let's Work Together"}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Have a project in mind?
                </h2>
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                  {"We would love to hear about it. Let's design and build something amazing together that drives tangible results."}
                </p>
                <div className="pt-2">
                  <a 
                    href="https://calendly.com/kriscoresolutions/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg active:scale-98 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    Start a Project <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Direct Contacts Block */}
              <div className="lg:col-span-5 space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest">Email Us</p>
                    <a href="mailto:hello@kriscoresolutions.com" className="text-sm font-semibold hover:underline">
                      hello@kriscoresolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest">Call Us</p>
                    <a href="tel:+2349031234567" className="text-sm font-semibold hover:underline">
                      +234 905 628 8890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest">Location</p>
                    <p className="text-sm font-semibold text-neutral-200">
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      {activeTab === 'About Us' && <AboutIndex />}
      {activeTab === "Let's Talk" && <TalkIndex isDark={isDark} />}

      {/* 7. Footer Section */}
      <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-800/50 py-12 transition-colors duration-300">
        <div className={`${themeStyles.container} space-y-8`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo Brand — swaps between light/dark logo based on theme */}
            <div className="flex items-center gap-3">
              <img 
                src={isDark ? logoDarkImg : logoImg} 
                alt="Kriscore Solutions Ltd" 
                className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
              />
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveTab(link)}
                  className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-200/30 dark:border-neutral-800/30 gap-4 text-xs text-neutral-400">
            <p>© {new Date().getFullYear()} Kriscore Solutions Limited. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-5 sm:border-r border-neutral-200/50 dark:border-neutral-800/50 sm:pr-6">
                <a href="#" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="X (formerly Twitter)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/kriscore-solutions-limited/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
