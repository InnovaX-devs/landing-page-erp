import { useReveal } from '../hooks/useReveal'

const PLANS = [
  {
    name: 'Start',
    tagline: 'Para gestionar tu negocio de forma simple y ordenada',
    price: 'desde $40.000 / mes',
    features: [
      'Productos, categorías y marcas',
      'Control de stock',
      'Ventas e historial',
      'Ficha de clientes',
      'Panel con métricas básicas',
    ],
    cta: 'Empezar con Start',
    ctaClass: 'btn-secondary',
    featured: false,
  },
  {
    name: 'Pro',
    tagline: 'Para tener una gestión más completa y controlar cada movimiento',
    price: 'desde $60.000 / mes',
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
    featured: true,
    badge: 'MÁS ELEGIDO',
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
    featured: false,
  },
]

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

      <div className="pricing-grid scrollx reveal" ref={gridRef}>
        {PLANS.map((plan) => (
          <div className={`plan${plan.featured ? ' featured' : ''}`} key={plan.name}>
            {plan.badge && <span className="plan-badge">{plan.badge}</span>}
            <h3>{plan.name}</h3>
            <p className="tagline">{plan.tagline}</p>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="check">→</span> {f}
                </li>
              ))}
            </ul>
            <a href="#contacto" className={`btn ${plan.ctaClass}`}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
      <p className="plan-note">¿necesitás otra combinación de módulos? la armamos con vos.</p>
    </section>
  )
}
