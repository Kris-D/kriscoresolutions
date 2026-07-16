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
          
          {/* Right Column: Visual Mockup Image (Replaces Quote Form) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl border border-neutral-200/50 dark:border-neutral-800/80 bg-neutral-100 dark:bg-[#070C16]">
              <img
                src={productDesignHero}
                alt="Product Design & UX Mockup"
                className="w-full h-auto object-cover"
              />
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
