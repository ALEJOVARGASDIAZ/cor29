// Google Tag Manager DataLayer Events for COR29

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

// Initialize dataLayer if not exists
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// Push event to dataLayer
const pushEvent = (event: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(event);
  }
};

// Lead form submission
export const trackLeadSubmit = (formData: {
  origen: string;
  planName?: string;
}) => {
  pushEvent({
    event: 'lead_submit',
    lead_source: formData.origen,
    plan_name: formData.planName || null,
  });
};

// WhatsApp click
export const trackWhatsAppClick = (context: string, planName?: string) => {
  pushEvent({
    event: 'whatsapp_click',
    click_context: context,
    plan_name: planName || null,
  });
};

// Phone call click
export const trackPhoneClick = (context: string) => {
  pushEvent({
    event: 'phone_click',
    click_context: context,
  });
};

// Schedule/CTA click
export const trackScheduleClick = (ctaLocation: string) => {
  pushEvent({
    event: 'schedule_click',
    cta_location: ctaLocation,
  });
};

// Service interest
export const trackServiceInterest = (serviceName: string) => {
  pushEvent({
    event: 'service_interest',
    service_name: serviceName,
  });
};

// Page view (for SPA navigation)
export const trackPageView = (pagePath: string, pageTitle: string) => {
  pushEvent({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle,
  });
};

// CTA button clicks
export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  pushEvent({
    event: 'cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation,
  });
};
