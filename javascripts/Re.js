$(document).ready(function(){
    var infodisplay = $("#info-display");
    var synopsis = $("#synopsis");
    var bh3 = $("#blueimp-gallery h3");
	$("#Re").click(function(){
        $("#home").fadeIn().delay(700).fadeOut();
        $(".Re-Ops").fadeIn();
        $(".close").show();
    });
    $(".close").click(function(){
        $(".Re-Ops").fadeIn();
        infodisplay.fadeOut();
    });
    $("#best").click(function(){
        $("#BestofAnime").fadeIn().delay(700).fadeOut();
        setTimeout(function(){
            var gallery = blueimp.Gallery([
            {title:"FULLMETAL ALCHEMIST BROTHERHOOD", href:'background/1.jpg',type: 'image/jpeg'},
            {title:"ONE PIECE",href:"background/9.jpg",type:"image/jpeg"},
            {title:"Steins;Gate", href:'background/2.jpg',type: 'image/jpeg'},
            {title:"HUNTER X HUNTER", href:'background/3.jpg',type: 'image/jpeg'},
            {title:"CLANNAD AFTER STORY", href:'background/4.jpg',type: 'image/jpeg'},
            {title:"센과 치히로의 행방불명", href:'background/5.jpg',type: 'image/jpeg'},
            {title:"4월은 너의 거짓말", href:'Gallery-Images/4월은-너의-거짓말/7.jpg',type: 'image/jpeg'},
            {title:"스즈미야 하루히의 소실", href:'img/스즈미야-하루히의-소실.jpg',type: 'image/jpeg'},
            {title:"모노가타리 시리즈", href:'Gallery-Images/모노가타리-시리즈/1.png',type: 'image/jpeg'},
            {title:"충사", href:'Gallery-Images/충사/5.jpg',type: 'image/jpeg'},
            {title:"마법소녀 마도카 마기카", href:'Gallery-Images/마법소녀-마도카-마기카/s.jpg',type: 'image/jpeg'},
            {title:"나만이 없는 거리", href:'background/6.jpg',type: 'image/jpeg'},
            {title:"우리는 아직도 그 꽃의 이름을 모른다", href:'background/7.jpg',type: 'image/jpeg'},
            {title:"Code Geass", href:'Gallery-Images/코드-기아스/1.jpg',type: 'image/jpeg'},
            {title:"ONE PUNCH MAN", href:'Gallery-Images/원펀맨/1.jpg',type: 'image/jpeg'},
            {title:"MONSTER", href:'Gallery-Images/MONSTER/1.jpg',type: 'image/jpeg'},
            {title:"Cowboy Bebap", href:'Gallery-Images/카우보이-비밥/3.jpg',type: 'image/jpeg'},
            {title:"천원돌파 그렌라간", href:'Gallery-Images/그렌라간/5.jpg',type: 'image/jpeg'},
            {title:"Fate/Zero", href:'Gallery-Images/FateZero/3.jpg',type: 'image/jpeg'},
            {title:"하이큐!!!", href:'Gallery-Images/하이큐/2.jpg',type: 'image/jpeg'}
        ]);
        $("#myCarousel").fadeIn();
        },750);
        $(".Re-Ops").fadeOut();
    });
    $("#Genre").click(function(){
        $("#RebyGenre").fadeIn().delay(700).fadeOut();
        setTimeout(function(){
            var gallery = blueimp.Gallery([
                
            ]);
        });
    });
    $("#Theme").click(function(){
        $("#RebyTheme").fadeIn().delay(700).fadeOut();
        setTimeout(function(){
            var gallery = blueimp.Gallery([
            {title:'청춘',href:'Gallery-Images/Oregairu/13.png',type:'image/png'},
            {title:'재능과 노력',href:'Gallery-Images/사쿠라장의-애완그녀/1.jpg',type:'image/jpeg'},
            {title:'꿈과 현실',href:'Gallery-Images/바쿠만/1.jpg',type:'image/jpeg'},
            {title:'시골',href:'Gallery-Images/논논비요리/6.png',type:'image/png'},
            {title:'시간',href:'Gallery-Images/Steins;Gate/2.png',type:'image/jpeg'},
            {title:'일상≠평범',href:'Gallery-Images/일상/1.jpg',type:'image/jpeg'},
            {title:'멋진 신세계',href:'Gallery-Images/PSYCHO-PASS/4.jpg',type:'image/jpeg'},
            {title:'인간의 욕망',href:'Gallery-Images/카이지/2.jpg',type:'image/jpeg'},
            {title:'죽음',href:'Gallery-Images/데스-퍼레이드/1.png',type:'image/png'},
            {title:'이상',href:'Gallery-Images/DEATH-NOTE/2.jpg',type:'image/jpeg'},
            {title:'각성',href:'Gallery-Images/도쿄구울/1.jpg',type:'image/jpeg'},
            {title:'반전',href:'Gallery-Images/Another/3.jpg',type:'image/jpeg'},
            {title:'농구',href:'Gallery-Images/슬램덩크/1.jpg',type:'image/jpeg'},
            {title:'살인 게임',href:'Gallery-Images/미래일기/2.jpg',type:'image/jpeg'},
            {title:'음식',href:'img/식극의 소마.jpg',type:'image/jpeg'}
        ]);
        $("#myCarousel").fadeIn();
        },750);
        $(".Re-Ops").fadeOut();
    });
    $("#Season").click(function(){
        $("#RebySeason").fadeIn().delay(700).fadeOut();
    });
    $("#ThemeAnime-1 span.glyphicon").click(function(){
        $("#ThemeAnime-1").animate({left:"100%"});
    });
    bh3.on('click',function(){
        $("#ThemeAnime-1").fadeIn().css("left", "100%");
    });
    bh3.on('click',function(){
        if($(this).text()==="청춘") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("역시 내 청춘 러브코메디는 잘못됐다.");
            $("#menu1 div img").attr("src","title-image/역시-내-청춘-러브코메디는-잘못됐다.jpg");
            $("#menu1 p").html("시니컬한 남고생과 독설로 무장한 미소녀가 펼치는 청춘 러브코메디 \"역시 내 청춘 러브코메디는 잘못됐다.\" 고독에 굴하지 않고, 친구도 없이, 애인도 없이. 청춘을 구가하는 동급생들을 보면 '저놈들은 거짓말쟁이다. 기만이다. 뒈져버려라'라고 중얼거리고, 장래희망을 물으면 '일하지 않는 것'이라고 천연덕스럽게 대꾸하는 삐뚤어진 고교생 하치만. 그가 생활 지도 교사에게 붙들려간 곳은 교내 제일의 미소녀 유키노가 소속된 봉사부. 이건 아무리 봐도 러브코메디의 시작인 줄만 알았지만, 유키노와 하치만의 유감스러운 성격이 그러한 전개를 용납하지 않는데...  ");
            $("#tab2").text("빙과");
            $("#menu2 div img").attr("src","title-image/빙과.jpg");
            $("#menu2 p").html("\"고교 생활 하면 장밋빛, 장밋빛 하면 고교 생활. 이렇게 호응 관계가 성립된다. 서기 2000년, 현재는 아직 이루어지지 않았지만 국어사전에 등재될 날도 머지않았다. 그러나 그렇다고 모든 고등학생이 장밋빛을 희망한다는 뜻은 아니다. 예컨대 공부도, 스포츠도, 연애도, 좌우지간 온갖 활력과 활동에 관심을 보이지 않고 회색을 선호하는 인간도 있거니와, 심지어 내가 아는 범위 내에서조차 그런 인간은 적지 않다. </br> 하지만 그거, 꽤나 쓸쓸한 인생이다.\" </br> -오레키 호타로, 빙과 ");
        },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="재능과 노력") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("사쿠라장의 애완그녀");
            $("#menu1 div img").attr("src","title-image/사쿠라장의-애완그녀.png");
            $("#menu1 p").html("변태와 천재와 평범한 사람들이 만들어내는 청춘학원 러브 코미디! 내가 사는 기숙사 '사쿠라장'은 학원 괴짜들의 집단. 이런 기숙사에 전학 오자마자 들어온 시이나 마시로는 귀엽고 청초한데다 세계적으로 유명한 천재화가라고 한다. 천재 미소녀를 기숙사 괴짜들로부터 지켜내야 돼! 라고 분발했지만, 다음날 무시무시한 사실이 발각되는데... ");
            $("#tab2").text("나의 히어로 아카데미야");
            $("#menu2 div img").attr("src","title-image/나의-히어로-아카데미야.jpg");
            $("#menu2 p").html("'개성'이라는 초능력을 갖고 태어나는 게 당연한 세계가 무대로, 현재 인류 8할이 개성을 소유하고 있다. 과거 만화에서나 나오던 히어로라는 직업이 각광받게 되고 주인공 미도리야 이즈쿠도 히어로를 동경하고 있다. 하지만 무개성인 이즈쿠는 히어로가 될 수 없었고, 주변에서도 포기하란 말만 듣는다. 그러던 어느 날, 주변에 빌런을 튀치하고 다니던 동경하는 현 No.1 히어로 올마이트와 만나게 되면서 이즈쿠의 운명을 변하기 시작한다. ");        
        },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="꿈과 현실") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("바쿠만");
            $("#menu1 div img").attr("src","title-image/바쿠만.jpg");
            $("#menu1 p").html("만화가로서 존경했던 삼촌의 불행한 말로를 본 이후 마시로 모리타카는 자신의 꿈을 포기하고 만화가로의 꿈을 접는다. 그런 그에게 전교 1등 타카기 아키토는 마시로의 재능을 알아보고 자신은 스토리를 그는 그림으로 함께 만화를 만들자고 재안한다. 만화계의 현실과 꿈 사이에서 갈등하면서 선택을 주저하는 마시로를 아키토가 끌고 간 곳은 마시로의 짝사랑 아즈키의 집이였는데... 지금 두 소년의 만화가를 향한 고난한 여정이 시작된다. <span id=\"BAKUMAN-R");
            $("#tab2").text("시로바코");
            $("#menu2 div img").attr("src","title-image/SHIRO-BAKO.jpg");
            $("#menu2 p").html("서투르지만 함께 즐겁게 애니메이션을 만들었던 애니메이션 동호회 회원 미야모리 아오이는 졸업 후에도 반드시 애니메이션 관련 진로로 나아가 언젠가 다시금 부원 다섯 명이서 함께 애니메이션을 만들 것을 각자의 도넛에 걸고 맹세한다. 그로부터 2년 반이 흐른 현재, 애니메이션 동호회를 이끌던 아오이는 애니메이션 제작사 '무사시노 애니메이션'에 입사하여 이제 막 1년 차가 된 신참 제작진행으로 근무하고 있었다. 오늘 밤은 아오이도 참여한 자사 제작 애니메이션 '엑소더스!' 제1화의 방영일로 1쿨 13화 낙장불입의 승부가 이제 막 시작되었음을 예고하는 것이었으니.. <span id=\"SHIROBAKO-R");
        },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="시골") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("논논비요리");
            $("#menu1 div img").attr("src","title-image/논논비요리.jpg");
            $("#menu1 p").html("부모님의 사정으로 인하여 도쿄에서 한 시골 마을로 이사오게된 초등학생 이치죠 호타루. 초등학생들과 중학생들을 합해 전교생이 5명뿐이어서 전교생이 모두 같은 반에서 수업을 하는 아사히가오카 분교에서 코시가야 남매와 미야우치 자매를 만난 호타루는 하루 하루를 즐겁게 보내는 호타루의 행복한 시골 라이프가 시작된다. ");
            $("#tab2").text("바라카몬");
            $("#menu2 div img").attr("src","title-image/바라카몬.jpg");
            $("#menu2 p").html(" 문제를 일으켜 일본의 가장 서쪽 끝 섬에서 살게 된 젊은 꽃미남 츤데레 서예가 한다 세이슈와 시골 사람들과 아이들 사이에 일어나는 좌충우돌 아일랜드 치유 코미디  ");
            $("#tab3").text("농림");
            $("#menu3 div img").attr("src","title-image/농림.png");
            $("#menu3 p").html("기재(奇才)·시라토리 시로가 보내드리는 농업학교 러브코미디. 시끄러워! 줄거리 정도는 조용하게 말해게 해달라고!! 아아, 어흠. 내 이름은 하타 코사쿠. 이곳에 다니는 아이돌 오타쿠 고등학생이다. 이런 내가 다니고 있는 학교에 전학 온 사람은, 내가 동경하는 초 인기 아이돌 쿠사카베 유카땅……?! 사투리 소꿉친구, 안경 미소년, 러블리 애완동물, 거유 소녀! 망상계 여교사! 팬티! 다리 페티시즘 환자! 그리고, 수수께끼의 전학생…… 이곳에는 청춘의 모든 것이 있다.   ");
            },500);
        };
    });

    bh3.on('click',function(){
        if($(this).text()==="시간") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("Steins;Gate");
            $("#menu1 div img").attr("src","title-image/Steins;Gate.jpg");
            $("#menu1 p").html("자칭 매드 사이언티스트 호오인 쿄우마인 중2병 대학생 오카베 린타로는 아키하바라에서 소꿉친구인 시이나 마유리와 슈퍼 해커 하시다 이타루와 미래 가제트 연구소의 No.001으로 엉뚱한 발명품만 만들면서 살던 그에게 천재 물리학자 마키세 크리스와의 만남 그리고 시간을 뛰어넘어 문자를 보낼 수 있는 D-메일의 우연한 발명으로 그의 세계는 변하기 시작한다. ");
            $("#tab2").text("시간을 달리는 소녀");
            $("#menu2 div img").attr("src","title-image/시간을-달리는-소녀.jpg");
            $("#menu2 p").html("17세, 다시는 돌아갈 수 없는 그 해 여름, </br> 지금 너에게 달려갈게! </br> </br> 17살 활발한 소녀인 마코토는 평소처럼 친구인 치야키와 고스케와 함께 사이좋게 채키볼을 하는 일상을 보내고 있었다. 그러던 어느 날 과학실에 들어간 마코토는 'Time waits for no one.' 이라는 문구가 써진 종이를 발견한고 생각없이 읆는다. 하지만 그 후 마코토는 이상한 경험을 하게 되고 자신이 타임리프를 할 수 있는 능력을 얻은 것을 깨달게 되는데...");
            },500);

        };
    });
    bh3.on('click',function(){
        if($(this).text()==="일상≠평범") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("일상");
            $("#menu1 div img").attr("src","title-image/일상.jpg");
            $("#menu1 p").html("우리가 보내고 있는 일상이란 사실 기적의 연속일지도 모른다네.</br>― 사사하라 코지로 </br></br> 고교생들의 일상 이야기입니다.  ");
            $("#tab2").text("사카모토임니다만?");
            $("#menu2 div img").attr("src","title-image/사카모토입니다만.jpg");
            $("#menu2 p").html("사립 가쿠분 고교 1학년 2반에 입학하자마자 모든 학교의 주목을 받은 학생이 있었다. 당번조차도 스타일리쉬 런치 타임도 스타일리쉬 벌로 복도에 쫓겨나도 스타일리쉬 그 일거수 일투족이... COOL! COLLER! COOLEST!! 압도적으로 쿨하고 스타일리쉬한 학교생활을 보내는 그 학생의 이름은.... 사카모토입니다만? ");
            },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="멋진 신세계") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("PSYCHO-PASS");
            $("#menu1 div img").attr("src","title-image/PSYCHO-PASS.jpg");
            $("#menu1 p").html("인간의 심리 상태, 성향, 욕망, 감정을 수치화와 실시간 감독이 가능한 시대가 열렸다. 공평하고 효율적으로 사람을 평가하는 이상적인 수치의 실현을 위해 사람들은 시빌라 시스템을 만들어 기계에게 자신들의 삶의 의미와 존재 가치를 판단하게 맏겼다. 개인의 마음과 정신을 이제 시빌라 시스템은 PSYCHO-PASS라는 계측치를 만들어 범죄계수가 높은 자는 범죄자로 판단되어 심판 받게된다. 이런 사회에서 범죄를 수사하고 범인을 벌하여 치안을 유지하는 공안국에 갓 들어간 신참 수사관 '츠네모리 아카네'는 첫 사건을 맞게 되는데...  ");
            $("#tab2").text("혈계전선");
            $("#menu2 div img").attr("src","img/혈계전선.jpg");
            $("#menu2 p").html("한때 뉴욕이라 불리던 거리는 단 하룻밤 만에 사라졌다. 하루 만에 구축된 안개의 도시 「헤르살렘즈 롯」. 상상 속의 산물로만 그려지던 '이세계'를 현실로 이어주는 도시. 그 전모는 아직 사람의 지혜가 미치지 않는 영역에 있으며 안개의 심연은 볼 수 없다. 사람은 일으킬 수 없는 기적을 실현하는 이 땅은 차후 천 년 동안의 세계 패권을 쥔 장소라고도 비유되며 다양한 의도를 가진 자들이 날뛰는 도시가 된다. 그런 세계의 균형을 유지하기 위해 비밀리에 움직이는 조직이 있었으니, 그 이름은 「비밀결사 라이브라」. 소년 레오는 우연한 계기로 라이브라의 일원이 되는데...  ");
            },500);

        };
    });
    bh3.on('click',function(){
        if($(this).text()==="인간의 욕망") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("역경무뢰 카이지");
            $("#menu1 div img").attr("src","title-image/역경무뢰-카이지.jpg");
            $("#menu1 p").html("'미래는 우리의 손안에'</br> </br> 도쿄에 온지 3년이 된 이토 카이지는 새해가 밝은 뒤부터 단 하루도 일한 날이 없다. 김새는 술과 김새는 도박의 나날들을 보내던 그에게 어느날 사채업자 엔도가 찾아온다. 예전에 든 보증 때문에 순식간에 그는 수 백만엔의 빚을 고리대금업자에게 지게 된 그에게 엔도는 10년 동안 갚을 빚을 하루만에 청산 할 수 있는 도박을 제안한다.  ");
            $("#tab2").text("Fate/Zero");
            $("#menu2 div img").attr("src","title-image/FateZero.jpg");
            $("#menu2 p").html("성배전쟁 - 그것은 모든 소망을 이룰 수 있는 ‘성배’를 손에 넣으려는 일곱 마술사가 소환한 서번트를 이용하여 목숨을 걸고 싸우는 궁극의 배틀 로열. 「마술사 킬러」라는 별명을 가진 에미야 키리츠구는 자신의 숙원을 위해 소환한 영령 「세이버」와 함께 모든 것을 걸고 성배를 둘러싼 싸움에 몸을 던지는데... ");
             },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="죽음") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("데스 퍼레이드");
            $("#menu1 div img").attr("src","title-image/Death-Parade.jpg");
            $("#menu1 p").html("어서 오십시오. 퀸 데킴에.아무도 모르는 두 명의 손님을 맞이한 것은, 수 없는 바 '퀸 데킴'과 백발의 바텐더 '데킴'. 두 분은 이제부터, 목숨을 건 게임을 하게 됩니다. 그의 입에서부터 말해지는 데스게임으로의 유도. 벗겨지게 되는 손님들의 본성. 게임의 결과에 의해 자신을 '재정자'라고 밝히는 데킴. 재정가 데킴이 두 손님에게 내리는 재정이란?  ");
            $("#tab2").text("엔젤 비트!");
            $("#menu2 div img").attr("src","title-image/Angel-Beats.jpg");
            $("#menu2 p").html("생전의 미련을 풀지 못한 채 죽은 학생들이 모이는 사후세계. 수업을 성실하게 받고 나면 성불한다하는 곳에서 기억을 잃은 채 주인공 오토나시 유즈루는 유리를 중심으로 한 사후세계 전선(SSS)의 학생들을 만나게 된다. 수업을 거부하고 사후세계를 빼앗기 위해, 학생들을 성불시키려 하고 있는 학생회장인 천사와 싸우고 있었다. 얼떨결에 유리의 권유를 받아 SSS에 가입하고, SSS의 멤버들과 어울리며 개개인의 사정을 알게 되는 한편 천사와 사후세계의 비밀도 알아가게 되는데.... ");
            },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="이상") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("데스노트");
            $("#menu1 div img").attr("src","title-image/데스노트.jpg");
            $("#menu1 p").html("반복되는 일상속에서 무료함을 느끼는 고등학교 3학년 우등생 야가미 라이토. 그러던 어느 날 사신계의 따문한 생활에 질린 사신 류크는 이름을 적은 대상을 죽일 수 있는 사신의 공책-데스토트를 인간계에 떨어트려 본다. 우연히 떨어진 데스노트를 발견한 라이토는 노트를 시험삼아 사용해 그것이 진짜로 사람을 죽일 수 있는 노트라는 것을 깨달게 된다. 일상의 권태로움과 사법망을 빠져나가는 범죄자들이 판을 치는 현실을 비관한 라이토는 데스노트로 직접 범죄자을 심판하고 착한 사람들만 살 수 있는 이상적인 신세계를 구축하고 그 신세계의 신이 되기로 결심하는데...  ");
            $("#tab2").text("신만이 아는 세계");
            $("#menu2 div img").attr("src","img/신만이-아는-세계.jpg");
            $("#menu2 p").html("미연시 게임에서의 독보적인 존재인 통칭 함락신이라 불리는 카츠라기 케이마는 어느 날 자신에게 '공략해주길 바라는 여자가 있다'는 내용의 메일을 받게 된다. 함락신인 자신에게의 도전이라 생각한 케이마는 망설임 없이 답장을 하지만 사실 그 메일은 도전장도 아닌 지옥의 계약서로 2D 여성도 아닌 현실 여성을 공략해 마음의 틈을 채워 그곳에 기생하는 '도주혼'을 잡으라는 계약이었다. 문제는 계약을 이행하지 않으면 목에 차인 길로틴 목걸이가 목을 절단시켜 케이마는 이제 목숨을 걸고 2D 여성이 아닌 현실의 여자를 공략해야 하게 되는데...  ");
            },500);

        };
    });
    bh3.on('click',function(){
        if($(this).text()==="각성") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("도쿄구울");
            $("#menu1 div img").attr("src","title-image/도쿄구울.png");
            $("#menu1 p").html("도쿄'에 도사리고 숨어 있는 하나의 '절망'…. 군집 속에 섞여 인간을 사냥하고 그 죽은 고기를 먹는 괴인, 사람들은 그것을 '구울'이라고 부른다. 도쿄 20구에 사는 대학교 1학년 카네키 켄은 책을 읽는 것을 좋아하는 평범한 학생이다. 어느 날 카네키는 평소에 독서 취향도 비슷하고 호감이 있는 아름다운 여성 리제씨를 친구인 히데와 함께 간 카페 '안테이크'에서 우연히 만나 데이트를 하게 된다. 다음날 즐겁게 리제씨와의 데이트를 하고 늦은 밤길을 단 둘이 걸어가던 중 리제씨는 무언가를 카네키에게 고백하는데... 그리고 카네키는 구울들의 세계에 휩슬리게 된다. ");
            $("#tab2").text("기생수");
            $("#menu2 div img").attr("src","title-image/기생수.jpg");
            $("#menu2 p").html("지구에 사는 누군가가 문득 생각했다.\"모두의 미래를 지켜야 한다.\"</br> 어느 날 밤 지구에 나타난 기생 생물들들. 이 생물들은 사람의 뇌로 기어즐어가 몸을 장악하고 기생한 생물의 동족을 포식한다. 뛰어난 학습능력과 경이로운 신체 능력으로 인간 사회를 위협하는데, 평범하고 소심한 소년 이즈미 신이치에게 기생 생물이 오른팔에 살게 되면서 기묘한 공생관계를 가지게 된다. ");
            },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="반전") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("학교생활");
            $("#menu1 div img").attr("src","title-image/학교생활.jpg");
            $("#menu1 p").html("학교에서 기숙하는 \"학교생활부\"의 4명, 분위기 메이커 유키, 삽을 사랑하는(?) 쿠루미, 모두를 한 데 모으는 리 양, 똑 부러지는 후배 미 군. 너글너글한 고문선생 메구 언니에게 보살핌 받으며, 아침에 건빵을 먹거나, 옥상의 채소 밭에서 방울 토마토를 수확하거나, 부실에서 도망친 개 \"타로마루\"를 잡으러 학교 안을 달리거나…… 가끔은 큰 일이 생기기도 하지만, 그 이상으로 즐거움이 넘치는, 모두와 함께 살아가는 나날들 그녀들, \"학교생활부\"는 오늘도 활기차게 활동 중! </br>「우린 여기 있어요!」");
            $("#tab2").text("Another");
            $("#menu2 div img").attr("src","title-image/Ano.jpg");
            $("#menu2 p").html("도쿄에서 지방의 요미야마키타 중학교, '요미키타'에 전학 온 사카키바라 코이치는 뭔가에 겁먹고 있는 듯한 반의 분위기에 위화감을 느낀다. 코이치는 이상한 존재감을 발하는 미소녀 미사키 메이에게 이끌려 접촉을 시도하지만 수수께끼는 오히려 더 깊어질 뿐. 그런 가운데 반장인 사쿠라기 유카리가 비참한 죽음을 당한다. 비밀을 찾으려고 움직이기 시작하는 코이치 앞에 새로운 수수께끼와 공포가 기다리는데…… ");    
        },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="농구") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("SLAM DUNK");
            $("#menu1 div img").attr("src","title-image/SLAM-DUNK.jpg");
            $("#menu1 p").html("<strong>\"농구는 좋아하시나요?\"</strong> </br> 고등학교 1학년 강백호는 방금 전 좋아하는 여자에게 고백했지만 좋아하는 사람이 농구부에 있다는 말을 듣고 무려 50변쩨인 기념비적인 퇴짜를 맞게 된다. 다음 날 강백호는 농구부에 대한 증오에 가득찬 얼굴로 등교하고 농구라는 말만들으면 화풀이를 하는데, 꿀꿀한 기분으로 복도를 걷던 그에게 갑자기 미소녀 채소연이 나타나 그에게 물었다. </br>'농구는 좋아하시나요?'  ");
            $("#tab2").text("쿠로코의 농구");
            $("#menu2 div img").attr("src","title-image/쿠로코의-농구.jpg");
            $("#menu2 p").html("전통의 농구 강호 테이코 중학교의 역사 속에서도 가장 뛰어난 천재 5인이 동시에 존재했던 기적의 세대가 중학 농구에서 3연패를 달성하고 고교 농구로 올라오면서 각자 다른 팀으로 간다. 그들을 영입한 팀 중 하나가 정상에 오를 것이라는 전망이 거의 확실한 가운데 설립된 지 1년밖에 지나지 않은 신설 세이린 고등학교 농구부에 기적의 세대에 필적하는 재능을 지닌 카가미 타이가와 기적의 세대의 환상의 식스맨이었던 쿠로코 테츠야가 입학, 전국 최고를 목표로 기적의 세대에게 도전한다.  ");
        },500);
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="음식") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("식극의 소마");
            $("#menu1 div img").attr("src","title-image/식극의-소마.jpg");
            $("#menu1 p").html("식당 '유키히라' 주인의 아들인 중학생 소마는 아버지를 뛰어넘는 요리사가 되는 것이 목표인 열혈 요리사 지망생이다. 매일 수련의 나날을 보내며 노력한 그는 자신의 요리로 사람들의 마음을 뒤집을 정도의 실력자가 되지만, 그런 그에게 아버지는 식당을 물려주는 대신 상상치도 못했던 권유를 건넨다. 바로 일본 최고의 요리학교에서 실력을 쌓고 오라는 것! 학교에 모인 학생들은 대개가 쟁쟁한 엘리트들로, 서민적인 요리를 하는 소마와는 달리 화려한 고급 음식을 만들고 있었는데… 오로지 실전만으로 요리를 익혀온 소마는 과연…? ");
            $("#tab2").text("행복 그래피티");
            $("#menu2 div img").attr("src","title-image/행복-그래피티.jpg");
            $("#menu2 p").html("할머니가 돌아가시며 혼자 살게 된 여중생 료. 혼자 먹는 밥이 맛이 없어 자신의 요리실력에 자신을 잃어가던 료에게 어느 날 육촌인 키린이 찾아온다. 키린과의 식사를 통해 료는 그동안 잊고 있떤 감정을 떠올린다. 함께 살게 된 두 소녀가 만들어가는 먹방 커뮤니케이션! </br>배고플 때 보지 마세요. 고문입니다.");
        },500);

        };
    });
    bh3.on('click',function(){
        if($(this).text()==="살인 게임") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            setTimeout(function(){
            $("#ThemeAnime-1").stop().animate({left:"62%"});
            $("#tab1").text("미래일기");
            $("#menu1 div img").attr("src","title-image/미래일기.jpg");
            $("#menu1 p").html("매일 자신의 일과를 휴대 전화의 일기로 저장하던 소심한 소년 아마노 유키테루는 자신의 공상 속에 존재하는 '시간과 공간의 신'인 데우스 엑스 마키나에게 '미래를 읽는 일기'를 건네받게 된다. 일기를 가지고 여러 가지 일을 벌이던 중, 일기에는 갑작스레 자신이 죽게 된다는 DEAD END가 뜨게 되는데... 그 순간, 유키테루는 성적우수에 외모도 뛰어난 클래스메이트인 가사이 유노와 맞닥뜨리게 된다. 결국 데스게임을 펼치게 되는데......  ");
            $("#tab2").text("단간론파");
            $("#menu2 div img").attr("src","title-image/단간론파.jpg");
            $("#menu2 p").html("특정분야의 초고교급 학생을 선발해 교육하기 위한 정부 공인 '사립 키보가미네 학원'. 초일류의 학생들이 모이는 이 학교에 지극히 평범한 소년인 나에기 마코토는 단순히 추첨으로 당첨 되어 '초고교급 행운'으로 키모가미네 학원에 들어간다. 하지만 입학실 날 그는 현관 로비에서 쓰러지고 다시 정신을 차렸을 때 그가 발견한 것은 감시 카메라가 달린 천장, 철판으로 막힌 창문 그리고 무언가 으스스한 느낌이 드는 학교였다. 그렇게 나에기를 포함한 15명의 초고교급 학생들은 키보가미네 학원에 갇히고 입학식에세 자칭 학교장 곰인형 모노쿠마에게 살인게임을 강요 받는다. ");        
        },500);

        };
    });
    $("p.blockquote").on('click','#Mirai-Nikki-Right',function(){
        $(this).parent().slideUp().delay(200).queue(function(next){$(this).html("<p> <span class=\"lead\" style=\"font-weight:bolder; font-family:'Nanum Gothic';\">감상포인트</span></br> ight-2\" class=\"glyphicon glyphicon-menu-right\"></span></p>"); next();}).delay(200).slideDown();
    });
    $("p.blockquote").on('click','#Mirai-Nikki-Right-2',function(){
        $(this).parent().slideUp().delay(200).queue(function(next){$(this).html(""); next();}).delay(200).slideDown();
    });
    $("p.blockquote").on('click','#Danganronpa-Right',function(){
        $(this).parent().slideUp().delay(200).queue(function(next){$(this).html("<p><span class=\"lead\" style=\"font-weight:bolder; font-family:'Nanum Gothic';\">감상포인트</span></br> ight-2\" class=\"glyphicon glyphicon-menu-right\"></span></p>"); next();}).delay(200).slideDown();
    });
    $("p.blockquote").on('click','#Danganronpa-Right-2',function(){
        $(this).parent().slideUp().delay(200).queue(function(next){$(this).html(""); next();}).delay(200).slideDown();
    });
    bh3.on('click',function(){
    	
        if($(this).text()==="FULLMETAL ALCHEMIST BROTHERHOOD") {
if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }

        infodisplay.fadeIn();
    	synopsis.text("돌아가신 어머니를 되살리려 인체연성이란 연금술의 금기를 범한 엘릭형제는 그 대가로 형 에드워드는 팔과 다리를 동생 알폰스는 몸을 잃게 된다. 그리고 형제들은 자신들의 과오를 되돌리고 몸을 되찾기 위해 현자의 돌을 위한 여행을 시작한다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
        if($(this).text()==="Steins;Gate") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
           infodisplay.fadeIn();
        synopsis.text("오카베 린타로 통칭 오카린은, 아직도 중2병에서 벗어나지 못하는 대학생. '광기의 매드 사이언티스트 · 호오인 쿄우마'를 자칭해, '미래 가제트 연구소'라고 하는, 멤버가 고작 3명뿐인 서클에서 괴상한 물건을 발명하는 나날을 보내고 있다. 그런 그들이 어느 순간 우연히 과거로 문자를 보낼 수 있는 발명품, 즉 '타임 머신'을 만들고 만다─SERN, 존 타이타, 환상의 레트로 PC 'IBN 5100', 타임 머신, 나비효과, 시간 여행의 11가지 이론─여러 가지 요인이 우연히 서로 겹쳤을 때, 아키하바라에서 갑자기 일어나는 세계 규모의 대사건! '미래로의 선택'이 맡겨진 오카린 일행이 내리는 결단이란?");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="HUNTER X HUNTER") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("고래섬에 사는 소년 곤은 헌터의 전설이라는 아버지 진을 좇아 헌터가 되기 위한 여행을 떠난다. 헌터 시험을 치러 가는 도중 의사 레오리오, 복수심에 불타는 크라피카, 반항아 키르아를 만나게 되고 헌터의 길을 함께 추구하기로 결심한다. 곤 일행은 헌터가 되기 위한 여정을 계속하면서 온갖 역경과 고난을 겪게 되고 그러면서 그들은 진정한 헌터의 의미를 알아간다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="CLANNAD AFTER STORY") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
           infodisplay.fadeIn();
        synopsis.text("CLANNAD의 뒷이야기. 고등학교 졸업 이후 토모야와 나기사는 결혼하여 가정을 꾸리게 되며 딸인 우시오가 태어나게 된다. 이 둘의 선택들은 서로의 내면을 제대로 바라보게 하고 예전의 관계를 돈독하게 하며 때로는 새로운 관계를 만들게 하였다. 그러면서 둘은 어른이 된다는 것의 의미를 배우게 되고 가족의 가치를 깨달게 된다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="센과 치히로의 행방불명") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("10살 아이 치히로는 부모님과 함께 이사를 가게 되지만 가다가 길을 잃어 들어간 터널 뒤에는 기묘한 놀이동산이 있었다. 이상한 느낌에 치히로는 부모님께 나가자고 조르지만 오히려 무언가에 홀린 듯이 음식점을 발견해 게걸스럽게 먹기 시작한다. 그 모습에 질려 혼자 돌아다니던 치히로는 신비로운 소년 하쿠를 만나고 돌아가라는 경고를 받지만 기이한 존재들이 나타나기 시작하고 불안해진 치히로가 부모를 다시 찾지만 그들은 돼지로 변해있었다. 인간세상이 아닌 다른 세계에 갇혀버린 치히로는 하쿠의 도움을 받아 유바바의 온천장에서 일하게 되는데..")
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="4월은 너의 거짓말") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("초등학생까지 완벽에 가까운 연주로 천재라 평가 받던 피아니스트 아리마 코우세이는 어머니의 죽음 이후 자신의 피아노 소리를 듣지 못하게 된다. 그렇게 자신의 꿈과 목표를 이른체 살아가던 코우세이 앞에 미야조노 카오리라는 바이올린리스트가 나타나면서 그의 인생은 바뀌게 된다.")
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="스즈미야 하루히의 소실") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
        infodisplay.fadeIn();
        synopsis.text("스즈미야 하루히. 그 녀석이 사라졌다. 며칠 전까지만 해도 SOS단 동아리 방에서 전과 다름 없는 일과를 보내면서 제멋대로인 하루히의 크리스마스 전골 파티 계획을 듣고 있었을 터이다. 여느 때처럼 여동생의 필살 이불 젖히기에 일어나 언제나 그랬듯이 샤미센과 노는 동생의 엉뚱한 멜로디를 들으면서 집을 나갔다. 여기까지는 평소와 똑같았다. 그러나 학교로 간 나는 '무언가'가 잘못되어 있는 것을 깨달는다. 어제까지만해도 멀쩡했던 타니구치는 감기에 걸려있었고, 학교에는 내가 모르는 사이 독감이 돌고 있었다. 아니, 이 시점에서 그런 것은 중요하니 않다. 왜냐하면 여기에 있을 수 없는-사라진 하루히 대신 그녀가-우리의 반장이었던 아사쿠라 료코가 서있었다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
        
        
        if($(this).text()==="모노가타리 시리즈") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("고등학교 3학년인 소년 아라라기 코요미는 3년간 한 번도 말을 해 본 적이 없는 같은 반 센조가하라 히타기의 비밀을 우연히 알게 된다. 그녀의 비밀은 다름 아닌 체중이라고 할 만한 게 거의 없다는 것이었다. 기이한 게를 만난 이후, 그 게에게 자신의 체중을 빼았겼다고 하는 히타기. 그녀의 얘기를 듣고 코요미는 자신도 과거에 비슷한 체험을 한 것을 기억하는데...");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
        infodisplay.fadeIn();
        if($(this).text()==="충사") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
        synopsis.html("무릇 먼 존재라 치부되던 것. 하등하고 기괴하며 친숙한 동식물과는 전혀 달리 여겨지는 것들. 그런 이형의 무리들을 사람들은 두려움을 담아 언제부턴가 다들 '벌레(蟲)'라고 불렀다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
        
        
        if($(this).text()==="마법소녀 마도카 마기카") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
        infodisplay.fadeIn();
        synopsis.html("현대 일본, 어느 현의 미타키하라 중학교 2학년, 카나메 마도카는 꿈을 꾸었다. </br> 붕괴된 도시, 그 중심에 서 있는 무언가. 빌딩 숲을 헤치면서, 그 무언가에게 달려드는 검은 머리의 소녀.</br> 빌딩의 옥상에서 격렬한 싸움을 지켜보며 슬퍼하던 마도카의 발치에, 정체를 알 수 없는 생물이 나타나 말한다.</br></br>'어쩔 수 없어... 그 애 혼자서는 너무 힘들어. 하지만, 그 애도 이미 각오하고 있지.'</br>'포기하면 그만이야. 하지만 너라면 운명을 바꿀 수 있어. 피할 수 없는 멸망도 슬픔도, 모두 네가 뒤엎어버리면 그만이야. 너에게는 그러기 위한 힘이 주어져 있으니까.'</br>'나 같은 애라도 정말로 뭔가 할 수 있어? 이런 결말을 바꿀 수 있는 거야?'</br>'물론이지. 그러니까 나랑 계약해서 마법소녀가 되어 줘.'</br></br>거기에 대답하려던 순간, 마도카는 꿈에서 깨어난다.</br></br>그리고 꿈에서 깬 그 날, 꿈에서 봤던 그 소녀가 나타나는데...");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
        if($(this).text()==="나만이 없는 거리") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
        infodisplay.fadeIn();
        synopsis.html("피자 배달부로 일하면서 살아가는 29살 청년 사토루는 데뷔한 이후 계속 퇴짜만 맞으며 자신의 진로를 고민하는 삶을 살고 있었다. 평범해 모이는 그에게는 '리바이벌' 이라는-사건이 일어나면 몇번이고 다시 같은 시점으로 돌아가는 능력이 있었다. 하지만 그의 주변에서 살인사건이 일어나고 자신이 범인으로 몰리자 그는 1988년 18년전으로 돌아가 리바이벌한다. 그리고 18년 전 일어났던 아동 유괴 연쇄 살인과 현재의 사건이 연과 되어 있는 것을 깨달고 모든 살인의 발단이었던 첫번째 희생자 반에서 고립된 여자아이 히나즈키 카요를 구하고 일어날 비극을 막기로 결심한다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
        if($(this).text()==="우리는 아직도 그 꽃의 이름을 모른다") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("어릴 때 일어난 비극적인 사고로 친구였던 멘마를 잃고 인해 진타와 그의 친구들은 뿔뿔이 떨어지고 서로의 삶을 살아간다. 그러나 어느 여름 멘마의 유령이 진타 앞에 나타나고 그 날 어긋난 그들의 관계을은 변하기 시작하고 흩어진 친구들은 다시 모이게 되는데...");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        if($(this).text()==="Code Geass") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("2010년 신성 브리타니아 제국은 일본을 정복하고 국가의 주권을 박탈 국명을 Area 11로 명명하고 브리타니아 제국의 폭정을 받게 된다. 7년 이후 브리타니아 제국의 황태자였지만 어머니의 암살이후 충격으로 불구가 된 동생과 함께 일본으로 쫓겨난 를르슈 람페르지는 어느날 C.C.라는 의문의 소녀를 만나고 기아스라는 힘을 부여받는다. 그리고 가변으로 정체를 숨기고 제로라는 이름으로 반 브리타니카 레지스탕스를 이끌어 복수에 나선다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        if($(this).text()==="ONE PUNCH MAN") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("취미로 히어로를 하는 영웅 사이타마는 3년전 머리가 빠질 정도로 엄청난 트레이닝을 강행한 결과 절대적인 힘을 손에 넣게 된다. 모든 적을 한 방에 끝내버히는 힘을 얻은 그는 더 이상 승리에서 어떤 희열도 고양감도 느끼지 못하게 되고 공허한 히어로 활동을 계속하고 있었다. 그런 그 앞에 괴인들과 다른 히어로들이 나타나면서 그의 삶은 달라지기 시작한다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        
        if($(this).text()==="Cowboy Bebap") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("서기 2071년 인류는 우주로 나가 다른 행성으로 이주하고 불모지가 된 지구를 위로 한다. 태양계의 평화를 지키기 위해 수배범들과 범죄자들을 체포하는 카우보이들의 우주 액션 어드벤처!");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        
        if($(this).text()==="천원돌파 그렌라간") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("지하마을에 사는 굴착꾼 소년 시몬은 어릴 적 지진으로 부모님을 잃고 소심한 성격 때문에 마을 사람들은 시몬을 업신여긴다. 이런 그를 인정하는 것은 지진의 공포로부터 벗어나 지상으로 나가자고 하는 마을 건달 카미나 밖에 없었다. 어느 날 시몬은 드릴고 땅을 파던 도중 코어드릴과 라간이라는 로봇을 발견하게 되고 거창하지 않지만 위대한 대장정이 시작된다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        
        if($(this).text()==="Fate/Zero") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
            infodisplay.fadeIn();
        synopsis.text("모든 소원을 이루어 주는 원망기 성배를 차지하기 위해 200년에 한 번 일본 후유키 시에는 7명의 마스터와 강력한 서번트가 서로의 욕망을 이루기 위해 성배전쟁이란 이름의 살육전을 한다. 성배전쟁을 위해 아인츠베른 가에 데릴사위로 받아들어진 '마술사 킬러' 에미야 키리츠쿠는 자신의 유일한 딸 이리야를 성에 남겨두고 아내 아이리스필과 함께 4차 성배전쟁에 마스터로 참가한다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        if($(this).text()==="하이큐!!!") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
        infodisplay.fadeIn();
        synopsis.text("카라스노 고교의 에이스 '작은 영웅'을 동경해 배구를 지작한 히나타 쇼요는 중학교 시절 단 한번 시합이자 마지막 시합에서 '코트 위의 제왕' 카게야마 토비오라는 천재 세터와 만나게 참패한다. 고등학교에 들어가 설욕전을 결심한 히나타는 '작은 거인'이 있었던 카라스노 고교에 진학해 배구부로 을어간다. 그러나 처음으로 들어간 코트위해서 히나타가 발견한 것은 '코트 위의 왕자' 카게야마 였는데... ");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        if($(this).text()==="ONE PIECE") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
        infodisplay.fadeIn();
        synopsis.text("해적왕 골드 로저의 처형식 사람들은 이렇게 물었다. '모아둔 보물은 어디다 숨겼나?' 그리고 그는 웃으면서 대답했다. '내 보물 말인가? 원한다면 줄 수도 있지. 찾아 봐라! 이 세상 전부를 그곳에 두고 왔으니!' 골드 로저가 남긴 유산 원피스를 찾기위한 해적들의 대항해시대가 시작되고 고무고무열매를 먹은 몽키 D. 루피의 해적왕이 되기위한 기나긴 대장정이 시작된다!");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    
    });
    bh3.on('click',function(){
        if($(this).text()==="MONSTER") {
        if(parseInt($("#ThemeAnime-1").css("left")) < screen.width) {
                $("#ThemeAnime-1").stop().animate({left:"100%"}).delay(500).animate({left:"62%"});
            }
        infodisplay.fadeIn();
        synopsis.html("결국 괴물은 누구 였을까? </br></br> 일본에서 독일로 유학온 천재 뇌외과 의사로 뒤셀도르프의 아이슬러 기념병원에서 장래성을 인정받아 탄탄대로의 출세가도를 달리고 있었다. 천재적인 솜씨를 눈여겨본 병원원장의 신임을 톡톡히 얻고 있었고 애인도 병원원장의 딸이였기 때문이다. 그러던 중 유명 오페라 가수와 터키인 노동자가 같이 실려오는 사건이 있었다. 그는 원장의 권유대로 오페라 가수를 수술하게 되었고 실력이 떨어지는 의사가 집도한 노동자는 수술중 사망하고 만다. 이 사건으로 윤리적인 고뇌에 빠진 그는 원장과 삐걱대기 시작하는 그에게 다시 일찍실려온 총상을 입은 어린 소년 요한과 늦게 들어온 시장이 환자로 들어오게 되고 다시 그는 선택의 기로에 선다.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    
    });
    $("#info-display span").click(function(){
    	infodisplay.stop().animate({top:'100%'});
    });
});