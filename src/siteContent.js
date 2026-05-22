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
      education: 'Education',
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
          title: 'PokerTable',
          type: 'Local Game Companion',
          description:
            'Mobile-first local poker companion built as a static website, so you and your friends can play Poker locally without Poker Chips. Only playing cards needed!',
          stack: ['HTML', 'CSS', 'JavaScript'],
          metric: 'Playable',
          link: "https://poker-table-two.vercel.app/",
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
        'Audio Engineering',
        'Audio Editing',
        'Sound Design',
        'Signal Flow',
        'Responsive UI',
        'Problem Solving',
        'Node.js',
      ],
    },
    education: {
      label: 'Education',
      title: 'Academic background and training',
      items: [
        {
          year: '2024 - now',
          title: 'HTW Berlin, University of Applied Sciences',
          place: 'Berlin',
          text: 'Media Informatics',
        },
        {
          year: '2021 - 2023',
          title: 'SAE Institute',
          place: 'Hamburg',
          text: 'Diploma in Audio Engineering',
        },
        {
          year: '2014 - 2021',
          title: 'Gymnasium Hochrad',
          place: 'Hamburg',
          text: 'Abitur',
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
      education: 'Bildung',
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
          title: 'PokerTable',
          type: 'Lokaler Poker-Begleiter',
          description:
            'Ein mobile-first Poker-Begleiter als statische Website, damit du mit Freunden lokal Poker spielen kannst, ganz ohne Pokerchips. Nur Spielkarten benötigt.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          metric: 'Spielbar',
          link: 'https://poker-table-two.vercel.app/',
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
        'Audio Engineering',
        'Audiobearbeitung',
        'Sounddesign',
        'Signalfluss',
        'Responsive UI',
        'Problemlösung',
        'Node.js',
      ],
    },
    education: {
      label: 'Bildung',
      title: 'Akademischer Hintergrund',
      items: [
        {
          year: '2024-heute',
          title: 'HTW Berlin',
          place: 'Berlin',
          text: 'Medieninformatik / Internationale Medieninformatik',
        },
        {
          year: '2021-2023',
          title: 'SAE Institute Hamburg',
          place: 'Hamburg',
          text: 'Diplom in Audio Engineering',
        },
        {
          year: '2014-2021',
          title: 'Gymnasium Hochrad',
          place: 'Hamburg',
          text: 'Abitur',
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      title:
        'Hab ich Ihre Interesse geweckt? Schreiben Sie mir gerne.',
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
