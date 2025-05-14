$(document).ready(function(){
    var width = 720
    var animationSpeed = 2000
    var pause = animationSpeed + 1000
    var currentSlide = 1

    var $sliderContainer = $('.slides')
    var $slides = $('.slide')
    var interval;
    
    function startSlider(){
        interval = setInterval(function(){
            $sliderContainer.animate({'margin-left':'-=' + width}, animationSpeed,
                function(){
                    currentSlide++
                    if(currentSlide > $slides.length){
                        currentSlide = 1
                        $sliderContainer.css('margin-left', 0)
                    }
                })
        },pause)
    }
    startSlider()
})
