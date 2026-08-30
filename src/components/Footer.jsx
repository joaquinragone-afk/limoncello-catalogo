function Footer() {
  return (
    <footer className="footer-teggianese-light">
      <div className="footer-container">
        <div className="footer-columna brand-col">
          <h2>IL TEGGIANESE</h2>
          <p>El origen intacto.</p>
        </div>

        <div className="footer-columna contact-col">
          <h3>CONTACTO</h3>
          <ul>
            <li>
              <span>📍</span> Paraná, Entre Ríos
            </li>
            <li>
              <span>📞</span> +54 9 343 463-0494
            </li>
            <li>
              <span>✉️</span> contacto@ilteggianese.com
            </li>
          </ul>
        </div>

        <div className="footer-columna social-col">
          <h3>SEGUINOS</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/limoncello_ilteggianese"
              target="_blank"
              rel="noreferrer"
            >
              @limoncello_ilteggianese
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Il Teggianese. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
