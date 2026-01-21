import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Camila R.",
      role: "Emprendedora",
      image: testimonial1,
      quote: "Con COR 2.9, llevar mis cuentas dejó de ser un dolor de cabeza. Son rápidos, claros y siempre están ahí cuando los necesito.",
      rating: 5,
    },
    {
      name: "Andrés G.",
      role: "CEO Startup",
      image: testimonial2,
      quote: "Lo que más valoro es su acompañamiento. No solo hacen contabilidad, son parte de mi estrategia de crecimiento.",
      rating: 5,
    },
    {
      name: "María L.",
      role: "Dueña de restaurante",
      image: null,
      quote: "Antes tenía miedo de los impuestos y la DIAN. Ahora duermo tranquila sabiendo que COR 2.9 se encarga de todo.",
      rating: 5,
    },
    {
      name: "Carlos M.",
      role: "Freelancer",
      image: null,
      quote: "Como independiente, necesitaba algo simple y digital. COR 2.9 me da exactamente eso, sin complicaciones.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lo que dicen{" "}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 500 empresarios ya confían en COR 2.9 para gestionar sus negocios.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated relative group hover:translate-y-[-4px] transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name[0]}
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {["Tech Co", "Startup Hub", "Growth Lab", "Digital First", "Scale Up"].map(
              (company) => (
                <div
                  key={company}
                  className="text-xl font-bold text-muted-foreground"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
