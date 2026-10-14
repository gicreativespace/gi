/* =========================================================
   GI CREATIVE SPACE
   GLOBAL APPLICATION SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     SITE DATA
     ------------------------------------------------------- */

  const site =
    window.GI_SITE || {};



  /* -------------------------------------------------------
     LANGUAGE
     ------------------------------------------------------- */

  let currentLanguage =
    localStorage.getItem("gi-language") ||
    site.language?.default ||
    "te";


  function setLanguage(language) {

    if (!["te", "en"].includes(language)) {
      language = "te";
    }

    currentLanguage = language;

    localStorage.setItem(
      "gi-language",
      language
    );

    updateLanguageButtons();

    updateStaticLanguage();

  }



  function updateLanguageButtons() {

    const buttons =
      document.querySelectorAll(
        ".language-button"
      );


    buttons.forEach(button => {

      const language =
        button.dataset.language;

      button.classList.toggle(
        "active",
        language === currentLanguage
      );

    });

  }



  function updateStaticLanguage() {

    /*
     * Elements can use:
     *
     * data-te="తెలుగు"
     * data-en="English"
     *
     * This makes future translations
     * very easy.
     */

    const translatedElements =
      document.querySelectorAll(
        "[data-te][data-en]"
      );


    translatedElements.forEach(element => {

      const value =
        element.dataset[currentLanguage];

      if (value !== undefined) {
        element.textContent = value;
      }

    });


    /*
     * Update document language
     */

    document.documentElement.lang =
      currentLanguage === "te"
        ? "te"
        : "en";

  }



  document
    .querySelectorAll(
      ".language-button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          setLanguage(
            button.dataset.language
          );

        }
      );

    });



  /* -------------------------------------------------------
     WORLDS MENU
     ------------------------------------------------------- */

  const worldsButton =
    document.getElementById(
      "worlds-button"
    );


  const worldsMenu =
    document.getElementById(
      "worlds-menu"
    );


  const worldsGrid =
    document.getElementById(
      "worlds-mini-grid"
    );



  function openWorldsMenu() {

    if (!worldsMenu) {
      return;
    }

    worldsMenu.classList.add(
      "is-open"
    );

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

    worldsMenu.classList.remove(
      "is-open"
    );

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



  function toggleWorldsMenu() {

    if (!worldsMenu) {
      return;
    }

    const isOpen =
      worldsMenu.classList.contains(
        "is-open"
      );


    if (isOpen) {

      closeWorldsMenu();

    } else {

      openWorldsMenu();

    }

  }



  if (worldsButton) {

    worldsButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        toggleWorldsMenu();

      }
    );

  }



  /* -------------------------------------------------------
     BUILD FIVE WORLDS MENU
     ------------------------------------------------------- */

  function buildWorldsMenu() {

    if (!worldsGrid) {
      return;
    }


    if (
      !site.worlds ||
      !Array.isArray(site.worlds)
    ) {

      return;

    }


    worldsGrid.innerHTML =
      site.worlds
        .map(world => {

          const name =
            world.name?.[currentLanguage] ||
            world.name?.te ||
            world.name?.en ||
            world.id;


          const element =
            world.element?.[currentLanguage] ||
            world.element?.te ||
            world.element?.en ||
            "";


          const description =
            world.description?.[currentLanguage] ||
            world.description?.te ||
            world.description?.en ||
            "";


          return `

            <a
              class="world-mini-card"
              href="../${world.link}"
              data-world="${world.id}"
            >

              <span class="world-mini-symbol">
                ${world.symbol || "✦"}
              </span>

              <span class="world-mini-info">

                <strong>
                  ${name}
                </strong>

                <small>
                  ${element}
                </small>

                <span>
                  ${description}
                </span>

              </span>

            </a>

          `;

        })
        .join("");

  }



  buildWorldsMenu();



  /*
   * Rebuild world menu whenever
   * language changes.
   */

  document
    .querySelectorAll(
      ".language-button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          setTimeout(
            buildWorldsMenu,
            0
          );

        }
      );

    });



  /* -------------------------------------------------------
     CLOSE WORLDS MENU
     ------------------------------------------------------- */

  document.addEventListener(
    "click",
    event => {

      if (!worldsMenu) {
        return;
      }


      const clickedInsideMenu =
        worldsMenu.contains(
          event.target
        );


      const clickedButton =
        worldsButton &&
        worldsButton.contains(
          event.target
        );


      if (
        !clickedInsideMenu &&
        !clickedButton
      ) {

        closeWorldsMenu();

      }

    }
  );



  /* -------------------------------------------------------
     ESC KEY
     ------------------------------------------------------- */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeWorldsMenu();

        closeMobileMenu();

      }

    }
  );



  /* -------------------------------------------------------
     MOBILE MENU
     ------------------------------------------------------- */

  const mobileButton =
    document.getElementById(
      "mobile-menu-button"
    );


  const mainNavigation =
    document.querySelector(
      ".main-nav"
    );



  function openMobileMenu() {

    if (!mainNavigation) {
      return;
    }


    mainNavigation.classList.add(
      "is-open"
    );


    if (mobileButton) {

      mobileButton.classList.add(
        "is-open"
      );


      mobileButton.setAttribute(
        "aria-expanded",
        "true"
      );

    }

  }



  function closeMobileMenu() {

    if (!mainNavigation) {
      return;
    }


    mainNavigation.classList.remove(
      "is-open"
    );


    if (mobileButton) {

      mobileButton.classList.remove(
        "is-open"
      );


      mobileButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }



  function toggleMobileMenu() {

    if (!mainNavigation) {
      return;
    }


    const open =
      mainNavigation.classList.contains(
        "is-open"
      );


    if (open) {

      closeMobileMenu();

    } else {

      openMobileMenu();

    }

  }



  if (mobileButton) {

    mobileButton.addEventListener(
      "click",
      toggleMobileMenu
    );

  }



  /* -------------------------------------------------------
     CLOSE MOBILE MENU WHEN LINK IS CLICKED
     ------------------------------------------------------- */

  if (mainNavigation) {

    mainNavigation
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            closeMobileMenu();

          }
        );

      });

  }



  /* -------------------------------------------------------
     SMOOTH SCROLL
     ------------------------------------------------------- */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute(
              "href"
            );


          if (
            !targetId ||
            targetId === "#"
          ) {

            return;

          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });


          closeWorldsMenu();

          closeMobileMenu();

        }
      );

    });



  /* -------------------------------------------------------
     CURRENT YEAR
     ------------------------------------------------------- */

  const yearElements =
    document.querySelectorAll(
      "#current-year"
    );


  const currentYear =
    new Date().getFullYear();


  yearElements.forEach(
    element => {

      element.textContent =
        currentYear;

    }
  );



  /* -------------------------------------------------------
     HEADER SCROLL EFFECT
     ------------------------------------------------------- */

  const header =
    document.querySelector(
      ".site-header"
    );


  function updateHeader() {

    if (!header) {
      return;
    }


    if (window.scrollY > 40) {

      header.classList.add(
        "scrolled"
      );

    } else {

      header.classList.remove(
        "scrolled"
      );

    }

  }


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );


  updateHeader();



  /* -------------------------------------------------------
     REVEAL ANIMATION
     ------------------------------------------------------- */

  const revealElements =
    document.querySelectorAll(
      ".section-container > *,
       .world-card,
       .project-card,
       .projects-empty"
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "is-visible"
                );


                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      element => {

        element.classList.add(
          "reveal"
        );

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      element => {

        element.classList.add(
          "is-visible"
        );

      }
    );

  }



  /* -------------------------------------------------------
     IMAGE FALLBACK
     ------------------------------------------------------- */

  document
    .querySelectorAll(
      "img"
    )
    .forEach(image => {

      image.addEventListener(
        "error",
        () => {

          image.classList.add(
            "image-error"
          );

        }
      );

    });



  /* -------------------------------------------------------
     INITIAL LANGUAGE
     ------------------------------------------------------- */

  setLanguage(
    currentLanguage
  );

});
