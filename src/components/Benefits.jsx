import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import ComparisonCarousel from './ComparisonCarousel'

function Benefits() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const contrastRef = useRef(null)
  const isInteracting = useRef(false)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header
      gsap.from(sectionRef.current.querySelector('.section-header'), {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
      })

      // Carousel fade in
      gsap.from(sectionRef.current.querySelector('.comparison-carousel'), {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: '.comparison-carousel', start: 'top 75%', once: true }
      })

      // Contrast Blocks Stagger
      gsap.from(sectionRef.current.querySelectorAll('.contrast__item'), {
        opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)', stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contrast-grid', start: 'top 80%', once: true }
      })

      // CTA Fade In
      gsap.from(sectionRef.current.querySelector('.comp-cta'), {
        opacity: 0, scale: 0.95, y: 20, duration: 0.7, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: '.comp-cta', start: 'top 90%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Auto-scroll logic for Contrast Grid ONLY (Carousel handles itself)
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (window.innerWidth > 900 || isInteracting.current) return;
      
      const scrollCarousel = (ref) => {
        if (!ref.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          ref.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          ref.current.scrollBy({ left: clientWidth * 0.75, behavior: 'smooth' });
        }
      };

      scrollCarousel(contrastRef);
    }, 3500);

    return () => clearInterval(autoScroll);
  }, []);

  const pauseAutoScroll = () => { isInteracting.current = true; };
  const resumeAutoScroll = () => { isInteracting.current = false; };

  return (
    <section className="benefits" id="competencia" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag section-tag--lime">{t('benefits.badge')}</span>
          <h2 className="section-title section-title--white">
            {t('benefits.title1')}<br/>{t('benefits.title2')}
          </h2>
          <p className="section-subtitle section-subtitle--muted">
            {t('benefits.subtitle')}
          </p>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Desliza para descubrir por qué lideramos la industria
          </p>
        </div>

        <ComparisonCarousel />

        <div 
          className="contrast-grid"
          ref={contrastRef}
          onTouchStart={pauseAutoScroll}
          onTouchEnd={resumeAutoScroll}
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
        >
          {Object.values(t('benefits.contrast', { returnObjects: true }) || {}).map((item, idx) => (
            <div className="contrast__item" key={idx}>
              <h3 className="contrast__title">{item.title}</h3>
              <div className="contrast__problem">
                <span className="contrast__icon contrast__icon--red">✕</span>
                <p>{item.problem}</p>
              </div>
              <div className="contrast__solution">
                <span className="contrast__icon contrast__icon--green">✓</span>
                <p>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="comp-cta">
          <p className="comp-cta__text">{t('benefits.ctaText')}</p>
          <Link to="/contacto" className="btn btn--lime btn--lg">
            {t('benefits.ctaButton')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Benefits
