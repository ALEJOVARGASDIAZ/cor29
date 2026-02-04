import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import StickyCTA from "@/components/landing/StickyCTA";
import TrustBadges from "@/components/landing/TrustBadges";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import { 
  Users, Receipt, ShieldCheck, FileText, Headphones, 
  Calculator, Calendar, Scale, Briefcase, Clock
} from "lucide-react";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick, trackPhoneClick } from "@/lib/gtm";

const Nomina = () => {
  const features = [
    { icon: Receipt, title: "Nómina Electrónica DIAN", description: "Cálculo y emisión de nómina electrónica cumpliendo todos los requisitos de la DIAN." },
    { icon: ShieldCheck, title: "Seguridad Social", description: "Elaboración de planillas PILA con validación de aportes a EPS, ARL, pensión y cajas." },
    { icon: FileText, title: "Contratos Laborales", description: "Elaboración, revisión y seguimiento de contratos con apoyo jurídico laboral especializado." },
    { icon: Calculator, title: "Liquidaciones", description: "Cálculo de liquidaciones, vacaciones, primas y cesantías con total precisión." },
    { icon: Headphones, title: "Soporte Laboral", description: "Acompañamiento en consultas laborales, incapacidades, licencias y novedades." },
    { icon: Users, title: "Gestión de Personal", description: "Apoyo en contratación, desvinculación y buenas prácticas de recursos humanos." },
    { icon: Calendar, title: "Calendario Laboral", description: "Recordatorios de fechas límite y obligaciones laborales para evitar sanciones." },
    { icon: Scale, title: "Cumplimiento Legal", description: "Garantía de cumplimiento con el código sustantivo del trabajo y normativas vigentes." },
    { icon: Briefcase, title: "Onboarding Digital", description: "Proceso de incorporación de nuevos empleados 100% digital y automatizado." },
  ];

  const benefits = [
    "Cumplimiento total con la normatividad DIAN",
    "Reducción de riesgos legales y sanciones",
    "Ahorro de tiempo y recursos administrativos",
    "Nómina electrónica siempre al día",
    "Soporte especializado en temas laborales",
    "Tranquilidad para enfocarte en tu negocio",
    "Escalabilidad sin complicaciones",
    "Reducción de errores en liquidaciones",
  ];

  const faqs = [
    {
      question: "¿Cuántos empleados necesito para contratar el servicio?",
      answer: "Puedes empezar desde 1 empleado. El servicio escala contigo sin límite máximo de empleados.",
    },
    {
      question: "¿Incluye la emisión de nómina electrónica?",
      answer: "Sí, incluye la emisión de nómina electrónica cumpliendo todos los requisitos de la DIAN, sin costos adicionales.",
    },
    {
      question: "¿Qué pasa si tengo empleados con diferentes tipos de contrato?",
      answer: "Manejamos todo tipo de contratos: término fijo, indefinido, obra o labor, y prestación de servicios. Cada uno con su tratamiento legal correcto.",
    },
    {
      question: "¿Cómo se manejan las incapacidades y licencias?",
      answer: "Gestionamos todo el proceso de incapacidades, licencias de maternidad/paternidad y novedades de nómina. Te acompañamos en el recobro ante las EPS.",
    },
    {
      question: "¿Incluye asesoría legal laboral?",
      answer: "Sí, tienes acceso a consultas laborales con nuestro equipo jurídico especializado en derecho laboral colombiano.",
    },
  ];

  const handleScheduleClick = (location: string) => {
    trackScheduleClick(location);
    trackCTAClick("Solicitar información", location);
    window.location.href = "/#contacto";
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("nomina_page", "COR29 People");
    window.open(
      `https://wa.me/573174379260?text=${encodeURIComponent(
        "Hola, estoy interesado en COR29 People para gestión de nómina y talento humano"
      )}`,
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    trackPhoneClick("nomina_page");
    window.open("tel:+573174379260", "_self");
  };

  return (
    <>
      <Helmet>
        <title>Gestión de Nómina y Talento Humano en Colombia | COR29 People</title>
        <meta name="description" content="Servicio integral de nómina electrónica y gestión de talento humano en Colombia. $89.900/mes por empleado. Cumple la normatividad laboral sin preocupaciones." />
        <link rel="canonical" href="https://cor29.com/nomina" />
        <meta property="og:title" content="Gestión de Nómina y Talento Humano | COR29 People" />
        <meta property="og:description" content="Nómina electrónica y gestión de talento humano. $89.900/mes por empleado. Todo incluido." />
        <meta property="og:url" content="https://cor29.com/nomina" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "COR29 People - Gestión de Nómina",
            "provider": {
              "@type": "ProfessionalService",
              "name": "COR29",
              "url": "https://cor29.com",
              "telephone": "+573174379260",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CO"
              }
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cor29.com" },
              { "@type": "ListItem", "position": 2, "name": "Nómina", "item": "https://cor29.com/nomina" }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ServiceHero
            badge="COR29 People"
            badgeIcon={Users}
            title="Gestión de Nómina y Talento Humano en"
            titleHighlight="Colombia"
            description="Delega toda la gestión de nómina y talento humano a expertos. Reduce riesgos legales, cumple la normatividad y opera con paz, orden y tranquilidad."
            priceFrom="$89.900"
            priceLabel="COP/mes por empleado"
            primaryCTA="Solicitar información"
            secondaryCTA="WhatsApp"
            onPrimaryCTA={() => handleScheduleClick("hero_nomina")}
            onSecondaryCTA={handleWhatsAppClick}
            stats={[
              { value: "100%", label: "cumplimiento DIAN" },
              { value: "+200", label: "empresas" },
              { value: "0", label: "sanciones" },
            ]}
          />

          <TrustBadges />

          <ServiceFeatures
            title="¿Qué incluye COR29 People?"
            subtitle="Servicio integral para que cumplas correctamente con la normatividad laboral colombiana."
            features={features}
          />

          <ServiceBenefits
            title="Beneficios de tercerizar tu nómina"
            benefits={benefits}
            ctaText="Quiero COR29 People"
            onCTA={() => {
              handleScheduleClick("benefits_nomina");
              handleWhatsAppClick();
            }}
          />

          <ServiceFAQ
            title="Preguntas frecuentes sobre nómina"
            faqs={faqs}
          />

          <ServiceCTA
            title="¿Listo para simplificar tu gestión de nómina?"
            subtitle="Agenda una asesoría gratuita y descubre cómo COR29 People puede ahorrarte tiempo, reducir riesgos y mantener tu nómina siempre al día."
            primaryCTA="Agendar asesoría gratuita"
            secondaryCTA="WhatsApp"
            onPrimaryCTA={() => handleScheduleClick("cta_nomina")}
            onSecondaryCTA={handleWhatsAppClick}
            showPhone
            onPhoneCTA={handlePhoneClick}
          />
        </main>

        <Footer />
        <WhatsAppButton />
        <StickyCTA />
      </div>
    </>
  );
};

export default Nomina;
