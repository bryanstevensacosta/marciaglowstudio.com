import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/chatgpt-20image-209-20ene-202026-2c-2017-13-08-20-281-29.png"
            alt="Marcia Glow Studio"
            width={140}
            height={50}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors font-sans">
            Services
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors font-sans">
            About
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors font-sans">
            Contact
          </Link>
        </nav>
        <Link
          href="#contact"
          className="text-sm font-medium px-5 py-2.5 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity font-sans"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  )
}
