const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'src', 'i18n.js');
let content = fs.readFileSync(i18nPath, 'utf8');

// Hero ES
content = content.replace(
  /title1: 'Sistema Operativo de',/g,
  "title1: 'Valet Parking',"
);
content = content.replace(
  /titleAccent: 'Logística Interna',/g,
  "titleAccent: 'Inteligente y',"
);
content = content.replace(
  /title2: 'y Control de Custodia',/g,
  "title2: 'Seguro',"
);
content = content.replace(
  /subtitle: 'Una cadena de custodia digital e inquebrantable diseñada para valet parkings comerciales, hoteles de lujo, clínicas privadas y eventos de alto volumen\.',/g,
  "subtitle: 'Protege vehículos, elimina tickets de papel y acelera tu operación. La plataforma definitiva para hoteles, clínicas y eventos de alto volumen.',"
);

// Hero EN
content = content.replace(
  /title1: 'Internal Logistics &',/g,
  "title1: 'Smart & Secure',"
);
content = content.replace(
  /titleAccent: 'Custody Control',/g,
  "titleAccent: 'Valet Parking',"
);
content = content.replace(
  /title2: 'Operating System',/g,
  "title2: 'Software',"
);
content = content.replace(
  /subtitle: 'An unbreakable digital chain of custody designed for commercial valet parkings, luxury hotels, private clinics, and high-volume events\.',/g,
  "subtitle: 'Protect vehicles, eliminate paper tickets, and speed up operations. The ultimate platform for hotels, clinics, and high-volume events.',"
);

// Simplify Pilares (Features) ES
content = content.replace(
  /title: 'Pilares Operativos',/g,
  "title: 'Beneficios Principales',"
);
content = content.replace(
  /subtitle: 'Diseñado bajo la premisa de "Zero Trust". Cada entrega y recepción genera evidencia digital inmutable\.',/g,
  "subtitle: 'Seguridad, velocidad y control total sobre cada vehículo que ingresa a tu establecimiento.',"
);
content = content.replace(
  /title: 'Cadena de Custodia Digital',/g,
  "title: 'Control Digital Total',"
);
content = content.replace(
  /desc: 'Registro fotográfico obligatorio en cada punto de transferencia. Elimina el "él dijo, ella dijo" en reclamos de daños\.',/g,
  "desc: 'Registro fotográfico para protegerte de reclamos falsos. Evidencia visual de cada auto al entrar y salir.',"
);
content = content.replace(
  /title: 'Arquitectura Offline-First',/g,
  "title: 'Funciona Sin Internet',"
);
content = content.replace(
  /desc: 'Los valets siguen operando en sótanos sin señal. El sistema sincroniza automáticamente la data al recuperar la conexión\.',/g,
  "desc: 'Tus valets pueden trabajar en sótanos sin señal. El sistema guarda todo y sincroniza al detectar internet.',"
);
content = content.replace(
  /title: 'Auditoría en Tiempo Real',/g,
  "title: 'Reportes en Vivo',"
);
content = content.replace(
  /desc: 'Panel gerencial con métricas de ocupación, tiempos de entrega y flujo de caja en vivo, previniendo fugas de capital\.',/g,
  "desc: 'Conoce cuántos autos tienes, cuánto tiempo tardan y cuánto dinero ingresa desde tu panel administrativo.',"
);

// Simplify Pilares (Features) EN
content = content.replace(
  /title: 'Operational Pillars',/g,
  "title: 'Core Benefits',"
);
content = content.replace(
  /subtitle: 'Built under a "Zero Trust" premise\. Every drop-off and pickup generates immutable digital evidence\.',/g,
  "subtitle: 'Security, speed, and total control over every vehicle that enters your facility.',"
);
content = content.replace(
  /title: 'Digital Chain of Custody',/g,
  "title: 'Total Digital Control',"
);
content = content.replace(
  /desc: 'Mandatory photographic record at every transfer point\. Eliminates "he said, she said" in damage claims\.',/g,
  "desc: 'Photographic records to protect against false claims. Visual evidence of every car entering and leaving.',"
);
content = content.replace(
  /title: 'Offline-First Architecture',/g,
  "title: 'Works Without Internet',"
);
content = content.replace(
  /desc: 'Valets keep operating in signal-dead basements\. The system auto-syncs data upon regaining connection\.',/g,
  "desc: 'Valets can work in basements with no signal. The system saves everything and syncs when back online.',"
);
content = content.replace(
  /title: 'Real-time Auditing',/g,
  "title: 'Live Reports',"
);
content = content.replace(
  /desc: 'Managerial dashboard with live occupancy, delivery times, and cash flow metrics, preventing revenue leakage\.',/g,
  "desc: 'Know how many cars you have, delivery times, and revenue flow directly from your admin panel.',"
);

// Update section titles to be more positive
content = content.replace(
  /title: 'La Competencia',/g,
  "title: 'La Diferencia ADDSPOT',"
);
content = content.replace(
  /subtitle: 'Por qué AddSpot supera a las soluciones actuales del mercado\.',/g,
  "subtitle: 'Descubre por qué las mejores marcas confían en nosotros.',"
);

content = content.replace(
  /title: 'The Competition',/g,
  "title: 'The ADDSPOT Difference',"
);
content = content.replace(
  /subtitle: 'Why AddSpot outperforms current market solutions\.',/g,
  "subtitle: 'Discover why top brands trust us.',"
);

fs.writeFileSync(i18nPath, content);
console.log('i18n simplified successfully.');
