(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  $(document).ready(function () {
    setTimeout(function () {
      // -----------------------------
      //  Testimonial Slider
      // -----------------------------
      $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 2
          }
        }
      });
      // -----------------------------
      //  Story Slider
      // -----------------------------
      $('.about-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        items: 1
      });
      // -----------------------------
      //  Quote Slider
      // -----------------------------
      $('.quote-slider').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1
      });
      // -----------------------------
      //  Client Slider
      // -----------------------------
      $('.client-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 50,
        responsive: {
          0: {
            items: 1,
            dots: false
          },
          400: {
            items: 2,
            dots: false
          },
          600: {
            items: 2,
            dots: false
          },
          1000: {
            items: 4
          }
        }
      });
    }, 500);
    // -----------------------------
    //  Video Replace
    // -----------------------------
    $('.video-box i').click(function () {
      var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
      $(this).replaceWith(video);
    });


    // video modal popup
    var $videoSrc;
    $('.video-modal').click(function () {
      $videoSrc = $(this).data("src");
    });
    $('#videoModal').on('shown.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc);
    })

    // ----------------------------
    // AOS
    // ----------------------------
    AOS.init({
      once: true
    });

    // accordion
    $('.collapse').on('shown.bs.collapse', function () {
      $(this).parent().find('.tf-ion-ios-arrow-right').removeClass('tf-ion-ios-arrow-right').addClass('tf-ion-ios-arrow-up');
    }).on('hidden.bs.collapse', function () {
      $(this).parent().find('.tf-ion-ios-arrow-up').removeClass('tf-ion-ios-arrow-up').addClass('tf-ion-ios-arrow-right');
    });



    // scroll
    $('.scrollTo').on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: ($(target).offset().top)
      }, 500);
    });

  });

})(jQuery);