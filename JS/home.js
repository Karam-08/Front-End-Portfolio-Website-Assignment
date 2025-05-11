$(document).ready(function(){
    // 1. Animated header text color change
    $('nav h1').hover(
        function () {
            $(this).css('color', '#FFD700');
        },
        function () {
            $(this).css('color', 'white');
        }
    );

    // 2. Navigation link hover effect
    $('nav ul li a').hover(
        function () {
            $(this).css('color', '#FFD700');
        },
        function () {
            $(this).css('color', 'white');
        }
    );

    // 3. Image fade-in on page load
    $('.intro-content img').hide().fadeIn(2000);
});