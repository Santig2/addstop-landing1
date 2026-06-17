import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const getNavLinks = (t) => [
  { label: t('navbar.features'), href: '/#caracteristicas' },
  { label: t('navbar.howItWorks'), href: '/#como-funciona' },
  { label: t('navbar.benefits'), href: '/#competencia' },
  { label: t('navbar.modules'), href: '/#roles' },
]

function Navbar() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <div className="navbar__logo">
          <Link to="/">
            <img src="/ADDSTOP LOG.png" alt="ADDSTOP Logo" />
          </Link>
        </div>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`} aria-label="Navegación principal">
          {getNavLinks(t).map((link) => (
            <a key={link.href} href={link.href} className="navbar__link" onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <Link to="/contacto" className="navbar__cta navbar__cta--mobile" onClick={handleNavClick}>{t('navbar.requestDemo')}</Link>
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__link"
            style={{ fontWeight: 'bold', padding: '0.5rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px' }}
            onClick={toggleLanguage}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <Link to="/contacto" className="navbar__cta">{t('navbar.requestDemo')}</Link>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </div>
    </header>
  )
}

export default Navbar
