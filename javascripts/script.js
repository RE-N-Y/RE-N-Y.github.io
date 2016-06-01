$(document).ready(function (){
    $(document).keyup(function(e) {
     if (e.keyCode == 27) {
        $("#myCarousel, #grey").fadeOut();
        $("#music-player-container").fadeIn();
        $("#info-display, .icons, #grey, .Productions, .Dividers, #Production_Display, #Production_Description, .tags, #Recommendations, .Re-Ops, .close").fadeOut();
        $("#ThemeAnime-1").fadeOut();
     }
    });
    
    $(".icons img").click(function(){
        $(".icons").fadeOut();
    });
    $("#bottom-line").mouseover(function(){
        $("#icon").fadeIn();
    });
    $("#bottom-line").mouseout(function(){
        $("#icon").fadeOut();
    });
    $("#icon").click(function(){
        $("#grey").fadeToggle();
        $(".icons").fadeToggle();
        $("#Description").fadeOut();
        $("#music-player-container").fadeToggle();
    });
});