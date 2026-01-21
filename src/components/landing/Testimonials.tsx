import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Martín López",
      role: "Creador de contenido de tecnología",
      quote: "Mi primer consejo a cualquier empresario o creador de contenido es ponerse en contacto con COR29. Con ellos delego el 100% de toda la parte de contadores, contratos, nómina. Incluso con ellos hago todo el registro de marca, empresa, sin ellos hoy no tendría 3 empresas funcionando al 100%. Son indispensables para todo.",
      rating: 4,
    },
    {
      name: "Nicolas Cuervo",
      role: "MI CIELA COMPANY SAS",
      quote: "Ahora que con Angelino montamos la empresa de Mi Ciela, el acompañamiento de Cor29 ha sido clave para llevar la contabilidad, poder facturar electrónicamente, y podemos despreocuparnos de esto y enfocarnos en hacer lo que sabemos. Nos ayudan con temas contables, jurídicos, etc... De verdad que estar con ellos nos da MUCHA PAZ y tranquilidad.",
      rating: 5,
    },
    {
      name: "Maria José Zaraté",
      role: "BAKERY BOUTIQUE",
      quote: "COR29 me ha ayudado mucho a ordenar y estructurar mi negocio, su servicio siempre es excelente, ya que puedo resolver dudas y entender de un tema que no domino. Ha sido muy útil para mis finanzas y mejorar procesos de venta y de facturación.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="section-padding section-darker">
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
            Más de 500 empresarios ya confían en COR29 para gestionar sus negocios.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-elevated relative group hover:translate-y-[-4px] transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-10 w-10 text-primary fill-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-muted-foreground mb-6 leading-relaxed relative z-10">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4 mt-auto">
                <div className="font-semibold text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
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
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
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