$(document).ready(function () {
    'use strict';
    var image, imageCounter = 0,
        imageCache = [];
    $('#slides img').each(function () {
        image = new Image();
        image.src = $(this).attr('src');
        image.title = $(this).attr('alt');
        imageCache[imageCounter] = image;
        imageCounter++;
    });
    imageCounter = 0;
    var nextImage;
    setInterval(
        function () {
            $('#title').fadeOut(1000);
            $('#titleSlide').fadeOut(1000,
                function () {
                    imageCounter = (imageCounter + 1) % imageCache.length;
                    nextImage = imageCache[imageCounter];
                    $('#titleSlide').attr('src', nextImage.src).fadeIn(1000);
                    $('#title').text(nextImage.title).fadeIn(1000);
                }
            );
        },
        3000);
})


$(document).ready(function () {
    var nextSlide = $('#slides img:first-child');
    var nextCaption;
    var nextSlideSource;

    var runSlideShow = function () {
        $('#title').fadeOut(1000);
        $('#titleSlide').fadeOut(1000,
            function () {
                if (nextSlide.next().length === 0) {
                    nextSlide = $('#slides img:first-child');
                } else {
                    nextSlide = nextSlide.next();
                }
                nextSlideSource = nextSlide.attr('src');
                nextCaption = nextSlide.attr('alt');
                $('#titleSlide').attr('src', nextSlideSource).fadeIn(1000);
                $('#title').text(nextCaption).fadeIn(1000);
            }
        )
    };

    var timer1 = setInterval(runSlideShow, 3000);

    $('#titleSlide').click(function () {
        if (timer1 !== null) {
            clearInterval(timer1);
            timer1 = null;
        } else {
            timer1 = setInterval(runSlideShow, 3000);
        }
    });

    $('#slides img').css({
        'height': '400px',
        'width': '600px',
        'display': 'none'
    });

    $('#slides').css({
        'height': '400px',
        'width': '3020px',
        'display': 'block'
    });

    $('#titleSlide').css({
        'height': '400px',
        'width': '600px'
    });

});
