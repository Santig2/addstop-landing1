import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


function Problems() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
    gsap.from(sectionRef.current.querySelector('.problems__header'), {
      opacity: 0,
      x: -40,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })
    gsap.from(sectionRef.current.querySelectorAll('.problems__item'), {
      opacity: 0,
      x: 30,
      stagger: 0.07,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    })
  }, sectionRef);
    return () => ctx.revert();
  }, [])

  return (
    <section className="problems" ref={sectionRef}>
      <div className="container problems__inner">

        <div className="problems__header">
          <span className="section-tag section-tag--lime">{t('problems.badge')}</span>
          <h2 className="section-title section-title--white">
            {t('problems.title1')}<br />{t('problems.title2')}
          </h2>
          <p className="section-subtitle section-subtitle--muted">
            {t('problems.subtitle')}
          </p>
          <a href="#contacto" className="btn btn--lime" style={{ marginTop: '2rem', display: 'inline-block' }}>
            {t('problems.cta')}
          </a>
        </div>

        <ul className="problems__list">
          {t('problems.items', { returnObjects: true }).map((p, i) => (
            <li key={i} className="problems__item">
              <span className="problems__x" aria-hidden="true">✕</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Problems
