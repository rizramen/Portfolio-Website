export const DEFAULT_LANGUAGE = 'en';

export const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

export const CONTENT = {
  en: {
    meta: {
      homeAriaLabel: 'Fariz Rahman home',
      primaryNavAriaLabel: 'Primary navigation',
      portfolioActionsAriaLabel: 'Portfolio actions',
      workspacePreviewAriaLabel: 'Portfolio coding workspace preview',
      buildStatusAriaLabel: 'Build status',
      technicalSkillsAriaLabel: 'Technical skills',
      skipToContent: 'Skip to content',
      languageSwitcherLabel: 'Switch language',
    },
    navigation: {
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      role: 'Coder / Creative Technologist',
      intro:
        'I build web interfaces, useful tools, and interactive software with a practical engineering mindset.',
      primaryCta: 'View work',
      secondaryCta: 'Email me',
      codeSnippet: `const developer = {
  name: 'Fariz',
  focus: ['React', 'Java', 'UI', 'JS'],
  ships: 'clean, usable software'
};`,
      terminalStatus: 'portfolio ready',
    },
    about: {
      label: 'About',
      title: 'Code that feels direct, useful, and well-shaped.',
      body:
        'I am a fourth semester Mediainformatics student at HTW Berlin. I enjoy making music as much as I enjoy coding. I am currently looking for an internship in the IT sector so I can gain practical experience in a professional environment.',
    },
    projects: {
      label: 'Selected Work',
      title: 'Personal Projects',
      stackAriaLabel: 'technology stack',
      viewProject: 'View project',
      projectLinkComingSoon: 'Project link coming soon',
      items: [
        {
          title: 'Glossa',
          type: 'Language learning app',
          description:
            'Glossa is a server-rendered Django vocabulary-learning app. Users can register, create personal dictionaries, add words and definitions, and quiz themselves on saved vocabulary.',
          stack: ['Django', 'Python', 'PostgreSQL'],
          metric: 'Live UI',
          link: 'https://glossa-beta.vercel.app/',
        },
        {
          title: 'Scrabble Cheater',
          type: 'Algorithm tool',
          description:
            'Word search helper designed around efficient lookups, readable results, and practical problem-solving under constraints.',
          stack: ['Java', 'Data structures', 'Search'],
          metric: 'Trie-ready',
          link: null,
        },
        {
          title: 'Asian Chess',
          type: 'Game interface',
          description:
            'Board-game implementation with clear state transitions, rule-aware interactions, and a responsive play surface.',
          stack: ['React', 'Game logic', 'CSS'],
          metric: 'Playable',
          link: null,
        },
        {
          title: 'demo_',
          type: 'Media experience',
          description:
            'Audio demo player built with Expo and React Native, then published as a static web experience.',
          stack: ['React', 'Expo'],
          metric: 'Interactive',
          link: 'https://rizramen.github.io/demo_/',
        },
      ],
    },
    skills: {
      label: 'Stack',
      title: 'Tools and strengths I bring into projects.',
      items: [
        'React',
        'JavaScript',
        'Java',
        'HTML/CSS',
        'Git',
        'Data Structures',
        'Computer Graphics',
        'Image Processing',
        'Responsive UI',
        'Problem Solving',
        'Node.js',
        'Clean Code',
      ],
    },
    experience: {
      label: 'Experience',
      title: 'Learning by building and refining real projects.',
      items: [
        {
          year: 'Now',
          title: 'Building practical software',
          text: 'Turning coursework, experiments, and product ideas into interfaces people can actually use.',
        },
        {
          year: '2025',
          title: 'Computer graphics and media projects',
          text: 'Worked across visual computing, interactive rendering, and media-focused applications.',
        },
        {
          year: '2024',
          title: 'Core programming foundation',
          text: 'Strengthened Java, algorithms, web fundamentals, and project-based development habits.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Think I'm cut out for an internship at your company? Shoot me a message.",
      socialAriaLabelPrefix: 'Visit Fariz Rahman on',
      missingLinksNote:
        'Add your GitHub and LinkedIn profile URLs in `src/siteContent.js` before publishing.',
    },
  },
  de: {
    meta: {
      homeAriaLabel: 'Startseite von Fariz Rahman',
      primaryNavAriaLabel: 'Hauptnavigation',
      portfolioActionsAriaLabel: 'Portfolio-Aktionen',
      workspacePreviewAriaLabel: 'Vorschau des Coding-Workspaces im Portfolio',
      buildStatusAriaLabel: 'Build-Status',
      technicalSkillsAriaLabel: 'Technische Kenntnisse',
      skipToContent: 'Zum Inhalt springen',
      languageSwitcherLabel: 'Sprache wechseln',
    },
    navigation: {
      projects: 'Projekte',
      skills: 'Skills',
      experience: 'Erfahrung',
      contact: 'Kontakt',
    },
    hero: {
      role: 'Coder / Creative Technologist',
      intro:
        'Ich entwickle Weboberflächen, nützliche Tools und interaktive Software mit einem pragmatischen Engineering-Ansatz.',
      primaryCta: 'Projekte ansehen',
      secondaryCta: 'E-Mail senden',
      codeSnippet: `const entwickler = {
  name: 'Fariz',
  fokus: ['React', 'Java', 'UI', 'JS'],
  liefert: 'klare, nutzbare software'
};`,
      terminalStatus: 'portfolio bereit',
    },
    about: {
      label: 'Über mich',
      title: 'Code, der direkt, nützlich und sauber gestaltet ist.',
      body:
        'Ich bin im vierten Semester des Studiengangs Medieninformatik an der HTW Berlin. Musik macht mir genauso viel Spaß wie Programmieren. Aktuell suche ich ein Praktikum im IT-Bereich, um praktische Erfahrung in einem professionellen Umfeld zu sammeln.',
    },
    projects: {
      label: 'Ausgewählte Arbeiten',
      title: 'Persönliche Projekte',
      stackAriaLabel: 'Technologie-Stack',
      viewProject: 'Projekt ansehen',
      projectLinkComingSoon: 'Projektlink folgt bald',
      items: [
        {
          title: 'Glossa',
          type: 'Sprachlern-App',
          description:
            'Glossa ist eine serverseitig gerenderte Django-App zum Vokabellernen. Nutzer können sich registrieren, persönliche Wörterbücher anlegen, Wörter und Definitionen speichern und sich selbst abfragen.',
          stack: ['Django', 'Python', 'PostgreSQL'],
          metric: 'Live UI',
          link: 'https://glossa-beta.vercel.app/',
        },
        {
          title: 'Scrabble Cheater',
          type: 'Algorithmus-Tool',
          description:
            'Ein Hilfstool zur Wortsuche, entwickelt für effiziente Suchvorgänge, gut lesbare Ergebnisse und praktische Problemlösung unter Einschränkungen.',
          stack: ['Java', 'Datenstrukturen', 'Suche'],
          metric: 'Trie-basiert',
          link: null,
        },
        {
          title: 'Asian Chess',
          type: 'Spieloberfläche',
          description:
            'Eine Brettspiel-Umsetzung mit klaren Zustandswechseln, regelbewussten Interaktionen und einer responsiven Spielfläche.',
          stack: ['React', 'Spiellogik', 'CSS'],
          metric: 'Spielbar',
          link: null,
        },
        {
          title: 'demo_',
          type: 'Medienerlebnis',
          description:
            'Ein Audio-Demo-Player, entwickelt mit Expo und React Native und anschließend als statische Web-Erfahrung veröffentlicht.',
          stack: ['React', 'Expo'],
          metric: 'Interaktiv',
          link: 'https://rizramen.github.io/demo_/',
        },
      ],
    },
    skills: {
      label: 'Stack',
      title: 'Tools und Stärken, die ich in Projekte einbringe.',
      items: [
        'React',
        'JavaScript',
        'Java',
        'HTML/CSS',
        'Git',
        'Datenstrukturen',
        'Computergrafik',
        'Bildverarbeitung',
        'Responsive UI',
        'Problemlösung',
        'Node.js',
        'Sauberer Code',
      ],
    },
    experience: {
      label: 'Erfahrung',
      title: 'Lernen durch Bauen und Verfeinern realer Projekte.',
      items: [
        {
          year: 'Jetzt',
          title: 'Praktische Software entwickeln',
          text: 'Ich verwandle Studienprojekte, Experimente und Produktideen in Oberflächen, die Menschen tatsächlich nutzen können.',
        },
        {
          year: '2025',
          title: 'Computergrafik- und Medienprojekte',
          text: 'Arbeit an Visual Computing, interaktivem Rendering und medienorientierten Anwendungen.',
        },
        {
          year: '2024',
          title: 'Solide Grundlagen in Programmierung',
          text: 'Vertiefung in Java, Algorithmen, Web-Grundlagen und projektorientierte Entwicklungsgewohnheiten.',
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      title:
        'Sie denken, ich passe gut für ein Praktikum in Ihrem Unternehmen? Schreiben Sie mir gern.',
      socialAriaLabelPrefix: 'Besuche Fariz Rahman auf',
      missingLinksNote:
        'Füge vor der Veröffentlichung deine GitHub- und LinkedIn-Profile in `src/siteContent.js` ein.',
    },
  },
};

export const SITE = {
  name: 'Fariz Rahman',
  email: 'fariz.rahman152@gmail.com',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/rizramen',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fariz-rahman-720310145/',
    },
  ],
};
