const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Update font and radii variables
css = css.replace(/--font: 'Outfit', system-ui, -apple-system, sans-serif;/g, "--font: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;");
css = css.replace(/--radius-md: 12px;/g, "--radius-md: 24px;");
css = css.replace(/--radius-lg: 20px;/g, "--radius-lg: 32px;");

// Add inner/outer shadow tokens for claymorphism
css = css.replace(/--shadow-lift: 0 8px 30px rgba\(0,0,0,\.13\);/g, "--shadow-lift: 0 8px 30px rgba(0,0,0,.13);\n  --shadow-clay-light: 8px 8px 16px rgba(56, 189, 248, 0.08), -8px -8px 16px rgba(255, 255, 255, 0.8), inset 2px 2px 4px rgba(255, 255, 255, 1);\n  --shadow-clay-dark: 8px 8px 24px rgba(0, 0, 0, 0.4), inset 2px 2px 4px rgba(255, 255, 255, 0.05);");

// Update Hero layout
const heroOld = `.hero {
  position: relative;
  min-height: 100vh;
  background: var(--bg-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(var(--nav-h) + 4rem) 2rem 5rem;
  overflow: hidden;
  text-align: center;
}

.hero__video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}`;

const heroNew = `.hero {
  position: relative;
  min-height: 100vh;
  background: var(--bg-dark);
  display: flex;
  align-items: center;
  padding: calc(var(--nav-h) + 4rem) 2rem 5rem;
  overflow: hidden;
  text-align: left;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero__image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 500px;
  background: rgba(255, 255, 255, 0.03);
  border: 2px dashed rgba(56, 189, 248, 0.3);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-clay-dark);
}
.hero__image-text {
  color: rgba(56, 189, 248, 0.8);
  font-weight: 600;
  font-size: 1.1rem;
}`;

css = css.replace(heroOld, heroNew);

// Fix text alignments in hero elements
css = css.replace(/margin: 0 auto 2\.5rem;/g, "margin: 0 0 2.5rem 0;"); // .hero__subtitle
css = css.replace(/justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;/g, "justify-content: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;"); // .hero__ctas

// Update Features card for light claymorphism
css = css.replace(/box-shadow: 0 4px 20px rgba\(0,0,0,0\.02\);/g, "box-shadow: var(--shadow-clay-light);");
css = css.replace(/border: 1px solid rgba\(0,0,0,0\.04\);/g, "border: none;");

// Update Benefits item for dark claymorphism
css = css.replace(/background: rgba\(255,255,255,\.05\);\n  border: 1px solid rgba\(255,255,255,\.08\);/g, "background: rgba(255,255,255,.05);\n  border: 1px solid rgba(255,255,255,.03);\n  box-shadow: var(--shadow-clay-dark);");

fs.writeFileSync(cssPath, css);
console.log('CSS updated successfully.');
