import fs from 'fs';

const cssPath = 'src/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

// The CSS was broken because old variables were removed but still referenced.
// We will restore the old variables and map them to the new brand palette,
// and also ensure the new variables are there.
// Also replacing the green (#10B981) with cyan (#38BDF8) as requested.

const rootVars = `
:root {
  /* New Semantic Variables */
  --primary: #2563EB;
  --dark-brand: #0F172A;
  --accent-tech: #38BDF8;
  --accent-success: #38BDF8; /* Replaced green with cyan as requested */
  --text-primary: #1E293B;
  --text-secondary: #64748B;
  --surface-main: #FFFFFF;
  --surface-secondary: #F8FAFC;
  --bg-dark: #020617;
  --card-dark: #1E293B;
  
  /* Old variables mapped to new palette to prevent broken styles */
  --green-dark: #0F172A;
  --green-mid: #2563EB;
  --green-light: #38BDF8;
  --lime: #38BDF8;
  --lime-hover: #0284c7; /* darker cyan for hover */
  --cream: #F8FAFC;
  --beige: #F8FAFC;
  --beige-deep: #1E293B;
  --black: #1E293B;
  --white: #FFFFFF;
  --gray-muted: #64748B;
  --gray-light: #94a3b8;

  --font: 'Outfit', system-ui, -apple-system, sans-serif;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --shadow-card: 0 2px 12px rgba(0,0,0,.08);
  --shadow-lift: 0 8px 30px rgba(0,0,0,.13);
  --nav-h: 72px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
`;

// Replace whatever is in :root with the comprehensive one
css = css.replace(/:root\s*\{[\s\S]*?--ease-out:\s*cubic-bezier\(0\.16, 1, 0\.3, 1\);\s*\}/, rootVars);

// Also replace any hardcoded #10B981 (the old green) with #38BDF8
css = css.replace(/#10B981/g, '#38BDF8');
css = css.replace(/rgba\(16, 185, 129/g, 'rgba(56, 189, 248');

// Ensure buttons that used --lime now use --accent-tech and look good
// Cyan background needs dark text or white text? Cyan (#38BDF8) with white text is OK but dark text is better for contrast.
css = css.replace(/\.btn--lime \{([\s\S]*?)color:\s*#FFFFFF;/g, '.btn--lime {$1color: #0F172A;');
css = css.replace(/\.btn--lime \{([\s\S]*?)color:\s*var\(--dark-brand\);/g, '.btn--lime {$1color: #0F172A;');

fs.writeFileSync(cssPath, css, 'utf8');
console.log("CSS vars fixed!");
