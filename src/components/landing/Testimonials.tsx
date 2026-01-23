import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const companyNames = [
    "World Box",
    "Prisma",
    "Martín López",
    "Quira",
    "Realsafe",
    "RedElec Civitas",
    "Revolución Dorada",
    "Rojoseguros",
    "Rookie Runner",
    "RYS Seguridad",
    "Sachavital",
    "Salazar E&S",
    "Sebasmaye",
    "Andrea Roa",
    "SEC Consultores",
    "SuperBites Studios",
    "Tecnika",
    "Tusnack",
    "MU Comunicaciones",
    "Comparte lo Esencial",
    "Claryi SAS",
    "CityLab Mobility",
    "Pparcee!!",
    "Cabañas La Pradera",
    "BoostLab",
    "Black Sheep Media",
    "Arena Lens",
    "ARAG",
    "Aprogresar S.A.S",
    "Append",
    "AP Dent",
    "ILS",
    "Alianzas Eléctricas",
    "Alianza Cardinal",
    "A|H",
    "Abogado Harol Ríos",
    "Abohaus",
    "Zafiro Properties",
    "911 Racing",
  ];

  const testimonials = [
    {
      name: "Martín López",
      role: "Creador de contenido de tecnología",
      quote: "Mi primer consejo para cualquier empresario o creador de contenido es ponerse en contacto con COR29. Con ellos delego el 100% de la contabilidad, contratos y nómina. Además, me acompañaron en el registro de mis marcas y empresas. Gracias a COR29 hoy tengo 3 empresas funcionando al 100%. Son un aliado indispensable para crecer con orden y tranquilidad.",
      rating: 5,
    },
    {
      name: "Nicolás Cuervo",
      role: "MI CIELA COMPANY SAS",
      quote: "Desde que con Angelina montamos la empresa Mi Ciela, el acompañamiento de COR29 ha sido clave. Nos apoyan en la contabilidad, la facturación electrónica y los temas jurídicos, lo que nos permite despreocuparnos de esa parte y enfocarnos en lo que realmente sabemos hacer. Trabajar con COR29 nos da mucha paz y tranquilidad.",
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

        {/* Trust badges - Infinite scrolling company names */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Más de 500 empresas que confían en nosotros
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient fade left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            {/* Gradient fade right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee">
              {/* First set of names */}
              <div className="flex shrink-0 items-center gap-8 md:gap-12 pr-8 md:pr-12">
                {companyNames.map((company) => (
                  <span
                    key={company}
                    className="text-lg md:text-xl font-bold text-muted-foreground/50 whitespace-nowrap"
                  >
                    {company}
                  </span>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex shrink-0 items-center gap-8 md:gap-12 pr-8 md:pr-12">
                {companyNames.map((company) => (
                  <span
                    key={`${company}-dup`}
                    className="text-lg md:text-xl font-bold text-muted-foreground/50 whitespace-nowrap"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
