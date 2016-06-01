$(document).ready(function(){
    var des = $("#Description");
    var studio = $("#Studio");
    var gerne = $("#Gerne");
    var episodes = $("#Episodes");
    var source = $("#Source");
    var time = $("#Time");
    var image = $("#Description img");
    $("#Description").click(function(){
        $(this).slideUp();
    });
	$("#스즈미야-하루히의-우울 > img").click(function(){
        image.attr("src","title-image/스즈미야-하루히의-우울.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 쿄토 애니매이션");
        gerne.html("장르: 학원물, 로멘스, SF,코미디");
        episodes.html("방송회자: 1기-14화 2기-14화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-3/4~3/7/2006    <br>              2기-22/5~11/9/2009");
        des.slideDown();
    });
    $("#중2병이라도-사랑이-하고-싶어 > img").click(function(){
        image.attr("src","title-image/중2병이라도-사랑이-하고-싶어.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 쿄토 애니매이션");
        gerne.html("장르: 코미디, 학원물, 일상물");
        episodes.html("방송회자: 1기-12화 2기 12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-4/10~20/12/2012 <br>                2기-9/1/~27/3/2014");
        des.slideDown();
    });
    $("#아카메가-벤다 > img").click(function(){
        image.attr("src","title-image/아카메가-벤다.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: White Fox");
        gerne.html("장르: 액션, 어드번처, 고어");
        episodes.html("방송회자: 1기-24화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 1기-7/7~15/12/2014  <br>              ");
        des.slideDown();
    });
    $("#역시-내-청춘-러브코메디는-잘못됐다 > img").click(function(){
        image.attr("src","title-image/역시-내-청춘-러브코메디는-잘못됐다.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 브레인즈 베이스, feel");
        gerne.html("장르: 로맨스, 코미디, 학원물");
        episodes.html("방송회자: 1기-13화 2기-13화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-5/4~28/6/2013   <br>              2기-3/4~26/6/2015");
        des.slideDown();
    });
    $("#진격의-거인 > img").click(function(){
        image.attr("src","title-image/진격의-거인.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: WIT Studio, <br> Production I.G");
        gerne.html("장르: 액션, 드라마, 판타지, 고어");
        episodes.html("방송회자: 1기-25화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 7/4~29/9/2013      <br>         ");
        des.slideDown();
    });
$("#노-게임-노-라이프 > img").click(function(){
        image.attr("src","title-image/노-게임-노-라이프.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 매드하우스");
        gerne.html("장르: 어드벤처, 심리물, 코미디, 판타지");
        episodes.html("방송회자: 1기-12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-9/4/~25/6/2014  <br>             ");
        des.slideDown();
    });
$("#역경무뢰-카이지 > img").click(function(){
        image.attr("src","title-image/역경무뢰-카이지.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 매드하우스");
        gerne.html("장르: 스릴러, 심리물");
        episodes.html("방송회자: 1기-26화 2기-26화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 1기-3/10~2/4/2008   <br>              2기-6/4~28/10/2011");
        des.slideDown();
    });

$("#KILL-LA-KILL > img").click(function(){
        image.attr("src","title-image/KILL-LA-KILL.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: TRIGGER");
        gerne.html("장르: 액션, 코미디, 학원물");
        episodes.html("방송회자: 24화");
        source.html("원작: TRIGGER 오리지날");
        time.html("방영기간: <br> 1기-4/10/2013~28/3/2014  <br>              ");
        des.slideDown();
    });

$("#SteinsGate > img").click(function(){
        image.attr("src","title-image/Steins;Gate.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: White Fox");
        gerne.html("장르: SF, 스릴러");
        episodes.html("방송회자: 1기-24화");
        source.html("원작: 게임");
        time.html("방영기간: <br> 1기-6/4~14/10/2011  <br>              ");
        des.slideDown();
    });

$("#원펀맨 > img").click(function(){
        image.attr("src","title-image/원펀맨.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 매드하우스");
        gerne.html("장르: 액션, 코미디");
        episodes.html("방송회자: 1기-12화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 1기-5/10~21/12/2015 <br>               ");
        des.slideDown();
    });
$("#마법소녀-마도카-마기카 > img").click(function(){
        image.attr("src","title-image/마법소녀-마도카-마기카.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 드라마, 호러, 스릴러, <br>심리물");
        episodes.html("방송회자: 1기-12화");
        source.html("원작: 샤프트 오리지널");
        time.html("방영기간: <br> 1기-7/1~22/4/2011   <br>             ");
        des.slideDown();
    });
$("#Another > img").click(function(){
        image.attr("src","title-image/Another.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: P.A. Works");
        gerne.html("장르: 호러, 미스터리, 학원물, 스릴러");
        episodes.html("방송회자: 1기-12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-10/1~27/3/2012  <br>              ");
        des.slideDown();
    });
$("#SHIRO-BAKO > img").click(function(){
        image.attr("src","title-image/SHIRO-BAKO.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: P.A. Works");
        gerne.html("장르: 코미디, 드라마");
        episodes.html("방송회자: 1기-24화");
        source.html("원작: P.A. Works 오리지날");
        time.html("방영기간: <br> 1기-9/10/2014~26/3/2015           <br>     ");
        des.slideDown();
    });
$("#블랙-불릿 > img").click(function(){
        image.attr("src","title-image/블랙-불릿.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 키네마 시트러스");
        gerne.html("장르: 액션, SF");
        episodes.html("방송회자: 1기-13화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-8/4/2014~1/7/2014  <br>               ");
        des.slideDown();
    });
$("#모노가타리-시리즈 > img").on("click",function(){
        des.css({
            "width":"400px",
            "left":"70%"
        });
        image.attr("src","title-image/모노가타리-시리즈.jpg");
        des.slideUp();
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 86화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: 2009~     <br>  ");
        des.slideDown();
    });
$("#바케모노가타리 > img").click(function(){
        image.attr("src","title-image/바케모노가타리.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 15화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 3/7/2009~6/25/2010 <br>               ");
        des.slideDown();
    });
$("#니세모노가타리 > img").click(function(){
        image.attr("src","title-image/니세모노가타리.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 11화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 8/1~18/3/2012      <br>          ");
        des.slideDown();
    });
$("#네코모노가타리-흑 > img").click(function(){
        image.attr("src","title-image/네코모노가타리-흑.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 4화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 31/12/2012         <br>       ");
        des.slideDown();
    });
$("#모노가타리-시리즈-2nd-Season > img").click(function(){
        image.attr("src","title-image/모노가타리-시리즈-2nd-Season.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 26화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 7/7~29/12/2013     <br>           ");
        des.slideDown();
    });
$("#츠키모노가타리 > img").click(function(){
        image.attr("src","title-image/츠키모노가타리.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 4화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: 31/12/2014         <br>      ");
        des.slideDown();
    });
$("#오와리모노가타리 > img").click(function(){
        image.attr("src","title-image/오와리모노가타리.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 4/10~20/12/2015    <br>            ");
        des.slideDown();
    });
$("#키즈모노가타리-철혈 > img").click(function(){
        image.attr("src","title-image/키즈모노가타리-철혈.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 극장판");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: 8/1/2016           <br>     ");
        des.slideDown();
    });
$("#키즈모노가타리-열혈 > img").click(function(){
        image.attr("src","title-image/키즈모노가타리-열혈.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 극장판")
        studio.html("제작사: 샤프트");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: 2016 여름            <br>    ");
        des.slideDown();
    });
$("#코요미모노가타리 > img").click(function(){
        image.attr("src","title-image/코요미모노가타리.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스, 괴기");
        episodes.html("방송회자: 12화")
        studio.html("제작사: 샤프트");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 10/1~27/3/2016     <br>           ");
        des.slideDown();
    });
$("#FULL-METAL-ALCHEMIST > img").click(function(){
        image.attr("src","title-image/FULL-METAL-ALCHEMIST.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 본즈");
        gerne.html("장르: 액션, 어드벤처, 드라마");
        episodes.html("방송회자: 64화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 5/4/2009~4/7/2010  <br>              ");
        des.slideDown();
    });
$("#케이온 > img").click(function(){
        image.attr("src","title-image/K-ON.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 쿄토 애니매이션");
        gerne.html("장르: 일상물, 학원물, 음악");
        episodes.html("방송회자: 1기-13화 2기-26화");
        source.html("원작: 4컷 만화");
        time.html("방영기간: <br> 1기-43/4~26/6/2009 <br> 2기-7/4~29/10/2010                ");
        des.slideDown();
    });
$("#혈계전선 > img").click(function(){
        image.attr("src","title-image/혈계전선.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사:본즈");
        gerne.html("장르: 액션, 판타지");
        episodes.html("방송회자: 12화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 5/4~4/10/2015      <br>          ");
        des.slideDown();
    });
$("#천원돌파-그렌라간 > img").click(function(){
        image.attr("src","title-image/천원돌파-그렌라간.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사:가이낙스");
        gerne.html("장르: 메카, 액션, 어드벤처");
        episodes.html("방송회자: 27화");
        source.html("원작: 가이낙스 오리지날");
        time.html("방영기간: <br> 1/4~3010/2007      <br>          ");
        des.slideDown();
    });
$("#식극의-소마 > img").click(function(){
        image.attr("src","title-image/식극의-소마.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: J.C.Staff");
        gerne.html("장르: 학원물, 에로");
        episodes.html("방송회자: 1기-24화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 1기-4/4~26/10/2015  <br>              ");
        des.slideDown();
    });
$("#미래일기 > img").click(function(){
        image.attr("src","title-image/미래일기.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 아스리드");
        gerne.html("장르: 미스터리, 스릴러, 호러, <br> 심리물, 고어");
        episodes.html("방송회자: 26화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 9/10/2011~15/4/2012<br>                ");
        des.slideDown();
    });
$("#니세코이 > img").click(function(){
        image.attr("src","title-image/니세코이.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 로멘스, 코미디, 하렘, 학원물");
        episodes.html("방송회자: 1기-20화 2기-12화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 1기-11/1~5/24/2014  <br>               2기-10/4~26/6/2015");
        des.slideDown();
    });
$("#토라도라 > img").click(function(){
        image.attr("src","title-image/토라도라.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: J.C.Staff");
        gerne.html("장르: 로멘스, 코미디, 학원물, 일상물");
        episodes.html("방송회자:25화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 2/10/2008~26/3/2009<br>                ");
        des.slideDown();
    });
$("#메카쿠시티-엑터즈 > img").click(function(){
        image.attr("src","title-image/메카쿠시티-엑터즈.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 샤프트");
        gerne.html("장르: 미스터리, 로맨스");
        episodes.html("방송회자: 12화");
        source.html("원작: 음악");
        time.html("방영기간: <br> 13/4/~29/6/2014    <br>           ");
        des.slideDown();
    });
$("#기어와라-냐루코-양 > img").click(function(){
        image.attr("src","title-image/기어와라-냐루코-양.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: Xebec");
        gerne.html("장르: 코미디, 로맨스, SF");
        episodes.html("방송회자: 1기-12화 2기-12화 +OVA");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-10/4~26/6/2012  <br>               2기-8/4~1/7/2013  <br> OVA-19/6/2015" );  
        des.slideDown();
    });
$("#농림 > img").click(function(){
        image.attr("src","title-image/농림.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사:프론티어 워크스");
        gerne.html("장르: 학원물, 로멘스, 코미디, 애로");
        episodes.html("방송회자: 12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 11/1~29/3/2014     <br>           ");
        des.slideDown();
    });
$("#논논비요리 > img").click(function(){
        image.attr("src","title-image/논논비요리.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 실버 링크");
        gerne.html("장르: 일상물, 학원물, 코미디");
        episodes.html("방송회자: 1기-12화  2기-12화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 1기-8/10~24/12/2013 <br>2기-7/7~22/10/2015                ");
        des.slideDown();
    });
$("#월간소녀-노자키-군 > img").click(function(){
        image.attr("src","title-image/월간소녀-노자키-군.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 동화공방");
        gerne.html("장르: Romance, Comedy, 일상물, 학원물");
        episodes.html("방송회자: 12화");
        source.html("원작: 4컷 만화");
        time.html("방영기간: <br> 7/7~22/10/2014     <br>           ");
        des.slideDown();
    });
$("#빙과 > img").click(function(){
        image.attr("src","title-image/빙과.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사:쿄토 애니매이션");
        gerne.html("장르: 미스터리, 일상물, 학원물");
        episodes.html("방송회자: 22화");
        source.html("원작: 소설");
        time.html("방영기간: <br> 23/4~17/10/2012    <br>            ");
        des.slideDown();
    });
$("#내-여자친구와-소꿉친구가-완전-수라장 > img").click(function(){
        image.attr("src","title-image/내-여자친구와-소꿉친구가-완전-수라장.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: A-1 Pictures");
        gerne.html("장르: 하렘, 로멘스, 코미디, 학원물");
        episodes.html("방송회자: 13화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 6/1~31/3/2013      <br>          ");
        des.slideDown();
    });
$("#시원찮은-그녀를-위한-육성방법 > img").click(function(){
        image.attr("src","title-image/시원찮은-그녀를-위한-육성방법.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사:A-1 Pictures");
        gerne.html("장르: 하렘, 로멘스, 코미디, 학원물");
        episodes.html("방송회자: 12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-16/1~27/3/2015  <br>              ");
        des.slideDown();
    });
$("#기생수 > img").click(function(){
        image.attr("src","title-image/기생수.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 매드하우스");
        gerne.html("장르: 액션, 호러, 심리물, 드라마, SF, 고어");
        episodes.html("방송회자: 24화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 9/10/2014~26/3/2015<br>                ");
        des.slideDown();
    });
$("#WORKING > img").click(function(){
        image.attr("src","title-image/WORKING.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: A-1 Pictures");
        gerne.html("장르: 코미디, 일상물");
        episodes.html("방송회자: 1기-13화 2기-13화 <br> 3기-13화 OVA");
        source.html("원작: 4컷 만화");
        time.html("방영기간: <br> 1기-4/4~27/6/2010   <br>          2기-8/1~24/12/2011 <br> 3기-5/7~27/10/2015  <br> OVA-30/3/2016");
        des.slideDown();
    });
$("#GJ부 > img").click(function(){
        image.attr("src","title-image/GJ부.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 동화공방");
        gerne.html("장르: 코미디, 학원물, 일상물");
        episodes.html("방송회자: 12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 10/1~28/3/2013     <br>           ");
        des.slideDown();
    });
$("#아마기-브릴리언트-파크 > img").click(function(){
        image.attr("src","title-image/아마기-브릴리언트-파크.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 쿄토 애니매이션");
        gerne.html("장르: 코미디, 판타지");
        episodes.html("방송회자: 13화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 7/8~26/12/2014     <br>           ");
        des.slideDown();
    });
$("#PSYCHO-PASS > img").click(function(){
        image.attr("src","title-image/PSYCHO-PASS.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: Production I.G");
        gerne.html("장르: 액션, 심리물, SF, 수사물");
        episodes.html("방송회자: 1기-22화 2기-11화");
        source.html("원작: Production I.G 오리지날");
        time.html("방영기간: <br> 1기-12/8/2012~22/3/2013        <br>         2기-10/10~19/12/2014");
        des.slideDown();
    });
$("#경계의-저편 > img").click(function(){
        image.attr("src","title-image/경계의-저편.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 쿄토 애니매이션");
        gerne.html("장르: 액션, 일상물, 판타지");
        episodes.html("방송회자: 12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 3/10~19/12/2013    <br>            ");
        des.slideDown();
    });
$("#DEATH-NOTE > img").click(function(){
        image.attr("src","title-image/DEATH-NOTE.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 매드하우스");
        gerne.html("장르: 심리물, 수사물, 스릴러");
        episodes.html("방송회자: 37화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 4/10~27/6/2007     <br>           ");
        des.slideDown();
    });
$("#미확인으로-진행형 > img").click(function(){
        image.attr("src","title-image/미확인으로-진행형.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 동화공방");
        gerne.html("장르: 러브코미디, 일상물, 학원물");
        episodes.html("방송회자: 12화");
        source.html("원작: 4컷 만화");
        time.html("방영기간: <br> 9/1~27/3/2014      <br>          ");
        des.slideDown();
    });

$("#나만이-없는-거리 > img").click(function(){
        image.attr("src","title-image/나만이-없는-거리.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: A-1 Pictures");
        gerne.html("장르: 미스터리, 심리물");
        episodes.html("방송회자: 12화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 8/1~25/3/2016      <br>          ");
        des.slideDown();
    });

$("#학교생활 > img").click(function(){
        image.attr("src","title-image/학교생활.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: Lerche");
        gerne.html("장르: 미스터리, 호러, 일상물, 심리물, 학원물");
        episodes.html("방송회자: 12화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 9/7~24/10/2015     <br>           ");
        des.slideDown();
    });

$("#건어물-여동생-우마루-짱 > img").click(function(){
        image.attr("src","title-image/건어물-여동생-우마루-짱.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 동화공방");
        gerne.html("장르: 학원물, 코미디, 일상물");
        episodes.html("방송회자: 12화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 9/7~24/10/2010     <br>           ");
        des.slideDown();
    });
$("#데스-퍼레이드 > img").click(function(){
        image.attr("src","title-image/데스-퍼레이드.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 매드하우스");
        gerne.html("장르: 드라마, 미스터리, 심리물, <br> 스릴러, 일상물");
        episodes.html("방송회자: 12화");
        source.html("원작: 매드하우스 오리지날");
        time.html("방영기간: <br> 10/1~28/3/2015     <br>           ");
        des.slideDown();
    });
$("#페이트-제로 > img").click(function(){
        image.attr("src","title-image/페이트-제로.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: ufotable");
        gerne.html("장르: 판타지, 액션, 고어");
        episodes.html("방송회자: 1기-13화 2기-12화");
        source.html("원작: 라이트 노벨");
        time.html("방영기간: <br> 1기-2/10~25/12/2011 <br>                2기-8/4~24/6/2012");
        des.slideDown();
    });
$("#페이트-스테이-나이트-Unlimited-Blade-Works > img").click(function(){
        image.attr("src","title-image/페이트-스테이-나이트-Unlimited-Blade-Works.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: ufotable");
        gerne.html("장르: 판타지, 액션, 고어");
        episodes.html("방송회자: 1기-12화 2기-13화");
        source.html("원작: 비주얼 노벨");
        time.html("방영기간: <br> 1기-12/10~28/12/2014<br>                 2기-5/4~28/6/2015");
        des.slideDown();
    });
$("#페이트-스테이-나이트-Heavens-Feel > img").click(function(){
        image.attr("src","title-image/페이트-스테이-나이트-Heaven's-Feel.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: ufotable");
        gerne.html("장르: 판타지, 액션, 고어");
        episodes.html("방송회자: 극장판");
        source.html("원작: 비주얼 노벨");
        time.html("방영기간: 2017               <br> ");
        des.slideDown();
    });

$("#아이돌-마스터 > img").click(function(){
        image.attr("src","title-image/아이돌-마스터.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: A-1 Pictures");
        gerne.html("장르: 코미디, 아이돌, 음악, 드라마");
        episodes.html("방송회자: 25화");
        source.html("원작: 게임");
        time.html("방영기간: 8/7~23/12/2011");
        des.slideDown();
    });

$("#오레모노가타리 > img").click(function(){
        image.attr("src","title-image/오레모노가타리.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 매드 하우스");
        gerne.html("장르: 코미디, 로맨스");
        episodes.html("방송회자: 24화");
        source.html("원작: 만화");
        time.html("방영기간: 9/4~24/10/2015");
        des.slideDown();
    });
$("#신만이-아는-세계 > img").click(function(){
        image.attr("src","title-image/신만이-아는-세계.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: 맨글로브(파산)");
        gerne.html("장르: 코미디, 하렘, 로맨스, 판타지");
        episodes.html("방송회자: 1기-12화 2기-12화 3기(여신편)-12화");
        source.html("원작: 만화");
        time.html("방영기간: 1기-7/10~23/12/2010 2기-12/4~28/6/2011 3기-9/7~24/9/2013");
        des.slideDown();
    });
$("#4월은-너의-거짓말 > img").click(function(){
        image.attr("src","title-image/4월은-너의-거짓말.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: A-1 Pictures");
        gerne.html("장르: 드라마, 로맨스, 음악, 학원물");
        episodes.html("방송회자: 22화");
        source.html("원작: 만화");
        time.html("방영기간: 10/10~2014~20/3/2015");
        des.slideDown();
    });
$("#아노하나 > img").click(function(){
        image.attr("src","title-image/아노하나.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: A-1 Pictures");
        gerne.html("장르: 드라마, 일상물");
        episodes.html("방송회자: 11화");
        source.html("원작: A-1 Pictures 오리지날");
        time.html("방영기간: 15/4~24/6/2011");
        des.slideDown();
        });

$("#충사 > img").click(function(){
        image.attr("src","title-image/충사.jpg");
        des.slideUp();
        des.css({
            "width":"250px",
            "left":"82.5%"
        });
        studio.html("제작사: Artland");
        gerne.html("장르: 일상물, 어드벤처, 판타지, <br> 미스터리");
        episodes.html("방송회자: 1기-26화 속장-10화 2기-10화");
        source.html("원작: 만화");
        time.html("방영기간: <br> 1기-23/10/2005~19/6/2006 <br> 속장-5/4~21/6/2014 <br> 2기-19/10~21/12/2014");
        des.slideDown();
    });
});