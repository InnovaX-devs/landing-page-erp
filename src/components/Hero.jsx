export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-glow cyan-glow"></div>
      <div className="hero-glow purple-glow"></div>

      <div className="hero-content reveal visible">
        <p className="eyebrow">
          <span></span>STOCKEA · SISTEMA DE GESTIÓN
        </p>
        <h1 className="hero-title">
          Todo tu negocio, en un solo <span className="accent">lugar</span>
        </h1>
        <p className="hero-description">
          Stock, ventas, compras, clientes y caja en un solo sistema. Olvidate de las planillas y mirá tu negocio en tiempo real.
        </p>
        <div className="hero-buttons">
          <a href="#planes" className="btn btn-primary">
            Ver planes
          </a>
          <a href="#contacto" className="btn btn-secondary">
            Pedir una demo
          </a>
        </div>
      </div>

      <div className="hero-visual reveal visible">
        <div className="mock">
          <div className="mock-bar">
            <div className="mock-dot r"></div>
            <div className="mock-dot y"></div>
            <div className="mock-dot g"></div>
            <span className="mock-title">Stockea</span>
          </div>
          <div className="mock-cards">
            <div className="mock-card">
              <div className="label">VENTAS HOY</div>
              <div className="value grad">$284.500</div>
            </div>
            <div className="mock-card">
              <div className="label">CAJA DISPONIBLE</div>
              <div className="value">$1.240.900</div>
            </div>
          </div>
          <div className="mock-row">
            <span>Stock bajo — 3 productos</span>
            <span className="tag">REVISAR</span>
          </div>
          <div className="mock-row">
            <span>Presupuesto #0412 enviado</span>
            <span className="tag">NUEVO</span>
          </div>
        </div>
      </div>
    </header>
  )
}
