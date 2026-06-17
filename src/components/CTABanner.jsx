import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CTABanner() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
    gsap.from(sectionRef.current.querySelectorAll('.cta__title, .cta__subtitle, .cta__actions'), {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })
  }, sectionRef);
    return () => ctx.revert();
  }, [])

  return (
    <section className="cta-banner" id="contacto" ref={sectionRef}>
      <div className="cta-banner__inner">
        <p className="cta__eyebrow">{t('ctaBanner.eyebrow')}</p>
        <h2 className="cta__title">
          {t('ctaBanner.title1')}<br />{t('ctaBanner.title2')}
        </h2>
        <p className="cta__subtitle">{t('ctaBanner.subtitle')}</p>
        <div className="cta__actions">
          <Link to="/contacto" className="btn btn--lime btn--lg">{t('ctaBanner.ctaPrimary')}</Link>
          <a href="https://wa.me/17542549069" className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">
            +1 (754) 254-9069
          </a>
        </div>
        <p className="cta__note">
          <a href="https://addstrategic.com" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>addstrategic.com</a> • 
          <a href="https://instagram.com/addstrategic" target="_blank" rel="noreferrer" style={{color: 'inherit', marginLeft: '10px', textDecoration: 'underline'}}>@addstrategic</a>
        </p>
      </div>
    </section>
  )
}

export default CTABanner
