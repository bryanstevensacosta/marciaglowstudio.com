import Link from 'next/link'
import Image from 'next/image'

export function CtaSection() {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/elegant-woman-hands-with-golden-manicure-dark-back.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-sans">
          Your Transformation Awaits
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-6 text-balance">
          Ready to Glow?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed font-sans">
          Book your appointment today and experience the transformation. Online booking available or
          reach us via WhatsApp.
        </p>
        <Link
          href="#contact"
          className="inline-block px-10 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-lg font-sans"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  )
}
