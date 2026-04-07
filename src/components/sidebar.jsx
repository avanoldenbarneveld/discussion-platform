function Sidebar() {
  return (
    <aside className="home-sidebar" aria-label="Sidebar principal">
      <section className="sidebar-block">
        <h2 className="sidebar-title">Sobre La Portada Tech</h2>
        <p className="sidebar-copy">
          La idea es simple: una sola portada, buenos enlaces y comentarios que
          merezca la pena leer.
        </p>
        <p className="sidebar-note">Acceso por invitación.</p>
      </section>

      <section className="sidebar-block">
        <h2 className="sidebar-title">Acciones</h2>
        <div className="sidebar-actions">
          <button type="button" className="sidebar-button" disabled>
            Iniciar sesión
          </button>
          <button type="button" className="sidebar-button" disabled>
            Enviar enlace
          </button>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar
