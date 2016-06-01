$(document).ready(function(){
	var animes = ["스즈미야 하루히의 우울", "아카메가 벤다!", "중2병이라도 사랑이 하고 싶어",
                  "진격의 거인","역시 내 청춘 러브코메디는 잘못됐다", "노 게임 노 라이프", 
                  "모노가타리 시리즈", "원펀맨","마법소녀 마도카 마기카","Steins;Gate",
                  "슈타인즈 게이트", "Another", "어나더", "역경무뢰 카이지","KILL LA KILL",
                  "바케모노가타리","모노가타리 시리즈 세컨드 시즌","키즈모노가타리 철혈 I","니세모노가타리",
                  "츠키모노가타리","키즈모노가타리 열혈 II","네코모노가타리-흑","오와리모노가타리",
                  "코요미모노가타리","K-ON!","케이온","혈계전선","강철의 연금술사",
                  "FULL METAL ALCHEMIST","천원돌파 그렌라간","식극의 소마","니세코이",
                  "미래일기","토라도라","미확인으로 진행형","경계의 저편","DEATH NOTE",
                  "데스노트","PSYCHO-PASS","GJ부","내 여자친구와 소꿉친구가 완전 수라장",
                  "기어와라! 냐루코 양","WORKING!","빙과","농림","기생수","월간소녀 노자키 군",
                  "메카쿠시티 엑터즈","블랙 불릿","SHIRO BAKO","시로바코","나만이 없는 거리",
                  "논논비요리","아마기 브릴리언트 파크","시원찮은 그녀를 위한 육성방법","학교생활!",
                  "건어물 여동생 우마루 짱!","데스 퍼레이드", "Fate/Zero", "Fate/stay night: Unlimited Blade Works",
                  "Fate/stay night: Heaven's Feel", "페이트 제로", "페이트 스테이 나이트: 언리미티드 블레이드 워크스", 
                  "페이트 스테이 나이트: 헤븐스 필","아이돌 마스터","The Idolm@ster",
                  "오레모노가타리","내 이야기!","신만이 아는 세계","4월은 너의 거짓말","아노하나",
                  "우리는 아직도 그 꽃의 이름을 모른다","충사","마시로 땅","스즈미야 하루히의 소실"];
    $( "#animesearch" ).autocomplete({
        source: animes,
        minLength:2,
        position: { my : "right top", at: "right bottom" }
    });
    $("form").submit(function(){
    	var animesearch = $("#animesearch").val();
    	if (animesearch === "") {
    		$("#search-error-no-entry").prepend("Please enter a titl</ul>e");
    	}

    	if (animesearch === "스즈미야 하루히의 우울") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#스즈미야-하루히의-우울").offset().top - 100
    		},500);
    	}

    	if (animesearch === "아카메가 벤다!") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#아카메가-벤다").offset().top - 100
    		},500);
    	}

    	if (animesearch === "중2병이라도 사랑이 하고 싶어") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#중2병이라도-사랑이-하고-싶어").offset().top - 100
    		},500);
    	}

    	if (animesearch === "진격의 거인") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#진격의-거인").offset().top - 100
    		},500);
    	}

    	if (animesearch === "역시 내 청춘 러브코메디는 잘못됐다") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#역시-내-청춘-러브코메디는-잘못됐다").offset().top - 100
    		},500);
    	}

    	if (animesearch === "노 게임 노 라이프") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#노-게임-노-라이프").offset().top - 100
    		},500);
    	}

    	if (animesearch === "모노가타리 시리즈") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#모노가타리-시리즈").offset().top - 100
    		},500);
    	}

    	if (animesearch === "원펀맨") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#원펀맨").offset().top - 100
    		},500);
    	}

    	if (animesearch === "마법소녀 마도카 마기카") {
    		$(".search-error").empty();
    		$('html, body').animate({
    			scrollTop: $("#마법소녀-마도카-마기카").offset().top - 100
    		},500);
    	}

        if (animesearch === "Steins;Gate"||animesearch === "슈타인즈 게이트") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#SteinsGate").offset().top - 100
            },500);
        }

        if (animesearch === "Another"||animesearch === "어나더") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#Another").offset().top - 100
            },500);
        }

        if (animesearch === "역경무뢰 카이지") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#역경무뢰-카이지").offset().top - 100
            },500);
        }

        if (animesearch === "KILL LA KILL") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#KILL-LA-KILL").offset().top - 100
            },500);
        }

        if (animesearch === "모노가타리 시리즈") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#모노가타리-시리즈").offset().top - 100 
            },500);
        }

        if (animesearch === "바케모노가타리") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#바케모노가타리").offset().top - 100
            },500);
        }
        if (animesearch === "모노가타리 시리즈 세컨드 시즌") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#모노가타리-시리즈-2nd-Season").offset().top - 100
            },500);
        }
        if (animesearch === "키즈모노가타리 철혈 I") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#키즈모노가타리-철혈").offset().top - 100
            },500);
        }
        if (animesearch === "니세모노가타리") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#니세모노가타리").offset().top - 100
            },500);
        }
        if (animesearch === "츠키모노가타리") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#츠키모노가타리").offset().top - 100
            },500);
        }
        if (animesearch === "키즈모노가타리 열혈 II") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#키즈모노가타리-열혈").offset().top - 100
            },500);
        }
        if (animesearch === "네코모노가타리-흑") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#네코모노가타리-흑").offset().top - 100
            },500);
        }
        if (animesearch === "오와리모노가타리") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#오와리모노가타리").offset().top - 100
            },500);
        }
        if (animesearch === "코요미모노가타리") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#코요미모노가타리").offset().top - 100
            },500);
        }
        if (animesearch === "케이온" || animesearch === "K-ON!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#케이온").offset().top - 100
            },500);
        }
        if (animesearch === "혈계전선") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#혈계전선").offset().top - 100
            },500);
        }
        if (animesearch === "FULL METAL ALCHEMIST"|| animesearch === "강철의 연금술사") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#FULL-METAL-ALCHEMIST").offset().top - 100
            },500);
        }
        if (animesearch === "천원돌파 그렌라간") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#천원돌파-그렌라간").offset().top - 100
            },500);
        }
        if (animesearch === "식극의 소마") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#식극의-소마").offset().top - 100
            },500);
        }
        if (animesearch === "니세코이") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#니세코이").offset().top - 100
            },500);
        }
        if (animesearch === "미래일기") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#미래일기").offset().top - 100
            },500);
        }
        if (animesearch === "토라도라") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#토라도라").offset().top - 100
            },500);
        }
        if (animesearch === "메카쿠시티 엑터즈") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#메카쿠시티-엑터즈").offset().top - 100
            },500);
        }
        if (animesearch === "월간소녀 노자키 군") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#월간소녀-노자키-군").offset().top - 100
            },500);
        }
        if (animesearch === "기생수") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#기생수").offset().top - 100
            },500);
        }
        if (animesearch === "농림") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#농림").offset().top - 100
            },500);
        }
        if (animesearch === "빙과") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#빙과").offset().top - 100
            },500);
        }
        if (animesearch === "WORKING!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#WORKING").offset().top - 100
            },500);
        }
        if (animesearch === "기어와라! 냐루코 양") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#기어와라-냐루코-양").offset().top - 100
            },500);
        }
        if (animesearch === "내 여자친구와 소꿉친구가 완전 수라장") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#내-여자친구와-소꿉친구가-완전-수라장").offset().top - 100
            },500);
        }
        if (animesearch === "GJ부") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#GJ부").offset().top - 100
            },500);
        }
        if (animesearch === "PSYCHO-PASS") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#PSYCHO-PASS").offset().top - 100
            },500);
        }
        if (animesearch === "DEATH NOTE"||animesearch === "데스노트") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#DEATH-NOTE").offset().top - 100
            },500);
        }
        if (animesearch === "경계의 저편") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#경계의-저편").offset().top - 100
            },500);
        }
        if (animesearch === "미확인으로 진행형") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#미확인으로-진행형").offset().top - 100
            },500);
        }
        if (animesearch === "블랙 불릿") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#블랙-불릿").offset().top - 100
            },500);
        }
        if (animesearch === "SHIRO BAKO"||animesearch === "시로바코") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#SHIRO-BAKO").offset().top - 100
            },500);
        }
        if (animesearch === "나만이 없는 거리") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#나만이-없는-거리").offset().top - 100
            },500);
        }
        if (animesearch === "아마기 브릴리언트 파크") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#아마기-브릴리언트-파크").offset().top - 100
            },500);
        }
        if (animesearch === "논논비요리") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#논논비요리").offset().top - 100
            },500);
        }
        if (animesearch === "시원찮은 그녀를 위한 육성방법") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#시원찮은-그녀를-위한-육성방법").offset().top - 100
            },500);
        }
        if (animesearch === "학교생활!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#학교생활").offset().top - 100
            },500);
        }
        if (animesearch === "건어물 여동생 우마루 짱!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#건어물 여동생 우마루 짱").offset().top - 100
            },500);
        }
        if (animesearch === "데스 퍼레이드") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#데스-퍼레이드").offset().top - 100
            },500);
        }
        if (animesearch === "Fate/Zero" || animesearch === "페이트 제로") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#페이트-제로").offset().top - 100
            },500);
        }
        if (animesearch === "Fate/stay night: Unlimited Blade Works" || animesearch === "페이트 스테이 나이트: 언리미티드 블레이드 워크스") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#페이트-스테이-나이트-Unlimited-Blade-Works").offset().top - 100
            },500);
        }
        if (animesearch === "Fate/stay night: Heaven's Feel" || animesearch === "페이트 스테이 나이트: 헤븐스 필") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#페이트-스테이-나이트-Heavens-Feel").offset().top - 100
            },500);
        }
        if (animesearch === "The Idolm@ster"||animesearch==="아이돌 마스터") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#아이돌-마스터").offset().top - 100
            },500);
        }
        if (animesearch === "오레모노가타리" || animesearch === "내 이야기!") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#오레모노가타리").offset().top - 100
            },500);
        }
        if (animesearch === "신만이 아는 세계") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#신만이-아는-세계").offset().top - 100
            },500);
        }
        if (animesearch === "4월은 너의 거짓말") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#4월은-너의-거짓말").offset().top - 100
            },500);
        }
        if (animesearch === "아노하나" || animesearch === "우리는 아직도 그 꽃의 이름을 모른다") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#아노하나").offset().top - 100
            },500);
        }
        if (animesearch === "충사") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#충사").offset().top - 100
            },500);
        }
        if (animesearch === "스즈미야 하루히의 소실") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#스즈미야-하루히의-소실").offset().top - 100
            },500);
        }
        /*if (animesearch === "마시로 땅") {
            inner.empty();
            indicators.empty();
            inner.html("<div class=\"item active thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/11.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/12.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/13.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/14.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/15.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/16.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/17.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/18.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/19.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/20.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/21.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/22.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/23.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/24.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/25.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/26.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/27.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/28.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/29.gif\"></div><div class=\"item thumbnail\"><img src=\"Gallery-Images/미확인으로-진행형/30.gif\"></div>");
            indicators.html("<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#myCarousel\" data-slide-to=\"1\"></li><li data-target=\"#myCarousel\" data-slide-to=\"2\"></li><li data-target=\"#myCarousel\" data-slide-to=\"3\"></li><li data-target=\"#myCarousel\" data-slide-to=\"4\"></li><li data-target=\"#myCarousel\" data-slide-to=\"5\"></li><li data-target=\"#myCarousel\" data-slide-to=\"6\"></li><li data-target=\"#myCarousel\" data-slide-to=\"7\"></li><li data-target=\"#myCarousel\" data-slide-to=\"8\"></li><li data-target=\"#myCarousel\" data-slide-to=\"9\"></li><li data-target=\"#myCarousel\" data-slide-to=\"10\"></li><li data-target=\"#myCarousel\" data-slide-to=\"11\"></li><li data-target=\"#myCarousel\" data-slide-to=\"12\"></li><li data-target=\"#myCarousel\" data-slide-to=\"13\"></li><li data-target=\"#myCarousel\" data-slide-to=\"14\"></li><li data-target=\"#myCarousel\" data-slide-to=\"15\"></li><li data-target=\"#myCarousel\" data-slide-to=\"16\"></li><li data-target=\"#myCarousel\" data-slide-to=\"17\"></li><li data-target=\"#myCarousel\" data-slide-to=\"18\"></li><li data-target=\"#myCarousel\" data-slide-to=\"19\"></li>");
            $("#myCarousel").fadeIn();
        }*/
        /*if (animesearch === "") {
            $(".search-error").empty();
            $('html, body').animate({
                scrollTop: $("#").offset().top - 100
            },500);
        }*/
    	return false;
    });
});