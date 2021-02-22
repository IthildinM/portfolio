 (function($) {
    $(document).ready(function() {

        /*CHECK IF LOADED */
        console.log('JS Main Ready');

        /* NAVIGATION FANCY MAGIC */
         var $page = $('.page');
		 $('.menu_toggle').on('click', function() {
		     $page.toggleClass('shazam');
		 });
		 $('.content').on('click', function() {
		     $page.removeClass('shazam');
		 });

         $(document).on("click", '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
        
    });

    $(window).resize(function() {});

    $(window).scroll(function() {});

    $(window).load(function() {});

})(jQuery);