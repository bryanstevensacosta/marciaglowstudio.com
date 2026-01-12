import { Award, ShieldCheck, Star } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Professional Expertise",
    description: "Our skilled stylists bring years of experience and continuous training in the latest techniques.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Products",
    description: "We exclusively use high-quality, salon-grade products that nurture and protect your hair and nails.",
  },
  {
    icon: Star,
    title: "Visible Results",
    description: "Leave feeling confident and radiant with results that speak for themselves.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-sans">Why Choose Us</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">The Marcia Glow Difference</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-background border border-accent/30 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 font-sans">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
