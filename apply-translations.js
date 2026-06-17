import fs from 'fs';
import path from 'path';

const applyTranslation = (filename, replacements) => {
  const filepath = path.join('src', 'components', filename);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');
  
  if (!content.includes('useTranslation')) {
    content = content.replace(/(import .*? from 'react')/, "$1\nimport { useTranslation } from 'react-i18next'");
    // Some components might not import react explicitly
    if (!content.includes('import { useTranslation }')) {
      content = "import { useTranslation } from 'react-i18next'\n" + content;
    }
    
    // Inject hook
    content = content.replace(/(function \w+\(.*?\) \{)/, "$1\n  const { t } = useTranslation()");
  }

  // Apply specific replacements
  for (const r of replacements) {
    content = content.replace(r.match, r.replace);
  }

  fs.writeFileSync(filepath, content, 'utf8');
};

const pagesTranslation = (filename, replacements) => {
  const filepath = path.join('src', 'pages', filename);
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, 'utf8');
  if (!content.includes('useTranslation')) {
    content = content.replace(/(import .*? from 'react-router-dom')/, "$1\nimport { useTranslation } from 'react-i18next'");
    content = content.replace(/(function \w+\(.*?\) \{)/, "$1\n  const { t } = useTranslation()");
  }
  for (const r of replacements) {
    content = content.replace(r.match, r.replace);
  }
  fs.writeFileSync(filepath, content, 'utf8');
}

// Update Navbar manually because it has state and logic
const navbarPath = 'src/components/Navbar.jsx';
let navbar = fs.readFileSync(navbarPath, 'utf8');
if (!navbar.includes('useTranslation')) {
  navbar = navbar.replace("import { Link } from 'react-router-dom'", "import { Link } from 'react-router-dom'\nimport { useTranslation } from 'react-i18next'");
  navbar = navbar.replace("function Navbar() {", "function Navbar() {\n  const { t, i18n } = useTranslation()\n\n  const toggleLanguage = () => {\n    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')\n  }");
  
  // NAV_LINKS has to be defined inside the component to use `t`, or just mapped
  navbar = navbar.replace(
    /const NAV_LINKS = \[[\s\S]*?\]/,
    `const getNavLinks = (t) => [
  { label: t('navbar.features'), href: '/#caracteristicas' },
  { label: t('navbar.modules'), href: '/#modulos' },
  { label: t('navbar.howItWorks'), href: '/#como-funciona' },
  { label: t('navbar.benefits'), href: '/#beneficios' },
]`
  );
  navbar = navbar.replace(/NAV_LINKS\.map/g, "getNavLinks(t).map");
  
  navbar = navbar.replace(/>\s*Solicitar Demo\s*<\/Link>/g, ">{t('navbar.requestDemo')}</Link>");
  navbar = navbar.replace(/<button([^>]*)>(\s*)<span \/>/, `<button className="btn btn--outline-dark" style={{padding: '0.4rem 0.8rem', fontSize: '0.8rem', marginLeft: '0.5rem', color: '#fff', borderColor: 'rgba(255,255,255,0.3)'}} onClick={toggleLanguage}>{t('navbar.language')}</button>\n          <button$1>$2<span />`);
  fs.writeFileSync(navbarPath, navbar, 'utf8');
}

// Components
applyTranslation('Hero.jsx', [
  { match: />ADDNEXO ERP — La evolución de CIMA<\/div>/, replace: ">{t('hero.badge')}</div>" },
  { match: /Centraliza toda tu<br \/>/, replace: "{t('hero.title1')}<br />" },
  { match: />operación y finanzas<\/em>/, replace: ">{t('hero.titleAccent')}</em>" },
  { match: /<br \/>\s*en una sola plataforma/, replace: "<br />\n          {t('hero.title2')}" },
  { match: />\s*El ERP ligero diseñado para controlar inventario, ventas, despachos y facturación. Elimina el Excel, automatiza procesos críticos y toma decisiones con datos en tiempo real.\s*<\/p>/, replace: ">{t('hero.subtitle')}</p>" },
  { match: />\s*Comenzar ahora\s*<\/Link>/, replace: ">{t('hero.ctaPrimary')}</Link>" },
  { match: />\s*Ver cómo funciona\s*<svg/, replace: ">{t('hero.ctaSecondary')}\n            <svg" },
  { match: />VIDEO DE PRESENTACIÓN<\/p>/, replace: ">{t('hero.videoPlaceholder')}</p>" },
]);

applyTranslation('Stats.jsx', [
  { match: />\s*Diseñado para empresas que necesitan velocidad y control total\s*<\/h3>/, replace: ">{t('stats.headline')}</h3>" },
  { match: />\s*\+ Horas semanales ahorradas en procesos manuales\s*<\/div>/, replace: ">{t('stats.s1')}</div>" },
  { match: />\s*% Reducción en errores de facturación e inventario\s*<\/div>/, replace: ">{t('stats.s2')}</div>" },
  { match: />\s*Trazabilidad End-to-End en despachos y entregas\s*<\/div>/, replace: ">{t('stats.s3')}</div>" },
  { match: />\s*% Control total de flujo de caja y cuentas\s*<\/div>/, replace: ">{t('stats.s4')}</div>" },
]);

let featuresContent = fs.readFileSync('src/components/Features.jsx', 'utf8');
if (!featuresContent.includes('useTranslation')) {
  featuresContent = featuresContent.replace("import gsap from 'gsap'", "import gsap from 'gsap'\nimport { useTranslation } from 'react-i18next'");
  featuresContent = featuresContent.replace("function Features() {", "function Features() {\n  const { t } = useTranslation();\n\n  const FEATURES = [\n    {\n      title: t('features.f1Title'),\n      desc: t('features.f1Desc'),\n      icon: <svg fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth=\"1.5\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125\" /></svg>\n    },\n    {\n      title: t('features.f2Title'),\n      desc: t('features.f2Desc'),\n      icon: <svg fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth=\"1.5\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z\" /></svg>\n    },\n    {\n      title: t('features.f3Title'),\n      desc: t('features.f3Desc'),\n      icon: <svg fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth=\"1.5\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941\" /></svg>\n    },\n    {\n      title: t('features.f4Title'),\n      desc: t('features.f4Desc'),\n      icon: <svg fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth=\"1.5\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z\" /></svg>\n    },\n    {\n      title: t('features.f5Title'),\n      desc: t('features.f5Desc'),\n      icon: <svg fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth=\"1.5\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" /></svg>\n    },\n    {\n      title: t('features.f6Title'),\n      desc: t('features.f6Desc'),\n      icon: <svg fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth=\"1.5\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z\" /></svg>\n    }\n  ];\n");
  featuresContent = featuresContent.replace(/const FEATURES = \[\s*\{[\s\S]*?\}\s*\];/m, ""); 
  fs.writeFileSync('src/components/Features.jsx', featuresContent, 'utf8');
}

applyTranslation('Problems.jsx', [
  { match: />El problema actual<\/span>/, replace: ">{t('problems.badge')}</span>" },
  { match: />\s*La gestión fragmentada<br \/>\s*<span style=\{\{color: '#38BDF8'\}\}>cuesta tiempo y dinero<\/span>\s*<\/h2>/, replace: ">{t('problems.title1')}<br />\n          <span style={{color: '#38BDF8'}}>{t('problems.titleAccent')}</span>\n        </h2>" },
  { match: />\s*Llevar el control en hojas de cálculo o sistemas desconectados genera cuellos de botella que limitan el crecimiento\.\s*<\/p>/, replace: ">{t('problems.subtitle')}</p>" },
  { match: /Descontrol de inventario y pérdidas por falta de trazabilidad\./, replace: "{t('problems.p1')}" },
  { match: /Uso excesivo e ineficiente de Excel para cálculos complejos\./, replace: "{t('problems.p2')}" },
  { match: /Errores humanos en facturación y retrasos en cobranzas\./, replace: "{t('problems.p3')}" },
  { match: /Falta de seguimiento riguroso a pagos y flujo de caja\./, replace: "{t('problems.p4')}" },
  { match: /Pérdida de información histórica clave para análisis\./, replace: "{t('problems.p5')}" },
  { match: /Toma de decisiones lenta por falta de datos en tiempo real\./, replace: "{t('problems.p6')}" },
]);

applyTranslation('HowItWorks.jsx', [
  { match: />Cómo funciona<\/span>/, replace: ">{t('howItWorks.badge')}</span>" },
  { match: />3 pasos para transformar tu operación<\/h2>/, replace: ">{t('howItWorks.title')}</h2>" },
  { match: />Integra tu inventario<\/h3>/, replace: ">{t('howItWorks.s1Title')}</h3>" },
  { match: />Sube tu catálogo de productos y establece niveles de stock\. El Kardex digital comenzará a rastrear cada movimiento de entrada y salida automáticamente\.<\/p>/, replace: ">{t('howItWorks.s1Desc')}</p>" },
  { match: />Centraliza tus ventas<\/h3>/, replace: ">{t('howItWorks.s2Title')}</h3>" },
  { match: />Registra clientes, genera proformas y conviértelas en facturas con un clic\. El inventario se descontará en tiempo real sin cálculos manuales\.<\/p>/, replace: ">{t('howItWorks.s2Desc')}</p>" },
  { match: />Controla y despacha<\/h3>/, replace: ">{t('howItWorks.s3Title')}</h3>" },
  { match: />Gestiona los estados de los pedidos, asigna despachos y mantén un control financiero estricto de los pagos y cuentas por cobrar\.<\/p>/, replace: ">{t('howItWorks.s3Desc')}</p>" },
]);

applyTranslation('Benefits.jsx', [
  { match: />Beneficios<\/span>/, replace: ">{t('benefits.badge')}</span>" },
  { match: />¿Por qué elegir ADDNEXO ERP\?<\/h2>/, replace: ">{t('benefits.title')}</h2>" },
  { match: />Control Absoluto<\/h3>/, replace: ">{t('benefits.b1Title')}</h3>" },
  { match: />Centralización total de la operación\. Cero dispersión de datos\.<\/p>/, replace: ">{t('benefits.b1Desc')}</p>" },
  { match: />Reducción de Errores<\/h3>/, replace: ">{t('benefits.b2Title')}</h3>" },
  { match: />Automatización inteligente que elimina fallas humanas\.<\/p>/, replace: ">{t('benefits.b2Desc')}</p>" },
  { match: />Flujo de Caja Sano<\/h3>/, replace: ">{t('benefits.b3Title')}</h3>" },
  { match: />Seguimiento riguroso de pagos y deudas para mejor liquidez\.<\/p>/, replace: ">{t('benefits.b3Desc')}</p>" },
  { match: />Toma de Decisiones<\/h3>/, replace: ">{t('benefits.b4Title')}</h3>" },
  { match: />Reportes y métricas en vivo para decisiones estratégicas\.<\/p>/, replace: ">{t('benefits.b4Desc')}</p>" },
]);

applyTranslation('CTABanner.jsx', [
  { match: />¿Listo para el cambio\?<\/p>/, replace: ">{t('ctaBanner.eyebrow')}</p>" },
  { match: /Deja de operar con Excel\.<br \/>Empieza a operar con inteligencia\./, replace: "{t('ctaBanner.title1')}<br />{t('ctaBanner.title2')}" },
  { match: />\s*Agenda una demo gratuita y descubre cómo el sistema puede transformar tu operación en días, no en meses\.\s*<\/p>/, replace: ">{t('ctaBanner.subtitle')}</p>" },
  { match: />\s*Ir al Formulario\s*<\/Link>/, replace: ">{t('ctaBanner.ctaPrimary')}</Link>" },
]);

let showcaseContent = fs.readFileSync('src/components/AppShowcase.jsx', 'utf8');
if (!showcaseContent.includes('useTranslation')) {
  showcaseContent = showcaseContent.replace("import gsap from 'gsap'", "import gsap from 'gsap'\nimport { useTranslation } from 'react-i18next'");
  showcaseContent = showcaseContent.replace("function AppShowcase() {", "function AppShowcase() {\n  const { t } = useTranslation();\n\n  const HIGHLIGHTS = [\n    { label: t('showcase.h1Title'), desc: t('showcase.h1Desc') },\n    { label: t('showcase.h2Title'), desc: t('showcase.h2Desc') },\n    { label: t('showcase.h3Title'), desc: t('showcase.h3Desc') },\n    { label: t('showcase.h4Title'), desc: t('showcase.h4Desc') },\n  ];");
  showcaseContent = showcaseContent.replace(/const HIGHLIGHTS = \[\s*\{[\s\S]*?\}\s*\];/m, ""); 
  showcaseContent = showcaseContent.replace(/>La plataforma<\/span>/, ">{t('showcase.badge')}</span>");
  showcaseContent = showcaseContent.replace(/Diseñada para que<br \/>tu equipo la use desde el día 1/, "{t('showcase.title1')}<br />{t('showcase.title2')}");
  showcaseContent = showcaseContent.replace(/>\s*Interfaz intuitiva, flujos claros y sin curva de aprendizaje larga. Tu equipo empieza a operar desde el primer día.\s*<\/p>/, ">{t('showcase.subtitle')}</p>");
  showcaseContent = showcaseContent.replace(/>\s*Ver demo en vivo →\s*<\/a>/, ">{t('showcase.cta')}</a>");
  fs.writeFileSync('src/components/AppShowcase.jsx', showcaseContent, 'utf8');
}

applyTranslation('Footer.jsx', [
  { match: />ADDNEXO ERP: El sistema ligero para centralizar, automatizar y optimizar toda la operación de tu empresa \(Inventario, Ventas y Facturación\)\.<\/p>/, replace: ">{t('footer.tagline')}</p>" },
  { match: />Plataforma<\/h4>/, replace: ">{t('footer.col1')}</h4>" },
  { match: />Empresa<\/h4>/, replace: ">{t('footer.col2')}</h4>" },
  { match: />Legal<\/h4>/, replace: ">{t('footer.col3')}</h4>" },
  { match: />Características<\/a>/, replace: ">{t('navbar.features')}</a>" },
  { match: />Módulos<\/a>/, replace: ">{t('navbar.modules')}</a>" },
  { match: />Cómo funciona<\/a>/, replace: ">{t('navbar.howItWorks')}</a>" },
  { match: />Beneficios<\/a>/, replace: ">{t('navbar.benefits')}</a>" },
  { match: />Acerca de ADD Strategic<\/a>/, replace: ">{t('footer.about')}</a>" },
  { match: />Contacto<\/a>/, replace: ">{t('footer.contact')}</a>" },
  { match: />Solicitar Demo<\/a>/, replace: ">{t('navbar.requestDemo')}</a>" },
  { match: />Política de Privacidad<\/a>/, replace: ">{t('footer.privacy')}</a>" },
  { match: />Términos de Uso<\/a>/, replace: ">{t('footer.terms')}</a>" },
  { match: />© 2026 ADD Strategic Business\. Todos los derechos reservados\.<\/p>/, replace: ">{t('footer.copyright1')}</p>" },
  { match: />Hecho con precisión para empresas que quieren crecer\.<\/p>/, replace: ">{t('footer.copyright2')}</p>" },
]);

pagesTranslation('Contact.jsx', [
  { match: />← Volver al inicio<\/Link>/, replace: ">{t('contact.back')}</Link>" },
  { match: /Hablemos sobre tu<br\/>operación\./, replace: "{t('contact.title1')}<br/>{t('contact.title2')}" },
  { match: />\s*Déjanos tus datos y un especialista de ADDNEXO se pondrá en contacto contigo para mostrarte cómo podemos transformar tu inventario y facturación\.\s*<\/p>/, replace: ">{t('contact.desc')}</p>" },
  { match: />Solicita una Demo<\/h3>/, replace: ">{t('contact.formTitle')}</h3>" },
  { match: />Nombre completo<\/label>/, replace: ">{t('contact.nameLabel')}</label>" },
  { match: /placeholder="Ej\. Juan Pérez"/, replace: "placeholder={t('contact.namePh')}" },
  { match: />Empresa<\/label>/, replace: ">{t('contact.companyLabel')}</label>" },
  { match: /placeholder="Nombre de tu empresa"/, replace: "placeholder={t('contact.companyPh')}" },
  { match: />Correo electrónico<\/label>/, replace: ">{t('contact.emailLabel')}</label>" },
  { match: /placeholder="tucorreo@empresa\.com"/, replace: "placeholder={t('contact.emailPh')}" },
  { match: />Teléfono \/ WhatsApp<\/label>/, replace: ">{t('contact.phoneLabel')}</label>" },
  { match: /placeholder="\+1 234 567 890"/, replace: "placeholder={t('contact.phonePh')}" },
  { match: />¿Cuál es tu principal desafío actualmente\?<\/label>/, replace: ">{t('contact.messageLabel')}</label>" },
  { match: /placeholder="Ej\. Llevo el inventario en Excel y tengo descuadres\.\.\."/, replace: "placeholder={t('contact.messagePh')}" },
  { match: /'Enviando\.\.\.'/, replace: "t('contact.sending')" },
  { match: /'¡Mensaje Enviado!'/, replace: "t('contact.sent')" },
  { match: /'Enviar Solicitud'/, replace: "t('contact.submit')" },
  { match: />Gracias por escribirnos\. Nos pondremos en contacto pronto\.<\/p>/, replace: ">{t('contact.success')}</p>" },
]);

console.log("Translations applied to components successfully.");
