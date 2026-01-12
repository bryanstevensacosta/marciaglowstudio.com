import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/luxury-beauty-salon-interior-dark-elegant-gold-acc.jpg" alt="" fill className="object-cover" priority />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Image
          src="/images/chatgpt-20image-209-20ene-202026-2c-2017-13-08-20-281-29.png"
          alt="Marcia Glow Studio"
          width={280}
          height={100}
          className="h-20 md:h-24 w-auto mb-8 mx-auto"
        />
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-foreground max-w-4xl text-balance">
          Glow That Reflects Your Essence
        </h1>
        <p className="mt-8 text-muted-foreground max-w-xl leading-relaxed mx-auto text-xl font-sans">
          Professional hair and nail services designed to enhance your natural beauty with premium products and expert
          care.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:opacity-90 transition-opacity font-sans"
          >
            Book Appointment
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 text-foreground font-medium hover:text-accent transition-colors flex items-center gap-2 font-sans"
          >
            Our Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
