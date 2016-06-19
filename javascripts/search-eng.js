$(document).ready(function(){
	var animes = ["Suzumiya Haruhi no Yuuutsu", "Akame ga kill!", "Chuunibyou demo koi ga shitai", "Attack on Titan", "Yahari Ore no Seishun Love Comedy wa Machigatteiru", "No Game No Life", "Monogatari Series", "ONE PUNCH MAN","Puella Magi Madoka Magica","Steins;Gate", "Another", "Gyakkyou Burai Kaiji: Ultimate Survivor","KILL LA KILL","Bakemonogatari","Monogatari Second Season","Kizumonogatari I: Tekketsu","Nisemonogatari","Tsukimonogatari","Kizumonogatari II: Nekketsu","Nekomonogatari-Kuro","Owarimonogatari","Koyomimonogatari","K-ON!","Kekkai Sensen","FULL METAL ALCHEMIST","Tengen Toppa Gurren Lagann", "Shokugeki no Souma","Nisekoi","Mirai Nikki","Toradora","Mikakunin de Shinkoukei","Kyokai no Kanata","DEATH NOTE","PSYCHO-PASS","GJ Club","Ore no Kanojo to Osananajimi ga Shuraba Sugiru","Haiyore! Nyaruko-san","WORKING!","Hyouka","Nourin","Parasyte","Gekkan Shojo Nozaki-kun","Mekakucity Actors","Black Bullet","SHIRO BAKO","Boku dake ga Inai Machi","Non Non Biyori","Amagi Brilliant Park","Saenai Heroine no Sodatekata","Suzumiya Haruhi no Shoushitsu","Gakkougurashi","School Live!","Himouto! Omaru-chan!","Death Parade", "Fate/Zero","Fate/stay Night Unlimited Blade Works","Fate/stay Night Heaven's Feel","The Idolm@ster","Ore Monogatari","World god only knows","Kami nomi zo Shiru Sekai","Shigatsu wa Kimi no Uso","Your lie in April","Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai","Mushishi"];
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
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#스즈미야-하루히의-우울").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Akame ga kill!") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#아카메가-벤다").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Chuunibyou demo koi ga shitai") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#중2병이라도-사랑이-하고-싶어").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Attack on Titan") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#진격의-거인").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Yahari Ore no Seishun Love Comedy wa Machigatteiru") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#역시-내-청춘-러브코메디는-잘못됐다").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "No Game No Life") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#노-Game-노-라이프").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Monogatari Series") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#모노가타리-시리즈").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "ONE PUNCH MAN") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#원펀맨").offset().top - 100
    		},2000);
    	}

    	if (animesearch === "Puella Magi Madoka Magica") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#마법소녀-마도카-마기카").offset().top - 100
    		},2000);
    	}

        if (animesearch === "Steins;Gate") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#SteinsGate").offset().top - 100
            },2000);
        }

        if (animesearch === "Another") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#Another").offset().top - 100
            },2000);
        }

        if (animesearch === "Gyakkyou Burai Kaiji: Ultimate Survivor") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#역경무뢰-카이지").offset().top - 100
            },2000);
        }
        
        if (animesearch === "KILL LA KILL") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#KILL-LA-KILL").offset().top - 100
            },2000);
        }

        if (animesearch === "Bakemonogatari") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#바케모노가타리").offset().top - 100
            },2000);
        }

        if (animesearch === "Monogatari Second Season") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#모노가타리-시리즈-2nd-Season").offset().top - 100
            },2000);
        }
        if (animesearch === "Kizumonogatari I: Tekketsu") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#키즈모노가타리-철혈").offset().top - 100
            },2000);
        }
        if (animesearch === "Nisemonogatari") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#니세모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "Tsukimonogatari") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#츠키모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "Kizumonogatari II: Nekketsu") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#키즈모노가타리-열혈").offset().top - 100
            },2000);
        }
        if (animesearch === "Nekomonogatari-Kuro") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#네코모노가타리-흑").offset().top - 100
            },2000);
        }
        if (animesearch === "Owarimonogatari") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#오와리모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "Koyomimonogatari") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("코묘이모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "K-ON!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#케이온").offset().top - 100
            },2000);
        }
        if (animesearch === "Kekkai Sensen") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#혈계전선").offset().top - 100
            },2000);
        }
        if (animesearch === "FULL METAL ALCHEMIST") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#FULL-METAL-ALCHEMIST").offset().top - 100
            },2000);
        }
        if (animesearch === "Tengen Toppa Gurren Lagann") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#천원돌파-그렌라간").offset().top - 100
            },2000);
        }
        if (animesearch === "Shokugeki no Souma") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#식극의-소마").offset().top - 100
            },2000);
        }
        if (animesearch === "Nisekoi") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#니세코이").offset().top - 100
            },2000);
        }
        if (animesearch === "Mirai Nikki") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#미래일기").offset().top - 100
            },2000);
        }
        if (animesearch === "Toradora") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#토라도라").offset().top - 100
            },2000);
        }
        if (animesearch === "메카쿠시티 엑터즈") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#메카쿠시티-엑터즈").offset().top - 100
            },2000);
        }
        if (animesearch === "월간소녀 노자키 군") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#월간소녀-노자키-군").offset().top - 100
            },2000);
        }
        if (animesearch === "기생수") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#기생수").offset().top - 100
            },2000);
        }
        if (animesearch === "Nourin") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#농림").offset().top - 100
            },2000);
        }
        if (animesearch === "Hyouka") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#빙과").offset().top - 100
            },2000);
        }
        if (animesearch === "WORKING!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#WORKING").offset().top - 100
            },2000);
        }
        if (animesearch === "Haiyore! Nyaruko-san") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#기어와라-냐루코-양").offset().top - 100
            },2000);
        }
        if (animesearch === "Ore no Kanojo to Osananajimi ga Shuraba Sugiru") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#내-여자친구와-소꿉친구가-완전-수라장").offset().top - 100
            },2000);
        }
        if (animesearch === "GJ Club") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#GJ부").offset().top - 100
            },2000);
        }
        if (animesearch === "PSYCHO-PASS") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#PSYCHO-PASS").offset().top - 100
            },2000);
        }
        if (animesearch === "DEATH NOTE") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#DEATH-NOTE").offset().top - 100
            },2000);
        }
        if (animesearch === "Kyokai no Kanata") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#경계의-저편").offset().top - 100
            },2000);
        }
        if (animesearch === "Mikakunin de Shinkoukei") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#미확인으로-진행형").offset().top - 100
            },2000);
        }
        if (animesearch === "Black Bullet") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#블랙-불릿").offset().top - 100
            },2000);
        }
        if (animesearch === "SHIRO BAKO") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#SHIRO-BAKO").offset().top - 100
            },2000);
        }
        if (animesearch === "Boku dake ga Inai Machi") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#나만이-없는-거리").offset().top - 100
            },2000);
        }
        if (animesearch === "Amagi Brilliant Park") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#아마기-브릴리언트-파크").offset().top - 100
            },2000);
        }
        if (animesearch === "Non Non Biyori") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#논논비요리").offset().top - 100
            },2000);
        }
        if (animesearch === "Saenai Heroine no Sodatekata") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#시원찮은-그녀를-위한-육성방법").offset().top - 100
            },2000);
        }
        if (animesearch === "Suzumiya Haruhi no Shoushitsu") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#스즈미야-하루히의-소실").offset().top - 100
            },2000);
        }
        if (animesearch === "Gakkougurashi" || animesearch === "School Live!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#학교생활").offset().top - 100
            },2000);
        }
        if (animesearch === "Himouto! Omaru-chan!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#건어물-여동생-우마루-짱").offset().top - 100
            },2000);
        }
        if (animesearch === "Death Parade") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#데스-퍼레이드").offset().top - 100
            },2000);
        }
        if (animesearch === "Fate/Zero") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#페이트-제로").offset().top - 100
            },2000);
        }
        if (animesearch === "Fate/stay Night Unlimited Blade Works") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#페이트-스테이-나이트-Unlimited-Blade-Works").offset().top - 100
            },2000);
        }
        if (animesearch === "Fate/stay Night Heaven's Feel") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#페이트-스테이-나이트-Heavens-Feel").offset().top - 100
            },2000);
        }
        if (animesearch === "The Idolm@ster") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#아이돌-마스터").offset().top - 100
            },2000);
        }
        if (animesearch === "Ore Monogatari") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#오레모노가타리").offset().top - 100
            },2000);
        }
        if (animesearch === "World god only knows" || animesearch === "Kami nomi zo Shiru Sekai") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#신만이-아는-세계").offset().top - 100
            },2000);
        }
        if (animesearch === "Shigatsu wa Kimi no Uso" || animesearch === "Your lie in April") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#4월은-너의-거짓말").offset().top - 100
            },2000);
        }
        if (animesearch === "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#아노하나").offset().top - 100
            },2000);
        }
        if (animesearch === "Mushishi") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#충사").offset().top - 100
            },2000);
        }
        /*if (animesearch === "") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#").offset().top - 100
            },2000);
        }*/
    	return false;
    });
});