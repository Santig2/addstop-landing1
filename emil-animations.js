import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const p = (name) => path.join(__dirname, 'src', 'components', name);
const cssPath = path.join(__dirname, 'src', 'css', 'style.css');

// --- 1. CSS & Variables ---
let css = fs.readFileSync(cssPath, 'utf8');
const newCSS = `
/* Emil Animations & Polishing */
:root {
  --ease-spring: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-ios: cubic-bezier(0.32, 0.72, 0, 1);
}

.btn:active, .navbar__cta:active, .faq__question:active {
  transform: scale(0.97);
  transition: transform 160ms ease-out;
}

.hiw__progress-container {
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(0,0,0,0.05);
  border-radius: 2px;
}
.hiw__progress-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0;
  background: var(--lime);
  border-radius: 2px;
}
@media (min-width: 768px) {
  .hiw__progress-container {
    left: 40px;
  }
}
`;
if (!css.includes('--ease-spring')) {
  fs.writeFileSync(cssPath, css + newCSS);
}

// --- 2. Hero 3D Mousemove ---
let hero = fs.readFileSync(p('Hero.jsx'), 'utf8');
if (!hero.includes('handleMouseMove')) {
  hero = hero.replace(
    /const scrollHintRef = useRef\(null\)/,
    "const scrollHintRef = useRef(null)\n  const contentWrapperRef = useRef(null)\n  const handleMouseMove = (e) => {\n    if (!contentWrapperRef.current) return;\n    const rect = contentWrapperRef.current.getBoundingClientRect();\n    const x = e.clientX - rect.left;\n    const y = e.clientY - rect.top;\n    const centerX = rect.width / 2;\n    const centerY = rect.height / 2;\n    const rotateX = ((y - centerY) / centerY) * -5;\n    const rotateY = ((x - centerX) / centerX) * 5;\n    gsap.to(contentWrapperRef.current, { rotateX, rotateY, duration: 0.5, ease: 'power2.out', transformPerspective: 1000 });\n  }\n  const handleMouseLeave = () => {\n    if (contentWrapperRef.current) gsap.to(contentWrapperRef.current, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });\n  }"
  );
  hero = hero.replace(
    /<div className="hero__content">/,
    '<div className="hero__content" ref={contentWrapperRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transformStyle: "preserve-3d" }}>'
  );
  fs.writeFileSync(p('Hero.jsx'), hero);
}

// --- 3. Stats Counter ---
let stats = fs.readFileSync(p('Stats.jsx'), 'utf8');
if (!stats.includes('innerHTML: targetNum')) {
  stats = stats.replace(
    /gsap\.from\(items, \{/,
    "// Animate numbers\n      const numbers = sectionRef.current.querySelectorAll('.stats__number');\n      numbers.forEach(num => {\n        const targetText = num.innerText;\n        const targetNum = parseFloat(targetText.replace(/[^0-9.]/g, ''));\n        const suffix = targetText.replace(/[0-9.]/g, '');\n        num.innerText = '0' + suffix;\n        gsap.to(num, {\n          innerHTML: targetNum,\n          duration: 1.2,\n          ease: 'power3.out',\n          snap: { innerHTML: 1 },\n          onUpdate: function() {\n            num.innerText = Math.round(this.targets()[0].innerHTML) + suffix;\n          },\n          scrollTrigger: {\n            trigger: sectionRef.current,\n            start: 'top 80%',\n            once: true\n          }\n        });\n      });\n\n      gsap.from(items, {"
  );
  stats = stats.replace(/duration: 0\.6/, 'duration: 0.6, stagger: 0.05');
  fs.writeFileSync(p('Stats.jsx'), stats);
}

// --- 4. Problems Clip-path ---
let problems = fs.readFileSync(p('Problems.jsx'), 'utf8');
if (!problems.includes('clipPath:')) {
  problems = problems.replace(
    /gsap\.from\(cards, \{[\s\S]*?opacity: 0,[\s\S]*?y: 40,[\s\S]*?stagger: 0\.1,[\s\S]*?duration: 0\.7,[\s\S]*?ease: 'power3\.out',/,
    "gsap.from(cards, {\n        opacity: 0,\n        y: 40,\n        clipPath: 'inset(0 0 100% 0)',\n        stagger: 0.08,\n        duration: 0.8,\n        ease: 'power3.out',"
  );
  // Remove actual clipPath reset from CSS by resetting it in onComplete if needed, or it's fine.
  fs.writeFileSync(p('Problems.jsx'), problems);
}

// --- 5. Features Stagger 40ms ---
let features = fs.readFileSync(p('Features.jsx'), 'utf8');
features = features.replace(/stagger: 0\.1,/g, 'stagger: 0.04,');
fs.writeFileSync(p('Features.jsx'), features);

// --- 6. HowItWorks Progress Line ---
let hiw = fs.readFileSync(p('HowItWorks.jsx'), 'utf8');
if (!hiw.includes('hiw__progress-line')) {
  hiw = hiw.replace(
    /gsap\.from\(cards, \{/,
    "gsap.fromTo(sectionRef.current.querySelector('.hiw__progress-line'), \n        { height: '0%' }, \n        { height: '100%', ease: 'none', scrollTrigger: { trigger: '.hiw__steps', start: 'top 60%', end: 'bottom 60%', scrub: 0.5 } }\n      )\n      gsap.from(cards, {"
  );
  hiw = hiw.replace(
    /<div className="hiw__steps">/,
    '<div className="hiw__steps" style={{ position: "relative" }}>\n            <div className="hiw__progress-container">\n              <div className="hiw__progress-line" />\n            </div>'
  );
  // Add padding to hiw__step to make room for the line
  hiw = hiw.replace(
    /className="hiw__step"/g,
    'className="hiw__step" style={{ paddingLeft: "40px", marginLeft: "16px" }}'
  );
  fs.writeFileSync(p('HowItWorks.jsx'), hiw);
}

// --- 7. Competencia (Benefits) Blur ---
let benefits = fs.readFileSync(p('Benefits.jsx'), 'utf8');
if (!benefits.includes('filter:')) {
  benefits = benefits.replace(
    /gsap\.from\(cards, \{[\s\S]*?opacity: 0,[\s\S]*?y: 40,[\s\S]*?stagger: 0\.1,/,
    "gsap.from(cards, {\n        opacity: 0,\n        scale: 0.95,\n        filter: 'blur(8px)',\n        y: 20,\n        stagger: 0.08,"
  );
  fs.writeFileSync(p('Benefits.jsx'), benefits);
}

// --- 8. AppShowcase Clip-Path Image Reveal ---
let showcase = fs.readFileSync(p('AppShowcase.jsx'), 'utf8');
if (!showcase.includes('clipPath')) {
  showcase = showcase.replace(
    /gsap\.from\(imageRef\.current, \{[\s\S]*?opacity: 0,[\s\S]*?x: 60,[\s\S]*?duration: 1,/,
    "gsap.fromTo(imageRef.current,\n      { opacity: 0, clipPath: 'inset(0 100% 0 0)' },\n      { opacity: 1, clipPath: 'inset(0 0 0 0)', duration: 1.2,"
  );
  // Also remove the old `opacity: 0, x: 60,` if it was fully matched
  fs.writeFileSync(p('AppShowcase.jsx'), showcase);
}

// --- 9. FAQ Custom Easing ---
let faq = fs.readFileSync(p('FAQ.jsx'), 'utf8');
faq = faq.replace(/duration: 0\.3, ease: 'power2\.out'/g, "duration: 0.25, ease: 'cubic-bezier(0.32, 0.72, 0, 1)'");
fs.writeFileSync(p('FAQ.jsx'), faq);

console.log('All Emil animations applied successfully.');
