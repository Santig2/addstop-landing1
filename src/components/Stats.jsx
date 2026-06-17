import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STAT_VALUES = [
  { value: 10, suffix: '+' },
  { value: 100, suffix: '%' },
  { value: 99, suffix: '%' },
  { value: 24, suffix: '/7' },
];


function Stats() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const numRefs = useRef([])

  useEffect(() => {
    let ctx = gsap.context(() => {
    numRefs.current.forEach((el, i) => {
      if (!el) return
      const target = STAT_VALUES[i].value
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate() {
              el.textContent = Math.round(obj.val)
            },
          })
        },
      })
    })

    gsap.from(sectionRef.current.querySelectorAll('.stats__item'), {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
    })
  }, sectionRef);
    return () => ctx.revert();
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <p className="stats__headline">{t('stats.headline')}</p>
      <div className="stats__grid">
        {t('stats.items', { returnObjects: true }).map((s, i) => (
          <div key={i} className="stats__item">
            <div className="stats__number">
              <span ref={(el) => (numRefs.current[i] = el)}>{STAT_VALUES[i].value}</span>
              {STAT_VALUES[i].suffix}
            </div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
