$(document).ready(function(){
    var infodisplay = $("#info-display");
    var synopsis = $("#synopsis");
    var bh3 = $("#blueimp-gallery h3");
    var ThemeAnime1 = $("#ThemeAnime-1");
    var tab1 = $("#tab1");
    var tab2 = $("#tab2");
    var menu1_p = $("#menu1 p");
    var menu2_p = $("#menu2 p");
    var menu1_img = $("#menu1 div img");
    var menu2_img = $("#menu2 div img");
    var a_first_nav= $('.nav-tabs a:first');
    var Re_Ops = $(".Re-Ops");
    var tab3tab4 = $("#tab3, #tab4");
    var blueimpgallery = $("#blueimp-gallery");
	$("#Re").click(function(){
        $("#home").fadeIn().delay(700).fadeOut();
        Re_Ops.fadeIn();
        $("a.close").hide();
        $("a.reverse").show();
    });
    $("a.reverse").click(function(){
        blueimpgallery.fadeOut();
        Re_Ops.fadeIn();
    });
    $("#best").click(function(){
        $("#BestofAnime").fadeIn().delay(700).fadeOut();
        Re_Ops.fadeOut();
        setTimeout(function(){
        a_first_nav.tab('show');
            var gallery = blueimp.Gallery([
            {title:"FULLMETAL ALCHEMIST BROTHERHOOD", href:'background/1.jpg',type: 'image/jpeg'},
            {title:"Steins;Gate", href:'background/2.jpg',type: 'image/jpeg'},
            {title:"HUNTER X HUNTER", href:'background/3.jpg',type: 'image/jpeg'},
            {title:"CLANNAD AFTER STORY", href:'background/4.jpg',type: 'image/jpeg'},
            {title:"Sen to Chihiro no Kamikakushi", href:'background/5.jpg',type: 'image/jpeg'},
            {title:"Shigatsu wa Kimi no Uso", href:'Gallery-Images/4월은-너의-거짓말/7.jpg',type: 'image/jpeg'},
            {title:"Suzumiya Haruhi no Shoushitsu", href:'img/스즈미야-하루히의-소실.jpg',type: 'image/jpeg'},
            {title:"Monogatari Series", href:'Gallery-Images/모노가타리-시리즈/1.png',type: 'image/jpeg'},
            {title:"Mushishi", href:'Gallery-Images/충사/5.jpg',type: 'image/jpeg'},
            {title:"Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.", href:'background/7.jpg',type: 'image/jpeg'},
            {title:"Code Geass", href:'Gallery-Images/코드-기아스/1.jpg',type: 'image/jpeg'},
            {title:"MONSTER", href:'Gallery-Images/MONSTER/1.jpg',type: 'image/jpeg'},
            {title:"Cowboy Bebap", href:'Gallery-Images/카우보이-비밥/3.jpg',type: 'image/jpeg'},
            {title:"Tengen Toppa Gurren Lagann", href:'Gallery-Images/그렌라간/5.jpg',type: 'image/jpeg'},
            {title:"Fate/Zero", href:'Gallery-Images/FateZero/3.jpg',type: 'image/jpeg'}
        ],{closeOnSlideClick: false, closeOnSwipeUpOrDown:false,hidePageScrollbars: false});
        blueimpgallery.fadeIn();
        },750);
    });
    $("#Genre").click(function(){
        $("#RebyGenre").fadeIn().delay(700).fadeOut();
            $("#genre-container").fadeIn();
        });
    $("#Theme").click(function(){
        $("#RebyTheme").fadeIn().delay(700).fadeOut();
        Re_Ops.fadeOut();
        setTimeout(function(){
            var gallery = blueimp.Gallery([
            {title:'Youth',href:'Gallery-Images/Oregairu/13.png',type:'image/png'},
            {title:'Talent and Effort',href:'Gallery-Images/사쿠라장의-애완그녀/2.jpg',type:'image/jpeg'},
            {title:'Dream and Reality',href:'Gallery-Images/바쿠만/1.jpg',type:'image/jpeg'},
            {title:'Countryside',href:'Gallery-Images/논논비요리/6.png',type:'image/png'},
            {title:'Time',href:'Gallery-Images/Steins;Gate/2.png',type:'image/jpeg'},
            {title:'Daily Life ≠ Ordinary',href:'Gallery-Images/일상/1.jpg',type:'image/jpeg'},
            {title:'Brave New World',href:'Gallery-Images/PSYCHO-PASS/4.jpg',type:'image/jpeg'},
            {title:'Greed of Man',href:'Gallery-Images/카이지/2.jpg',type:'image/jpeg'},
            {title:'Death',href:'Gallery-Images/데스-퍼레이드/1.png',type:'image/png'},
            {title:'Idealism',href:'Gallery-Images/DEATH-NOTE/2.jpg',type:'image/jpeg'},
            {title:'Metamorphosis',href:'Gallery-Images/도쿄구울/1.jpg',type:'image/jpeg'},
            {title:'Twist',href:'Gallery-Images/Another/3.jpg',type:'image/jpeg'},
            {title:'Basketball',href:'Gallery-Images/슬램덩크/1.jpg',type:'image/jpeg'},
            {title:'Murder Game',href:'Gallery-Images/미래일기/2.jpg',type:'image/jpeg'},
            {title:'Food',href:'img/식극의 소마.jpg',type:'image/jpeg'}
        ],{closeOnSlideClick: false, closeOnSwipeUpOrDown:false,hidePageScrollbars: false});
        blueimpgallery.fadeIn();
        },750);
        $("#ThemeAnime-1").show();
    });
    $("#Season").click(function(){
        $("#RebySeason").fadeIn().delay(700).fadeOut();
    });
    $("#ThemeAnime-1 span.glyphicon").click(function(){
        ThemeAnime1.animate({left:"100%"});
    });
    bh3.on('click',function(){
        if($(this).text()==="Youth") {
            if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');

            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Oregairu");
            menu1_img.attr("src","Gallery-Images/Oregairu/1.png");
            menu1_p.html("After being turned down by his unrequited crush, Hachiman Hikigaya is determined to live out the rest of his high school life single and socially tuned out to avoid the folly of youth. But Hachiman's resolve is lacking compared to his guidance counselor, a woman determined to change the boy's ways. So, much to his dismay, Hachiman is soon forced to reach out to those around him by joining a club dedicated to serving others. Alongside the cold, but beautiful club president Yukino, eager Yui, and other new friends, Hachiman will try to stomach his new volunteer work and survive his ultimate fear: being involved in a typical high school romantic comedy.");
            tab2.text("Hyouka");
            menu2_img.attr("src","Gallery-Images/빙과/5.jpg");
            menu2_p.html("\"If I don't have to do it, I won't. If I do have to do it, make it quick,\" is the basic principle by which energy conservationist Houtarou Oreki lives. But after his sister convinces him to join the Classics Club, Houtarou's life is turned upside down when he meets Chitanda, a perpetually-inquisitive girl who challenges the boy's easygoing existence. Intrigued by the slightest hint of a mystery afoot, Chitanda doesn't hesitate to pester the reluctant yet highly analytical Houtarou into satisfying her curiosity at every turn, no matter how small the problem. Alongside fellow members Satoshi and Ibara, the group tackles cases ranging from a self-locking classroom door, a strangely-popular library book, and even the shadowy history of the very club to which they belong!");
        },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Talent and Effort") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Sakurasou no Pet na Kanojo");
            menu1_img.attr("src","Gallery-Images/사쿠라장의-애완그녀/1.jpg");
            menu1_p.html("Sorata Kanda has a real problem - he just can't say no to the cute face of a kitten! However, his lovely strays have finally landed him in trouble, as his dorm doesn't allow keeping pets. Given an ultimatum to get rid of the cats or move out, Sorata makes the mistake of standing up for himself and finds himself exiled to Sakurasou, the home of misfits the school doesn't know what to do with. Yet the more he spends time there, Sorata sees they all have their own incredible talents. None, however, enthralls him more than the latest arrival: Mashiro Shiina, a world class artist who is seemingly incapable of feeding or clothing herself! Since none of the other residents have a shred of responsibility, the onus of 'Mashiro Duty' falls to Sorata; what will become of Sorata and his latest stray, and will he ever achieve his goal of escaping Sakurasou");
            tab2.text("Boku no Hero Academia");
            menu2_img.attr("src","Gallery-Images/나의-히어로-아카데미야/1.jpg");
            menu2_p.html("Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not going to stop him from enrolling in one of the world’s most prestigious hero academies. Now, the only thing standing between him and his first class is the academy’s formidable entrance exam—nothing a little private tutoring from the world’s mightiest hero can’t solve.");
        },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Dream and Reality") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Bakuman");
            menu1_img.attr("src","Gallery-Images/바쿠만/2.jpg");
            menu1_p.html("Moritaka Mashiro feels as if life is passing him by; with no dreams or motivation, he trudges through day-to-day life. One day, after leaving his notebook behind, he returns to school and finds the smartest guy in class, Takagi, waiting for him. Takagi is happy to return the book, but on the condition that Mashiro agrees to become a mangaka with him. Though Mashiro initially declines, he soon reconsiders when he discovers that the girl he likes, Azuki, dreams of becoming a voice actress. And after promising that she can have the lead role if their manga is ever adapted into an anime, he suggests that they get married once they are both successful! Shockingly, she agrees to the proposal and Mashiro and Takagi embark on their quest to become manga artists.");
            tab2.text("SHIROBAKO");
            menu2_img.attr("src","Gallery-Images/시로바코/4.jpg");
            menu2_p.html("Aoi will never forget how she felt the day her high school animation club’s labor of love was shown at the cultural festival. The sense of awe and the feeling of accomplishment that came with completing their very first project are exactly what encouraged Aoi and her club mates to enter the animation industry in the first place. But two years later Aoi has graduated, and now that she works as a production assistant for a big-name animation studio, the daunting reality of her job has somewhat diminished her enthusiasm. Despite the long hours and the punishing schedule, Aoi still hopes to fulfill the promise she and her club friends Ema, Shizuka, Misa, and Midori made: to one day reunite and make a real animated feature of their own as professionals!");
        },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Countryside") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Non Non Biyori");
            menu1_img.attr("src","Gallery-Images/논논비요리/4.jpg");
            menu1_p.html("When Hotaru transfers from a school in bustling Tokyo to a tiny school in a quiet country village, she’s in for a big adjustment. Although her new school only has five students, there's something about the laidback lifestyle that makes her feel right at home. It's a big change from the big city, but there are still plenty of new adventures to look forward to with her quirky new friends as Hotaru learns that “home” really is where the heart is.");
            tab2.text("Barakamon");
            menu2_img.attr("src","Gallery-Images/바라카몬/1.jpg");
            menu2_p.html("Barakamon follows the story of Seishuu Handa - a calligrapher, who as a punishment from punching another famous calligrapher is outlawed to a small island. As a city boy will Seishuu be able to adapt to his new environment?");
        },500);
            $("#tab3").hide();
            $("#tab4").hide();
        
        };
    });

    bh3.on('click',function(){
        if($(this).text()==="Time") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Steins;Gate");
            menu1_img.attr("src","Gallery-Images/Steins;Gate/7.jpg");
            menu1_p.html("The eccentric mad scientist Okabe, his childhood friend Mayuri, and the otaku hacker Daru have banded together to form the Future Gadget Research Laboratory, and spend their days in a ramshackle laboratory hanging out and occasionally attempting to invent incredible, yet generally useless, futuristic gadgets. However, their claymore is a hydrator and their hair dryer flips breakers, and the only invention that’s even remotely interesting is their Phone Microwave, which transforms bananas into oozing green gel. But when an experiment goes awry the gang discovers that the Phone Microwave can also send text messages to the past. And what's more, the words they send can affect the flow of time and have unforeseen, far-reaching consequences...");
            tab2.text("The Girl Who Leapt Through Time");
            menu2_img.attr("src","Gallery-Images/시간을-달리는-소녀/1.png");
            menu2_p.html("Makoto Konno is a somewhat foolish and tomboyish high school student who spends most of her time hanging out with her two male friends. Things change one day when she suddenly gains the ability to leap through time! At first, she uses her newfound ability to do things such as preventing her sister from stealing her dessert, cheating on a test, and singing Karaoke for 10 hours. However, the small alterations she makes to the timeline turn out to have unforeseen consequences that snowball into dramatic and lethal situations for her and those around her...");
            },500);
        tab3tab4.hide();

        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Daily Life ≠ Ordinary") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Nichijou");
            menu1_img.attr("src","Gallery-Images/일상/3.jpg");
            menu1_p.html("Everyday life may be full of mundane occurrences, but hidden amongst the banality, you can always find something fun to brighten your day. While schoolgirl Mio attempts to cheer up Yuuko after her horrific test score, Nano desperately tries in vain to get the stubborn Hakase to take her medicine. No matter the situation, these innocent girls can make the most of every situation, even by doing cartwheels at a deserted railway station.");
            tab2.text("Sakamoto desu ga?");
            menu2_img.attr("src","Gallery-Images/사카모토입니다만/1.jpg");
            menu2_p.html("Just who is Sakamoto? He's enigmatic. He's clever. He's dashing. No challenge is too great and no cause is too small for Sakamoto. Girls love him, guys hate him for it, and despite efforts to humiliate him, Sakamoto is flawlessly able to emerge from the fray, even cooler than ever. Who knows what Sakamoto is going to do next? Whatever it is, it will be fabulous!");
            },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Brave New World") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("PSYCHO-PASS");
            menu1_img.attr("src","Gallery-Images/PSYCHO-PASS/1.jpg");
            menu1_p.html("In the future, a system called Sibyl presides over the country and provides order to every facet of life. It dictates which job fields citizens should go into based on aptitude tests, and can even read each resident's mental state and predict which ones are likely to commit crimes in the future. Fresh from exams, Akane Tsunemori is beginning her career as an Inspector, a specialized police officer who works to apprehend these latent criminals and stop crimes before they happen. But not all that get caught are eliminated or jailed, some join the police force as Enforcers to provide insight into criminals’ minds, and Akane is warned not to get too close to them, as they're considered little more than hunting dogs. Though skeptical of this advice, and Sibyl's judgement, Akane is determined to work together with her Enforcers to protect the peace of her city and its inhabitants.");
            tab2.text("Kekkai Sensen");
            menu2_img.attr("src","Gallery-Images/혈계전선/4.jpg");
            menu2_p.html("A breach between Earth and the netherworlds has opened up over the city of New York, trapping New Yorkers and creatures from other dimensions in an impenetrable bubble. They've lived together for years, in a world of crazy crime sci-fi sensibilities. Now someone is threatening to sever the bubble, and a group of stylish superhumans is working to keep it from happening.");
            },500);
        tab3tab4.hide();

        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Greed of Man") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Gyakkyou Burai Kaiji:");
            menu1_img.attr("src","Gallery-Images/카이지/1.jpg");
            menu1_p.html("Kaiji Ito is as pathetic a person as they come; a man who gambles his days away, only winning enough to lose significantly more. He hates himself, is riddled with envy for others, but is ultimately too weak to think of a way out of his massive debts. Then one day he is approached by a strange man who offers him what seems the solution of a lifetime – to take a short journey on a ship called Espoir, during which time he will be given the chance to win more cash than he can dream of in a card game like no other. Ever the desperate, Kaiji takes the gamble of his life; however, the game turns out to be far darker than he expected and the hard lessons pile on thick and fast. Now stuck in a closed world of unsavory characters willing to do anything to destroy him, can Kaiji gather enough courage to outwit them all?");
            tab2.text("Fate/Zero");
            menu2_img.attr("src","Gallery-Images/FateZero/3.jpg");
            menu2_p.html("Ten years before Shirou Emiya's and Saber's fateful meeting, Japan is the stage for the fourth Holy Grail War. Seven Masters, each with his own dreams, step forward to win the boon of the mystic relic. Into this fray comes Kiritsugu Emiya, the enigmatic \"Mage Killer\" who wants to use the Grail to make a better world. Can he, paired with the indomitable Saber win the War? Or will he fall to the ambitions of the other mages?");
             },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Death") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Death Parade");
            menu1_img.attr("src","Gallery-Images/데스-퍼레이드/2.jpeg");
            menu1_p.html("After death, humans go to either heaven or hell. But for some, at the instant of their death, they arrive at the Queen Decim, a bar attended by the mysterious white-haired Decim. He challenges them to the Death Game, wherein they wager their lives and reveal their true natures. Decim himself is the ultimate arbitrator of who wins and who loses, who lives and who dies.");
            tab2.text("Angel Beats!");
            menu2_img.attr("src","Gallery-Images/Angel-Beats/1.jpg");
            menu2_p.html("Death and reincarnation are inescapable, but what happens in between? Without warning and without his memories, a boy who only recalls his last name - Otonashi - wakes up next to a girl named Yuri who offers him a gun and tells him to shoot an angel. Assuming it must be a misunderstanding, Otonashi is then almost killed by the angel and is drawn into Yuri's army to battle to delay the beginning of his next life. Immortality is within reach, but if Otonashi remembers how he died, will he keep fighting or allow himself to vanish?");
            },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Idealism") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Death Note");
            menu1_img.attr("src","Gallery-Images/DEATH-NOTE/6.jpg");
            menu1_p.html("Have you ever felt like the world would be a better place if certain people weren’t around? Such grim daydreams might occur when watching the dismal daily news, but on one fateful day, Light Yagami finds that these daydreams can become reality. By pure happenstance, he comes across a black notebook entitled \"Death Note\", whose text within states that whoever's name is written on its pages will die. With the aid of the death god Ryuk, Light takes it upon himself to rid the world of its corruption, ushering in a new era of purity one death at a time. But as Ryuk foretells, Light's actions will not go unchallenged...");
            tab2.text("World God Only Knows");
            menu2_img.attr("src","Gallery-Images/신만이-아는-세계/2.jpg");
            menu2_p.html("Dating sim master Keima Katsuragi wants nothing more than to immerse himself in the 2D world, chasing digital girlfriends. But when the so-called 'Capturing God' answers a mysterious email from an unknown sender, Keima finds himself chasing down real-life ladies in an attempt to help the peppy demon Elsie de Lute Irma capture 'lost souls' escaped from the depths of hell. Now, lest the explosive collar around his neck detonate, Keima must convince various girls to fall in love with him in order to scare out the souls hiding in their hearts.");
            },500);
        tab3tab4.hide();

        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Metamorphosis") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Tokyo Ghoul");
            menu1_img.attr("src","Gallery-Images/도쿄구울/2.jpg");
            menu1_p.html("In modern day Tokyo, society lives in fear of Ghouls: mysterious creatures who look exactly like humans -- yet hunger insatiably for their flesh. None of this matters to Ken Kaneki, a bookish and ordinary young man, until a dark and violent encounter turns him into the first ever Ghoul-human half breed. Trapped between two worlds, Ken must survive the violent conflicts of warring Ghoul factions, while attempting to learn more about Ghoul society, his newfound powers, and the fine line between man and monster.");
            tab2.text("Paracyte");
            menu2_img.attr("src","Gallery-Images/기생수/1.jpg");
            menu2_p.html("In secret, alien parasites drift downwards toward Earth. Their directive: to take control of a human body and thrive in secret. When a parasite attempts to take over Shinji, an ordinary high school student, he stops it in his arm to save his mind. With the strange power of amorphous muscle, the curious parasite strikes an uneasy truce with Shinji: it will keep him alive and strong so that it may continue living, and will help protect him from the other parasites that might not take kindly to Shinji's mind still actively working. Can Shinji gain the courage to face the parasites and protect humanity? And would it even make a difference if he did?");
            },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Twist") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Gakkougurashi");
            menu1_img.attr("src","Gallery-Images/학교생활/1.jpg");
            menu1_p.html("The story revolves around four girls who decide to stay over at school: the energetic Yuki Takeya, the shovel-loving Rumi, the center of the group Yuuri, who brings everyone together, and Megu, the spacey school adviser. However, a cruel reality reveals as the story folds.....");
            tab2.text("Another");
            menu2_img.attr("src","Gallery-Images/아노하나/7.jpg");
            menu2_p.html("Long ago, young Meiko Honma tragically died and her tight-knit group of friends, shaken by the event, drifted apart. Now, ten years later, Meiko has re-appeared as a ghost that only Jinta, the former leader of the gang and an avid shut-in, can see. All she desires is for Jinta to fulfill her final wish so that she can move on to the afterlife, but with no memory of what it was, it’s up to the teenager to gather his former friends and discover what will allow his beloved friend to rest in peace. With so many feelings left unsaid, can this group work out their strife and help the ghost of the girl they once adored?");
        },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Basketball") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("SLAM DUNK");
            menu1_img.attr("src","Gallery-Images/슬램덩크/2.jpg");
            menu1_p.html("Sakuragi has hit an all-time low. During his last year of junior high school, fifty different girls rejected him, the last one choosing a basketball player instead. Thus it’s no surprise that in high school, Sakuragi beats up anyone who dares utter the name of the sport. However, it’s not long until he meets Haruko, a beautiful basketball enthusiast, and is determined to make her fall in love with him – even signing up for the school team to accomplish his goal. However, winning Haruko’s heart won’t be easy, as her brother is the strict and protective captain of the basketball team and Haruko’s eyes are focused on Sakuragi’s rival, the talented Rukawa. Can Sakuragi give up his delinquent ways to help get the team to Nationals, or will his temper get him kicked out before he can learn to dribble the ball?");
            tab2.text("Kuroko no Basket");
            menu2_img.attr("src","Gallery-Images/쿠로코의-농구/2.jpg");
            menu2_p.html("They were known as the 'Generation of Miracles' – five basketball prodigies who helped lead Teiko Middle School's basketball team to glory, defeating anyone who got in their way. But a mysterious rumor tells of a sixth, a phantom player who the five prodigies respected greatly. That boy is Tetsuya Kuroko, a freshman at Seirin High and the newest member of the basketball club. Alongside strong teammates such as Taiga Kagami, Kuroko will use his unique skills on the court to help the team defeat old rivals and make their way to the championships.");
        },500);
        tab3tab4.hide();
        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Food") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("Shokugeki no Souma");
            menu1_img.attr("src","Gallery-Images/식극의-소마/7.jpg");
            menu1_p.html("Food Wars! Shokugeki no Souma centers on Yukihira Souma, a middle school student who is determined to surpass his father’s culinary skills. One day, his father decides to close down their family restaurant and hone his skills in Europe. Before leaving, he enrolls Souma in an elite culinary school that is extremely difficult to enter with a graduation rate of only 10 percent. Will Souma be able to improve his skills, or will the kitchen prove to be too hot?");
            tab2.text("Koufuku Graffiti");
            menu2_img.attr("src","Gallery-Images/행복-그래피티/1.jpg");
            menu2_p.html("After her grandmother’s passing, middle school student Ryou Machiko is not only living alone but has lost her appetite. This quickly changes when her cousin Kirin moves in. The meals they eat together are filled with love. With Ryou's friend, Shiina, joining in, their heartwarming halcyon days of meals begin!");
        },500);
        tab3tab4.hide();

        };
    });
    bh3.on('click',function(){
        if($(this).text()==="Murder Game") {
        if(parseInt(ThemeAnime1.css("left")) < screen.width) {
                ThemeAnime1.stop().animate({left:"100%"}).delay(500).animate({left:"55%"});
            }
            setTimeout(function(){
            a_first_nav.tab('show');
            ThemeAnime1.stop().animate({left:"55%"});
            tab1.text("미래일기");
            menu1_img.attr("src","Gallery-Images/미래일기/3.jpg");
            menu1_p.html("Yuki is a disaffected middle school boy who has no dreams or goals in life; in fact, the only thing he has is his diary. Writing down everything he observes and documenting every thought, the young boy uses it as an outlet for his imagination. One morning, however, Yuki wakes up to find his cell phone filled with diary entries for the next ninety days. Thinking nothing of it, he continues his morning until he begins to realize that everything on his phone is rapidly coming to pass, and it isn't just mere coincidence. Now, Yuki suddenly finds himself thrust into a survival game against other future diary owners to become the new Lord of Time");
            tab2.text("단간론파");
            menu2_img.attr("src","Gallery-Images/단간론파/Normal/1.jpg");
            menu2_p.html("Hope’s Peak Private Academy is a super-exclusive institute that gathers the best and the brightest, provides them with a world-class education, and propels them into any career they wish. At least, that’s what the average student Naegi used to think. Having been accepted into a class of 15 students through a lottery system, the boy quickly comes to learn that Hope’s Peak is no ordinary school. In reality, he and the group find themselves trapped inside and learn that the only way to \"graduate\" is to murder a fellow student and fool everyone in a trial that determines life or death! Led by the whimsically-cruel, teddy-bear-like Monobear, Naegi and the others must do whatever it takes to escape this bizarre, deadly game.");
        },500);
        tab3tab4.hide();

        };
    });
    bh3.on('click',function(){
    	
        if($(this).text()==="FULLMETAL ALCHEMIST BROTHERHOOD") {

        infodisplay.fadeIn();
           synopsis.html("\"In order for something to be obtained, something of equal value must be lost.\" </br></br> Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist. </br></br> Three years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
        if($(this).text()==="Steins;Gate") {
           infodisplay.fadeIn();
           synopsis.html("The self-proclaimed mad scientist Rintarou Okabe rents out a room in a rickety old building in Akihabara, where he indulges himself in his hobby of inventing prospective \"future gadgets\" with fellow lab members: Mayuri Shiina, his air-headed childhood friend, and Hashida Itaru, a perverted hacker nicknamed \"Daru.\" The three pass the time by tinkering with their most promising contraption yet, a machine dubbed the \"Phone Microwave,\" which performs the strange function of morphing bananas into piles of green gel. </br></br> Though miraculous in itself, the phenomenon doesn't provide anything concrete in Okabe's search for a scientific breakthrough; that is, until the lab members are spurred into action by a string of mysterious happenings before stumbling upon an unexpected success—the Phone Microwave can send emails to the past, altering the flow of history. </br></br> Adapted from the critically acclaimed visual novel by 5pb. and Nitroplus, Steins;Gate takes Okabe through the depths of scientific theory and practicality. Forced across the diverging threads of past and present, Okabe must shoulder the burdens that come with holding the key to the realm of time.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="HUNTER X HUNTER") {
            infodisplay.fadeIn();
           synopsis.html("Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son. However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined. </br></br> Along the way to becoming an official Hunter, Gon befriends the lively doctor-in-training Leorio, vengeful Kurapika, and rebellious ex-assassin Killua. To attain their own goals and desires, together the four of them take the Hunter Exam, notorious for its low success rate and high probability of death. Throughout their journey, Gon and his friends embark on an adventure that puts them through many hardships and struggles. They will meet a plethora of monsters, creatures, and characters—all while learning what being a Hunter truly means.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="CLANNAD AFTER STORY") {
           infodisplay.fadeIn();
           synopsis.html("Clannad: After Story, the sequel to the critically acclaimed slice-of-life series Clannad, begins after Tomoya Okazaki and Nagisa Furukawa graduate from high school. Together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic and discovers the strength of Nagisa's support. Through the couple's dedication and unity of purpose, they push forward to confront their personal problems, deepen their old relationships, and create new bonds. </br></br> Time also moves on in the Illusionary World. As the plains grow cold with the approach of winter, the Illusionary Girl and the Garbage Doll are presented with a difficult situation that reveals the World's true purpose. </br></br> Based on the visual novel by Key and produced by Kyoto Animation, Clannad: After Story is an impactful drama highlighting the importance of family and the struggles of adulthood.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="Sen to Chihiro no Kamikakushi") {
            infodisplay.fadeIn();
           synopsis.html("Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way. </br></br> Vivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="Shigatsu wa Kimi no Uso") {
            infodisplay.fadeIn();
           synopsis.html("Music accompanies the path of the human metronome, the prodigious pianist Kousei Arima. But after the passing of his mother, Saki Arima, Kousei falls into a downward spiral, rendering him unable to hear the sound of his own piano. </br></br> Two years later, Kousei still avoids the piano, leaving behind his admirers and rivals, and lives a colorless life alongside his friends Tsubaki Sawabe and Ryouta Watari. However, everything changes when he meets a beautiful violinist, Kaori Miyazono, who stirs up his world and sets him on a journey to face music again. </br></br> Based on the manga series of the same name, Shigatsu wa Kimi no Uso approaches the story of Kousei's recovery as he discovers that music is more than playing each note perfectly, and a single melody can bring in the fresh spring air of April.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
    	
    	
        if($(this).text()==="Suzumiya Haruhi no Shoushitsu") {
        infodisplay.fadeIn();
           synopsis.html("One cold Christmas day, Kyon heads over to school and the SOS Brigade's holiday celebration, only to realize that Haruhi Suzumiya seems to have disappeared. Moreover, no one even remembers her or the SOS Brigade; Mikuru Asahina knows nothing and is now afraid of him, and Itsuki Koizumi has also gone missing. The Literature Club, formed only by an uncharacteristically shy Yuki Nagato, now occupies the old SOS club room. </br></br> Suzumiya Haruhi no Shoushitsu is based on the fourth light novel of the acclaimed Haruhi series and is set after the events of the anime series. Not uncultured in the supernatural, Kyon will have to deal with his whole life turned upside down like a bad joke, and maybe it's better that way.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
        
        
        if($(this).text()==="Monogatari Series") {
            infodisplay.fadeIn();
           synopsis.html("Koyomi Araragi, a third-year high school student, manages to survive a vampire attack with the help of Meme Oshino, a strange man residing in an abandoned building. Though being saved from vampirism and now a human again, several side effects such as superhuman healing abilities and enhanced vision still remain. Regardless, Araragi tries to live the life of a normal student, with the help of his friend and the class president, Tsubasa Hanekawa. </br></br> When fellow classmate Hitagi Senjougahara falls down the stairs and is caught by Araragi, the boy realizes that the girl is unnaturally weightless. Despite Senjougahara's protests, Araragi insists he help her, deciding to enlist the aid of Oshino, the very man who had once helped him with his own predicament. </br></br> Through several tales involving demons and gods, Bakemonogatari follows Araragi as he attempts to help those who suffer from supernatural maladies.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
        infodisplay.fadeIn();
        if($(this).text()==="Mushishi") {
        synopsis.html("\"Mushi\": the most basic forms of life in the world. They exist without any goals or purposes aside from simply \"being.\" They are beyond the shackles of the words \"good\" and \"evil.\" Mushi can exist in countless forms and are capable of mimicking things from the natural world such as plants, diseases, and even phenomena like rainbows. </br></br> This is, however, just a vague definition of these entities that inhabit the vibrant world of Mushishi, as to even call them a form of life would be an oversimplification. Detailed information on Mushi is scarce because the majority of humans are unaware of their existence. </br></br> So what are Mushi and why do they exist? This is the question that a \"Mushi-shi,\" Ginko, ponders constantly. Mushi-shi are those who research Mushi in hopes of understanding their place in the world's hierarchy of life. </br></br> Ginko chases rumors of occurrences that could be tied to Mushi, all for the sake of finding an answer. </br></br> It could, after all, lead to the meaning of life itself.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    });
    bh3.on('click',function(){
        if($(this).text()==="Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.") {
            infodisplay.fadeIn();
           synopsis.html("Jinta Yadomi is peacefully living as a recluse, spending his days away from school and playing video games at home instead. One hot summer day, his childhood friend, Meiko \"Menma\" Honma, appears and pesters him to grant a forgotten wish. He pays her no mind, which annoys her, but he doesn't really care. After all, Menma already died years ago. </br></br> At first, Jinta thinks that he is merely hallucinating due to the summer heat, but he is later on convinced that what he sees truly is the ghost of Menma. Jinta and his group of childhood friends grew apart after her untimely death, but they are drawn together once more as they try to lay Menma's spirit to rest. Re-living their pain and guilt, will they be able to find the strength to help not only Menma move on—but themselves as well?");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        if($(this).text()==="Code Geass") {
            infodisplay.fadeIn();
           synopsis.text();
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        
        if($(this).text()==="Cowboy Bebap") {
            infodisplay.fadeIn();
           synopsis.html("In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals. </br></br> Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little.  </br></br> Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after. ");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        
        if($(this).text()==="Tengen Toppa Gurren Lagann") {
            infodisplay.fadeIn();
           synopsis.html("Simon and Kamina were born and raised in a deep, underground village, hidden from the fabled surface. Kamina is a free-spirited loose cannon bent on making a name for himself, while Simon is a timid young boy with no real aspirations. One day while excavating the earth, Simon stumbles upon a mysterious object that turns out to be the ignition key to an ancient artifact of war, which the duo dubs Lagann. Using their new weapon, Simon and Kamina fend off a surprise attack from the surface with the help of Yoko Littner, a hot-blooded redhead wielding a massive gun who wanders the world above. </br></br> In the aftermath of the battle, the sky is now in plain view, prompting Simon and Kamina to set off on a journey alongside Yoko to explore the wastelands of the surface. Soon, they join the fight against the \"Beastmen,\" humanoid creatures that terrorize the remnants of humanity in powerful robots called \"Gunmen.\" Although they face some challenges and setbacks, the trio bravely fights these new enemies alongside other survivors to reclaim the surface, while slowly unraveling a galaxy-sized mystery.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
        
        if($(this).text()==="Fate/Zero") {
            infodisplay.fadeIn();
           synopsis.html("With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated \"Magus Killer\" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract. </br></br> Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu. </br></br> Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
        
    });
    bh3.on('click',function(){
    if($(this).text()==="MONSTER") {
        infodisplay.fadeIn();
        synopsis.text("Dr. Kenzou Tenma is a renowned brain surgeon of Japanese descent working in Europe. Highly lauded by his peers as one of the great young minds that will revolutionize the field, he is blessed with a beautiful fiancée and is on the cusp of a big promotion in the hospital he works at. But all of that is about to change with a grave dilemma that Kenzou faces one night—whether to save the life of a small boy or that of the town's mayor. Despite being pressured by his superiors to perform surgery on the mayor, his morals force him to perform the surgery on the other critical patient, saving his life and forfeiting the mayor's. A doctor is taught to believe that all life is equal; however, when a series of murders occur in the surgeon's vicinity, all of the evidence pointing to the boy he saved, Kenzou's beliefs are shaken. Along his journey to unravel the true identity of his little patient, Kenzou discovers that the fate of the world may be intertwined with the mysterious child.");
        infodisplay.stop().animate({top: (screen.height-parseInt(synopsis.css("height"))-220).toString()+'px'});
        }
    
    });
    $("#info-display span").click(function(){
    	infodisplay.stop().animate({top:'100%'});
    });
});