$(window).on("load", function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("body").addClass("ios");
  } else {
    $("body").addClass("web");
  }
  document.body.dataset.preloader = false;
});

/* viewport width */
$(function () {
  /* placeholder*/
  $("input, textarea").each(function () {
    var placeholder = $(this).attr("placeholder");
    $(this).focus(function () {
      $(this).attr("placeholder", "");
    });
    $(this).focusout(function () {
      $(this).attr("placeholder", placeholder);
    });
  });
  /* placeholder*/

  /* burger */
  if ($(".js-nav").length) {
    $(".js-nav").click(function (e) {
      e.preventDefault(e);
      $(".nav.m-secondary").toggleClass("m-active");
      if ($("body").hasClass("navigation-opened")) {
        $("body").removeClass("navigation-opened");
      } else {
        $("body").addClass("navigation-opened");
      }
    });
  }

  if ($(".js-list .nav__item").length) {
    $(".js-list .nav__item").click(function (e) {
      $(".js-list .nav__item").removeClass("m-active");
      $(this).addClass("m-active");
      $("body").removeClass("navigation-opened");
      $(".js-list").removeClass("m-active");
    });
  }

  if ($(".js-toggle").length) {
    $(".js-toggle").click(function (e) {
      e.preventDefault(e);
      $(this).toggleClass("m-active");
      $(".toggle__content").slideToggle().toggleClass("m-hidden");
    });
  }

  if ($(".js-toggle-once").length) {
    $(".js-toggle-once").one("click", function (e) {
      e.preventDefault(e);
      $(this).toggleClass("m-active");
      $(".toggle__content").slideToggle().toggleClass("m-hidden");
    });
  }

  if ($(".js-gallery").length) {
    $(".js-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
      fixedContentPos: false,
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });
  }

  /* components */
  if ($(".js-our-clients-slider").length) {
    $(".js-our-clients-slider").slick({
      dots: false,
      autoplay: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24" fill="none"><path d="M36.0607 13.0607C36.6464 12.4749 36.6464 11.5251 36.0607 10.9393L26.5147 1.3934C25.9289 0.807614 24.9792 0.807614 24.3934 1.3934C23.8076 1.97919 23.8076 2.92893 24.3934 3.51472L32.8787 12L24.3934 20.4853C23.8076 21.0711 23.8076 22.0208 24.3934 22.6066C24.9792 23.1924 25.9289 23.1924 26.5147 22.6066L36.0607 13.0607ZM-1.31134e-07 13.5L35 13.5L35 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="#8E8E8E"/></svg></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24" fill="none"><path d="M0.93934 13.0607C0.353553 12.4749 0.353553 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807614 12.0208 0.807614 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.93934 13.0607ZM37 13.5L2 13.5L2 10.5L37 10.5L37 13.5Z" fill="#8E8E8E"/></svg></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 476,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".js-our-clients-slider").length) {
    $(window).on("resize orientationchange", function () {
      $(".js-our-clients-slider").slick("resize");
    });
  }

  if ($(".fake-iframe").length) {
    $(".fake-iframe").each(function () {
      $(document).delegate("#" + this.id, "click", function () {
        let iframe_url = "";
        if (this.getAttribute("data-youtube-vimeo") == "youtube") {
          iframe_url =
            "https://www.youtube.com/embed/" +
            this.id +
            "?autoplay=1&autohide=1";
        } else if (this.getAttribute("data-youtube-vimeo") == "vimeo") {
          iframe_url =
            "https://player.vimeo.com/video/" +
            this.id +
            "?color&amp;autoplay=1&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=";
        }

        const iframe =
          '<iframe width="' +
          $(this).width() +
          '" height="' +
          $(this).height() +
          '" src="' +
          iframe_url +
          '" frameborder="0" allowfullscreen=""></iframe>';

        $(this).find(".fake-iframe__play").remove();

        $(this).append(iframe);
      });
    });
  }

  /* viewport width */
  function viewport() {
    var e = window,
      a = "inner";
    if (!("innerWidth" in window)) {
      a = "client";
      e = document.documentElement || document.body;
    }
    return { width: e[a + "Width"], height: e[a + "Height"] };
  }

  function handler() {
    var height_footer = $("footer").height();
    var height_header = $("header").height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid > 1024) {
      $(".nav.m-secondary").removeClass("m-active");
    }
  }
  $(window).bind("load", handler);
  $(window).bind("resize", handler);

  function getSelectedSection() {
    const sections = document.querySelectorAll(".js-section");
    let elements = [];
    for (let i = 0; i < sections.length; i++) {
      let sectionTop = sections[i].offsetTop;
      let sectionId = sections[i].getAttribute("id");
      let element = {};
      element.offsetTop = sectionTop;
      element.id = sectionId;
      elements.push(element);
      console.log(elements);
      console.log(element);
    }
    return elements;
  }

  function setSelectedSection() {
    let sections = getSelectedSection();
    let items = Array.from(document.querySelectorAll(".nav__item"));
    $(window).scroll(function () {
      for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let id = section.id;
        for (let j = 0; j < items.length; j++) {
          if ($(window).scrollTop() > section.offsetTop - 50) {
            let item = items[j];
            console.log(section);
            console.log(item);
            let link = item.children;
            item.classList.remove("m-active");
            if (link.item(0).getAttribute("href") == `#${id}`) {
              item.classList.add("m-active");
            }
          }
        }
      }
    });
  }
  setSelectedSection();

  function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function setRandomWidth() {
    if ($(window).width() > 1024) {
      if ($(".js-photo").length && $(".js-photo .photo__item").length) {
        const photos = Array.from(
          document.querySelectorAll(".js-photo .photo__item")
        );
        let width = 0;
        for (let i = 0; i < photos.length; i++) {
          let photo = photos[i];
          let randomWidth = getRandomInt(18, 27);

          if (i % 4 == 0) {
            photo.style.width = `calc(${100 - width}% - ${10}px) `;
            width = 0;
          } else {
            photo.style.width = `calc(${randomWidth}% - ${10}px)`;
            width = width + randomWidth;
          }
          if ($(window).width() >= 767 && $(window).width() < 1024) {
            photo.style.width = `calc(${33.33}% - ${10}px)`;
          }
          if ($(window).width() >= 476 && $(window).width() < 767) {
            photo.style.width = `calc(${50}% - ${10}px)`;
          }
          if ($(window).width() < 476) {
            photo.style.width = `${100}%`;
          }
        }
      }
    }
  }
  $(window).resize(setRandomWidth);
  setRandomWidth();

  window.addEventListener("scroll", addApropriateClass);
  window.addEventListener("resize", addApropriateClass);

  function addApropriateClass() {
    let $elements = null;
    let windowHeight = null;

    init();
    checkElementPositiont();

    function init() {
      $elements = document.querySelectorAll(".js-animate");
      windowHeight = window.innerHeight;
    }

    function checkElementPositiont() {
      for (let i = 0; i < $elements.length; i++) {
        let element = $elements[i];
        let positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add("m-animated");
          element.classList.remove("js-animate");
        }
      }
    }
  }
});
