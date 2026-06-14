"use client"

import type React from "react"
import { useState } from "react"

type FieldProps = {
  label: string
  id: string
  children: React.ReactNode
}

function Field({ label, id, children }: FieldProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-xs font-medium text-slate-600">
        {label}
      </label>
      {children}
    </div>
  )
}

type BistroReservationFormProps = {
  variant?: "light" | "dark"
}

export function BistroReservationForm({ variant = "light" }: BistroReservationFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const isDark = variant === "dark"
  const inputClass = isDark
    ? "w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40"
    : "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/60"
  const containerClass = isDark
    ? "space-y-4 rounded-2xl border border-slate-800 bg-slate-950/95 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.85)]"
    : "space-y-4 rounded-2xl border border-amber-200 bg-white p-5 shadow-[0_16px_40px_rgba(251,191,36,0.28)]"
  const buttonClass = isDark
    ? "mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(180,83,9,0.4)] transition hover:translate-y-0.5 hover:shadow-[0_16px_35px_rgba(180,83,9,0.55)]"
    : "mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(251,191,36,0.35)] transition hover:translate-y-0.5 hover:shadow-[0_16px_35px_rgba(251,191,36,0.5)]"

  return (
    <form onSubmit={handleSubmit} className={containerClass}>
      {submitted && (
        <p className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-500">
          Request received! We&apos;ll confirm your reservation within 24 hours.
        </p>
      )}
      <Field label="Name" id="bistro-name">
        <input id="bistro-name" type="text" placeholder="Alex Smith" required className={inputClass} />
      </Field>

      <Field label="Email" id="bistro-email">
        <input id="bistro-email" type="email" placeholder="you@example.com" required className={inputClass} />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Date" id="bistro-date">
          <input id="bistro-date" type="date" required className={inputClass} />
        </Field>
        <Field label="Time" id="bistro-time">
          <input id="bistro-time" type="time" className={inputClass} />
        </Field>
      </div>

      <Field label="Guests" id="bistro-guests">
        <select id="bistro-guests" className={inputClass}>
          <option>2</option>
          <option>3–4</option>
          <option>5–6</option>
          <option>7–8</option>
          <option>9+</option>
        </select>
      </Field>

      <Field label="Notes (optional)" id="bistro-notes">
        <textarea
          id="bistro-notes"
          rows={3}
          placeholder="Allergies, special occasion, seating preference..."
          className={`${inputClass} resize-none`}
        />
      </Field>

      <button type="submit" className={buttonClass}>
        Request Reservation
      </button>
    </form>
  )
}
