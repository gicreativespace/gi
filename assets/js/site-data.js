/* =========================================================
   GI CREATIVE SPACE
   CENTRAL SITE DATA
   ========================================================= */

const GI_SITE = {

  /* -------------------------------------------------------
     BRAND
     ------------------------------------------------------- */

  brand: {
    name: "GI Creative Space",

    shortName: "GI",

    tagline: {
      te: "ఆలోచనలు ప్రవహించే ప్రపంచం",
      en: "Where Ideas Flow Into Vision."
    },

    origin: {
      te: "గోదావరి మూలాలు • ఇప్పనపాడు ఆత్మ",
      en: "Godavari Roots • Ippanapadu Soul"
    },

    logo: {
      type: "image",
      src: "assets/images/brand/gi-logo.png",
      fallback: "GI"
    }
  },


  /* -------------------------------------------------------
     MAIN WORLDS
     ------------------------------------------------------- */

  worlds: [

    {
      id: "media",

      name: {
        te: "GI.Media",
        en: "GI.Media"
      },

      element: {
        te: "వాయువు",
        en: "Air"
      },

      symbol: "〰",

      description: {
        te: "వీడియోలు, డిజైన్, డిజిటల్ కంటెంట్ మరియు సృజనాత్మక మీడియా.",
        en: "Videos, design, digital content and creative media."
      },

      link: "pages/media.html",

      image: "assets/images/worlds/media.jpg"
    },


    {
      id: "writings",

      name: {
        te: "GI.Writings",
        en: "GI.Writings"
      },

      element: {
        te: "జలం",
        en: "Water"
      },

      symbol: "≈",

      description: {
        te: "కథలు, జ్ఞాపకాలు, కవితలు మరియు మనసు నుంచి వచ్చిన మాటలు.",
        en: "Stories, memories, poetry and words that flow from the heart."
      },

      link: "pages/writings.html",

      image: "assets/images/worlds/writings.jpg"
    },


    {
      id: "education",

      name: {
        te: "GI.Education",
        en: "GI.Education"
      },

      element: {
        te: "భూమి",
        en: "Earth"
      },

      symbol: "◇",

      description: {
        te: "జ్ఞానం, నేర్చుకోవడం, టెక్నాలజీ మరియు భవిష్యత్ నైపుణ్యాలు.",
        en: "Learning, knowledge, technology and future skills."
      },

      link: "pages/education.html",

      image: "assets/images/worlds/education.jpg"
    },


    {
      id: "devotional",

      name: {
        te: "GI.Devotional",
        en: "GI.Devotional"
      },

      element: {
        te: "అగ్ని",
        en: "Fire"
      },

      symbol: "✦",

      description: {
        te: "భక్తి, దేవతా కథలు, పండుగలు, దేవాలయాలు మరియు సంప్రదాయాలు.",
        en: "Devotion, divine stories, festivals, temples and traditions."
      },

      link: "pages/devotional.html",

      image: "assets/images/worlds/devotional.jpg"
    },


    {
      id: "space",

      name: {
        te: "GI.Space",
        en: "GI.Space"
      },

      element: {
        te: "ఆకాశం",
        en: "Space"
      },

      symbol: "∞",

      description: {
        te: "ఇంకా రూపం దాల్చని ఆలోచనలు, ఊహలు మరియు భవిష్యత్ విజన్స్‌కు అనంతమైన స్థలం.",
        en: "An infinite space for ideas, imagination and future visions."
      },

      link: "pages/space.html",

      image: "assets/images/worlds/space.jpg"
    }

  ],


  /* -------------------------------------------------------
     NAVIGATION
     ------------------------------------------------------- */

  navigation: {

    home: {
      te: "హోమ్",
      en: "Home"
    },

    worlds: {
      te: "విశ్వం",
      en: "Worlds"
    },

    contact: {
      te: "సంప్రదించండి",
      en: "Contact"
    }

  },


  /* -------------------------------------------------------
     CONTACT
     ------------------------------------------------------- */

  contact: {

    email: "YOUR_EMAIL@example.com",

    whatsapp: "",

    phone: "",

    address: {
      te: "ఇప్పనపాడు • గోదావరి",
      en: "Ippanapadu • Godavari"
    }

  },


  /* -------------------------------------------------------
     SOCIAL MEDIA
     ------------------------------------------------------- */

  social: {

    instagram: "",

    youtube: "",

    facebook: "",

    whatsapp: "",

    website: ""

  },


  /* -------------------------------------------------------
     LANGUAGE
     ------------------------------------------------------- */

  language: {

    default: "te",

    available: [
      "te",
      "en"
    ]

  },


  /* -------------------------------------------------------
     FOOTER
     ------------------------------------------------------- */

  footer: {

    copyright: "GI Creative Space",

    line: {
      te: "ఆలోచనలకు హద్దులు లేని ప్రపంచం.",
      en: "A space where ideas have no limits."
    }

  }

};


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.GI_SITE = GI_SITE;
