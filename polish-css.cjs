const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. CTA Banner centering
const ctaOld = /\.cta__actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 2\.5rem;\n}/g;
const ctaNew = `.cta__actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 2.5rem;\n}`;
if (css.match(ctaOld)) {
  css = css.replace(ctaOld, ctaNew);
} else {
  css += `\n.cta__actions { justify-content: center; }`;
}

css += `\n.cta-banner__inner { text-align: center; display: flex; flex-direction: column; align-items: center; }`;
css += `\n.cta__note { text-align: center; margin-top: 1.5rem; font-size: 0.85rem; color: var(--text-secondary); }`;

// 2. Navbar shrink effect
css = css.replace(
  /\.navbar--scrolled {/g,
  `.navbar--scrolled {\n  height: 60px; /* shrink height */`
);
css += `\n.navbar--scrolled .navbar__logo img { height: 36px; transition: height 0.4s ease; }\n`;

// 3. Button 3D Claymorphism
css = css.replace(
  /\.btn {/g,
  `.btn {\n  box-shadow: inset 0px 2px 4px rgba(255,255,255,0.4), 0px 4px 10px rgba(0,0,0,0.08);\n`
);
// Make sure .btn--dark has slightly different shadow so it looks good dark
css = css.replace(
  /\.btn--dark {/g,
  `.btn--dark {\n  box-shadow: inset 0px 2px 4px rgba(255,255,255,0.15), 0px 6px 16px rgba(15,23,42,0.3);\n`
);
css = css.replace(
  /\.btn--lime {/g,
  `.btn--lime {\n  box-shadow: inset 0px 2px 4px rgba(255,255,255,0.6), 0px 6px 16px rgba(56, 189, 248,0.3);\n`
);

// 4. Stats bottom-right glow
const statsOld = /\.stats {/g;
const statsNew = `.stats {\n  position: relative;\n  overflow: hidden;\n`;
css = css.replace(statsOld, statsNew);

css += `\n.stats::after {
  content: '';
  position: absolute;
  bottom: -150px;
  right: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 60%);
  filter: blur(40px);
  z-index: 0;
  pointer-events: none;
}
.stats__grid { position: relative; z-index: 1; }
.stats__headline { position: relative; z-index: 1; }
`;

fs.writeFileSync(cssPath, css);
console.log('CSS polished successfully.');
