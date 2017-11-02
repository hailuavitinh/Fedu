$(function(){
    $(window).resize(function(){
        getHeightWindows();

        getWidthWindows();
    });

    function getHeightWindows(){
        var docao = $(window).height();
        $('.carousel-item img').css({'height':docao});
    }

    function getWidthWindows(){
        var dorong = $(window).width();
        $('.carousel-item img').css({'width':dorong});
    }
});