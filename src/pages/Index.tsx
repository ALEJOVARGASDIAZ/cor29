import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import TrustBadges from "@/components/landing/TrustBadges";
import ValueProposition from "@/components/landing/ValueProposition";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import ContactForm from "@/components/landing/ContactForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cómo funciona el servicio 100% online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Todo se gestiona de forma digital. Nos envías tus documentos por WhatsApp o email, nosotros procesamos todo y te entregamos reportes claros."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo toma activar mi plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Una vez confirmes tu plan, en menos de 2 horas tendrás todo listo para empezar."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué incluye la asesoría gratuita?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En la asesoría gratuita analizamos tu situación actual, identificamos oportunidades de mejora y te proponemos el plan que mejor se adapte a tus necesidades."
                }
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://cor29.com"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <TrustBadges />
          <Benefits />
          <ValueProposition />
          <Services />
          <Process />
          <Testimonials />
          <FAQ />
          <ContactForm />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyCTA />
      </div>
    </>
  );
};

export default Index;
