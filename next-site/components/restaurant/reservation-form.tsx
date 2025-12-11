import type React from "react"
type FieldProps = {
  label: string
  id: string
  children: React.ReactNode
}

function Field({ label, id, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[10px] tracking-[0.25em] text-[oklch(0.5_0_0)]">
        {label.toUpperCase()}
      </label>
      {children}
    </div>
  )
}

export function ReservationForm() {
  return (
    <section id="reservations" className="bg-luxury-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.4em] text-[oklch(0.75_0.15_75)]">JOIN US</p>
            <h2 className="mt-4 font-serif text-3xl tracking-wide text-[oklch(0.95_0_0)] sm:text-4xl">
              Reserve Your
              <br />
              <span className="italic text-[oklch(0.75_0.15_75)]">Experience</span>
            </h2>
            <div className="gold-line mt-6" />
            <p className="mt-8 leading-relaxed text-[oklch(0.6_0_0)]">
              Whether it&apos;s an intimate dinner for two, a celebration with loved ones, or an important business
              occasion, we look forward to creating an unforgettable experience for you.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[oklch(0.75_0.15_75)]">◆</span>
                <span className="text-sm text-[oklch(0.7_0_0)]">Private dining rooms available for parties of 8+</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[oklch(0.75_0.15_75)]">◆</span>
                <span className="text-sm text-[oklch(0.7_0_0)]">Complimentary valet parking for all guests</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[oklch(0.75_0.15_75)]">◆</span>
                <span className="text-sm text-[oklch(0.7_0_0)]">Dress code: Smart casual to formal attire</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[oklch(0.75_0.15_75)]">◆</span>
                <span className="text-sm text-[oklch(0.7_0_0)]">Confirmation sent within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="reservation-form border border-[oklch(0.3_0_0)] p-8 sm:p-10">
            <div className="space-y-6">
              <Field label="Full Name" id="name">
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  className="form-input w-full border border-[oklch(0.85_0_0)] bg-[oklch(1_0_0)] px-4 py-3 text-sm text-[oklch(0.15_0_0)] outline-none"
                />
              </Field>

              <Field label="Email Address" id="email">
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="form-input w-full border border-[oklch(0.85_0_0)] bg-[oklch(1_0_0)] px-4 py-3 text-sm text-[oklch(0.15_0_0)] outline-none"
                />
              </Field>

              <Field label="Phone Number" id="phone">
                <input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="form-input w-full border border-[oklch(0.85_0_0)] bg-[oklch(1_0_0)] px-4 py-3 text-sm text-[oklch(0.15_0_0)] outline-none"
                />
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Preferred Date" id="date">
                  <input
                    id="date"
                    type="date"
                    className="form-input w-full border border-[oklch(0.85_0_0)] bg-[oklch(1_0_0)] px-4 py-3 text-sm text-[oklch(0.15_0_0)] outline-none"
                  />
                </Field>
                <Field label="Preferred Time" id="time">
                  <select
                    id="time"
                    className="form-input w-full border border-[oklch(0.85_0_0)] bg-[oklch(1_0_0)] px-4 py-3 text-sm text-[oklch(0.15_0_0)] outline-none"
                  >
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </Field>
              </div>

              <Field label="Number of Guests" id="guests">
                <select
                  id="guests"
                  className="form-input w-full border border-[oklch(0.85_0_0)] bg-[oklch(1_0_0)] px-4 py-3 text-sm text-[oklch(0.15_0_0)] outline-none"
                >
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6 Guests</option>
                  <option>7 Guests</option>
                  <option>8+ Guests (Private Dining)</option>
                </select>
              </Field>

              <Field label="Special Requests" id="notes">
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Allergies, special occasion, seating preferences..."
                  className="form-input w-full resize-none border border-[oklch(0.85_0_0)] bg-[oklch(1_0_0)] px-4 py-3 text-sm text-[oklch(0.15_0_0)] outline-none"
                />
              </Field>

              <button type="submit" className="btn-gold w-full py-4 text-xs tracking-[0.2em]">
                REQUEST RESERVATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
