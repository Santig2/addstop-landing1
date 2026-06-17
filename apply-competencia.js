import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const p = (name) => path.join(__dirname, 'src', 'components', name);
const cssPath = path.join(__dirname, 'src', 'css', 'style.css');
const i18nPath = path.join(__dirname, 'src', 'i18n.js');

// 1. i18n.js Update
let i18n = fs.readFileSync(i18nPath, 'utf8');

const esBenefits = `benefits: {
        badge: 'La Competencia',
        title1: 'La competencia se queda en el papel.',
        title2: 'ADDSPOT domina la operación.',
        subtitle: 'Mientras otras plataformas intentan digitalizar el valet con herramientas genéricas, nosotros hemos construido un sistema operativo diseñado desde el asfalto. Analiza la diferencia:',
        table: {
          headers: ['Característica', 'Apps Genéricas', 'Competencia Valet', 'ADDSPOT'],
          rows: [
            ['Enfoque de Negocio', 'Gestión de oficinas', 'Parking público', 'Gestión Logística Operativa'],
            ['Custodia de Llaves', 'No existente', 'Manual / Descentralizada', 'Tablero Digital (Keyholder)'],
            ['Blindaje Legal', 'Nula', 'Básica', 'Obligatoria (Check-in + Spot)'],
            ['Arquitectura', 'Online-only (falla en sótanos)', 'Síncrona (lenta en rush)', 'Offline-First Robusta'],
            ['UX Operativo', 'Compleja', 'Sobrecargada', 'Premium / 1 mano']
          ]
        },
        contrast: [
          {
            title: '1. Frente a "Apps de Oficina" (Wayleadr, Ronspot)',
            problem: 'El problema: Estas herramientas nacieron para reservar escritorios. El flujo de trabajo es lento, no entienden el concepto de "llave" ni el "trayecto".',
            solution: 'La diferencia ADDSPOT: Nosotros no reservamos espacios; gestionamos activos en movimiento. Nuestro flujo recorta tiempos de entrega en la calle.'
          },
          {
            title: '2. Frente a "Competencia Tradicional" (FlashValet, SMS Valet)',
            problem: 'El problema: Funcionan como "anotadores digitales". Carecen de control de seguridad riguroso. Permiten que el valet guarde la llave donde quiera.',
            solution: 'La diferencia ADDSPOT: Somos los únicos con el rol de Llavero (Keyholder) integrado. Si no hay entrega digital, el sistema lanza una alerta inmediata.'
          },
          {
            title: '3. El talón de Aquiles: La Conectividad',
            problem: 'El problema: Dependen de que el Valet tenga conexión 4G/5G perfecta. En sótanos o estructuras de concreto, sus apps dejan de cargar.',
            solution: 'La diferencia ADDSPOT: Arquitectura Offline-First. Todo se guarda localmente y se sincroniza instantáneamente al tocar el primer rayo de señal.'
          }
        ],
        ctaText: 'La diferencia entre ADDSPOT y el resto es que nosotros no vendemos software; vendemos el control total de tu parqueadero. ¿Sigues usando herramientas que te estorban o quieres una que trabaje por ti?',
        ctaButton: 'Solicitar una Demo Privada'
      }`;

const enBenefits = `benefits: {
        badge: 'The Competition',
        title1: 'The competition stays on paper.',
        title2: 'ADDSPOT dominates the operation.',
        subtitle: 'While other platforms try to digitize the valet with generic tools, we have built an OS designed from the asphalt up. Analyze the difference:',
        table: {
          headers: ['Feature', 'Generic Apps', 'Valet Competitors', 'ADDSPOT'],
          rows: [
            ['Business Focus', 'Office management', 'General parking', 'Operational Logistics'],
            ['Key Custody', 'Non-existent', 'Manual / Decentralized', 'Digital Board (Keyholder)'],
            ['Legal Shielding', 'None', 'Basic', 'Mandatory (Check-in + Spot)'],
            ['Architecture', 'Online-only (basement fail)', 'Synchronous (slow)', 'Robust Offline-First'],
            ['Operational UX', 'Complex', 'Overloaded', 'Premium / 1-handed']
          ]
        },
        contrast: [
          {
            title: '1. Vs "Office Apps" (Wayleadr, Ronspot)',
            problem: 'The problem: Born to reserve desks. The workflow is slow and lacks the concept of a "key" and the "journey".',
            solution: 'The ADDSPOT difference: We manage moving assets. Our flow cuts delivery times right on the street.'
          },
          {
            title: '2. Vs "Traditional Competitors" (FlashValet, SMS Valet)',
            problem: 'The problem: They act as digital notepads. Valets stash keys anywhere with zero physical audit protocol.',
            solution: 'The ADDSPOT difference: Integrated Keyholder role. No digital hand-off means instant alerts. We eliminate human error by design.'
          },
          {
            title: '3. The Achilles Heel: Connectivity',
            problem: 'The problem: They rely on perfect 4G/5G. In basements or concrete structures, their apps simply stop loading.',
            solution: 'The ADDSPOT difference: Offline-First Architecture. Everything is saved locally and syncs instantly upon exit. Uninterrupted operation.'
          }
        ],
        ctaText: 'The difference between ADDSPOT and the rest is that we don\\'t sell software; we sell total control of your parking lot. Are you still using tools that get in the way or do you want one that works for you?',
        ctaButton: 'Request a Private Demo'
      }`;

// regex replace the old benefits object in both ES and EN
i18n = i18n.replace(/benefits: \{[\s\S]*?showcase:/, esBenefits + ',\n      showcase:');
i18n = i18n.replace(/benefits: \{[\s\S]*?showcase:/, enBenefits + ',\n      showcase:');
fs.writeFileSync(i18nPath, i18n);

// 2. Benefits.jsx Update
const newBenefitsJSX = `import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Benefits() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header
      gsap.from(sectionRef.current.querySelector('.section-header'), {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
      })

      // Table Stagger
      gsap.from(sectionRef.current.querySelectorAll('.comp-table__row'), {
        opacity: 0, scale: 0.95, y: 20, filter: 'blur(4px)', stagger: 0.05, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.comp-table', start: 'top 75%', once: true }
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
        </div>

        <div className="comp-table">
          <div className="comp-table__row comp-table__row--header">
            <div className="comp-table__cell"></div>
            <div className="comp-table__cell comp-table__cell--muted">{t('benefits.table.headers.1', {defaultValue: 'Apps Genéricas'})}</div>
            <div className="comp-table__cell comp-table__cell--muted">{t('benefits.table.headers.2', {defaultValue: 'Competencia Valet'})}</div>
            <div className="comp-table__cell comp-table__cell--highlight">{t('benefits.table.headers.3', {defaultValue: 'ADDSPOT'})}</div>
          </div>
          
          {Object.values(t('benefits.table.rows', { returnObjects: true }) || {}).map((row, idx) => (
            <div className="comp-table__row" key={idx}>
              <div className="comp-table__cell comp-table__cell--feature">{row[0]}</div>
              <div className="comp-table__cell comp-table__cell--muted">{row[1]}</div>
              <div className="comp-table__cell comp-table__cell--muted">{row[2]}</div>
              <div className="comp-table__cell comp-table__cell--highlight">{row[3]}</div>
            </div>
          ))}
        </div>

        <div className="contrast-grid">
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
`;
fs.writeFileSync(p('Benefits.jsx'), newBenefitsJSX);

// 3. style.css Update
let css = fs.readFileSync(cssPath, 'utf8');

const compCSS = `
/* ============================================================
   COMPETITOR COMPARISON (BENEFITS) REDESIGN
   ============================================================ */
.comp-table {
  max-width: 1000px;
  margin: 0 auto 5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-clay-dark);
}

.comp-table__row {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.2s;
}
.comp-table__row:hover {
  background: rgba(255, 255, 255, 0.04);
}
.comp-table__row:last-child {
  border-bottom: none;
}
.comp-table__row--header {
  background: rgba(15, 23, 42, 0.5);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.comp-table__row--header .comp-table__cell {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.comp-table__cell {
  padding: 1.25rem 1rem;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #F8FAFC;
}
.comp-table__cell--feature {
  font-weight: 600;
  color: #FFFFFF;
}
.comp-table__cell--muted {
  color: #94A3B8;
  font-weight: 400;
}
.comp-table__cell--highlight {
  background: rgba(37, 99, 235, 0.1);
  color: var(--accent-success);
  font-weight: 700;
  border-left: 1px solid rgba(56, 189, 248, 0.2);
  border-right: 1px solid rgba(56, 189, 248, 0.2);
  box-shadow: inset 0 0 20px rgba(56, 189, 248, 0.05);
  position: relative;
}
.comp-table__row--header .comp-table__cell--highlight {
  border-top: 2px solid var(--accent-success);
  background: rgba(37, 99, 235, 0.2);
}

@media (max-width: 768px) {
  .comp-table__row {
    grid-template-columns: 1fr 1fr;
    font-size: 0.85rem;
  }
  .comp-table__cell:nth-child(2) { display: none; }
}

.contrast-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.contrast__item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  padding: 2rem 1.5rem;
  box-shadow: inset 0 2px 10px rgba(255,255,255,0.02), 0 10px 30px rgba(0,0,0,0.3);
  transition: transform 0.3s var(--ease-out);
}
.contrast__item:hover {
  transform: translateY(-4px);
}

.contrast__title {
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.contrast__problem, .contrast__solution {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.contrast__solution {
  margin-bottom: 0;
  padding-top: 1.25rem;
  border-top: 1px dashed rgba(255,255,255,0.1);
}

.contrast__icon {
  flex-shrink: 0;
  width: 20px; height: 20px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: bold;
}
.contrast__icon--red { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
.contrast__icon--green { background: rgba(56, 189, 248, 0.15); color: var(--accent-success); }

.contrast__problem p, .contrast__solution p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #94A3B8;
}
.contrast__solution p {
  color: #F8FAFC;
}

.comp-cta {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
}

.comp-cta__text {
  font-size: 1.2rem;
  color: var(--white);
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 2rem;
}

@media (max-width: 900px) {
  .contrast-grid { grid-template-columns: 1fr; }
}
`;;

// Replace old .benefits blocks if needed, but since we are appending or modifying we can just replace the old .benefits__grid
css = css.replace(/\.benefits__grid \{[\s\S]*?\}\n\n\.benefits__desc \{[\s\S]*?\}/, '');

if (!css.includes('.comp-table')) {
  fs.writeFileSync(cssPath, css + '\\n' + compCSS);
}

console.log('Competencia Redesign Script Completed');
