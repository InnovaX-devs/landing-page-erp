import { useReveal } from '../hooks/useReveal'

const PLANS = [
  {
    name: 'Básico',
    tagline: 'Para arrancar a ordenar el día a día',
    price: 'desde $ / mes',
    features: [
      'Productos, categorías y marcas',
      'Control de stock',
      'Ventas e historial',
      'Ficha de clientes',
      'Panel con métricas básicas',
      '1 usuario',
    ],
    cta: 'Empezar con Básico',
    ctaClass: 'btn-secondary',
    featured: false,
  },
  {
    name: 'Intermedio',
    tagline: 'Para negocios con compras, cuenta corriente y caja activa',
    price: 'desde $ / mes',
    features: [
      'Todo lo de Básico',
      'Compras y proveedores',
      'Presupuestos para clientes',
      'Cuenta corriente y cobro de deuda',
      'Caja, gastos y flujo de caja',
      'Reportes exportables en PDF',
      'Varios usuarios con roles',
    ],
    cta: 'Empezar con Intermedio',
    ctaClass: 'btn-grad',
    featured: true,
    badge: 'MÁS ELEGIDO',
  },
  {
    name: 'A Medida',
    tagline: 'Para operaciones con necesidades propias',
    price: 'a cotizar',
    features: [
      'Todo lo de Intermedio',
      'Adaptado a tu rubro y flujo de trabajo',
      'Integraciones (facturación, pagos, WhatsApp)',
      'Multi-sucursal o multi-depósito',
      'Marca propia (white-label)',
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
          <h2>Elegí según el momento de tu negocio.</h2>
        </div>
        <p>
          Empezá simple y sumá módulos cuando el negocio lo pida. Precios orientativos, ajustables
          según usuarios y volumen.
        </p>
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
