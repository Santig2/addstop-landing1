# **🚀 DOCUMENTO MAESTRO DE ESPECIFICACIÓN: ADDSPOT (VALET OS)**

**Sistema Operativo de Logística Interna y Control de Custodia Premium**

## **🎯 1\. RESUMEN COMPLETO DE LA SOLUCIÓN (¿Qué es ADDSPOT?)**

**ADDSPOT** no es una aplicación de estacionamiento común; es un **Sistema Operativo de Logística Interna (Valet OS)** diseñado para transformar por completo los servicios de Valet Parking de gama media-alta y alto volumen.

En un mercado donde el papel, los radios analógicos y la falta de control dominan el día a día, ADDSPOT introduce una **línea de ensamblaje digital**. A través de una interfaz de usuario móvil y web de categoría *Premium* —diseñada bajo una estética fintech con transparencias y contrastes neón funcionales— la plataforma conecta en tiempo real a todas las partes involucradas en la operación. El resultado es una **cadena de custodia digital e inquebrantable**: en cualquier segundo, la gerencia sabe con exactitud matemática quién tiene un vehículo, dónde está estacionado y en qué gancho físico cuelga su llave.

## **💎 2\. IDENTIDAD CORPORATIVA Y ESTRATEGIA DE IA**

### **Estructura de la Organización**

* **Dueños y Fundadores (CEOs):**  
  * **Nicolás Forero:** Co-Fundador & CEO / Desarrollador Full Stack Senior.  
  * **Santiago Arias:** Co-Fundador & CEO / Desarrollador Frontend, Diseñador UI/UX y Gestor de Estrategia de Ventas.

### **Sello de Tecnología: El Ganador**

Para firmar y posicionar la tecnología de la aplicación frente a inversores y clientes, se ha evaluado el nombre de la estrategia tecnológica:

**Estrategia Seleccionada:** **"AI Powered by Adstrategic"**

* **Por qué es mejor:** Tiene mucha más fuerza comercial, suena sofisticada, evoca inteligencia predictiva y posiciona a *Adstrategic* como la firma matriz de ingeniería e innovación de vanguardia detrás del ecosistema.

## **📊 3\. APARTADO LCO (Logística, Competencia y Optimización)**

### **Palabras Claves (Keywords Operativas)**

Cadena de custodia · Trazabilidad automotriz · Valet OS · Modo Rush · Fotogrametría legal · Mapeo de spots · Tablero digital de llaves · Offline-first · Wallet Pass · Eficiencia transaccional · Fintech UX.

### **Información Concreta**

* **Modelo de Negocio:** B2B SaaS (Software as a Service) para hoteles de lujo, restaurantes premium, clubes privados, hospitales y operadores de eventos masivos.  
* **Especificación Técnica Base:** Next.js 15 (App Router), TypeScript, Tailwind CSS, componentes de *shadcn/ui*, gráficos reactivos con *recharts*, e integraciones nativas con las cámaras de los dispositivos para escaneo y validación.  
* **Entorno de Desarrollo Inteligente:** Antigravity IDE, utilizando de manera simbiótica *Gemini Agent* y *Claude Code* para la automatización y aceleración del código.

### **Información Clave (Los Pilares Operativos)**

1. **Blindaje Legal Antifraude:** Protocolo estricto de fotos 360° reales y obligatorias al ingreso que protegen al negocio de demandas por daños preexistentes.  
2. **Cálculo Transaccional Puro:** Se erradicaron por completo los datos hardcodeados. Todas las métricas de turnos, ganancias y velocidades son calculadas dinámicamente en tiempo real desde la base de datos operativa.  
3. **Seguridad de Campo:** El botón "Finalizar Turno" se encuentra aislado en el perfil del empleado y se bloquea lógicamente si el usuario posee llaves o autos bajo su custodia.

### **Información Comparativa (Competencia Directa)**

* **Apps Corporativas (Skedda, Wayleadr, Ronspot):** **No son competencia.** Estas herramientas están diseñadas para la reserva estática de escritorios o parkings de empleados en oficinas híbridas. No entienden la velocidad ni la logística de la calle.  
* **Competencia Directa en USA (FlashValet, SMS Valet):** ADDSPOT toma una ventaja competitiva radical gracias a:  
  * **El Rol del Llavero Centralizado:** Mientras otras apps permiten que el valet guarde la llave donde sea, ADDSPOT exige una transferencia digital de custodia hacia un Llavero dedicado en caseta, mapeando ganchos físicos en tiempo real.  
  * **Doble Validación Fotográfica:** Se captura evidencia visual en el Check-in (daños) y en el Spot Select (confirmación visual de la plaza exacta donde descansa el auto).  
  * **Arquitectura Offline-First Real:** Diseñada específicamente para sótanos y estructuras de concreto donde el internet se pierde; los competidores se congelan, ADDSPOT sigue operando y sincroniza al recuperar la señal.

## **🎨 4\. MARCA, ESTILOS Y ESTÉTICA (UI/UX)**

Concepto visual: **"Vibrant Dynamic Premium Theme"** (Estética fintech oscura de primer nivel).

* **Fondo General (Background):** \#0A0B0F (Base profunda).  
* **Superficies (Surface):** \#12141A (Contenedores limpios).  
* **Tarjetas (Cards):** \#1A1D26 (Contraste modular).  
* **Color Principal (Primary):** \#5B7FFF (AddSpot Blue).  
* **Color Secundario (Secondary):** \#61C0BF (Teal/Cian balanceado).  
* **Acento de Estado (Accent):** \#22D4F5 (Cian brillante para tracking y GPS).  
* **Alertas y Éxito:** Éxito (\#2DD87A), Advertencias/Propinas (\#F5A623), Bloqueos (\#FF5252).  
* **Tipografía:** *Syne* para Headings (personalidad e impacto visual), *DM Sans* para el cuerpo de la app (lectura veloz), y *DM Mono* para placas y ganchos de llaves (evita errores tipográficos en caracteres críticos).  
* **Efectos:** *Glassmorphism* avanzado (backdrop-filter: blur(24px)), bordes ultrafinos de 0.5px, y *Blobs* dinámicos animados flotando sutilmente en los fondos de pantalla.

## **🛠️ 5\. ROLES Y FUNCIONES A DETALLE**

Para optimizar el rendimiento en la calle, el software se segmenta en 5 perfiles especializados donde cada usuario ve únicamente las herramientas necesarias para su labor:

### **💳 1\. El Cajero (Cashier)**

* **Propósito:** Director de orquesta en la puerta. Controla los accesos, despacha tareas al personal operativo y administra los cobros.  
* **Módulos:**  
  * *Check-in Inicial:* Registro veloz del auto y datos del cliente.  
  * *Modo "Alto Volumen" (Modo Rush):* Switch que simplifica los formularios al mínimo para ingresar autos masivamente en horas pico sin detener la fila.  
  * *Queue & Assignment:* Panel para delegar vehículos en espera a Valets o Runners específicos vía notificaciones push.  
  * *Payments & Requests:* Procesa transacciones y dispara la alerta digital de "Traer Vehículo" una vez saldada la cuenta.

### **🚗 2\. El Valet (Driver)**

* **Propósito:** El brazo ejecutor de campo. Conduce de forma segura, documenta el estado del coche e interactúa con el cliente. Layout mobile-first estricto (375px) con botones masivos (mínimo 48px de alto).  
* **Módulos:**  
  * *Bandeja de Asignaciones (Home):* Recibe alertas reactivas de ingresos o retiros. **Permite reanudar tickets pausados exactamente desde el paso donde quedaron.**  
  * *Check-in Fotográfico:* Stepper restrictivo de 4 fotos obligatorias usando la cámara nativa para blindaje legal.  
  * *Tracking (GPS):* Cronometra el trayecto hacia el estacionamiento. Cambia a *Modo Offline* si se pierde la señal en sótanos.  
  * *Spot Select:* Elige el cajón libre en un mapa interactivo y captura una foto final del auto estacionado.  
  * *Deliver Flow:* Proceso de salida que lee el código QR del Wallet Pass del cliente, registra propinas y cierra la orden.

### **🔑 3\. El Llavero (Keyholder)**

* **Propósito:** Custodio absoluto de la seguridad física de las llaves. Trabaja dentro de la cabina blindada y interactúa exclusivamente con los Valets.  
* **Módulos:**  
  * *Digital Key Board:* Matriz configurable en tablet de los ganchos físicos. Muestra estados interactivos: asignado a placa (🔑 en ámbar), libre (gris) o dañado ($\\times$).  
  * *Hand-off de Entrada/Salida:* Registra con sellos de tiempo inmutables el momento exacto en que recibe o libera una llave, delimitando responsabilidades civiles.  
  * *Módulo Audit:* Herramienta de cruce rápido al cierre de jornada para verificar que las llaves físicas calcen con el sistema.

### **⚡ 4\. El Rampero (Runner)**

* **Propósito:** Operario de alta velocidad diseñado para mitigar la congestión vial en picos de demanda extrema.  
* **Módulos:** Posee una interfaz ágil adaptada del Valet, enfocada en el *Quick-Checkin* para absorber autos de la fila y moverlos a rampas de amortiguamiento temporal en tramos cortos, agilizando la entrada del establecimiento.

### **👑 5\. El Administrador (Admin)**

* **Propósito:** Gerencia general, analítica de negocio y configuración del sistema. Interfaz desktop-first con sidebar fija de 240px.  
* **Módulos:**  
  * *Dashboard:* Visualiza KPIs en vivo (Autos Activos, En Movimiento, Propinas Totales) con gráficos de recharts por franja horaria.  
  * *Team & Log:* Monitorea el estatus del personal en tiempo real y supervisa el registro inmutable de acciones del sistema.  
  * *Onboarding Setup:* Constructor paso a paso para delimitar geocercas, cargar logos corporativos y diseñar la cuadrícula del tablero de llaves.

## **🔄 6\. EL CICLO DE VIDA DEL VEHÍCULO (FLUJO DE EVENTOS)**

\[ INGRESO \]  
  1\. El Cajero crea el ticket (activa Modo Rush si es necesario) y asigna un Valet disponible.  
  2\. El Valet recibe la alerta en su Home móvil.  
     ├─ Hace Check-in: Escanea placa y toma las 4 fotos obligatorias.  
     ├─ El sistema dispara automáticamente el Wallet Pass (Apple/Google) al celular del cliente.  
     ├─ Conduce al estacionamiento: El módulo Tracking mide los tiempos del trayecto.  
     └─ Asegura el auto: Elige el espacio en "Spot Select", toma foto de cómo quedó y va a la caseta.  
  3\. El Llavero recibe la llave física, acepta el "Key Handoff" en su tablet y la cuelga en el gancho (ej. B7).  
       
\[ EL AUTO QUEDA EN ESTADO: "ASEGURADO / EN REPOSO" \]

\[ EGRESO \]  
  4\. El Cliente paga en la caja o vía Wallet. El Cajero procesa el "Payment" y el sistema genera un "Request" urgente.  
  5\. El Valet ve el flash neón de alerta prioritaria en su pantalla de inicio.  
     ├─ Va a caseta: Solicita la llave y el Llavero la libera digitalmente en su pantalla.  
     ├─ Trae el coche: La app le indica el spot exacto (ej. Sótano 2 \- A5) junto con la foto de referencia.  
     ├─ Conduce a la puerta de salida.  
     ├─ Valida identidad: Escanea el código QR del Wallet Pass del cliente con la cámara nativa.  
     └─ Cierre: Registra la propina de forma aislada y presiona "Marcar como Entregado".  
  6\. El sistema libera automáticamente el cajón y el gancho en el backend.  
  7\. El Administrador ve el KPI de la operación reflejado en su Dashboard al instante.

## **🏗️ 7\. PLAN DE INICIO DE DESARROLLO (FRONTEND PRIMERO)**

Para empezar a programar con **Antigravity**, **Gemini Agent** y **Claude Code**, ejecuta los siguientes pasos en orden estricto:

### **Configuración del Entorno (Skills previas)**

Antes de tirar la primera línea de código, asegúrate de tener configurado lo siguiente en tu entorno de agentes:

1. **TypeScript Strict Mode:** Configurar las reglas de tipado estricto para evitar errores de hidratación y manejo de objetos de ticket entre componentes.  
2. **Tailwind CSS & shadcn/ui CLI:** Instalar los LSPs de Tailwind en el editor para que las clases del "Premium Dark Theme" se autocompleten de forma fluida.  
3. **Estructura de Componentes Atómicos:** Configurar a los agentes con la instrucción de no mezclar lógica de negocio con la UI. Todo elemento visual (*Button, Card con Glassmorphism, Badge*) debe vivir aislado.

### **Estructura de Carpetas Recomendada (AI-Friendly)**

Plaintext  
src/  
├── app/  
│   ├── (auth)/             \# Login y registro de empresas  
│   ├── (onboarding)/       \# Configurador inicial paso a paso  
│   ├── (admin)/            \# Dashboard, Live Map, Reportes  
│   └── (valet)/            \# Home móvil, Check-in Stepper, Deliver  
├── components/  
│   ├── ui/                 \# Componentes base de shadcn/ui  
│   └── addspot/            \# Premium Cards, KeyBoardGrid, SpotGrid  
├── context/                \# Estado global ligero para flujos reactivos  
└── lib/  
    └── mock-data.ts        \# Marcas, nombres de valets y placas para pruebas  
