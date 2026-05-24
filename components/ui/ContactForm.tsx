'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  role: string
  message: string
}

const roles = [
  { value: '', label: 'Select your role' },
  { value: 'homeowner', label: 'Homeowner / Self-builder' },
  { value: 'contractor', label: 'Contractor / Builder' },
  { value: 'supplier', label: 'Material Supplier' },
  { value: 'bank', label: 'Bank / NBFC' },
  { value: 'architect', label: 'Architect / Engineer' },
  { value: 'other', label: 'Other' },
]

const inputClass =
  'w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-shadow'

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate a brief processing delay (no real API call in beta)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
        >
          <CheckCircle2 size={28} style={{ color: 'var(--color-ciq-safety)' }} />
        </div>
        <h3 className="font-display font-bold text-xl" style={{ color: '#0A1628' }}>
          Message received
        </h3>
        <p className="mt-3 text-sm text-slate-600 max-w-xs leading-relaxed">
          Thanks {form.name ? form.name.split(' ')[0] : 'for reaching out'}. We typically reply within a few hours during business hours (Mon–Sat, 9am–6pm IST).
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Full name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Ramesh Kumar"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ramesh@example.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone (WhatsApp preferred)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1.5">
          I am a…
        </label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
          className={inputClass}
        >
          {roles.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, question, or partnership idea…"
          value={form.message}
          onChange={handleChange}
          className={inputClass + ' resize-none'}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
      >
        {loading ? 'Sending…' : (
          <>
            Send message <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  )
}
