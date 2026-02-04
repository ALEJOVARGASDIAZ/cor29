import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import StickyCTA from "@/components/landing/StickyCTA";
import TrustBadges from "@/components/landing/TrustBadges";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServicePlans from "@/components/services/ServicePlans";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import { 
  FileText, Calculator, BarChart3, Receipt, Headphones, 
  Monitor, PieChart, FileCheck, Clock, Shield 
} from "lucide-react";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick, trackPhoneClick } from "@/lib/gtm";

const Contabilidad = () => {
  const features = [
    { icon: FileText, title: "Contabilización de Facturas", description: "Registro sistemático de todas tus facturas de compra y venta en el sistema contable." },
    { icon: Receipt, title: "Facturación Electrónica", description: "Emisión de facturas electrónicas y documento soporte DIAN incluido sin costo adicional." },
    { icon: Calculator, title: "Declaraciones Tributarias", description: "IVA, Retención, Renta, ICA y todas las declaraciones obligatorias de tu negocio." },
    { icon: BarChart3, title: "Estados Financieros", description: "Balance General, Estado de Resultados y notas contables mensuales." },
    { icon: Headphones, title: "Contador Dedicado", description: "Un contador público virtual asignado exclusivamente para atender tus consultas." },
    { icon: Monitor, title: "Software Contable", description: "Acceso a plataforma de facturación electrónica con capacitación incluida." },
    { icon: PieChart, title: "Informes de Gestión", description: "Reportes mensuales con indicadores clave para la toma de decisiones." },
    { icon: FileCheck, title: "Auditoría Contable", description: "Revisión y validación de tu información contable antes de presentar declaraciones." },
    { icon: Clock, title: "Cumplimiento en Fechas", description: "Garantía de entrega puntual de todas las obligaciones tributarias." },
  ];

  const benefits = [
    "Ahorra hasta 80% vs contador tradicional",
    "Cumplimiento total con la normatividad DIAN",
    "Acceso 24/7 a tu información contable",
    "Software de facturación electrónica incluido",
    "Sin costos ocultos ni sorpresas",
    "Escalabilidad automática según tu crecimiento",
    "Soporte prioritario en menos de 3 horas",
    "Tranquilidad total en temas tributarios",
  ];

  const plans = [
    { 
      name: "Emprendedor", 
      price: "$199.900/mes", 
      description: "Ventas hasta $9.000.000/mes",
      features: [
        "Contabilidad completa",
        "Facturación electrónica",
        "1 declaración de IVA",
        "Estados financieros",
        "Soporte WhatsApp",
      ],
    },
    { 
      name: "PYME", 
      price: "$352.700/mes", 
      description: "Ventas hasta $19.000.000/mes",
      features: [
        "Todo del plan Emprendedor",
        "Retención en la fuente",
        "Declaración de renta",
        "Informes de gestión",
        "Contador dedicado",
      ],
      highlighted: true,
    },
    { 
      name: "Pro", 
      price: "$647.900/mes", 
      description: "Ventas hasta $39.000.000/mes",
      features: [
        "Todo del plan PYME",
        "Declaración de ICA",
        "Auditoría trimestral",
        "Asesoría tributaria",
        "Prioridad en soporte",
      ],
    },
    { 
      name: "Senior", 
      price: "$987.200/mes", 
      description: "Ventas hasta $100.000.000/mes",
      features: [
        "Todo del plan Pro",
        "Múltiples sucursales",
        "Informes ejecutivos",
        "Reuniones mensuales",
        "Soporte telefónico",
      ],
    },
  ];

  const faqs = [
    {
      question: "¿Qué documentos necesito para empezar?",
      answer: "Solo necesitas tu RUT, cámara de comercio y acceso a tu facturación actual. Nosotros nos encargamos del resto, incluyendo la migración de tu información contable si vienes de otro contador.",
    },
    {
      question: "¿Cuánto tiempo toma activar el servicio?",
      answer: "En menos de 48 horas tienes todo listo: software configurado, contador asignado y acceso a tu plataforma. El proceso es 100% digital.",
    },
    {
      question: "¿Puedo cambiar de plan si mi negocio crece?",
      answer: "Sí, los planes se ajustan automáticamente según tus ventas mensuales. No hay penalidades por cambiar de plan.",
    },
    {
      question: "¿Cómo funciona el soporte?",
      answer: "Tienes acceso directo a tu contador por WhatsApp con respuesta garantizada en menos de 3 horas en horario laboral. También puedes agendar videollamadas cuando lo necesites.",
    },
    {
      question: "¿Qué pasa si la DIAN me hace un requerimiento?",
      answer: "Nuestro equipo te acompaña en todo el proceso de respuesta a requerimientos sin costo adicional. Tu tranquilidad está garantizada.",
    },
  ];

  const handleScheduleClick = (location: string) => {
    trackScheduleClick(location);
    trackCTAClick("Agenda tu asesoría gratuita", location);
    window.location.href = "/#contacto";
  };

  const handleWhatsAppClick = (planName?: string) => {
    trackWhatsAppClick("contabilidad_page", planName);
    window.open(
      `https://wa.me/573174379260?text=${encodeURIComponent(
        planName 
          ? `Hola, estoy interesado en el Plan ${planName} de Contabilidad de COR29`
          : "Hola, quiero información sobre el servicio de Contabilidad de COR29"
      )}`,
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    trackPhoneClick("contabilidad_page");
    window.open("tel:+573174379260", "_self");
  };

  return (
    <>
      <Helmet>
        <title>Contabilidad Online para Empresas en Colombia | COR29</title>
        <meta name="description" content="Servicio de contabilidad 100% online para empresas en Colombia. Planes desde $199.900/mes. Facturación electrónica incluida. +500 clientes confían en nosotros." />
        <link rel="canonical" href="https://cor29.com/contabilidad" />
        <meta property="og:title" content="Contabilidad Online para Empresas en Colombia | COR29" />
        <meta property="og:description" content="Servicio de contabilidad 100% online. Facturación electrónica incluida. Planes desde $199.900/mes." />
        <meta property="og:url" content="https://cor29.com/contabilidad" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Contabilidad Online COR29",
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cor29.com" },
              { "@type": "ListItem", "position": 2, "name": "Contabilidad", "item": "https://cor29.com/contabilidad" }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ServiceHero
            badge="+500 empresas en Colombia confían en nosotros"
            title="Contabilidad Online para Empresas en"
            titleHighlight="Colombia"
            description="Delega tu contabilidad a expertos certificados. Software de facturación electrónica incluido, estados financieros mensuales y un contador dedicado para tu negocio. Todo 100% online."
            priceFrom="$199.900/mes"
            priceLabel="Todo incluido"
            primaryCTA="Agenda tu asesoría gratuita"
            secondaryCTA="Escríbenos por WhatsApp"
            onPrimaryCTA={() => handleScheduleClick("hero_contabilidad")}
            onSecondaryCTA={() => handleWhatsAppClick()}
            stats={[
              { value: "4.9/5", label: "satisfacción" },
              { value: "+500", label: "clientes activos" },
              { value: "<3h", label: "tiempo de respuesta" },
            ]}
          />

          <TrustBadges />

          <ServiceFeatures
            title="¿Qué incluye nuestro servicio de contabilidad?"
            subtitle="Todo lo que necesitas para mantener tu contabilidad al día y cumplir con tus obligaciones fiscales sin preocupaciones."
            features={features}
          />

          <ServicePlans
            title="Planes adaptados a tu negocio"
            subtitle="Elige el plan que mejor se adapte a tus ventas mensuales"
            plans={plans}
            onSelectPlan={(planName) => handleWhatsAppClick(planName)}
          />

          <ServiceBenefits
            title="Beneficios de elegir COR29"
            benefits={benefits}
            ctaText="Solicitar diagnóstico gratuito"
            onCTA={() => handleScheduleClick("benefits_contabilidad")}
          />

          <ServiceFAQ
            title="Preguntas frecuentes sobre contabilidad"
            faqs={faqs}
          />

          <ServiceCTA
            title="¿Listo para simplificar tu contabilidad?"
            subtitle="Agenda una asesoría gratuita y descubre cómo podemos ayudarte a cumplir con tus obligaciones tributarias sin complicaciones."
            primaryCTA="Agendar asesoría gratuita"
            secondaryCTA="WhatsApp"
            onPrimaryCTA={() => handleScheduleClick("cta_contabilidad")}
            onSecondaryCTA={() => handleWhatsAppClick()}
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

export default Contabilidad;
