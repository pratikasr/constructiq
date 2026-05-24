'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  role: string
  state: string
}

const roles = [
  { value: '', label: 'I am a…' },
  { value: 'homeowner', label: 'Homeowner / Self-builder' },
  { value: 'contractor', label: 'Contractor / Builder' },
  { value: 'supplier', label: 'Material Supplier' },
  { value: 'bank', label: 'Bank / NBFC' },
  { value: 'architect', label: 'Architect / Engineer' },
]

const states = [
  { value: '', label: 'Select your state' },
  { value: 'bihar', label: 'Bihar' },
  { value: 'up', label: 'Uttar Pradesh' },
  { value: 'jharkhand', label: 'Jharkhand' },
  { value: 'mp', label: 'Madhya Pradesh' },
  { value: 'other', label: 'Other' },
]

const inputClass =
  'w-full px-4 py-3 rounded-md border border-white/[0.12] bg-white/[0.04] text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-shadow'

export function SignupForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    role: '',
    state: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: 'rgba(245,158,11,0.15)' }}
        >
          <CheckCircle2 size={32} style={{ color: 'var(--color-ciq-safety)' }} />
        </div>
        <h3 className="font-display font-bold text-2xl text-white">
          You&apos;re on the list!
        </h3>
        <p className="mt-3 text-sm text-[color:var(--color-ciq-concrete)] max-w-xs leading-relaxed">
          Welcome to the ConstructIQ beta, {form.name ? form.name.split(' ')[0] : 'builder'}. Check your inbox — we&apos;ll send your access link within 24 hours.
        </p>
        <p className="mt-6 text-xs text-[color:var(--color-ciq-concrete)]">
          Questions? WhatsApp us at{' '}
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            +91 99999 99999
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="signup-name" className="block text-sm font-medium text-white/80 mb-1.5">
          Full name <span style={{ color: 'var(--color-ciq-safety)' }}>*</span>
        </label>
        <input
          id="signup-name"
          name="name"
          type="text"
          required
          placeholder="Ramesh Kumar"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium text-white/80 mb-1.5">
          Email address <span style={{ color: 'var(--color-ciq-safety)' }}>*</span>
        </label>
        <input
          id="signup-email"
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
        <label htmlFor="signup-phone" className="block text-sm font-medium text-white/80 mb-1.5">
          WhatsApp number <span style={{ color: 'var(--color-ciq-safety)' }}>*</span>
        </label>
        <input
          id="signup-phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="signup-role" className="block text-sm font-medium text-white/80 mb-1.5">
            Role
          </label>
          <select
            id="signup-role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className={inputClass + ' [&>option]:bg-[#0A1628] [&>option]:text-white'}
          >
            {roles.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="signup-state" className="block text-sm font-medium text-white/80 mb-1.5">
            State
          </label>
          <select
            id="signup-state"
            name="state"
            value={form.state}
            onChange={handleChange}
            className={inputClass + ' [&>option]:bg-[#0A1628] [&>option]:text-white'}
          >
            {states.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold text-base transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
      >
        {loading ? 'Joining beta…' : (
          <>
            Join the beta — it&apos;s free <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-center text-xs text-[color:var(--color-ciq-concrete)]">
        No credit card. No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
