/* eslint-disable react/prop-types */
import { useState } from 'react'
import { X, CheckCircle2, ArrowRight } from 'lucide-react'
import logoImg from '../../assets/logo.png'
import logoDarkImg from '../../assets/logo_dark.png'

export default function TalkIndex({ isDark = false, setActiveTab, previousTab }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "bb4fc96d-d6ed-4bb0-a2d6-4279ef4e464b")
    formData.append("name", `${firstName} ${lastName}`)
    formData.append("email", email)
    formData.append("subject", "New Waitlist Subscriber - Kriscore")
    formData.append("from_name", "Kriscore Solutions Waitlist")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
      } else {
        alert(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Connection error. Please check your internet connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    if (setActiveTab) {
      setActiveTab(previousTab || 'Home')
    }
  }

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#FAFAFA] dark:bg-brand-dark text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col justify-between">
      
      {/* ─── HEADER ─── */}
      <header className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full h-20 flex items-center justify-between border-b border-neutral-200/40 dark:border-neutral-800/40 flex-shrink-0">
        {/* App Logo */}
        <div 
          onClick={handleClose}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img 
            src={isDark ? logoDarkImg : logoImg} 
            alt="Kriscore Solutions Ltd" 
            className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Circular Close Button */}
        <button
          onClick={handleClose}
          className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900/60 transition-colors cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex-grow flex items-center justify-center py-8 lg:py-0 relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full relative z-10">
          
          {/* Left Column: Heading Text */}
          <div className="lg:col-span-7 text-left space-y-4 lg:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black tracking-tight text-neutral-950 dark:text-white leading-[1.08] font-display">
              Be the first to know <br />
              when we <span className="text-brand-blue dark:text-brand-blue-light">launch</span>
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal font-sans">
              Sign up today to get early access, exclusive product updates, and be the first to experience our custom solutions.
            </p>
          </div>

          {/* Right Column: Waitlist Subscription Form Card */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto">
            <div className="bg-white dark:bg-[#0A1120]/80 border border-neutral-200/50 dark:border-neutral-800/80 rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-2xl hover:shadow-2xl transition-all duration-300">
              
              {!isSubmitted ? (
                <div className="space-y-6 lg:space-y-8">
                  {/* Card Header */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#002FA7] dark:text-white font-display leading-snug">
                      Be the first to know when we launch and be a part of the progress
                    </h3>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                    <div className="relative py-1.5 border-b border-neutral-200 dark:border-neutral-800 focus-within:border-brand-blue dark:focus-within:border-brand-blue-light transition-colors duration-300">
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        className="w-full bg-transparent outline-none text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 font-sans"
                      />
                    </div>

                    <div className="relative py-1.5 border-b border-neutral-200 dark:border-neutral-800 focus-within:border-brand-blue dark:focus-within:border-brand-blue-light transition-colors duration-300">
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        className="w-full bg-transparent outline-none text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 font-sans"
                      />
                    </div>

                    <div className="relative py-1.5 border-b border-neutral-200 dark:border-neutral-800 focus-within:border-brand-blue dark:focus-within:border-brand-blue-light transition-colors duration-300">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full bg-transparent outline-none text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 font-sans"
                      />
                    </div>

                    <div className="pt-2 lg:pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer disabled:opacity-50 font-display flex items-center justify-center gap-2"
                      >
                        {loading ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success State with beautiful visual style */
                <div className="text-center py-8 space-y-6 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-2">
                    <CheckCircle2 size={36} className="animate-scaleUp" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white font-display">
                    Success!
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm">
                    Thank you, <span className="font-semibold text-neutral-800 dark:text-neutral-200">{firstName}</span>. You have successfully joined the Kriscore waitlist. We will notify you as soon as we launch!
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-2 px-6 py-2.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs font-extrabold uppercase tracking-widest rounded-full transition-all cursor-pointer font-display inline-flex items-center gap-1.5"
                  >
                    Back to home <ArrowRight size={14} />
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>

      {/* ─── FOOTER BAR ─── */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-4 border-t border-neutral-200/40 dark:border-neutral-800/40 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-400 flex-shrink-0">
        <p>© {new Date().getFullYear()} Kriscore Solutions Limited. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}
