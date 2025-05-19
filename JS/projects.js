$(document).ready(function(){
    var animationSpeed = 2000
    var pause = animationSpeed + 1000
    var currentSlide = 1

    var $sliderContainer = $('.slides')  
    var $slides = $('.slide')
    var totalSlides = $slides.length

    $sliderContainer.append($slides.first().clone());

    var interval;

    function getSlideWidth(){
        return $('#slider').width();
    }

    function startSlider(){  
        clearInterval(interval)
        interval = setInterval(function(){
            var width = getSlideWidth(); 
            $sliderContainer.animate({'margin-left':'-='+width}, animationSpeed,  
                function(){  
                    currentSlide++  
                    if (currentSlide > totalSlides){  
                        currentSlide = 1  
                        $sliderContainer.css('margin-left', 0)  
                    }  
                })  
        },pause)  
    }
    
    $(window).on('resize', function(){
        $sliderContainer.css('margin-left', 0);
        currentSlide = 1
        startSlider
    });
    startSlider()  
});