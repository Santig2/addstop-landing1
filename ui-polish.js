import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = (name) => path.join(__dirname, 'src', 'components', name);
const cssPath = path.join(__dirname, 'src', 'css', 'style.css');

// --- 1. Fix Benefits.jsx ID ---
let benefits = fs.readFileSync(p('Benefits.jsx'), 'utf8');
benefits = benefits.replace(/id="beneficios"/, 'id="competencia"');
fs.writeFileSync(p('Benefits.jsx'), benefits);

// --- 2. Fix AppShowcase.jsx ID ---
let showcase = fs.readFileSync(p('AppShowcase.jsx'), 'utf8');
if (!showcase.includes('id="roles"')) {
  showcase = showcase.replace(/className="showcase"/, 'className="showcase" id="roles"');
  if (!showcase.includes('id="roles"')) {
     showcase = showcase.replace(/<div className="showcase__container">/, '<div className="showcase__container" id="roles">');
  }
  fs.writeFileSync(p('AppShowcase.jsx'), showcase);
}

// --- 3. Hero.jsx Glassmorphism & Animations ---
let hero = fs.readFileSync(p('Hero.jsx'), 'utf8');
// Fix entry animation
hero = hero.replace(/opacity: 0, y: 50, duration: 0\.9/g, "opacity: 0, scale: 0.95, duration: 0.9, ease: 'power3.out'");
hero = hero.replace(/opacity: 0, y: 30, duration: 0\.7/g, "opacity: 0, scale: 0.95, duration: 0.7, ease: 'power3.out'");
hero = hero.replace(/opacity: 0, y: 20, duration: 0\.6/g, "opacity: 0, scale: 0.95, duration: 0.6, ease: 'power3.out'");
// Glassmorphism placeholder
hero = hero.replace(
  /<div className="hero__image-box">[\s\S]*?<\/div>/,
  '<div className="hero__glass-box"></div>'
);
fs.writeFileSync(p('Hero.jsx'), hero);

// --- 5. Problems.jsx Refine ---
let problems = fs.readFileSync(p('Problems.jsx'), 'utf8');
// Change "x" to clean SVG
problems = problems.replace(
  /<span className="problems__card-icon">❌<\/span>/g,
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="problems__card-svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
);
fs.writeFileSync(p('Problems.jsx'), problems);

// --- 6. Features.jsx (Pilares) Refine ---
let features = fs.readFileSync(p('Features.jsx'), 'utf8');
// Remove eyebrow
features = features.replace(/<span className="section-tag">\{t\('features\.badge'\)\}<\/span>/g, '');
fs.writeFileSync(p('Features.jsx'), features);

// --- 7. HowItWorks.jsx (Ciclo de Vida) ---
let hiw = fs.readFileSync(p('HowItWorks.jsx'), 'utf8');
// Remove "1. CHECK-IN" text
hiw = hiw.replace(/<span className="hiw__step-tag">\{step\.tag\}<\/span>/g, '');
// Change standard animation to stagger
hiw = hiw.replace(/stagger: 0\.15/g, 'stagger: 0.08');
fs.writeFileSync(p('HowItWorks.jsx'), hiw);

// --- 8. Append CSS Fixes ---
let css = fs.readFileSync(cssPath, 'utf8');
const newCSS = `

/* Hero Glassmorphism */
.hero__glass-box {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Stats Pearl Background */
.stats {
  background: var(--surface-secondary);
}
.stats::before {
  opacity: 0.15; /* Tone down the cyan glow */
}

/* Problems Cards Polish */
.problems__card {
  padding: 1.5rem 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-clay-dark);
}
.problems__card-svg {
  flex-shrink: 0;
  color: #ef4444;
  margin-top: 4px;
}

/* Features Cards without borders */
.features__card {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 1rem;
}
.features__card:hover {
  transform: none;
  box-shadow: none;
  border-color: transparent;
}
.features__card-desc {
  color: #334155; /* Darker graphite for contrast */
  font-weight: 500;
}

/* Benefits (Competencia) Claymorphism & Hover */
.benefits__card {
  box-shadow: var(--shadow-clay-dark);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.benefits__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(56, 189, 248, 0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.08);
  border-color: rgba(56, 189, 248, 0.3);
}
`;

if (!css.includes('.hero__glass-box')) {
  fs.writeFileSync(cssPath, css + newCSS);
}

console.log('UI/UX Polish completed successfully.');
