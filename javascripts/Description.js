$(document).ready(function(){
    var source = $("#Source");
    var time = $("#Time");
    var image = $("#Description img");
    var episodes= $("#Episodes");
    var studio = $("#Studio");
    var gerne = $("#Gerne");
    var des = $("#Description");
    var timeout = 0;
    var timeoutreset = function() {
        if (des.css("display")==="none") {
            timeout = 0;
        }
        else {
            timeout = 350;
        }
    };
    des.click(function(){
        $(this).slideUp();
    });
    $("#스즈미야-하루히의-소실 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/스즈미야-하루히의-소실.jpg");
            studio.html("제작사: 쿄토 애니매이션");
            gerne.html("장르: 학원물, 러브코미디, SF");
            episodes.html("방영회수: 영화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 6/2/2010");
        },timeout);
    des.slideDown();
    });
    $("#스즈미야-하루히의-우울 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/스즈미야-하루히의-우울.jpg");
            studio.html("제작사: 쿄토 애니매이션");
            gerne.html("장르: 학원물, 러브코미디, SF");
            episodes.html("방영회수: 1기-14화 2기-14화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-3/4~3/7/2006    <br>              2기-22/5~11/9/2009");
        },timeout);
    des.slideDown();
    });
    $("#중2병이라도-사랑이-하고-싶어 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/중2병이라도-사랑이-하고-싶어.jpg");
            studio.html("제작사: 쿄토 애니매이션");
            gerne.html("장르: 코미디, 학원물, 일상물");
            episodes.html("방영회수: 1기-12화 2기-12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-4/10~20/12/2012 <br>                2기-9/1/~27/3/2014");
        },timeout);
    des.slideDown();
    });
    $("#아카메가-벤다 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/아카메가-벤다.jpg");
            studio.html("제작사: White Fox");
            gerne.html("장르: 액션, 어드벤처, 판타지");
            episodes.html("방영회수: 1기-24화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 1기-7/7~15/12/2014  <br>              ");
        },timeout);
    des.slideDown();
    });
    $("#역시-내-청춘-러브코메디는-잘못됐다 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/역시-내-청춘-러브코메디는-잘못됐다.jpg");
            studio.html("제작사: Brain's Base, feel");
            gerne.html("장르: 러브코미디, 학원물");
            episodes.html("방영회수: 1기-13화 2기-13화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-5/4~28/6/2013   <br>              2기-3/4~26/6/2015");
        },timeout);
    des.slideDown();
    });
    $("#진격의-거인 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/진격의-거인.jpg");
            studio.html("제작사: WIT Studio, <br>Production I.G");
            gerne.html("장르: 액션, 드라마, 판타지, 고어");
            episodes.html("방영회수: 1기-25화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 7/4~29/9/2013      <br>         ");
        },timeout);
    des.slideDown();
    });
$("#노-게임-노-라이프 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/노-게임-노-라이프.jpg");
            studio.html("제작사: 매드하우스");
            gerne.html("장르: 어드벤처, 심리물, 코미디, 판타지");
            episodes.html("방영회수: 1기-12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-9/4/~25/6/2014  <br>             ");
        },timeout);
    des.slideDown();
    });
$("#역경무뢰-카이지 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/역경무뢰-카이지.jpg");
            studio.html("제작사: 매드하우스");
            gerne.html("장르: 스릴러, 심리물");
            episodes.html("방영회수: 1기-26화 2기-26화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 1기-3/10~2/4/2008   <br>              2기-6/4~28/10/2011");
        },timeout);
    des.slideDown();
    });

$("#KILL-LA-KILL > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/KILL-LA-KILL.jpg");
            studio.html("제작사: TRIGGER");
            gerne.html("장르: 액션, 코미디, 학원물");
            episodes.html("방영회수: 24화");
            source.html("원작: TRIGGER 오리지널");
            time.html("방영기간: <br> 1기-4/10/2013~28/3/2014  <br>              ");
        },timeout);
    des.slideDown();
    });

$("#SteinsGate > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/Steins;Gate.jpg");
            studio.html("제작사: White Fox");
            gerne.html("장르: SF, 스릴러");
            episodes.html("방영회수: 1기-24화");
            source.html("원작: Game");
            time.html("방영기간: <br> 1기-6/4~14/10/2011  <br>              ");
        },timeout);
    des.slideDown();
    });

$("#원펀맨 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/원펀맨.jpg");
            studio.html("제작사: 매드하우스");
            gerne.html("장르: 액션, 코미디");
            episodes.html("방영회수: 1기-12화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 1기-5/10~21/12/2015 <br>               ");
        },timeout);
    des.slideDown();
    });
$("#마법소녀-마도카-마기카 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/마법소녀-마도카-마기카.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 드라마, 마법소녀, 스릴러, 심리물");
            episodes.html("방영회수: 1기-12화");
            source.html("원작: 샤프트 오리지널");
            time.html("방영기간: <br> 1기-7/1~22/4/2011   <br>             ");
        },timeout);
    des.slideDown();
    });
$("#Another > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/Another.jpg");
            studio.html("제작사: P.A. Works");
            gerne.html("장르: 호러, 미스터리, 학원물, 스릴러");
            episodes.html("방영회수: 1기-12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-10/1~27/3/2012  <br>              ");
        },timeout);
    des.slideDown();
    });
$("#SHIRO-BAKO > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/SHIRO-BAKO.jpg");
            studio.html("제작사: P.A. Works");
            gerne.html("장르: 코미디, 드라마");
            episodes.html("방영회수: 24화");
            source.html("원작: P.A. Works 오리지널");
            time.html("방영기간: 9/10/2014~26/3/2015           <br>     ");
        },timeout);
    des.slideDown();
    });
$("#블랙-불릿 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/블랙-불릿.jpg");
            studio.html("제작사: Kinema Citrus");
            gerne.html("장르: 액션, SF");
            episodes.html("방영회수: 1기-13화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-8/4/2014~1/7/2014  <br>               ");
        },timeout);
    des.slideDown();
    });
$("#모노가타리-시리즈").on("click",function(){
    des.slideUp();
    timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/모노가타리-시리즈.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 86화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: 2009~     <br>  ");
        },timeout);
    des.slideDown();
    });
$("#바케모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/바케모노가타리.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 15화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 3/7/2009~6/25/2010 <br>               ");
        },timeout);
    des.slideDown();
    });
$("#니세모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/니세모노가타리.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 11화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 8/1~18/3/2012      <br>          ");
        },timeout);
    des.slideDown();
    });
$("#네코모노가타리-흑 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/네코모노가타리-흑.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 4화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 31/12/2012         <br>       ");
        },timeout);
    des.slideDown();
    });
$("#모노가타리-시리즈-2nd-Season > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/모노가타리-시리즈-2nd-Season.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 26화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 7/7~29/12/2013     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#츠키모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/츠키모노가타리.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 4화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: 31/12/2014         <br>      ");
        },timeout);
    des.slideDown();
    });
$("#오와리모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/오와리모노가타리.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 4/10~20/12/2015    <br>            ");
        },timeout);
    des.slideDown();
    });
$("#키즈모노가타리-철혈 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/키즈모노가타리-철혈.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 영화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: 8/1/2016           <br>     ");
        },timeout);
    des.slideDown();
    });
$("#키즈모노가타리-열혈 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/키즈모노가타리-열혈.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 영화")
            studio.html("제작사: 샤프트");
            source.html("원작: 라이트 노벨");
        time.html("방영기간: 2016 Summer            <br>    ");
        },timeout);
    des.slideDown();
    });
$("#코요미모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/코요미모노가타리.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, 심리물");
            episodes.html("방영회수: 12화")
            studio.html("제작사: 샤프트");
            source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 10/1~27/3/2016     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#FULL-METAL-ALCHEMIST > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/FULL-METAL-ALCHEMIST.jpg");
            studio.html("제작사: Bones");
            gerne.html("장르: 액션, 어드벤처, 드라마, 심리물");
            episodes.html("방영회수: 64화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 5/4/2009~4/7/2010  <br>              ");
        },timeout);
    des.slideDown();
    });
$("#케이온 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/K-ON.jpg");
            studio.html("제작사: 쿄토 애니매이션");
            gerne.html("장르: 일상물, 학원물, Music");
            episodes.html("방영회수: 1기-13화 2기-26화");
            source.html("원작: 4컷 만화");
            time.html("방영기간: <br> 1기-43/4~26/6/2009 <br> 2기-7/4~29/10/2010                ");
        },timeout);
    des.slideDown();
    });
$("#혈계전선 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/혈계전선.jpg");
            studio.html("제작사:Bones");
            gerne.html("장르: 액션, 판타지");
            episodes.html("방영회수: 12화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 5/4~4/10/2015      <br>          ");
        },timeout);
    des.slideDown();
    });
$("#천원돌파-그렌라간 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/천원돌파-그렌라간.jpg");
            studio.html("제작사: Gainax");
            gerne.html("장르: 메카, 액션, 어드벤처");
            episodes.html("방영회수: 27화");
            source.html("원작: Gainax 오리지널");
            time.html("방영기간: <br> 1/4~3010/2007      <br>          ");
        },timeout);
    des.slideDown();
    });
$("#식극의-소마 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/식극의-소마.jpg");
            studio.html("제작사: J.C.Staff");
            gerne.html("장르: 학원물, Food");
            episodes.html("방영회수: 1기-24화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 1기-4/4~26/10/2015  <br>              ");
        },timeout);
    des.slideDown();
    });
$("#미래일기 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/미래일기.jpg");
            studio.html("제작사: Asread");
            gerne.html("장르: 미스터리, 스릴러, 호러, 심리물");
            episodes.html("방영회수: 26화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 9/10/2011~15/4/2012<br>                ");
        },timeout);
    des.slideDown();
    });
$("#니세코이 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/니세코이.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 러브코미디, Harem, 학원물");
            episodes.html("방영회수: 1기-20화 2기-12화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 1기-11/1~5/24/2014  <br>               2기-10/4~26/6/2015");
        },timeout);
    des.slideDown();
    });
$("#토라도라 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/토라도라.jpg");
            studio.html("제작사: J.C.Staff");
            gerne.html("장르: 러브코미디, 학원물, 일상물");
            episodes.html("방영회수:25화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 2/10/2008~26/3/2009<br>                ");
        },timeout);
    des.slideDown();
    });
$("#메카쿠시티-엑터즈 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/메카쿠시티-엑터즈.jpg");
            studio.html("제작사: 샤프트");
            gerne.html("장르: 미스터리, 로멘스, SF");
            episodes.html("방영회수: 12화");
            source.html("원작: Music");
            time.html("방영기간: <br> 13/4/~29/6/2014    <br>           ");
        },timeout);
    des.slideDown();
    });
$("#기어와라-냐루코-양 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/기어와라-냐루코-양.jpg");
            studio.html("제작사: Xebec");
            gerne.html("장르: 코미디, 로멘스, SF");
            episodes.html("방영회수: 1기-12화 2기-12화 +OVA");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-10/4~26/6/2012  <br>               2기-8/4~1/7/2013  <br> OVA-19/6/2015" );  
        },timeout);
    des.slideDown();
    });
$("#농림 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/농림.jpg");
            studio.html("제작사: Frontier Works");
            gerne.html("장르: 학원물, 러브코미디");
            episodes.html("방영회수: 12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 11/1~29/3/2014     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#논논비요리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/논논비요리.jpg");
            studio.html("제작사: Silver Link");
            gerne.html("장르: 일상물, 학원물, 코미디");
            episodes.html("방영회수: 1기-12화  2기-12화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 1기-8/10~24/12/2013 <br>2기-7/7~22/10/2015                ");
        },timeout);
    des.slideDown();
    });
$("#월간소녀-노자키-군 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/월간소녀-노자키-군.jpg");
            studio.html("제작사: Doga Kobo");
            gerne.html("장르: 러브코미디, 일상물, 학원물");
            episodes.html("방영회수: 12화");
            source.html("원작: 4컷 만화");
            time.html("방영기간: <br> 7/7~22/10/2014     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#빙과 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/빙과.jpg");
            studio.html("제작사:쿄토 애니매이션");
            gerne.html("장르: 미스터리, 일상물, 학원물");
            episodes.html("방영회수: 22화");
            source.html("원작: 소설");
            time.html("방영기간: <br> 23/4~17/10/2012    <br>            ");
        },timeout);
    des.slideDown();
    });
$("#내-여자친구와-소꿉친구가-완전-수라장 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/내-여자친구와-소꿉친구가-완전-수라장.jpg");
            studio.html("제작사: A-1 Pictures");
            gerne.html("장르: Harem, 러브코미디, 학원물");
            episodes.html("방영회수: 13화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 6/1~31/3/2013      <br>          ");
        },timeout);
    des.slideDown();
    });
$("#시원찮은-그녀를-위한-육성방법 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/시원찮은-그녀를-위한-육성방법.jpg");
            studio.html("제작사:A-1 Pictures");
            gerne.html("장르: Harem, 러브코미디, 학원물");
            episodes.html("방영회수: 12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-16/1~27/3/2015  <br>              ");
        },timeout);
    des.slideDown();
    });
$("#기생수 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/기생수.jpg");
            studio.html("제작사: 매드하우스");
            gerne.html("장르: 액션, 호러, 심리물, 드라마, SF, 고어");
            episodes.html("방영회수: 24화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 9/10/2014~26/3/2015<br>                ");
        },timeout);
    des.slideDown();
    });
$("#WORKING > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/WORKING.jpg");
            studio.html("제작사: A-1 Pictures");
            gerne.html("장르: 코미디, 일상물");
            episodes.html("방영회수: 1기-13화 2기-13화 <br> Season 3-13화 +OVA");
            source.html("원작: 4컷 만화");
            time.html("방영기간: <br> 1기-4/4~27/6/2010   <br>          2기-8/1~24/12/2011 <br> Season 3-5/7~27/10/2015  <br> OVA-30/3/2016");
        },timeout);
    des.slideDown();
    });
$("#GJ부 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/GJ부.jpg");
            studio.html("제작사: Doga Kobo");
            gerne.html("장르: 코미디, 학원물, 일상물");
            episodes.html("방영회수: 12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 10/1~28/3/2013     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#아마기-브릴리언트-파크 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/아마기-브릴리언트-파크.jpg");
            studio.html("제작사: 쿄토 애니매이션");
            gerne.html("장르: 코미디, 판타지");
            episodes.html("방영회수: 13화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 7/8~26/12/2014     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#PSYCHO-PASS > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/PSYCHO-PASS.jpg");
            studio.html("제작사:Production I.G");
            gerne.html("장르: 액션, 심리물, SF, Police");
            episodes.html("방영회수: 1기-22화 2기-11화");
            source.html("원작:Production I.G 오리지널");
            time.html("방영기간: <br> 1기-12/8/2012~22/3/2013        <br>         2기-10/10~19/12/2014");
        },timeout);
    des.slideDown();
    });
$("#경계의-저편 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/경계의-저편.jpg");
            studio.html("제작사: 쿄토 애니매이션");
            gerne.html("장르: 액션, 일상물, 판타지");
            episodes.html("방영회수: 12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 3/10~19/12/2013    <br>            ");
        },timeout);
    des.slideDown();
    });
$("#DEATH-NOTE > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/DEATH-NOTE.jpg");
            studio.html("제작사: 매드하우스");
            gerne.html("장르: 심리물, Police, 스릴러, <br> 미스터리");
            episodes.html("방영회수: 37화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 4/10~27/6/2007     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#미확인으로-진행형 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/미확인으로-진행형.jpg");
            studio.html("제작사: Doga Kobo");
            gerne.html("장르: 러브코미디, 일상물, 학원물");
            episodes.html("방영회수: 12화");
            source.html("원작: 4컷 만화");
            time.html("방영기간: <br> 9/1~27/3/2014      <br>          ");
        },timeout);
    des.slideDown();
    });

$("#나만이-없는-거리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/나만이-없는-거리.jpg");
            studio.html("제작사: A-1 Pictures");
            gerne.html("장르: 미스터리, 심리물");
            episodes.html("방영회수: 12화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 8/1~25/3/2016      <br>          ");
        },timeout);
    des.slideDown();
    });

$("#학교생활 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/학교생활.jpg");
            studio.html("제작사: Lerche");
            gerne.html("장르: 미스터리, 호러, 일상물, 심리물, 학원물");
            episodes.html("방영회수: 12화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 9/7~24/10/2015     <br>           ");
        },timeout);
    des.slideDown();
    });

$("#건어물-여동생-우마루-짱 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/건어물-여동생-우마루-짱.jpg");
            studio.html("제작사: Doga Kobo");
            gerne.html("장르: 학원물, 코미디, 일상물");
            episodes.html("방영회수: 12화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 9/7~24/10/2010     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#데스-퍼레이드 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/데스-퍼레이드.jpg");
            studio.html("제작사: 매드하우스");
            gerne.html("장르: 드라마, 미스터리, 심리물, 스릴러");
            episodes.html("방영회수: 12화");
            source.html("원작: 매드하우스 오리지널");
            time.html("방영기간: <br> 10/1~28/3/2015     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#페이트-제로 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/페이트-제로.jpg");
            studio.html("제작사: ufotable");
            gerne.html("장르: 판타지, 액션, 고어");
            episodes.html("방영회수: 1기-13화 2기-12화");
            source.html("원작: 라이트 노벨");
            time.html("방영기간: <br> 1기-2/10~25/12/2011 <br>                2기-8/4~24/6/2012");
        },timeout);
    des.slideDown();
    });
$("#페이트-스테이-나이트-Unlimited-Blade-Works > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/페이트-스테이-나이트-Unlimited-Blade-Works.jpg");
            studio.html("제작사: ufotable");
            gerne.html("장르: 판타지, 액션, 고어");
            episodes.html("방영회수: 1기-12화 2기-13화");
            source.html("원작: Visual Novel");
            time.html("방영기간: <br> 1기-12/10~28/12/2014<br>                 2기-5/4~28/6/2015");
        },timeout);
    des.slideDown();
    });
$("#페이트-스테이-나이트-Heavens-Feel > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/페이트-스테이-나이트-Heaven's-Feel.jpg");
            studio.html("제작사: ufotable");
            gerne.html("장르: 판타지, 액션, 고어");
            episodes.html("방영회수: 영화");
            source.html("원작: Visual Novel");
            time.html("방영기간: 2017               <br> ");
        },timeout);
    des.slideDown();
    });

$("#아이돌-마스터 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/아이돌-마스터.jpg");
            studio.html("제작사: A-1 Pictures");
            gerne.html("장르: 코미디, Idol, Music, 드라마");
            episodes.html("방영회수: 25화");
            source.html("원작: Game");
            time.html("방영기간: 8/7~23/12/2011");
        },timeout);
    des.slideDown();
    });

$("#오레모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/오레모노가타리.jpg");
            studio.html("제작사: 매드하우스");
            gerne.html("장르: 코미디, 로멘스");
            episodes.html("방영회수: 24화");
            source.html("원작: 만화");
            time.html("방영기간: 9/4~24/10/2015");
        },timeout);
    des.slideDown();
    });
$("#신만이-아는-세계 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/신만이-아는-세계.jpg");
            studio.html("제작사: Manglobe");
            gerne.html("장르: 코미디, Harem, 로멘스, 판타지");
            episodes.html("방영회수: <br> 1기-12화 <br> 2기-12화 <br> Season 3-12화");
            source.html("원작: 만화");
            time.html("방영기간: <br> 1기-7/10~23/12/2010 <br> 2기-12/4~28/6/2011 <br> Season 3-9/7~24/9/2013");
        },timeout);
    des.slideDown();
    });
$("#4월은-너의-거짓말 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/4월은-너의-거짓말.jpg");
            studio.html("제작사: A-1 Pictures");
            gerne.html("장르: 드라마, 로멘스, Music, 학원물");
            episodes.html("방영회수: 22화");
            source.html("원작: 만화");
            time.html("방영기간: 10/10~2014~20/3/2015");
        },timeout);
    des.slideDown();
    });
$("#아노하나 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/아노하나.jpg");
            studio.html("제작사: A-1 Pictures");
            gerne.html("장르: 드라마, 일상물");
            episodes.html("방영회수: 11화");
            source.html("원작: A-1 Pictures 오리지널");
            time.html("방영기간: 15/4~24/6/2011");
        },timeout);
    des.slideDown();
        });

$("#충사 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/충사.jpg");
            studio.html("제작사: Artland");
            gerne.html("장르: 일상물, 어드벤처, History, 판타지, 미스터리");
            episodes.html("방영회수: <br> 1기-26화 <br> Zoku Shou-10화 <br> 2기-10화");
            source.html("원작: 만화");
            time.html("방영기간: <span style=\"font-size:13px;\"><br> 1기-23/10/2005~19/6/2006 <br> Zoku Shou-5/4~21/6/2014 <br> 2기-19/10~21/12/2014</span>");
        },timeout);
    des.slideDown();
    });
});