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

    let toggle = true
    $('.menu-toggle').click(function(){
        if(toggle){
            $('nav ul').slideUp(1000, 0.0)
        }else{
            $('nav ul').slideDown(1000, 0.0)
        }
        toggle = !toggle
    })
});
