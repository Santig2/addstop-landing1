import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)



function AppShowcase() {
  const { t } = useTranslation();

  const HIGHLIGHTS = [
    { label: t('showcase.h1Title'), desc: t('showcase.h1Desc') },
    { label: t('showcase.h2Title'), desc: t('showcase.h2Desc') },
    { label: t('showcase.h3Title'), desc: t('showcase.h3Desc') },
    { label: t('showcase.h4Title'), desc: t('showcase.h4Desc') },
    { label: t('showcase.h5Title'), desc: t('showcase.h5Desc') },
  ];
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    gsap.to(imageRef.current, { rotateX, rotateY, duration: 0.6, ease: 'power2.out', transformPerspective: 1200 });
  }

  const handleMouseLeave = () => {
    if (imageRef.current) gsap.to(imageRef.current, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'power2.out' });
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      x: -40,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })
    gsap.from(imageRef.current, {
      opacity: 0, 
      x: 40,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })
    gsap.from(sectionRef.current.querySelectorAll('.showcase__highlight'), {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
        once: true,
      },
    })
  }, sectionRef);
    return () => ctx.revert();
  }, [])

  return (
    <section className="showcase" id="roles" ref={sectionRef}>
      <div className="container showcase__inner">

        <div className="showcase__text" ref={textRef}>
          <span className="section-tag">{t('showcase.badge')}</span>
          <h2 className="section-title">
            {t('showcase.title1')}<br />{t('showcase.title2')}
          </h2>
          <p className="section-subtitle">{t('showcase.subtitle')}</p>
          <ul className="showcase__highlights">
            {HIGHLIGHTS.map((h, i) => (
              <li key={i} className="showcase__highlight">
                <span className="showcase__check">✓</span>
                <div>
                  <strong>{h.label}</strong>
                  <span>{h.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn--dark" style={{ marginTop: '2.5rem', display: 'inline-block' }}>{t('showcase.cta')}</a>
        </div>

        <div 
          className="showcase__image" 
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
        >
          <div className="showcase__image-wrap">
            {/* Tablet Mockup Image inside Frame */}
            <div className="showcase__tablet-mockup">
              <div className="showcase__tablet-bezel">
                <div className="showcase__tablet-camera"></div>
                <div className="showcase__tablet-screen">
                  <img src="/addspot-pantalla-ipad.png" alt="ADDSPOT Dashboard Tablet" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>

            {/* Mobile Phone Mockup Image inside Frame */}
            <div className="showcase__phone-mockup">
              <div className="showcase__phone-bezel">
                <div className="showcase__phone-notch"></div>
                <div className="showcase__phone-screen">
                  <img src="/addspot-pantalla1-iphone.png" alt="ADDSPOT App Mobile" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AppShowcase
