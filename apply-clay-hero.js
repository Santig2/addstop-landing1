import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = (name) => path.join(__dirname, 'src', 'components', name);
const cssPath = path.join(__dirname, 'src', 'css', 'style.css');
const htmlPath = path.join(__dirname, 'index.html');
const i18nPath = path.join(__dirname, 'src', 'i18n.js');

// 1. Tipografía en index.html
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(
  /family=Playfair\+Display:ital,wght@0,400;0,500;0,600;0,700;1,400/,
  'family=Outfit:wght@400;500;600;700;800'
);
fs.writeFileSync(htmlPath, html);

// 2. Tipografía en style.css y Hero Center
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/--font-serif: 'Playfair Display', Georgia, serif;/g, "--font-display: 'Outfit', sans-serif;");
css = css.replace(/var\(--font-serif\)/g, "var(--font-display)");
// Modificar la grilla del Hero para que sea una sola columna centrada
css = css.replace(
  /\.hero__inner \{\s+display: grid;\s+grid-template-columns: 1fr 1fr;/,
  ".hero__inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 800px;\n  margin: 0 auto;"
);
// Make the CTAs flex justify center
css = css.replace(
  /\.hero__ctas \{\s+margin-top: 2\.5rem;\s+display: flex;\s+gap: 1rem;/,
  ".hero__ctas {\n  margin-top: 2.5rem;\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n"
);
fs.writeFileSync(cssPath, css);

// 3. Hero.jsx Layout
let hero = fs.readFileSync(p('Hero.jsx'), 'utf8');
// Remove image placeholder entirely
hero = hero.replace(/<div ref=\{imageRef\} className="hero__image-placeholder">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '</div>\n      </div>');
// Remove imageRef
hero = hero.replace(/const imageRef = useRef\(null\)/, '');
hero = hero.replace(/\.from\(imageRef\.current,    \{ opacity: 0, x: 40, duration: 1\.1 \}, '-=0\.3'\)/, '');
fs.writeFileSync(p('Hero.jsx'), hero);

// 4. i18n.js Copyweight Directo
let i18n = fs.readFileSync(i18nPath, 'utf8');

// ES Hero
i18n = i18n.replace(
  /title1: 'El Sistema de',\s*titleAccent: 'Valet Parking',\s*title2: 'que Elimina Reclamos y Acelera Entregas\.',/g,
  "title1: 'El Valet Parking Digital',\n        titleAccent: 'Cero Papel.',\n        title2: 'Entregas Rápidas.',"
);
i18n = i18n.replace(
  /subtitle: 'Olvídate de los tickets de papel perdidos, el descontrol de llaves y las demandas por daños falsos\. ADDSPOT digitaliza toda tu operación para que entregues vehículos más rápido y con seguridad blindada\.',/g,
  "subtitle: 'Control total de llaves, registro fotográfico anti-demandas y tickets digitales. La plataforma que blinda tu operación logística.',"
);

// EN Hero
i18n = i18n.replace(
  /title1: 'The Valet Parking System',\s*titleAccent: 'that Eliminates Claims',\s*title2: 'and Speeds Up Deliveries\.',/g,
  "title1: 'The Digital Valet OS',\n        titleAccent: 'Zero Paper.',\n        title2: 'Faster Deliveries.',"
);
i18n = i18n.replace(
  /subtitle: 'Forget about lost paper tickets, key chaos, and false damage claims\. ADDSPOT digitizes your entire operation so you can deliver vehicles faster and with bulletproof security\.',/g,
  "subtitle: 'Total key control, anti-lawsuit photographic records, and digital tickets. The platform that shields your logistics.',"
);

fs.writeFileSync(i18nPath, i18n);

console.log('Claymorphism typography and centered direct Hero applied.');
