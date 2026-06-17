const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Add font-serif variable
css = css.replace(/--font: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;/g, "--font: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;\n  --font-serif: 'Playfair Display', Georgia, serif;");

// Apply to .section-title
css = css.replace(/\.section-title {/g, ".section-title {\n  font-family: var(--font-serif);");

// Apply to .hero__title
css = css.replace(/\.hero__title {/g, ".hero__title {\n  font-family: var(--font-serif);");

// Update Navbar CSS for floating effect
const navbarOld = `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-h);
  background: var(--dark-brand);
  transition: box-shadow .3s, background .3s;
}`;

const navbarNew = `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-h);
  background: var(--dark-brand);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}`;

css = css.replace(navbarOld, navbarNew);

const navbarScrolledOld = `.navbar--scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,.25);
  background: rgba(15, 23, 42, .97);
  backdrop-filter: blur(12px);
}`;

const navbarScrolledNew = `.navbar--scrolled {
  top: 1rem;
  left: 1rem;
  right: 1rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 10px 40px rgba(0,0,0,.3);
  background: rgba(15, 23, 42, .85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}`;

css = css.replace(navbarScrolledOld, navbarScrolledNew);

fs.writeFileSync(cssPath, css);
console.log('CSS enhanced successfully.');
