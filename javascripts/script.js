$(document).ready(function (){
    function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
    }
    var width = (screen.width-getScrollbarWidth()) + 'px';
    $("body").css("width",width);
    $("#music-player-container").css("width",width);
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