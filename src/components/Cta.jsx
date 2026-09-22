import { useReveal } from '../hooks/useReveal'

const WHATSAPP_NUMBER = '5493584257936'

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function Cta() {
  const ref = useReveal()

  const whatsappMessage =
    'Hola! Me interesa conocer más sobre Stockea y quisiera coordinar una demo para ver cómo podría adaptarse a mi negocio. ¿Cómo seguimos?'

  return (
    <section className="cta-section" id="contacto">
      <div className="cta reveal" ref={ref}>
        <div>
          <h2>¿Lo vemos funcionando?</h2>
          <p>
            Coordinamos una demo de 20 minutos con tu tipo de negocio como
            ejemplo.
          </p>
        </div>

        <a
          href={buildWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-grad"
        >
          Escribir a InnovaX
        </a>
      </div>
    </section>
  )
}