// Google Tag Manager DataLayer Events for COR29
// See src/lib/gtm-documentation.ts for full conversion setup guide

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

// Initialize dataLayer if not exists
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// Push event to dataLayer with timestamp
const pushEvent = (event: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      ...event,
      event_timestamp: new Date().toISOString(),
    });
  }
};

/**
 * CONVERSIÓN PRINCIPAL
 * Lead form submission - usar como conversión principal en Google Ads
 */
export const trackLeadSubmit = (formData: {
  origen: string;
  planName?: string;
}) => {
  pushEvent({
    event: 'lead_submit',
    lead_source: formData.origen,
    plan_name: formData.planName || null,
    conversion_value: 50000, // COP - ajustar según LTV real
    currency: 'COP',
  });
};

/**
 * CONVERSIÓN SECUNDARIA
 * WhatsApp click - usar para WhatsApp Click Ads
 */
export const trackWhatsAppClick = (context: string, planName?: string) => {
  pushEvent({
    event: 'whatsapp_click',
    click_context: context,
    plan_name: planName || null,
    conversion_value: 20000,
    currency: 'COP',
  });
};

/**
 * CONVERSIÓN SECUNDARIA
 * Phone call click - usar para Mobile Call Ads
 */
export const trackPhoneClick = (context: string) => {
  pushEvent({
    event: 'phone_click',
    click_context: context,
    conversion_value: 15000,
    currency: 'COP',
  });
};

/**
 * CONVERSIÓN SECUNDARIA
 * Schedule/CTA click - engagement tracking
 */
export const trackScheduleClick = (ctaLocation: string) => {
  pushEvent({
    event: 'schedule_click',
    cta_location: ctaLocation,
    conversion_value: 10000,
    currency: 'COP',
  });
};

/**
 * EVENTO DE ANÁLISIS
 * Service interest - para audiencias de remarketing
 */
export const trackServiceInterest = (serviceName: string) => {
  pushEvent({
    event: 'service_interest',
    service_name: serviceName,
  });
};

/**
 * EVENTO DE ANÁLISIS
 * Page view (for SPA navigation)
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  pushEvent({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * EVENTO DE ANÁLISIS
 * CTA button clicks - para análisis de engagement
 */
export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  pushEvent({
    event: 'cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation,
  });
};

/**
 * EVENTO DE ANÁLISIS
 * Scroll depth tracking
 */
export const trackScrollDepth = (percentage: number) => {
  pushEvent({
    event: 'scroll_depth',
    scroll_percentage: percentage,
  });
};

/**
 * EVENTO DE ANÁLISIS
 * Time on page tracking
 */
export const trackTimeOnPage = (seconds: number) => {
  pushEvent({
    event: 'time_on_page',
    time_seconds: seconds,
  });
};
