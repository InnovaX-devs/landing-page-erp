export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/innovax-logo.png" alt="InnovaX" />
          <div>
            <strong>InnovaX</strong>
            <p>Gestión para negocios.</p>
          </div>
        </div>
        <div className="footer-nav">
          <span className="footer-heading">Producto</span>
          <a href="#modulos">Módulos</a>
          <a href="#planes">Planes</a>
        </div>
        <div className="footer-contact">
          <span className="footer-heading">Contacto</span>
          <a href="mailto:hola@innovax-team.com">hola@innovax-team.com</a>
          <a href="https://www.innovax-team.com/">innovax-team.com</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 InnovaX</div>
    </footer>
  )
}
