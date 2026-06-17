import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


function HowItWorks() {
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
    gsap.from(sectionRef.current.querySelectorAll('.hiw__step'), {
      opacity: 0,
      y: 50,
      stagger: 0.08,
      duration: 0.8,
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
    <section className="hiw" id="como-funciona" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('howItWorks.badge')}</span>
          <h2 className="section-title">{t('howItWorks.title1')}<br />{t('howItWorks.title2')}</h2>
          <p className="section-subtitle">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="hiw__steps" style={{ position: "relative" }}>
            <div className="hiw__progress-container">
              <div className="hiw__progress-line" />
            </div>
          {t('howItWorks.steps', { returnObjects: true }).map((step, i) => (
            <div key={i} className="hiw__step" style={{ paddingLeft: "40px", marginLeft: "16px" }}>
              <div className="hiw__step-number">{`0${i + 1}`}</div>
              {i < 2 && <div className="hiw__connector" aria-hidden="true" />}
              
              <h3 className="hiw__step-title">{step.title}</h3>
              <p className="hiw__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
