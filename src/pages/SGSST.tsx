import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import StickyCTA from "@/components/landing/StickyCTA";
import TrustBadges from "@/components/landing/TrustBadges";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, FileText, Users, AlertTriangle, BookOpen, Check } from "lucide-react";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick } from "@/lib/gtm";

const SGSST = () => {
  const features = [
    { icon: FileText, title: "Sistema SG-SST Completo", description: "Diseño e implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo." },
    { icon: AlertTriangle, title: "Matriz de Riesgos", description: "Identificación, evaluación y control de peligros y riesgos laborales." },
    { icon: BookOpen, title: "Capacitaciones", description: "Plan de capacitación anual para todos los niveles de la organización." },
    { icon: ShieldCheck, title: "Documentación Legal", description: "Toda la documentación requerida por la normatividad colombiana." },
    { icon: Users, title: "COPASST y Convivencia", description: "Conformación y capacitación de comités obligatorios." },
  ];

  const handleCTAClick = (location: string) => {
    trackScheduleClick(location);
    trackCTAClick("Solicitar cotización", location);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("sgsst_page", "SG-SST");
    window.open(
      `https://wa.me/573174379260?text=${encodeURIComponent("Hola, estoy interesado en el servicio de SG-SST de COR29")}`,
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Sistema SG-SST en Colombia | Seguridad y Salud en el Trabajo | COR29</title>
        <meta name="description" content="Implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) en Colombia. Cumple la normatividad, protege a tu equipo. Asesoría experta." />
        <link rel="canonical" href="https://cor29.com/sgsst" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SG-SST COR29",
            "provider": {
              "@type": "ProfessionalService",
              "name": "COR29",
              "url": "https://cor29.com"
            },
            "description": "Implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo en Colombia",
            "areaServed": "Colombia"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero */}
          <section className="relative pt-28 pb-16 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-background to-blue-950/30" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span className="text-foreground/90 text-sm font-medium">
                    Cumple con la normatividad
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Sistema SG-SST para Empresas en{" "}
                  <span className="gradient-text">Colombia</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Cuida a tu equipo y cumple con la normatividad de Seguridad y Salud en el Trabajo. 
                  Implementación completa con asesoría experta y humana.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="btn-primary-gradient font-bold text-lg px-8 py-6 rounded-xl"
                    onClick={() => {
                      handleCTAClick("hero_sgsst");
                      handleWhatsAppClick();
                    }}
                  >
                    Solicitar cotización
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="/#contacto" onClick={() => handleCTAClick("hero_sgsst_form")}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-border bg-card/50 text-foreground hover:bg-card font-semibold text-lg px-8 py-6 rounded-xl w-full"
                    >
                      Agendar asesoría gratuita
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <TrustBadges />

          {/* Warning */}
          <section className="py-8 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      ¿Sabías que las multas por incumplimiento pueden llegar hasta 500 SMMLV?
                    </h3>
                    <p className="text-muted-foreground">
                      No implementar el SG-SST puede generar sanciones económicas, cierre temporal del establecimiento 
                      e incluso responsabilidad penal en caso de accidentes graves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="section-padding section-dark">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  ¿Qué incluye nuestro servicio de SG-SST?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Implementación completa para cumplir con el Decreto 1072 de 2015 y la Resolución 0312 de 2019.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="card-elevated">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="section-padding section-darker">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Beneficios de implementar el SG-SST
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Cumplimiento de la normatividad colombiana",
                  "Reducción de accidentes y enfermedades laborales",
                  "Evita multas y sanciones del Ministerio de Trabajo",
                  "Mejora el clima laboral y la productividad",
                  "Protege la reputación de tu empresa",
                  "Reduce costos por ausentismo y rotación",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 bg-card/50 rounded-xl border border-border">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  className="btn-primary-gradient font-bold text-lg px-10 py-6 rounded-xl"
                  onClick={() => {
                    handleCTAClick("benefits_sgsst");
                    handleWhatsAppClick();
                  }}
                >
                  Implementar SG-SST ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding section-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Preguntas frecuentes sobre SG-SST
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "¿Qué empresas están obligadas a implementar el SG-SST?",
                    a: "Todas las empresas en Colombia con uno o más trabajadores deben implementar el SG-SST, sin importar su tamaño o sector."
                  },
                  {
                    q: "¿Cuánto tiempo toma implementar el sistema?",
                    a: "Dependiendo del tamaño de la empresa, la implementación inicial toma entre 2 y 4 semanas."
                  },
                  {
                    q: "¿El servicio incluye las capacitaciones obligatorias?",
                    a: "Sí, incluye el plan de capacitación anual con todos los temas exigidos por la normatividad."
                  }
                ].map((faq, i) => (
                  <div key={i} className="card-elevated">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
        <StickyCTA />
      </div>
    </>
  );
};

export default SGSST;
