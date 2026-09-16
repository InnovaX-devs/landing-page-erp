import { useReveal } from '../hooks/useReveal'

const MODULES = [
  {
    tag: '01 · STOCK',
    title: 'Productos y stock',
    text: 'Categorías, marcas, precios e historial de precios en un solo lugar.',
  },
  {
    tag: '02 · VENTAS',
    title: 'Ventas y presupuestos',
    text: 'Cargá ventas, cotizá presupuestos y llevá el historial completo por cliente.',
  },
  {
    tag: '03 · COMPRAS',
    title: 'Compras y proveedores',
    text: 'Registrá compras y mantené el contacto con cada proveedor ordenado.',
  },
  {
    tag: '04 · CLIENTES',
    title: 'Cuenta corriente',
    text: 'Fichas de cliente con historial de deuda y cobros.',
  },
  {
    tag: '05 · FINANZAS',
    title: 'Caja y gastos',
    text: 'Cuentas, movimientos de caja, gastos por categoría y flujo de caja.',
  },
  {
    tag: '06 · REPORTES',
    title: 'Métricas y PDF',
    text: 'KPIs, productos más vendidos y exportación en PDF cuando la necesites.',
  },
]

export default function Modules() {
  const introRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="section" id="modulos">
      <div className="section-intro reveal" ref={introRef}>
        <div>
          <p className="section-label">// QUÉ INCLUYE</p>
          <h2>Un módulo para cada parte del negocio.</h2>
        </div>
        <p>
          Todo conectado: lo que pasa en ventas se refleja en stock, y lo que pasa en compras se
          refleja en caja.
        </p>
      </div>

      <div className="modules-grid reveal" ref={gridRef}>
        {MODULES.map((m) => (
          <div className="module" key={m.title}>
            <p className="tag">{m.tag}</p>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
