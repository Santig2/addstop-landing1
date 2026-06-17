import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cssPath = path.join(__dirname, 'src', 'css', 'style.css');

let css = fs.readFileSync(cssPath, 'utf8');

// 1. Hero Alignment
css = css.replace(
  /\.hero__inner \{\s+display: flex;\s+flex-direction: column;\s+align-items: center;\s+text-align: center;\s+max-width: 800px;\s+margin: 0 auto;\s+gap: 4rem;\s+align-items: center;\s+position: relative;\s+z-index: 1;\s+\}/,
  `.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 800px;
  margin: 0;
  gap: 4rem;
  position: relative;
  z-index: 1;
}`
);

// 2. Hero CTAs & Button Symmetries
css = css.replace(
  /\.hero__ctas \{\s+display: flex;\s+align-items: center;\s+justify-content: center;\s+gap: 1rem;\s+flex-wrap: wrap;\s+\}/,
  `.hero__ctas {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;
}
.hero__ctas .btn {
  flex: 1;
  justify-content: center;
}`
);
css = css.replace(/justify-content: flex-start;\n/, 'justify-content: flex-start;\n'); // fallback for existing state

// 3. Fix Button Claymorphism 
// btn--lime
css = css.replace(/box-shadow: 0 0 0 0 transparent;/g, '');
css = css.replace(
  /\.btn--lime \{[\s\S]*?background: #38BDF8;\s+color: #0F172A;\s+\}/,
  `.btn--lime {
  box-shadow: inset 0px 2px 4px rgba(255,255,255,0.6), 0px 6px 16px rgba(56, 189, 248,0.3);
  background: #38BDF8;
  color: #0F172A;
}`
);

// btn--ghost
css = css.replace(
  /\.btn--ghost \{[\s\S]*?border: 1\.5px solid rgba\(255,255,255,\.35\);\s+\}/,
  `.btn--ghost {
  background: rgba(255,255,255,0.05);
  color: #FFFFFF;
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: inset 0px 2px 4px rgba(255,255,255,0.1), 0px 4px 12px rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
}`
);

// btn--dark
css = css.replace(
  /\.btn--dark \{[\s\S]*?color: var\(--white\);\s+\}/,
  `.btn--dark {
  box-shadow: inset 0px 2px 4px rgba(255,255,255,0.15), 0px 6px 16px rgba(15,23,42,0.3);
  background: var(--dark-brand);
  color: var(--white);
}`
);

// btn--outline-dark
css = css.replace(
  /\.btn--outline-dark \{[\s\S]*?border: 1\.5px solid var\(--dark-brand\);\s+\}/,
  `.btn--outline-dark {
  background: var(--surface-secondary);
  color: #0F172A;
  border: 1px solid rgba(15,23,42,0.1);
  box-shadow: inset 0px 2px 4px rgba(255,255,255,0.8), 0px 4px 10px rgba(0,0,0,0.05);
}`
);

fs.writeFileSync(cssPath, css);
console.log('Claymorphism & Alignment applied.');
