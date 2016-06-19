$(document).ready(function(){
    var source = $("#Source");
    var time = $("#Time");
    var image = $("#Description img");
    var episodes = $("#Episodes");
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
            studio.html("Production: Kyoto Animation");
            gerne.html("Gerne: School, RomCom, SF");
            episodes.html("Episodes: Movie");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 6/2/2010");
        },timeout);
    des.slideDown();
    });
    $("#스즈미야-하루히의-우울 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/스즈미야-하루히의-우울.jpg");
            studio.html("Production: Kyoto Animation");
            gerne.html("Gerne: School, RomCom, SF");
            episodes.html("Episodes: Season 1-14 Episodes Season 2-14 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-3/4~3/7/2006    <br>              Season 2-22/5~11/9/2009");
        },timeout);
    des.slideDown();
    });
    $("#중2병이라도-사랑이-하고-싶어 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/중2병이라도-사랑이-하고-싶어.jpg");
            studio.html("Production: Kyoto Animation");
            gerne.html("Gerne: Comedy, School, Slice of Life");
            episodes.html("Episodes: Season 1-12 Episodes Season 2 12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-4/10~20/12/2012 <br>                Season 2-9/1/~27/3/2014");
        },timeout);
    des.slideDown();
    });
    $("#아카메가-벤다 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/아카메가-벤다.jpg");
            studio.html("Production: White Fox");
            gerne.html("Gerne: Action, Adventure, Fantasy");
            episodes.html("Episodes: Season 1-24 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> Season 1-7/7~15/12/2014  <br>              ");
        },timeout);
    des.slideDown();
    });
    $("#역시-내-청춘-러브코메디는-잘못됐다 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/역시-내-청춘-러브코메디는-잘못됐다.jpg");
            studio.html("Production: Brain's Base, feel");
            gerne.html("Gerne: RomCom, School");
            episodes.html("Episodes: Season 1-13 Episodes Season 2-13 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-5/4~28/6/2013   <br>              Season 2-3/4~26/6/2015");
        },timeout);
    des.slideDown();
    });
    $("#진격의-거인 > img").click(function(){
        des.slideUp();
        timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/진격의-거인.jpg");
            studio.html("Production: WIT Studio, <br> Production I.G");
            gerne.html("Gerne: Action, Drama, Fantasy, Gore");
            episodes.html("Episodes: Season 1-25 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 7/4~29/9/2013      <br>         ");
        },timeout);
    des.slideDown();
    });
$("#노-게임-노-라이프 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/노-게임-노-라이프.jpg");
            studio.html("Production: MadHouse");
            gerne.html("Gerne: Adventure, Psychological, Comedy, Fantasy");
            episodes.html("Episodes: Season 1-12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-9/4/~25/6/2014  <br>             ");
        },timeout);
    des.slideDown();
    });
$("#역경무뢰-카이지 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/역경무뢰-카이지.jpg");
            studio.html("Production: MadHouse");
            gerne.html("Gerne: Thriller, Psychological");
            episodes.html("Episodes: Season 1-26 Episodes Season 2-26 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> Season 1-3/10~2/4/2008   <br>              Season 2-6/4~28/10/2011");
        },timeout);
    des.slideDown();
    });

$("#KILL-LA-KILL > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/KILL-LA-KILL.jpg");
            studio.html("Production: TRIGGER");
            gerne.html("Gerne: Action, Comedy, School");
            episodes.html("Episodes: 24 Episodes");
            source.html("Source: TRIGGER Original");
            time.html("Aired: <br> Season 1-4/10/2013~28/3/2014  <br>              ");
        },timeout);
    des.slideDown();
    });

$("#SteinsGate > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/Steins;Gate.jpg");
            studio.html("Production: White Fox");
            gerne.html("Gerne: SF, Thriller");
            episodes.html("Episodes: Season 1-24 Episodes");
            source.html("Source: Game");
            time.html("Aired: <br> Season 1-6/4~14/10/2011  <br>              ");
        },timeout);
    des.slideDown();
    });

$("#원펀맨 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/원펀맨.jpg");
            studio.html("Production: MadHouse");
            gerne.html("Gerne: Action, Comedy");
            episodes.html("Episodes: Season 1-12 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> Season 1-5/10~21/12/2015 <br>               ");
        },timeout);
    des.slideDown();
    });
$("#마법소녀-마도카-마기카 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/마법소녀-마도카-마기카.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Drama, Magical girls, Thriller, Psychological");
            episodes.html("Episodes: Season 1-12 Episodes");
            source.html("Source: Shaft Original");
            time.html("Aired: <br> Season 1-7/1~22/4/2011   <br>             ");
        },timeout);
    des.slideDown();
    });
$("#Another > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/Another.jpg");
            studio.html("Production: P.A. Works");
            gerne.html("Gerne: Horror, Mystery, School, Thriller");
            episodes.html("Episodes: Season 1-12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-10/1~27/3/2012  <br>              ");
        },timeout);
    des.slideDown();
    });
$("#SHIRO-BAKO > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/SHIRO-BAKO.jpg");
            studio.html("Production: P.A. Works");
            gerne.html("Gerne: Comedy, Drama");
            episodes.html("Episodes: 24 Episodes");
            source.html("Source: P.A. Works Original");
            time.html("Aired: 9/10/2014~26/3/2015           <br>     ");
        },timeout);
    des.slideDown();
    });
$("#블랙-불릿 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/블랙-불릿.jpg");
            studio.html("Production: Kinema Citrus");
            gerne.html("Gerne: Action, SF");
            episodes.html("Episodes: Season 1-13 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-8/4/2014~1/7/2014  <br>               ");
        },timeout);
    des.slideDown();
    });
$("#모노가타리-시리즈").on("click",function(){
    des.slideUp();
    timeoutreset();
        setTimeout(function(){
            image.attr("src","title-image/모노가타리-시리즈.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, Romance, Supernatural, Psychological");
            episodes.html("Episodes: 86 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: 2009~     <br>  ");
        },timeout);
    des.slideDown();
    });
$("#바케모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/바케모노가타리.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, Romance, Supernatural, Psychological");
            episodes.html("Episodes: 15 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 3/7/2009~6/25/2010 <br>               ");
        },timeout);
    des.slideDown();
    });
$("#니세모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/니세모노가타리.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, Supernatural, Psychological");
            episodes.html("Episodes: 11 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 8/1~18/3/2012      <br>          ");
        },timeout);
    des.slideDown();
    });
$("#네코모노가타리-흑 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/네코모노가타리-흑.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, Supernatural, Psychological");
            episodes.html("Episodes: 4 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 31/12/2012         <br>       ");
        },timeout);
    des.slideDown();
    });
$("#모노가타리-시리즈-2nd-Season > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/모노가타리-시리즈-2nd-Season.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, Supernatural, Psychological");
            episodes.html("Episodes: 26 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 7/7~29/12/2013     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#츠키모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/츠키모노가타리.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, Supernatural, Psychological");
            episodes.html("Episodes: 4 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: 31/12/2014         <br>      ");
        },timeout);
    des.slideDown();
    });
$("#오와리모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/오와리모노가타리.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, Supernatural, Psychological");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 4/10~20/12/2015    <br>            ");
        },timeout);
    des.slideDown();
    });
$("#키즈모노가타리-철혈 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/키즈모노가타리-철혈.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, Supernatural, Psychological");
            episodes.html("Episodes: Movie");
            source.html("Source: Light Novel");
            time.html("Aired: 8/1/2016           <br>     ");
        },timeout);
    des.slideDown();
    });
$("#키즈모노가타리-열혈 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/키즈모노가타리-열혈.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, Supernatural, Psychological");
            episodes.html("Episodes: Movie")
            studio.html("Production: Shaft");
            source.html("Source: Light Novel");
        time.html("Aired: 2016 Summer            <br>    ");
        },timeout);
    des.slideDown();
    });
$("#코요미모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/코요미모노가타리.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, Supernatural, Psychological");
            episodes.html("Episodes: 12 Episodes")
            studio.html("Production: Shaft");
            source.html("Source: Light Novel");
        time.html("Aired: <br> 10/1~27/3/2016     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#FULL-METAL-ALCHEMIST > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/FULL-METAL-ALCHEMIST.jpg");
            studio.html("Production: Bones");
            gerne.html("Gerne: Action, Adventure, Drama, Psychological");
            episodes.html("Episodes: 64 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 5/4/2009~4/7/2010  <br>              ");
        },timeout);
    des.slideDown();
    });
$("#케이온 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/K-ON.jpg");
            studio.html("Production: Kyoto Animation");
            gerne.html("Gerne: Slice of Life, School, Music");
            episodes.html("Episodes: Season 1-13 Episodes Season 2-26 Episodes");
            source.html("Source: 4-koma Manga");
            time.html("Aired: <br> Season 1-43/4~26/6/2009 <br> Season 2-7/4~29/10/2010                ");
        },timeout);
    des.slideDown();
    });
$("#혈계전선 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/혈계전선.jpg");
            studio.html("Production:Bones");
            gerne.html("Gerne: Action, Fantasy");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 5/4~4/10/2015      <br>          ");
        },timeout);
    des.slideDown();
    });
$("#천원돌파-그렌라간 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/천원돌파-그렌라간.jpg");
            studio.html("Production: Gainax");
            gerne.html("Gerne: Mecha, Action, Adventure");
            episodes.html("Episodes: 27 Episodes");
            source.html("Source: Gainax Original");
            time.html("Aired: <br> 1/4~3010/2007      <br>          ");
        },timeout);
    des.slideDown();
    });
$("#식극의-소마 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/식극의-소마.jpg");
            studio.html("Production: J.C.Staff");
            gerne.html("Gerne: School, Food");
            episodes.html("Episodes: Season 1-24 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> Season 1-4/4~26/10/2015  <br>              ");
        },timeout);
    des.slideDown();
    });
$("#미래일기 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/미래일기.jpg");
            studio.html("Production: Asread");
            gerne.html("Gerne: Mystery, Thriller, Horror, Psychological");
            episodes.html("Episodes: 26 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 9/10/2011~15/4/2012<br>                ");
        },timeout);
    des.slideDown();
    });
$("#니세코이 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/니세코이.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: RomCom, Harem, School");
            episodes.html("Episodes: Season 1-20 Episodes Season 2-12 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> Season 1-11/1~5/24/2014  <br>               Season 2-10/4~26/6/2015");
        },timeout);
    des.slideDown();
    });
$("#토라도라 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/토라도라.jpg");
            studio.html("Production: J.C.Staff");
            gerne.html("Gerne: RomCom, School, Slice of Life");
            episodes.html("Episodes:25 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 2/10/2008~26/3/2009<br>                ");
        },timeout);
    des.slideDown();
    });
$("#메카쿠시티-엑터즈 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/메카쿠시티-엑터즈.jpg");
            studio.html("Production: Shaft");
            gerne.html("Gerne: Mystery, romance, SF");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Music");
            time.html("Aired: <br> 13/4/~29/6/2014    <br>           ");
        },timeout);
    des.slideDown();
    });
$("#기어와라-냐루코-양 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/기어와라-냐루코-양.jpg");
            studio.html("Production: Xebec");
            gerne.html("Gerne: Comedy, romance, SF");
            episodes.html("Episodes: Season 1-12 Episodes Season 2-12 Episodes +OVA");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-10/4~26/6/2012  <br>               Season 2-8/4~1/7/2013  <br> OVA-19/6/2015" );  
        },timeout);
    des.slideDown();
    });
$("#농림 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/농림.jpg");
            studio.html("Production: Frontier Works");
            gerne.html("Gerne: School, RomCom");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 11/1~29/3/2014     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#논논비요리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/논논비요리.jpg");
            studio.html("Production: Silver Link");
            gerne.html("Gerne: Slice of Life, School, Comedy");
            episodes.html("Episodes: Season 1-12 Episodes  Season 2-12 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> Season 1-8/10~24/12/2013 <br>Season 2-7/7~22/10/2015                ");
        },timeout);
    des.slideDown();
    });
$("#월간소녀-노자키-군 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/월간소녀-노자키-군.jpg");
            studio.html("Production: Doga Kobo");
            gerne.html("Gerne: RomCom, Slice of Life, School");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: 4-koma Manga");
            time.html("Aired: <br> 7/7~22/10/2014     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#빙과 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/빙과.jpg");
            studio.html("Production:Kyoto Animation");
            gerne.html("Gerne: Mystery, Slice of Life, School");
            episodes.html("Episodes: 22 Episodes");
            source.html("Source: Novel");
            time.html("Aired: <br> 23/4~17/10/2012    <br>            ");
        },timeout);
    des.slideDown();
    });
$("#내-여자친구와-소꿉친구가-완전-수라장 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/내-여자친구와-소꿉친구가-완전-수라장.jpg");
            studio.html("Production: A-1 Pictures");
            gerne.html("Gerne: Harem, RomCom, School");
            episodes.html("Episodes: 13 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 6/1~31/3/2013      <br>          ");
        },timeout);
    des.slideDown();
    });
$("#시원찮은-그녀를-위한-육성방법 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/시원찮은-그녀를-위한-육성방법.jpg");
            studio.html("Production:A-1 Pictures");
            gerne.html("Gerne: Harem, RomCom, School");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-16/1~27/3/2015  <br>              ");
        },timeout);
    des.slideDown();
    });
$("#기생수 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/기생수.jpg");
            studio.html("Production: MadHouse");
            gerne.html("Gerne: Action, Horror, Psychological, Drama, SF, Gore");
            episodes.html("Episodes: 24 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 9/10/2014~26/3/2015<br>                ");
        },timeout);
    des.slideDown();
    });
$("#WORKING > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/WORKING.jpg");
            studio.html("Production: A-1 Pictures");
            gerne.html("Gerne: Comedy, Slice of Life");
            episodes.html("Episodes: Season 1-13 Episodes Season 2-13 Episodes <br> Season 3-13 Episodes +OVA");
            source.html("Source: 4-koma Manga");
            time.html("Aired: <br> Season 1-4/4~27/6/2010   <br>          Season 2-8/1~24/12/2011 <br> Season 3-5/7~27/10/2015  <br> OVA-30/3/2016");
        },timeout);
    des.slideDown();
    });
$("#GJ부 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/GJ부.jpg");
            studio.html("Production: Doga Kobo");
            gerne.html("Gerne: Comedy, School, Slice of Life");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 10/1~28/3/2013     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#아마기-브릴리언트-파크 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/아마기-브릴리언트-파크.jpg");
            studio.html("Production: Kyoto Animation");
            gerne.html("Gerne: Comedy, Fantasy");
            episodes.html("Episodes: 13 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 7/8~26/12/2014     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#PSYCHO-PASS > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/PSYCHO-PASS.jpg");
            studio.html("Production: Production I.G");
            gerne.html("Gerne: Action, Psychological, SF, Police");
            episodes.html("Episodes: Season 1-22 Episodes Season 2-11 Episodes");
            source.html("Source: Production I.G Original");
            time.html("Aired: <br> Season 1-12/8/2012~22/3/2013        <br>         Season 2-10/10~19/12/2014");
        },timeout);
    des.slideDown();
    });
$("#경계의-저편 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/경계의-저편.jpg");
            studio.html("Production: Kyoto Animation");
            gerne.html("Gerne: Action, Slice of Life, Fantasy");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> 3/10~19/12/2013    <br>            ");
        },timeout);
    des.slideDown();
    });
$("#DEATH-NOTE > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/DEATH-NOTE.jpg");
            studio.html("Production: MadHouse");
            gerne.html("Gerne: Psychological, Police, Thriller, <br> Mystery");
            episodes.html("Episodes: 37 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 4/10~27/6/2007     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#미확인으로-진행형 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/미확인으로-진행형.jpg");
            studio.html("Production: Doga Kobo");
            gerne.html("Gerne: RomCom, Slice of Life, School");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: 4-koma Manga");
            time.html("Aired: <br> 9/1~27/3/2014      <br>          ");
        },timeout);
    des.slideDown();
    });

$("#나만이-없는-거리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/나만이-없는-거리.jpg");
            studio.html("Production: A-1 Pictures");
            gerne.html("Gerne: Mystery, Psychological");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 8/1~25/3/2016      <br>          ");
        },timeout);
    des.slideDown();
    });

$("#학교생활 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/학교생활.jpg");
            studio.html("Production: Lerche");
            gerne.html("Gerne: Mystery, Horror, Slice of Life, Psychological, School");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 9/7~24/10/2015     <br>           ");
        },timeout);
    des.slideDown();
    });

$("#건어물-여동생-우마루-짱 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/건어물-여동생-우마루-짱.jpg");
            studio.html("Production: Doga Kobo");
            gerne.html("Gerne: School, Comedy, Slice of Life");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> 9/7~24/10/2010     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#데스-퍼레이드 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/데스-퍼레이드.jpg");
            studio.html("Production: MadHouse");
            gerne.html("Gerne: Drama, Mystery, Psychological, Thriller");
            episodes.html("Episodes: 12 Episodes");
            source.html("Source: MadHouse Original");
            time.html("Aired: <br> 10/1~28/3/2015     <br>           ");
        },timeout);
    des.slideDown();
    });
$("#페이트-제로 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/페이트-제로.jpg");
            studio.html("Production: ufotable");
            gerne.html("Gerne: Fantasy, Action, Gore");
            episodes.html("Episodes: Season 1-13 Episodes Season 2-12 Episodes");
            source.html("Source: Light Novel");
            time.html("Aired: <br> Season 1-2/10~25/12/2011 <br>                Season 2-8/4~24/6/2012");
        },timeout);
    des.slideDown();
    });
$("#페이트-스테이-나이트-Unlimited-Blade-Works > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/페이트-스테이-나이트-Unlimited-Blade-Works.jpg");
            studio.html("Production: ufotable");
            gerne.html("Gerne: Fantasy, Action, Gore");
            episodes.html("Episodes: Season 1-12 Episodes Season 2-13 Episodes");
            source.html("Source: Visual Novel");
            time.html("Aired: <br> Season 1-12/10~28/12/2014<br>                 Season 2-5/4~28/6/2015");
        },timeout);
    des.slideDown();
    });
$("#페이트-스테이-나이트-Heavens-Feel > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/페이트-스테이-나이트-Heaven's-Feel.jpg");
            studio.html("Production: ufotable");
            gerne.html("Gerne: Fantasy, Action, Gore");
            episodes.html("Episodes: Movie");
            source.html("Source: Visual Novel");
            time.html("Aired: 2017               <br> ");
        },timeout);
    des.slideDown();
    });

$("#아이돌-마스터 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/아이돌-마스터.jpg");
            studio.html("Production: A-1 Pictures");
            gerne.html("Gerne: Comedy, Idol, Music, Drama");
            episodes.html("Episodes: 25 Episodes");
            source.html("Source: Game");
            time.html("Aired: 8/7~23/12/2011");
        },timeout);
    des.slideDown();
    });

$("#오레모노가타리 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/오레모노가타리.jpg");
            studio.html("Production: MadHouse");
            gerne.html("Gerne: Comedy, romance");
            episodes.html("Episodes: 24 Episodes");
            source.html("Source: Manga");
            time.html("Aired: 9/4~24/10/2015");
        },timeout);
    des.slideDown();
    });
$("#신만이-아는-세계 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/신만이-아는-세계.jpg");
            studio.html("Production: Manglobe");
            gerne.html("Gerne: Comedy, Harem, Romance, Fantasy");
            episodes.html("Episodes: <br> Season 1-12 Episodes <br> Season 2-12 Episodes <br> Season 3-12 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <br> Season 1-7/10~23/12/2010 <br> Season 2-12/4~28/6/2011 <br> Season 3-9/7~24/9/2013");
        },timeout);
    des.slideDown();
    });
$("#4월은-너의-거짓말 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/4월은-너의-거짓말.jpg");
            studio.html("Production: A-1 Pictures");
            gerne.html("Gerne: Drama, romance, Music, School");
            episodes.html("Episodes: 22 Episodes");
            source.html("Source: Manga");
            time.html("Aired: 10/10~2014~20/3/2015");
        },timeout);
    des.slideDown();
    });
$("#아노하나 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/아노하나.jpg");
            studio.html("Production: A-1 Pictures");
            gerne.html("Gerne: Drama, Slice of Life");
            episodes.html("Episodes: 11 Episodes");
            source.html("Source: A-1 Pictures Original");
            time.html("Aired: 15/4~24/6/2011");
        },timeout);
    des.slideDown();
        });

$("#충사 > img").click(function(){
    des.slideUp();
    timeoutreset();
    setTimeout(function(){
            image.attr("src","title-image/충사.jpg");
            studio.html("Production: Artland");
            gerne.html("Gerne: Slice of Life, Adventure, History, Fantasy, Mystery");
            episodes.html("Episodes: <br> Season 1-26 Episodes <br> Zoku Shou-10 Episodes <br> Season 2-10 Episodes");
            source.html("Source: Manga");
            time.html("Aired: <span style=\"font-size:13px;\"><br> Season 1-23/10/2005~19/6/2006 <br> Zoku Shou-5/4~21/6/2014 <br> Season 2-19/10~21/12/2014</span>");
        },timeout);
    des.slideDown();
    });
});