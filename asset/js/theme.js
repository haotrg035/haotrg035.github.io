$(document).ready(function ($) {

<<<<<<< HEAD
    let homeAboutPost = $('#home-about').offset().top - 102;

=======
>>>>>>> 2965824254407001e9bf659c7f49879b08d5c7c0
    $('#page-header').sticky({
        topSpacing: 0,
        widthFromWrapper: false
    }).on('sticky-start', function () {
        $(this).addClass('scroll');
    }).on('sticky-end', function () {
        $(this).removeClass('scroll');
    });

    $('#page-header #page-menu .form-nav-search label').on('click', function (e) {
        $(this).siblings('input').toggleClass('show');
<<<<<<< HEAD
    });

    $('#nav-background').on('click', function (e) {
        e.preventDefault();
        $('#page-menu').removeClass('show');
    });

    $('#page-menu-nav .dropdown-menu .nav-item.dropdown > .nav-link[data-toggle=dropdown]').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parents('.dropdown').first().toggleClass('show');
        $(this).parents('.dropdown').first().children('.dropdown-menu').toggleClass('show')
    });

    $('#btn-hero-scroll-down').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: homeAboutPost}, 500);
    });

=======
    })
>>>>>>> 2965824254407001e9bf659c7f49879b08d5c7c0
});