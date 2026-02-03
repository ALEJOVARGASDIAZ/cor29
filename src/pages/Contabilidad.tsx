import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import StickyCTA from "@/components/landing/StickyCTA";
import TrustBadges from "@/components/landing/TrustBadges";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, FileText, Calculator, BarChart3, Receipt, Headphones, Monitor } from "lucide-react";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick } from "@/lib/gtm";

const Contabilidad = () => {
  const features = [
    { icon: FileText, text: "Contabilización de facturas de compra" },
    { icon: Receipt, text: "Emisión de Documento Soporte Electrónico" },
    { icon: Calculator, text: "Auditoría y pre-contabilización del ciclo contable" },
    { icon: BarChart3, text: "Estados Financieros completos" },
    { icon: Headphones, text: "Contador público virtual dedicado" },
    { icon: Monitor, text: "Software contable con facturación electrónica incluida" },
  ];

  const plans = [
    { name: "Emprendedor", price: "$199.900", limit: "$9.000.000" },
    { name: "PYME", price: "$352.700", limit: "$19.000.000" },
    { name: "Pro", price: "$647.900", limit: "$39.000.000" },
    { name: "Senior", price: "$987.200", limit: "$100.000.000" },
  ];

  const handleCTAClick = (location: string) => {
    trackScheduleClick(location);
    trackCTAClick("Agenda tu asesoría gratuita", location);
  };

  const handleWhatsAppPlan = (planName: string) => {
    trackWhatsAppClick("contabilidad_page", planName);
    window.open(
      `https://wa.me/573174379260?text=${encodeURIComponent(`Hola, estoy interesado en el Plan ${planName} de COR29`)}`,
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Contabilidad Online para Empresas en Colombia | COR29</title>
        <meta name="description" content="Servicio de contabilidad 100% online para empresas en Colombia. Planes desde $199.900/mes. Facturación electrónica incluida. +500 clientes confían en nosotros." />
        <link rel="canonical" href="https://cor29.com/contabilidad" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Contabilidad Online COR29",
            "provider": {
              "@type": "ProfessionalService",
              "name": "COR29",
              "url": "https://cor29.com"
            },
            "description": "Servicio de contabilidad 100% online para empresas en Colombia con facturación electrónica incluida",
            "areaServed": "Colombia",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "199900",
              "highPrice": "987200",
              "priceCurrency": "COP"
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
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-foreground/90 text-sm font-medium">
                    +500 empresas en Colombia
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Contabilidad Online para Empresas en{" "}
                  <span className="gradient-text">Colombia</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Delega tu contabilidad a expertos. Software de facturación electrónica incluido, 
                  estados financieros mensuales y un contador dedicado para tu negocio.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#contacto" onClick={() => handleCTAClick("hero_contabilidad")}>
                    <Button size="lg" className="btn-primary-gradient font-bold text-lg px-8 py-6 rounded-xl w-full sm:w-auto">
                      Agenda tu asesoría gratuita
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-border bg-card/50 text-foreground hover:bg-card font-semibold text-lg px-8 py-6 rounded-xl"
                    onClick={() => handleWhatsAppPlan("Contabilidad")}
                  >
                    Escríbenos por WhatsApp
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm">4.9/5 de satisfacción • +500 clientes activos</span>
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
                  ¿Qué incluye nuestro servicio de contabilidad?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Todo lo que necesitas para mantener tu contabilidad al día y cumplir con tus obligaciones fiscales.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <div key={feature.text} className="card-elevated flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Plans */}
          <section className="section-padding section-darker">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Planes adaptados a tu negocio
                </h2>
                <p className="text-xl text-muted-foreground">
                  Desde <span className="gradient-text font-bold">$199.900/mes</span> con todo incluido
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan) => (
                  <div key={plan.name} className="card-pricing text-center">
                    <h3 className="text-lg font-bold text-foreground mb-2">Plan {plan.name}</h3>
                    <div className="text-3xl font-bold gradient-text mb-2">{plan.price}</div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ventas hasta {plan.limit}/mes
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleWhatsAppPlan(plan.name)}
                    >
                      Comenzar
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a href="/#contacto" onClick={() => handleCTAClick("plans_contabilidad")}>
                  <Button size="lg" className="btn-primary-gradient font-bold text-lg px-10 py-6 rounded-xl">
                    Solicita tu diagnóstico gratuito
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding section-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Preguntas frecuentes sobre contabilidad
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "¿Qué documentos necesito para empezar?",
                    a: "Solo necesitas tu RUT, cámara de comercio y acceso a tu facturación. Nosotros nos encargamos del resto."
                  },
                  {
                    q: "¿Cuánto tiempo toma activar el servicio?",
                    a: "En menos de 48 horas tienes todo listo: software configurado, contador asignado y listo para empezar."
                  },
                  {
                    q: "¿Puedo cambiar de plan si mi negocio crece?",
                    a: "Sí, los planes se ajustan automáticamente según tus ventas mensuales."
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

export default Contabilidad;
