import { ArrowRight, ExternalLink, Zap, Home, Heart, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'
import payeaselogo from '../../assets/payeaselogo.png'
import homelinklogo from '../../assets/homelinklogo.png'
import clinicpluslogo from '../../assets/clinicpluslogo.png'

const products = [
  {
    id: 'payease',
    name: 'PayEase',
    tagline: 'Digital Payments & VTU Platform',
    description:
      'PayEase is a digital payments and VTU platform that lets users fund a wallet, purchase airtime and data, pay utility bills, and manage everyday digital payments from one single, secure place.',
    logo: payeaselogo,
    logoBg: 'bg-neutral-900',
    accent: 'from-purple-600 to-blue-600',
    accentLight: 'bg-purple-600/10',
    accentText: 'text-purple-500 dark:text-purple-400',
    accentBorder: 'border-purple-500/20',
    badge: 'Live',
    badgeColor: 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400',
    icon: Zap,
    features: [
      'Wallet funding & management',
      'Airtime & data top-up',
      'Utility bill payments',
      'Secure transaction history',
    ],
    link: 'https://payease.ng',
    category: 'Fintech',
  },
  {
    id: 'homelink',
    name: 'HomeLink',
    tagline: 'Property Management & Investment Platform',
    description:
      'HomeLink connects diaspora investors with verified developers, contractors, and financial services — allowing them to manage construction projects and property investments remotely with complete transparency.',
    logo: homelinklogo,
    logoBg: 'bg-white',
    accent: 'from-emerald-500 to-teal-500',
    accentLight: 'bg-emerald-500/10',
    accentText: 'text-emerald-500 dark:text-emerald-400',
    accentBorder: 'border-emerald-500/20',
    badge: 'Beta',
    badgeColor: 'bg-amber-500/15 text-amber-500 dark:text-amber-400',
    icon: Home,
    features: [
      'Remote project monitoring',
      'Verified contractor marketplace',
      'Milestone-based payments',
      'Real-time progress updates',
      'Investment portfolio dashboard',
    ],
    link: null,
    category: 'PropTech',
  },
  {
    id: 'clinicplus',
    name: 'ClinicPlus',
    tagline: 'Cloud-Based Healthcare Management System',
    description:
      'ClinicPlus is a modern, cloud-based HMS designed to help clinics, hospitals, diagnostic centres, and medical practices streamline daily operations — from patient records to billing — from a single intelligent platform.',
    logo: clinicpluslogo,
    logoBg: 'bg-neutral-900',
    accent: 'from-blue-500 to-cyan-500',
    accentLight: 'bg-blue-500/10',
    accentText: 'text-blue-500 dark:text-blue-400',
    accentBorder: 'border-blue-500/20',
    badge: 'In Development',
    badgeColor: 'bg-blue-500/15 text-blue-500 dark:text-blue-400',
    icon: Heart,
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Prescription & billing system',
      'Lab results & diagnostics',
      'Multi-branch clinic support',
    ],
    link: null,
    category: 'HealthTech',
  },
]

export default function ProductsIndex() {
  return (
    <div className="py-16 md:py-24">

      {/* Page Hero */}
      <section className="relative overflow-hidden pb-20">
        {/* Glow meshes */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className={themeStyles.container}>
          <div className="max-w-2xl">
            <span className={themeStyles.badge}>Our Products</span>
            <h1 className={themeStyles.h1}>
              Products We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
                Own & Build
              </span>
            </h1>
            <p className={`${themeStyles.bodyLg} mt-4`}>
              Beyond client work, we build our own innovative technology products that solve real-world problems across payments, property, and healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={themeStyles.container}>
        <div className="space-y-12">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className={`rounded-3xl border ${product.accentBorder} bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>

                  {/* Logo Panel */}
                  <div className={`relative lg:w-80 shrink-0 bg-gradient-to-br ${product.accent} p-10 flex items-center justify-center min-h-[220px]`}>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,white,transparent_70%)]" />
                    <div className={`relative w-32 h-32 rounded-2xl ${product.logoBg} flex items-center justify-center p-3 shadow-2xl`}>
                      <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Category badge */}
                    <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      {product.category}
                    </span>
                  </div>

                  {/* Content Panel */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-between gap-6">
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                              {product.name}
                            </h2>
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${product.badgeColor}`}>
                              {product.badge}
                            </span>
                          </div>
                          <p className={`text-sm font-medium ${product.accentText}`}>
                            {product.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`${themeStyles.body} text-sm mb-6`}>
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <CheckCircle2 size={14} className={`shrink-0 ${product.accentText}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
                      {product.link ? (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`${themeStyles.btnPrimary} text-sm`}
                        >
                          Visit {product.name} <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 cursor-not-allowed">
                          <Sparkles size={14} /> Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Sleek CTA Strip */}
        <div className="relative mt-12 rounded-2xl overflow-hidden border border-white/10 dark:border-white/5">
          {/* Subtle gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-xl" />
          {/* Soft glow orb */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Left copy */}
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-snug">Have a product idea? Let's talk.</p>
                <p className="text-blue-200/70 text-xs mt-0.5">Free 30-min discovery call · No commitment</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={import.meta.env.VITE_CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative shrink-0 inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-700 font-bold text-sm rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
            >
              Let's Build Together
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
