import { useEffect, useState } from "react";

type ABVariant = "A" | "B";

interface ABTestConfig {
  heroVariant: ABVariant;
  ctaVariant: ABVariant;
}

/**
 * Hook para A/B testing basado en URL params o localStorage
 * 
 * Uso:
 * - ?hero=A o ?hero=B para forzar variante de hero
 * - ?cta=A o ?cta=B para forzar variante de CTA
 * - Sin params: asignación aleatoria persistente
 * 
 * Ejemplo URLs para Google Ads:
 * - https://cor29.com/?hero=A&cta=A (Control)
 * - https://cor29.com/?hero=B&cta=B (Variante)
 */
export const useABTest = (): ABTestConfig => {
  const [config, setConfig] = useState<ABTestConfig>({
    heroVariant: "A",
    ctaVariant: "A",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Obtener variantes de URL o localStorage
    const getVariant = (key: string, storageKey: string): ABVariant => {
      const urlValue = urlParams.get(key)?.toUpperCase();
      if (urlValue === "A" || urlValue === "B") {
        localStorage.setItem(storageKey, urlValue);
        return urlValue;
      }
      
      const stored = localStorage.getItem(storageKey);
      if (stored === "A" || stored === "B") {
        return stored;
      }
      
      // Asignación aleatoria para nuevos usuarios
      const random: ABVariant = Math.random() > 0.5 ? "A" : "B";
      localStorage.setItem(storageKey, random);
      return random;
    };

    setConfig({
      heroVariant: getVariant("hero", "ab_hero"),
      ctaVariant: getVariant("cta", "ab_cta"),
    });

    // Enviar variante a dataLayer para análisis
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "ab_test_assignment",
        hero_variant: getVariant("hero", "ab_hero"),
        cta_variant: getVariant("cta", "ab_cta"),
      });
    }
  }, []);

  return config;
};

/**
 * Contenido de variantes para Hero
 */
export const HERO_VARIANTS = {
  A: {
    badge: "Más de 500 empresarios confían en nosotros",
    headline: "Contabilidad y gestión empresarial",
    headlineHighlight: "100% online en Colombia",
    subheadline: "Con más de 14 años de experiencia, simplificamos tu gestión empresarial con un equipo 100% exclusivo para tu negocio. Planes desde $199.900/mes.",
    differentiator: "Equipo contable exclusivo para tu empresa",
  },
  B: {
    badge: "Respuesta en menos de 3 horas",
    headline: "Delega tu contabilidad y",
    headlineHighlight: "enfócate en crecer",
    subheadline: "Un contador público dedicado, software incluido, y la tranquilidad de cumplir con la DIAN. Sin sorpresas, sin estrés. Todo 100% online.",
    differentiator: "Cumplimiento garantizado con la DIAN",
  },
};

/**
 * Contenido de variantes para CTAs
 */
export const CTA_VARIANTS = {
  A: {
    primary: "Agenda tu asesoría gratuita",
    secondary: "Escríbenos por WhatsApp",
  },
  B: {
    primary: "Habla con un contador ahora",
    secondary: "Cotiza tu plan gratis",
  },
};
