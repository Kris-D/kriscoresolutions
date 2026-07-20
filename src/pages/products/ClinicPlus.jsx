import React from 'react'
import { ArrowLeft, ShieldCheck, Clock, Users, TrendingUp, Activity, Database, CheckCircle2, Lock, BarChart2, Pill, FlaskConical, Package, Star } from 'lucide-react'
import clinicplusFeatureDoctor from '../../assets/clinicplus_feature_doctor.png'
import clinicplusLogo from '../../assets/clinicpluslogo.png'
import clinicSvg from '../../assets/clinic.svg'

/* ─── Why Choose ClinicPlus feature data ─── */
const WHY_FEATURES = [
  {
    icon: <Users size={22} />,
    title: 'Improve Patient Care',
    body: 'Deliver faster, more organized, and personalized healthcare experiences for every patient.',
    accent: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  },
  {
    icon: <Clock size={22} />,
    title: 'Save Time',
    body: 'Automate repetitive administrative tasks so your staff can focus fully on patients.',
    accent: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: <Activity size={22} />,
    title: 'Increase Efficiency',
    body: 'Connect every department with a single, integrated platform that eliminates silos.',
    accent: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Make Better Decisions',
    body: 'Use real time reports and analytics to monitor performance and improve operations.',
    accent: 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400',
  },
  {
    icon: <Users size={22} />,
    title: 'Enhance Collaboration',
    body: 'Keep doctors, nurses, pharmacists, and administrators connected with shared access to accurate information.',
    accent: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Stay Secure',
    body: 'Protect sensitive patient information with advanced security, encryption, and controlled user access.',
    accent: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
  },
]

/* ─── Platform features / modules ─── */
const PLATFORM_FEATURES = [
  {
    icon: <Users size={20} />,
    label: 'Patient Management',
    body: 'Comprehensive digital patient records, medical history, treatment plans, allergies, prescriptions, and visit history all in one secure location.',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-300',
  },
  {
    icon: <Clock size={20} />,
    label: 'Appointment Scheduling',
    body: 'Simplify appointment booking with an intelligent scheduling system that minimizes conflicts and sends automated reminders to patients.',
    iconBg: 'bg-violet-100 dark:bg-violet-900/30',
    iconColor: 'text-violet-600 dark:text-violet-300',
  },
  {
    icon: <FileIcon size={20} />,
    label: 'Electronic Medical Records (EMR)',
    body: 'Give healthcare professionals instant access to patient histories, consultation notes, diagnoses, prescriptions, and treatment plans.',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-300',
  },
  {
    icon: <TrendingUp size={20} />,
    label: 'Billing & Invoicing',
    body: 'Automate invoices, payment tracking, insurance processing, and financial reporting to reduce errors and improve cash flow.',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-300',
  },
  {
    icon: <Pill size={20} />,
    label: 'Pharmacy Management',
    body: 'Track medications, manage prescriptions, monitor stock levels, and receive low inventory alerts before supplies run out.',
    iconBg: 'bg-pink-100 dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-300',
  },
  {
    icon: <FlaskConical size={20} />,
    label: 'Laboratory Management',
    body: 'Digitize laboratory requests, test results, and reporting while seamlessly linking them to patient records.',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconColor: 'text-cyan-600 dark:text-cyan-300',
  },
  {
    icon: <Package size={20} />,
    label: 'Inventory Management',
    body: 'Monitor medical supplies and equipment with real time inventory tracking and automated stock notifications.',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-300',
  },
  {
    icon: <BarChart2 size={20} />,
    label: 'Analytics & Reports',
    body: 'Gain valuable insights into hospital performance with interactive dashboards and comprehensive reports.',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-300',
  },
  {
    icon: <Users size={20} />,
    label: 'Multi User Access',
    body: 'Enable doctors, nurses, pharmacists, lab technicians, accountants, and administrators to collaborate securely with role based access control.',
    iconBg: 'bg-teal-100 dark:bg-teal-900/30',
    iconColor: 'text-teal-600 dark:text-teal-300',
  },
  {
    icon: <Lock size={20} />,
    label: 'Secure Cloud Platform',
    body: 'Access ClinicPlus from anywhere with enterprise grade security, encrypted data storage, automated backups, and role based permissions.',
    iconBg: 'bg-rose-100 dark:bg-rose-900/30',
    iconColor: 'text-rose-600 dark:text-rose-300',
  },
]

/* ─── Built for (who it's for) ─── */
const BUILT_FOR = [
  'Private Clinics',
  'General Hospitals',
  'Specialist Hospitals',
  'Diagnostic Centers',
  'Dental Clinics',
  'Eye Clinics',
  'Pediatric Clinics',
  'Maternity Hospitals',
  'Medical Laboratories',
  'Multi Branch Healthcare Networks',
]

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    quote: 'ClinicPlus has transformed the way we manage our hospital. Patient records are now instantly accessible, and our administrative workload has been reduced significantly.',
    author: 'Hospital Administrator',
  },
  {
    quote: 'Scheduling appointments, managing prescriptions, and reviewing patient history has never been easier.',
    author: 'Medical Doctor',
  },
  {
    quote: 'The reporting tools give us clear insights into our hospital\'s performance and financial health.',
    author: 'Clinic Manager',
  },
]

/* ─── Stats / capabilities list ─── */
const STATS = [
  'Patient Records Management',
  'Appointment Scheduling',
  'Electronic Medical Records',
  'Pharmacy Management',
  'Laboratory Integration',
  'Billing & Payments',
  'Inventory Control',
  'Analytics & Reporting',
  'Multi Role User Access',
  'Secure Cloud Infrastructure',
]

/* ─── Tiny inline file icon since it's not in lucide ─── */
function FileIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
    </svg>
  )
}

export default function ClinicPlus({ onBack, setActiveTab }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080D1C] text-neutral-900 dark:text-white transition-colors duration-300">

      {/* ─── BACK BUTTON ─── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue dark:text-brand-blue-light hover:opacity-75 cursor-pointer transition-opacity"
        >
          <ArrowLeft size={16} />
          Back to Product
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Dashboard mockup left │ Headline + tagline right
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT ── full desktop dashboard mockup */}
          <div className="bg-[#EEF4FC] dark:bg-[#0D1630] rounded-3xl p-6 md:p-8 flex items-start justify-center min-h-[520px] overflow-hidden">
            {/* Browser chrome wrapper */}
            <div className="w-full rounded-xl shadow-2xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800/40 flex flex-col" style={{maxHeight:'480px'}}>

              {/* ── Browser chrome bar ── */}
              <div className="bg-neutral-200 dark:bg-neutral-800 px-3 py-1.5 flex items-center gap-2 flex-shrink-0">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-neutral-700 rounded-md px-2 py-0.5 mx-2">
                  <span className="text-[8px] text-neutral-400">app.clinicplus.io/dashboard</span>
                </div>
              </div>

              {/* ── App shell ── */}
              <div className="flex flex-1 text-left overflow-hidden" style={{minHeight:0}}>

                {/* ── LEFT SIDEBAR ── */}
                <div className="w-[68px] bg-white dark:bg-[#0C0A1A] border-r border-neutral-100 dark:border-neutral-800/40 flex flex-col py-2 gap-0.5 flex-shrink-0">
                  {/* Logo */}
                  <div className="flex items-center gap-1 px-2 mb-2">
                    <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                      <span className="text-[5px] font-black text-white">C+</span>
                    </div>
                    <span className="text-[5px] font-black text-neutral-900 dark:text-white">Clinic<span className="text-[#2563EB]">Plus</span></span>
                  </div>
                  {/* Nav items */}
                  {[
                    { label: 'Dashboard',    active: true,  d: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z' },
                    { label: 'Appointments', active: false, d: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z' },
                    { label: 'Patients',     active: false, d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
                    { label: 'Doctors',      active: false, d: 'M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm0 8.2c-2 0-3.81-1.02-4.87-2.58C7.79 9.44 9.64 9 12 9s4.21.44 4.87 1.62C15.81 12.18 14 13.2 12 13.2z' },
                    { label: 'Pharmacy',     active: false, d: 'M6 2v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6zm7 13h-2v2h-2v-2H7v-2h2v-2h2v2h2v2zm3-8H5V6h14v2z' },
                    { label: 'Lab',          active: false, d: 'M19.8 18.4L14 10.67V6h1c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v4.67L4.2 18.4C3.71 19.06 4.18 20 5 20h14c.82 0 1.29-.94.8-1.6z' },
                    { label: 'Billing',      active: false, d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' },
                    { label: 'Reports',      active: false, d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-1 px-1.5 py-0.5 rounded-md mx-1 ${item.active ? 'bg-[#2563EB]/10' : ''}`}>
                      <svg viewBox="0 0 24 24" className={`w-2.5 h-2.5 flex-shrink-0 ${item.active ? 'fill-[#2563EB]' : 'fill-neutral-400 dark:fill-neutral-600'}`}><path d={item.d}/></svg>
                      <span className={`text-[4px] font-semibold truncate ${item.active ? 'text-[#2563EB]' : 'text-neutral-500 dark:text-neutral-500'}`}>{item.label}</span>
                    </div>
                  ))}
                  {/* Settings at bottom */}
                  <div className="mt-auto flex items-center gap-1 px-1.5 py-0.5 mx-1">
                    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-neutral-400 dark:fill-neutral-600"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
                    <span className="text-[4px] font-semibold text-neutral-500 dark:text-neutral-500">Settings</span>
                  </div>
                </div>

                {/* ── MAIN CONTENT ── */}
                <div className="flex-1 bg-[#F8FAFC] dark:bg-[#0D0A1E] flex flex-col overflow-hidden">

                  {/* Top Navbar */}
                  <div className="px-2 py-1 bg-white dark:bg-[#120F28] border-b border-neutral-100 dark:border-neutral-800/40 flex justify-between items-center flex-shrink-0">
                    <div className="flex items-center gap-1 flex-1">
                      <span className="text-[5px] font-black text-neutral-900 dark:text-white mr-1">Dashboard</span>
                      <div className="flex items-center gap-0.5 bg-neutral-100 dark:bg-neutral-800 rounded px-1 py-0.5 flex-1 max-w-[70px]">
                        <svg viewBox="0 0 24 24" className="w-2 h-2 fill-neutral-400 flex-shrink-0"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        <span className="text-[3.5px] text-neutral-400 truncate">Search patients, appointments...</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="relative">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-neutral-500"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full flex items-center justify-center text-[2.5px] font-black text-white">8</span>
                      </div>
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-neutral-500"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
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
                  <div className="px-2 pt-1.5 pb-0.5 flex justify-between items-center flex-shrink-0">
                    <div>
                      <p className="text-[6px] font-extrabold text-neutral-900 dark:text-white">Dashboard Overview</p>
                      <p className="text-[3.5px] text-neutral-400">Welcome back, Dr. Sarah. Here's what's happening today.</p>
                    </div>
                    <div className="flex items-center gap-0.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1 py-0.5">
                      <svg viewBox="0 0 24 24" className="w-1.5 h-1.5 fill-neutral-500"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                      <span className="text-[3.5px] text-neutral-500">Jul 20, 2025</span>
                    </div>
                  </div>

                  {/* 4 KPI Stat Cards */}
                  <div className="px-2 pb-1 grid grid-cols-4 gap-1 flex-shrink-0">
                    {[
                      { label: 'Total Patients', value: '2,453', change: '↑ 12.5%', up: true,  iconColor: 'bg-blue-100 dark:bg-blue-900/30',   iconFill: 'fill-[#2563EB]', iconD: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
                      { label: 'Appointments',   value: '320',   change: '↑ 8.3%',  up: true,  iconColor: 'bg-emerald-100 dark:bg-emerald-900/30', iconFill: 'fill-emerald-600', iconD: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z' },
                      { label: 'Total Revenue',  value: '$74.5K',change: '↑ 15.2%', up: true,  iconColor: 'bg-purple-100 dark:bg-purple-900/30', iconFill: 'fill-purple-600', iconD: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' },
                      { label: 'Pending Bills',  value: '48',    change: '↓ 5.6%',  up: false, iconColor: 'bg-orange-100 dark:bg-orange-900/30', iconFill: 'fill-orange-500', iconD: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' },
                    ].map((s) => (
                      <div key={s.label} className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40 flex flex-col gap-0.5">
                        <div className="flex justify-between items-start">
                          <p className="text-[3.5px] text-neutral-500 dark:text-neutral-400 leading-tight pr-0.5">{s.label}</p>
                          <div className={`w-3 h-3 rounded-md flex items-center justify-center flex-shrink-0 ${s.iconColor}`}>
                            <svg viewBox="0 0 24 24" className={`w-2 h-2 ${s.iconFill}`}><path d={s.iconD}/></svg>
                          </div>
                        </div>
                        <p className="text-[7px] font-extrabold text-neutral-900 dark:text-white leading-none">{s.value}</p>
                        <p className={`text-[3px] font-bold ${s.up ? 'text-emerald-500' : 'text-red-500'}`}>{s.change} vs last week</p>
                      </div>
                    ))}
                  </div>

                  {/* Middle row: Chart + Appointments */}
                  <div className="px-2 grid grid-cols-2 gap-1 flex-shrink-0">

                    {/* Appointments line chart */}
                    <div className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40">
                      <div className="flex justify-between items-center mb-0.5">
                        <p className="text-[4px] font-extrabold text-neutral-800 dark:text-white">Appointments Overview</p>
                        <span className="text-[3px] text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded px-0.5">This Week ▾</span>
                      </div>
                      <svg viewBox="0 0 80 36" className="w-full h-[28px]" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="cpGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18"/>
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        {[8,16,24,32].map(y => <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="#e5e7eb" strokeWidth="0.5"/>)}
                        <text x="0" y="7"  fontSize="3" fill="#9ca3af">100</text>
                        <text x="0" y="18" fontSize="3" fill="#9ca3af">75</text>
                        <text x="0" y="28" fontSize="3" fill="#9ca3af">50</text>
                        <path d="M8,28 L20,22 L32,10 L44,14 L56,20 L68,18 L78,22 L78,36 L8,36 Z" fill="url(#cpGrad)"/>
                        <polyline points="8,28 20,22 32,10 44,14 56,20 68,18 78,22" fill="none" stroke="#2563EB" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"/>
                        <circle cx="32" cy="10" r="1.5" fill="#2563EB"/>
                        <text x="30" y="8" fontSize="2.5" fill="#2563EB" fontWeight="bold">75</text>
                        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, i) => (
                          <text key={d} x={8 + i * 11.7} y="35.5" fontSize="2.5" fill="#9ca3af" textAnchor="middle">{d}</text>
                        ))}
                      </svg>
                    </div>

                    {/* Recent Appointments table */}
                    <div className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40">
                      <div className="flex justify-between items-center mb-0.5">
                        <p className="text-[4px] font-extrabold text-neutral-800 dark:text-white">Recent Appointments</p>
                        <span className="text-[3px] text-[#2563EB] font-bold">View All</span>
                      </div>
                      <div className="space-y-0.5">
                        {[
                          { name: 'John Smith',     type: 'General Checkup',      time: '09:00 AM', status: 'Confirmed' },
                          { name: 'Emily Davis',    type: 'Dental Consultation',  time: '10:30 AM', status: 'Confirmed' },
                          { name: 'Michael Brown',  type: 'Cardiology Follow-up', time: '11:45 AM', status: 'Pending' },
                          { name: 'Sarah Wilson',   type: 'Physiotherapy',        time: '02:00 PM', status: 'Confirmed' },
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

                  {/* Bottom row: Department donut + Revenue bar chart */}
                  <div className="px-2 pt-1 grid grid-cols-2 gap-1 pb-1">

                    {/* Department Donut */}
                    <div className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40">
                      <p className="text-[4px] font-extrabold text-neutral-800 dark:text-white mb-0.5">Department Overview</p>
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 36 36" className="w-8 h-8 flex-shrink-0" style={{transform:'rotate(-90deg)'}}>
                          <circle cx="18" cy="18" r="12" fill="none" stroke="#e5e7eb" strokeWidth="5"/>
                          <circle cx="18" cy="18" r="12" fill="none" stroke="#2563EB" strokeWidth="5" strokeDasharray="17.3 58.2" strokeDashoffset="0"/>
                          <circle cx="18" cy="18" r="12" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="14.9 60.6" strokeDashoffset="-17.3"/>
                          <circle cx="18" cy="18" r="12" fill="none" stroke="#8b5cf6" strokeWidth="5" strokeDasharray="14.9 60.6" strokeDashoffset="-32.2"/>
                          <circle cx="18" cy="18" r="12" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="11.2 64.3" strokeDashoffset="-47.1"/>
                          <circle cx="18" cy="18" r="12" fill="none" stroke="#e5e7eb" strokeWidth="5" strokeDasharray="14.9 60.6" strokeDashoffset="-58.3"/>
                          <text x="18" y="19" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#374151" style={{transform:'rotate(90deg)', transformOrigin:'18px 18px'}}>8</text>
                        </svg>
                        <div className="space-y-0.5 flex-1">
                          {[
                            { label: 'Cardiology',    pct: '23%', color: 'bg-[#2563EB]' },
                            { label: 'Orthopedics',   pct: '20%', color: 'bg-emerald-500' },
                            { label: 'Pediatrics',    pct: '20%', color: 'bg-purple-500' },
                            { label: 'Gen. Medicine', pct: '15%', color: 'bg-amber-500' },
                            { label: 'Others',        pct: '22%', color: 'bg-neutral-300' },
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

                    {/* Revenue bar chart */}
                    <div className="bg-white dark:bg-[#160E2E] rounded-lg p-1.5 border border-neutral-100 dark:border-neutral-800/40">
                      <div className="flex justify-between items-center mb-0.5">
                        <p className="text-[4px] font-extrabold text-neutral-800 dark:text-white">Revenue Overview</p>
                        <span className="text-[3px] text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded px-0.5">This Month ▾</span>
                      </div>
                      <svg viewBox="0 0 70 30" className="w-full h-[26px]" preserveAspectRatio="none">
                        {[6,13,20,27].map(y => <line key={y} x1="0" y1={y} x2="70" y2={y} stroke="#f3f4f6" strokeWidth="0.5"/>)}
                        {[
                          {x:2,  h:10}, {x:9,  h:14}, {x:16, h:18}, {x:23, h:12},
                          {x:30, h:22}, {x:37, h:16}, {x:44, h:20}, {x:51, h:24},
                          {x:58, h:17}, {x:65, h:19}
                        ].map((b, i) => (
                          <rect key={i} x={b.x} y={27 - b.h} width="5" height={b.h} rx="1" fill="#2563EB" opacity={i >= 4 ? 1 : 0.4}/>
                        ))}
                        {['May 1','May 8','May 15','May 22','May 29'].map((l, i) => (
                          <text key={l} x={4.5 + i * 14} y="30" fontSize="2" fill="#9ca3af" textAnchor="middle">{l}</text>
                        ))}
                      </svg>
                    </div>
                  </div>

                </div>{/* end MAIN CONTENT */}
              </div>{/* end app shell */}
            </div>{/* end browser chrome */}
          </div>

          {/* RIGHT ── headline */}
          <div className="space-y-7">
            <div className="flex items-center gap-2">
              <img
                src={clinicplusLogo}
                alt="ClinicPlus Logo"
                className="h-10 w-10 object-cover object-left rounded-xl"
              />
              <span className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white font-display">
                ClinicPlus
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black leading-[1.1] tracking-tight text-neutral-950 dark:text-white">
              The all in one <span className="text-blue-600 dark:text-blue-400">Healthcare Management</span> System.
            </h1>

            <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
              ClinicPlus streamlines patient care, automates hospital operations, and empowers healthcare professionals with intelligent digital tools — all from one secure platform.
            </p>

            <button
              onClick={() => setActiveTab?.("Let's Talk")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg transition-all duration-200 cursor-pointer border-0"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — ABOUT CLINICPLUS (dark navy, full-width)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#08132B] dark:bg-[#070F22] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div className="space-y-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">About ClinicPlus</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Healthcare is about people not paperwork.
              </h2>
              <p className="text-blue-100/70 text-base leading-relaxed">
                ClinicPlus is a comprehensive Healthcare Management System designed to help clinics and hospitals simplify operations, improve patient experiences, and make smarter decisions through a secure, cloud based platform.
              </p>
              <p className="text-blue-100/70 text-base leading-relaxed">
                From patient registration and appointment scheduling to billing, pharmacy, laboratory, inventory, and advanced analytics, ClinicPlus connects every department into one seamless digital ecosystem.
              </p>
              <button
                onClick={() => setActiveTab?.("Let's Talk")}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#08132B] hover:bg-blue-50 font-bold text-sm shadow-md transition-all cursor-pointer border-0"
              >
                Schedule a Demo
              </button>
            </div>

            {/* Right: Department Overview card */}
            <div className="flex justify-center">
              <div className="w-full max-w-[340px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 space-y-4 shadow-2xl text-left">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm text-white">Department Overview</h4>
                  <span className="text-xs bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded">Live</span>
                </div>
                <div className="space-y-3">
                  {[
                    { dept: 'General Medicine', patients: '48 Patients', status: 'Optimal' },
                    { dept: 'Cardiology Clinic', patients: '32 Patients', status: 'Optimal' },
                    { dept: 'Pediatric Unit', patients: '26 Patients', status: 'Optimal' },
                    { dept: 'Pharmacy', patients: '14 Orders', status: 'Optimal' },
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
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — WHY CHOOSE CLINICPLUS
          White bg — 3×2 feature card grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#080D1C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-4">Why Choose ClinicPlus</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
              Healthcare organizations need more than software.
            </h2>
            <p className="text-base text-neutral-500 dark:text-neutral-400 mt-4 leading-relaxed">
              They need a reliable technology partner. ClinicPlus gives your team the tools they need to work faster, collaborate better, and deliver exceptional care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_FEATURES.map(({ icon, title, body, accent }) => (
              <div
                key={title}
                className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-7 space-y-4 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-200"
              >
                <div className={`w-11 h-11 rounded-xl ${accent} flex items-center justify-center`}>
                  {icon}
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">{title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — EVERYTHING YOU NEED IN ONE PLATFORM
          Features grid — image left │ features right
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEF4FC] dark:bg-[#0E0720] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT ── image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-24">
              <img
                src={clinicplusFeatureDoctor}
                alt="ClinicPlus in action"
                className="w-full h-[520px] object-cover object-center"
              />
            </div>

            {/* RIGHT ── features */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">Everything You Need</p>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
                  One Platform. Every Department.
                </h2>
              </div>
              <div className="space-y-4">
                {PLATFORM_FEATURES.map(({ icon, label, body, iconBg, iconColor }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-700/40 transition-colors duration-200">
                    <div className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0`}>
                      {icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-0.5">{label}</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — BUILT FOR EVERY HEALTHCARE PROVIDER
          Dark navy, full-width │ list + CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#08132B] dark:bg-[#070F22] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: Copy */}
            <div className="space-y-8 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4">Built For Every Provider</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                  ClinicPlus is ideal for every healthcare organization.
                </h2>
                <p className="text-blue-100/70 text-base leading-relaxed mt-4">
                  Whether you're managing a private clinic or a multi-specialty hospital, ClinicPlus gives your team the tools they need to work faster and deliver exceptional care.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUILT_FOR.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-blue-100/80">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveTab?.("Let's Talk")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all duration-200 cursor-pointer border-0"
              >
                Get Started Today
              </button>
            </div>

            {/* RIGHT: Stats card */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">One Platform. Unlimited Possibilities.</p>
              <div className="space-y-3">
                {STATS.map((stat, i) => (
                  <div key={stat} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <span className="w-7 h-7 rounded-full bg-blue-600/30 text-blue-300 text-xs font-black flex items-center justify-center flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-semibold text-white">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — TESTIMONIALS
          White bg — 3-col testimonial cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#080D1C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-4">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-neutral-950 dark:text-white">
              Trusted by healthcare professionals.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, author }) => (
              <div key={author} className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-7 space-y-5 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-200">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400">— {author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — SECURITY
          Dark navy, full-width
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#08132B] dark:bg-[#070F22] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div className="space-y-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Enterprise Grade Security</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Security You Can Trust.
              </h2>
              <p className="text-blue-100/70 text-base leading-relaxed">
                Patient privacy is our priority. ClinicPlus is built with modern security standards to protect sensitive healthcare information at every stage.
              </p>
              <ul className="space-y-3">
                {[
                  'Encrypted data transmission',
                  'Secure role based authentication',
                  'Role based permissions and access control',
                  'Comprehensive audit logs',
                  'Automated backups and disaster recovery',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-blue-100/80">
                    <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Security badge card */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-6 text-center">
                <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mx-auto">
                  <ShieldCheck size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-2">Enterprise Grade Security</h3>
                  <p className="text-sm text-blue-100/60 leading-relaxed">
                    Your data remains secure, accessible, and protected at every stage.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Encrypted', 'Role Based', 'Audit Logs', 'Auto Backups'].map((badge) => (
                    <div key={badge} className="bg-white/10 rounded-xl py-2 px-3 text-xs font-bold text-blue-200">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — CTA BANNER (dark navy full-width)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#08132B] dark:bg-[#070F22] border-t border-white/5 py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center space-y-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Get Started Today</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-tight tracking-tight text-white">
            Ready to transform your clinical operations with ClinicPlus?
          </h2>
          <p className="text-base text-blue-100/60 leading-relaxed max-w-lg mx-auto">
            Join healthcare organizations that trust ClinicPlus for faster, smarter, and more secure hospital management every day.
          </p>
          <button
            onClick={() => setActiveTab?.("Let's Talk")}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white hover:bg-blue-50 text-[#08132B] font-bold text-base shadow-2xl transition-all duration-200 cursor-pointer border-0"
          >
            Get Started Free
          </button>
        </div>
      </section>

    </div>
  )
}
