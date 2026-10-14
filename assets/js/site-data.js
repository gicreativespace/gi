/* =========================================================
   GI CREATIVE SPACE
   SITE DATA
   Edit this file to update website content later.
   ========================================================= */

const GI_SITE_DATA = {

  /* =======================================================
     BRAND
     ======================================================= */

  brand: {
    name: "GI Creative Space",

    tagline: {
      te: "గోదావరి మూలాలు. ఇప్పనపాడు ఆత్మ.",
      en: "Godavari Roots. Ippanapadu Soul."
    },

    shortTagline: {
      te: "గోదావరి మన గుర్తింపు • ఇప్పనపాడు మన మూలం",
      en: "Godavari is our identity • Ippanapadu is our root"
    }
  },


  /* =======================================================
     ENTRY SCREEN
     ======================================================= */

  entry: {
    title: {
      te: "ఒక కొత్త ప్రపంచంలోకి స్వాగతం",
      en: "Welcome to a New World"
    },

    description: {
      te: "ఆలోచనలకు రూపం ఇచ్చే సృజనాత్మక ప్రపంచం.",
      en: "A creative world where ideas take shape."
    },

    button: {
      te: "ప్రపంచంలోకి ప్రవేశించండి",
      en: "Enter the World"
    }
  },


  /* =======================================================
     PHILOSOPHY
     ======================================================= */

  philosophy: {
    label: {
      te: "మన ఆలోచన",
      en: "Our Philosophy"
    },

    title: {
      te: "ఒకే విశ్వం. ఐదు సృజనాత్మక శక్తులు.",
      en: "One Universe. Five Creative Forces."
    },

    description: {
      te:
        "GI Creative Space అనేది కేవలం ఒక వేదిక కాదు. " +
        "గోదావరి మన గుర్తింపు, ఇప్పనపాడు మన మూలం, " +
        "సృజనాత్మకత మన ప్రయాణం.",

      en:
        "GI Creative Space is more than a platform. " +
        "Godavari is our identity, Ippanapadu is our root, " +
        "and creativity is our journey."
    }
  },


  /* =======================================================
     FIVE CREATIVE WORLDS
     ======================================================= */

  worlds: [

    {
      id: "education",

      number: "01",

      element: {
        te: "భూమి",
        en: "EARTH"
      },

      name: "GI.Education",

      title: {
        te: "నేర్చుకోవడం • ఎదగడం",
        en: "Learn • Grow"
      },

      description: {
        te:
          "నేర్చుకోవడం, నైపుణ్యాలు, AI మరియు " +
          "భవిష్యత్తు విద్యకు ఒక సృజనాత్మక వేదిక.",

        en:
          "A creative space for learning, skills, " +
          "AI and future education."
      },

      symbol: "◉",

      image: "assets/images/worlds/earth.jpg",

      link: "pages/education.html",

      status: "future"
    },


    {
      id: "writings",

      number: "02",

      element: {
        te: "జలం",
        en: "WATER"
      },

      name: "GI.Writings",

      title: {
        te: "కథలు • భావాలు",
        en: "Stories • Feelings"
      },

      description: {
        te:
          "కథలు, కవితలు, జ్ఞాపకాలు, " +
          "ఆలోచనలు మరియు మనసుకు దగ్గరైన భావాలు.",

        en:
          "Stories, poems, memories, thoughts " +
          "and feelings that stay close to the heart."
      },

      symbol: "≋",

      image: "assets/images/worlds/water.jpg",

      link: "pages/writings.html",

      status: "active"
    },


    {
      id: "devotional",

      number: "03",

      element: {
        te: "అగ్ని",
        en: "FIRE"
      },

      name: "GI.Devotional",

      title: {
        te: "భక్తి • సంప్రదాయం",
        en: "Devotion • Tradition"
      },

      description: {
        te:
          "భక్తి, పండుగలు, దేవతా కథలు, " +
          "సంప్రదాయాలు మరియు ఆధ్యాత్మిక భావాలు.",

        en:
          "Devotion, festivals, divine stories, " +
          "traditions and spiritual expressions."
      },

      symbol: "✦",

      image: "assets/images/worlds/fire.jpg",

      link: "pages/devotional.html",

      status: "future"
    },


    {
      id: "media",

      number: "04",

      element: {
        te: "వాయువు",
        en: "AIR"
      },

      name: "GI.Media",

      title: {
        te: "ఆలోచన • సృజన",
        en: "Ideas • Creation"
      },

      description: {
        te:
          "AI వీడియోలు, వెబ్ డిజైన్, బ్రాండింగ్, " +
          "డిజిటల్ మార్కెటింగ్ మరియు సృజనాత్మక సేవలు.",

        en:
          "AI videos, web design, branding, " +
          "digital marketing and creative services."
      },

      symbol: "∿",

      image: "assets/images/worlds/air.jpg",

      link: "pages/media.html",

      status: "active"
    },


    {
      id: "space",

      number: "05",

      element: {
        te: "ఆకాశం",
        en: "SPACE"
      },

      name: "GI.Space",

      title: {
        te: "ఆలోచనలు • భవిష్యత్తు",
        en: "Ideas • Future"
      },

      description: {
        te:
          "కొత్త ఆలోచనలు, ప్రయోగాలు, AI కాన్సెప్ట్స్ " +
          "మరియు భవిష్యత్తు ప్రాజెక్టులకు ఒక స్వేచ్ఛా స్థలం.",

        en:
          "A space for new ideas, experiments, " +
          "AI concepts and future projects."
      },

      symbol: "✧",

      image: "assets/images/worlds/space.jpg",

      link: "pages/space.html",

      status: "future"
    }

  ],


  /* =======================================================
     PROJECTS
     ======================================================= */

  projects: [

    /*
    Example:

    {
      id: "project-01",

      category: "media",

      title: {
        te: "ప్రాజెక్ట్ పేరు",
        en: "Project Name"
      },

      description: {
        te: "ప్రాజెక్ట్ వివరణ",
        en: "Project description"
      },

      image: "assets/images/projects/project-01.jpg",

      link: "#"
    }
    */

  ],


  /* =======================================================
     CONTACT
     ======================================================= */

  contact: {

    email: "your@email.com",

    whatsapp: "https://wa.me/91XXXXXXXXXX",

    social: {
      instagram: "#",
      facebook: "#",
      youtube: "#"
    }

  },


  /* =======================================================
     SOCIAL / SEO
     ======================================================= */

  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#"
  },


  /* =======================================================
     LANGUAGE
     ======================================================= */

  languages: {
    default: "te",

    available: [
      "te",
      "en"
    ]
  },


  /* =======================================================
     FUTURE WEBSITE SETTINGS
     ======================================================= */

  settings: {

    showEntryScreen: true,

    enableLanguageSwitch: true,

    enableProjectFilter: true,

    enableAnimations: true,

    enableFutureSections: true

  }

};


/* =========================================================
   MAKE DATA AVAILABLE TO OTHER JS FILES
   ========================================================= */

window.GI_SITE_DATA = GI_SITE_DATA;
