/**
* Template Name: Presento
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// js for cursor
document.addEventListener("DOMContentLoaded", () => {
  function initCustomCursor() {
    const cursor = document.getElementById("customCursor");
    let mouseX = 0,
      mouseY = 0;
    let posX = 0,
      posY = 0;
    const speed = 0.15;

    // Track mouse movement
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    document.querySelectorAll("[data-cursor-text]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const text = el.getAttribute("data-cursor-text") || "";
        const bg =
          el.getAttribute("data-cursor-bg") ||
          getComputedStyle(document.documentElement).getPropertyValue(
            "--cursor-bg"
          );
        const color =
          el.getAttribute("data-cursor-text-color") ||
          getComputedStyle(document.documentElement).getPropertyValue(
            "--cursor-text-color"
          );

        cursor.textContent = text;
        cursor.style.width = "60px";
        cursor.style.height = "60px";
        cursor.style.backgroundColor = bg;
        cursor.style.color = color;
        cursor.style.fontSize = "12px";
        cursor.style.display = "flex";
        cursor.style.alignItems = "center";
        cursor.style.justifyContent = "center";
        cursor.style.transform = "translate(-50%, -50%) scale(1.2)";
      });

      el.addEventListener("mouseleave", () => {
        cursor.textContent = "";
        cursor.style.width = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--cursor-size");
        cursor.style.height = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--cursor-size");
        cursor.style.backgroundColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--cursor-bg");
        cursor.style.color = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--cursor-text-color");
        cursor.style.fontSize = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--cursor-font-size");
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.display = "block";
      });
    });
  }

  initCustomCursor();
});

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu li.dropdown > a').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    // Toggle active class on parent <li>
    this.parentNode.classList.toggle('active');

    // Toggle the next sibling <ul> dropdown menu
    const dropdownMenu = this.nextElementSibling;
    if (dropdownMenu && dropdownMenu.tagName === 'UL') {
      dropdownMenu.classList.toggle('dropdown-active');
    }

    e.stopImmediatePropagation();
  });
});



  // document.addEventListener('DOMContentLoaded', () => {
  //   document.querySelectorAll('.navmenu .dropdown ul li.dropdown > a').forEach(link => {
  //     link.addEventListener('click', function (e) {
  //       const parent = this.parentElement;
  //       parent.classList.toggle('dropdown-active');
  //       e.preventDefault(); // prevent navigation
  //     });
  //   });
  // });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      // Pehle sabhi FAQ items ko band kar dein
      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('faq-active');
      });
      // Ab sirf click kiya gaya item khol dein
      faqItem.parentNode.classList.add('faq-active');
    });
  });
  

})();




particlesJS('particle-container', {
  "particles": {
    "number": {
      "value": 80, // Number of particles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // White particles
    },
    "shape": {
      "type": "circle", // Particle shape
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150, // Link distance
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Speed of particles
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // Particles repel on hover
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Add particles on click
      }
    },
    "modes": {
      "repulse": {
        "distance": 100
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});



// JS For Typing Animation
    const textArray = ["Products", "People", "Places", "Events"];
    let index = 0;
    let charIndex = 0;
    const typeSpeed = 100;
    const eraseSpeed = 60;
    const delayBetween = 1500;
    const typeSpan = document.querySelector(".typewriter");

    function type() {
      if (charIndex < textArray[index].length) {
        typeSpan.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typeSpeed);
      } else {
        setTimeout(erase, delayBetween);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typeSpan.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
      } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 300);
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      if (textArray.length) setTimeout(type, 500);
    });


    // JS for autotype
     const exampleText = ['I can write a whole sentence.', 'Or', 'single', 'words'];
    const exampleTyping = new AutoTyping('.typewriter-text', exampleText, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });
    exampleTyping.start()









  

