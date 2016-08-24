$(document).ready(function(){
	var animes = ["Suzumiya Haruhi no Yuuutsu", "Akame ga kill!", "Chuunibyou demo koi ga shitai", "Attack on Titan", "Yahari Ore no Seishun Love Comedy wa Machigatteiru", "No Game No Life", "Monogatari Series", "ONE PUNCH MAN","Puella Magi Madoka Magica","Steins;Gate", "Another", "Gyakkyou Burai Kaiji: Ultimate Survivor","KILL LA KILL","Bakemonogatari","Monogatari Second Season","Kizumonogatari I: Tekketsu","Nisemonogatari","Tsukimonogatari","Kizumonogatari II: Nekketsu","Nekomonogatari-Kuro","Owarimonogatari","Koyomimonogatari","K-ON!","Kekkai Sensen","FULL METAL ALCHEMIST","Tengen Toppa Gurren Lagann", "Shokugeki no Souma","Nisekoi","Mirai Nikki","Toradora","Mikakunin de Shinkoukei","Kyokai no Kanata","DEATH NOTE","PSYCHO-PASS","GJ Club","Ore no Kanojo to Osananajimi ga Shuraba Sugiru","Haiyore! Nyaruko-san","WORKING!","Hyouka","Nourin","Parasyte","Gekkan Shojo Nozaki-kun","Mekakucity Actors","Black Bullet","SHIRO BAKO","Boku dake ga Inai Machi","Non Non Biyori","Amagi Brilliant Park","Saenai Heroine no Sodatekata","Suzumiya Haruhi no Shoushitsu","Gakkougurashi","School Live!","Himouto! Omaru-chan!","Death Parade", "Fate/Zero","Fate/stay Night Unlimited Blade Works","Fate/stay Night Heaven's Feel","The Idolm@ster","Ore Monogatari","World god only knows","Kami nomi zo Shiru Sekai","Shigatsu wa Kimi no Uso","Your lie in April","Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai","Mushishi","Jojo's Bizarre Adventure","Jojo's Bizarre Adventure: Stardust Crusaders", "Jojo's Bizarre Adventure: Diamond is Unbreakable", "The Seven Deadly Sins", "Nanatsu no Taizai","Re:Zero kara Hajimaru Isekai Seikatsu","Kabaneri of the Iron Fortress","Boku no Hero Academia","Kiznaiver","Tanaka-kun wa Itsumo Kedaruge","Sayonara Zetsubou-sensei","DEADMAN WONDERLAND","Danganronpa","Tokyo Ghoul","Shinsekai yori","Soul Eater","Noragami","Barakamon","Azumanga Daioh!","Nichijou","Assassination Classroom","Sakamoto desu ga?","Sakurasou no Pet no Kanojo","Hanayamata","Hibike! Euphonium","Plastic Memories","DARKER THAN BLACK"];
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

    	if (animesearch === "Suzumiya Haruhi no Yuuutsu") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#스즈미야-하루히의-우울").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Akame ga kill!") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#아카메가-벤다").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Chuunibyou demo koi ga shitai") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#중2병이라도-사랑이-하고-싶어").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Attack on Titan") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#진격의-거인").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Yahari Ore no Seishun Love Comedy wa Machigatteiru") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#역시-내-청춘-러브코메디는-잘못됐다").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "No Game No Life") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#노-Game-노-라이프").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Monogatari Series") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#모노가타리-시리즈").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "ONE PUNCH MAN") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#원펀맨").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Puella Magi Madoka Magica") {
    		search_error.empty();
    		body.animate({
    			scrollTop: $("#마법소녀-마도카-마기카").offset().top - 100
    		},2000);
    	}

        if (animesearch === "Steins;Gate") {
            search_error.empty();
            body.animate({
                scrollTop: $("#SteinsGate").offset().top - 100
            },2000);
        }

        if (animesearch === "Another") {
            search_error.empty();
            body.animate({
                scrollTop: $("#Another").offset().top - 100
            },2000);
        }

        if (animesearch === "Gyakkyou Burai Kaiji: Ultimate Survivor") {
            search_error.empty();
            body.animate({
                scrollTop: $("#역경무뢰-카이지").offset().top - 100
            },2000);
        }
        
        if (animesearch === "KILL LA KILL") {
            search_error.empty();
            body.animate({
                scrollTop: $("#KILL-LA-KILL").offset().top - 100
            },2000);
        }

        if (animesearch === "Bakemonogatari") {
            search_error.empty();
            body.animate({
                scrollTop: $("#바케모노가타리").offset().top - 100
            },2000);
        }

        if (animesearch === "Monogatari Second Season") {
            search_error.empty();
            body.animate({
                scrollTop: $("#모노가타리-시리즈-2nd-Season").offset().top - 100
            },2000);
        }
        if (animesearch === "Kizumonogatari I: Tekketsu") {
            search_error.empty();
            body.animate({
                scrollTop: $("#키즈모노가타리-철혈").offset().top - 100
            },2000);
        }
        if (animesearch === "Nisemonogatari") {
            search_error.empty();
            body.animate({
                scrollTop: $("#니세모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "Tsukimonogatari") {
            search_error.empty();
            body.animate({
                scrollTop: $("#츠키모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "Kizumonogatari II: Nekketsu") {
            search_error.empty();
            body.animate({
                scrollTop: $("#키즈모노가타리-열혈").offset().top - 100
            },2000);
        }
        if (animesearch === "Nekomonogatari-Kuro") {
            search_error.empty();
            body.animate({
                scrollTop: $("#네코모노가타리-흑").offset().top - 100
            },2000);
        }
        if (animesearch === "Owarimonogatari") {
            search_error.empty();
            body.animate({
                scrollTop: $("#오와리모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "Koyomimonogatari") {
            search_error.empty();
            body.animate({
                scrollTop: $("코묘이모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "Suzumiya Haruhi no Shoushitsu") {
            search_error.empty();
            body.animate({
                scrollTop: $("#스즈미야-하루히의-소실").offset().top - 100
            },2000);
        }
        if (animesearch === "Black Bullet") {
            search_error.empty();
            body.animate({
                scrollTop: $("#블랙-불릿").offset().top - 100
            },2000);
        }
        if (animesearch === "SHIRO BAKO") {
            search_error.empty();
            body.animate({
                scrollTop: $("#SHIRO-BAKO").offset().top - 100
            },2000);
        }
    	return false;
    });
});