$(document).ready(function(){
	var animes = ["K-ON!","Kekkai Sensen","FULL METAL ALCHEMIST","Tengen Toppa Gurren Lagann", "Shokugeki no Souma","Nisekoi","Mirai Nikki","Toradora","Mikakunin de Shinkoukei","Kyokai no Kanata","DEATH NOTE","PSYCHO-PASS","GJ Club","Ore no Kanojo to Osananajimi ga Shuraba Sugiru","Haiyore! Nyaruko-san","WORKING!","Hyouka","Nourin","Parasyte","Gekkan Shojo Nozaki-kun","Mekakucity Actors","Non Non Biyori","Amagi Brilliant Park","Saenai Heroine no Sodatekata"];
    var body = $('html, body');
    var search_error = $(".search-error");
    $( "#animesearch" ).autocomplete({
        source: animes,
        minLength: 2
    });
    $("form").submit(function(){
    	var animesearch = $("#animesearch").val();
    	if (animesearch === "") {
    		$("#search-error-no-entry").append("Please enter a title");
    	}
        if (animesearch === "K-ON!") {
            search_error.empty();
            body.animate({
                scrollTop: $("#케이온").offset().top - 100
            },2000);
        }
        if (animesearch === "Kekkai Sensen") {
            search_error.empty();
            body.animate({
                scrollTop: $("#혈계전선").offset().top - 100
            },2000);
        }
        if (animesearch === "FULL METAL ALCHEMIST") {
            search_error.empty();
            body.animate({
                scrollTop: $("#FULL-METAL-ALCHEMIST").offset().top - 100
            },2000);
        }
        if (animesearch === "Tengen Toppa Gurren Lagann") {
            search_error.empty();
            body.animate({
                scrollTop: $("#천원돌파-그렌라간").offset().top - 100
            },2000);
        }
        if (animesearch === "Shokugeki no Souma") {
            search_error.empty();
            body.animate({
                scrollTop: $("#식극의-소마").offset().top - 100
            },2000);
        }
        if (animesearch === "Nisekoi") {
            search_error.empty();
            body.animate({
                scrollTop: $("#니세코이").offset().top - 100
            },2000);
        }
        if (animesearch === "Mirai Nikki") {
            search_error.empty();
            body.animate({
                scrollTop: $("#미래일기").offset().top - 100
            },2000);
        }
        if (animesearch === "Toradora") {
            search_error.empty();
            body.animate({
                scrollTop: $("#토라도라").offset().top - 100
            },2000);
        }
        if (animesearch === "메카쿠시티 엑터즈") {
            search_error.empty();
            body.animate({
                scrollTop: $("#메카쿠시티-엑터즈").offset().top - 100
            },2000);
        }
        if (animesearch === "월간소녀 노자키 군") {
            search_error.empty();
            body.animate({
                scrollTop: $("#월간소녀-노자키-군").offset().top - 100
            },2000);
        }
        if (animesearch === "기생수") {
            search_error.empty();
            body.animate({
                scrollTop: $("#기생수").offset().top - 100
            },2000);
        }
        if (animesearch === "Nourin") {
            search_error.empty();
            body.animate({
                scrollTop: $("#농림").offset().top - 100
            },2000);
        }
        if (animesearch === "Hyouka") {
            search_error.empty();
            body.animate({
                scrollTop: $("#빙과").offset().top - 100
            },2000);
        }
        if (animesearch === "WORKING!") {
            search_error.empty();
            body.animate({
                scrollTop: $("#WORKING").offset().top - 100
            },2000);
        }
        if (animesearch === "Haiyore! Nyaruko-san") {
            search_error.empty();
            body.animate({
                scrollTop: $("#기어와라-냐루코-양").offset().top - 100
            },2000);
        }
        if (animesearch === "Ore no Kanojo to Osananajimi ga Shuraba Sugiru") {
            search_error.empty();
            body.animate({
                scrollTop: $("#내-여자친구와-소꿉친구가-완전-수라장").offset().top - 100
            },2000);
        }
        if (animesearch === "GJ Club") {
            search_error.empty();
            body.animate({
                scrollTop: $("#GJ부").offset().top - 100
            },2000);
        }
        if (animesearch === "PSYCHO-PASS") {
            search_error.empty();
            body.animate({
                scrollTop: $("#PSYCHO-PASS").offset().top - 100
            },2000);
        }
        if (animesearch === "DEATH NOTE") {
            search_error.empty();
            body.animate({
                scrollTop: $("#DEATH-NOTE").offset().top - 100
            },2000);
        }
        if (animesearch === "Kyokai no Kanata") {
            search_error.empty();
            body.animate({
                scrollTop: $("#경계의-저편").offset().top - 100
            },2000);
        }
        if (animesearch === "Mikakunin de Shinkoukei") {
            search_error.empty();
            body.animate({
                scrollTop: $("#미확인으로-진행형").offset().top - 100
            },2000);
        }

        /*if (animesearch === "") {
            search_error.empty();
            body.animate({
                scrollTop: $("#").offset().top - 100
            },2000);
        }*/
    	return false;
    });
});