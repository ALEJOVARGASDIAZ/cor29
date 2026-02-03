import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import StickyCTA from "@/components/landing/StickyCTA";
import TrustBadges from "@/components/landing/TrustBadges";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Receipt, ShieldCheck, FileText, Headphones, Check } from "lucide-react";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick } from "@/lib/gtm";

const Nomina = () => {
  const features = [
    { icon: Receipt, title: "Nómina Electrónica", description: "Cálculo correcto de salarios, horas extras, deducciones y emisión de nómina electrónica DIAN." },
    { icon: ShieldCheck, title: "Seguridad Social", description: "Elaboración de planillas, validación de aportes a EPS, ARL, pensión y cajas de compensación." },
    { icon: FileText, title: "Contratos Laborales", description: "Elaboración, revisión y seguimiento de contratos con apoyo jurídico laboral." },
    { icon: Headphones, title: "Soporte Mensual", description: "Comprobantes de nómina, incapacidades, licencias y certificados laborales." },
    { icon: Users, title: "Gestión de Personal", description: "Acompañamiento en contratación, desvinculación y buenas prácticas laborales." },
  ];

  const handleCTAClick = (location: string) => {
    trackScheduleClick(location);
    trackCTAClick("Solicitar información", location);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("nomina_page", "COR29 People");
    window.open(
      `https://wa.me/573174379260?text=${encodeURIComponent("Hola, estoy interesado en COR29 People para gestión de nómina")}`,
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Gestión de Nómina y Talento Humano en Colombia | COR29 People</title>
        <meta name="description" content="Servicio integral de nómina electrónica y gestión de talento humano en Colombia. $89.900/mes por empleado. Cumple la normatividad laboral sin preocupaciones." />
        <link rel="canonical" href="https://cor29.com/nomina" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "COR29 People - Gestión de Nómina",
            "provider": {
              "@type": "ProfessionalService",
              "name": "COR29",
              "url": "https://cor29.com"
            },
            "description": "Servicio integral de nómina electrónica y gestión de talento humano en Colombia",
            "areaServed": "Colombia",
            "offers": {
              "@type": "Offer",
              "price": "89900",
              "priceCurrency": "COP",
              "description": "Por empleado al mes"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero */}
          <section className="relative pt-28 pb-16 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-background to-blue-950/30" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-foreground/90 text-sm font-medium">
                    COR29 People
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Gestión de Nómina y Talento Humano en{" "}
                  <span className="gradient-text">Colombia</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Delega toda la gestión de nómina y talento humano. Reduce riesgos legales 
                  y opera con paz, orden y tranquilidad.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold gradient-text">$89.900</span>
                    <span className="text-muted-foreground">COP/mes por empleado</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Todo incluido. Sin costos ocultos.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="btn-primary-gradient font-bold text-lg px-8 py-6 rounded-xl"
                    onClick={() => {
                      handleCTAClick("hero_nomina");
                      handleWhatsAppClick();
                    }}
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="/#contacto" onClick={() => handleCTAClick("hero_nomina_form")}>
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

          {/* Features */}
          <section className="section-padding section-dark">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  ¿Qué incluye COR29 People?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Servicio integral para que cumplas correctamente con la normatividad laboral.
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
                  Beneficios de tercerizar tu nómina
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Cumplimiento total con la normatividad DIAN",
                  "Reducción de riesgos legales y sanciones",
                  "Ahorro de tiempo y recursos administrativos",
                  "Soporte especializado en temas laborales",
                  "Tranquilidad para enfocarte en tu negocio",
                  "Escalabilidad sin complicaciones",
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
                    handleCTAClick("benefits_nomina");
                    handleWhatsAppClick();
                  }}
                >
                  Quiero COR29 People
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding section-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Preguntas frecuentes sobre nómina
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "¿Cuántos empleados necesito para contratar el servicio?",
                    a: "Puedes empezar desde 1 empleado. El servicio escala contigo."
                  },
                  {
                    q: "¿Incluye la emisión de nómina electrónica?",
                    a: "Sí, incluye la emisión de nómina electrónica cumpliendo todos los requisitos de la DIAN."
                  },
                  {
                    q: "¿Qué pasa si tengo empleados con diferentes tipos de contrato?",
                    a: "Manejamos todo tipo de contratos: término fijo, indefinido, obra o labor, y prestación de servicios."
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

export default Nomina;
