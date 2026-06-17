import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      seo: {
        homeTitle: 'ADDSPOT | Sistema Operativo de Logística Interna y Control de Custodia Premium',
        homeDesc: 'ADDSPOT transforma los servicios de Valet Parking con una línea de ensamblaje digital, cadena de custodia inquebrantable y blindaje legal.',
        contactTitle: 'Contacto y Demo Gratis | ADDSPOT',
        contactDesc: 'Ponte en contacto con nuestro equipo y descubre cómo ADDSPOT puede transformar tu operación de Valet Parking.'
      },
      navbar: {
        features: 'Pilares Operativos',
        modules: 'Roles del Sistema',
        howItWorks: 'Ciclo de Vida',
        benefits: 'Competencia',
        requestDemo: 'Solicitar Demo',
        language: 'EN'
      },
      hero: {
        badge: 'ADDSPOT — Valet OS AI Powered by Adstrategic',
        title1: 'El Valet Parking Digital',
        titleAccent: 'Cero Papel.',
        title2: 'Entregas Rápidas.',
        subtitle: 'Control total de llaves, registro fotográfico anti-demandas y tickets digitales. La plataforma que blinda tu operación logística.',
        ctaPrimary: 'Solicitar Demo Gratuita',
        ctaSecondary: 'Ver cómo funciona',
        videoPlaceholder: 'VIDEO DE DEMOSTRACIÓN',
        slides: [
          { label: "Dashboard operativo para la gerencia" },
          { label: "Bandeja de valets en dispositivos móviles" },
          { label: "Tablero de custodia digital para llaveros" },
          { label: "Escaneo rápido y fotogrametría" }
        ]
      },
      stats: {
        headline: 'Métricas operativas procesadas en tiempo real',
        items: [
          { label: 'Cadena de Custodia Digital' },
          { label: 'Tracking y Trazabilidad' },
          { label: 'Modo Rush (Alto Volumen)' },
          { label: 'Wallet Pass Inmediato' }
        ]
      },
      features: {
        badge: 'Pilares Operativos',
        title1: 'Control total de tu operación,',
        title2: 'desde el motor hasta la llave.',
        subtitle: 'Diseñado específicamente para resolver los problemas logísticos de hoteles de lujo, restaurantes premium y operadores masivos.',
        f1Title: 'Blindaje Anti-Demandas (Fotos 360°)',
        f1Desc: 'Tus valets deben tomar 4 fotos obligatorias al recibir el auto y otra al estacionarlo. Si un cliente reclama un rayón previo, tienes la prueba visual en segundos con hora exacta.',
        f2Title: 'Auditoría Financiera en Vivo',
        f2Desc: 'Olvídate del robo hormiga. Visualiza en tiempo real cada auto cobrado, el flujo de caja y el rendimiento de cada empleado desde tu panel de administrador.',
        f3Title: 'Seguridad de Campo',
        f3Desc: 'Botón "Finalizar Turno" aislado y bloqueado si el usuario posee llaves o autos bajo su custodia. Nadie sale sin entregar todo.',
        f4Title: 'Arquitectura Offline-First',
        f4Desc: 'Diseñada para sótanos de concreto donde se pierde el internet. Sigue operando y sincroniza al recuperar señal.',
        f5Title: 'Doble Validación Fotográfica',
        f5Desc: 'Captura visual en Check-in (daños) y Spot Select (confirmación visual de la plaza donde descansa el auto).',
        f6Title: 'Pases Digitales de Lujo',
        f6Desc: 'Envío instantáneo de un Wallet Pass (Apple/Google) al celular del cliente, agilizando solicitudes y pagos.'
      },
      problems: {
        badge: 'El Status Quo',
        title1: 'El valet tradicional te está',
        title2: 'costando dinero y clientes.',
        subtitle: 'En un mercado donde dominan el papel y la falta de control, ADDSPOT introduce orden absoluto y rastreabilidad.',
        cta: 'Cambiar el Status Quo →',
        items: [
          '💸 Fugas de Ingresos: ¿Sabes realmente cuántos autos entraron hoy y cuántas propinas se generaron?',
          '🚗 Demandas Injustas: Clientes reclamando golpes y rayones que su auto ya tenía antes de llegar. Sin pruebas, tú pagas.',
          '🔑 Caos en la Caseta: "¿Quién tiene la llave del Mercedes?". Minutos perdidos buscando llaves colgadas en el gancho equivocado.',
          '🎫 Tickets Perdidos: Clientes molestos esperando en la puerta porque perdieron su papelito.'
        ]
      },
      howItWorks: {
        badge: 'Flujo de Eventos',
        title1: 'Una orquestación perfecta.',
        title2: 'Así fluye tu parqueadero en horas pico:',
        subtitle: 'Una orquestación perfecta desde la llegada del auto hasta que el cliente sale por la puerta principal.',
        steps: [
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
        ]
      },
      benefits: {
        badge: 'The Competition',
        title1: 'The competition stays on paper.',
        title2: 'ADDSPOT dominates the operation.',
        subtitle: 'While other platforms try to digitize the valet with generic tools, we have built an OS designed from the asphalt up. Analyze the difference:',
        table: {
          headers: ['Feature', 'Generic Apps', 'Valet Competitors', 'ADDSPOT'],
          rows: [
            ['Business Focus', 'Office management', 'General parking', 'Operational Logistics'],
            ['Key Custody', 'Non-existent', 'Manual / Decentralized', 'Digital Board (Keyholder)'],
            ['Legal Shielding', 'None', 'Basic', 'Mandatory (Check-in + Spot)'],
            ['Architecture', 'Online-only (basement fail)', 'Synchronous (slow)', 'Robust Offline-First'],
            ['Operational UX', 'Complex', 'Overloaded', 'Premium / 1-handed']
          ]
        },
        contrast: [
          {
            title: '1. Vs "Office Apps" (Wayleadr, Ronspot)',
            problem: 'The problem: Born to reserve desks. The workflow is slow and lacks the concept of a "key" and the "journey".',
            solution: 'The ADDSPOT difference: We manage moving assets. Our flow cuts delivery times right on the street.'
          },
          {
            title: '2. Vs "Traditional Competitors" (FlashValet, SMS Valet)',
            problem: 'The problem: They act as digital notepads. Valets stash keys anywhere with zero physical audit protocol.',
            solution: 'The ADDSPOT difference: Integrated Keyholder role. No digital hand-off means instant alerts. We eliminate human error by design.'
          },
          {
            title: '3. The Achilles Heel: Connectivity',
            problem: 'The problem: They rely on perfect 4G/5G. In basements or concrete structures, their apps simply stop loading.',
            solution: 'The ADDSPOT difference: Offline-First Architecture. Everything is saved locally and syncs instantly upon exit. Uninterrupted operation.'
          }
        ],
        ctaText: 'The difference between ADDSPOT and the rest is that we don\'t sell software; we sell total control of your parking lot. Are you still using tools that get in the way or do you want one that works for you?',
        ctaButton: 'Request a Private Demo'
      },
      showcase: {
        badge: 'Ecosistema de Roles',
        title1: 'Diseñado para optimizar',
        title2: 'el rendimiento en la calle',
        subtitle: 'El software se segmenta en perfiles especializados donde cada usuario ve únicamente las herramientas necesarias para su labor.',
        h1Title: '💳 El Cajero',
        h1Desc: 'Director de orquesta. Controla accesos, despacha tareas y activa el Modo Rush.',
        h2Title: '🚗 El Valet',
        h2Desc: 'Brazo ejecutor de campo. Layout mobile-first con Check-in fotográfico y Spot Select.',
        h3Title: '🔑 El Llavero',
        h3Desc: 'Custodio de llaves. Controla el Digital Key Board y Hand-off de Entrada/Salida.',
        h4Title: '⚡ El Rampero',
        h4Desc: 'Absorbe autos en fila hacia rampas temporales para mitigar la congestión vial.',
        h5Title: '👑 El Administrador',
        h5Desc: 'Gerencia general con Dashboard en vivo de autos, propinas y tiempos.',
        cta: 'Explorar la plataforma →'
      },
      ctaBanner: {
        eyebrow: 'Transformación Total',
        title1: 'Deja atrás el papel y el radio.',
        title2: 'Eleva el prestigio de tu operación.',
        subtitle: 'Solicita una demostración y descubre por qué hoteles y restaurantes premium están migrando a ADDSPOT.',
        ctaPrimary: 'Solicitar Demostración'
      },
      
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
      },
      footer: {
        tagline: 'ADDSPOT: El Sistema Operativo Premium para Valet Parking y Control de Custodia Interna. AI Powered by Adstrategic.',
        col1: 'Plataforma',
        col2: 'Empresa',
        col3: 'Legal',
        links: {
          features: 'Pilares Operativos',
          modules: 'Roles del Sistema',
          howItWorks: 'Ciclo de Vida',
          benefits: 'Competencia',
          about: 'Adstrategic',
          contact: 'Contacto',
          demo: 'Solicitar Demo',
          privacy: 'Política de Privacidad',
          terms: 'Términos de Uso'
        },
        copyright1: 'Todos los derechos reservados.'
      },
      contact: {
        back: '← Volver al inicio',
        title1: 'Revoluciona tu',
        title2: 'Valet Parking.',
        desc: 'Completa el formulario y un especialista de ADDSPOT te mostrará cómo nuestra cadena de custodia digital puede proteger y optimizar tu negocio.',
        formTitle: 'Solicita una Demo',
        nameLabel: 'Nombre completo',
        namePh: 'Ej. Nicolás Forero',
        companyLabel: 'Hotel, Restaurante o Empresa',
        companyPh: 'Nombre de tu establecimiento',
        emailLabel: 'Correo electrónico',
        emailPh: 'tucorreo@empresa.com',
        phoneLabel: 'Teléfono / WhatsApp',
        phonePh: '+1 234 567 890',
        messageLabel: '¿Cuál es el volumen aproximado de autos por día?',
        messagePh: 'Ej. Procesamos cerca de 400 autos diarios...',
        sending: 'Enviando...',
        sent: '¡Solicitud Enviada!',
        submit: 'Solicitar Demostración',
        success: 'Gracias por tu interés en ADDSPOT. Nuestro equipo te contactará en breve.'
      }
    }
  },
  en: {
    translation: {
      seo: {
        homeTitle: 'ADDSPOT | Premium Internal Logistics & Custody Control OS',
        homeDesc: 'ADDSPOT transforms Valet Parking services with a digital assembly line, unbreakable chain of custody, and legal shielding.',
        contactTitle: 'Contact & Free Demo | ADDSPOT',
        contactDesc: 'Get in touch with our team and discover how ADDSPOT can transform your Valet Parking operation.'
      },
      navbar: {
        features: 'Core Pillars',
        modules: 'System Roles',
        howItWorks: 'Lifecycle',
        benefits: 'Competitors',
        requestDemo: 'Request Demo',
        language: 'ES'
      },
      hero: {
        badge: 'ADDSPOT — Valet OS AI Powered by Adstrategic',
        title1: 'The Digital Valet OS',
        titleAccent: 'Zero Paper.',
        title2: 'Faster Deliveries.',
        subtitle: 'Total key control, anti-lawsuit photographic records, and digital tickets. The platform that shields your logistics.',
        ctaPrimary: 'Request Free Demo',
        ctaSecondary: 'See how it works',
        videoPlaceholder: 'DEMONSTRATION VIDEO',
        slides: [
          { label: "Operational dashboard for management" },
          { label: "Mobile valet assignment inbox" },
          { label: "Digital custody board for keyholders" },
          { label: "Fast scanning & photogrammetry" }
        ]
      },
      stats: {
        headline: 'Operational metrics processed in real time',
        items: [
          { label: 'Digital Chain of Custody' },
          { label: 'Tracking & Traceability' },
          { label: 'Rush Mode (High Volume)' },
          { label: 'Instant Wallet Pass' }
        ]
      },
      features: {
        badge: 'Core Pillars',
        title1: 'Total control of your operation,',
        title2: 'from the engine to the key.',
        subtitle: 'Specifically designed to solve logistics problems for luxury hotels, premium restaurants, and massive events.',
        f1Title: 'Anti-Lawsuit Shielding (360° Photos)',
        f1Desc: 'Your valets must take 4 mandatory photos upon receiving the car and another when parking it. If a client claims a prior scratch, you have visual proof in seconds with exact time.',
        f2Title: 'Live Financial Audit',
        f2Desc: 'Forget about petty theft. Visualize in real-time every car charged, cash flow, and employee performance right from your admin panel.',
        f3Title: 'Field Security',
        f3Desc: 'Isolated "End Shift" button logically locked if the user holds keys or cars under their custody.',
        f4Title: 'Offline-First Architecture',
        f4Desc: 'Designed for concrete basements with no internet. Keeps operating and syncs when signal returns.',
        f5Title: 'Dual Photo Validation',
        f5Desc: 'Visual capture at Check-in (damages) and Spot Select (visual confirmation of the exact parking space).',
        f6Title: 'Pases Digitales de Lujo',
        f6Desc: 'Instant delivery of a Wallet Pass (Apple/Google) to the customer\'s phone, speeding up requests and payments.'
      },
      problems: {
        badge: 'The Status Quo',
        title1: 'Traditional valet is',
        title2: 'costing you money & clients.',
        subtitle: 'In a market dominated by paper and lack of control, ADDSPOT introduces absolute order and traceability.',
        cta: 'Change the Status Quo →',
        items: [
          '💸 Revenue Leaks: Do you really know how many cars entered today and how many tips were generated?',
          '🚗 Unfair Lawsuits: Clients claiming bumps and scratches their car already had. Without proof, you pay.',
          '🔑 Booth Chaos: "Who has the Mercedes key?". Minutes wasted looking for keys on the wrong hook.',
          '🎫 Lost Tickets: Angry clients waiting at the door because they lost their little paper.'
        ]
      },
      howItWorks: {
        badge: 'Event Flow',
        title1: 'A perfect orchestration.',
        title2: 'How your lot flows in peak hours:',
        subtitle: 'A perfect orchestration from the arrival of the car to the moment the customer drives away.',
        steps: [
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
        ]
      },
      benefits: {
        badge: 'The Competition',
        title1: 'Why ADDSPOT is superior',
        title2: 'to any app on the market.',
        subtitle: 'Analyze the fundamental difference between ADDSPOT, corporate apps, and direct US competitors.',
        items: [
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
        ]
      },
      showcase: {
        badge: 'Role Ecosystem',
        title1: 'Designed to optimize',
        title2: 'performance on the street',
        subtitle: 'The software is segmented into specialized profiles where each user only sees the tools needed for their job.',
        h1Title: '💳 The Cashier',
        h1Desc: 'The conductor. Controls access, dispatches tasks, and triggers Rush Mode.',
        h2Title: '🚗 The Valet',
        h2Desc: 'Field executor. Mobile-first layout with photo Check-in and Spot Select.',
        h3Title: '🔑 The Keyholder',
        h3Desc: 'Key guardian. Controls the Digital Key Board and Entry/Exit Hand-offs.',
        h4Title: '⚡ The Runner',
        h4Desc: 'Absorbs queued cars into temporary ramps to mitigate traffic congestion.',
        h5Title: '👑 The Admin',
        h5Desc: 'General management with live Dashboard of cars, tips, and times.',
        cta: 'Explore the platform →'
      },
      ctaBanner: {
        eyebrow: 'Total Transformation',
        title1: 'Leave the paper and radio behind.',
        title2: 'Elevate your operation\'s prestige.',
        subtitle: 'Request a demo and discover why premium hotels and restaurants are migrating to ADDSPOT.',
        ctaPrimary: 'Request Demonstration'
      },
      
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
      },
      footer: {
        tagline: 'ADDSPOT: The Premium Operating System for Valet Parking and Internal Custody Control. AI Powered by Adstrategic.',
        col1: 'Platform',
        col2: 'Company',
        col3: 'Legal',
        links: {
          features: 'Core Pillars',
          modules: 'System Roles',
          howItWorks: 'Lifecycle',
          benefits: 'Competitors',
          about: 'Adstrategic',
          contact: 'Contact',
          demo: 'Request Demo',
          privacy: 'Privacy Policy',
          terms: 'Terms of Use'
        },
        copyright1: 'All rights reserved.'
      },
      contact: {
        back: '← Back to home',
        title1: 'Revolutionize your',
        title2: 'Valet Parking.',
        desc: 'Fill out the form and an ADDSPOT specialist will show you how our digital chain of custody can protect and optimize your business.',
        formTitle: 'Request a Demo',
        nameLabel: 'Full Name',
        namePh: 'e.g. Nicolas Forero',
        companyLabel: 'Hotel, Restaurant or Company',
        companyPh: 'Your establishment name',
        emailLabel: 'Email address',
        emailPh: 'youremail@company.com',
        phoneLabel: 'Phone / WhatsApp',
        phonePh: '+1 234 567 890',
        messageLabel: 'What is your approximate car volume per day?',
        messagePh: 'e.g. We process around 400 cars daily...',
        sending: 'Sending...',
        sent: 'Request Sent!',
        submit: 'Request Demonstration',
        success: 'Thanks for your interest in ADDSPOT. Our team will contact you shortly.'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  })

export default i18n
