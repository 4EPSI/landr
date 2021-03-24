// Mobile menu
$('.burger').on('click', function () {
    $('.burger').toggleClass('active');
    $('body').toggleClass('no_scroll');
    $('.header-menu').toggleClass('active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header').length) {
        $('.burger').removeClass('active');
        $('.header-menu').removeClass('active');
        $('body').removeClass('no_scroll');
    }
    e.stopPropagation();
});

// Scroll to section
$('body').on('click', '.go_to', function () {
    var scroll_el = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(scroll_el).offset().top - 80
    }, 1000);
    $('.burger').removeClass('active');
    $('.menu').removeClass('active');
    return false;
});
// Header
var viewportheight = $( window ).height(),
    currentTop = $(this).scrollTop(),
    header = $('.header').outerHeight();

// Header changing on Load
if (currentTop >= header) {
    $('.header').addClass('active');
} else {
    $('.header').removeClass('active');
}
// Header changing on Scroll
$(document).scroll(function(){
    viewportheight = $( window ).height();
    currentTop = $(this).scrollTop();
    if (currentTop >= header) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});