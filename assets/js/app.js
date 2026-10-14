/* =========================================================
   GI CREATIVE SPACE
   MAIN APPLICATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const data = window.GI_SITE_DATA;

  if (!data) {
    console.error("GI_SITE_DATA not found.");
    return;
  }


  /* =======================================================
     ELEMENTS
     ======================================================= */

  const entryScreen = document.getElementById("entry-screen");
  const enterButton = document.getElementById("enter-space");
  const site = document.getElementById("site");

  const worldsButton = document.getElementById("worlds-button");
  const worldsMenu = document.getElementById("worlds-menu");

  const mobileMenuButton =
    document.getElementById("mobile-menu-button");

  const mainNavigation =
    document.getElementById("main-navigation");

  const languageButtons =
    document.querySelectorAll(".language-button");

  const projectsGrid =
    document.getElementById("projects-grid");

  const projectFilters =
    document.querySelectorAll(".filter-button");

  const currentYear =
    document.getElementById("current-year");


  /* =======================================================
     LANGUAGE
     ======================================================= */

  let currentLanguage =
    localStorage.getItem("gi-language") ||
    data.languages.default ||
    "te";


  function getText(value) {

    if (!value) {
      return "";
    }

    if (typeof value === "string") {
      return value;
    }

    return value[currentLanguage] ||
           value.te ||
           value.en ||
           "";
  }


  function updateLanguageButtons() {

    languageButtons.forEach(button => {

      const language =
        button.dataset.language;

      button.classList.toggle(
        "active",
        language === currentLanguage
      );

    });

  }


  function updateStaticText() {

    /*
      The current index.html contains important
      Telugu/English text directly.

      Future sections can use data attributes
      such as:

      data-i18n="brand.tagline"

      and this function can automatically
      translate them.
    */

    const elements =
      document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

      const key =
        element.dataset.i18n;

      const value =
        getNestedValue(data, key);

      if (value) {
        element.textContent =
          getText(value);
      }

    });

    updateLanguageButtons();

    document.documentElement.lang =
      currentLanguage === "te"
        ? "te"
        : "en";
  }


  function getNestedValue(object, path) {

    return path
      .split(".")
      .reduce(
        (current, key) =>
          current ? current[key] : undefined,
        object
      );

  }


  languageButtons.forEach(button => {

    button.addEventListener("click", () => {

      const selectedLanguage =
        button.dataset.language;

      if (!selectedLanguage) {
        return;
      }

      currentLanguage =
        selectedLanguage;

      localStorage.setItem(
        "gi-language",
        currentLanguage
      );

      updateStaticText();

      /*
        Future dynamic sections
        can be refreshed here.
      */

      renderProjects("all");

    });

  });


  /* =======================================================
     ENTRY EXPERIENCE
     ======================================================= */

  function enterCreativeSpace() {

    if (!entryScreen || !site) {
      return;
    }

    entryScreen.classList.add("hide");

    document.body.classList.remove("no-scroll");

    setTimeout(() => {

      entryScreen.style.display =
        "none";

      site.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

    }, 1000);

  }


  if (data.settings.showEntryScreen === false) {

    if (entryScreen) {
      entryScreen.style.display =
        "none";
    }

    if (site) {
      site.classList.remove("hidden");
    }

  } else {

    document.body.classList.add("no-scroll");

    if (enterButton) {

      enterButton.addEventListener(
        "click",
        enterCreativeSpace
      );

    }

  }


  /* =======================================================
     WORLDS MENU
     ======================================================= */

  function openWorldsMenu() {

    if (!worldsMenu) {
      return;
    }

    worldsMenu.classList.add("open");

    worldsMenu.setAttribute(
      "aria-hidden",
      "false"
    );

    if (worldsButton) {

      worldsButton.setAttribute(
        "aria-expanded",
        "true"
      );

    }

  }


  function closeWorldsMenu() {

    if (!worldsMenu) {
      return;
    }

    worldsMenu.classList.remove("open");

    worldsMenu.setAttribute(
      "aria-hidden",
      "true"
    );

    if (worldsButton) {

      worldsButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }


  if (worldsButton) {

    worldsButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        const isOpen =
          worldsMenu.classList.contains("open");

        if (isOpen) {
          closeWorldsMenu();
        } else {
          openWorldsMenu();
        }

      }
    );

  }


  document.addEventListener(
    "click",
    event => {

      if (
        worldsMenu &&
        !worldsMenu.contains(event.target) &&
        worldsButton &&
        !worldsButton.contains(event.target)
      ) {

        closeWorldsMenu();

      }

    }
  );


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
      "click",
      () => {

        const isOpen =
          mainNavigation.classList.contains("open");

        mainNavigation.classList.toggle(
          "open"
        );

        mobileMenuButton.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

      }
    );

  }


  /* Close mobile menu after navigation */

  if (mainNavigation) {

    mainNavigation
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            mainNavigation.classList.remove(
              "open"
            );

            if (mobileMenuButton) {

              mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
              );

            }

          }
        );

      });

  }


  /* =======================================================
     PROJECTS
     ======================================================= */

  function renderProjects(filter = "all") {

    if (!projectsGrid) {
      return;
    }

    const projects =
      Array.isArray(data.projects)
        ? data.projects
        : [];

    const filteredProjects =
      filter === "all"
        ? projects
        : projects.filter(
            project =>
              project.category === filter
          );


    /* Empty state */

    if (filteredProjects.length === 0) {

      projectsGrid.innerHTML = `
        <div class="projects-empty">
          <span>GI</span>
          <p>
            ${currentLanguage === "te"
              ? "ఈ ప్రపంచంలో కొత్త ప్రయాణాలు త్వరలో..."
              : "New journeys in this world are coming soon..."}
          </p>
        </div>
      `;

      return;
    }


    /* Render projects */

    projectsGrid.innerHTML =
      filteredProjects
        .map(project => {

          const title =
            getText(project.title);

          const description =
            getText(project.description);

          const image =
            project.image || "";

          const link =
            project.link || "#";

          return `

            <article
              class="project-card"
              data-category="${project.category}"
            >

              <a
                href="${link}"
                class="project-card-link"
              >

                <div
                  class="project-image"
                  style="
                    background-image:
                    url('${image}');
                  "
                ></div>

                <div class="project-content">

                  <span>
                    ${project.category}
                  </span>

                  <h3>
                    ${title}
                  </h3>

                  <p>
                    ${description}
                  </p>

                  <strong>
                    ${
                      currentLanguage === "te"
                        ? "మరింత చూడండి →"
                        : "Explore →"
                    }
                  </strong>

                </div>

              </a>

            </article>

          `;

        })
        .join("");

  }


  /* =======================================================
     PROJECT FILTERS
     ======================================================= */

  projectFilters.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const filter =
          button.dataset.filter ||
          "all";


        projectFilters.forEach(
          item => {

            item.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        renderProjects(filter);

      }
    );

  });


  /* =======================================================
     CONTACT LINKS
     ======================================================= */

  const emailLink =
    document.getElementById("email-link");

  const whatsappLink =
    document.getElementById("whatsapp-link");

  const socialLink =
    document.getElementById("social-link");


  if (emailLink && data.contact.email) {

    emailLink.href =
      `mailto:${data.contact.email}`;

  }


  if (
    whatsappLink &&
    data.contact.whatsapp
  ) {

    whatsappLink.href =
      data.contact.whatsapp;

  }


  if (
    socialLink &&
    data.contact.social &&
    data.contact.social.instagram
  ) {

    socialLink.href =
      data.contact.social.instagram;

  }


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }


  /* =======================================================
     SMOOTH INTERNAL LINKS
     ======================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(targetId);

          if (!target) {
            return;
          }

          event.preventDefault();

          closeWorldsMenu();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  /* =======================================================
     INITIALISE
     ======================================================= */

  updateStaticText();

  renderProjects("all");


  /* =======================================================
     CONSOLE BRAND MESSAGE
     ======================================================= */

  console.log(
    "%cGI Creative Space",
    "font-size:20px;font-weight:bold;"
  );

  console.log(
    "Godavari Roots. Ippanapadu Soul."
  );

});
