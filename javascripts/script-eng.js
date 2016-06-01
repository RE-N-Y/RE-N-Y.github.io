$(document).ready(function (){
	var animes = ["Suzumiya Haruhi no Yuuutsu", "Akame ga kill!", "Chuunibyou demo koi ga shitai", "Attack on Titan", "Yahari Ore no Seishun Love Comedy wa Machigatteiru", "No Game No Life", "Monogatari Series", "ONE PUNCH MAN","Puella Magi Madoka Magica","Steins;Gate", "Another", "Gyakkyou Burai Kaiji: Ultimate Survivor","KILL LA KILL","Bakemonogatari","Monogatari Second Season","Kizumonogatari I: Tekketsu","Nisemonogatari","Tsukimonogatari","Kizumonogatari II: Nekketsu","Nekomonogatari-Kuro","Owarimonogatari","Koyomimonogatari","K-ON!","Kekkai Sensen","FULL METAL ALCHEMIST","Tengen Toppa Gurren Lagann", "Shokugeki no Souma","Nisekoi","Mirai Nikki","Toradora","Mikakunin de Shinkoukei","Kyokai no Kanata","DEATH NOTE","PSYCHO-PASS","GJ Club","Ore no Kanojo to Osananajimi ga Shuraba Sugiru","Haiyore! Nyaruko-san","WORKING!","Hyouka","Nourin","Parasyte","Gekkan Shojo Nozaki-kun","Mekakucity Actors","Black Bullet","SHIRO BAKO","Boku dake ga Inai Machi","Non Non Biyori","Amagi Brilliant Park","Saenai Heroine no Sodatekata","Suzumiya Haruhi no Shoushitsu","Gakkougurashi","School Live!","Himouto! Omaru-chan!","Death Parade", "Fate/Zero","Fate/stay Night Unlimited Blade Works","Fate/stay Night Heaven's Feel","The Idolm@ster","Ore Monogatari","World god only knows","Kami nomi zo Shiru Sekai","Shigatsu wa Kimi no Uso","Your lie in April","Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai","Mushishi"];
    $( "#animesearch" ).autocomplete({
        source: animes,
        minLength: 2
    });
    $(".Production").click(function(){
        $("#Production_Display").fadeIn();
        $("#Production_Description").fadeIn();
    });
    $("#Production").click(function(){
        $(".Production").fadeIn();
        $(".Dividers").fadeIn();
    });
    $("#Production_Display").click(function(){
        $(this).fadeOut();
        $("#Production_Description").fadeOut();
    })
    $("#E1").click(function(){
        $("#grey").fadeOut();
        $(".Production").fadeOut();
        $("#music-player-container").fadeIn();
        $(".Dividers").fadeOut();
    });
    $(".icons img").click(function(){
        $(".icons").fadeOut();
    });
    $("#bottom-line").mouseover(function(){
        $("#icon").fadeIn();
    });
    $("#bottom-line").mouseout(function(){
        $("#icon").fadeOut();
    });
    $("#icon").click(function(){
        $("#grey").fadeToggle();
        $(".icons").fadeToggle();
        $("#Description").fadeOut();
        $("#music-player-container").fadeToggle();
    });

    $("#스즈미야-하루히의-우울 img").click(function(){
        $("#Description img").attr("src","title-image/스즈미야-하루히의-우울.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Kyoto Animation");
        $("#Gerne").html("Gerne: School, RomCom, SF");
        $("#Episodes").html("Episodes: Season 1-14 Episodes Season 2-14 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-3/4~3/7/2006    <br>              Season 2-22/5~11/9/2009");
        $("#Description").slideDown();
    });
    $("#중2병이라도-사랑이-하고-싶어 img").click(function(){
        $("#Description img").attr("src","title-image/중2병이라도-사랑이-하고-싶어.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Kyoto Animation");
        $("#Gerne").html("Gerne: Comedy, School, Slice of Life");
        $("#Episodes").html("Episodes: Season 1-12 Episodes Season 2 12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-4/10~20/12/2012 <br>                Season 2-9/1/~27/3/2014");
        $("#Description").slideDown();
    });
    $("#아카메가-벤다 img").click(function(){
        $("#Description img").attr("src","title-image/아카메가-벤다.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: White Fox");
        $("#Gerne").html("Gerne: Action, Adventure, Fantasy");
        $("#Episodes").html("Episodes: Season 1-24 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> Season 1-7/7~15/12/2014  <br>              ");
        $("#Description").slideDown();
    });
    $("#역시-내-청춘-러브코메디는-잘못됐다 img").click(function(){
        $("#Description img").attr("src","title-image/역시-내-청춘-러브코메디는-잘못됐다.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Brain's Base, feel");
        $("#Gerne").html("Gerne: RomCom, School");
        $("#Episodes").html("Episodes: Season 1-13 Episodes Season 2-13 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-5/4~28/6/2013   <br>              Season 2-3/4~26/6/2015");
        $("#Description").slideDown();
    });
    $("#진격의-거인 img").click(function(){
        $("#Description img").attr("src","title-image/진격의-거인.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: WIT Studio, <br> Production I.G");
        $("#Gerne").html("Gerne: Action, Drama, Fantasy, Gore");
        $("#Episodes").html("Episodes: Season 1-25 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 7/4~29/9/2013      <br>         ");
        $("#Description").slideDown();
    });
$("#노-게임-노-라이프 img").click(function(){
        $("#Description img").attr("src","title-image/노-게임-노-라이프.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: MadHouse");
        $("#Gerne").html("Gerne: Adventure, Psychological, Comedy, Fantasy");
        $("#Episodes").html("Episodes: Season 1-12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-9/4/~25/6/2014  <br>             ");
        $("#Description").slideDown();
    });
$("#역경무뢰-카이지 img").click(function(){
        $("#Description img").attr("src","title-image/역경무뢰-카이지.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: MadHouse");
        $("#Gerne").html("Gerne: Thriller, Psychological");
        $("#Episodes").html("Episodes: Season 1-26 Episodes Season 2-26 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> Season 1-3/10~2/4/2008   <br>              Season 2-6/4~28/10/2011");
        $("#Description").slideDown();
    });

$("#KILL-LA-KILL img").click(function(){
        $("#Description img").attr("src","title-image/KILL-LA-KILL.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: TRIGGER");
        $("#Gerne").html("Gerne: Action, Comedy, School");
        $("#Episodes").html("Episodes: 24 Episodes");
        $("#Source").html("Source: TRIGGER Original");
        $("#Time").html("Aired: <br> Season 1-4/10/2013~28/3/2014  <br>              ");
        $("#Description").slideDown();
    });

$("#SteinsGate img").click(function(){
        $("#Description img").attr("src","title-image/Steins;Gate.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: White Fox");
        $("#Gerne").html("Gerne: SF, Thriller");
        $("#Episodes").html("Episodes: Season 1-24 Episodes");
        $("#Source").html("Source: Game");
        $("#Time").html("Aired: <br> Season 1-6/4~14/10/2011  <br>              ");
        $("#Description").slideDown();
    });

$("#원펀맨 img").click(function(){
        $("#Description img").attr("src","title-image/원펀맨.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: MadHouse");
        $("#Gerne").html("Gerne: Action, Comedy");
        $("#Episodes").html("Episodes: Season 1-12 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> Season 1-5/10~21/12/2015 <br>               ");
        $("#Description").slideDown();
    });
$("#마법소녀-마도카-마기카 img").click(function(){
        $("#Description img").attr("src","title-image/마법소녀-마도카-마기카.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Drama, Magical girls, Thriller, Psychological");
        $("#Episodes").html("Episodes: Season 1-12 Episodes");
        $("#Source").html("Source: Shaft Original");
        $("#Time").html("Aired: <br> Season 1-7/1~22/4/2011   <br>             ");
        $("#Description").slideDown();
    });
$("#Another img").click(function(){
        $("#Description img").attr("src","title-image/Another.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: P.A. Works");
        $("#Gerne").html("Gerne: Horror, Mystery, School, Thriller");
        $("#Episodes").html("Episodes: Season 1-12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-10/1~27/3/2012  <br>              ");
        $("#Description").slideDown();
    });
$("#SHIRO-BAKO img").click(function(){
        $("#Description img").attr("src","title-image/SHIRO-BAKO.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: P.A. Works");
        $("#Gerne").html("Gerne: Comedy, Drama");
        $("#Episodes").html("Episodes: 24 Episodes");
        $("#Source").html("Source: P.A. Works Original");
        $("#Time").html("Aired: 9/10/2014~26/3/2015           <br>     ");
        $("#Description").slideDown();
    });
$("#블랙-불릿 img").click(function(){
        $("#Description img").attr("src","title-image/블랙-불릿.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Kinema Citrus");
        $("#Gerne").html("Gerne: Action, SF");
        $("#Episodes").html("Episodes: Season 1-13 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-8/4/2014~1/7/2014  <br>               ");
        $("#Description").slideDown();
    });
$("#모노가타리-시리즈").on("click",function(){
        $("#Description").css({
            "width":"400px",
            "left":"70%"
        });
        $("#Description img").attr("src","title-image/모노가타리-시리즈.jpg");
        $("#Description").slideUp();
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, Romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: 86 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: 2009~     <br>  ");
        $("#Description").slideDown();
    });
$("#바케모노가타리 img").click(function(){
        $("#Description img").attr("src","title-image/바케모노가타리.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, Romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: 15 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 3/7/2009~6/25/2010 <br>               ");
        $("#Description").slideDown();
    });
$("#니세모노가타리 img").click(function(){
        $("#Description img").attr("src","title-image/니세모노가타리.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: 11 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 8/1~18/3/2012      <br>          ");
        $("#Description").slideDown();
    });
$("#네코모노가타리-흑 img").click(function(){
        $("#Description img").attr("src","title-image/네코모노가타리-흑.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: 4 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 31/12/2012         <br>       ");
        $("#Description").slideDown();
    });
$("#모노가타리-시리즈-2nd-Season img").click(function(){
        $("#Description img").attr("src","title-image/모노가타리-시리즈-2nd-Season.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: 26 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 7/7~29/12/2013     <br>           ");
        $("#Description").slideDown();
    });
$("#츠키모노가타리 img").click(function(){
        $("#Description img").attr("src","title-image/츠키모노가타리.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: 4 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: 31/12/2014         <br>      ");
        $("#Description").slideDown();
    });
$("#오와리모노가타리 img").click(function(){
        $("#Description img").attr("src","title-image/오와리모노가타리.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 4/10~20/12/2015    <br>            ");
        $("#Description").slideDown();
    });
$("#키즈모노가타리-철혈 img").click(function(){
        $("#Description img").attr("src","title-image/키즈모노가타리-철혈.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: Movie");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: 8/1/2016           <br>     ");
        $("#Description").slideDown();
    });
$("#키즈모노가타리-열혈 img").click(function(){
        $("#Description img").attr("src","title-image/키즈모노가타리-열혈.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: Movie")
        $("#Studio").html("Production: Shaft");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: 2016 Summer            <br>    ");
        $("#Description").slideDown();
    });
$("#코요미모노가타리 img").click(function(){
        $("#Description img").attr("src","title-image/코요미모노가타리.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, Supernatural, Psychological");
        $("#Episodes").html("Episodes: 12 Episodes")
        $("#Studio").html("Production: Shaft");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 10/1~27/3/2016     <br>           ");
        $("#Description").slideDown();
    });
$("#FULL-METAL-ALCHEMIST img").click(function(){
        $("#Description img").attr("src","title-image/FULL-METAL-ALCHEMIST.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Bones");
        $("#Gerne").html("Gerne: Action, Adventure, Drama, Psychological");
        $("#Episodes").html("Episodes: 64 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 5/4/2009~4/7/2010  <br>              ");
        $("#Description").slideDown();
    });
$("#케이온 img").click(function(){
        $("#Description img").attr("src","title-image/K-ON.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Kyoto Animation");
        $("#Gerne").html("Gerne: Slice of Life, School, Music");
        $("#Episodes").html("Episodes: Season 1-13 Episodes Season 2-26 Episodes");
        $("#Source").html("Source: 4-koma Manga");
        $("#Time").html("Aired: <br> Season 1-43/4~26/6/2009 <br> Season 2-7/4~29/10/2010                ");
        $("#Description").slideDown();
    });
$("#혈계전선 img").click(function(){
        $("#Description img").attr("src","title-image/혈계전선.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production:Bones");
        $("#Gerne").html("Gerne: Action, Fantasy");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 5/4~4/10/2015      <br>          ");
        $("#Description").slideDown();
    });
$("#천원돌파-그렌라간 img").click(function(){
        $("#Description img").attr("src","title-image/천원돌파-그렌라간.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Gainax");
        $("#Gerne").html("Gerne: Mecha, Action, Adventure");
        $("#Episodes").html("Episodes: 27 Episodes");
        $("#Source").html("Source: Gainax Original");
        $("#Time").html("Aired: <br> 1/4~3010/2007      <br>          ");
        $("#Description").slideDown();
    });
$("#식극의-소마 img").click(function(){
        $("#Description img").attr("src","title-image/식극의-소마.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: J.C.Staff");
        $("#Gerne").html("Gerne: School, Food");
        $("#Episodes").html("Episodes: Season 1-24 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> Season 1-4/4~26/10/2015  <br>              ");
        $("#Description").slideDown();
    });
$("#미래일기 img").click(function(){
        $("#Description img").attr("src","title-image/미래일기.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Asread");
        $("#Gerne").html("Gerne: Mystery, Thriller, Horror, Psychological");
        $("#Episodes").html("Episodes: 26 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 9/10/2011~15/4/2012<br>                ");
        $("#Description").slideDown();
    });
$("#니세코이 img").click(function(){
        $("#Description img").attr("src","title-image/니세코이.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: RomCom, Harem, School");
        $("#Episodes").html("Episodes: Season 1-20 Episodes Season 2-12 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> Season 1-11/1~5/24/2014  <br>               Season 2-10/4~26/6/2015");
        $("#Description").slideDown();
    });
$("#토라도라 img").click(function(){
        $("#Description img").attr("src","title-image/토라도라.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: J.C.Staff");
        $("#Gerne").html("Gerne: RomCom, School, Slice of Life");
        $("#Episodes").html("Episodes:25 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 2/10/2008~26/3/2009<br>                ");
        $("#Description").slideDown();
    });
$("#메카쿠시티-엑터즈 img").click(function(){
        $("#Description img").attr("src","title-image/메카쿠시티-엑터즈.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Shaft");
        $("#Gerne").html("Gerne: Mystery, romance, SF");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Music");
        $("#Time").html("Aired: <br> 13/4/~29/6/2014    <br>           ");
        $("#Description").slideDown();
    });
$("#기어와라-냐루코-양 img").click(function(){
        $("#Description img").attr("src","title-image/기어와라-냐루코-양.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Xebec");
        $("#Gerne").html("Gerne: Comedy, romance, SF");
        $("#Episodes").html("Episodes: Season 1-12 Episodes Season 2-12 Episodes +OVA");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-10/4~26/6/2012  <br>               Season 2-8/4~1/7/2013  <br> OVA-19/6/2015" );  
        $("#Description").slideDown();
    });
$("#농림 img").click(function(){
        $("#Description img").attr("src","title-image/농림.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Frontier Works");
        $("#Gerne").html("Gerne: School, RomCom");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 11/1~29/3/2014     <br>           ");
        $("#Description").slideDown();
    });
$("#논논비요리 img").click(function(){
        $("#Description img").attr("src","title-image/논논비요리.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Silver Link");
        $("#Gerne").html("Gerne: Slice of Life, School, Comedy");
        $("#Episodes").html("Episodes: Season 1-12 Episodes  Season 2-12 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> Season 1-8/10~24/12/2013 <br>Season 2-7/7~22/10/2015                ");
        $("#Description").slideDown();
    });
$("#월간소녀-노자키-군 img").click(function(){
        $("#Description img").attr("src","title-image/월간소녀-노자키-군.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Doga Kobo");
        $("#Gerne").html("Gerne: RomCom, Slice of Life, School");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: 4-koma Manga");
        $("#Time").html("Aired: <br> 7/7~22/10/2014     <br>           ");
        $("#Description").slideDown();
    });
$("#빙과 img").click(function(){
        $("#Description img").attr("src","title-image/빙과.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production:Kyoto Animation");
        $("#Gerne").html("Gerne: Mystery, Slice of Life, School");
        $("#Episodes").html("Episodes: 22 Episodes");
        $("#Source").html("Source: Novel");
        $("#Time").html("Aired: <br> 23/4~17/10/2012    <br>            ");
        $("#Description").slideDown();
    });
$("#내-여자친구와-소꿉친구가-완전-수라장 img").click(function(){
        $("#Description img").attr("src","title-image/내-여자친구와-소꿉친구가-완전-수라장.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: A-1 Pictures");
        $("#Gerne").html("Gerne: Harem, RomCom, School");
        $("#Episodes").html("Episodes: 13 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 6/1~31/3/2013      <br>          ");
        $("#Description").slideDown();
    });
$("#시원찮은-그녀를-위한-육성방법 img").click(function(){
        $("#Description img").attr("src","title-image/시원찮은-그녀를-위한-육성방법.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production:A-1 Pictures");
        $("#Gerne").html("Gerne: Harem, RomCom, School");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-16/1~27/3/2015  <br>              ");
        $("#Description").slideDown();
    });
$("#기생수 img").click(function(){
        $("#Description img").attr("src","title-image/기생수.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: MadHouse");
        $("#Gerne").html("Gerne: Action, Horror, Psychological, Drama, SF, Gore");
        $("#Episodes").html("Episodes: 24 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 9/10/2014~26/3/2015<br>                ");
        $("#Description").slideDown();
    });
$("#WORKING img").click(function(){
        $("#Description img").attr("src","title-image/WORKING.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: A-1 Pictures");
        $("#Gerne").html("Gerne: Comedy, Slice of Life");
        $("#Episodes").html("Episodes: Season 1-13 Episodes Season 2-13 Episodes <br> Season 3-13 Episodes +OVA");
        $("#Source").html("Source: 4-koma Manga");
        $("#Time").html("Aired: <br> Season 1-4/4~27/6/2010   <br>          Season 2-8/1~24/12/2011 <br> Season 3-5/7~27/10/2015  <br> OVA-30/3/2016");
        $("#Description").slideDown();
    });
$("#GJ부 img").click(function(){
        $("#Description img").attr("src","title-image/GJ부.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Doga Kobo");
        $("#Gerne").html("Gerne: Comedy, School, Slice of Life");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 10/1~28/3/2013     <br>           ");
        $("#Description").slideDown();
    });
$("#아마기-브릴리언트-파크 img").click(function(){
        $("#Description img").attr("src","title-image/아마기-브릴리언트-파크.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Kyoto Animation");
        $("#Gerne").html("Gerne: Comedy, Fantasy");
        $("#Episodes").html("Episodes: 13 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 7/8~26/12/2014     <br>           ");
        $("#Description").slideDown();
    });
$("#PSYCHO-PASS img").click(function(){
        $("#Description img").attr("src","title-image/PSYCHO-PASS.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Production I.G");
        $("#Gerne").html("Gerne: Action, Psychological, SF, Police");
        $("#Episodes").html("Episodes: Season 1-22 Episodes Season 2-11 Episodes");
        $("#Source").html("Source: Production I.G Original");
        $("#Time").html("Aired: <br> Season 1-12/8/2012~22/3/2013        <br>         Season 2-10/10~19/12/2014");
        $("#Description").slideDown();
    });
$("#경계의-저편 img").click(function(){
        $("#Description img").attr("src","title-image/경계의-저편.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Kyoto Animation");
        $("#Gerne").html("Gerne: Action, Slice of Life, Fantasy");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> 3/10~19/12/2013    <br>            ");
        $("#Description").slideDown();
    });
$("#DEATH-NOTE img").click(function(){
        $("#Description img").attr("src","title-image/DEATH-NOTE.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: MadHouse");
        $("#Gerne").html("Gerne: Psychological, Police, Thriller, <br> Mystery");
        $("#Episodes").html("Episodes: 37 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 4/10~27/6/2007     <br>           ");
        $("#Description").slideDown();
    });
$("#미확인으로-진행형 img").click(function(){
        $("#Description img").attr("src","title-image/미확인으로-진행형.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Doga Kobo");
        $("#Gerne").html("Gerne: RomCom, Slice of Life, School");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: 4-koma Manga");
        $("#Time").html("Aired: <br> 9/1~27/3/2014      <br>          ");
        $("#Description").slideDown();
    });

$("#나만이-없는-거리 img").click(function(){
        $("#Description img").attr("src","title-image/나만이-없는-거리.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: A-1 Pictures");
        $("#Gerne").html("Gerne: Mystery, Psychological");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 8/1~25/3/2016      <br>          ");
        $("#Description").slideDown();
    });

$("#학교생활 img").click(function(){
        $("#Description img").attr("src","title-image/학교생활.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Lerche");
        $("#Gerne").html("Gerne: Mystery, Horror, Slice of Life, Psychological, School");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 9/7~24/10/2015     <br>           ");
        $("#Description").slideDown();
    });

$("#건어물-여동생-우마루-짱 img").click(function(){
        $("#Description img").attr("src","title-image/건어물-여동생-우마루-짱.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Doga Kobo");
        $("#Gerne").html("Gerne: School, Comedy, Slice of Life");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> 9/7~24/10/2010     <br>           ");
        $("#Description").slideDown();
    });
$("#데스-퍼레이드 img").click(function(){
        $("#Description img").attr("src","title-image/데스-퍼레이드.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: MadHouse");
        $("#Gerne").html("Gerne: Drama, Mystery, Psychological, Thriller");
        $("#Episodes").html("Episodes: 12 Episodes");
        $("#Source").html("Source: MadHouse Original");
        $("#Time").html("Aired: <br> 10/1~28/3/2015     <br>           ");
        $("#Description").slideDown();
    });
$("#페이트-제로 img").click(function(){
        $("#Description img").attr("src","title-image/페이트-제로.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: ufotable");
        $("#Gerne").html("Gerne: Fantasy, Action, Gore");
        $("#Episodes").html("Episodes: Season 1-13 Episodes Season 2-12 Episodes");
        $("#Source").html("Source: Light Novel");
        $("#Time").html("Aired: <br> Season 1-2/10~25/12/2011 <br>                Season 2-8/4~24/6/2012");
        $("#Description").slideDown();
    });
$("#페이트-스테이-나이트-Unlimited-Blade-Works img").click(function(){
        $("#Description img").attr("src","title-image/페이트-스테이-나이트-Unlimited-Blade-Works.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: ufotable");
        $("#Gerne").html("Gerne: Fantasy, Action, Gore");
        $("#Episodes").html("Episodes: Season 1-12 Episodes Season 2-13 Episodes");
        $("#Source").html("Source: Visual Novel");
        $("#Time").html("Aired: <br> Season 1-12/10~28/12/2014<br>                 Season 2-5/4~28/6/2015");
        $("#Description").slideDown();
    });
$("#페이트-스테이-나이트-Heavens-Feel img").click(function(){
        $("#Description img").attr("src","title-image/페이트-스테이-나이트-Heaven's-Feel.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: ufotable");
        $("#Gerne").html("Gerne: Fantasy, Action, Gore");
        $("#Episodes").html("Episodes: Movie");
        $("#Source").html("Source: Visual Novel");
        $("#Time").html("Aired: 2017               <br> ");
        $("#Description").slideDown();
    });

$("#아이돌-마스터 img").click(function(){
        $("#Description img").attr("src","title-image/아이돌-마스터.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: A-1 Pictures");
        $("#Gerne").html("Gerne: Comedy, Idol, Music, Drama");
        $("#Episodes").html("Episodes: 25 Episodes");
        $("#Source").html("Source: Game");
        $("#Time").html("Aired: 8/7~23/12/2011");
        $("#Description").slideDown();
    });

$("#오레모노가타리 img").click(function(){
        $("#Description img").attr("src","title-image/오레모노가타리.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: MadHouse");
        $("#Gerne").html("Gerne: Comedy, romance");
        $("#Episodes").html("Episodes: 24 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: 9/4~24/10/2015");
        $("#Description").slideDown();
    });
$("#신만이-아는-세계 img").click(function(){
        $("#Description img").attr("src","title-image/신만이-아는-세계.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Manglobe");
        $("#Gerne").html("Gerne: Comedy, Harem, Romance, Fantasy");
        $("#Episodes").html("Episodes: <br> Season 1-12 Episodes <br> Season 2-12 Episodes <br> Season 3-12 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <br> Season 1-7/10~23/12/2010 <br> Season 2-12/4~28/6/2011 <br> Season 3-9/7~24/9/2013");
        $("#Description").slideDown();
    });
$("#4월은-너의-거짓말 img").click(function(){
        $("#Description img").attr("src","title-image/4월은-너의-거짓말.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: A-1 Pictures");
        $("#Gerne").html("Gerne: Drama, romance, Music, School");
        $("#Episodes").html("Episodes: 22 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: 10/10~2014~20/3/2015");
        $("#Description").slideDown();
    });
$("#아노하나 img").click(function(){
        $("#Description img").attr("src","title-image/아노하나.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: A-1 Pictures");
        $("#Gerne").html("Gerne: Drama, Slice of Life");
        $("#Episodes").html("Episodes: 11 Episodes");
        $("#Source").html("Source: A-1 Pictures Original");
        $("#Time").html("Aired: 15/4~24/6/2011");
        $("#Description").slideDown();
        });

$("#충사 img").click(function(){
        $("#Description img").attr("src","title-image/충사.jpg");
        $("#Description").slideUp();
        $("#Description").css({
            "width":"250px",
            "left":"82.5%"
        });
        $("#Studio").html("Production: Artland");
        $("#Gerne").html("Gerne: Slice of Life, Adventure, History, Fantasy, Mystery");
        $("#Episodes").html("Episodes: <br> Season 1-26 Episodes <br> Zoku Shou-10 Episodes <br> Season 2-10 Episodes");
        $("#Source").html("Source: Manga");
        $("#Time").html("Aired: <span style=\"font-size:13px;\"><br> Season 1-23/10/2005~19/6/2006 <br> Zoku Shou-5/4~21/6/2014 <br> Season 2-19/10~21/12/2014</span>");
        $("#Description").slideDown();
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
$("#Description").click(function(){
        $("#Description").slideUp();
    });

    $("#A-1-Pictures").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/A-1 Pictures1.jpg");
        $("#Production_Display div .thumbnail h3").text("A-1 Pictures Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong>A-1 Pictures");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 2005");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Suginami, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> A-1 Pictures was founded by Aniplex (a subsidiary company of Sony) for providing a reliable source of contents in 2005. It started focusing on producing TVAs after 2006 and arrived at current state. As the studio is a part of Sony, some products are labelled by Sony when released or transferred to different platform such as PSP.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> A-1 Pictures does not have a fixed production staff. Hence, it generally is in charge of production management rather than creation of anime itself. For this reason, the style and art of the anime tends to change depending on which staff took part of the production process. After 2012, the general quality of anime declined as the production began producing excessive amount of works per quarter. Namely, Magi and Black Butler Season 2 was heavily criticized by original fans for its bad adaptation and recreation of the work. Production produced many commercially successful and famous works including Sword Art Online, The Idolm@ster, WORKING!, The Deadly Seven Sins. Most notably, Ano hi mita hana no namae wo bokutachi wa mada shiranai is one of their major works. It has produced numerous masterpieces for Noitanima such as Boku dake ga Inai Machi, Shigatsu wa Kimi no Uso and Ano Hana as mentioned above.");
    });
    $("#J-C-Staff").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/J.C.Staff1.jpg");
        $("#Production_Display div .thumbnail h3").text("J.C.Staff Co., Ltd.");
        $("#Production_Description h3").html("<strong>Name:</strong>株式会社ジェー・シー・スタッフ");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1986");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Musashino, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> J.C.STAFF was established by an ex-Tatsunoko production staff Tomoyuki Miyata. It was a company that mostly produced OVAs, but in 1994 produced its first TVA and concentrated on making TV series ever since. In 2002, they released Azumanga Doioh! which still holds the highest sales record of the studio. In 2005, it started producing anime adaptation of popular light novels such as Shakugan no Shana and became a major production. In 2008, it produced Toradora and To aru Majutsu no Index which drew significant attention at the time. However, in 2011, Season 2 of To aru Majutsu no Index was criticized for unsatisfying art quality and story-telling. In 2015, it produced (surprisingly?) ecchi genres including Prison School and Shokugeki no Souma.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> J.C.STAFF focuses on producing animes with a constant and stable level of quality rather than aiming for creating a very high-quality contents. It usually produces excessive amount of works per year which has led to declining quality of work and original elements adopted into animes which were often not welcomed by original fans. Namely, To aru Kagaku no Railgun Season 2 terribly received by original fans for almost creating a parallel world compared to the novel. Largest problem is action. It didn’t show any significant development in Shakugan no Shana, To aru Majutus no Index and Ookami-san to Shichijin no Nakama-tachi. It’s specialized in drama and produced many great works such as Dodame Cantabile, Toradora and Bakuman. Recently, it seemed to explore a new genre by producing ecchi works including Shokugeki no Souma and Prison School as noted above.");
    });
    $("#Lerche").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/Lerche1.jpg");
        $("#Production_Display div .thumbnail h3").text("Lerche");
        $("#Production_Description h3").html("<strong>Name:</strong>ラルケ");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 2011");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> In 2011, Lerche was founded as a subsidiary company of Studio Hibari. It produced game-based animes such as Carnival Phantasm and in 2012, it contributed to the production of Persona 4 the Animation. In 2013, it produced its first independent anime Danganronpa -Kibou no Kakou to Zetsubo no Koukousei- The Animation and Unbreakable machine doll. Later it produced an adaptation of a popular manga series Assassination Classroom and Gakkougurashi. In 2016, it has currently produced Assassination Classroom Season 2 and has announced to produced Danganronpa -The end of Kibougamine Kakuen-.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> Lerche is a studio with a short history, but its productions have always drew substantial attention every quarter. It demonstrated a good quality of art throughout its productions and naturally reconstructs different characters. It has shown its presence as a dark horse.");
    });
    $("#Production-I-G").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/Production I.G.jpg");
        $("#Production_Display div .thumbnail h3").text("Production I.G.");
        $("#Production_Description h3").html("<strong>Name:</strong> 株式会社プロダクション・アイジ");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1987");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Kokubunji, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> In 1987, it separated as a subsidiary company of Tatsunoko production and became an individual company in 1993 with the name Production I.G. It began producing TVAs since the year 2001 and has made works such as East of Eden, Koronoko’s Basket and HaiKyuu!!. In 2011, it released its first original animation Guilty Crown which was popularized by the quality of art, setting and music. However, towards the end, the popularity fell due to weak story-telling, plot and length. In 2012, it regained its reputation with the production of PSYCHO-PASS and recovered its status by producing Suisen no Gargantia and Attack on Titan. In 2016, it is currently producing Joker Game.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> Production I.G. always produced works with intriguing setting, thick plot, great music and deep theme. It never created animes with a serious meaning to it and mainly made drama animes. One of the main characteristic of Produciton I.G. is its social criticism which was shown in PSYCHO-PASS, East of Eden, Joker Game and Suien no Gargantia which reflects on the downsides of modern conservatism, systemized society and totalitarianism. It is one of the very few productions that still strives for artistic quality in anime.");
    });
    $("#TRIGGER").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/TRIGGER1.jpg");
        $("#Production_Display div .thumbnail h3").text("Trigger Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong>株式会社トリガ");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 2011");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong>   Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> TRIGGER was founded when an ex-Gainax staff Hiroyuki Imaishi decided to establish their own studio. It first worked as a subcontractor, but in 2013, it released its first original series Little Witch Academia and KILL LA KILL in 2013. On 8th of July, it began its kick-starter project for Little Witch Academia and raised 150,000 dollar within 5 hours which left a donations of 625,518 dollars in total. With the success of KILL LA KILL, it produced When Supernatural becomes Commonplace which didn’t bring promising results in 2014 which arose concerns on financial status of TRIGGER among the fans. Yet, in 2016, it has produced another original series Kiznaiver.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> As TRIGGER was established by ex-Gainax staffs it’s art style is similar to works of Gainax especially in comparison to Gurren Lagann which TRIGGER staffs formerly produced. Characteristic of TRIGGER is an enjoyable fast-paced scenario and unique setting which are merits that a handful of productions have nowadays. Another strength is the excellent use of music, retro style and energetic film work they have demonstrated in KILL LA KILL. It is a kind of production that we want see more.");
    });
    $("#ufotable").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/ufotable1.jpg");
        $("#Production_Display div .thumbnail h3").text("Ufotable, Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong>ユーフォーテーブル有限会社");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 2001");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong>  Nakano, Tokyo Prefecture, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> ufortable was an unknown studio until 2007 when they produced 7 part movie of Kara no Kyoukai. It was well received by the public and the critics for magnificent artwork and action. Then, it rose to its fame when it produced Fate/Zero which recorded the highest sales of the quarter. In 2014, they decided to make a re-make of Fate/stay Night Unlimited Blade Works and was applauded by the fans of a popular visual novel Fate series. But, its standing crashed with the catastrophic production of GOD EATER. From the beginning, it postponed the first episode and instead replaced it with a 15-minute short title. Despite the postponement, the first episode was detested by the viewers and caused worries among the fans. This worry came to reality when ufotable was not able to keep up with the deadlines for 4th, 6th and 8th episode and announced to wrap up the series with 9 episode. Total failure of God Eater left a huge scar on ufotable’s reputation. Hopefully, God Eater was finished with the release of extra 4 episodes, but it seems that ufotable has a long way to go in order to recover its status and fame.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> ufotable has an independent internal production system and achieved a complete vertical integration. This production environment enabled animators and directors to produce high-quality animes. For the same reason, ufotable actively applies 3D CG in their works create a modern, powerful and swift action as well as illustrating complex structure and effects. It also is one of the studios that effectively use lighting and brightness. It attempts to provide reality to action with slow motion for emphasis. Moreover, ufotable received well by fandoms for its respect, enthusiasm and the reformation for the original work. Yet, it keeps up to its quality of work consistently throughout a collection of their productions.");
    });
    $("#WIT-Studio").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/WIT Studio.jpg");
        $("#Production_Display div .thumbnail h3").text("WIT STUDIO, Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong>株式会社ウィットスタジオ");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 2012");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Musashino, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> WIT Studio is a subsidiary company of IG port that separated from Production I.G. It became famous after the production of Attack on Titan in 2013 and produced series such as hoozuki no Reitetsu, Owari no Seraph and is currently producing Kabaneri of the Iron Fortress in 2016. Furthermore, it has announced to release the second season of Attack on Titan this year.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> WIT Studio has a dull colour design in general to concentrate on certain parts for emphasis with the use of lighting and bright colours. Its strength strongly lies in action. The studio creates a very natural and swift movements of characters that forms a dynamic action. It is one of the reasons that this studio has mainly produced action animes so far.");
    });
    $("#Gainax").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/Gainax1.jpg");
        $("#Production_Display div .thumbnail h3").text("GAINAX Co., Ltd.");
        $("#Production_Description h3").html("<strong>Name:</strong>株式会社ガイナックス");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1934");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Mitaka, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> In 1934, Gainax was established from an invested anime circle for production of Royal Space Force. However, the production left a pile of debt and was forced to continue. Because of this, Gainax has dealt with serious financial issues. It did a wide range of work from subcontracts to game illustrations to pay its debt. Yet, in 1995, it’s hardships ended in 1995 with the production of legendary Neon Genesis Evangelion. Unfortunately, the studio trembled into a tax evasion scandal and deteriorated. In 2007, it produced Tengen Toppa Gurren Lagann that brought a huge hit and success. Some of the main staff such as Hiroyuki Imaishi (who established TRIGGER) after Gurren Lagann. It has produced no recent influential anime until now.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> Gainax’s specialties lies in SF and Mecha which was well demonstrated in Gurren Lagann and Neon Genesis Evangelion. It has also produced many types of genres besides mecha and SF ranging from comedy to adventure. Despite its glory of their major two animes, the studio seems to show signs of deterioration after its key staffs have separated from Gainax and established their own productions such as TRIGGER and Studio Kara.");
    });
    $("#Doga-Kobo").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/Doga Kobo1.jpg");
        $("#Production_Display div .thumbnail h3").text("Doga Kobo, Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong>株式会社動画工房");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1973");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Nerima, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> Doga Kobo was founded by Hideo Furusawa in 1973 after separating from Toei Production. It has a long history, but mainly worked as a subcontractor for most of the times. In 2007 they produced their first anime Myself, Yourself followed by 11eyes, but left horrible results. However, thanks to the success of Yuru Yuri series, the production rose to their feet and produced two very promising series Mikakunin de shinkoukei and Gekkan Shojo Nozaki kun. Later they produced Plastic Memories and Mikagura Gakuen Kumikyoku. In 2015, it produced Himouto! Umaru-chan! which got a positive reviews from the fans.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> Doga Kobo contributed to the production of many works as a subcontractor for many years. Notably, it took part in production of famous movies of Naruto, Inuyasha, Doraemon and Neon Genesis Evangelion. Moreover, it also worked for the production of great works such as Full Metal Alchemist, Monogatari Series, Gurren Lagann and Mahou Shoujo Madoka Magica. It’s characteristics are round and adorable character designs which suits the mood of Slice of Life which is their main genre.");
    });
    $("#Mad-House").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/Mad House.jpg");
        $("#Production_Display div .thumbnail h3").text("MADHOUSE Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong>株式会社マッドハウス");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1972");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Honchō, Nakano, Tokyo");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> In 1972, it was founded by ex-Mushi Production staffs. It became known to the public with the production of Card Captor Sakura in the 90’s. It also made some adaptations of Marvel Comics such as Iron Man and the Blade. In 2010, it began producing animes for light novels such as Magical Warfare and Godless Monday, but didn’t leave any good results. On the another hand, they also left many solid works such as No Game No Life, HUNTERXHUNTER and Chihayahuru. In 2015, it produced ONE PUNCH MAN and Overload that allowed MadHouse to finish their year with a satisfying results.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> MadHouse’s productions have produced works with clear art, original mood and high-quality. MadHouse is a production that has made numerous excellent adaptations of many works including Monster, Kaiji series, Card Captor Sakura, Death Note, Paracyte and ONE PUNCH MAN. Despite owning masterpieces, the production have had only a few major hits.");
    });
    $("#Bones").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/Bones1.jpg");
        $("#Production_Display div .thumbnail h3").text("Bones Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong>株式会社ボンズ");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1998");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> 3-1-12 Sanbiru Igusa, Suginami, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> Bones was founded by an ex-Sunrise producer Hasahiko Minami to produce solid and deep animes like a bone in 1998. It produced Full Metal Alchemist, DARKER THAN BLACK and Soul Eater which was popularized by the quality of action. The studio faced hard times after 2010 with a devastating sales of the works. However, in 2015, it revived and reclaimed its glory by producing Kekkai Sensen and SHOW BY ROCK! That ended its dark ages. In 2016, it has produced its new action anime My Hero Academia.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> Action. Action is the right word to describe this production. Bones has demonstrated its massive, dynamic and swift action throughout all its works. This characteristic is well shown in Full Metal Alchemist, DARKER THAN BLACK and Soul Eater. In its early stage, its action was heavy with an exquisite art (Full Metal Alchemist), but it tends to use thinner and speedy lines for fast, brick and quick style of action (DARKER THAN BLACK). It is also famous for having a high-quality music namely for Full Metal Alchemist, DARKER THAN BLACK and Kekkai Sensen. It mostly produces anime adaptations of manga and strives to create animes with artistic merits.");
    });

    $("#Shaft").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/Shaft1.jpg");
        $("#Production_Display div .thumbnail h3").text("Shaft, Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong> 株式会社シャフト");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1975");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong>   1-29-15 Kami-Igusa, Suginami, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> Shaft was established in 1975 and has a long history. However, it worked as a subcontractor for two decades. Before 2009, it produced Hidamari Sketch and Sayonara Zetsubou Sensei and pioneered its unique genre, but wasn’t able to achieve a commercial accomplishment. In 2009, Shaft produced Bakemonogatari accomplishing the second highest DVD/BD sales of all time. And in 2011, it produced its new original anime Mahou Shoujo Madoka Magica which brought another record-breaking success. Until 2016, it mainly produced Monogatari Series and 3 movies of Mahou Shoujo Madoka Magica among with RomCom animes such as Nisekoi. Also, Shaft produced an anime adaptation of popular music Mekaku City Actors, but left a poor result. In 2016, on 8th of January, it finally released the first part of 3-part movie Kizumonogatari!");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> Characteristic of Shaft is its avante garde film work and cinematography. Each cut is quick and switches rapidly. On the other hand, Shaft takes long shots and fixed frames between conversations. Furthermore, they actively uses text during each scenes and restrict appearances of extras and background characters. Shaft even use collage to present an abstract background in collaboration with Inu-Kare. Another characteristic worth mentioning is its distinctive head-tilt which has been popularized by its major productions. These film technique of Shaft studio form a grotesque and eccentric atmosphere. In addition, it has a tradition of placing an illustration at the end of each episode that forces the viewers to see the show until the end. Shaft’s idiosyncratic style is intriguing and compelling. However, because of this, it is a studio that is fitting for thriller, mystery and psychological works rather than works with bright and plain atmosphere. Another weaknesses is its time management and quality control. Due to its frequent tight scheduling, most of the errors in art of the TVA are edited and fixed in DVD/BD which often causes gap of quality between the aired version and re-made version on DVD. Shaft tends to cover these problems with its cinematography. Namely, repeated use of cuts filled with text and fixed frames. These weaknesses caused 4-year postponement of Kizumonogatari and horrifying opening of 9th episode of Mekakucity Actors. All in all, it is a production that has two extremes.");
    });
    $("#Sunrise").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/Sunrise1.jpg");
        $("#Production_Display div .thumbnail h3").text("Sunrise Inc.");
        $("#Production_Description h3").html("<strong>Name:</strong> 株式会社サンライズ");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1972");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Suginami, Tokyo, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> In 1972, ex-Mushi production staffs established Sunrise after its bankruptcy. At first, it faced many hardships due to financial issues. Because of this experience, Sunrise aimed towards monetary stability accompanied by sub-product businesses. During the 70’s, beginning with their best-selling franchise Mobile Suit Gundam series and became a production specialized on Mecha. One of its other best-selling animes is Code Geass Recently, it has produced idol animes such as Love Live! and showed a significant result which convinced Sunrise to push the series further.");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> As a production that mainly focuses on Mecha animes, its main animes are the Gundam series and Code Geass. A large strength is the huge scale of the company. Since its one of the highest priorities is financial margin; it is a stable production. It can create a great quality of work when it concentrates. Sunrise is a very few production that still produces 2D Mecha nowadays when most productions have decided to use 3D graphics instead. But, it has also produced some 3D Mechas without a loss of quality.");
        //$("#Production_Display ul li").text("");
    });
    $("#KyoAni").click(function(){
        $("#Production_Display div.thumbnail img").attr("src","template/KyoAni1.jpg");
        $("#Production_Display div .thumbnail h3").html("Kyoto Animation Co., Ltd.");
        $("#Production_Description h3").html("<strong>Name:</strong> 株式会社京都アニメーション");
        $("#Production_Description h5:nth-child(3)").html("<strong>Founded:</strong> 1981");
        $("#Production_Description h5:nth-child(4)").html("<strong>Headquarters:</strong> Uji, Kyoto Prefecture, Japan");
        $("#Production_Description p:nth-child(5)").html("<strong>History:</strong> Kyoto Animation was founded in 1981 by an ex-Mushi production staff Hideyaki Hatta. In 2003, it began its independent production with Full Metal Panic Fumoffu, In 2006, it produced the famous Suzumiya Haruhi no Yuutsu and reached the verge of its fame earning an international enthusiasm known as Haruhism for outstanding art quality, characteristic cinematography and absorbing characters. However, Kyoto Animation faces a downfall after its release of second season that included: “Endless Eight” a repetition of identical 8 episodes. (Seriously.... Why?) This unfathomable course of action was condemned by the fans. What saved Kyoto Animation was the best-selling Slice of Life anime: K-ON! and the movie Suzumiya Haruhi no Shoushitsu in 2010 that was praised by the critics and the fans. In 2012, it produced Chunnibyo demo Koi ga Shitai! and Hyouka leaving some decent outcomes both commercially and artistically. These animes regained Kyoto Animation’s status in the industry. In 2013, it produced its first practical original anime Tamako Market and Free! that left one of the highest sales in recent animes by Kyoto Animation. In 2014, it released the movie Tamako Love Story that was well received by both critics and the public. In 2016, it has announced to produce an adaptation of famous manga series: “Koe no Katachi”");
        $("#Production_Description p:nth-child(6)").html("<strong>Description:</strong> Greatest merit of Kyoto Animation is its cutting-edge art. Nowadays, its art quality is not as dominant as it used to be due to overall advancement of quality in anime industry, but it still is one of the companies that is never left out when speaking of quality of art in anime. It mostly uses bright and clear colour composition and soft lines. Kyoto Animation is also well-known for its character design that demonstrates the essence of the character’s identity. Notably, unlike other productions, Kyoto Animation produced many adaptations of minor works. Currently, it owns its only light novel publishing label KA Esuma Bunko for a steady supply of stories for anime. Namely, Lucky Star and K-ON! which were minor works became major sellers after the release of the anime. In terms of film work, Kyoto Animation is specialized in presenting natural everyday movements and gag scenes. Kyoto Animation tries to have a high quality of background music and records the music using analog instruments. They often use classic in their works as well. Its major fields are Slice of Life and School animes where they’ve shown a great quality of works. It is an inspiring production.")
        //$("#Production_Display ul li").text("");
    

    }); 

    $("#left").click(function(){
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Shaft4.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Shaft3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Shaft2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft1.jpg"); next();}).delay(100).slideDown();   
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Shaft1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft4.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Bones2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Bones1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Bones1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Bones2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Gainax1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Gainax2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Gainax2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Gainax1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/A-1 Pictures1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 Pictures2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/A-1 Pictures2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 Pictures1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/ufotable1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/ufotable2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/ufotable2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 ufotable1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Sunrise3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Sunrise2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Sunrise1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise3.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni6.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni5.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni5.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni4.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni4.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni6.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff5.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff4.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff4.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff5.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Doga Kobo3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Doga Kobo2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Doga Kobo1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/TRIGGER1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/TRIGGER2.png"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/TRIGGER2.png") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/TRIGGER1.jpg"); next();}).delay(100).slideDown();
        }
    });
    $("#right").click(function(){
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Shaft1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Shaft2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Shaft3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft4.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Shaft4.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Bones1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Bones2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Bones2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Bones1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Gainax1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Gainax2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Gainax2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Gainax1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/A-1 Pictures1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 Pictures2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/A-1 Pictures2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 Pictures1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/ufotable1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/ufotable2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/ufotable2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/ufotable1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Lerche1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Lerche2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Lerche2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Lerche3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Lerche3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Lerche1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Sunrise1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Sunrise2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Sunrise3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni4.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni4.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni5.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni5.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni6.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/KyoAni6.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni1.jpg"); next();}).delay(100).slideDown();
        }

        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff4.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff4.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff5.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/J.C.Staff5.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Doga Kobo1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo2.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Doga Kobo2.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo3.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/Doga Kobo3.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo1.jpg"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/TRIGGER1.jpg") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/TRIGGER2.png"); next();}).delay(100).slideDown();
        }
        if ($("#Production_Display div.thumbnail img").attr("src")==="template/TRIGGER2.png") {
            $("#Production_Display div.thumbnail img").slideUp().delay(100).queue(function(next){$(this).attr("src","template/TRIGGER1.jpg"); next();}).delay(100).slideDown();
        }
    });
$("#Filter").click(function(){
        $(".tags").fadeIn();
        $("#E1").fadeIn();
        $("#E2").fadeIn();
    });
    $("#E1").click(function(){
        $("#grey").fadeOut();
        $(".tags").fadeOut();
        $("#music-player-container").fadeIn();
    });

    $("#Adventure").click(function(){
        $(".Adventure").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Adventure, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Adventure-Filter\"><p>Adventure <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Action").click(function(){
        $(".Action").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Action, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Action-Filter\"><p>Action <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Comedy").click(function(){
        $(".Comedy").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Comedy, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Comedy-Filter\"><p>Comedy <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Drama").click(function(){
        $(".Drama").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Drama, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Drama-Filter\"><p>Drama <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Ecchi").click(function(){
        $(".Ecchi").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Ecchi, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Ecchi-Filter\"><p>Ecchi <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Fantasy").click(function(){
        $(".Fantasy").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Fantasy, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Fantasy-Filter\"><p>Fantasy <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#SF").click(function(){
        $(".SF").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".SF, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"SF-Filter\"><p>SF <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Harem").click(function(){
        $(".Harem").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Harem, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Harem-Filter\"><p>Harem <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Gore").click(function(){
        $(".Gore").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Gore, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Gore-Filter\"><p>Gore <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Horror").click(function(){
        $(".Horror").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Horror, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Horror-Filter\"><p>Horror <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Mecha").click(function(){
        $(".Mecha").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Mecha, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Mecha-Filter\"><p>Mecha <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Military").click(function(){
        $(".Military").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Military, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Military-Filter\"><p>Military <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Thriller").click(function(){
        $(".Thriller").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Thriller, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Thriller-Filter\"><p>Thriller <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Mystery").click(function(){
        $(".Mystery").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Mystery, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Mystery-Filter\"><p>Mystery <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Police").click(function(){
        $(".Police").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Police, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Police-Filter\"><p>Police <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Psychological").click(function(){
        $(".Psychological").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Psychological, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Psychological-Filter\"><p>Psychological <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Music").click(function(){
        $(".Music").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Music, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Music-Filter\"><p>Music <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#School").click(function(){
        $(".School").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".School, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"School-Filter\"><p>School <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Slice-of-Life").click(function(){
        $(".Slice-of-Life").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Slice, .active").fadeTo(1000,1)
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Slice-of-Life-Filter\"><p>Slice of Life <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Sports").click(function(){
        $(".Sports").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Sports, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Sports-Filter\"><p>Sports <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Supernatural").click(function(){
        $(".Supernatural").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Supernatural, .active").fadeTo(1000,1)        
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Supernatural-Filter\"><p>Supernatural <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });
    $("#Romance").click(function(){
        $(".Romance").addClass("active");
        $(".anime").fadeTo(1000,0.4);
        $(".Romance, .active").fadeTo(1000,1);
        $("#Filter-Ops").fadeIn();
        $(this).addClass("disabled");
        $("#Filter-Ops").prepend("<div id=\"Romance-Filter\"><p>Romance <span class=\"glyphicon glyphicon-remove\"></span></p></div>");
    });

    

$("#Filter-Ops").on("click","#Adventure-Filter span",function(){
        $("#Adventure").removeClass("disabled");
        $("#Adventure-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Adventure-Filter").remove();
        }, 500);
        $(".Adventure").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Action-Filter span",function(){
        $("#Action").removeClass("disabled");
        $("#Action-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Action-Filter").remove();
        }, 500);
        $(".Action").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Comedy-Filter span",function(){
        $("#Comedy").removeClass("disabled");
        $("#Comedy-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Comedy-Filter").remove();
        }, 500);
        $(".Comedy").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Drama-Filter span",function(){
        $("#Drama").removeClass("disabled");
        $("#Drama-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Drama-Filter").remove();
        }, 500);
        $(".Drama").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Ecchi-Filter span",function(){
        $("#Ecchi").removeClass("disabled");
        $("#Ecchi-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Ecchi-Filter").remove();
        }, 500);
        $(".Ecchi").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Fantasy-Filter span",function(){
        $("#Fantasy").removeClass("disabled");
        $("#Fantasy-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Fantasy-Filter").remove();
        }, 500);
        $(".Fantasy").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#SF-Filter span",function(){
        $("#SF").removeClass("disabled");
        $("#SF-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#SF-Filter").remove();
        }, 500);
        $(".SF").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Harem-Filter span",function(){
        $("#Harem").removeClass("disabled");
        $("#Harem-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Harem-Filter").remove();
        }, 500);
        $(".Harem").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Gore-Filter span",function(){
        $("#Gore").removeClass("disabled");
        $("#Gore-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Gore-Filter").remove();
        }, 500);
        $(".Gore").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Horror-Filter span",function(){
        $("#Horror").removeClass("disabled");
        $("#Horror-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Horror-Filter").remove();
        }, 500);
        $(".Horror").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Mecha-Filter span",function(){
        $("#Mecha").removeClass("disabled");
        $("#Mecha-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Mecha-Filter").remove();
        }, 500);
        $(".Mecha").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Military-Filter span",function(){
        $("#Military").removeClass("disabled");
        $("#Military-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Military-Filter").remove();
        }, 500);
        $(".Military").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Thriller-Filter span",function(){
        $("#Thriller").removeClass("disabled");
        $("#Thriller-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Thriller-Filter").remove();
        }, 500);
        $(".Thriller").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Mystery-Filter span",function(){
        $("#Mystery").removeClass("disabled");
        $("#Mystery-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Mystery-Filter").remove();
        }, 500);
        $(".Mystery").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Police-Filter span",function(){
        $("#Police").removeClass("disabled");
        $("#Police-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Police-Filter").remove();
        }, 500);
        $(".Police").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Psychological-Filter span",function(){
        $("#Psychological").removeClass("disabled");
        $("#Psychological-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Psychological-Filter").remove();
        }, 500);
        $(".Psychological").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Music-Filter span",function(){
        $("#Music").removeClass("disabled");
        $("#Music-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Music-Filter").remove();
        }, 500);
        $(".Music").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#School-Filter span",function(){
        $("#School").removeClass("disabled");
        $("#School-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#School-Filter").remove();
        }, 500);
        $(".School").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Slice-of-Life-Filter span",function(){
        $("#Slice-of-Life").removeClass("disabled");
        $("#Slice-of-Life-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Slice-of-Life-Filter").remove();
        }, 500);
        $(".Slice-of-Life").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();

};
});
$("#Filter-Ops").on("click","#Sports-Filter span",function(){
        $("#Sports").removeClass("disabled");
        $("#Sports-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Sports-Filter").remove();
        }, 500);
        $(".Sports").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Supernatural-Filter span",function(){
        $("#Supernatural").removeClass("disabled");
        $("#Supernatural-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Supernatural-Filter").remove();
        }, 500);
        $(".Supernatural").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
$("#Filter-Ops").on("click","#Romance-Filter span",function(){
        $("#Romance").removeClass("disabled");
        $("#Romance-Filter").animate({right:"-127%"});
        setTimeout(function() {
            $("#Romance-Filter").remove();
        }, 500);
        $(".Romance").fadeTo(1000,0.4);
        if ($("#Filter-Ops div").length===1) {
            $(".anime").fadeTo(1000,1);
            $("#Filter-Ops").fadeOut();
        };
});
    $("#Filter-Ops img").click(function(){
        $("#Filter-Ops div").animate({right:"170%"});
    });
    $(".anime h6 img").click(function(){
        alert($(this).parent().parent().attr("id"));
    });
});