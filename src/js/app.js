import HP from './modules/helpers';

(function($) {

    // When DOM is ready
    $(function() {
        $(window).stellar();
        $('.datepicker').pickadate();
        $('.owl-carousel').owlCarousel({
        	items:1,
        	loop:true,
        	dots:true,
        	autoplay:true
        });
    });

}(jQuery));
