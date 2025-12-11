import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0_0)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.3em] text-[oklch(0.95_0_0)]">RIVERFRONT</span>
              <span className="text-[10px] tracking-[0.5em] text-[oklch(0.75_0.15_75)]">BISTRO</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[oklch(0.5_0_0)]">
              Where culinary artistry meets the river. An extraordinary dining experience awaits you.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.25em] text-[oklch(0.75_0.15_75)]">CONTACT</h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[oklch(0.75_0.15_75)]" />
                <span className="text-sm text-[oklch(0.6_0_0)]">
                  123 Riverfront Way
                  <br />
                  Riverside, WA 99201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[oklch(0.75_0.15_75)]" />
                <span className="text-sm text-[oklch(0.6_0_0)]">(509) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[oklch(0.75_0.15_75)]" />
                <span className="text-sm text-[oklch(0.6_0_0)]">reservations@riverfrontbistro.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-[0.25em] text-[oklch(0.75_0.15_75)]">HOURS</h4>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-[oklch(0.75_0.15_75)]" />
                <div className="text-sm text-[oklch(0.6_0_0)]">
                  <p>Tuesday – Thursday</p>
                  <p className="text-[oklch(0.5_0_0)]">5:00 PM – 10:00 PM</p>
                </div>
              </li>
              <li className="ml-7 text-sm text-[oklch(0.6_0_0)]">
                <p>Friday – Saturday</p>
                <p className="text-[oklch(0.5_0_0)]">5:00 PM – 11:00 PM</p>
              </li>
              <li className="ml-7 text-sm text-[oklch(0.6_0_0)]">
                <p>Sunday</p>
                <p className="text-[oklch(0.5_0_0)]">5:00 PM – 9:00 PM</p>
              </li>
              <li className="ml-7 text-sm text-[oklch(0.5_0_0)]">Closed Mondays</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.25em] text-[oklch(0.75_0.15_75)]">NEWSLETTER</h4>
            <p className="mt-6 text-sm text-[oklch(0.5_0_0)]">
              Subscribe for exclusive events, seasonal menus, and special offers.
            </p>
            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="border border-[oklch(0.3_0_0)] bg-transparent px-4 py-3 text-sm text-[oklch(0.8_0_0)] outline-none transition focus:border-[oklch(0.75_0.15_75)]"
              />
              <button type="submit" className="btn-gold py-3 text-[10px] tracking-[0.2em]">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[oklch(0.2_0_0)] pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[oklch(0.4_0_0)]">
            © {new Date().getFullYear()} Riverfront Bistro. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[oklch(0.4_0_0)]">
            <a href="#" className="transition hover:text-[oklch(0.75_0.15_75)]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[oklch(0.75_0.15_75)]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
