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
  ShieldCheck, FileText, Users, AlertTriangle, BookOpen,
  ClipboardCheck, HeartPulse, HardHat, Megaphone, BadgeCheck
} from "lucide-react";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick, trackPhoneClick } from "@/lib/gtm";

const SGSST = () => {
  const features = [
    { icon: FileText, title: "Sistema SG-SST Completo", description: "Diseño e implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo según normatividad." },
    { icon: AlertTriangle, title: "Matriz de Riesgos", description: "Identificación, evaluación y control de peligros y riesgos laborales en tu empresa." },
    { icon: BookOpen, title: "Plan de Capacitación", description: "Capacitaciones obligatorias anuales para todos los niveles de la organización." },
    { icon: ClipboardCheck, title: "Documentación Legal", description: "Toda la documentación requerida por el Decreto 1072 y Resolución 0312." },
    { icon: Users, title: "COPASST y Convivencia", description: "Conformación, capacitación y acompañamiento de comités obligatorios." },
    { icon: HeartPulse, title: "Exámenes Ocupacionales", description: "Coordinación de exámenes médicos de ingreso, periódicos y de egreso." },
    { icon: HardHat, title: "Investigación de Accidentes", description: "Metodología y acompañamiento en investigación de incidentes y accidentes laborales." },
    { icon: Megaphone, title: "Política de SST", description: "Elaboración y comunicación de política de seguridad y salud en el trabajo." },
    { icon: BadgeCheck, title: "Auditoría Anual", description: "Evaluación anual del sistema con plan de mejora continua." },
  ];

  const benefits = [
    "Cumplimiento del Decreto 1072 de 2015",
    "Evita multas de hasta 500 SMMLV",
    "Reducción de accidentes y enfermedades laborales",
    "Protege la reputación de tu empresa",
    "Mejora el clima laboral y productividad",
    "Reduce costos por ausentismo y rotación",
    "Cumplimiento ante inspecciones del MinTrabajo",
    "Tranquilidad jurídica para tu empresa",
  ];

  const faqs = [
    {
      question: "¿Qué empresas están obligadas a implementar el SG-SST?",
      answer: "Todas las empresas en Colombia con uno o más trabajadores deben implementar el SG-SST, sin importar su tamaño, sector económico o tipo de contratación.",
    },
    {
      question: "¿Cuánto tiempo toma implementar el sistema?",
      answer: "Dependiendo del tamaño de la empresa y su nivel de riesgo, la implementación inicial toma entre 2 y 6 semanas. Incluye diagnóstico, documentación y capacitaciones.",
    },
    {
      question: "¿El servicio incluye las capacitaciones obligatorias?",
      answer: "Sí, incluye el plan de capacitación anual con todos los temas exigidos por la normatividad: primeros auxilios, evacuación, uso de EPP, riesgos específicos y más.",
    },
    {
      question: "¿Qué multas puedo recibir por no tener SG-SST?",
      answer: "Las multas van desde 1 hasta 500 SMMLV dependiendo de la gravedad. Además, puede haber cierre temporal del establecimiento y responsabilidad penal en caso de accidentes graves.",
    },
    {
      question: "¿El servicio cubre inspecciones del Ministerio de Trabajo?",
      answer: "Sí, te acompañamos en cualquier visita de inspección del Ministerio de Trabajo, preparando toda la documentación necesaria para una respuesta satisfactoria.",
    },
  ];

  const handleScheduleClick = (location: string) => {
    trackScheduleClick(location);
    trackCTAClick("Solicitar cotización", location);
    window.location.href = "/#contacto";
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("sgsst_page", "SG-SST");
    window.open(
      `https://wa.me/573174379260?text=${encodeURIComponent(
        "Hola, estoy interesado en el servicio de SG-SST (Seguridad y Salud en el Trabajo) de COR29"
      )}`,
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    trackPhoneClick("sgsst_page");
    window.open("tel:+573174379260", "_self");
  };

  return (
    <>
      <Helmet>
        <title>Sistema SG-SST en Colombia | Seguridad y Salud en el Trabajo | COR29</title>
        <meta name="description" content="Implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) en Colombia. Cumple la normatividad, evita multas de hasta 500 SMMLV. Asesoría experta." />
        <link rel="canonical" href="https://cor29.com/sgsst" />
        <meta property="og:title" content="Sistema SG-SST en Colombia | COR29" />
        <meta property="og:description" content="Implementación de SG-SST. Cumple el Decreto 1072, evita multas y protege a tu equipo." />
        <meta property="og:url" content="https://cor29.com/sgsst" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SG-SST COR29 - Seguridad y Salud en el Trabajo",
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
            "description": "Implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo en Colombia según Decreto 1072",
            "areaServed": "Colombia"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cor29.com" },
              { "@type": "ListItem", "position": 2, "name": "SG-SST", "item": "https://cor29.com/sgsst" }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ServiceHero
            badge="Cumple con la normatividad"
            badgeIcon={ShieldCheck}
            title="Sistema SG-SST para Empresas en"
            titleHighlight="Colombia"
            description="Cuida a tu equipo y cumple con la normatividad de Seguridad y Salud en el Trabajo. Implementación completa del Decreto 1072 con asesoría experta y humana."
            primaryCTA="Solicitar cotización"
            secondaryCTA="WhatsApp"
            onPrimaryCTA={() => handleScheduleClick("hero_sgsst")}
            onSecondaryCTA={handleWhatsAppClick}
            stats={[
              { value: "100%", label: "cumplimiento normativo" },
              { value: "+150", label: "empresas protegidas" },
              { value: "0", label: "multas de clientes" },
            ]}
          />

          {/* Warning Alert */}
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
                      No implementar el SG-SST puede generar sanciones económicas de hasta $650 millones, 
                      cierre temporal del establecimiento e incluso responsabilidad penal en caso de accidentes graves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TrustBadges />

          <ServiceFeatures
            title="¿Qué incluye nuestro servicio de SG-SST?"
            subtitle="Implementación completa para cumplir con el Decreto 1072 de 2015 y la Resolución 0312 de 2019."
            features={features}
          />

          <ServiceBenefits
            title="Beneficios de implementar el SG-SST"
            benefits={benefits}
            ctaText="Implementar SG-SST ahora"
            onCTA={() => handleScheduleClick("benefits_sgsst")}
          />

          <ServiceFAQ
            title="Preguntas frecuentes sobre SG-SST"
            faqs={faqs}
          />

          <ServiceCTA
            title="¿Listo para proteger a tu equipo y cumplir la normatividad?"
            subtitle="Agenda una asesoría gratuita y recibe un diagnóstico inicial de tu situación actual frente al SG-SST."
            primaryCTA="Agendar asesoría gratuita"
            secondaryCTA="WhatsApp"
            onPrimaryCTA={() => handleScheduleClick("cta_sgsst")}
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

export default SGSST;
