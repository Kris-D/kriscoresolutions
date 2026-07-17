import React from 'react'
import { ArrowLeft, Stethoscope, Calendar, Users, FileText } from 'lucide-react'
import { themeStyles } from '../../styles/themeStyles'
import clinicplusFeatureDoctor from '../../assets/clinicplus_feature_doctor.png'
import webDevHero from '../../assets/web_dev_hero.png'

export default function ClinicPlus({ onBack, setActiveTab }) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white pb-24 transition-colors duration-300">
      <div className={themeStyles.container}>
        
        <div className="pt-8 pb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue dark:text-brand-blue-light hover:opacity-75 cursor-pointer transition-opacity"
          >
            <ArrowLeft size={16} /> Back to Product
          </button>
        </div>

        {/* ── SECTION 1: HERO (Replicating Figur layout) ── */}
        <div className="py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: ClinicPlus Interactive Tablet/Phone Card */}
          <div className="lg:col-span-6 bg-[#F2F6FC] dark:bg-[#0A1020] rounded-[2.5rem] p-6 sm:p-10 border border-blue-500/10 dark:border-blue-500/20 flex justify-center shadow-sm">
            <div className="w-full max-w-[340px] bg-white dark:bg-[#0D1838] rounded-[2.2rem] shadow-2xl border-[6px] border-neutral-900 dark:border-neutral-800 overflow-hidden text-left flex flex-col">
              
              {/* Header */}
              <div className="px-5 py-3 border-b border-neutral-100 dark:border-blue-900/30 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    C+
                  </div>
                  <div>
                    <p className="text-xs font-black text-neutral-900 dark:text-white">ClinicPlus Admin</p>
                    <p className="text-[10px] text-neutral-400">Dr. Sarah Johnson</p>
                  </div>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  Online
                </span>
              </div>

              {/* Patient Queue Card */}
              <div className="m-4 p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white space-y-3 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-100 font-medium">Daily Patient Queue</span>
                  <span className="text-xs font-extrabold bg-white/20 px-2.5 py-0.5 rounded-full">24 Active</span>
                </div>
                <div className="text-2xl font-black">
                  186 Patients Today
                </div>
              </div>

              {/* Appointments List */}
              <div className="px-5 py-3 space-y-2">
                <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Recent Appointments</p>
                <div className="space-y-2">
                  {[
                    { name: 'John Smith', time: '09:00 AM', type: 'General Checkup', status: 'Confirmed' },
                    { name: 'Emily Davis', time: '10:30 AM', type: 'Dental Consultation', status: 'Confirmed' }
                  ].map((appt, i) => (
                    <div key={i} className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 flex justify-between items-center border border-neutral-100 dark:border-neutral-800">
                      <div>
                        <p className="text-xs font-bold text-neutral-900 dark:text-white">{appt.name}</p>
                        <p className="text-[10px] text-neutral-400">{appt.type} · {appt.time}</p>
                      </div>
                      <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">
                        {appt.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-4"></div>
            </div>
          </div>

          {/* Right: Headline + Copy + Button */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm">
                C
              </div>
              <span className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-display">
                ClinicPlus
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.08] font-display">
              Your <span className="text-blue-600 dark:text-blue-400">clinic administration</span> suite.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              Streamline operations across clinical centers, from automated patient registration and intelligent scheduling to electronic health records and unified billing ledgers.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab?.("Let's Talk")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all cursor-pointer border-0"
              >
                Get Started
              </button>
            </div>
          </div>

        </div>

        {/* ── SECTION 2: FULL-WIDTH DARK BANNER (Replicating Figur Banner) ── */}
        <div className="my-16 bg-[#08132B] dark:bg-[#070F22] rounded-[2.5rem] p-8 sm:p-14 text-white overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block">
                Unified Records
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-display">
                Streamline clinical care with ClinicPlus Suite.
              </h2>
              <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed max-w-lg">
                Manage doctors, specialists, nurses, and lab reports on one seamless platform. Eliminate paperwork delays and reduce billing discrepancies by over 40%.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab?.("Let's Talk")}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#08132B] hover:bg-blue-50 font-bold text-sm shadow-md transition-all cursor-pointer border-0"
                >
                  Schedule Suite Demo
                </button>
              </div>
            </div>

            {/* Right: Electronic Health Record Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[340px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 space-y-4 shadow-2xl text-left">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm text-white">Department Overview</h4>
                  <span className="text-xs bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded">Live</span>
                </div>
                <div className="space-y-3">
                  {[
                    { dept: 'General Medicine', patients: '48 Patients', status: 'Optimal' },
                    { dept: 'Cardiology Clinic', patients: '32 Patients', status: 'Optimal' },
                    { dept: 'Pediatric Unit', patients: '26 Patients', status: 'Optimal' }
                  ].map((d, i) => (
                    <div key={i} className="bg-black/20 p-3.5 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-white">{d.dept}</p>
                        <span className="text-[11px] text-blue-200">{d.patients}</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-400">{d.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── SECTION 3: SPLIT FEATURE 1 ── */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-neutral-100 dark:border-neutral-800">
              <img
                src={clinicplusFeatureDoctor}
                alt="Zero wait patient scheduling"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-display leading-tight">
              Zero wait patient scheduling
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-lg">
              Allow patients to book appointments online or check in seamlessly at kiosk stations, automatically routing their file to the right consulting physician without wait room bottlenecks.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab?.("Let's Talk")}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer border-0"
              >
                Learn More
              </button>
            </div>
          </div>

        </div>

        {/* ── SECTION 4: SPLIT FEATURE 2 ── */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-display leading-tight">
              Unified medical billing & ledger
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-lg">
              Automate HMO claims, insurance verifications, and direct patient invoicing with our built-in clinical finance engine that syncs directly with accounting ledgers.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab?.("Let's Talk")}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer border-0"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-neutral-100 dark:border-neutral-800">
              <img
                src={webDevHero}
                alt="Unified medical billing"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
            </div>
          </div>

        </div>

        {/* ── SECTION 5: BOTTOM CTA BANNER ── */}
        <div className="my-16 bg-[#08132B] dark:bg-[#070F22] rounded-[2.5rem] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-display">
              Ready to figure out your clinical operations with ClinicPlus?
            </h2>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab?.("Let's Talk")}
                className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl transition-all cursor-pointer border-0"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
