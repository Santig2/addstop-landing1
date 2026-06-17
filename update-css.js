import fs from 'fs';

const cssPath = 'src/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const replacements = [
  // root variables
  { match: /--green-dark:\s*#[0-9a-fA-F]+;/g, replace: '--dark-brand: #0F172A;' },
  { match: /--green-mid:\s*#[0-9a-fA-F]+;/g, replace: '--primary: #2563EB;' },
  { match: /--green-light:\s*#[0-9a-fA-F]+;/g, replace: '--accent-tech: #38BDF8;' },
  { match: /--lime:\s*#[0-9a-fA-F]+;/g, replace: '--accent-success: #10B981;' },
  { match: /--lime-hover:\s*#[0-9a-fA-F]+;/g, replace: '--accent-success-hover: #0ea5e9;' }, // using cyan-500 ish for hover
  { match: /--cream:\s*#[0-9a-fA-F]+;/g, replace: '--surface-main: #FFFFFF;' },
  { match: /--beige:\s*#[0-9a-fA-F]+;/g, replace: '--surface-secondary: #F8FAFC;' },
  { match: /--beige-deep:\s*#[0-9a-fA-F]+;/g, replace: '--surface-dark: #1E293B;' },
  { match: /--black:\s*#[0-9a-fA-F]+;/g, replace: '--text-primary: #1E293B;' },
  { match: /--white:\s*#[0-9a-fA-F]+;/g, replace: '--white: #FFFFFF;' },
  { match: /--gray-muted:\s*#[0-9a-fA-F]+;/g, replace: '--text-secondary: #64748B;' },
  { match: /--gray-light:\s*#[0-9a-fA-F]+;/g, replace: '--text-muted: #94a3b8;' },

  // references
  { match: /var\(--green-dark\)/g, replace: 'var(--dark-brand)' },
  { match: /var\(--green-mid\)/g, replace: 'var(--primary)' },
  { match: /var\(--green-light\)/g, replace: 'var(--accent-tech)' },
  { match: /var\(--lime\)/g, replace: 'var(--accent-success)' },
  { match: /var\(--lime-hover\)/g, replace: 'var(--accent-tech)' },
  { match: /var\(--cream\)/g, replace: 'var(--surface-main)' },
  { match: /var\(--beige\)/g, replace: 'var(--surface-secondary)' },
  { match: /var\(--beige-deep\)/g, replace: 'var(--surface-dark)' },
  { match: /var\(--black\)/g, replace: 'var(--text-primary)' },
  { match: /var\(--gray-muted\)/g, replace: 'var(--text-secondary)' },
  { match: /var\(--gray-light\)/g, replace: 'var(--text-muted)' },
  
  // Specific hardcoded colors
  { match: /rgba\(10,\s*60,\s*35/g, replace: 'rgba(15, 23, 42' }, // green-dark to dark-brand
  { match: /rgba\(230,\s*255,\s*85/g, replace: 'rgba(16, 185, 129' }, // lime to accent-success
  { match: /#0A3C23/g, replace: '#0F172A' },
  { match: /#E6FF55/g, replace: '#10B981' }
];

for (const r of replacements) {
  css = css.replace(r.match, r.replace);
}

// update hero background
css = css.replace(
  /\.hero \{\s*position: relative;\s*min-height: 100vh;\s*background: var\(--dark-brand\);/g,
  '.hero {\n  position: relative;\n  min-height: 100vh;\n  background: linear-gradient(135deg, var(--primary) 0%, var(--accent-tech) 100%);'
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log("CSS updated!");
