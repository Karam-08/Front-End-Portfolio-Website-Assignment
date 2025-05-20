// Basic hover function
$(document).ready(function(){
    $('nav h1').hover(function(){
            $(this).css('color', '#FFD700'); // On hover it changes color
        },
        function(){
            $(this).css('color', 'white'); // When no longer hovered, it turns back to default
        }
    );
    $('nav ul li a').hover(function(){
            $(this).css('background-color', '#FFD700');
            $(this).css('color', 'black')
            $(this).css('text-decoration', 'underline')
        },
        function(){
            $(this).css('background-color', 'transparent');
            $(this).css('color', 'white')
            $(this).css('text-decoration', 'none')
        });
        
    // Toggles class to unhide navbar on mobile
    $('.menu-toggle').click(function(){
        $('nav ul').toggleClass('toggleHidden')
    })
});
