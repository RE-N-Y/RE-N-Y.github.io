$(document).ready(function (){
    $(document).keyup(function(e) {
     if (e.keyCode == 27) {
        $("#grey").fadeOut();
        $("#music-player-container").fadeIn();
        $("#info-display, .icon-container, #grey, .Productions, .Dividers, #Production_Display, #Production_Description, .tags, #Recommendations, .Re-Ops, #genre-container").fadeOut();
        $("#ThemeAnime-1").fadeOut().animate({left:"100%"});
     }
    });
    
    $(".icon-container img").click(function(){
        $(".icon-container").fadeOut();
    });
    $("#bottom-line").mouseover(function(){
        $("#icon").fadeIn();
    });
    $("#bottom-line").mouseout(function(){
        $("#icon").fadeOut();
    });
    $("#icon").click(function(){
        $("#grey").fadeToggle();
        $(".icon-container").fadeToggle();
        $("#Description").fadeOut();
        $("#music-player-container").fadeToggle();
    });
    $("a.close").click(function(){
        $("#grey").fadeOut();
        $("#music-player-container").fadeIn();
    });
    $(".slider").slick({
        dots: false,
        slidesToShow: 5,
        infinite:true,
        autoplay:true
        //variableWidth:true
    });
});