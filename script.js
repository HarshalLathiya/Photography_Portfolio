
(function () {
    "use strict";



    // ---------- SCROLL PROGRESS ----------
    const progressBar = document.getElementById("progressBar");
    window.addEventListener("scroll", () => {
        const winScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // ---------- MOBILE MENU ----------
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    menuToggle.addEventListener("click", () =>
        navLinks.classList.toggle("active"),
    );
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () =>
            navLinks.classList.remove("active"),
        );
    });

    // ---------- FADE IN ON SCROLL (Intersection Observer) ----------
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.15 },
    );
    fadeElements.forEach((el) => observer.observe(el));

    // ---------- GALLERY DATA (Placeholder images from Pexels/Unsplash) ----------
    const galleryData = [
        {
            category: "featured",
            title: "Featured 1",
            desc: "Featured",
            src: "images/Featured_img/Featured_img1.jpg",
        },
        {
            category: "featured",
            title: "Featured 2",
            desc: "Featured",
            src: "images/Featured_img/Featured_img2.jpg",
        },
        {
            category: "featured",
            title: "Featured 3",
            desc: "Featured",
            src: "images/Featured_img/Featured_img3.jpg",
        },
        {
            category: "nature",
            title: "Nature 1",
            desc: "Nature",
            src: "images/Nature_img/Nature_img1.jpg",
        },
        {
            category: "nature",
            title: "Nature 2",
            desc: "Nature",
            src: "images/Nature_img/Nature_img2.jpg",
        },
        {
            category: "nature",
            title: "Nature 3",
            desc: "Nature",
            src: "images/Nature_img/Nature_img3.jpg",
        },
        {
            category: "nature",
            title: "Nature 4",
            desc: "Nature",
            src: "images/Nature_img/Nature_img4.jpg",
        },
        {
            category: "nature",
            title: "Nature 5",
            desc: "Nature",
            src: "images/Nature_img/Nature_img6.jpg",
        },
        {
            category: "nature",
            title: "Nature 6",
            desc: "Nature",
            src: "images/Nature_img/Nature_img7.jpg",
        },
        {
            category: "nature",
            title: "Nature 7",
            desc: "Nature",
            src: "images/Nature_img/Nature_img8.jpg",
        },
        {
            category: "nature",
            title: "Nature 8",
            desc: "Nature",
            src: "images/Nature_img/Nature_img9.jpg",
        },
        {
            category: "nature",
            title: "Nature 9",
            desc: "Nature",
            src: "images/Nature_img/Nature_img10.jpg",
        },
        {
            category: "wildlife",
            title: "Wildlife 1",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img1.jpg",
        },
        {
            category: "wildlife",
            title: "Wildlife 2",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img2.jpg",
        },
        {
            category: "wildlife",
            title: "Wildlife 3",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img3.jpg",
        },
        {
            category: "wildlife",
            title: "Wildlife 4",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img4.jpg",
        },
        {
            category: "wildlife",
            title: "Wildlife 5",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img6.jpg",
        },
        {
            category: "wildlife",
            title: "Wildlife 6",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img7.jpg",
        },
        {
            category: "wildlife",
            title: "Wildlife 7",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img8.jpg",
        },
        {
            category: "wildlife",
            title: "Wildlife 8",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img9.JPG",
        },
        {
            category: "wildlife",
            title: "Wildlife 9",
            desc: "Wildlife",
            src: "images/Wildlife_img/Wildlife_img10.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 1",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img1.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 2",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img2.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 3",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img3.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 4",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img4.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 5",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img6.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 6",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img7.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 7",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img8.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 8",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img9.jpg",
        },
        {
            category: "flowers",
            title: "Flowers 9",
            desc: "Flowers",
            src: "images/Flowers_img/Flowers_img10.jpg",
        }
    ];

    const galleryContainer = document.getElementById("gallery");
    function renderGallery(filter = "all") {
        galleryContainer.innerHTML = "";
        const filtered =
            filter === "all"
                ? galleryData
                : galleryData.filter((item) => item.category === filter);
        filtered.forEach((item) => {
            const div = document.createElement("div");
            div.className = "gallery-item";
            div.setAttribute("data-category", item.category);
            div.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="item-overlay">
              <h4>${item.title}</h4>
              <p>${item.desc}</p>
            </div>
          `;
            div.addEventListener("click", () =>
                openLightbox(item.src, item.title),
            );
            galleryContainer.appendChild(div);
        });
    }

    renderGallery("featured");

    // Filter buttons

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderGallery(btn.dataset.filter);
        });
    });

    // ---------- LIGHTBOX ----------
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxClose = document.getElementById("lightboxClose");
    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add("active");
    }
    lightboxClose.addEventListener("click", () =>
        lightbox.classList.remove("active"),
    );
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("active");
    });

    // ---------- SIMPLE FORM PREVENT DEFAULT ----------


    document
        .getElementById("contactForm")
        .addEventListener("submit", async (e) => {
            e.preventDefault();

            // Show loading
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(e.target);

            try {
                const response = await fetch('https://formspree.io/f/xnnvjyqr', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    e.target.reset();
                    alert('Thank you! Your message has been sent successfully.');
                } else {
                    const errorText = await response.text();
                    console.error('Formspree error:', errorText);
                    alert('Sorry, something went wrong. Please try again or email directly.');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('Sorry, something went wrong. Please try again or email harshal.lathiya2@gmail.com');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
})();
