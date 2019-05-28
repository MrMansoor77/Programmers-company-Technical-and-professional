jQuery(document).ready(function () {

    var btn = $('#backtotopbtn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

});
$(function(){

    $(".prodsidebar").sticky({
        topSpacing: 50,
        zIndex: 22222,
        stopper: "#footer",
    });

});
