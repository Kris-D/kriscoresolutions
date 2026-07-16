/* eslint-disable react/prop-types */
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Laptop, 
  Smartphone, 
  Palette, 
  Settings, 
  CloudLightning,
  Calendar
} from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'

export default function TalkIndex({ isDark = true }) {
  const [activeFaq, setActiveFaq] = useState(null)

  const projectTypes = [
    { name: 'Web Development', icon: Laptop, desc: 'Websites & SaaS applications' },
    { name: 'Mobile Apps', icon: Smartphone, desc: 'iOS & Android native apps' },
    { name: 'UI/UX Design', icon: Palette, desc: 'Wireframing & premium mockups' },
    { name: 'Maintenance', icon: Settings, desc: 'SLA support & continuous updates' },
    { name: 'Cloud & DevOps', icon: CloudLightning, desc: 'API server scale & host setups' }
  ]

  const faqs = [
    {
      q: 'Do you sign NDAs before discussing details?',
      a: 'Absolutely. We understand the confidentiality of your business ideas and are happy to sign a Non-Disclosure Agreement (NDA) before you share any sensitive documentation or project details.'
    },
    {
      q: 'How long does a typical project take?',
      a: 'A standard web or mobile application MVP (Minimum Viable Product) typically takes between 4 to 8 weeks to design, develop, and launch. Larger custom enterprise platforms can take 3 to 6 months.'
    },
    {
      q: 'How do you handle project pricing?',
      a: 'We offer fixed-scope pricing once we align on the exact roadmap and requirements. For evolving products or long-term partnerships, we also offer flexible monthly developer retainers.'
    },
    {
      q: 'Do you offer post-launch support?',
      a: 'Yes, we provide continuous software maintenance, hosting configuration, SLA support, and database optimizations to ensure zero downtime and smooth operations after release.'
    }
  ]

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  // Load the Calendly URL from .env or default to fallback link
  const rawCalendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/dunkwurc/30min'
  
  // Clean URL to handle trailing slashes
  const calendlyUrl = rawCalendlyUrl.endsWith('/') ? rawCalendlyUrl.slice(0, -1) : rawCalendlyUrl

  // Configure theme colors for Calendly widget based on light/dark mode
  const calendlyBgColor = isDark ? '050b1b' : 'ffffff'
  const calendlyTextColor = isDark ? 'ffffff' : '0f172a'
  const calendlyPrimaryColor = '004bce'

  const embedUrl = `${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=${calendlyBgColor}&text_color=${calendlyTextColor}&primary_color=${calendlyPrimaryColor}`

  return (
    <div className="relative overflow-hidden min-h-screen pt-12 pb-24 md:pt-20">
      {/* Premium Glow Meshes to keep consistency with the Home/About styling */}
      <div className="glow-float absolute top-10 left-10 w-[600px] h-[600px] bg-brand-blue/20 dark:bg-brand-blue/15 rounded-full blur-[130px] pointer-events-none" style={{ animationDelay: '0s' }}></div>
      <div className="glow-pulse absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: '3s' }}></div>

      <div className={`${themeStyles.container} relative z-10`}>
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="text-[11px] font-extrabold tracking-widest uppercase text-brand-blue dark:text-brand-blue-light bg-brand-blue/10 dark:bg-brand-blue/20 px-4 py-1.5 rounded-full inline-block font-display">
            SCHEDULE A CALL
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight font-display">
            {"Let's Connect &"}{' '}
            <span className="bg-gradient-to-r from-brand-blue to-cyan-500 dark:from-brand-blue dark:to-cyan-400 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed font-normal font-sans">
            {"Book a slot below to discuss your project requirements, goals, and roadmap. We'll map out the perfect development plan for your business."}
          </p>
        </div>

        {/* Main Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & FAQ Accordion */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Info Card with Live Booking Status */}
            <div className="backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/40 dark:border-neutral-800/60 rounded-[1.8rem] p-6 shadow-lg hover:border-brand-blue/20 transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  {"Available for Discovery Calls"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-6 font-display">Direct Connection</h3>
              
              <div className="space-y-5">
                <a href="mailto:hello@kriscoresolutions.com" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-brand-blue-light">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Email Us</p>
                    <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-brand-blue transition-colors">hello@kriscoresolutions.com</p>
                  </div>
                </a>

                <a href="tel:+2349056288890" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-brand-blue-light">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Call Us Directly</p>
                    <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-brand-blue transition-colors">+234 905 628 8890</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-brand-blue-light">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Office Location</p>
                    <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Abuja, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services We Cover list */}
            <div className="backdrop-blur-xl bg-white/50 dark:bg-brand-dark-card/30 border border-neutral-200/40 dark:border-neutral-800/60 rounded-[1.8rem] p-6 shadow-lg space-y-4">
              <h3 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider flex items-center gap-2 font-display">
                <Calendar size={16} className="text-brand-blue" /> Focus Topics for the Call
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                {"During our 30-minute session, we can dive deep into any of our core expertise areas:"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {projectTypes.slice(0, 4).map((type) => {
                  const Icon = type.icon
                  return (
                    <div key={type.name} className="flex items-center gap-2.5 p-2 px-3 bg-white dark:bg-brand-dark-card border border-neutral-200/50 dark:border-neutral-800/85 rounded-full shadow-sm hover:border-brand-blue/30 transition-all duration-300">
                      <div className="w-7 h-7 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue dark:text-brand-blue-light shrink-0">
                        <Icon size={14} />
                      </div>
                      <span className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300">{type.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white px-2 font-display">Frequently Asked Questions</h3>
              
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/40 dark:border-neutral-800/60 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-neutral-950 dark:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30 transition-all cursor-pointer font-display"
                    >
                      <span>{faq.q}</span>
                      {activeFaq === idx ? <ChevronUp size={16} className="text-brand-blue" /> : <ChevronDown size={16} className="text-neutral-400" />}
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        activeFaq === idx ? 'max-h-48 border-t border-neutral-150 dark:border-neutral-800/50' : 'max-h-0'
                      }`}
                    >
                      <p className="px-5 py-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal bg-neutral-50/50 dark:bg-neutral-900/10">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calendly Inline Iframe Widget */}
          <div className="lg:col-span-7 backdrop-blur-xl bg-white dark:bg-brand-dark border border-neutral-200/65 dark:border-neutral-850 rounded-[2.2rem] overflow-hidden shadow-2xl min-h-[650px] h-[650px] lg:h-[700px] relative">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduler"
              className="absolute inset-0 w-full h-full bg-white dark:bg-brand-dark"
              allowFullScreen
            ></iframe>
          </div>
          
        </div>
      </div>
    </div>
  )
}
