import { Clock, MessageCircle, Instagram } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-sans">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Visit Our Studio
          </h2>
        </div>

        {/* Map and contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Google Map */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-accent/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.2853905673664!2d-70.9441154238853!3d42.46421857118347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e36ce8164f9587%3A0x4266c736840a643a!2s14%20Mt%20Vernon%20St%2C%20Lynn%2C%20MA%2001901%2C%20EE.%20UU.!5e0!3m2!1ses!2sdo!4v1768186032471!5m2!1ses!2sdo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marcia Glow Studio Location"
              className="grayscale"
            />
          </div>

          {/* Right side - Contact info */}
          <div className="space-y-6">
            {/* Hours card */}
            <div className="bg-background border border-accent/20 rounded-2xl p-6 flex items-start gap-5 hover:border-accent/40 transition-colors">
              <div className="w-14 h-14 shrink-0 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2 font-sans">
                  Working Hours
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <div className="flex justify-between gap-8">
                    <span className="font-sans">Mon - Fri</span>
                    <span className="text-foreground font-sans">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="font-sans">Saturday</span>
                    <span className="text-foreground font-sans">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="font-sans">Sunday</span>
                    <span className="text-accent font-sans">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick booking CTA */}
            <div className="relative bg-accent/10 border border-accent/30 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
              <h3 className="text-2xl font-medium text-foreground mb-3 relative z-10 font-sans">
                Book Your Visit
              </h3>
              <p className="text-muted-foreground mb-6 relative z-10 font-sans">
                Schedule your appointment instantly via WhatsApp or Instagram DM.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                <Link
                  href="https://wa.me/19788761241"
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:opacity-90 transition-opacity font-bold font-sans"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>
                <Link
                  href="https://instagram.com/marciaglowstudio"
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-full hover:opacity-90 transition-opacity font-bold font-sans"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
