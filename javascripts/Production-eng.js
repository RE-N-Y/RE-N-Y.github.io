$(document).ready(function(){
    var image = $("#Production_Display div.thumbnail img");
    var Productionone = $("#Production-1");
    var Productiontwo = $("#Production-2");

    $("#Production").click(function(){
        Productiontwo.fadeIn();
        //$(".Production").fadeIn();
        $(function () {
            Productiontwo.animate({
             top: '-20%'
            }, { duration: 500, queue: false });
            Productiontwo.animate({
             right: '-20%'
            }, { duration: 500, queue: false });
        });
        $(".Dividers").fadeIn();
    });
    $("#Production-2 li span").click(function(){
        Productionone.fadeIn();
        $(function () {
            Productiontwo.animate({
             top: '-120%'
            }, { duration: 500, queue: false });
            Productiontwo.animate({
             right: '-110%'
            }, { duration: 500, queue: false });
            Productionone.animate({
             top: '35%'
            }, { duration: 500, queue: false });
            Productionone.animate({
             left: '-5%'
            }, { duration: 500, queue: false });
        });
    });
    $("#Production-1 li span").click(function(){
        Productiontwo.fadeIn();
        $(function () {
            Productionone.animate({
             top: '135%'
            }, { duration: 500, queue: false });
            Productionone.animate({
             left: '-105%'
            }, { duration: 500, queue: false });
            Productiontwo.animate({
             top: '-20%'
            }, { duration: 500, queue: false });
            Productiontwo.animate({
             right: '-20%'
            }, { duration: 500, queue: false });
        });
    });
    $(".Production").click(function(){
        $("#Production_Description").fadeIn();
        $("#Production_Display").fadeIn();
        $(".Productions").fadeOut();
    });
    $(document).keyup(function(e) {
     if (e.keyCode == 27) {
           $(".Productions").fadeOut();
           Productionone.fadeOut();
           Productiontwo.fadeOut();
           $(function () {
            Productionone.animate({
             top: '135%'
            }, { duration: 500, queue: false });
            Productionone.animate({
             left: '-105%'
            }, { duration: 500, queue: false });
            Productiontwo.animate({
             top: '-120%'
            }, { duration: 500, queue: false });
            Productiontwo.animate({
             right: '-110%'
            }, { duration: 500, queue: false });
            });
        }
    });
    $("#close").click(function(){
        $("#Production_Display").fadeOut();
        $("#Production_Description").fadeOut();
        $(".Productions").fadeIn();
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
        if (image.attr("src")==="template/Shaft4.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Shaft3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Shaft2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft1.jpg"); next();}).delay(100).slideDown();   
        }
        if (image.attr("src")==="template/Shaft1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft4.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/Bones2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Bones1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/Bones1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Bones2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Gainax1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Gainax2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Gainax2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Gainax1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/A-1 Pictures1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 Pictures2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/A-1 Pictures2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 Pictures1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/ufotable1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/ufotable2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/ufotable2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 ufotable1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/Sunrise3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Sunrise2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Sunrise1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise3.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/KyoAni6.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni5.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni5.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni4.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni4.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni6.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff5.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff4.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff4.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff5.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Doga Kobo3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Doga Kobo2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Doga Kobo1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/TRIGGER1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/TRIGGER2.png"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/TRIGGER2.png") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/TRIGGER1.jpg"); next();}).delay(100).slideDown();
        }
    });
    $("#right").click(function(){
        if (image.attr("src")==="template/Shaft1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Shaft2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Shaft3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft4.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Shaft4.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Shaft1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/Bones1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Bones2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Bones2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Bones1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Gainax1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Gainax2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Gainax2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Gainax1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/A-1 Pictures1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 Pictures2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/A-1 Pictures2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/A-1 Pictures1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/ufotable1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/ufotable2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/ufotable2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/ufotable1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/Lerche1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Lerche2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Lerche2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Lerche3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Lerche3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Lerche1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/Sunrise1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Sunrise2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Sunrise3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Sunrise1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/KyoAni1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni4.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni4.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni5.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni5.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni6.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/KyoAni6.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/KyoAni1.jpg"); next();}).delay(100).slideDown();
        }

        if (image.attr("src")==="template/J.C.Staff1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff4.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff4.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff5.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/J.C.Staff5.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/J.C.Staff1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Doga Kobo1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo2.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Doga Kobo2.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo3.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/Doga Kobo3.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/Doga Kobo1.jpg"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/TRIGGER1.jpg") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/TRIGGER2.png"); next();}).delay(100).slideDown();
        }
        if (image.attr("src")==="template/TRIGGER2.png") {
            image.slideUp().delay(100).queue(function(next){$(this).attr("src","template/TRIGGER1.jpg"); next();}).delay(100).slideDown();
        }
    });*/





    
});