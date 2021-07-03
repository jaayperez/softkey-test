(function($) {

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.HomeOpacity();
      App.ScrollBack();
      App.Preloader();
      // App.Animations();
      App.Scale_video();
      // App.iosdetect();
      // App.androiddetect();
    },


    HomeOpacity: function() {
      var h = window.innerHeight;
      $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        $('#home').css('opacity', (1 - st / h));
      });
    },


    /**
     * Scroll Back
     */
    ScrollBack: function() {
      $('#arrow_back').click(function() {
        $.scrollTo('#home', 1500, {
          easing: 'easeInOutExpo',
          offset: 0,
          'axis': 'y'
        });
      });
    },


    /**
     * Preloader
     */
    Preloader: function() {
      $(window).load(function() {
        $('#status').delay(100).fadeOut('slow');
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({
          'overflow': 'visible'
        });
        setTimeout(function() {
          $('#logo').addClass('animated fadeInDown')
        }, 500);
        setTimeout(function() {
          $('#logo_header').addClass('animated fadeInDown')
        }, 600);
        setTimeout(function() {
          $('#slogan').addClass('animated fadeInDown')
        }, 700);
        setTimeout(function() {
          $('#home_image').addClass('animated fadeInUp')
        }, 900);
      })
    },


    // /**
    //  * Animations
    //  */
    // Animations: function() {
    //   $('#about').waypoint(function() {
    //     setTimeout(function() {
    //       $('#about_intro').addClass('animated fadeInDown')
    //     }, 0);
    //     setTimeout(function() {
    //       $('#service_1').addClass('animated fadeInDown')
    //     }, 300);
    //     setTimeout(function() {
    //       $('#service_2').addClass('animated fadeInDown')
    //     }, 500);
    //     setTimeout(function() {
    //       $('#service_3').addClass('animated fadeInDown')
    //     }, 700);
    //   }, {
    //     offset: '50%'
    //   });
    //
    // },


    /**
     * Video background scaling
     */
    Scale_video: function() {
      var min_w = 300; // minimum video width allowed
      var vid_w_orig; // original video dimensions
      var vid_h_orig;

      jQuery(function() { // runs after DOM has loaded

        vid_w_orig = parseInt(jQuery('video').attr('width'));
        vid_h_orig = parseInt(jQuery('video').attr('height'));


        jQuery(window).resize(function() {
          resizeToCover();
        });
        jQuery(window).trigger('resize');
      });

      function resizeToCover() {

        // set the video viewport to the window size
        jQuery('#video-container').width(jQuery(window).width());
        jQuery('#video-container').height(jQuery(window).height());

        // use largest scale factor of horizontal/vertical
        var scale_h = jQuery(window).width() / vid_w_orig;
        var scale_v = jQuery(window).height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        // don't allow scaled width < minimum video width
        if (scale * vid_w_orig < min_w) {
          scale = min_w / vid_w_orig;
        };

        // now scale the video
        jQuery('video').width(scale * vid_w_orig);
        jQuery('video').height(scale * vid_h_orig);
        // and center it by scrolling the video viewport
        jQuery('#video-container').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
        jQuery('#video-container').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);

      };

    },



    // /**
    //  * iosdetect
    //  */
    // iosdetect: function() {
    //   var deviceAgent = navigator.userAgent.toLowerCase();
    //   $iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    //
    //   if ($iOS) {
    //
    //     $('#video-container').css({
    //       'display': 'none'
    //     });
    //     $('#video-fallback').css({
    //       'display': 'block'
    //     });
    //
    //
    //     // use fancy CSS3 for hardware acceleration
    //   } else {
    //
    //
    //     // use standard things like jQuery.animate
    //   }
    // },
    //
    //
    //
    // /**
    //  * androiddetect
    //  */
    // androiddetect: function() {
    //   var ua = navigator.userAgent.toLowerCase();
    //   var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    //
    //   if (isAndroid) {
    //
    //     $('#video-container').css({
    //       'display': 'none'
    //     });
    //     $('#video-fallback').css({
    //       'display': 'block'
    //     });
    //
    //
    //     // use fancy CSS3 for hardware acceleration
    //   } else {
    //
    //
    //     // use standard things like jQuery.animate
    //   }
    // },


  }

  $(function() {
    App.init();
  });


})(jQuery);
