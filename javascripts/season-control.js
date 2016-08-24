$(document).ready(function(){
    $(".btn").click(function(){
        $("div.hovereffect").toggleClass("active");
    });
    $("li").click(function(){
        $("div.hovereffect").removeClass("active");
    });
});