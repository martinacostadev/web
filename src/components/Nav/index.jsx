import { useState } from "preact/hooks";
import Styles from "./styles.module.scss";

const navLinks = [
  { href: "/experiencia", label: "Experiencia" },
  // { href: "/proyectos", label: "Proyectos" },
  // { href: "/blog", label: "Blog" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/cafecito", label: "Cafecito" },
  { href: "/contacto", label: "Contacto" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <nav className={Styles.nav}>
      <div className={Styles.navContent}>
        <a className={Styles.logolink} href="/">
          martinacostadev
        </a>

        <div className={Styles.links}>
          {navLinks.map(({ href, label }) => (
            <a className={Styles.link} href={href}>{label}</a>
          ))}
        </div>

        <div className={Styles.actions}>
          <button
            className={Styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            type="button"
          >
            <svg className={Styles.sunIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg className={Styles.moonIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <button
            className={Styles.burger}
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`${Styles.overlay} ${menuOpen ? Styles.overlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile sidebar */}
      <div className={`${Styles.sidebar} ${menuOpen ? Styles.sidebarOpen : ""}`}>
        <div className={Styles.sidebarHeader}>
          <span className={Styles.sidebarTitle}>martinacostadev</span>
          <button
            className={Styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className={Styles.sidebarLinks}>
          {navLinks.map(({ href, label }) => (
            <a
              className={Styles.sidebarLink}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default Nav;
