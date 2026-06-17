const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const oldGlow = `background: radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 60%);`;
const newGlow = `background: radial-gradient(circle, rgba(56,189,248,0.9) 0%, transparent 70%);`;

const oldSize = `width: 400px;
  height: 400px;`;
const newSize = `width: 700px;
  height: 700px;`;

css = css.replace(oldGlow, newGlow);
css = css.replace(oldSize, newSize);

fs.writeFileSync(cssPath, css);
console.log('Glow intensified successfully.');
