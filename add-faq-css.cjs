const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* ==========================================================================
   Hero Trust Badge
   ========================================================================== */
.hero__trust-badge {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero__trust-text {
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ==========================================================================
   FAQ Section
   ========================================================================== */
.faq {
  padding: 6rem 0;
  background: var(--surface-main);
  border-top: 1px solid var(--border-light);
}

.faq__list {
  max-width: 800px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq__item {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}

.faq__item:hover {
  border-color: rgba(56, 189, 248, 0.3);
  box-shadow: 0 6px 12px rgba(56, 189, 248, 0.05);
}

.faq__item--open {
  border-color: var(--primary);
  box-shadow: 0 8px 16px rgba(56, 189, 248, 0.1);
}

.faq__question {
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-primary);
  cursor: pointer;
}

.faq__icon {
  flex-shrink: 0;
  color: var(--primary);
}

.faq__answer-wrapper {
  background: #fafafa;
}

.faq__answer {
  padding: 0 1.5rem 1.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}
`;

if (!css.includes('.faq__item')) {
  css += additionalCSS;
  fs.writeFileSync(cssPath, css);
  console.log('FAQ and Badge CSS appended successfully.');
} else {
  console.log('CSS already exists.');
}
