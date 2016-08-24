$(document).ready(function(){

    var filter =  $("#Filter-Ops"); 
    var anime = $(".anime");
    var filterops = $("#Filter-Ops div");
	$("#Filter").click(function(){
        $(".tags").fadeIn();
        $("#E1").fadeIn();
        $("#E2").fadeIn();
    });

    $("#Adventure").click(function(){
        $(".Adventure").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Adventure, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Adventure-Filter\"><p>어드벤처 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Action").click(function(){
        $(".Action").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Action, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Action-Filter\"><p>액션 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Comedy").click(function(){
        $(".Comedy").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Comedy, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Comedy-Filter\"><p>코미디 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Drama").click(function(){
        $(".Drama").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Drama, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Drama-Filter\"><p>드라마 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Ecchi").click(function(){
        $(".Ecchi").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Ecchi, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Ecchi-Filter\"><p>에로물 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Fantasy").click(function(){
        $(".Fantasy").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Fantasy, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Fantasy-Filter\"><p>판타지 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#SF").click(function(){
        $(".SF").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".SF, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"SF-Filter\"><p>SF <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Harem").click(function(){
        $(".Harem").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Harem, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Harem-Filter\"><p>하렘 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Gore").click(function(){
        $(".Gore").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Gore, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Gore-Filter\"><p>고어 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Horror").click(function(){
        $(".Horror").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Horror, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Horror-Filter\"><p>호러<span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Mecha").click(function(){
        $(".Mecha").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Mecha, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Mecha-Filter\"><p>메카 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Military").click(function(){
        $(".Military").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Military, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Military-Filter\"><p>밀리터리 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Thriller").click(function(){
        $(".Thriller").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Thriller, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Thriller-Filter\"><p>스릴러 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Mystery").click(function(){
        $(".Mystery").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Mystery, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Mystery-Filter\"><p>미스테리 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Police").click(function(){
        $(".Police").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Police, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Police-Filter\"><p>수사물 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Psychological").click(function(){
        $(".Psychological").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Psychological, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Psychological-Filter\"><p>심리물 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Music").click(function(){
        $(".Music").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Music, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Music-Filter\"><p>음악 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#School").click(function(){
        $(".School").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".School, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"School-Filter\"><p>학원물 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Slice-of-Life").click(function(){
        $(".Slice-of-Life").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Slice, .active").fadeTo(1000,1)
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Slice-of-Life-Filter\"><p>일상물 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Sports").click(function(){
        $(".Sports").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Sports, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Sports-Filter\"><p>스포츠 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Supernatural").click(function(){
        $(".Supernatural").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Supernatural, .active").fadeTo(1000,1);        
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Supernatural-Filter\"><p>괴이 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Romance").click(function(){
        $(".Romance").addClass("active");
        anime.fadeTo(1000,0.4);
        $(".Romance, .active").fadeTo(1000,1);
        filter.fadeIn();
        $(this).addClass("disabled");
        filter.prepend("<div id=\"Romance-Filter\"><p>로멘스 <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
  

filter.on("click","#Adventure-Filter span",function(){
        $("#Adventure").removeClass("disabled");
        $("#Adventure-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Adventure-Filter").remove();
        }, 500);
        $(".Adventure").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Action-Filter span",function(){
        $("#Action").removeClass("disabled");
        $("#Action-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Action-Filter").remove();
        }, 500);
        $(".Action").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Comedy-Filter span",function(){
        $("#Comedy").removeClass("disabled");
        $("#Comedy-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Comedy-Filter").remove();
        }, 500);
        $(".Comedy").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Drama-Filter span",function(){
        $("#Drama").removeClass("disabled");
        $("#Drama-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Drama-Filter").remove();
        }, 500);
        $(".Drama").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Ecchi-Filter span",function(){
        $("#Ecchi").removeClass("disabled");
        $("#Ecchi-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Ecchi-Filter").remove();
        }, 500);
        $(".Ecchi").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Fantasy-Filter span",function(){
        $("#Fantasy").removeClass("disabled");
        $("#Fantasy-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Fantasy-Filter").remove();
        }, 500);
        $(".Fantasy").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#SF-Filter span",function(){
        $("#SF").removeClass("disabled");
        $("#SF-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#SF-Filter").remove();
        }, 500);
        $(".SF").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Harem-Filter span",function(){
        $("#Harem").removeClass("disabled");
        $("#Harem-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Harem-Filter").remove();
        }, 500);
        $(".Harem").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Gore-Filter span",function(){
        $("#Gore").removeClass("disabled");
        $("#Gore-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Gore-Filter").remove();
        }, 500);
        $(".Gore").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Horror-Filter span",function(){
        $("#Horror").removeClass("disabled");
        $("#Horror-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Horror-Filter").remove();
        }, 500);
        $(".Horror").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Mecha-Filter span",function(){
        $("#Mecha").removeClass("disabled");
        $("#Mecha-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Mecha-Filter").remove();
        }, 500);
        $(".Mecha").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Military-Filter span",function(){
        $("#Military").removeClass("disabled");
        $("#Military-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Military-Filter").remove();
        }, 500);
        $(".Military").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Thriller-Filter span",function(){
        $("#Thriller").removeClass("disabled");
        $("#Thriller-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Thriller-Filter").remove();
        }, 500);
        $(".Thriller").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Mystery-Filter span",function(){
        $("#Mystery").removeClass("disabled");
        $("#Mystery-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Mystery-Filter").remove();
        }, 500);
        $(".Mystery").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Police-Filter span",function(){
        $("#Police").removeClass("disabled");
        $("#Police-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Police-Filter").remove();
        }, 500);
        $(".Police").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Psychological-Filter span",function(){
        $("#Psychological").removeClass("disabled");
        $("#Psychological-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Psychological-Filter").remove();
        }, 500);
        $(".Psychological").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Music-Filter span",function(){
        $("#Music").removeClass("disabled");
        $("#Music-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Music-Filter").remove();
        }, 500);
        $(".Music").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#School-Filter span",function(){
        $("#School").removeClass("disabled");
        $("#School-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#School-Filter").remove();
        }, 500);
        $(".School").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Slice-of-Life-Filter span",function(){
        $("#Slice-of-Life").removeClass("disabled");
        $("#Slice-of-Life-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Slice-of-Life-Filter").remove();
        }, 500);
        $(".Slice-of-Life").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();

};
});
filter.on("click","#Sports-Filter span",function(){
        $("#Sports").removeClass("disabled");
        $("#Sports-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Sports-Filter").remove();
        }, 500);
        $(".Sports").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Supernatural-Filter span",function(){
        $("#Supernatural").removeClass("disabled");
        $("#Supernatural-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Supernatural-Filter").remove();
        }, 500);
        $(".Supernatural").fadeTo(1000,0.4).removeClass("active");
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
filter.on("click","#Romance-Filter span",function(){
        $("#Romance").removeClass("disabled");
        $("#Romance-Filter").animate({right:"-127%"},'fast');
        setTimeout(function() {
            $("#Romance-Filter").remove();
        }, 500);
        $(".Romance").fadeTo(1000,0.4).removeClass("active");
        (filterops.length);
        if (filterops.length===1) {
            anime.fadeTo(1000,1);
            filter.fadeOut();
        };
});
    $("#Filter-Ops img").click(function(){
        filterops.animate({right:"170%"});
    });
    $(".anime h6 img").click(function(){
        $("#myCarousel, #grey").fadeIn();
        $("#music-player-container").fadeOut();
    });
});