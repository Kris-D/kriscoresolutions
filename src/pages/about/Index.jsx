import { 
  Target, 
  Compass, 
  Cpu, 
  Workflow, 
  Globe, 
  Sparkles 
} from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'
import ceoImg from '../../assets/ceo.jpg'
import uxImg from '../../assets/ux.png'
import teImg from '../../assets/te.png'

export default function AboutIndex() {
  const stats = [
    { label: 'Successful Projects', value: '45+', desc: 'High-quality software platforms delivered globally.' },
    { label: 'Client Satisfaction', value: '99%', desc: 'Top tier feedback from our active business partners.' },
    { label: 'Expert Engineers', value: '15+', desc: 'Dedicated developers and product designers.' },
    { label: 'Years Experience', value: '5+', desc: 'Deep technical leadership in web & mobile apps.' }
  ]

  const values = [
    { 
      title: 'Technical Excellence', 
      desc: 'We write clean, efficient, and well-architected code to ensure platforms scale seamlessly as your user base expands.', 
      icon: Cpu 
    },
    { 
      title: 'User-First Design', 
      desc: 'We believe technology should be beautiful and intuitive, crafting layouts that elevate user satisfaction and conversions.', 
      icon: Sparkles 
    },
    { 
      title: 'Absolute Transparency', 
      desc: 'We build strong partnerships based on open communication, continuous sprint updates, and collaborative milestones.', 
      icon: Workflow 
    },
    { 
      title: 'Global Standards', 
      desc: 'Our digital solutions are engineered to compete on the world stage, utilizing modern performance and security practices.', 
      icon: Globe 
    }
  ]

  const milestones = [
    { 
      year: '2021', 
      title: 'Kriscore Solutions Founded', 
      desc: 'Established with a core team of three developers focusing on providing clean, reliable web development services.' 
    },
    { 
      year: '2022', 
      title: 'Mobile App Expansion', 
      desc: 'Expanded service offerings to native Android and iOS mobile app development, doubling team headcount.' 
    },
    { 
      year: '2023', 
      title: 'Going Global', 
      desc: 'Secured first international enterprise clients and launched our internal fintech prototype, PayEase.' 
    },
    { 
      year: '2024 - Present', 
      title: 'Product Suite & Scale', 
      desc: 'Currently developing a state-of-the-art suite of SaaS applications while maintaining top-tier software for over 25 companies.' 
    }
  ]

  const team = [
    {
      name: 'Christopher Dunkwu',
      role: 'Founder & CEO',
      bio: 'Technical leader and software engineer focused on designing and delivering scalable digital products.',
      avatarUrl: ceoImg,
      socials: { linkedin: 'https://www.linkedin.com/in/christopher-dunkwu/', twitter: 'https://x.com/Kris_SoftwarDev', github: 'https://github.com/Kris-D' }
    },
    {
      name: 'Gift Gyok',
      role: 'Head of Product Design',
      bio: 'Creative lead specializing in dynamic, interactive user interfaces and human-centered design systems.',
      avatarUrl: uxImg,
      socials: { linkedin: 'https://www.linkedin.com/in/gift-gyok-7385a31a5/', twitter: 'https://x.com/GiftGyok', behance: 'https://www.behance.net/giftgyok' }
    },
    {
      name: 'IJ Olise',
      role: 'Technical Director',
      bio: 'Cloud architecture expert focused on secure serverless systems, API engineering, and devops infrastructure.',
      avatarUrl: teImg,
      socials: { linkedin: '#', twitter: '#', github: '#' }
    }
  ]

  return (
    <div className="relative overflow-hidden">


      {/* 1. About Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24">
        <div className={themeStyles.container}>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] font-extrabold tracking-widest uppercase text-brand-blue dark:text-brand-blue block">
              OUR MISSION & PURPOSE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight font-display">
              Engineering the Future of{' '}
              <span className="text-brand-blue dark:text-brand-blue-light">
                Digital Business
              </span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed font-normal font-sans">
              We are a dynamic tech collective that brings robust ideas to life. We specialize in planning, writing, launching, and managing software applications that help modern companies lead their industries.
            </p>
          </div>
        </div>
      </section>

      {/* 1b. More Than a Software Agency Section */}
      <section className={`${themeStyles.sectionPadding} border-y border-neutral-200/40 dark:border-neutral-800/40 bg-white/30 dark:bg-neutral-900/10`}>
        <div className={themeStyles.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Main Statement */}
            <div className="lg:col-span-5 space-y-6">
              <span className={themeStyles.badge}>WHO WE ARE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight font-display">
                More Than a{' '}
                <span className="text-brand-blue dark:text-brand-blue-light">
                  Software Agency
                </span>
              </h2>
              <p className={`${themeStyles.body} text-base leading-relaxed`}>
                Kriscore Solutions is a technology company focused on building exceptional software experiences.
              </p>
              <p className={`${themeStyles.body} text-base leading-relaxed`}>
                Whether partnering with businesses to develop custom digital solutions or launching our own innovative platforms, we are committed to solving real problems through technology.
              </p>
            </div>

            {/* Right: What We Do Pillars */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-brand-blue mb-6 font-display">
                What We Do
              </p>

              {/* Pillar 1 */}
              <div className="flex gap-5 p-6 rounded-[1.8rem] backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/40 dark:border-neutral-800/60 hover:border-brand-blue/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  🏢
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white tracking-tight font-display">
                    Custom Software Development
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Helping businesses build scalable web, mobile, and enterprise solutions tailored to their unique challenges and goals.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-5 p-6 rounded-[1.8rem] backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/40 dark:border-neutral-800/60 hover:border-brand-blue/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white tracking-tight font-display">
                    Product Innovation
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Designing and launching proprietary technology products like <span className="text-brand-blue font-semibold">PayEase</span>, <span className="text-brand-blue font-semibold">HomeLink</span>, and <span className="text-brand-blue font-semibold">ClinicPlus</span>.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-5 p-6 rounded-[1.8rem] backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/40 dark:border-neutral-800/60 hover:border-brand-blue/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white tracking-tight font-display">
                    Long-Term Technology Partnership
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Maintaining, improving, and scaling software long after launch — because great technology requires continuous care.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Statistics Banner */}
      <section className="pb-16">
        <div className={themeStyles.container}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st) => (
              <div 
                key={st.label} 
                className="backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/40 dark:border-neutral-800/60 rounded-[1.8rem] p-6 text-center transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg"
              >
                <div className="text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-brand-blue-light mb-2 font-display">
                  {st.value}
                </div>
                <div className="text-sm font-bold text-neutral-850 dark:text-neutral-200 mb-2 tracking-wide font-display">
                  {st.label}
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Values & Mission Details */}
      <section className={`bg-neutral-50/50 dark:bg-brand-dark/10 transition-colors duration-300 ${themeStyles.sectionPadding} border-y border-neutral-200/40 dark:border-neutral-800/60`}>
        <div className={themeStyles.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Big Vision Text */}
            <div className="lg:col-span-5 space-y-6">
              <span className={themeStyles.badge}>OUR CORE VALUES</span>
              <h2 className={themeStyles.h2}>The Principles That Guide Us</h2>
              <p className={themeStyles.body}>
                {"At Kriscore, we don't just deliver packages of code. We architect reliable solutions that secure your business operations, support your users, and unlock sustainable growth."}
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-brand-blue-light shrink-0">
                    <Target size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-base font-display">Our Focus</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans">To build secure, scalable products that generate tangible enterprise value.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-brand-blue-light shrink-0">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-base font-display">Our Vision</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans">{"To become the world's most trusted partner for end-to-end digital engineering."}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Values Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className={themeStyles.card}>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue dark:text-brand-blue-light mb-4">
                    <v.icon size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white mb-2 font-display">{v.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Company Journey (Timeline) */}
      <section className={themeStyles.sectionPadding}>
        <div className={themeStyles.container}>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className={themeStyles.badge}>THE ROAD SO FAR</span>
            <h2 className={themeStyles.h2}>Our Milestone Journey</h2>
            <p className={themeStyles.body}>
              From a small development shop to a trusted, global software engineering agency.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative border-l-2 border-neutral-200 dark:border-neutral-800 pl-6 sm:pl-8 space-y-12">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-brand-blue dark:border-brand-blue-light bg-white dark:bg-brand-dark group-hover:scale-125 transition-transform duration-200 shadow-sm"></div>
                
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-blue dark:text-brand-blue-light bg-brand-blue/10 dark:bg-brand-blue/20 px-2.5 py-0.5 rounded font-display">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-display">
                    {m.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Team Section */}
      <section className={`bg-neutral-50/50 dark:bg-brand-dark/10 transition-colors duration-300 ${themeStyles.sectionPadding} border-t border-neutral-200/40 dark:border-neutral-800/60`}>
        <div className={themeStyles.container}>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className={themeStyles.badge}>MEET THE MINDS</span>
            <h2 className={themeStyles.h2}>Our Core Leadership</h2>
            <p className={themeStyles.body}>
              A dedicated team combining deep technical competence and strategic vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.name} 
                className="backdrop-blur-xl bg-white/70 dark:bg-brand-dark-card/50 border border-neutral-200/40 dark:border-neutral-800/60 rounded-[1.8rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-300 flex flex-col group"
              >
                {/* Profile Pic Container */}
                <div className="h-64 overflow-hidden relative bg-neutral-200 dark:bg-neutral-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent z-10"></div>
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 bg-brand-blue text-white text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1.5 rounded-full shadow-lg z-20 font-display">
                    {member.role}
                  </span>
                </div>

                {/* Profile Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2 mb-6">
                    <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight font-display">{member.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal font-sans">{member.bio}</p>
                  </div>

                  {/* Profile Socials */}
                  <div className="flex items-center gap-4 border-t border-neutral-200/50 dark:border-neutral-800/50 pt-4">
                    <a 
                      href={member.socials.linkedin} 
                      className="text-neutral-400 hover:text-[#0077b5] transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.socials.twitter} 
                      className="text-neutral-400 hover:text-[#1da1f2] transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    {member.socials.behance ? (
                      <a
                        href={member.socials.behance}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-[#1769ff] transition-colors"
                        aria-label={`${member.name}'s Behance`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.891 2.024 1.891.93 0 1.566-.465 1.734-1.18l2-.002zm-5.806-8.124c-1.951 0-2.595 1.065-2.76 1.979h5.299c-.136-.92-.799-1.979-2.539-1.979zM6 19H0V5h6.232c2.196 0 4.193.96 4.193 3.584 0 1.429-.827 2.385-2.021 2.803C9.91 11.73 11 12.74 11 14.573 11 17.421 8.866 19 6 19zm-1.5-8.5h1.321c.882 0 1.679-.326 1.679-1.357 0-.951-.69-1.143-1.548-1.143H4.5V10.5zm0 5h1.513c1.054 0 1.987-.289 1.987-1.486 0-1.154-1.01-1.514-2.02-1.514H4.5V15.5z"/>
                        </svg>
                      </a>
                    ) : (
                      <a 
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
