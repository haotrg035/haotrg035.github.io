$(document).ready(function ($) {

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
    })
});