import { useReveal } from '../hooks/useReveal'

const WHATSAPP_NUMBER = '5493584257936'

const PLANS = [
  {
    name: 'Start',
    tagline: 'Para gestionar tu negocio de forma simple y ordenada',
    oldPrice: '$55.000',
    price: '$40.000 / mes',
    discount: '-27%',
    features: [
      'Productos, categorías y marcas',
      'Control de stock',
      'Ventas e historial',
      'Ficha de clientes',
      'Panel con métricas básicas',
    ],
    cta: 'Empezar con Start',
    ctaClass: 'btn-secondary',
    tier: 'start',
    featured: false,
    whatsappMessage:
      'Hola! Quiero empezar con el plan Start ($40.000/mes). ¿Cómo seguimos?',
  },
  {
    name: 'Pro',
    tagline: 'Para tener una gestión más completa y controlar cada movimiento',
    oldPrice: '$85.000',
    price: '$60.000 / mes',
    discount: '-30%',
    features: [
      'Todas las funcionalidades del plan Start',
      'Compras y proveedores',
      'Presupuestos para clientes',
      'Cuenta corriente y cobro de deuda',
      'Caja, gastos y flujo de caja',
      'Reportes exportables en PDF',
    ],
    cta: 'Empezar con Pro',
    ctaClass: 'btn-grad',
    tier: 'pro',
    featured: true,
    badge: 'MÁS ELEGIDO',
    whatsappMessage:
      'Hola! Quiero empezar con el plan Pro ($60.000/mes). ¿Cómo seguimos?',
  },
  {
    name: 'Custom',
    tagline: 'Para adaptar el sistema a la forma en que trabaja tu negocio',
    price: 'a cotizar',
    features: [
      'Todas las funcionalidades del plan Pro',
      'Adaptado a tu rubro y flujo de trabajo',
      'Integraciones (facturación, pagos, WhatsApp)',
      'Multi-sucursal',
      'Marca propia',
      'Soporte dedicado y onboarding asistido',
    ],
    cta: 'Hablar con InnovaX',
    ctaClass: 'btn-secondary',
    tier: 'custom',
    featured: false,
    whatsappMessage:
      'Hola! Me interesa el plan Custom, quiero cotizar una solución a medida para mi negocio.',
  },
]

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function Pricing() {
  const introRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="section" id="planes">
      <div className="section-intro reveal" ref={introRef}>
        <div>
          <p className="section-label">// PLANES</p>
          <h2>Un plan para cada etapa de tu negocio.</h2>
        </div>
      </div>

      <div className="pricing-grid reveal" ref={gridRef}>
        {PLANS.map((plan) => (
          <div
            className={`plan tier-${plan.tier}${plan.featured ? ' featured' : ''}`}
            key={plan.name}
          >
            {plan.badge && <span className="plan-badge">{plan.badge}</span>}

            <h3>{plan.name}</h3>

            <p className="tagline">{plan.tagline}</p>

            <div className="price">
              <span className="price-now">{plan.price}</span>

              {plan.oldPrice && (
                <span className="price-old-row">
                  <span className="price-old">{plan.oldPrice}</span>

                  {plan.discount && (
                    <span className="price-badge">{plan.discount}</span>
                  )}
                </span>
              )}
            </div>

            <ul>
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="check">→</span> {f}
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppLink(plan.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${plan.ctaClass}`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="plan-note">
        ¿necesitás otra combinación de módulos? la armamos con vos.
      </p>
    </section>
  )
}
