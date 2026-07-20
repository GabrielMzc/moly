(() => {
  "use strict";

  const translations = {
    "pt-BR": {
      meta: {
        title: "SILENCER® | Troncos hidráulicos",
        description:
          "SILENCER® Hydraulic Squeeze Chutes no Brasil. Conheça os modelos de tronco hidráulico, medidas e opções para o seu manejo.",
        ogLocale: "pt_BR",
      },
      a11y: {
        skip: "Pular para o conteúdo",
        home: "SILENCER, início",
        openMenu: "Abrir menu",
        closeMenu: "Fechar menu",
        navigation: "Navegação principal",
        language: "Selecionar idioma",
        languagePortuguese: "Português (Brasil)",
        languageEnglish: "Inglês",
        languageSpanish: "Espanhol",
      },
      brand: { manufacturer: "Uma marca Moly Manufacturing" },
      nav: {
        differentials: "Diferenciais",
        models: "Pró × Compacto",
        sorter: "Apartador",
        specs: "Ficha técnica",
        quote: "Solicitar orçamento",
      },
      hero: {
        eyebrow: "Contenção hidráulica bovina",
        edition: "SILENCER® / hidráulico / engenharia Moly",
        title: "Troncos hidráulicos. <em>Manejo sob controle.</em>",
        lead:
          "Os modelos Pró e Compacto reúnem estrutura 100% em aço, contenção hidráulica e acessos funcionais para uma rotina mais segura, silenciosa e precisa.",
        compare: "Comparar modelos",
        project: "Solicitar projeto",
        specialist: "Falar com um especialista",
        proofsLabel: "Principais atributos",
        proofPro: "Tronco Pró",
        proofCompact: "Tronco Compacto",
        proofHydraulic: "Sistema hidráulico",
        featured: "Modelo em destaque",
        technicalView: "Vista técnica / dimensões de projeto",
      },
      metrics: {
        label: "Dados técnicos em destaque",
        steel: "estrutura em aço",
        weight: "peso de projeto do Pró",
        length: "comprimento do Pró",
        modelsSuffix: " modelos",
        profiles: "para perfis distintos",
      },
      differentials: {
        eyebrow: "Engenharia aplicada ao manejo",
        title: "Menos interferência.<br><em>Mais controle.</em>",
        lead:
          "Cada abertura, comando e ponto de acesso foi pensado para manter o animal avançando e dar ao operador uma leitura clara da operação.",
        doorLabel: "Metáfora visual de portas se abrindo",
        flow: "Fluxo",
        continuous: "contínuo",
        doorCaption: "Abertura ampla para entrada, acesso e saída.",
        noiseTitle: "Operação com menos ruído",
        noiseText:
          "Barras móveis e soluções de fechamento reduzem impactos metálicos e ajudam a preservar um ambiente de manejo mais calmo.",
        flowTitle: "Fluxo contínuo",
        flowText:
          "Persianas bloqueiam distrações externas e as aberturas amplas favorecem uma passagem mais direta pela estação.",
        hydraulicTitle: "Contenção progressiva",
        hydraulicText:
          "Apertos hidráulicos independentes abraçam o corpo do animal e dão ao operador mais precisão durante a contenção.",
        accessTitle: "Acesso onde importa",
        accessText:
          "Portas inferiores, barras superiores e saídas de emergência agilizam procedimentos, inspeção, limpeza e manutenção.",
      },
      models: {
        eyebrow: "Modelos da linha Tronco",
        title: "Pró ou Compacto:<br><em>qual cabe na sua rotina?</em>",
        lead:
          "A escolha parte do espaço disponível e do tipo de procedimento. Compare a configuração documentada de cada modelo.",
        proLine: "01 / Linha profissional",
        proBadge: "Maior acesso",
        proSummary:
          "A configuração mais completa para operações que exigem acesso veterinário, segurança adicional e maior área de trabalho.",
        fitLabel: "Perfil indicado",
        fitUse: "Perfil",
        fitSpace: "Instalação",
        fitHighlight: "Destaque",
        proFitUse: "Maior nível de acesso",
        proFitSpace: "3,36 m de comprimento",
        proFitHighlight: "Portão veterinário bilateral",
        proFeature1: "Portão veterinário com abertura bilateral",
        proFeature2: "Barras anticoice hidráulicas",
        proFeature3: "Comandos móveis bilaterais",
        proFeature4: "Acesso inferior e superior ampliado",
        proCta: "Cotar Tronco Pró",
        compactLine: "02 / Linha essencial",
        compactBadge: "Menor comprimento",
        compactName: "Compacto",
        compactSummary:
          "Contenção hidráulica completa em um conjunto mais curto, indicado para estruturas que precisam aproveitar melhor o espaço.",
        compactFitUse: "Melhor aproveitamento do espaço",
        compactFitSpace: "2,60 m de comprimento",
        compactFitHighlight: "Contenção superior e inferior",
        compactFeature1: "Pescoceira hidráulica direcionável",
        compactFeature2: "Aperto superior e inferior independentes",
        compactFeature3: "Duas meias-portas inferiores",
        compactFeature4: "Comando móvel articulado",
        compactCta: "Cotar Tronco Compacto",
      },
      comparison: {
        eyebrow: "Comparativo técnico",
        title: "Dados documentados nos projetos",
        lead:
          "Configurações elétricas disponíveis em versões monofásica e trifásica, conforme definição do projeto.",
        tableLabel: "Tabela comparativa dos modelos",
        feature: "Característica",
        structure: "Estrutura",
        steel: "100% em aço",
        dimensions: "Dimensões externas",
        weight: "Peso de projeto",
        confirm: "A confirmar",
        body: "Contenção do corpo",
        proBody: "Aperto inferior independente",
        compactBody: "Aperto superior e inferior independentes",
        vet: "Acesso veterinário",
        proVet: "Portão bilateral dedicado",
        compactVet: "Acessos inferiores e superiores",
        safety: "Segurança adicional",
        proSafety: "Barras anticoice hidráulicas",
        compactSafety: "Pescoceira hidráulica",
        controls: "Comandos",
        proControls: "Móveis e bilaterais",
        compactControls: "Braço móvel articulado",
        note:
          "Medidas e componentes finais devem ser confirmados no desenho do projeto antes da fabricação.",
      },
      sorter: {
        eyebrow: "Complemento da linha",
        title: "O tronco contém.<br><em>O apartador direciona.</em>",
        lead:
          "Instalado após o tronco, o módulo hidráulico organiza a saída do animal sem quebrar o ritmo da operação.",
        routeTitle: "3 vias",
        routeText: "esquerda, direita ou em frente",
        expandTitle: "Expansível",
        expandText: "pode formar 5, 7 ou mais vias",
        integratedTitle: "Integrado",
        integratedText: "acionamento no mesmo conjunto elétrico do tronco",
        referenceTitle: "Referência",
        referenceText: "1,10 × 1,81 × 2,55 m no documento técnico",
        cta: "Incluir apartador no projeto",
        tag: "Acessório / 3 vias",
        caption: "Estrutura 100% em aço · comando junto ao tronco · baixa manutenção",
      },
      technical: {
        eyebrow: "Ficha técnica / Tronco Pró",
        title: "Dimensões para<br><em>planejar a instalação.</em>",
        lead:
          "Referência de projeto do conjunto com piso vazado. Use estas medidas para uma avaliação inicial e valide as interfaces no projeto executivo.",
        drawing: "Desenho K000001",
        scale: "Escala 1:38",
        expand: "Ampliar desenho",
        caption: "Vistas frontal, lateral e isométrica / Tronco com piso vazado",
        width: "Largura",
        length: "Comprimento",
        height: "Altura",
        weight: "Peso indicado",
        checkTitle: "Antes de instalar, confirme",
        checkElectrical: "Alimentação elétrica do projeto",
        checkArea: "Área livre para operação e manutenção",
        checkFlow: "Corredor de entrada e sentido de saída",
        checkSorter: "Integração com o módulo apartador",
        callout:
          "<strong>Antes de preparar a base:</strong> confirme alimentação elétrica, área de operação, corredor de entrada, sentido de saída e necessidade do módulo apartador com a equipe de projeto.",
        cta: "Solicitar avaliação técnica →",
        dialogTitle: "Desenho técnico completo / Tronco Pró",
        close: "Fechar",
      },
      contact: {
        eyebrow: "Projeto sob medida",
        title: "Vamos desenhar o tronco certo para <em>a sua operação.</em>",
        lead:
          "Conte à equipe como funciona o seu manejo. A recomendação do modelo, dos comandos e dos complementos parte da rotina real da fazenda.",
        stepsLabel: "Como funciona",
        step1: "Conte sobre a operação",
        step2: "Receba uma recomendação",
        step3: "Valide o projeto técnico",
        channelsLabel: "Canais de atendimento",
        service: "Atendimento SILENCER Brasil",
        phone: "Telefone / WhatsApp",
        email: "E-mail comercial",
        address: "Endereço",
        pending: "A definir",
      },
      form: {
        kicker: "Solicitação de projeto",
        title: "Fale com a engenharia comercial",
        time: "≈ 1 min",
        more: "Adicionar detalhes da operação (opcional)",
        name: "Nome",
        namePlaceholder: "Seu nome",
        company: "Fazenda ou empresa",
        companyPlaceholder: "Nome da operação",
        phone: "Telefone / WhatsApp",
        phonePlaceholder: "(00) 00000-0000",
        email: "E-mail",
        emailPlaceholder: "nome@empresa.com.br",
        region: "Estado / região",
        regionPlaceholder: "Ex.: Goiás",
        model: "Modelo de interesse",
        select: "Selecione",
        helpChoose: "Preciso de ajuda para escolher",
        message: "Como funciona o seu manejo?",
        messagePlaceholder:
          "Volume de animais, procedimentos, espaço disponível e principais necessidades.",
        consent: "Concordo com o uso dos dados para retorno sobre esta solicitação.",
        submit: "Solicitar avaliação",
        requiredError: "Preencha os campos obrigatórios destacados.",
        emailError: "Informe um e-mail válido.",
        consentError: "Confirme o consentimento para continuar.",
        readyMessage:
          "Dados validados. O envio será habilitado assim que o canal comercial oficial for conectado.",
      },
      footer: {
        tagline: "Engenharia para um manejo mais seguro, preciso e contínuo.",
      },
      images: {
        proPerspective: "Tronco Pró de contenção bovina, visto em perspectiva",
        proOpen: "Tronco Pró com portão lateral totalmente aberto",
        proModel: "Modelo Tronco Pró",
        compactModel: "Modelo Tronco Compacto com portão lateral aberto",
        sorter: "Módulo apartador hidráulico de três vias",
        drawing: "Desenho técnico completo do Tronco Pró com vistas frontal, lateral e isométrica",
      },
    },
    en: {
      meta: {
        title: "SILENCER® | Hydraulic squeeze chutes",
        description:
          "SILENCER® Hydraulic Squeeze Chutes. Explore hydraulic chute models, dimensions, and options for your operation.",
        ogLocale: "en_US",
      },
      a11y: {
        skip: "Skip to content",
        home: "SILENCER, home",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        navigation: "Main navigation",
        language: "Select language",
        languagePortuguese: "Portuguese (Brazil)",
        languageEnglish: "English",
        languageSpanish: "Spanish",
      },
      brand: { manufacturer: "A Moly Manufacturing brand" },
      nav: {
        differentials: "Advantages",
        models: "Pro × Compact",
        sorter: "Sorter",
        specs: "Specifications",
        quote: "Request a quote",
      },
      hero: {
        eyebrow: "Hydraulic cattle handling",
        edition: "SILENCER® / hydraulic / Moly engineering",
        title: "Hydraulic chutes. <em>Handling under control.</em>",
        lead:
          "Pro and Compact combine an all-steel structure, hydraulic restraint and functional access points for safer, quieter and more precise handling.",
        compare: "Compare models",
        project: "Request a project",
        specialist: "Talk to a specialist",
        proofsLabel: "Key attributes",
        proofPro: "Tronco Pro",
        proofCompact: "Tronco Compact",
        proofHydraulic: "Hydraulic system",
        featured: "Featured model",
        technicalView: "Technical view / project dimensions",
      },
      metrics: {
        label: "Featured technical data",
        steel: "all-steel structure",
        weight: "Pro project weight",
        length: "Pro overall length",
        modelsSuffix: " models",
        profiles: "for different operations",
      },
      differentials: {
        eyebrow: "Engineering applied to handling",
        title: "Less interference.<br><em>More control.</em>",
        lead:
          "Every opening, control and access point is designed to keep cattle moving and give the operator a clear view of the process.",
        doorLabel: "Visual metaphor of doors opening",
        flow: "Forward",
        continuous: "flow",
        doorCaption: "Wide opening for entry, access and release.",
        noiseTitle: "Quieter operation",
        noiseText:
          "Moving bars and closing solutions reduce metal impact and help maintain a calmer handling environment.",
        flowTitle: "Continuous flow",
        flowText:
          "Louvers block outside distractions while wide openings encourage a more direct path through the station.",
        hydraulicTitle: "Progressive restraint",
        hydraulicText:
          "Independent hydraulic squeeze points hold the animal's body and give the operator greater precision.",
        accessTitle: "Access where it matters",
        accessText:
          "Lower doors, upper bars and emergency exits support procedures, inspection, cleaning and maintenance.",
      },
      models: {
        eyebrow: "Tronco product line",
        title: "Pro or Compact:<br><em>which fits your routine?</em>",
        lead:
          "The choice starts with available space and procedure type. Compare each model's documented configuration.",
        proLine: "01 / Professional line",
        proBadge: "Maximum access",
        proSummary:
          "The most complete configuration for operations requiring veterinary access, additional safety and a larger working area.",
        fitLabel: "Recommended profile",
        fitUse: "Profile",
        fitSpace: "Installation",
        fitHighlight: "Highlight",
        proFitUse: "Maximum access level",
        proFitSpace: "3.36 m overall length",
        proFitHighlight: "Two-side veterinary gate",
        proFeature1: "Dedicated veterinary gate with two-side access",
        proFeature2: "Hydraulic anti-kick bars",
        proFeature3: "Mobile controls on both sides",
        proFeature4: "Expanded lower and upper access",
        proCta: "Quote Tronco Pro",
        compactLine: "02 / Essential line",
        compactBadge: "Shorter footprint",
        compactName: "Compact",
        compactSummary:
          "Complete hydraulic restraint in a shorter unit for facilities that need to make better use of available space.",
        compactFitUse: "Better use of available space",
        compactFitSpace: "2.60 m overall length",
        compactFitHighlight: "Upper and lower restraint",
        compactFeature1: "Directional hydraulic head restraint",
        compactFeature2: "Independent upper and lower squeeze",
        compactFeature3: "Two lower half-doors",
        compactFeature4: "Articulated mobile control arm",
        compactCta: "Quote Tronco Compact",
      },
      comparison: {
        eyebrow: "Technical comparison",
        title: "Project-documented data",
        lead:
          "Electrical configurations are available in single-phase and three-phase versions, as defined for each project.",
        tableLabel: "Model comparison table",
        feature: "Feature",
        structure: "Structure",
        steel: "100% steel",
        dimensions: "Overall dimensions",
        weight: "Project weight",
        confirm: "To be confirmed",
        body: "Body restraint",
        proBody: "Independent lower hydraulic squeeze",
        compactBody: "Independent upper and lower squeeze",
        vet: "Veterinary access",
        proVet: "Dedicated two-side gate",
        compactVet: "Lower and upper access points",
        safety: "Additional safety",
        proSafety: "Hydraulic anti-kick bars",
        compactSafety: "Hydraulic head restraint",
        controls: "Controls",
        proControls: "Mobile, both sides",
        compactControls: "Articulated mobile arm",
        note:
          "Final dimensions and components must be confirmed in the project drawing before manufacturing.",
      },
      sorter: {
        eyebrow: "Product line complement",
        title: "The chute restrains.<br><em>The sorter directs.</em>",
        lead:
          "Installed after the chute, the hydraulic module directs cattle without interrupting the pace of the operation.",
        routeTitle: "3 ways",
        routeText: "left, right or straight ahead",
        expandTitle: "Expandable",
        expandText: "can create 5, 7 or more routes",
        integratedTitle: "Integrated",
        integratedText: "powered by the same electric unit as the chute",
        referenceTitle: "Reference",
        referenceText: "1.10 × 1.81 × 2.55 m in the technical document",
        cta: "Add a sorter to the project",
        tag: "Accessory / 3 ways",
        caption: "All-steel structure · control beside the chute · low maintenance",
      },
      technical: {
        eyebrow: "Specifications / Tronco Pro",
        title: "Dimensions to<br><em>plan the installation.</em>",
        lead:
          "Project reference for the unit with slatted floor. Use these measurements for an initial assessment and validate every interface in the final project.",
        drawing: "Drawing K000001",
        scale: "Scale 1:38",
        expand: "Enlarge drawing",
        caption: "Front, side and isometric views / chute with slatted floor",
        width: "Width",
        length: "Length",
        height: "Height",
        weight: "Indicated weight",
        checkTitle: "Confirm before installation",
        checkElectrical: "Project electrical supply",
        checkArea: "Clear operating and maintenance area",
        checkFlow: "Entry alley and exit direction",
        checkSorter: "Sorter module integration",
        callout:
          "<strong>Before preparing the foundation:</strong> confirm electrical supply, operating area, entry alley, exit direction and sorter requirements with the project team.",
        cta: "Request a technical assessment →",
        dialogTitle: "Complete technical drawing / Tronco Pro",
        close: "Close",
      },
      contact: {
        eyebrow: "Built for your operation",
        title: "Let's define the right chute for <em>your operation.</em>",
        lead:
          "Tell us how your cattle handling works. Model, control and accessory recommendations start with the real routine of your operation.",
        stepsLabel: "How it works",
        step1: "Tell us about your operation",
        step2: "Receive a recommendation",
        step3: "Validate the technical project",
        channelsLabel: "Contact channels",
        service: "SILENCER Brazil service",
        phone: "Phone / WhatsApp",
        email: "Sales email",
        address: "Address",
        pending: "To be confirmed",
      },
      form: {
        kicker: "Project request",
        title: "Talk to our commercial engineering team",
        time: "≈ 1 min",
        more: "Add operation details (optional)",
        name: "Name",
        namePlaceholder: "Your name",
        company: "Farm or company",
        companyPlaceholder: "Operation name",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "+00 000 000 0000",
        email: "Email",
        emailPlaceholder: "name@company.com",
        region: "State / region",
        regionPlaceholder: "Your region",
        model: "Model of interest",
        select: "Select",
        helpChoose: "I need help choosing",
        message: "How does your operation work?",
        messagePlaceholder:
          "Number of cattle, procedures, available space and main requirements.",
        consent: "I agree to the use of my data to respond to this request.",
        submit: "Request assessment",
        requiredError: "Complete the highlighted required fields.",
        emailError: "Enter a valid email address.",
        consentError: "Confirm consent to continue.",
        readyMessage:
          "Data validated. Sending will be enabled when the official sales channel is connected.",
      },
      footer: {
        tagline: "Engineering for safer, more precise and continuous cattle handling.",
      },
      images: {
        proPerspective: "Tronco Pro cattle chute shown in perspective",
        proOpen: "Tronco Pro with its side gate fully open",
        proModel: "Tronco Pro model",
        compactModel: "Tronco Compact model with its side gate open",
        sorter: "Three-way hydraulic sorting module",
        drawing: "Complete Tronco Pro technical drawing with front, side and isometric views",
      },
    },
    es: {
      meta: {
        title: "SILENCER® | Troncos hidráulicos",
        description:
          "SILENCER® Hydraulic Squeeze Chutes. Conozca los modelos de tronco hidráulico, medidas y opciones para su manejo.",
        ogLocale: "es_ES",
      },
      a11y: {
        skip: "Saltar al contenido",
        home: "SILENCER, inicio",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        navigation: "Navegación principal",
        language: "Seleccionar idioma",
        languagePortuguese: "Portugués (Brasil)",
        languageEnglish: "Inglés",
        languageSpanish: "Español",
      },
      brand: { manufacturer: "Una marca de Moly Manufacturing" },
      nav: {
        differentials: "Diferenciales",
        models: "Pro × Compacto",
        sorter: "Apartador",
        specs: "Ficha técnica",
        quote: "Solicitar cotización",
      },
      hero: {
        eyebrow: "Contención hidráulica bovina",
        edition: "SILENCER® / hidráulico / ingeniería Moly",
        title: "Troncos hidráulicos. <em>Manejo bajo control.</em>",
        lead:
          "Los modelos Pro y Compacto reúnen estructura 100% de acero, contención hidráulica y accesos funcionales para una rutina más segura, silenciosa y precisa.",
        compare: "Comparar modelos",
        project: "Solicitar proyecto",
        specialist: "Hablar con un especialista",
        proofsLabel: "Atributos principales",
        proofPro: "Tronco Pro",
        proofCompact: "Tronco Compacto",
        proofHydraulic: "Sistema hidráulico",
        featured: "Modelo destacado",
        technicalView: "Vista técnica / dimensiones del proyecto",
      },
      metrics: {
        label: "Datos técnicos destacados",
        steel: "estructura de acero",
        weight: "peso de proyecto del Pro",
        length: "largo total del Pro",
        modelsSuffix: " modelos",
        profiles: "para diferentes operaciones",
      },
      differentials: {
        eyebrow: "Ingeniería aplicada al manejo",
        title: "Menos interferencia.<br><em>Más control.</em>",
        lead:
          "Cada apertura, comando y punto de acceso fue pensado para mantener al animal avanzando y brindar al operador una lectura clara del proceso.",
        doorLabel: "Metáfora visual de puertas abriéndose",
        flow: "Flujo",
        continuous: "continuo",
        doorCaption: "Apertura amplia para entrada, acceso y salida.",
        noiseTitle: "Operación con menos ruido",
        noiseText:
          "Las barras móviles y las soluciones de cierre reducen impactos metálicos y ayudan a mantener un ambiente de manejo más tranquilo.",
        flowTitle: "Flujo continuo",
        flowText:
          "Las persianas bloquean distracciones externas y las aberturas amplias favorecen un paso más directo por la estación.",
        hydraulicTitle: "Contención progresiva",
        hydraulicText:
          "Los aprietes hidráulicos independientes contienen el cuerpo del animal y brindan mayor precisión al operador.",
        accessTitle: "Acceso donde importa",
        accessText:
          "Puertas inferiores, barras superiores y salidas de emergencia agilizan procedimientos, inspección, limpieza y mantenimiento.",
      },
      models: {
        eyebrow: "Modelos de la línea Tronco",
        title: "Pro o Compacto:<br><em>¿cuál se adapta a su rutina?</em>",
        lead:
          "La elección comienza por el espacio disponible y el tipo de procedimiento. Compare la configuración documentada de cada modelo.",
        proLine: "01 / Línea profesional",
        proBadge: "Mayor acceso",
        proSummary:
          "La configuración más completa para operaciones que requieren acceso veterinario, seguridad adicional y una mayor área de trabajo.",
        fitLabel: "Perfil indicado",
        fitUse: "Perfil",
        fitSpace: "Instalación",
        fitHighlight: "Destaque",
        proFitUse: "Mayor nivel de acceso",
        proFitSpace: "3,36 m de longitud",
        proFitHighlight: "Puerta veterinaria bilateral",
        proFeature1: "Puerta veterinaria con apertura bilateral",
        proFeature2: "Barras antipatadas hidráulicas",
        proFeature3: "Comandos móviles bilaterales",
        proFeature4: "Acceso inferior y superior ampliado",
        proCta: "Cotizar Tronco Pro",
        compactLine: "02 / Línea esencial",
        compactBadge: "Menor longitud",
        compactName: "Compacto",
        compactSummary:
          "Contención hidráulica completa en un conjunto más corto, indicado para instalaciones que necesitan aprovechar mejor el espacio.",
        compactFitUse: "Mejor aprovechamiento del espacio",
        compactFitSpace: "2,60 m de longitud",
        compactFitHighlight: "Contención superior e inferior",
        compactFeature1: "Sujetacabeza hidráulico orientable",
        compactFeature2: "Apriete superior e inferior independientes",
        compactFeature3: "Dos medias puertas inferiores",
        compactFeature4: "Brazo de comando móvil articulado",
        compactCta: "Cotizar Tronco Compacto",
      },
      comparison: {
        eyebrow: "Comparativo técnico",
        title: "Datos documentados en los proyectos",
        lead:
          "Configuraciones eléctricas disponibles en versiones monofásica y trifásica, según la definición de cada proyecto.",
        tableLabel: "Tabla comparativa de modelos",
        feature: "Característica",
        structure: "Estructura",
        steel: "100% de acero",
        dimensions: "Dimensiones externas",
        weight: "Peso de proyecto",
        confirm: "Por confirmar",
        body: "Contención del cuerpo",
        proBody: "Apriete inferior independiente",
        compactBody: "Apriete superior e inferior independientes",
        vet: "Acceso veterinario",
        proVet: "Puerta bilateral dedicada",
        compactVet: "Accesos inferiores y superiores",
        safety: "Seguridad adicional",
        proSafety: "Barras antipatadas hidráulicas",
        compactSafety: "Sujetacabeza hidráulico",
        controls: "Comandos",
        proControls: "Móviles y bilaterales",
        compactControls: "Brazo móvil articulado",
        note:
          "Las dimensiones y los componentes finales deben confirmarse en el plano del proyecto antes de la fabricación.",
      },
      sorter: {
        eyebrow: "Complemento de la línea",
        title: "El tronco contiene.<br><em>El apartador dirige.</em>",
        lead:
          "Instalado después del tronco, el módulo hidráulico organiza la salida del animal sin interrumpir el ritmo de la operación.",
        routeTitle: "3 vías",
        routeText: "izquierda, derecha o al frente",
        expandTitle: "Ampliable",
        expandText: "puede formar 5, 7 o más vías",
        integratedTitle: "Integrado",
        integratedText: "accionado por el mismo conjunto eléctrico del tronco",
        referenceTitle: "Referencia",
        referenceText: "1,10 × 1,81 × 2,55 m en el documento técnico",
        cta: "Incluir apartador en el proyecto",
        tag: "Accesorio / 3 vías",
        caption: "Estructura 100% de acero · comando junto al tronco · bajo mantenimiento",
      },
      technical: {
        eyebrow: "Ficha técnica / Tronco Pro",
        title: "Dimensiones para<br><em>planificar la instalación.</em>",
        lead:
          "Referencia de proyecto del conjunto con piso ranurado. Use estas medidas para una evaluación inicial y valide las interfaces en el proyecto ejecutivo.",
        drawing: "Plano K000001",
        scale: "Escala 1:38",
        expand: "Ampliar plano",
        caption: "Vistas frontal, lateral e isométrica / tronco con piso ranurado",
        width: "Ancho",
        length: "Longitud",
        height: "Altura",
        weight: "Peso indicado",
        checkTitle: "Confirme antes de instalar",
        checkElectrical: "Alimentación eléctrica del proyecto",
        checkArea: "Área libre para operación y mantenimiento",
        checkFlow: "Pasillo de entrada y dirección de salida",
        checkSorter: "Integración con el módulo apartador",
        callout:
          "<strong>Antes de preparar la base:</strong> confirme alimentación eléctrica, área de operación, pasillo de entrada, dirección de salida y necesidad del apartador con el equipo de proyecto.",
        cta: "Solicitar evaluación técnica →",
        dialogTitle: "Plano técnico completo / Tronco Pro",
        close: "Cerrar",
      },
      contact: {
        eyebrow: "Proyecto a medida",
        title: "Diseñemos el tronco adecuado para <em>su operación.</em>",
        lead:
          "Cuéntenos cómo funciona su manejo. La recomendación del modelo, los comandos y los complementos parte de la rutina real de la operación.",
        stepsLabel: "Cómo funciona",
        step1: "Cuéntenos sobre la operación",
        step2: "Reciba una recomendación",
        step3: "Valide el proyecto técnico",
        channelsLabel: "Canales de atención",
        service: "Atención SILENCER Brasil",
        phone: "Teléfono / WhatsApp",
        email: "Correo comercial",
        address: "Dirección",
        pending: "Por definir",
      },
      form: {
        kicker: "Solicitud de proyecto",
        title: "Hable con ingeniería comercial",
        time: "≈ 1 min",
        more: "Agregar detalles de la operación (opcional)",
        name: "Nombre",
        namePlaceholder: "Su nombre",
        company: "Hacienda o empresa",
        companyPlaceholder: "Nombre de la operación",
        phone: "Teléfono / WhatsApp",
        phonePlaceholder: "+00 000 000 0000",
        email: "Correo electrónico",
        emailPlaceholder: "nombre@empresa.com",
        region: "Estado / región",
        regionPlaceholder: "Su región",
        model: "Modelo de interés",
        select: "Seleccione",
        helpChoose: "Necesito ayuda para elegir",
        message: "¿Cómo funciona su manejo?",
        messagePlaceholder:
          "Volumen de animales, procedimientos, espacio disponible y principales necesidades.",
        consent: "Acepto el uso de mis datos para responder a esta solicitud.",
        submit: "Solicitar evaluación",
        requiredError: "Complete los campos obligatorios destacados.",
        emailError: "Ingrese un correo electrónico válido.",
        consentError: "Confirme el consentimiento para continuar.",
        readyMessage:
          "Datos validados. El envío se habilitará cuando se conecte el canal comercial oficial.",
      },
      footer: {
        tagline: "Ingeniería para un manejo más seguro, preciso y continuo.",
      },
      images: {
        proPerspective: "Tronco Pro de contención bovina visto en perspectiva",
        proOpen: "Tronco Pro con la puerta lateral totalmente abierta",
        proModel: "Modelo Tronco Pro",
        compactModel: "Modelo Tronco Compacto con la puerta lateral abierta",
        sorter: "Módulo apartador hidráulico de tres vías",
        drawing: "Plano técnico completo del Tronco Pro con vistas frontal, lateral e isométrica",
      },
    },
  };

  const localeFormats = {
    "pt-BR": "pt-BR",
    en: "en-US",
    es: "es-ES",
  };

  let currentLocale = "pt-BR";

  const readPath = (locale, path) =>
    path.split(".").reduce((value, key) => value?.[key], translations[locale]);

  const get = (path, locale = currentLocale) =>
    readPath(locale, path) ?? readPath("pt-BR", path) ?? path;

  const applyLocale = (locale, persist = true) => {
    if (!translations[locale]) locale = "pt-BR";
    currentLocale = locale;
    document.documentElement.lang = locale;
    document.title = get("meta.title");
    document.querySelector('meta[name="description"]')?.setAttribute("content", get("meta.description"));
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", get("meta.title"));
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", get("meta.description"));
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", get("meta.ogLocale"));

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = get(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = get(element.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", get(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.setAttribute("alt", get(element.dataset.i18nAlt));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", get(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-locale]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.locale === locale));
    });

    if (persist) {
      try {
        localStorage.setItem("silencer-locale", locale);
      } catch {
        // Storage can be unavailable in privacy-focused browsing modes.
      }
    }

    window.dispatchEvent(
      new CustomEvent("moly:localechange", {
        detail: { locale, intlLocale: localeFormats[locale] },
      }),
    );
  };

  window.MolyI18n = {
    get,
    getLocale: () => currentLocale,
    getIntlLocale: () => localeFormats[currentLocale],
    setLocale: applyLocale,
  };

  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.addEventListener("click", () => applyLocale(button.dataset.locale));
  });

  let savedLocale = "pt-BR";
  try {
    savedLocale = localStorage.getItem("silencer-locale") || localStorage.getItem("moly-locale") || "pt-BR";
  } catch {
    savedLocale = "pt-BR";
  }
  applyLocale(savedLocale, false);
})();
