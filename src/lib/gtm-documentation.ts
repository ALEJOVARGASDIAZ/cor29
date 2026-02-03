/**
 * COR29 Google Ads Tracking Documentation
 * ========================================
 * 
 * Este archivo documenta todos los eventos de dataLayer configurados
 * para importar como conversiones en Google Ads vía GTM.
 * 
 * CONFIGURACIÓN EN GTM:
 * ---------------------
 * 1. Crear un Tag de "Google Ads Conversion Tracking" para cada evento
 * 2. Usar Trigger de tipo "Custom Event" con el nombre del evento
 * 3. Configurar las etiquetas de conversión de Google Ads
 * 
 * 
 * ══════════════════════════════════════════════════════════════════════
 * CONVERSIÓN PRINCIPAL (Lead)
 * ══════════════════════════════════════════════════════════════════════
 * 
 * Evento: lead_submit
 * Descripción: Usuario envía formulario de contacto
 * Trigger GTM: Custom Event = "lead_submit"
 * Valor recomendado: $50,000 COP (ajustar según LTV)
 * 
 * Datos disponibles:
 * - event: "lead_submit"
 * - lead_source: string (origen del formulario)
 * - plan_name: string | null (plan de interés si aplica)
 * 
 * Configuración Google Ads:
 * - Categoría: Lead
 * - Modelo de atribución: Data-driven o Position-based
 * - Contar: Una (evitar duplicados)
 * 
 * 
 * ══════════════════════════════════════════════════════════════════════
 * CONVERSIONES SECUNDARIAS (Micro-conversiones)
 * ══════════════════════════════════════════════════════════════════════
 * 
 * 
 * 1. WHATSAPP CLICK
 * -----------------
 * Evento: whatsapp_click
 * Descripción: Usuario hace clic en botón de WhatsApp
 * Trigger GTM: Custom Event = "whatsapp_click"
 * Valor recomendado: $20,000 COP
 * 
 * Datos disponibles:
 * - event: "whatsapp_click"
 * - click_context: string (ubicación del botón)
 * - plan_name: string | null
 * 
 * Configuración Google Ads:
 * - Categoría: Lead
 * - Usar como: Conversión secundaria (para optimización)
 * 
 * 
 * 2. PHONE CLICK (Llamada)
 * ------------------------
 * Evento: phone_click
 * Descripción: Usuario hace clic en número telefónico
 * Trigger GTM: Custom Event = "phone_click"
 * Valor recomendado: $15,000 COP
 * 
 * Datos disponibles:
 * - event: "phone_click"
 * - click_context: string
 * 
 * Configuración Google Ads:
 * - Categoría: Phone call lead
 * - Ideal para: Mobile call ads
 * 
 * 
 * 3. SCHEDULE CLICK (Agendar)
 * ---------------------------
 * Evento: schedule_click
 * Descripción: Usuario hace clic en "Agendar asesoría"
 * Trigger GTM: Custom Event = "schedule_click"
 * Valor recomendado: $10,000 COP
 * 
 * Datos disponibles:
 * - event: "schedule_click"
 * - cta_location: string
 * 
 * 
 * 4. SERVICE INTEREST
 * -------------------
 * Evento: service_interest
 * Descripción: Usuario muestra interés en servicio específico
 * Trigger GTM: Custom Event = "service_interest"
 * 
 * Datos disponibles:
 * - event: "service_interest"
 * - service_name: string (nombre del servicio)
 * 
 * Uso: Crear audiencias para remarketing por servicio
 * 
 * 
 * 5. CTA CLICK (General)
 * ----------------------
 * Evento: cta_click
 * Descripción: Cualquier clic en CTA principal
 * Trigger GTM: Custom Event = "cta_click"
 * 
 * Datos disponibles:
 * - event: "cta_click"
 * - cta_text: string
 * - cta_location: string
 * 
 * Uso: Análisis de engagement, no como conversión
 * 
 * 
 * ══════════════════════════════════════════════════════════════════════
 * CONFIGURACIÓN RECOMENDADA PARA CAMPAÑAS
 * ══════════════════════════════════════════════════════════════════════
 * 
 * 
 * SEARCH CAMPAIGNS
 * ----------------
 * Conversión principal: lead_submit
 * Conversiones secundarias: whatsapp_click, schedule_click
 * Estrategia de puja: Maximizar conversiones (lead_submit)
 * 
 * 
 * MOBILE CALL ADS
 * ---------------
 * Conversión principal: phone_click
 * Configurar extensión de llamada
 * Tracking adicional: Duración de llamada > 30s (si disponible)
 * 
 * 
 * WHATSAPP CLICK ADS
 * ------------------
 * Conversión principal: whatsapp_click
 * Usar con: Click-to-WhatsApp ads
 * Remarketing: Usuarios que hicieron clic pero no enviaron lead
 * 
 * 
 * ══════════════════════════════════════════════════════════════════════
 * AUDIENCIAS PARA REMARKETING
 * ══════════════════════════════════════════════════════════════════════
 * 
 * 1. Visitantes que no convirtieron (All users - lead_submit)
 * 2. Interesados en Contabilidad (service_interest = "Contabilidad")
 * 3. Interesados en Nómina (service_interest = "COR29 People")
 * 4. Interesados en SG-SST (service_interest = "SG-SST")
 * 5. WhatsApp clickers sin lead (whatsapp_click - lead_submit)
 * 
 * 
 * ══════════════════════════════════════════════════════════════════════
 * TESTING DE EVENTOS
 * ══════════════════════════════════════════════════════════════════════
 * 
 * Para verificar que los eventos funcionan:
 * 
 * 1. Abrir DevTools > Console
 * 2. Escribir: window.dataLayer
 * 3. Realizar la acción (clic en WhatsApp, enviar formulario, etc.)
 * 4. Verificar que el evento aparece en el array dataLayer
 * 
 * En GTM Preview Mode:
 * 1. Activar modo preview en GTM
 * 2. Navegar al sitio
 * 3. Ver los eventos en el panel de debug
 * 4. Confirmar que los triggers se disparan correctamente
 * 
 */

export const CONVERSION_EVENTS = {
  // Conversión principal
  PRIMARY: {
    name: 'lead_submit',
    description: 'Envío de formulario de contacto',
    recommendedValue: 50000, // COP
    category: 'Lead',
  },
  
  // Conversiones secundarias
  SECONDARY: {
    WHATSAPP: {
      name: 'whatsapp_click',
      description: 'Clic en botón de WhatsApp',
      recommendedValue: 20000,
      category: 'Lead',
    },
    PHONE: {
      name: 'phone_click',
      description: 'Clic en número telefónico',
      recommendedValue: 15000,
      category: 'Phone call lead',
    },
    SCHEDULE: {
      name: 'schedule_click',
      description: 'Clic en agendar asesoría',
      recommendedValue: 10000,
      category: 'Lead',
    },
  },
  
  // Eventos de análisis (no conversiones)
  ANALYTICS: {
    SERVICE_INTEREST: 'service_interest',
    CTA_CLICK: 'cta_click',
    PAGE_VIEW: 'page_view',
  },
} as const;
