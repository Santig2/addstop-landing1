import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

function Hero() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = ['/hero-addspot-1.png', '/hero-addspot-2.png', '/hero-addspot-3.png']

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctasRef = useRef(null)
  const visualRef = useRef(null)
  const imgWrapRef = useRef(null)

  const scrollHintRef = useRef(null)
  const contentWrapperRef = useRef(null)
  const handleMouseMove = (e) => {
    if (!imgWrapRef.current) return;
    const rect = imgWrapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // inverted rotation for a more natural parallax feel on the image
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    gsap.to(imgWrapRef.current, { rotateX, rotateY, duration: 0.5, ease: 'power2.out', transformPerspective: 1000 });
  }
  const handleMouseLeave = () => {
    if (imgWrapRef.current) gsap.to(imgWrapRef.current, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(badgeRef.current, { opacity: 0, y: 24, duration: 0.6 })
        .from(titleRef.current, { opacity: 0, scale: 0.95, duration: 0.9, ease: 'power3.out' }, '-=0.3')
        .from(subtitleRef.current, { opacity: 0, scale: 0.95, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from(ctasRef.current, { opacity: 0, scale: 0.95, duration: 0.6, ease: 'power3.out' }, '-=0.35')
        .from(visualRef.current, { opacity: 0, x: 60, scale: 0.92, duration: 1.1, ease: 'power3.out' }, '-=0.7')
        .from(scrollHintRef.current, { opacity: 0, duration: 0.5 }, '-=0.1')

      gsap.to(scrollHintRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
        delay: 1.5,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-slider">
        {slides.map((src, index) => (
          <div
            key={src}
            className={`hero__bg-slide ${index === currentSlide ? 'hero__bg-slide--active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className="hero__bg-overlay" />

      <div className="container hero__inner hero__inner--split">
        <div className="hero__content" ref={contentWrapperRef}>
          <div ref={badgeRef} className="hero__badge">
            <span className="hero__badge-dot" />
            {t('hero.badge')}
          </div>

          <h1 ref={titleRef} className="hero__title">
            {t('hero.title1')}<br />
            <em className="hero__title-accent">{t('hero.titleAccent')}</em><br />
            {t('hero.title2')}
          </h1>

          <p ref={subtitleRef} className="hero__subtitle">{t('hero.subtitle')}</p>

          <div ref={ctasRef} className="hero__ctas">
            <Link to="/contacto" className="btn btn--lime">{t('hero.ctaPrimary')}</Link>
            <a href="/#como-funciona" className="btn btn--ghost">{t('hero.ctaSecondary')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="hero__trust-badge">
            <span className="hero__trust-text">Product Powered by Adstrategic</span>
          </div>
        </div>

        {/* ── RIGHT: visual mockup ── */}
        <div className="hero__visual" ref={visualRef}>
          <div 
            className="hero__img-wrap" 
            ref={imgWrapRef} 
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/addspot-mockup1.png"
              alt="ADDSPOT App — Dashboard en vivo"
              className="hero__img"
            />
            {/* bottom glow reflection */}
            <div className="hero__img-glow" />
          </div>
        </div>
      </div>
      <div ref={scrollHintRef} className="hero__scroll-hint">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
