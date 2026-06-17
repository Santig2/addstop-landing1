const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'src', 'i18n.js');
let content = fs.readFileSync(i18nPath, 'utf8');

// The best way to update i18n safely is to parse it, but since it's a JS file with module.exports/export default, we can do string replacements carefully.

// --- ES COPY REPLACEMENTS ---

// HERO
content = content.replace(
  /title1: 'Valet Parking',/g,
  "title1: 'El Sistema de',"
);
content = content.replace(
  /titleAccent: 'Inteligente y',/g,
  "titleAccent: 'Valet Parking',"
);
content = content.replace(
  /title2: 'Seguro',/g,
  "title2: 'que Elimina Reclamos y Acelera Entregas.',"
);
content = content.replace(
  /subtitle: 'Protege vehículos, elimina tickets de papel y acelera tu operación\. La plataforma definitiva para hoteles, clínicas y eventos de alto volumen\.',/g,
  "subtitle: 'Olvídate de los tickets de papel perdidos, el descontrol de llaves y las demandas por daños falsos. ADDSPOT digitaliza toda tu operación para que entregues vehículos más rápido y con seguridad blindada.',"
);
content = content.replace(
  /ctaPrimary: 'Comenzar ahora',/g,
  "ctaPrimary: 'Solicitar Demo Gratuita',"
);
content = content.replace(
  /ctaSecondary: 'Ver cómo funciona',/g,
  "ctaSecondary: 'Ver cómo funciona',"
);

// PROBLEMS (El Problema)
content = content.replace(
  /title1: 'Lo que estamos',/g,
  "title1: 'El valet tradicional te está',"
);
content = content.replace(
  /title2: 'erradicando del mercado',/g,
  "title2: 'costando dinero y clientes.',"
);
content = content.replace(
  /subtitle: 'En un mercado donde dominan el papel y la falta de control, ADDSPOT introduce orden absoluto y rastreabilidad\.',/g,
  "subtitle: 'Falta una sección antes de dar la solución. Tienes que recordarle al dueño del negocio por qué sufre hoy.'," // Wait, I need to put the actual subtitle here or just items.
);
// Replace the whole items array for problems ES
const oldProblemsES = `items: [
          'Boletos de papel que se pierden fácilmente',
          'Uso ineficiente de radios analógicos',
          'Daños cobrados al valet sin evidencia previa',
          'Pérdida de llaves y desorden en casetas',
          'Falta de control de tiempos de entrega',
          'Opacidad en la recolección de propinas',
          'Cuellos de botella en horas pico (Rush)',
          'Fraudes con vehículos no registrados',
          'Imposibilidad de operar sin conexión en sótanos',
          'Nula experiencia premium para el cliente'
        ]`;
const newProblemsES = `items: [
          '💸 Fugas de Ingresos: ¿Sabes realmente cuántos autos entraron hoy y cuántas propinas se generaron?',
          '🚗 Demandas Injustas: Clientes reclamando golpes y rayones que su auto ya tenía antes de llegar. Sin pruebas, tú pagas.',
          '🔑 Caos en la Caseta: "¿Quién tiene la llave del Mercedes?". Minutos perdidos buscando llaves colgadas en el gancho equivocado.',
          '🎫 Tickets Perdidos: Clientes molestos esperando en la puerta porque perdieron su papelito.'
        ]`;
content = content.replace(oldProblemsES, newProblemsES);

// FEATURES (Beneficios)
content = content.replace(
  /title1: 'Tecnología blindada para',/g,
  "title1: 'Control total de tu operación,',"
);
content = content.replace(
  /title2: 'la operación perfecta',/g,
  "title2: 'desde el motor hasta la llave.',"
);
content = content.replace(
  /f1Title: 'Blindaje Legal Antifraude',/g,
  "f1Title: 'Blindaje Anti-Demandas (Fotos 360°)',"
);
content = content.replace(
  /f1Desc: 'Protocolo de fotos 360° reales y obligatorias al ingreso para proteger el negocio de demandas por daños preexistentes\.',/g,
  "f1Desc: 'Tus valets deben tomar 4 fotos obligatorias al recibir el auto y otra al estacionarlo. Si un cliente reclama un rayón previo, tienes la prueba visual en segundos con hora exacta.',"
);
content = content.replace(
  /f4Title: 'Funciona Sin Internet',/g,
  "f4Title: 'Funciona en Sótanos sin Internet',"
);
content = content.replace(
  /f4Desc: 'Tus valets pueden trabajar en sótanos sin señal\. El sistema guarda todo y sincroniza al detectar internet\.',/g,
  "f4Desc: '¿No hay señal en el nivel -3 del estacionamiento? No hay problema. ADDSPOT sigue funcionando localmente y se sincroniza apenas el valet suba a la superficie. Tu operación nunca se detiene.',"
);
content = content.replace(
  /f2Title: 'Cálculo Transaccional Puro',/g,
  "f2Title: 'Auditoría Financiera en Vivo',"
);
content = content.replace(
  /f2Desc: 'Cero datos hardcodeados\. Todas las métricas de turnos, ganancias y velocidades se calculan dinámicamente desde la base operativa\.',/g,
  "f2Desc: 'Olvídate del robo hormiga. Visualiza en tiempo real cada auto cobrado, el flujo de caja y el rendimiento de cada empleado desde tu panel de administrador.',"
);
content = content.replace(
  /f6Title: 'Wallet Pass',/g,
  "f6Title: 'Pases Digitales de Lujo',"
);
content = content.replace(
  /f6Desc: 'Envío instantáneo de un Wallet Pass \\(Apple\/Google\\) al celular del cliente, agilizando solicitudes y pagos\.',/g,
  "f6Desc: 'Dile adiós al cartón. Tus clientes reciben un ticket digital directamente en su Apple Wallet o Google Wallet. Piden su auto con un clic desde su celular antes de salir a la puerta.',"
);

// BENEFITS (La Competencia)
content = content.replace(
  /title1: 'Por qué ADDSPOT',/g,
  "title1: 'Por qué ADDSPOT es superior',"
);
content = content.replace(
  /title2: 'no tiene rival',/g,
  "title2: 'a cualquier app del mercado.',"
);
content = content.replace(
  /subtitle: 'Descubre por qué las mejores marcas confían en nosotros\.',/g,
  "subtitle: 'No somos una app de \"reserva de espacios\" de oficina adaptada a la fuerza. ADDSPOT está diseñado desde el asfalto para soportar la presión del mundo real.',"
);
const oldCompItemsES = `items: [
          {
            title: 'Apps Corporativas',
            desc: 'Herramientas de reserva de escritorios (Skedda, Wayleadr). No entienden la velocidad ni logística de la calle.'
          },
          {
            title: 'Otras Apps Valet',
            desc: 'Permiten que el valet guarde la llave donde sea. ADDSPOT exige una transferencia digital al Llavero.'
          },
          {
            title: 'Evidencia Visual',
            desc: 'ADDSPOT incluye Doble Validación Fotográfica obligatoria (Ingreso y Spot de Estacionamiento).'
          },
          {
            title: 'Conectividad',
            desc: 'Otras apps se congelan sin red. ADDSPOT es Offline-First y funciona perfecto en sótanos profundos.'
          }
        ]`;
const newCompItemsES = `items: [
          {
            title: 'El control de llaves no es opcional',
            desc: 'Las apps genéricas asumen que el valet guarda la llave donde quiere. ADDSPOT es el único sistema que exige una "transferencia digital" a un Llavero dedicado en la caseta. Si el auto está parqueado pero la llave no está en el gancho digital, el sistema lanza una alerta.'
          },
          {
            title: 'Doble validación fotográfica vs. Confianza ciega',
            desc: 'La competencia solo anota placas. Nosotros te obligamos a tomar fotos al recibir el auto y otra foto en el cajón exacto donde se estacionó. Imposible perder un vehículo.'
          },
          {
            title: 'El verdadero Modo Offline',
            desc: 'Otras apps de valet se congelan si el internet falla. Nuestro motor fue construido para sobrevivir en sótanos de concreto armado, guardando los datos y sincronizándolos sin interrumpir el trabajo de tus operarios.'
          }
        ]`;
content = content.replace(oldCompItemsES, newCompItemsES);

// HOW IT WORKS (Ciclo de Vida)
content = content.replace(
  /title1: 'El Ciclo de Vida',/g,
  "title1: 'Una orquestación perfecta.',"
);
content = content.replace(
  /title2: 'del Vehículo',/g,
  "title2: 'Así fluye tu parqueadero en horas pico:',"
);
const oldHowItWorksES = `steps: [
          {
            title: 'Ingreso Rápido y Seguro',
            desc: 'El Cajero crea el ticket y asigna un Valet. El Valet toma 4 fotos obligatorias (Check-in) y se dispara un Wallet Pass al cliente.',
            tag: '1. Check-in'
          },
          {
            title: 'Custodia Inquebrantable',
            desc: 'El Valet conduce al estacionamiento (con Tracking), toma foto en su Spot y entrega la llave física al Llavero en caseta (Key Handoff).',
            tag: '2. En Reposo'
          },
          {
            title: 'Egreso y Liberación',
            desc: 'El cliente solicita vía Wallet. Un Valet recibe la alerta, solicita la llave al Llavero, escanea QR del cliente y registra propinas.',
            tag: '3. Egreso'
          }
        ]`;
const newHowItWorksES = `steps: [
          {
            title: 'Ingreso Rápido (Cero Fricción)',
            desc: 'El cajero registra el auto. El valet toma las fotos de rigor. El cliente recibe su ticket VIP en su celular al instante.',
            tag: '1. Check-in'
          },
          {
            title: 'Custodia y Rastreo GPS',
            desc: 'El valet conduce al punto exacto, el sistema cronometra el tiempo. Estaciona, toma foto y entrega la llave física al Llavero, quien la asegura en el sistema.',
            tag: '2. En Reposo'
          },
          {
            title: 'Salida Automatizada',
            desc: 'El cliente pide su auto desde su móvil. El Llavero libera la llave digitalmente, el valet ubica el auto sin dudar, lo entrega, escanea el QR del cliente y registra el pago. Todo en tiempo récord.',
            tag: '3. Egreso'
          }
        ]`;
content = content.replace(oldHowItWorksES, newHowItWorksES);


// Now inject the FAQ section into the ES object. I will insert it right before the footer.
const faqES = `
      faq: {
        badge: 'Preguntas Frecuentes',
        title1: 'Resolvemos tus dudas',
        title2: 'sobre ADDSPOT',
        subtitle: 'Todo lo que necesitas saber sobre la implementación y operación diaria.',
        items: [
          {
            question: '¿Qué hardware necesito para usar ADDSPOT?',
            answer: 'Solo necesitas teléfonos inteligentes estándar para tus valets y una tablet o computadora para tu administrador y llavero. Al ser basado en la nube, no requiere servidores costosos.'
          },
          {
            question: '¿Qué pasa si un valet se queda sin internet en el sótano?',
            answer: 'Nada se detiene. Nuestro sistema Offline-First guarda las fotos y ubicaciones en el dispositivo y las sincroniza automáticamente cuando recupera la señal LTE o Wi-Fi.'
          },
          {
            question: '¿Es difícil capacitar a mis valets tradicionales?',
            answer: 'En absoluto. La interfaz móvil tiene botones gigantes y obliga a seguir un paso a paso intuitivo (Check-in > Fotos > Manejar > Spot). En un par de horas, tu equipo estará operando al 100%.'
          }
        ]
      },`;
content = content.replace(/footer: {/g, faqES + "\n      footer: {");


// --- EN COPY REPLACEMENTS ---
// We will do a generic EN translation to match the tone of the ES.

// HERO EN
content = content.replace(
  /title1: 'Smart & Secure',/g,
  "title1: 'The Valet Parking System',"
);
content = content.replace(
  /titleAccent: 'Valet Parking',/g,
  "titleAccent: 'that Eliminates Claims',"
);
content = content.replace(
  /title2: 'Software',/g,
  "title2: 'and Speeds Up Deliveries.',"
);
content = content.replace(
  /subtitle: 'Protect vehicles, eliminate paper tickets, and speed up operations\. The ultimate platform for hotels, clinics, and high-volume events\.',/g,
  "subtitle: 'Forget about lost paper tickets, key chaos, and false damage claims. ADDSPOT digitizes your entire operation so you can deliver vehicles faster and with bulletproof security.',"
);
content = content.replace(
  /ctaPrimary: 'Start now',/g,
  "ctaPrimary: 'Request Free Demo',"
);

// PROBLEMS EN
content = content.replace(
  /title1: 'What we are',/g,
  "title1: 'Traditional valet is',"
);
content = content.replace(
  /title2: 'eradicating from the market',/g,
  "title2: 'costing you money & clients.',"
);
const oldProblemsEN = `items: [
          'Easily lost paper tickets',
          'Inefficient use of analog radios',
          'Damages charged to valets without prior evidence',
          'Lost keys and cluttered booths',
          'Lack of delivery time control',
          'Opacity in tip collection',
          'Bottlenecks during peak hours (Rush)',
          'Fraud with unregistered vehicles',
          'Inability to operate offline in basements',
          'Zero premium experience for the customer'
        ]`;
const newProblemsEN = `items: [
          '💸 Revenue Leaks: Do you really know how many cars entered today and how many tips were generated?',
          '🚗 Unfair Lawsuits: Clients claiming bumps and scratches their car already had. Without proof, you pay.',
          '🔑 Booth Chaos: "Who has the Mercedes key?". Minutes wasted looking for keys on the wrong hook.',
          '🎫 Lost Tickets: Angry clients waiting at the door because they lost their little paper.'
        ]`;
content = content.replace(oldProblemsEN, newProblemsEN);

// FEATURES EN
content = content.replace(
  /title1: 'Shielded technology for',/g,
  "title1: 'Total control of your operation,',"
);
content = content.replace(
  /title2: 'flawless operations',/g,
  "title2: 'from the engine to the key.',"
);
content = content.replace(
  /f1Title: 'Anti-fraud Legal Shielding',/g,
  "f1Title: 'Anti-Lawsuit Shielding (360° Photos)',"
);
content = content.replace(
  /f1Desc: 'Mandatory real 360° photo protocol upon entry to protect the business from pre-existing damage lawsuits\.',/g,
  "f1Desc: 'Your valets must take 4 mandatory photos upon receiving the car and another when parking it. If a client claims a prior scratch, you have visual proof in seconds with exact time.',"
);
content = content.replace(
  /f4Title: 'Works Without Internet',/g,
  "f4Title: 'Works in Basements without Internet',"
);
content = content.replace(
  /f4Desc: 'Valets can work in basements with no signal\. The system saves everything and syncs when back online\.',/g,
  "f4Desc: 'No signal on parking level -3? No problem. ADDSPOT keeps working locally and syncs as soon as the valet goes up to the surface. Your operation never stops.',"
);
content = content.replace(
  /f2Title: 'Pure Transactional Calculation',/g,
  "f2Title: 'Live Financial Audit',"
);
content = content.replace(
  /f2Desc: 'Zero hardcoded data\. All shift metrics, earnings, and speeds are calculated dynamically from the operational database\.',/g,
  "f2Desc: 'Forget about petty theft. Visualize in real-time every car charged, cash flow, and employee performance right from your admin panel.',"
);
content = content.replace(
  /f6Title: 'Wallet Pass',/g,
  "f6Title: 'Luxury Digital Passes',"
);
content = content.replace(
  /f6Desc: 'Instant delivery of a Wallet Pass \\(Apple\/Google\\) to the customer\\'s phone, speeding up requests and payments\.',/g,
  "f6Desc: 'Say goodbye to cardboard. Your clients receive a digital ticket directly in their Apple Wallet or Google Wallet. They request their car with one click before walking out the door.',"
);

// BENEFITS (Competition) EN
content = content.replace(
  /title1: 'Why ADDSPOT',/g,
  "title1: 'Why ADDSPOT is superior',"
);
content = content.replace(
  /title2: 'is unmatched',/g,
  "title2: 'to any app on the market.',"
);
content = content.replace(
  /subtitle: 'Discover why top brands trust us\.',/g,
  "subtitle: 'We are not an office \"space booking\" app awkwardly adapted. ADDSPOT is designed from the asphalt up to withstand real-world pressure.',"
);
const oldCompItemsEN = `items: [
          {
            title: 'Corporate Apps',
            desc: 'Desk reservation tools (Skedda, Wayleadr). They do not understand street speed or logistics.'
          },
          {
            title: 'Other Valet Apps',
            desc: 'They allow valets to stash keys anywhere. ADDSPOT demands a digital transfer to a Keyholder.'
          },
          {
            title: 'Visual Evidence',
            desc: 'ADDSPOT includes mandatory Dual Photo Validation (Entry and Parking Spot).'
          },
          {
            title: 'Connectivity',
            desc: 'Other apps freeze offline. ADDSPOT is Offline-First and works perfectly in deep basements.'
          }
        ]`;
const newCompItemsEN = `items: [
          {
            title: 'Key control is not optional',
            desc: 'Generic apps assume the valet stashes the key anywhere. ADDSPOT is the only system that demands a "digital transfer" to a dedicated Keyholder in the booth. If the car is parked but the key is not on the digital hook, the system throws an alert.'
          },
          {
            title: 'Dual photo validation vs. Blind trust',
            desc: 'The competition only writes down plates. We force you to take photos upon receiving the car and another in the exact spot it was parked. Impossible to lose a vehicle.'
          },
          {
            title: 'The true Offline Mode',
            desc: 'Other valet apps freeze if the internet fails. Our engine was built to survive in reinforced concrete basements, saving data and syncing without interrupting your operators workflow.'
          }
        ]`;
content = content.replace(oldCompItemsEN, newCompItemsEN);

// HOW IT WORKS EN
content = content.replace(
  /title1: 'The Vehicle',/g,
  "title1: 'A perfect orchestration.',"
);
content = content.replace(
  /title2: 'Lifecycle',/g,
  "title2: 'How your lot flows in peak hours:',"
);
const oldHowItWorksEN = `steps: [
          {
            title: 'Fast & Secure Check-in',
            desc: 'The Cashier creates the ticket and assigns a Valet. The Valet takes 4 mandatory photos and a Wallet Pass is sent to the customer.',
            tag: '1. Check-in'
          },
          {
            title: 'Unbreakable Custody',
            desc: 'The Valet drives to the spot (with Tracking), takes a photo, and hands over the physical key to the Keyholder (Key Handoff).',
            tag: '2. At Rest'
          },
          {
            title: 'Egress & Release',
            desc: 'Customer requests via Wallet. A Valet gets the alert, requests the key, scans the customer\\'s QR, and logs tips.',
            tag: '3. Egress'
          }
        ]`;
const newHowItWorksEN = `steps: [
          {
            title: 'Fast Entry (Zero Friction)',
            desc: 'The cashier registers the car. The valet takes the standard photos. The client gets their VIP ticket on their phone instantly.',
            tag: '1. Check-in'
          },
            {
            title: 'Custody & GPS Tracking',
            desc: 'The valet drives to the exact spot, the system times it. Parks, takes a photo, and gives the physical key to the Keyholder, who secures it in the system.',
            tag: '2. At Rest'
          },
          {
            title: 'Automated Exit',
            desc: 'The client requests their car from their mobile. The Keyholder releases the key digitally, the valet locates the car without hesitation, delivers it, scans the QR, and logs the payment. All in record time.',
            tag: '3. Egress'
          }
        ]`;
content = content.replace(oldHowItWorksEN, newHowItWorksEN);

fs.writeFileSync(i18nPath, content);
console.log('Copy updated successfully via script.');
