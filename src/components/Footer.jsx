import { useTranslation } from 'react-i18next'
const getFooterLinks = (t) => ({
  [t('footer.col1')]: [
    { label: t('footer.links.features'), href: '/#caracteristicas' },
    { label: t('footer.links.modules'), href: '/#modulos' },
    { label: t('footer.links.howItWorks'), href: '/#como-funciona' },
    { label: t('footer.links.benefits'), href: '/#beneficios' },
  ],
  [t('footer.col2')]: [
    { label: t('footer.links.about'), href: '#' },
    { label: t('footer.links.contact'), href: '/contacto' },
    { label: t('footer.links.demo'), href: '/contacto' },
  ],
  [t('footer.col3')]: [
    { label: t('footer.links.privacy'), href: '#' },
    { label: t('footer.links.terms'), href: '#' },
  ],
});


function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <a href="https://addstrategic.com" className="footer__logo">
            <img src="/addstrategic-blanco.png" alt="ADDNEXO by ADD Strategic" />
          </a>
          <p className="footer__tagline">
            {t('footer.tagline')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            <a href="https://addstrategic.com" target="_blank" rel="noreferrer" className="footer__email">
              addstrategic.com
            </a>
            <a href="mailto:addstrategicbusiness@gmail.com" className="footer__email">
              addstrategicbusiness@gmail.com
            </a>
            <a href="https://wa.me/17542549069" target="_blank" rel="noreferrer" className="footer__email">
              +1 754 254 9069
            </a>
            <a href="https://instagram.com/addstrategic" target="_blank" rel="noreferrer" className="footer__email">
              Instagram: @addstrategic
            </a>
          </div>
        </div>

        <div className="footer__links">
          {Object.entries(getFooterLinks(t)).map(([group, links]) => (
            <div key={group} className="footer__col">
              <h4 className="footer__col-title">{group}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} <a href="https://addstrategic.com" target="_blank" rel="noreferrer">ADDSTRATEGIC LLC</a> - {t('footer.copyright1')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
