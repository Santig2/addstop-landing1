import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CompetitorComparison() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelector('.section-header'), {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })
      gsap.from(sectionRef.current.querySelectorAll('.comparison__card'), {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="comparison" id="competencia" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag section-tag--lime">{t('benefits.badge')}</span>
          <h2 className="section-title">
            {t('benefits.title1')}<br />{t('benefits.title2')}
          </h2>
          <p className="section-subtitle">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="benefits__grid">
          {t('benefits.items', { returnObjects: true }).map((item, index) => (
            <div key={index} className="benefits__item">
              <h3 className="benefits__title">{item.title}</h3>
              <p className="benefits__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompetitorComparison
