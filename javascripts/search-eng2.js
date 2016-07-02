$(document).ready(function(){
	var animes = ["Boku dake ga Inai Machi","Gakkougurashi","School Live!","Himouto! Omaru-chan!","Death Parade", "Fate/Zero","Fate/stay Night Unlimited Blade Works","Fate/stay Night Heaven's Feel","The Idolm@ster","Ore Monogatari","World god only knows","Kami nomi zo Shiru Sekai","Shigatsu wa Kimi no Uso","Your lie in April","Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai","Mushishi","Jojo's Bizarre Adventure","Jojo's Bizarre Adventure: Stardust Crusaders", "Jojo's Bizarre Adventure: Diamond is Unbreakable", "The Seven Deadly Sins", "Nanatsu no Taizai","Re:Zero kara Hajimaru Isekai Seikatsu","Kabaneri of the Iron Fortress","Boku no Hero Academia","Kiznaiver","Tanaka-kun wa Itsumo Kedaruge","Sayonara Zetsubou-sensei","DEADMAN WONDERLAND","Danganronpa","Tokyo Ghoul","Shinsekai yori","Soul Eater","Noragami","Barakamon","Azumanga Daioh!","Nichijou","Assassination Classroom","Sakamoto desu ga?","Sakurasou no Pet no Kanojo","Hanayamata","Hibike! Euphonium","Plastic Memories","DARKER THAN BLACK"];
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

        if (animesearch === "Boku dake ga Inai Machi") {
            search_error.empty();
            body.animate({
                scrollTop: $("#나만이-없는-거리").offset().top - 100
            },2000);
        }
        if (animesearch === "Amagi Brilliant Park") {
            search_error.empty();
            body.animate({
                scrollTop: $("#아마기-브릴리언트-파크").offset().top - 100
            },2000);
        }
        if (animesearch === "Non Non Biyori") {
            search_error.empty();
            body.animate({
                scrollTop: $("#논논비요리").offset().top - 100
            },2000);
        }
        if (animesearch === "Saenai Heroine no Sodatekata") {
            search_error.empty();
            body.animate({
                scrollTop: $("#시원찮은-그녀를-위한-육성방법").offset().top - 100
            },2000);
        }
        if (animesearch === "Suzumiya Haruhi no Shoushitsu") {
            search_error.empty();
            body.animate({
                scrollTop: $("#스즈미야-하루히의-소실").offset().top - 100
            },2000);
        }
        if (animesearch === "Gakkougurashi" || animesearch === "School Live!") {
            search_error.empty();
            body.animate({
                scrollTop: $("#학교생활").offset().top - 100
            },2000);
        }
        if (animesearch === "Himouto! Omaru-chan!") {
            search_error.empty();
            body.animate({
                scrollTop: $("#건어물-여동생-우마루-짱").offset().top - 100
            },2000);
        }
        if (animesearch === "Death Parade") {
            search_error.empty();
            body.animate({
                scrollTop: $("#데스-퍼레이드").offset().top - 100
            },2000);
        }
        if (animesearch === "Fate/Zero") {
            search_error.empty();
            body.animate({
                scrollTop: $("#페이트-제로").offset().top - 100
            },2000);
        }
        if (animesearch === "Fate/stay Night Unlimited Blade Works") {
            search_error.empty();
            body.animate({
                scrollTop: $("#페이트-스테이-나이트-Unlimited-Blade-Works").offset().top - 100
            },2000);
        }
        if (animesearch === "Fate/stay Night Heaven's Feel") {
            search_error.empty();
            body.animate({
                scrollTop: $("#페이트-스테이-나이트-Heavens-Feel").offset().top - 100
            },2000);
        }
        if (animesearch === "The Idolm@ster") {
            search_error.empty();
            body.animate({
                scrollTop: $("#아이돌-마스터").offset().top - 100
            },2000);
        }
        if (animesearch === "Ore Monogatari") {
            search_error.empty();
            body.animate({
                scrollTop: $("#오레모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "World god only knows" || animesearch === "Kami nomi zo Shiru Sekai") {
            search_error.empty();
            body.animate({
                scrollTop: $("#신만이-아는-세계").offset().top - 100
            },2000);
        }
        if (animesearch === "Shigatsu wa Kimi no Uso" || animesearch === "Your lie in April") {
            search_error.empty();
            body.animate({
                scrollTop: $("#4월은-너의-거짓말").offset().top - 100
            },2000);
        }
        if (animesearch === "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai") {
            search_error.empty();
            body.animate({
                scrollTop: $("#아노하나").offset().top - 100
            },2000);
        }
        if (animesearch === "Mushishi") {
            search_error.empty();
            body.animate({
                scrollTop: $("#충사").offset().top - 100
            },2000);
        }
        if (animesearch === "Jojo's Bizarre Adventure") {
            search_error.empty();
            body.animate({
                scrollTop: $("#죠죠의-기묘한-모험").offset().top - 100
            },2000);
        }
        if (animesearch === "Jojo's Bizarre Adventure: Stardust Crusaders") {
            search_error.empty();
            body.animate({
                scrollTop: $("#죠죠의-기묘한-모험-스타더스트-크루세이더즈").offset().top - 100
            },2000);
        }
        if (animesearch === "Jojo's Bizarre Adventure: Diamond is Unbreakable") {
            search_error.empty();
            body.animate({
                scrollTop: $("#죠죠의-기묘한-모험-다이야몬드는-부서지지-않는다").offset().top - 100
            },2000);
        }
        if (animesearch === "The Seven Deadly Sins" || animesearch === "Nanatsu no Taizai") {
            search_error.empty();
            body.animate({
                scrollTop: $("#7개의-대죄").offset().top - 100
            },2000);
        }
        if (animesearch === "Re:Zero kara Hajimaru Isekai Seikatsu") {
            search_error.empty();
            body.animate({
                scrollTop: $("#Re-제로").offset().top - 100
            },2000);
        }
        if (animesearch === "Kabaneri of the Iron Fortress") {
            search_error.empty();
            body.animate({
                scrollTop: $("#갑철성의-카바네리").offset().top - 100
            },2000);
        }
        if (animesearch === "Boku no Hero Academia") {
            search_error.empty();
            body.animate({
                scrollTop: $("#나의-히어로-아카데미아").offset().top - 100
            },2000);
        }
        if (animesearch === "Kiznaiver") {
            search_error.empty();
            body.animate({
                scrollTop: $("#키즈나이버").offset().top - 100
            },2000);
        }
        if (animesearch === "Tanaka-kun wa Itsumo Kedaruge") {
            search_error.empty();
            body.animate({
                scrollTop: $("#타나카-군은-항상-나른해").offset().top - 100
            },2000);
        }
        if (animesearch === "Sayonara Zetsubou-sensei") {
            search_error.empty();
            body.animate({
                scrollTop: $("#안녕-절망선생").offset().top - 100
            },2000);
        }
        if (animesearch === "DEADMAN WONDERLAND") {
            search_error.empty();
            body.animate({
                scrollTop: $("#DEADMAN-WONDERLAND").offset().top - 100
            },2000);
        }
        if (animesearch === "Danganronpa") {
            search_error.empty();
            body.animate({
                scrollTop: $("#단간론파").offset().top - 100
            },2000);
        }
        if (animesearch === "Tokyo Ghoul") {
            search_error.empty();
            body.animate({
                scrollTop: $("#도쿄구울").offset().top - 100
            },2000);
        }
        if (animesearch === "Shinsekai yori") {
            search_error.empty();
            body.animate({
                scrollTop: $("#신세계에서").offset().top - 100
            },2000);
        }
        if (animesearch === "Soul Eater") {
            search_error.empty();
            body.animate({
                scrollTop: $("#SOUL-EATER").offset().top - 100
            },2000);
        }

        if (animesearch === "Noragami") {
            search_error.empty();
            body.animate({
                scrollTop: $("#노라가미").offset().top - 100
            },2000);
        }
        if (animesearch === "Barakamon") {
            search_error.empty();
            body.animate({
                scrollTop: $("#바라카몬").offset().top - 100
            },2000);
        }
        if (animesearch === "Nichijou") {
            search_error.empty();
            body.animate({
                scrollTop: $("#일상").offset().top - 100
            },2000);
        }
        if (animesearch === "Azumanga Daioh!") {
            search_error.empty();
            body.animate({
                scrollTop: $("#아즈망가-대왕").offset().top - 100
            },2000);
        }
        if (animesearch === "Assassination Classroom") {
            search_error.empty();
            body.animate({
                scrollTop: $("#암살교실").offset().top - 100
            },2000);
        }
        if (animesearch === "Sakamoto desu ga?") {
            search_error.empty();
            body.animate({
                scrollTop: $("#사카모토입니다만").offset().top - 100
            },2000);
        }
        if (animesearch === "Sakurasou no Pet no Kanojo") {
            search_error.empty();
            body.animate({
                scrollTop: $("#사쿠라장의-애완그녀").offset().top - 100
            },2000);
        }
        if (animesearch === "Hanayamata") {
            search_error.empty();
            body.animate({
                scrollTop: $("#하나야마타").offset().top - 100
            },2000);
        }
        if (animesearch === "Hibike! Euphonium") {
            search_error.empty();
            body.animate({
                scrollTop: $("#울려라-유포니엄").offset().top - 100
            },2000);
        }
        if (animesearch === "Plastic Memories") {
            search_error.empty();
            body.animate({
                scrollTop: $("#플라스틱-메모리즈").offset().top - 100
            },2000);
        }
        if (animesearch === "DARKER THAN BLACK") {
            search_error.empty();
            body.animate({
                scrollTop: $("#흑의-계약자").offset().top - 100
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