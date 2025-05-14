$(document).ready(function(){
    $('nav h1').hover(function(){
            $(this).css('color', '#FFD700');
        },
        function(){
            $(this).css('color', 'white');
        }
    );
    $('nav ul li a').hover(function(){
            $(this).css('color', '#FFD700');
            $(this).css('text-decoration', 'underline')
        },
        function(){
            $(this).css('color', 'white');
            $(this).css('text-decoration', 'none')
        });
        
    $('.menu-toggle').click(function(){
        $('nav ul').toggleClass('toggleHidden')
    })
});
