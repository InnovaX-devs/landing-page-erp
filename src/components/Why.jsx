import { useReveal } from '../hooks/useReveal'

const REASONS = [
  {
    idx: '01',
    title: 'Implementación guiada',
    text: 'Cargamos tus productos y clientes iniciales con vos para que arranques operando, no configurando.',
  },
  {
    idx: '02',
    title: 'Crece con tu negocio',
    text: 'Cambiás de plan cuando lo necesites, sin perder datos ni migrar de sistema.',
  },
  {
    idx: '03',
    title: 'Soporte con contexto',
    text: 'Hablás con el mismo equipo que construyó el sistema, no con un call center genérico.',
  },
  {
    idx: '04',
    title: 'Tus datos, siempre tuyos',
    text: 'Podés exportar tu información cuando quieras — no queda encerrada en el sistema.',
  },
]

export default function Why() {
  const introRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="section">
      <div className="section-intro reveal" ref={introRef}>
        <div>
          <p className="section-label">// POR QUÉ INNOVAX</p>
          <h2>No vendemos una plantilla.</h2>
        </div>
        <p>Acompañamos la implementación de punta a punta, no solo la entrega del sistema.</p>
      </div>

      <div className="why-grid reveal" ref={gridRef}>
        {REASONS.map((r) => (
          <div className="why-item" key={r.idx}>
            <span className="idx">{r.idx}</span>
            <div>
              <h4>{r.title}</h4>
              <p>{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
