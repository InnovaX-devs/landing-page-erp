export default function Nav() {
  return (
    <nav className="top">
      <a href="#" className="brand">
        <img src="/innovax-logo.png" alt="" />
        <span className="brand-name">STOCKEA</span>
        <span className="brand-by">by InnovaX</span>
      </a>
      <div className="navlinks">
        <a href="#modulos" className="nav-desktop-only">
          Producto
        </a>
        <a href="#planes" className="nav-desktop-only">
          Planes
        </a>
        <a href="#contacto" className="nav-desktop-only">
          Contacto
        </a>
        <a href="#contacto" className="nav-button">
          Pedir demo
        </a>
      </div>
    </nav>
  )
}