import fs from 'fs';
import path from 'path';

const fixGsap = (filename) => {
  const filepath = path.join('src', 'components', filename);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Replace standard useEffect with gsap.context
  const useEffectRegex = /useEffect\(\(\) => \{([\s\S]*?)\}, \[\]\)/g;
  
  content = content.replace(useEffectRegex, (match, innerBody) => {
    // If already has context, skip
    if (innerBody.includes('gsap.context')) return match;
    
    // Determine the scope ref. It's usually `sectionRef` or similar.
    let scopeMatch = innerBody.match(/trigger:\s*([a-zA-Z0-9]+Ref)\.current/);
    let scope = 'sectionRef';
    if (scopeMatch) {
      scope = scopeMatch[1];
    } else if (innerBody.includes('mockupRef.current')) {
      scope = 'mockupRef';
    } else if (filename === 'Hero.jsx') {
      scope = 'null'; // Hero uses multiple refs
    }

    if (scope === 'null') {
      return `useEffect(() => {\n    let ctx = gsap.context(() => {${innerBody}});\n    return () => ctx.revert();\n  }, [])`;
    } else {
      return `useEffect(() => {\n    let ctx = gsap.context(() => {${innerBody}}, ${scope});\n    return () => ctx.revert();\n  }, [])`;
    }
  });

  fs.writeFileSync(filepath, content, 'utf8');
};

['Features.jsx', 'AppShowcase.jsx', 'Stats.jsx', 'CTABanner.jsx', 'Hero.jsx', 'Problems.jsx', 'HowItWorks.jsx', 'Benefits.jsx'].forEach(fixGsap);

console.log("GSAP fixed.");
