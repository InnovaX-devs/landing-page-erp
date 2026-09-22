export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/innovax-logo.png" alt="" />
          <div>
            <strong>Stockea</strong>
            <p>Gestión para negocios. Un producto de InnovaX.</p>
          </div>
        </div>
        <div className="footer-nav">
          <span className="footer-heading">Producto</span>
          <a href="#modulos">Módulos</a>
          <a href="#planes">Planes</a>
        </div>
        <div className="footer-contact">
          <span className="footer-heading">Contacto</span>
          <a href="mailto:innovax.devs@gmail.com">innovax.devs@gmail.com</a>
          <a href="https://www.innovax-team.com/">innovax-team.com</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Stockea — desarrollado por InnovaX</div>
    </footer>
  )
}
