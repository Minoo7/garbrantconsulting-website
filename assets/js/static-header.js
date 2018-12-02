$(window).load(function(){
    
    $(window).scroll(function() {
        var hT = $('#scroll-to').offset().top,
        hH = $('#scroll-to').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
            $('#static-bar').addClass('view2')
        }
        else {
            $('#static-bar').removeClass('view2');
        }
    });
});