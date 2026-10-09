/**
 * Lathiya Harshal — Photography Portfolio
 * Vanilla JavaScript — no dependencies
 */
(function () {
  "use strict";

  /* ============================================================
     HELPERS
     ============================================================ */
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  /* ============================================================
     SCROLL PROGRESS + HEADER STATE
     ============================================================ */
  const progressBar = $("#progressBar");
  const siteHeader = $("#siteHeader");

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const doc = document.documentElement;
      const winScroll = doc.scrollTop;
      const height = doc.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }

      if (siteHeader) {
        siteHeader.classList.toggle("scrolled", winScroll > 40);
      }

      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ============================================================
     MOBILE NAVIGATION
     ============================================================ */
  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");

  function setMenuState(open) {
    if (!menuToggle || !mobileMenu) return;

    mobileMenu.classList.toggle("open", open);
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileMenu.setAttribute("aria-hidden", String(!open));

    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      setMenuState(!isOpen);
    });

    // Close on link click
    $$(".mobile-link", mobileMenu).forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        setMenuState(false);
        menuToggle.focus();
      }
    });
  }

  /* ============================================================
     ACTIVE NAV LINK HIGHLIGHTING
     ============================================================ */
  const navLinks = $$(".nav-link");
  const sections = $$("main section[id]");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  /* ============================================================
     SCROLL REVEAL (Intersection Observer)
     ============================================================ */
  const fadeElements = $$(".fade-in");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeElements.forEach((el) => revealObserver.observe(el));

  /* ============================================================
     GALLERY DATA
     ============================================================ */
  const galleryData = [
    // Featured
    {
      category: "featured",
      title: "Featured",
      location: "",
      year: "",
      src: "images/Featured_img/Featured_img1.jpg",
      alt: "Featured nature photograph by Lathiya Harshal",
    },
    {
      category: "featured",
      title: "Featured",
      location: "",
      year: "",
      src: "images/Featured_img/Featured_img2.jpg",
      alt: "Featured wildlife photograph by Lathiya Harshal",
    },
    {
      category: "featured",
      title: "Featured",
      location: "",
      year: "",
      src: "images/Featured_img/Featured_img3.jpg",
      alt: "Featured nature photograph by Lathiya Harshal",
    },

    // Nature
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img1.jpg",
      alt: "Nature landscape photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img2.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img3.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img4.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img5.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img6.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img7.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img8.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img9.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },
    {
      category: "nature",
      title: "Nature",
      location: "",
      year: "",
      src: "images/Nature_img/Nature_img10.jpg",
      alt: "Nature photograph by Lathiya Harshal",
    },

    // Wildlife
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img1.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img2.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img3.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img4.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img5.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img6.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img7.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img8.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img9.JPG",
      alt: "Wildlife photograph by Lathiya Harshal",
    },
    {
      category: "wildlife",
      title: "Wildlife",
      location: "",
      year: "",
      src: "images/Wildlife_img/Wildlife_img10.jpg",
      alt: "Wildlife photograph by Lathiya Harshal",
    },

    // Flowers
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img1.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img2.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img3.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img4.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img5.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img6.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img7.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img8.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img9.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
    {
      category: "flowers",
      title: "Flowers",
      location: "",
      year: "",
      src: "images/Flowers_img/Flowers_img10.jpg",
      alt: "Flower photograph by Lathiya Harshal",
    },
  ];

  /* ============================================================
     GALLERY RENDERING + FILTERING
     ============================================================ */
  const galleryContainer = $("#gallery");
  const galleryEmpty = $("#galleryEmpty");
  const galleryFilter = $("#galleryFilter");

  const CATEGORY_LABELS = {
    featured: "Featured",
    nature: "Nature",
    wildlife: "Wildlife",
    flowers: "Flowers",
  };

  let currentFilter = "featured";
  let currentItems = [];

  function applyFilter(filter) {
    const btn = $$(".filter-btn").find((b) => b.dataset.filter === filter);
    if (btn) btn.click();
  }

  function getFilteredItems(filter) {
    if (filter === "all") return galleryData;
    return galleryData.filter((item) => item.category === filter);
  }

  function renderGallery(filter) {
    if (!galleryContainer) return;

    currentFilter = filter;
    currentItems = getFilteredItems(filter);

    galleryContainer.innerHTML = "";

    if (currentItems.length === 0) {
      if (galleryEmpty) galleryEmpty.hidden = false;
      return;
    }

    if (galleryEmpty) galleryEmpty.hidden = true;

    currentItems.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "gallery-item";
      div.setAttribute("data-category", item.category);
      div.setAttribute("role", "button");
      div.setAttribute("tabindex", "0");
      div.setAttribute("aria-label", item.alt);

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.loading = "lazy";
      img.decoding = "async";
      // Reserve space once the real proportions are known (reduces column jumping)
      img.addEventListener("load", () => {
        if (img.naturalWidth && img.naturalHeight) {
          img.style.aspectRatio = img.naturalWidth + " / " + img.naturalHeight;
        }
        div.classList.add("loaded");
      });
      img.addEventListener("error", () => {
        div.classList.add("is-broken");
      });

      const overlay = document.createElement("div");
      overlay.className = "item-overlay";
      const label = document.createElement("p");
      label.textContent = CATEGORY_LABELS[item.category] || item.category;
      overlay.appendChild(label);

      div.appendChild(img);
      div.appendChild(overlay);

      const open = () => openLightbox(index);
      div.addEventListener("click", open);
      div.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });

      galleryContainer.appendChild(div);
    });
  }

  // Filter buttons
  const filterBtns = $$(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.filter === currentFilter) return;

      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      // Fade out, replace, fade in — no page jump
      if (galleryContainer) {
        galleryContainer.classList.add("filtering");
        setTimeout(() => {
          renderGallery(btn.dataset.filter);
          galleryContainer.classList.remove("filtering");
        }, 200);
      } else {
        renderGallery(btn.dataset.filter);
      }
    });
  });

  // Initial render
  renderGallery("featured");

  /* ============================================================
     STICKY FILTER DETECTION
     ============================================================ */
  // A sticky element is always "intersecting", so observe a zero-height
  // sentinel placed just above it instead.
  if (galleryFilter && "IntersectionObserver" in window) {
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "height:1px;margin-bottom:-1px;pointer-events:none;";
    galleryFilter.parentNode.insertBefore(sentinel, galleryFilter);

    const headerH = siteHeader ? siteHeader.offsetHeight : 72;
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        galleryFilter.classList.toggle(
          "is-stuck",
          !entry.isIntersecting && entry.boundingClientRect.top < headerH + 2
        );
      },
      { rootMargin: "-" + (headerH + 1) + "px 0px 0px 0px", threshold: 0 }
    );
    stickyObserver.observe(sentinel);
  }

  /* ============================================================
     LIGHTBOX
     ============================================================ */
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxTitle = $("#lightboxTitle");
  const lightboxCategory = $("#lightboxCategory");
  const lightboxCounter = $("#lightboxCounter");
  const lightboxClose = $("#lightboxClose");
  const lightboxPrev = $("#lightboxPrev");
  const lightboxNext = $("#lightboxNext");

  let lightboxIndex = 0;
  let lastFocusedElement = null;

  function openLightbox(index) {
    if (!lightbox || !currentItems.length) return;

    lightboxIndex = index;
    lastFocusedElement = document.activeElement;

    updateLightbox();
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function updateLightbox() {
    if (!currentItems.length) return;

    const item = currentItems[lightboxIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    // Titles are currently just the category name, so show it once
    lightboxTitle.textContent = item.title && item.title !== CATEGORY_LABELS[item.category]
      ? item.title
      : CATEGORY_LABELS[item.category] || item.category;
    lightboxCategory.textContent =
      item.location || item.year
        ? [item.location, item.year].filter(Boolean).join(" · ")
        : "";
    lightboxCounter.textContent =
      String(lightboxIndex + 1).padStart(2, "0") +
      " / " +
      String(currentItems.length).padStart(2, "0");

    // Warm the cache for the neighbouring images
    [1, -1].forEach((offset) => {
      const n = currentItems[(lightboxIndex + offset + currentItems.length) % currentItems.length];
      if (n) new Image().src = n.src;
    });
  }

  function navigateLightbox(direction) {
    if (!currentItems.length) return;

    lightboxIndex = (lightboxIndex + direction + currentItems.length) % currentItems.length;
    updateLightbox();
  }

  if (lightbox) {
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
    lightboxNext.addEventListener("click", () => navigateLightbox(1));

    // Close on backdrop click
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateLightbox(-1);
          break;
        case "ArrowRight":
          navigateLightbox(1);
          break;
        case "Tab": {
          // Keep focus inside the dialog
          const focusable = [lightboxClose, lightboxPrev, lightboxNext];
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          } else if (!focusable.includes(document.activeElement)) {
            e.preventDefault();
            first.focus();
          }
          break;
        }
      }
    });

    // Touch swipe
    let touchStartX = 0;
    let touchStartY = 0;
    lightbox.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
      },
      { passive: true }
    );
    lightbox.addEventListener(
      "touchend",
      (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          navigateLightbox(dx < 0 ? 1 : -1);
        }
      },
      { passive: true }
    );
  }

  /* ============================================================
     CONTACT FORM
     ============================================================ */
  const contactForm = $("#contactForm");
  const submitBtn = $("#submitBtn");
  const formStatus = $("#formStatus");
  const nameInput = $("#formName");
  const emailInput = $("#formEmail");
  const messageInput = $("#formMessage");
  const nameError = $("#nameError");
  const emailError = $("#emailError");
  const messageError = $("#messageError");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnnvjyqr";

  function setFieldError(input, errorEl, message) {
    if (!input || !errorEl) return;
    input.classList.toggle("invalid", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
    errorEl.textContent = message || "";
    errorEl.setAttribute("aria-hidden", message ? "false" : "true");
  }

  function setFormStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = "form-status" + (type ? " " + type : "");
  }

  function validateForm() {
    let valid = true;

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name) {
      setFieldError(nameInput, nameError, "Please enter your name.");
      valid = false;
    } else {
      setFieldError(nameInput, nameError, "");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setFieldError(emailInput, emailError, "Please enter your email address.");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setFieldError(emailInput, emailError, "Please enter a valid email address.");
      valid = false;
    } else {
      setFieldError(emailInput, emailError, "");
    }

    if (!message) {
      setFieldError(messageInput, messageError, "Please enter a message.");
      valid = false;
    } else {
      setFieldError(messageInput, messageError, "");
    }

    return valid;
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        setFormStatus("Please correct the highlighted fields.", "error");
        return;
      }

      const originalText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.textContent = "Sending…";
        submitBtn.disabled = true;
      }
      setFormStatus("", "");

      const formData = new FormData(contactForm);

      // Honeypot: real visitors never fill this hidden field
      if (formData.get("_gotcha")) {
        contactForm.reset();
        return;
      }

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          contactForm.reset();
          setFormStatus("Message sent successfully. Thank you.", "success");
        } else {
          setFormStatus(
            "Unable to send your message. Please email directly instead.",
            "error"
          );
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setFormStatus(
          "Unable to send your message. Please email directly instead.",
          "error"
        );
      } finally {
        if (submitBtn) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      }
    });

    // Clear errors on input
    [nameInput, emailInput, messageInput].forEach((input) => {
      if (!input) return;
      input.addEventListener("input", () => {
        const errorEl =
          input === nameInput
            ? nameError
            : input === emailInput
              ? emailError
              : messageError;
        setFieldError(input, errorEl, "");
      });
    });
  }

  /* ============================================================
     COLLECTION TILES -> open the matching gallery filter
     ============================================================ */
  $$("[data-collection]").forEach((tile) => {
    tile.addEventListener("click", (e) => {
      e.preventDefault();
      applyFilter(tile.dataset.collection);
      const target = $("#portfolio");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ============================================================
     FOOTER — DYNAMIC YEAR
     ============================================================ */
  const currentYearEl = $("#currentYear");
  if (currentYearEl) {
    currentYearEl.textContent = String(new Date().getFullYear());
  }
})();