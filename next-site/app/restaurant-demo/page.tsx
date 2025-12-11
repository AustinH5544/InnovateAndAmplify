import type { Metadata } from "next"
import "../app/restaurant.css"
import { Header } from "@/components/restaurant/header"
import { Hero } from "@/components/restaurant/hero"
import { About } from "@/components/restaurant/about"
import { SignatureDishes } from "@/components/restaurant/signature-dishes"
import { FullMenu } from "@/components/restaurant/full-menu"
import { ReservationForm } from "@/components/restaurant/reservation-form"
import { Footer } from "@/components/restaurant/footer"

export const metadata: Metadata = {
  title: "Riverfront Bistro | Fine Dining Experience",
  description:
    "Experience culinary excellence at Riverfront Bistro. Michelin-recommended fine dining with breathtaking riverside views, locally-sourced ingredients, and impeccable service.",
}

export default function RiverfrontBistroPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.1_0_0)] font-sans">
      <Header />
      <Hero />
      <About />
      <SignatureDishes />
      <FullMenu />
      <ReservationForm />
      <Footer />
    </main>
  )
}
