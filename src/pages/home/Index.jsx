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
  Headphones,
  ChevronDown,
  ChevronUp,
  Activity,
  Terminal,
  RefreshCw
} from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'
import heroMockup from '../../assets/Hero.svg'
import logoImg from '../../assets/logo.png'
import logoDarkImg from '../../assets/logo_dark.png'
import payeaseMockup from '../../assets/payeaselogo.png'
import payeaseTransparentMockup from '../../assets/payease_transparent_mockup.png'
import homeMockup from '../../assets/homelinklogo.png'
import clinicMockup from '../../assets/clinicpluslogo.png'
import AboutIndex from '../about/Index'
import TalkIndex from '../talk/Index'
import ProductDesign from '../services/ProductDesign'
import MobileApp from '../services/MobileApp'
import WebDev from '../services/WebDev'
import PayEase from '../products/PayEase'
import HomeLink from '../products/HomeLink'
import ClinicPlus from '../products/ClinicPlus'

function FaqSection({ faqs, themeStyles }) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className={themeStyles.sectionPadding}>
      <div className={themeStyles.container}>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className={themeStyles.badge}>FAQ</span>
          <h2 className={themeStyles.h2}>Frequently Asked Questions</h2>
          <p className={themeStyles.body}>
            Everything you need to know before we get started.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/40 dark:border-neutral-800/60 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-neutral-950 dark:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30 transition-all cursor-pointer gap-4 font-display"
              >
                <span>{faq.q}</span>
                <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${openIndex === i ? 'bg-brand-blue border-brand-blue text-white rotate-45' : 'border-neutral-300 dark:border-neutral-700 text-neutral-400'}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="6" y1="2" x2="6" y2="10"/>
                    <line x1="2" y1="6" x2="10" y2="6"/>
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed border-t border-neutral-200/50 dark:border-neutral-800/50 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WORDS = [
  "Modern World",
  "Future",
  "Digital Age",
  "Connected World",
  "Next Generation",
  "Evolving World",
  "Intelligent Era",
  "Emerging Future",
  "New Era",
  "Digital Economy",
]

const TAB_TO_PATH = {
  'Home': '/',
  'About Us': '/about',
  'Services': '/',
  'FAQ': '/',
  'Contact': '/',
  "Let's Talk": '/talk',
  'Product Design': '/product-design',
  'Mobile App': '/mobile-app',
  'Web Dev': '/web-dev',
  'PayEase': '/payease',
  'HomeLink': '/homelink',
  'ClinicPlus': '/clinicplus',
}

const PATH_TO_TAB = {
  '/': 'Home',
  '/about': 'About Us',
  '/talk': "Let's Talk",
  '/product-design': 'Product Design',
  '/mobile-app': 'Mobile App',
  '/web-dev': 'Web Dev',
  '/payease': 'PayEase',
  '/homelink': 'HomeLink',
  '/clinicplus': 'ClinicPlus',
  '/products/payease': 'PayEase',
  '/products/homelink': 'HomeLink',
  '/products/clinicplus': 'ClinicPlus',
}

export default function Index() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem('kriscore_theme')
    if (saved) {
      return saved === 'dark'
    }
    return false
  }

  const [isDark, setIsDark] = useState(getInitialTheme)

  const getInitialTab = () => {
    const path = window.location.pathname
    if (path && PATH_TO_TAB[path]) {
      return PATH_TO_TAB[path]
    }
    const saved = localStorage.getItem('kriscore_active_tab')
    if (saved && TAB_TO_PATH[saved]) {
      return saved
    }
    return 'Home'
  }

  const [activeTab, setActiveTabState] = useState(getInitialTab)
  const [previousTab, setPreviousTab] = useState('Home')

  const setActiveTab = (tab) => {
    if (tab === "Let's Talk") {
      setPreviousTab(activeTab)
    }
    setActiveTabState(tab)
    const path = TAB_TO_PATH[tab] || '/'
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path)
    }
    localStorage.setItem('kriscore_active_tab', tab)
  }

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path && PATH_TO_TAB[path]) {
        setActiveTabState(PATH_TO_TAB[path])
        localStorage.setItem('kriscore_active_tab', PATH_TO_TAB[path])
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [fadeProp, setFadeProp] = useState('opacity-100 translate-y-0 scale-100')
  const [selectedProduct, setSelectedProduct] = useState('payease')
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const serviceDropdownItems = [
    {
      title: 'Web Design & Development',
      tagline: 'Crafting digital experience that inspire',
      tab: 'Web Dev'
    },
    {
      title: 'Mobile Application Development',
      tagline: 'Designing apps that touch Millions daily',
      tab: 'Mobile App'
    },
    {
      title: 'Product Design',
      tagline: 'Shaping products that shape the future',
      tab: 'Product Design'
    }
  ]

  const productDropdownItems = [
    {
      title: 'PayEase',
      tagline: 'Lightning fast VTU & digital utility payments',
      tab: 'PayEase',
      logo: payeaseMockup
    },
    {
      title: 'HomeLink',
      tagline: 'Secure property escrow & co ownership solutions',
      tab: 'HomeLink',
      logo: homeMockup
    },
    {
      title: 'ClinicPlus',
      tagline: 'Modern medical records & practice management',
      tab: 'ClinicPlus',
      logo: clinicMockup
    }
  ]

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
    if (activeTab === 'Home' || activeTab === 'About Us' || activeTab === 'Blog' || activeTab === "Let's Talk" || activeTab === 'Product Design' || activeTab === 'Mobile App' || activeTab === 'Web Dev' || activeTab === 'PayEase' || activeTab === 'HomeLink' || activeTab === 'ClinicPlus') {
      if (window.__scroll_to_products) {
        window.__scroll_to_products = false
        return
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (activeTab === 'Services') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    } else if (activeTab === 'FAQ') {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
    } else if (activeTab === 'Contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [activeTab])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem('kriscore_theme', newIsDark ? 'dark' : 'light')
  }

  const navLinks = ['Products', 'Services', 'About Us', 'FAQ', 'Contact']

  return (
    <div className={themeStyles.wrapper}>
      {/* 1. Header / Navigation Bar */}
      {activeTab !== "Let's Talk" && (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
        <div className={`${themeStyles.container} h-20 flex items-center justify-between`}>
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab('Home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img 
              src={isDark ? logoDarkImg : logoImg} 
              alt="Kriscore Solutions Ltd" 
              className="h-20 md:h-24 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link === 'Services' ? (
                <div
                  key={link}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setServicesDropdownOpen(!servicesDropdownOpen)
                    }}
                    className={`${
                      activeTab === 'Services' || activeTab === 'Web Dev' || activeTab === 'Mobile App' || activeTab === 'Product Design'
                        ? themeStyles.navLinkActive 
                        : themeStyles.navLink
                    } flex items-center gap-1 cursor-pointer`}
                  >
                    <span>Services</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Desktop Dropdown Card */}
                  <div
                    className={`absolute top-full -left-4 pt-2.5 w-[300px] z-50 transition-all duration-200 ${
                      servicesDropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl rounded-2xl shadow-xl border border-neutral-200/60 dark:border-neutral-800/80 p-2.5 space-y-1 text-left">
                      {serviceDropdownItems.map((item) => (
                        <div
                          key={item.title}
                          onClick={() => {
                            setActiveTab(item.tab)
                            setServicesDropdownOpen(false)
                          }}
                          className="group/item cursor-pointer block p-3 rounded-xl hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 transition-all duration-150"
                        >
                          <h4 className="text-sm font-bold text-[#002FA7] dark:text-white group-hover/item:text-brand-blue dark:group-hover/item:text-brand-blue-light transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[11.5px] font-normal text-neutral-500 dark:text-neutral-400 mt-0.5 leading-tight">
                            {item.tagline}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link === 'Products' ? (
                <div
                  key={link}
                  className="relative group"
                  onMouseEnter={() => setProductDropdownOpen(true)}
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setProductDropdownOpen(!productDropdownOpen)
                    }}
                    className={`${
                      activeTab === 'PayEase' || activeTab === 'HomeLink' || activeTab === 'ClinicPlus'
                        ? themeStyles.navLinkActive 
                        : themeStyles.navLink
                    } flex items-center gap-1 cursor-pointer`}
                  >
                    <span>Products</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${productDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Desktop Dropdown Card */}
                  <div
                    className={`absolute top-full -left-4 pt-2.5 w-[300px] z-50 transition-all duration-200 ${
                      productDropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl rounded-2xl shadow-xl border border-neutral-200/60 dark:border-neutral-800/80 p-2.5 space-y-1 text-left">
                      {productDropdownItems.map((item) => (
                        <div
                          key={item.title}
                          onClick={() => {
                            setActiveTab(item.tab)
                            setProductDropdownOpen(false)
                          }}
                          className="group/item cursor-pointer flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 transition-all duration-150"
                        >
                          <img
                            src={item.logo}
                            alt=""
                            className="w-10 h-10 object-cover object-left rounded-lg bg-neutral-50 dark:bg-neutral-800 flex-shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-[#002FA7] dark:text-white group-hover/item:text-brand-blue dark:group-hover/item:text-brand-blue-light transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-[11.5px] font-normal text-neutral-500 dark:text-neutral-400 mt-0.5 leading-tight">
                              {item.tagline}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={link}
                  onClick={() => setActiveTab(link)}
                  className={`${
                    activeTab === link 
                      ? themeStyles.navLinkActive 
                      : themeStyles.navLink
                  } flex items-center gap-1 cursor-pointer`}
                >
                  {link}
                </button>
              )
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Let's Talk CTA */}
            <a 
              href={import.meta.env.VITE_CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className={themeStyles.btnCta}
            >
              {"Let's Talk"} <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer text-neutral-700 dark:text-neutral-300"
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
              link === 'Services' ? (
                <div key={link} className="border-b border-neutral-100 dark:border-neutral-800/60">
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="w-full flex items-center justify-between py-2 text-left cursor-pointer"
                  >
                    <span
                      className={`text-base font-semibold ${
                        activeTab === 'Services' || activeTab === 'Web Dev' || activeTab === 'Mobile App' || activeTab === 'Product Design'
                          ? 'text-brand-blue dark:text-brand-blue-light'
                          : 'text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      Services
                    </span>
                    <ChevronDown size={18} className={`text-neutral-500 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesDropdownOpen && (
                    <div className="pl-4 pb-4 space-y-4 pt-2">
                      {serviceDropdownItems.map((item) => (
                        <div
                          key={item.title}
                          onClick={() => {
                            setActiveTab(item.tab)
                            setMobileMenuOpen(false)
                            setServicesDropdownOpen(false)
                          }}
                          className="cursor-pointer space-y-1"
                        >
                          <h4 className="text-sm font-bold text-[#002FA7] dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {item.tagline}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : link === 'Products' ? (
                <div key={link} className="border-b border-neutral-100 dark:border-neutral-800/60">
                  <button
                    onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                    className="w-full flex items-center justify-between py-2 text-left cursor-pointer"
                  >
                    <span
                      className={`text-base font-semibold ${
                        activeTab === 'PayEase' || activeTab === 'HomeLink' || activeTab === 'ClinicPlus'
                          ? 'text-brand-blue dark:text-brand-blue-light'
                          : 'text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      Products
                    </span>
                    <ChevronDown size={18} className={`text-neutral-500 transition-transform duration-300 ${productDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {productDropdownOpen && (
                    <div className="pl-4 pb-4 space-y-4 pt-2">
                      {productDropdownItems.map((item) => (
                        <div
                          key={item.title}
                          onClick={() => {
                            setActiveTab(item.tab)
                            setMobileMenuOpen(false)
                            setProductDropdownOpen(false)
                          }}
                          className="cursor-pointer flex items-center gap-3 py-1"
                        >
                          <img
                            src={item.logo}
                            alt=""
                            className="w-8 h-8 object-cover object-left rounded-lg bg-neutral-100 dark:bg-neutral-800 flex-shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-[#002FA7] dark:text-white">
                              {item.title}
                            </h4>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                              {item.tagline}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link}
                  onClick={() => { setActiveTab(link); setMobileMenuOpen(false); }}
                  className={`text-left text-base font-semibold py-2 border-b border-neutral-100 dark:border-neutral-800/60 ${
                    activeTab === link
                      ? 'text-brand-blue dark:text-brand-blue-light'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-brand-blue dark:hover:text-brand-blue-light'
                  } transition-colors`}
                >
                  {link}
                </button>
              )
            ))}

            {/* Mobile Bottom Actions */}
            <div className="flex items-center justify-between pt-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>

              {/* Let's Talk CTA */}
              <a
                href={import.meta.env.VITE_CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold rounded-full active:scale-[0.98] transition-all inline-flex items-center gap-2"
              >
                {"Let's Talk"} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
        </header>
      )}

      {/* Dedicated Product Detail Pages (Figur Layout) */}
      {activeTab === 'PayEase' && (
        <div className={themeStyles.wrapper}>
          <PayEase
            onBack={() => {
              window.__scroll_to_products = true;
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            setActiveTab={setActiveTab}
          />
        </div>
      )}

      {activeTab === 'HomeLink' && (
        <div className={themeStyles.wrapper}>
          <HomeLink
            onBack={() => {
              window.__scroll_to_products = true;
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            setActiveTab={setActiveTab}
          />
        </div>
      )}

      {activeTab === 'ClinicPlus' && (
        <div className={themeStyles.wrapper}>
          <ClinicPlus
            onBack={() => {
              window.__scroll_to_products = true;
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            setActiveTab={setActiveTab}
          />
        </div>
      )}

      {activeTab !== 'About Us' && activeTab !== "Let's Talk" && activeTab !== 'Products' && activeTab !== 'Product Design' && activeTab !== 'Mobile App' && activeTab !== 'Web Dev' && activeTab !== 'PayEase' && activeTab !== 'HomeLink' && activeTab !== 'ClinicPlus' && (
        <>
          {/* 2. Hero Section */}
          <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">

            <div className={`${themeStyles.container} grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start`}>
          {/* Hero Left Content */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6 min-h-[3.6em] sm:min-h-[2.8em] lg:min-h-[2.8em] font-display">
              Building Digital Solutions for the{' '}
              <span className={`text-brand-blue dark:text-brand-blue-light block sm:inline-block pb-3 -mb-3 transition-all duration-500 ease-out transform ${fadeProp}`}>
                {WORDS[wordIndex]}
              </span>
            </h1>
            <p className={themeStyles.bodyLg}>
              A global technology company creating future ready software solutions for ambitious startups, growing enterprises, and visionary entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button 
                onClick={() => setActiveTab('Services')}
                className={themeStyles.btnSecondary}
              >
                Our Services <ArrowRight size={18} />
              </button>
              <a 
                href={import.meta.env.VITE_CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className={themeStyles.btnPrimary}
              >
                Book Strategy Call
              </a>
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

      {/* 3. Custom Client Solutions */}
      <section id="services" className={`${themeStyles.sectionPadding} bg-white dark:bg-brand-dark/20 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300 relative overflow-hidden`}>
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className={themeStyles.container}>
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={themeStyles.badge}>SOLUTIONS FOR CLIENTS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-display">
              We Build for Clients
            </h2>
            <p className={`${themeStyles.bodyLg} max-w-2xl mx-auto`}>
              We design and develop custom digital solutions that streamline workflows, optimize operations, and scale businesses effectively.
            </p>
          </div>

          {/* Full-width 3-Column Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'Web Design & Development',
                tagline: 'Crafting digital experience that inspire',
                icon: Laptop,
                features: [
                  'Responsive Web Applications',
                  'Next.js, React & Modern Stacks',
                  'Performance & SEO Optimization',
                ]
              },
              {
                title: 'Mobile Application Development',
                tagline: 'Designing apps that touch Millions daily',
                icon: Smartphone,
                features: [
                  'iOS & Android Cross Platform Apps',
                  'React Native & Native Performance',
                  'App Store & Play Store Launch',
                ]
              },
              {
                title: 'Product Design',
                tagline: 'Shaping products that shape the future',
                icon: Palette,
                features: [
                  'UI/UX Design & High Fidelity Mockups',
                  'Interactive User Experience Prototypes',
                  'User Centered Design Systems',
                ]
              }
            ].map(({ title, tagline, icon: Icon, features }) => (
              <div
                key={title}
                onClick={() => {
                  if (title === 'Web Design & Development') {
                    setActiveTab('Web Dev')
                  } else if (title === 'Mobile Application Development') {
                    setActiveTab('Mobile App')
                  } else if (title === 'Product Design') {
                    setActiveTab('Product Design')
                  }
                }}
                className="backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/50 dark:border-neutral-800/80 rounded-[2.5rem] p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-brand-blue/5 hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between group cursor-pointer hover:border-brand-blue/30 dark:hover:border-brand-blue/40 relative overflow-hidden"
              >
                {/* Diagonal corner gradient on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Icon wrapper */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-blue-light border border-brand-blue/10 dark:border-brand-blue/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white font-display mt-6 mb-3 tracking-tight group-hover:text-brand-blue dark:group-hover:text-brand-blue-light transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-neutral-600 dark:text-neutral-350 leading-relaxed font-sans mb-6">
                    {tagline}
                  </p>
                </div>

                <div>
                  {/* Features list */}
                  <ul className="space-y-3.5 border-t border-neutral-100 dark:border-neutral-800/80 pt-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/60 dark:bg-brand-blue-light/60 group-hover:scale-125 transition-transform duration-300"></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <div className="mt-8 pt-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-blue dark:text-brand-blue-light group-hover:text-brand-blue-hover dark:group-hover:text-white transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Products Selector Dashboard Section */}
      <section id="products-section" className={`${themeStyles.sectionPadding} bg-white dark:bg-[#070C18]/60 transition-colors duration-300 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-36 md:pb-60`}>
        <div className={themeStyles.container}>
          {/* Header */}
          <div className="max-w-2xl mb-24 space-y-4">
            <span className={themeStyles.badge}>
              OUR INNOVATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-display leading-tight">
              Products Built
              <br />
              In-House.
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Beyond client work, we build our own innovative products to solve real problems across payments, property, and healthcare.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
            
            {/* Card 1: PayEase */}
            <div className="relative overflow-hidden bg-[#F5F2FC] dark:bg-[#100C1F] border border-purple-500/10 dark:border-purple-500/20 rounded-[2rem] pt-10 px-8 pb-0 shadow-sm hover:shadow-xl transition-all duration-300 group min-h-[500px] flex flex-col justify-between">
              
              {/* Topographic Background lines */}
              <div className="absolute -top-3 -right-px w-36 h-28 opacity-25 pointer-events-none text-purple-500">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,-10 Q30,50 65,20 T105,35" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,0 Q30,65 65,35 T105,50" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,10 Q30,80 65,50 T105,65" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={payeaseMockup}
                    alt=""
                    className="w-8 h-8 object-cover object-left rounded-lg dark:bg-purple-900/30 flex-shrink-0"
                  />
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 block font-display">
                    PayEase
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white font-display leading-snug">
                  A digital payment.
                </h3>
                <p className="text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  An ecosystem built for individuals and businesses to experience seamless accessibility to everyday financial services.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('PayEase')}
                    className="text-[#7C3AED] dark:text-[#A78BFA] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    LEARN MORE <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* Phone screen overflowing bottom right */}
              <div className="relative h-[220px] w-full mt-8 flex justify-end">
                <div className="w-[200px] h-[260px] bg-white dark:bg-[#0D0D1A] rounded-t-[1.6rem] shadow-2xl flex flex-col translate-x-4 translate-y-3 group-hover:translate-y-0.5 transition-transform duration-500 text-left relative z-10 overflow-hidden border border-neutral-200/50 dark:border-neutral-800/30">
                  
                  {/* ===== PURPLE HEADER ===== */}
                  <div className="bg-gradient-to-br from-[#8B3CF7] via-[#7C3AED] to-[#6D28D9] px-3 pt-2 pb-3 flex flex-col gap-1.5">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-white">
                      <span className="text-[6.5px] font-bold font-mono">9:41</span>
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
                        <div className="w-5 h-5 rounded-full bg-[#4C1D95] border-2 border-white/30 overflow-hidden flex items-center justify-center flex-shrink-0">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/80"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                        </div>
                        <div className="leading-none">
                          <span className="text-[5.5px] text-white/80 font-medium block">Welcome Back</span>
                          <span className="text-[8px] font-extrabold text-white block">Kris4</span>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                      </div>
                    </div>

                    {/* Wallet History link */}
                    <div className="flex justify-end">
                      <span className="text-[5px] text-white/70 font-semibold flex items-center gap-0.5">
                        Wallet History
                        <svg viewBox="0 0 24 24" className="w-1.5 h-1.5 fill-white/70"><path d="M10 17l5-5-5-5v10z"/></svg>
                      </span>
                    </div>

                    {/* Available Balance Card */}
                    <div className="bg-[#EDE9FE] dark:bg-[#2E1A5A] rounded-xl px-2.5 py-2 flex justify-between items-center shadow-md">
                      <div className="space-y-0.5 text-left">
                        <span className="text-[5px] font-semibold text-neutral-600 dark:text-purple-200 block">Available balance</span>
                        <span className="text-[12px] font-extrabold text-neutral-900 dark:text-white tracking-tight leading-none">₦105,000</span>
                      </div>
                      <div className="bg-[#7C3AED] text-white text-[5.5px] font-extrabold px-2 py-1.5 rounded-lg shadow-sm whitespace-nowrap">
                        Fund Wallet
                      </div>
                    </div>
                  </div>

                  {/* ===== WHITE BODY — 3x2 SVG ICON GRID ===== */}
                  <div className="bg-white dark:bg-[#0D0D1A] flex-1 px-2 pt-2 pb-1">
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { label: 'Airtime',     d: 'M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z' },
                        { label: 'Data',        d: 'M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z' },
                        { label: 'Electricity', d: 'M7 2v11h3v9l7-12h-4l4-8z' },
                        { label: 'Betting',     d: 'M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2z' },
                        { label: 'Internet',    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
                        { label: 'Cable TV',    d: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z' },
                      ].map((item) => (
                        <div key={item.label} className="bg-white dark:bg-[#161626] border border-[#EDE9FE] dark:border-[#2E1A5A] rounded-xl flex flex-col items-center justify-center py-1.5 gap-0.5 shadow-sm">
                          <div className="w-4 h-4 rounded-full bg-[#F3EEFE] dark:bg-[#2E1A5A] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#7C3AED] dark:fill-[#A78BFA]">
                              <path d={item.d} />
                            </svg>
                          </div>
                          <span className="text-[5px] font-bold text-neutral-700 dark:text-neutral-300 text-center leading-tight">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Card 2: HomeLink */}
            <div className="relative overflow-hidden bg-[#F0FAF5] dark:bg-[#091710] border border-emerald-500/10 dark:border-emerald-500/20 rounded-[2rem] pt-10 px-8 pb-0 shadow-sm hover:shadow-xl transition-all duration-300 group min-h-[500px] flex flex-col justify-between md:translate-y-12">
              
              {/* Topographic Background lines */}
              <div className="absolute -top-3 -right-px w-36 h-28 opacity-25 pointer-events-none text-emerald-500">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,-10 Q30,50 65,20 T105,35" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,0 Q30,65 65,35 T105,50" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,10 Q30,80 65,50 T105,65" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={homeMockup}
                    alt=""
                    className="w-8 h-8 object-cover object-left rounded-lg dark:bg-emerald-900/30 flex-shrink-0"
                  />
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block font-display">
                    HomeLink
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white font-display leading-snug">
                  Diaspora property milestone management.
                </h3>
                <p className="text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Connecting remote investors with verified property developers. Manage construction milestones and structured escrow payments.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('HomeLink')}
                    className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    LEARN MORE <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* HomeLink Dashboard Mockup */}
              <div className="relative h-[230px] w-full mt-8 overflow-hidden flex justify-start">
                <div className="w-full h-[260px] rounded-t-xl shadow-xl flex text-left translate-y-3 group-hover:translate-y-0.5 transition-transform duration-500 overflow-hidden border border-neutral-200/60 dark:border-emerald-900/40">
                  
                  {/* Dark Green Sidebar */}
                  <div className="w-[52px] bg-[#0D2818] flex flex-col items-center py-2 gap-2 flex-shrink-0">
                    <div className="flex flex-col items-center gap-0.5 mb-1">
                      <div className="w-5 h-5 bg-white/10 rounded-md flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                      </div>
                      <span className="text-[4.5px] font-extrabold text-white tracking-tight leading-none">Homelink</span>
                    </div>
                    {[
                      { d: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z', active: true },
                      { d: 'M20 6h-2.18c.07-.44.18-.88.18-1.33C18 2.54 15.96.5 13.5.5S9 2.54 9 4.67c0 .45.11.89.18 1.33H7C5.9 6 5 6.9 5 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z', active: false },
                      { d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z', active: false },
                      { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z', active: false },
                    ].map((item, i) => (
                      <div key={i} className={`w-8 h-7 rounded-lg flex items-center justify-center ${item.active ? 'bg-[#1B4332]' : ''}`}>
                        <svg viewBox="0 0 24 24" className={`w-3 h-3 ${item.active ? 'fill-emerald-400' : 'fill-white/40'}`}><path d={item.d}/></svg>
                      </div>
                    ))}
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 bg-white dark:bg-[#0A1A10] flex flex-col overflow-hidden">

                    {/* Header */}
                    <div className="px-2.5 py-1.5 border-b border-neutral-100 dark:border-emerald-900/20 flex justify-between items-center flex-shrink-0">
                      <div>
                        <p className="text-[7px] font-extrabold text-neutral-900 dark:text-white leading-none">Welcome back, Ayo</p>
                        <p className="text-[4.5px] text-neutral-400">Here's what's happening with your investment.</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded-full bg-emerald-700 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                        </div>
                        <div className="leading-none">
                          <p className="text-[5px] font-bold text-neutral-800 dark:text-white">Ayo Adewale</p>
                          <p className="text-[4px] text-emerald-600 dark:text-emerald-400">Diaspora Investor</p>
                        </div>
                      </div>
                    </div>

                    {/* Property Banner */}
                    <div className="mx-2 mt-1.5 bg-[#0D2818] rounded-lg p-2 flex justify-between items-center flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <div className="w-8 h-7 rounded-md bg-emerald-900/60 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-600"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-0.5">
                            <p className="text-[6px] font-extrabold text-white">Greenview Villa</p>
                            <span className="text-[3.5px] bg-emerald-500/30 text-emerald-300 px-0.5 py-0.5 rounded font-bold">Active</span>
                          </div>
                          <p className="text-[4px] text-white/50">Lekki, Lagos · HLK-2024-0768</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[4px] text-white/50">Build Progress</p>
                        <p className="text-[9px] font-extrabold text-white leading-none">75%</p>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-emerald-400 rounded-full"></div>
                          </div>
                          <span className="text-[3.5px] text-emerald-400">On Track</span>
                        </div>
                      </div>
                    </div>

                    {/* Phase Timeline */}
                    <div className="mx-2 mt-1.5 bg-neutral-50 dark:bg-[#0D1F12] rounded-lg p-1.5 flex-shrink-0">
                      <p className="text-[5px] font-extrabold text-neutral-700 dark:text-white mb-1">Build Phase</p>
                      <div className="flex items-start">
                        {[
                          { label: 'Foundation', status: 'done', sub: 'Completed' },
                          { label: 'Blockwork',  status: 'done', sub: 'Completed' },
                          { label: 'Roofing',    status: 'active', sub: '75%' },
                          { label: 'Finishing',  status: 'pending', sub: 'Pending' },
                          { label: 'Handover',   status: 'pending', sub: 'Pending' },
                        ].map((p, i, arr) => (
                          <div key={i} className="flex-1 flex flex-col items-center relative">
                            {i < arr.length - 1 && (
                              <div className={`absolute top-2 left-1/2 w-full h-[1.5px] ${p.status === 'done' ? 'bg-emerald-400' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
                            )}
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center z-10 border-2 flex-shrink-0 ${
                              p.status === 'done' ? 'bg-emerald-500 border-emerald-500' :
                              p.status === 'active' ? 'bg-white dark:bg-[#0D1F12] border-emerald-500' :
                              'bg-white dark:bg-[#0D1F12] border-neutral-300 dark:border-neutral-700'
                            }`}>
                              {p.status === 'done' && <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>}
                              {p.status === 'active' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>}
                            </div>
                            <p className="text-[3.5px] text-center text-neutral-500 dark:text-neutral-400 mt-0.5 leading-tight">{p.label}</p>
                            <p className={`text-[3px] font-bold text-center leading-tight ${
                              p.status === 'pending' ? 'text-neutral-400' : 'text-emerald-500'
                            }`}>{p.sub}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="text-[4px] font-bold text-neutral-500">Overall Progress</span>
                        <div className="flex-1 h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-[4px] font-extrabold text-emerald-600 dark:text-emerald-400">75%</span>
                      </div>
                    </div>

                    {/* Escrow + Next Milestone */}
                    <div className="mx-2 mt-1.5 grid grid-cols-2 gap-1.5 pb-2">
                      <div className="bg-neutral-50 dark:bg-[#0D1F12] rounded-lg p-1.5">
                        <p className="text-[4px] text-neutral-400 font-semibold">Total Escrow</p>
                        <p className="text-[7px] font-extrabold text-neutral-900 dark:text-white">$250,000</p>
                        <div className="mt-0.5 space-y-0.5">
                          <div className="flex items-center gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                            <span className="text-[3.5px] text-neutral-500">Secured $187,500</span>
                          </div>
                          <div className="flex items-center gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                            <span className="text-[3.5px] text-neutral-500">Released $62,500</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-emerald-50 dark:bg-[#0D2818] rounded-lg p-1.5">
                        <p className="text-[4px] text-neutral-400 font-semibold">Next Milestone</p>
                        <p className="text-[7px] font-extrabold text-neutral-900 dark:text-white">Roofing</p>
                        <p className="text-[3.5px] text-neutral-400 mt-0.5">May 28, 2025</p>
                        <span className="text-[3.5px] bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-1 py-0.5 rounded font-bold inline-block mt-0.5">On Track</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Card 3: ClinicPlus */}
            <div className="relative overflow-hidden bg-[#F2F6FC] dark:bg-[#0A1020] border border-blue-500/10 dark:border-blue-500/20 rounded-[2rem] pt-10 px-8 pb-0 shadow-sm hover:shadow-xl transition-all duration-300 group min-h-[500px] flex flex-col justify-between md:translate-y-24">
              
              {/* Topographic Background lines */}
              <div className="absolute -top-3 -right-px w-36 h-28 opacity-25 pointer-events-none text-blue-500">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,-10 Q30,50 65,20 T105,35" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,0 Q30,65 65,35 T105,50" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,10 Q30,80 65,50 T105,65" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={clinicMockup}
                    alt=""
                    className="w-8 h-8 object-cover object-left rounded-lg dark:bg-blue-900/30 flex-shrink-0"
                  />
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block font-display">
                    ClinicPlus
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white font-display leading-snug">
                  Cloud clinic administration suite.
                </h3>
                <p className="text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Streamline operations at clinical centers, covering patient registration, scheduling, billing ledgers, and electronic records.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('ClinicPlus')}
                    className="text-[#2563EB] dark:text-[#60A5FA] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    LEARN MORE <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* ClinicPlus Dashboard Mockup - Precise Replica */}
              <div className="relative h-[230px] w-full mt-8 overflow-hidden flex justify-start">
                <div className="w-full h-[270px] rounded-t-xl shadow-xl flex text-left translate-y-3 group-hover:translate-y-0.5 transition-transform duration-500 overflow-hidden border border-neutral-200/60 dark:border-neutral-800/40">

                  {/* ── WHITE LEFT SIDEBAR with text labels ── */}
                  <div className="w-[58px] bg-white dark:bg-[#0C0A1A] border-r border-neutral-100 dark:border-neutral-800/40 flex flex-col py-2 gap-0.5 flex-shrink-0">
                    {/* Logo */}
                    <div className="flex items-center gap-1 px-2 mb-2">
                      <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                        <span className="text-[5px] font-black text-white">C+</span>
                      </div>
                      <span className="text-[5px] font-black text-neutral-900 dark:text-white">Clinic<span className="text-[#2563EB]">Plus</span></span>
                    </div>
                    {/* Nav */}
                    {[
                      { label: 'Dashboard', d: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z', active: true },
                      { label: 'Appointments', d: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2 L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z', active: false },
                      { label: 'Patients', d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', active: false },
                      { label: 'Doctors', d: 'M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm0 8.2c-2 0-3.81-1.02-4.87-2.58C7.79 9.44 9.64 9 12 9s4.21.44 4.87 1.62C15.81 12.18 14 13.2 12 13.2z', active: false },
                      { label: 'Billing', d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z', active: false },
                      { label: 'Reports', d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z', active: false },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center gap-1 px-1.5 py-0.5 rounded-md mx-1 ${item.active ? 'bg-[#2563EB]/10' : ''}`}>
                        <svg viewBox="0 0 24 24" className={`w-2.5 h-2.5 flex-shrink-0 ${item.active ? 'fill-[#2563EB]' : 'fill-neutral-400 dark:fill-neutral-600'}`}><path d={item.d}/></svg>
                        <span className={`text-[4px] font-semibold truncate ${item.active ? 'text-[#2563EB]' : 'text-neutral-500 dark:text-neutral-500'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* ── MAIN CONTENT ── */}
                  <div className="flex-1 bg-[#F8FAFC] dark:bg-[#0D0A1E] flex flex-col overflow-hidden">

                    {/* Top Navbar */}
                    <div className="px-2 py-1 bg-white dark:bg-[#120F28] border-b border-neutral-100 dark:border-neutral-800/40 flex justify-between items-center flex-shrink-0">
                      <div className="flex items-center gap-1 flex-1">
                        <span className="text-[5px] font-black text-neutral-900 dark:text-white mr-1">Dashboard</span>
                        {/* Search bar */}
                        <div className="flex items-center gap-0.5 bg-neutral-100 dark:bg-neutral-800 rounded px-1 py-0.5 flex-1 max-w-[60px]">
                          <svg viewBox="0 0 24 24" className="w-2 h-2 fill-neutral-400 flex-shrink-0"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                          <span className="text-[3.5px] text-neutral-400 truncate">Search...</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {/* Bell with badge */}
                        <div className="relative">
                          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-neutral-500"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full flex items-center justify-center text-[2.5px] font-black text-white">8</span>
                        </div>
                        {/* Settings */}
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-neutral-500"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
                        {/* User */}
                        <div className="flex items-center gap-0.5">
                          <div className="w-3 h-3 rounded-full bg-[#2563EB] border border-white flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                          </div>
                          <div className="leading-none">
                            <p className="text-[4px] font-bold text-neutral-700 dark:text-neutral-200 whitespace-nowrap">Dr. Sarah Johnson</p>
                            <p className="text-[3.5px] text-[#2563EB]">Admin</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard title + date */}
                    <div className="px-2 pt-1 pb-0.5 flex justify-between items-center flex-shrink-0">
                      <p className="text-[6px] font-extrabold text-neutral-900 dark:text-white">Dashboard</p>
                      <div className="flex items-center gap-0.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1 py-0.5">
                        <svg viewBox="0 0 24 24" className="w-1.5 h-1.5 fill-neutral-500"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                        <span className="text-[3.5px] text-neutral-500">May 20 to May 26, 2024</span>
                      </div>
                    </div>

                    {/* 4 Stat Cards */}
                    <div className="px-2 pb-1 grid grid-cols-4 gap-1 flex-shrink-0">
                      {[
                        { label: 'Total Patients', value: '2,453', change: '↑ 12.5%', up: true, iconColor: 'bg-blue-100 dark:bg-blue-900/30', iconFill: 'fill-[#2563EB]', iconD: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
                        { label: 'Appointments', value: '320', change: '↑ 8.3%', up: true, iconColor: 'bg-emerald-100 dark:bg-emerald-900/30', iconFill: 'fill-emerald-600', iconD: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z' },
                        { label: 'Total Revenue', value: '$74,580', change: '↑ 15.2%', up: true, iconColor: 'bg-purple-100 dark:bg-purple-900/30', iconFill: 'fill-purple-600', iconD: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' },
                        { label: 'Pending Bills', value: '48', change: '↓ 5.6%', up: false, iconColor: 'bg-orange-100 dark:bg-orange-900/30', iconFill: 'fill-orange-500', iconD: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' },
                      ].map((s) => (
                        <div key={s.label} className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40 flex flex-col gap-0.5">
                          <div className="flex justify-between items-start">
                            <p className="text-[3.5px] text-neutral-500 dark:text-neutral-400 leading-tight pr-0.5">{s.label}</p>
                            <div className={`w-3 h-3 rounded-md flex items-center justify-center flex-shrink-0 ${s.iconColor}`}>
                              <svg viewBox="0 0 24 24" className={`w-2 h-2 ${s.iconFill}`}><path d={s.iconD}/></svg>
                            </div>
                          </div>
                          <p className="text-[7px] font-extrabold text-neutral-900 dark:text-white leading-none">{s.value}</p>
                          <p className={`text-[3px] font-bold ${s.up ? 'text-emerald-500' : 'text-red-500'}`}>{s.change} from last week</p>
                        </div>
                      ))}
                    </div>

                    {/* Middle: Chart + Recent Appointments */}
                    <div className="px-2 grid grid-cols-2 gap-1 flex-shrink-0">

                      {/* Appointments Overview line chart */}
                      <div className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40">
                        <div className="flex justify-between items-center mb-0.5">
                          <p className="text-[4px] font-extrabold text-neutral-800 dark:text-white">Appointments Overview</p>
                          <span className="text-[3px] text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded px-0.5">This Week ▾</span>
                        </div>
                        {/* SVG line chart */}
                        <svg viewBox="0 0 80 36" className="w-full h-[28px]" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15"/>
                              <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                          {/* Grid lines */}
                          {[8, 16, 24, 32].map(y => <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="#e5e7eb" strokeWidth="0.5"/>)}
                          {/* Y labels */}
                          <text x="0" y="7" fontSize="3" fill="#9ca3af">100</text>
                          <text x="0" y="18" fontSize="3" fill="#9ca3af">75</text>
                          <text x="0" y="28" fontSize="3" fill="#9ca3af">50</text>
                          {/* Area fill */}
                          <path d="M8,28 L20,22 L32,10 L44,14 L56,20 L68,18 L78,22 L78,36 L8,36 Z" fill="url(#chartGrad)"/>
                          {/* Line */}
                          <polyline points="8,28 20,22 32,10 44,14 56,20 68,18 78,22" fill="none" stroke="#2563EB" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"/>
                          {/* Peak dot */}
                          <circle cx="32" cy="10" r="1.5" fill="#2563EB"/>
                          <text x="30" y="8" fontSize="2.5" fill="#2563EB" fontWeight="bold">75</text>
                          {/* X labels */}
                          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, i) => (
                            <text key={d} x={8 + i * 11.7} y="35.5" fontSize="2.5" fill="#9ca3af" textAnchor="middle">{d}</text>
                          ))}
                        </svg>
                      </div>

                      {/* Recent Appointments */}
                      <div className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40">
                        <div className="flex justify-between items-center mb-0.5">
                          <p className="text-[4px] font-extrabold text-neutral-800 dark:text-white">Recent Appointments</p>
                          <span className="text-[3px] text-[#2563EB] font-bold">View All</span>
                        </div>
                        <div className="space-y-0.5">
                          {[
                            { name: 'John Smith',     type: 'General Checkup',       time: '09:00 AM', status: 'Confirmed' },
                            { name: 'Emily Davis',    type: 'Dental Consultation',   time: '10:30 AM', status: 'Confirmed' },
                            { name: 'Michael Brown',  type: 'Cardiology Follow-up',  time: '11:45 AM', status: 'Pending' },
                            { name: 'Sarah Wilson',   type: 'Physiotherapy',         time: '02:00 PM', status: 'Confirmed' },
                          ].map((appt) => (
                            <div key={appt.name} className="flex justify-between items-center py-0.5 border-b border-neutral-50 dark:border-neutral-800/30 last:border-0">
                              <div className="flex items-center gap-0.5">
                                <span className="text-[3.5px] text-neutral-400 w-8 flex-shrink-0">{appt.time}</span>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]/15 flex items-center justify-center flex-shrink-0">
                                  <svg viewBox="0 0 24 24" className="w-1.5 h-1.5 fill-[#2563EB]"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                                </div>
                                <div>
                                  <p className="text-[3.5px] font-bold text-neutral-800 dark:text-neutral-200 leading-none">{appt.name}</p>
                                  <p className="text-[3px] text-neutral-400 leading-none">{appt.type}</p>
                                </div>
                              </div>
                              <span className={`text-[3px] font-bold px-0.5 py-0.5 rounded flex-shrink-0 ${appt.status === 'Confirmed' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'}`}>
                                {appt.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Department Donut + Revenue Bar Chart */}
                    <div className="px-2 pt-1 grid grid-cols-2 gap-1 pb-1">

                      {/* Department Overview */}
                      <div className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40">
                        <p className="text-[4px] font-extrabold text-neutral-800 dark:text-white mb-0.5">Department Overview</p>
                        <div className="flex items-center gap-1">
                          {/* Donut SVG */}
                          <svg viewBox="0 0 36 36" className="w-8 h-8 flex-shrink-0" style={{transform:'rotate(-90deg)'}}>
                            <circle cx="18" cy="18" r="12" fill="none" stroke="#e5e7eb" strokeWidth="5"/>
                            <circle cx="18" cy="18" r="12" fill="none" stroke="#2563EB" strokeWidth="5" strokeDasharray="17.3 58.2" strokeDashoffset="0"/>
                            <circle cx="18" cy="18" r="12" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="14.9 60.6" strokeDashoffset="-17.3"/>
                            <circle cx="18" cy="18" r="12" fill="none" stroke="#8b5cf6" strokeWidth="5" strokeDasharray="14.9 60.6" strokeDashoffset="-32.2"/>
                            <circle cx="18" cy="18" r="12" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="11.2 64.3" strokeDashoffset="-47.1"/>
                            <circle cx="18" cy="18" r="12" fill="none" stroke="#e5e7eb" strokeWidth="5" strokeDasharray="14.9 60.6" strokeDashoffset="-58.3"/>
                            <text x="18" y="19" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#374151" style={{transform:'rotate(90deg)', transformOrigin:'18px 18px'}}>18</text>
                          </svg>
                          {/* Legend */}
                          <div className="space-y-0.5 flex-1">
                            {[
                              { label: 'Cardiology', pct: '23%', color: 'bg-[#2563EB]' },
                              { label: 'Orthopedics', pct: '20%', color: 'bg-emerald-500' },
                              { label: 'Pediatrics', pct: '20%', color: 'bg-purple-500' },
                              { label: 'Gen. Medicine', pct: '15%', color: 'bg-amber-500' },
                              { label: 'Others', pct: '20%', color: 'bg-neutral-300' },
                            ].map(d => (
                              <div key={d.label} className="flex items-center gap-0.5">
                                <span className={`w-1 h-1 rounded-full flex-shrink-0 ${d.color}`}></span>
                                <span className="text-[3px] text-neutral-600 dark:text-neutral-400 flex-1">{d.label}</span>
                                <span className="text-[3px] font-bold text-neutral-700 dark:text-neutral-300">{d.pct}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Revenue Bar Chart */}
                      <div className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40">
                        <div className="flex justify-between items-center mb-0.5">
                          <p className="text-[4px] font-extrabold text-neutral-800 dark:text-white">Revenue Overview</p>
                          <span className="text-[3px] text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded px-0.5">This Month ▾</span>
                        </div>
                        <svg viewBox="0 0 70 30" className="w-full h-[26px]" preserveAspectRatio="none">
                          {/* Y grid lines */}
                          {[6, 13, 20, 27].map(y => <line key={y} x1="0" y1={y} x2="70" y2={y} stroke="#f3f4f6" strokeWidth="0.5"/>)}
                          {/* Bars */}
                          {[
                            {x:2,  h:10}, {x:9,  h:14}, {x:16, h:18}, {x:23, h:12},
                            {x:30, h:22}, {x:37, h:16}, {x:44, h:20}, {x:51, h:24},
                            {x:58, h:17}, {x:65, h:19}
                          ].map((b, i) => (
                            <rect key={i} x={b.x} y={27 - b.h} width="5" height={b.h} rx="1" fill="#2563EB" opacity={i >= 4 ? 1 : 0.5}/>
                          ))}
                          {/* X labels */}
                          {['May 1','May 8','May 15','May 22','May 29'].map((l, i) => (
                            <text key={l} x={4.5 + i * 14} y="30" fontSize="2" fill="#9ca3af" textAnchor="middle">{l}</text>
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. Technologies Section */}
      <section className={`bg-neutral-50/50 dark:bg-brand-dark/10 transition-colors duration-300 border-y border-neutral-200/40 dark:border-neutral-800/60 py-16`}>
        <div className={themeStyles.container}>
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-brand-blue font-display">Technologies We Use</span>
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
                className="flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-brand-dark-card border border-neutral-200/50 dark:border-neutral-800/80 rounded-full hover:scale-105 hover:border-brand-blue/30 transition-all duration-300 shadow-sm"
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      {(() => {
        const faqs = [
          {
            q: 'How long does a project typically take?',
            a: 'Most projects are completed within 6 to 10 weeks, from the initial discovery session through to launch. More complex projects that involve in depth strategy, custom functionality, or extensive copywriting typically take 12 to 16 weeks. Our focus is on delivering exceptional quality and attention to detail, so we prioritize getting it right over rushing the process.'
          },
          {
            q: 'Do you provide copywriting and messaging services?',
            a: 'Absolutely. Clear, compelling messaging is a key part of every project we deliver. We help define your brand positioning, develop a strong value proposition, and create persuasive, conversion-focused copy that connects with your audience and supports your business goals.'
          },
          {
            q: 'Can you redesign an existing website?',
            a: 'Absolutely. Many of our clients come to us with websites that no longer represent their brand, business goals, or growth. We go beyond visual improvements by rethinking the site\'s strategy, user experience, performance, and functionality to create a modern, high performing website built for long term success.'
          },
          {
            q: 'Do you provide ongoing support after launch?',
            a: 'Yes. We offer ongoing support and maintenance plans to keep your website secure, up to date, and performing at its best. Our services include content updates, performance optimization, security monitoring, technical maintenance, and continuous improvements to help your website grow alongside your business.'
          }
        ]
        return (
          <FaqSection faqs={faqs} themeStyles={themeStyles} />
        )
      })()}

      {/* 7. Call to Action / Contact Banner */}
      <section id="contact" className={themeStyles.sectionPadding}>
        <div className={themeStyles.container}>
          <div className="relative rounded-[2.2rem] overflow-hidden bg-gradient-to-br from-brand-dark-card to-[#030712] text-white p-8 md:p-16 shadow-2xl border border-neutral-800/80">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue-light bg-brand-blue/20 px-3.5 py-1 rounded-full border border-brand-blue/30 inline-block">
                  {"Let's Work Together"}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
                  Have a project in mind?
                </h2>
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                  {"We would love to hear about it. Let's design and build something amazing together that drives tangible results."}
                </p>
                <div className="pt-2">
                  <a 
                    href={import.meta.env.VITE_CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="px-7 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold rounded-full shadow-lg active:scale-98 transition-all cursor-pointer inline-flex items-center justify-center gap-2 font-display"
                  >
                    Start a Project <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Direct Contacts Block */}
              <div className="lg:col-span-5 space-y-6 bg-white/5 border border-white/10 rounded-[1.8rem] p-8 backdrop-blur-md shadow-xl">
                <a
                  href="mailto:hello@kriscoresolutions.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Email Us</p>
                    <span className="text-sm font-semibold group-hover:text-brand-blue transition-colors">
                      hello@kriscoresolutions.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+2348084556760"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Call Us</p>
                    <span className="text-sm font-semibold group-hover:text-brand-blue transition-colors">
                      +234 808 455 6760
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">WhatsApp</p>
                    <a
                      href="https://wa.me/2348084556760?text=Hello%2C%20I%20would%20like%20to%20inquire%20about"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold hover:text-emerald-400 transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Location</p>
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
      {activeTab === "Let's Talk" && <TalkIndex isDark={isDark} setActiveTab={setActiveTab} previousTab={previousTab} />}
      {activeTab === 'Product Design' && <ProductDesign setActiveTab={setActiveTab} />}
      {activeTab === 'Mobile App' && <MobileApp setActiveTab={setActiveTab} />}
      {activeTab === 'Web Dev' && <WebDev setActiveTab={setActiveTab} />}

      {/* 7. Footer Section */}
      {activeTab !== "Let's Talk" && (
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
                  onClick={() => {
                    if (link === 'Products') {
                      window.__scroll_to_products = true
                      setActiveTab('Home')
                      setTimeout(() => {
                        document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    } else {
                      setActiveTab(link)
                    }
                  }}
                  className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
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
                <a href="https://x.com/Kriscore_Ltd" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="X (formerly Twitter)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/kriscore-solutions-limited/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/kriscore_ltd" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#e1306c] transition-colors" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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
      )}
    </div>
  )
}
