import { useReveal } from '../hooks/useReveal'

export default function Cta() {
  const ref = useReveal()

  return (
    <section className="cta-section" id="contacto">
      <div className="cta reveal" ref={ref}>
        <div>
          <h2>¿Lo vemos funcionando?</h2>
          <p>Coordinamos una demo de 20 minutos con tu tipo de negocio como ejemplo.</p>
        </div>
        <a href="mailto:hola@innovax-team.com" className="btn btn-grad">
          Escribir a InnovaX
        </a>
      </div>
    </section>
  )
}
