import { Scissors, Sparkles, Hand } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling',
    description:
      'Expert cuts, styling, and color services tailored to your unique features and personal style.',
  },
  {
    icon: Sparkles,
    title: 'Hair Treatments',
    description:
      'Nourishing treatments including keratin, deep conditioning, and scalp therapies for healthy hair.',
  },
  {
    icon: Hand,
    title: 'Manicure & Pedicure',
    description:
      'Luxurious nail care services with premium products for perfectly polished hands and feet.',
  },
  {
    icon: Sparkles,
    title: 'Nail Design',
    description:
      'Creative nail art and designs from classic French tips to custom artistic expressions.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-sans">
            Our Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Elevate Your Look
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors"
            >
              <service.icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-medium text-foreground mb-3 font-sans">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
