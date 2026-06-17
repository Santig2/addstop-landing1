import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', duration: 0.25, ease: 'cubic-bezier(0.32, 0.72, 0, 1)' })
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.25, ease: 'cubic-bezier(0.32, 0.72, 0, 1)' })
    }
  }, [isOpen])

  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{question}</span>
        <svg 
          className="faq__icon" 
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="faq__answer-wrapper" ref={contentRef} style={{ height: 0, overflow: 'hidden' }}>
        <div className="faq__answer">
          {answer}
        </div>
      </div>
    </div>
  )
}

function FAQ() {
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
      gsap.from(sectionRef.current.querySelectorAll('.faq__item'), {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
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
    <section className="faq" id="faq" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag section-tag--lime">{t('faq.badge', 'Preguntas Frecuentes')}</span>
          <h2 className="section-title">
            {t('faq.title1', 'Resolvemos tus dudas')} <br /> {t('faq.title2', 'sobre ADDSPOT')}
          </h2>
          <p className="section-subtitle">
            {t('faq.subtitle', 'Todo lo que necesitas saber sobre la implementación y operación diaria.')}
          </p>
        </div>

        <div className="faq__list">
          {Object.values(t('faq.items', { returnObjects: true }) || {}).map((item, index) => (
            <FAQItem key={index} question={item.question || item} answer={item.answer || ''} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
