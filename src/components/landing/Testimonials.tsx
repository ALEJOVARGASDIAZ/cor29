import { Star, Quote } from "lucide-react";

// Import company logos
import worldboxLogo from "@/assets/logos/worldbox.jpg";
import prismaLogo from "@/assets/logos/prisma.jpg";
import martinLopezLogo from "@/assets/logos/martin-lopez.jpg";
import quiraLogo from "@/assets/logos/quira.jpg";
import realsafeLogo from "@/assets/logos/realsafe.jpg";
import redelecLogo from "@/assets/logos/redelec.jpg";
import revolucionDoradaLogo from "@/assets/logos/revolucion-dorada.jpg";
import rojosegurosLogo from "@/assets/logos/rojoseguros.jpg";
import rookieRunnerLogo from "@/assets/logos/rookie-runner.jpg";
import rysSeguriadLogo from "@/assets/logos/rys-seguridad.jpg";
import sachavitalLogo from "@/assets/logos/sachavital.jpg";
import salazarEsLogo from "@/assets/logos/salazar-es.jpg";
import sebasmayeLogo from "@/assets/logos/sebasmaye.jpg";
import andreaRoaLogo from "@/assets/logos/andrea-roa.jpg";
import secConsultoresLogo from "@/assets/logos/sec-consultores.jpg";
import superbitesLogo from "@/assets/logos/superbites-studios.jpg";
import octopusLogo from "@/assets/logos/octopus.jpg";
import tecnikaLogo from "@/assets/logos/tecnika.jpg";
import tusnackLogo from "@/assets/logos/tusnack.jpg";
import muComunicacionesLogo from "@/assets/logos/mu-comunicaciones.jpg";

const Testimonials = () => {
  const companyLogos = [
    { src: worldboxLogo, alt: "World Box" },
    { src: prismaLogo, alt: "Prisma Proyectos Civiles" },
    { src: martinLopezLogo, alt: "Martín López" },
    { src: quiraLogo, alt: "Quira" },
    { src: realsafeLogo, alt: "Realsafe" },
    { src: redelecLogo, alt: "RedElec Civitas" },
    { src: revolucionDoradaLogo, alt: "Revolución Dorada Coffee" },
    { src: rojosegurosLogo, alt: "Rojoseguros" },
    { src: rookieRunnerLogo, alt: "Rookie Runner" },
    { src: rysSeguriadLogo, alt: "RYS Seguridad" },
    { src: sachavitalLogo, alt: "Sachavital" },
    { src: salazarEsLogo, alt: "Salazar E&S" },
    { src: sebasmayeLogo, alt: "Sebasmaye" },
    { src: andreaRoaLogo, alt: "Andrea Roa" },
    { src: secConsultoresLogo, alt: "SEC Consultores" },
    { src: superbitesLogo, alt: "SuperBites Studios" },
    { src: octopusLogo, alt: "Octopus" },
    { src: tecnikaLogo, alt: "Tecnika Ingeniería" },
    { src: tusnackLogo, alt: "Tusnack" },
    { src: muComunicacionesLogo, alt: "MU Comunicaciones" },
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

        {/* Trust badges - Company logos */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((company) => (
              <div
                key={company.alt}
                className="h-12 md:h-16 flex items-center justify-center"
              >
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-full w-auto max-w-[120px] md:max-w-[150px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;