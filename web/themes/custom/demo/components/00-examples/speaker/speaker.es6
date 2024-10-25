(function speakerComponentInit($, Drupal) {
  Drupal.behaviors.speakerSlider = {
    attach(context) {
      // Initialize Slick only if the element exists
      const $slickListing = $('.speaker-cards-listing', context);
      if ($slickListing.length) {
        $slickListing.not('.slick-initialized').slick({
          slidesToShow: 3,
          arrows: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              },
            },
          ],
        });
      }
    },
  };
})(jQuery, Drupal);
