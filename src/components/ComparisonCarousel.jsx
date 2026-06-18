import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Check, Minus, ChevronLeft, ChevronRight } from 'lucide-react'

const ComparisonCarousel = () => {
  const { t, i18n } = useTranslation()
  const rows = Object.values(t('benefits.table.rows', { returnObjects: true }) || {})
  const headers = Object.values(t('benefits.table.headers', { returnObjects: true }) || {})
  const competitorLabel = headers[2] || 'Competencia'
  const winnerText = i18n.language === 'es' ? 'GANADOR' : 'WINNER'
  
  const cards = rows.map(row => ({
    title: row[0],
    competitorText: row[2], // Valet Competitor text
    addspotText: row[3]
  }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="comparison-carousel">
      <div className="comparison-carousel__viewport" ref={emblaRef}>
        <div className="comparison-carousel__container">
          {cards.map((card, idx) => (
            <div className={`comparison-card ${idx === selectedIndex ? 'comparison-card--active' : ''}`} key={idx}>
              <div className="comparison-card__inner">
                <h3 className="comparison-card__title">{card.title}</h3>
                
                <div className="comparison-card__body">
                  <div className="comparison-card__section comparison-card__section--competitor">
                    <span className="comparison-card__label">{competitorLabel}</span>
                    <div className="comparison-card__content">
                      <Minus size={18} className="icon-minus" />
                      <p>{card.competitorText}</p>
                    </div>
                  </div>

                  <div className="comparison-card__divider"></div>

                  <div className="comparison-card__section comparison-card__section--addspot">
                    <div className="comparison-card__label comparison-card__label--winner">
                      <span>ADDSPOT</span>
                      <span className="badge-winner">{winnerText}</span>
                    </div>
                    <div className="comparison-card__content">
                      <Check size={18} className="icon-check" />
                      <p>{card.addspotText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="comparison-carousel__controls">
        <button className="carousel-btn" onClick={scrollPrev} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button className="carousel-btn" onClick={scrollNext} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default ComparisonCarousel
