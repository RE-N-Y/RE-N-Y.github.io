$(document).ready(function(){
	var random = Math.floor((Math.random() * 44));
	var randomlist = ["未完成ストライド(미완성 스트라이드)","MEMORIA","Vanilla Salt","Orange","アイノヨカン(사랑의 예감)","Don't say 'lazy'","Inside Identity","Magia","シュガーソングとビターステップ(Sugar Song and Bitter Step)","Lost my music","marshmallow justice","Masshiro World","白金ディスコ(백금 디스코)","紅蓮の弓矢(홍련의 화살)","Hello,world!","God knows","silky heart","staple stable","Golden Time Lover","Someone Else","Period","COLORFUL BOX","Pre Parade","君にまつわるミステリ-(너에 관한 미스테리)","空色デイズ(하늘색 데이즈)","君じゃなきゃダメみたい(네가 아니면 안되나봐)","恋愛サーキュレーション(연예 서큘레이션)","Sparkling Daydream","Cagayake!GIRLS","READY!!","君の知らない物語(네가 모르는 이야기)","ray of light","again","幸せのありか(행복이 있는 곳)","コネクト(Connect)","青い栞(푸른 책갈피","Re;Re;","rain","Hacking to the gate","A Whole New World God Only Knows","secret base 〜君がくれたもの〜","UNDERGROUND - HIGH VOLTAGE","to the beginning","oath sign","The Sore Feet Song"];
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:randomlist[random],
			mp3:"music/Random-Music/"+randomlist[random]+".mp3"
		}
	], {
		playlistOptions: {
			enableRemoveControls: true,
			autoPlay: true
		},
		swfPath: "javascripts/jquery.jplayer.swf",
		supplied: "mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
	$("#스즈미야-하루히의-우울 h6").click(function(){
		myPlaylist.setPlaylist([
		{
			title:"冒険でしょでしょ(모험이지요지요?)",
			mp3:"music/스즈미야-하루히-컬렉션/OP1-冒険でしょでしょ(모험이지요지요).mp3"
		},
		{
			title:"ハレ晴レユカイ",
			mp3:"music/스즈미야-하루히-컬렉션/ED1-ハレ晴レユカイ(하레하레유카이).mp3"
		},
		{
			title:"Super Driver",
			mp3:"music/스즈미야-하루히-컬렉션/OP2-Super Driver.mp3"
		},
		{
			title:"止マレ!",
			mp3:"music/스즈미야-하루히-컬렉션/ED2-止マレ!(멈춰라!).mp3"
		}

		]);
	});
	$("#스즈미야-하루히의-소실 h6").click(function(){
		myPlaylist.setPlaylist([
		{
			title:"God knows",
			mp3:"music/스즈미야-하루히-컬렉션/OST1-God knows.mp3"
		},
		{
			title:"Lost my music",
			mp3:"music/스즈미야-하루히-컬렉션/OST2-Lost my music.mp3"
		}

		]);
	});
	$("#아카메가-벤다 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Skyreach",
				mp3:"music/아카메가-벤다/OP1-Skyreach.mp3"
			},
			{
				title:"Liar mask",
				mp3:"music/아카메가-벤다/OP2-Liar Mask.mp3"
			}
			]);
	});
	$("#중2병이라도-사랑이-하고-싶어 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Sparkling Daydream",
				mp3:"music/중2병이라도-사랑이-하고-싶어/OP-Sparkling Daydream.mp3"
			},
			{
				title:"Inside Identity",
				mp3:"music/중2병이라도-사랑이-하고-싶어/ED-Inside Identity.mp3"
			}
			]);
	});
	$("#역경무뢰-카이지 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"未来は僕等の手の中(미래는 우리들의 손안에)",
				mp3:"music/역경무뢰-카이지/OP1-未来は僕等の手の中(미래는 우리들의 손안에).mp3"
			},
			{
				title:"Chase the Light!",
				mp3:"music/역경무뢰-카이지/OP2-Chase the Light! - Fear, and Loathing in Las Vegas.mp3"
			}
			]);
	});
	$("#진격의-거인 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"紅蓮の弓矢(홍련의 화살)",
				mp3:"music/진격의-거인/OP-紅蓮の弓矢(홍련의 화살).mp3"
			},
			{
				title:"美しき残酷な世界(아름답고도 잔혹한 세계)",
				mp3:"music/진격의-거인/ED-美しき残酷な世界(아름답고도 잔혹한 세계).mp3"
			}
			]);
	});
	$("#역시-내-청춘-러브코메디는-잘못됐다 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"ユキトキ (눈이 녹다)",
				mp3:"music/역시-내-청춘-러브코메디는-잘못됐다/OP-ユキトキ (눈이 녹다).mp3"
			},
			{
				title:"hello alone",
				mp3:"music/역시-내-청춘-러브코메디는-잘못됐다/ED-hello alone.mp3"
			}
			]);
	});
	$("#노-게임-노-라이프 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"This game",
				mp3:"music/노-게임-노-라이프/OP-This game.mp3"
			},
			{
				title:"オラシオン(Oracion)",
				mp3:"music/노-게임-노-라이프/ED-オラシオン(Oracion).mp3"
			}
			]);
	});
	$("#Another h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"凶夢伝染(흉몽전염)",
				mp3:"music/Another/OP-凶夢伝染(흉몽전염).mp3"
			},
			{
				title:"Anamnesis",
				mp3:"music/Another/ED-Anamnesis.mp3"
			}
			]);
	});
	$("#원펀맨 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"THE HERO!!!",
				mp3:"music/원펀맨/OP-THE HERO!!.mp3"
			},
			{
				title:"星より先に見つけてあげる(별보다 먼저 찾아줄게)",
				mp3:"music/원펀맨/ED-星より先に見つけてあげる(별보다 먼저 찾아줄게).mp3"
			}
			]);
	});
	$("#마법소녀-마도카-마기카 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"コネクト(Connect)",
				mp3:"music/마법소녀-마도카-마기카/OP-コネクト(Connect).mp3"
			},
			{
				title:"Magia",
				mp3:"music/마법소녀-마도카-마기카/ED-Magia.mp3"
			}
			]);
	});
	$("#SteinsGate h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Hacking to the gate",
				mp3:"music/Steins;Gate/OP-Hacking to the gate.mp3"
			},
			{
				title:"刻司ル十二ノ盟約(시간을 관장하는 12개의 맹약)",
				mp3:"music/Steins;Gate/ED-刻司ル十二ノ盟約(시간을 관장하는 12개의 맹약).mp3"
			}
			]);
	});
	$("#KILL-LA-KILL h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"シリウス(Sirius)",
				mp3:"music/KILL-LA-KILL/OP1-シリウス(Sirius).mp3"
			},
			{
				title:"ambiguous",
				mp3:"music/KILL-LA-KILL/OP2-ambiguous.mp3"
			}
			]);
	});
	$("#모노가타리-시리즈 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"君の知らない物語(네가 모르는 이야기)",
				mp3:"music/모노가타리-시리즈/ED-君の知らない物語(네가 모르는 이야기).mp3"
			}
			]);
	});
	$("#바케모노가타리 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"staple stable",
				mp3:"music/모노가타리-시리즈/바케모노가타리/OP1-staple stable.mp3"
			},
			{
				title:"帰り道(돌아가는 길)",
				mp3:"music/모노가타리-시리즈/바케모노가타리/OP2-帰り道(돌아가는 길).mp3"
			},
			{
				title:"ambivalent world",
				mp3:"music/모노가타리-시리즈/바케모노가타리/OP3-ambivalent world.mp3"
			},
			{
				title:"恋愛サーキュレーション(연예 서큘레이션)",
				mp3:"music/모노가타리-시리즈/바케모노가타리/OP4-恋愛サーキュレーション(연예 서큘레이션).mp3"
			},
			{
				title:"sugar sweet nightmare",
				mp3:"music/모노가타리-시리즈/바케모노가타리/OP5-sugar sweet nightmare.mp3"
			}
			]);
	});
	$("#니세모노가타리 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"marshmallow justice",
				mp3:"music/모노가타리-시리즈/니세모노가타리/OP1-marshmallow justice.mp3"
			},
			{
				title:"白金ディスコ(백금 디스코)",
				mp3:"music/모노가타리-시리즈/니세모노가타리/OP2-白金ディスコ(백금 디스코).mp3"
			}
			]);
	});
	$("#네코모노가타리-흑 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"perfect slumbers",
				mp3:"music/모노가타리-시리즈/네코모노가타리-흑/OP-perfect slumbers.mp3"
			},
			{
				title:"消えるdaydream(사라지는 daydream)",
				mp3:"music/모노가타리-시리즈/네코모노가타리-흑/ED-消えるdaydream(사라지는 daydream).mp3"
			}
			]);
	});
	$("#모노가타리-시리즈-2nd-Season h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Chocolate Insomnia",
				mp3:"music/모노가타리-시리즈/모노가타리 세컨드/OP1-Chocolate Insomnia.mp3"
			},
			{
				title:"happy bite",
				mp3:"music/모노가타리-시리즈/모노가타리 세컨드/OP2-happy bite.mp3"
			},
			{
				title:"もうそう♥えくすぷれす(망상 익스프레스)",
				mp3:"music/모노가타리-시리즈/모노가타리 세컨드/OP3-もうそう♥えくすぷれす(망상 익스프레스).mp3"
			},
			{
				title:"木枯らしセンティメント(초겨울의 셑티멘탈)",
				mp3:"music/모노가타리-시리즈/모노가타리 세컨드/OP4-木枯らしセンティメント(초겨울의 셑티멘탈).mp3"
			},
			{
				title:"the last day of my adolescence",
				mp3:"music/모노가타리-시리즈/모노가타리 세컨드/OP5-the last day of my adolescence.mp3"
			}
			]);
	});
	$("#츠키모노가타리 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"オレンジミント(오렌지 민트)",
				mp3:"music/모노가타리-시리즈/츠키모노가타리/OP-オレンジミント(오렌지 민트).mp3"
			}
		]);
	});
	$("#오와리모노가타리 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"decent black",
				mp3:"music/모노가타리-시리즈/오와리모노가타리/OP1-decent black.mp3"
			},
			{
				title:"Mathemagics",
				mp3:"music/모노가타리-시리즈/오와리모노가타리/OP2-Mathemagics.mp3"
			}
			]);
	});
	$("#코요미모노가타리 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"whiz",
				mp3:"music/모노가타리-시리즈/코요미모노가타리/ED-whiz.mp3"
			}
		]);
	});
	$("#니세코이 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"CLICK",
				mp3:"music/니세코이/OP-CLICK.mp3"
			},
			{
				title:"heart pattern",
				mp3:"music/니세코이/ED1-heart pattern.mp3"
			},
			{
				title:"Recover Decoration",
				mp3:"music/니세코이/ED2-Recover Decoration.mp3"
			},
			{
				title:"TRICK BOX",
				mp3:"music/니세코이/ED3-TRICK BOX.mp3"
			},
			{
				title:"はなごのみ(하나고노미)",
				mp3:"music/니세코이/ED4-はなごのみ(하나고노미).mp3"
			}
		]);
	});
	$("#식극의-소마 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"希望の唄(희망의 노래)",
				mp3:"music/식극의-소마/OP1-希望の唄(희망의 노래).mp3"
			},
			{
				title:"ライジングレインボウ(Rising Rainbow)",
				mp3:"music/식극의-소마/OP2-ライジングレインボウ(Rising Rainbow).mp3"
			}
		]);
	});
	$("#천원돌파-그렌라간 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"空色デイズ(하늘색 데이즈)",
				mp3:"music/천원돌파-그렌라간/OP-空色デイズ(하늘색 데이즈).mp3"
			},
			{
				title:"UNDERGROUND - HIGH VOLTAGE",
				mp3:"music/천원돌파-그렌라간/ED-UNDERGROUND - HIGH VOLTAGE.mp3"
			},
		]);
	});
	$("#케이온 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Cagayake!GIRLS",
				mp3:"music/케이온!/OP-Cagayake!GIRLS.mp3"
			},
			{
				title:"Don't say 'lazy'",
				mp3:"music/케이온!/ED-Don't say 'lazy'.mp3"
			}
		]);
	});
    $("#혈계전선 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Hello,world!",
				mp3:"music/혈계전선/OP-Hello,world!.mp3"
			},
			{
				title:"シュガーソングとビターステップ(Sugar Song and Bitter Step)",
				mp3:"music/혈계전선/ED-シュガーソングとビターステップ(Sugar Song and Bitter Step).mp3"
			}
		]);
	});
	$("#FULL-METAL-ALCHEMIST h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"again",
				mp3:"music/강철의-연금술사/OP1-again.mp3"
			},
			{
				title:"ray of light",
				mp3:"music/강철의-연금술사/OP2-ray of light.mp3"
			},
			{
				title:"Golden Time Lover",
				mp3:"music/강철의-연금술사/OP3-Golden Time Lover.mp3"
			},
			{
				title:"Period",
				mp3:"music/강철의-연금술사/OP4-Period.mp3"
			},
			{
				title:"rain",
				mp3:"music/강철의-연금술사/OP5-rain.mp3"
			}
		]);
	});
	$("#미래일기 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"空想メソロギヰ(공상 메솔로지)",
				mp3:"music/미래일기/OP-空想メソロギヰ(공상 메솔로지).mp3"
			},
			{
				title:"Blood teller",
				mp3:"music/미래일기/ED-Blood_teller.mp3"
			}
		]);
	});
	$("#토라도라 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Pre Parade",
				mp3:"music/토라도라/OP1-Pre Parade.mp3"
			},
			{
				title:"Vanilla Salt",
				mp3:"music/토라도라/ED1-Vanilla Salt.mp3"
			},
			{
				title:"silky heart",
				mp3:"music/토라도라/OP2-silky heart.mp3"
			},
			{
				title:"Orange",
				mp3:"music/토라도라/ED2-Orange.mp3"
			}
		]);
	});
	$("#DEATH-NOTE h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"DEATH NOTE",
				mp3:"music/DEATH-NOTE/OP-The world.mp3"
			}
		]);
	});
	$("#GJ부 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"もうそう★こうかんにっき",
				mp3:"music/GJ부/OP-もうそう★こうかんにっき(망상★교환 일기).mp3"
			},
			{
				title:"I wish ときめきの魔法",
				mp3:"music/GJ부/ED1-I wish ~ときめきの魔法~(I wish ~두근두근 마법~).mp3"
			},
			{
				title:"balance unbalance ホントウ ノ ワタシ",
				mp3:"music/GJ부/ED2-balance unbalance ~ホントウ ノ ワタシ~(balance unbalance ~진정한 나~).mp3"
			},
			{
				title:"Purely Sky 私だけの空",
				mp3:"music/GJ부/ED3-Purely Sky ~私だけの空~(Purely Sky ~나만의 하늘~).mp3"
			},
			{
				title:"走りだそう!(달려가자!)",
				mp3:"music/GJ부/ED4-走りだそう!(달려가자!).mp3"
			}
		]);
	});
	$("#PSYCHO-PASS h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"凛として時雨(abnormalize)",
				mp3:"music/PSYCHO-PASS/OP-凛として時雨(abnormalize).mp3"
			},
			{
				title:"ED-名前のない怪物(이름 없는 괴물)",
				mp3:"music/PSYCHO-PASS/ED-名前のない怪物(이름 없는 괴물).mp3"
			}
		]);
	});
	$("#WORKING h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Someone Else",
				mp3:"music/WORKING!/OP1-Someone Else.mp3"
			},
			{
				title:"NOW!!!GAMBLE",
				mp3:"music/WORKING!/OP2-NOW!!!GAMBLE.mp3"
			}
		]);
	});
	$("#경계의-저편 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"境界の彼方(경계의 저편)",
				mp3:"music/경계의-저편/OP-境界の彼方(경계의 저편).mp3"
			},
			{
				title:"ED-Daisy",
				mp3:"music/경계의-저편/ED-Daisy.mp3"
			}
		]);
	});
	$("#기생수 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Let Me Hear",
				mp3:"music/기생수/OP-Let Me Hear.mp3"
			},
			{
				title:"IT'S THE RIGHT TIME",
				mp3:"music/기생수/ED-IT'S THE RIGHT TIME.mp3"
			}
		]);
	});
	$("#기어와라-냐루코-양 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"太陽曰く燃えよカオス(태양이 말하기를 불타라 카오스)",
				mp3:"music/기어와라!-냐루코-양/OP-太陽曰く燃えよカオス(태양이 말하기를 불타라 카오스).mp3"
			},
			{
				title:"だからSOS(그래서 SOS)",
				mp3:"music/기어와라!-냐루코-양/ED-だからSOS(그래서 SOS).mp3"
			}
		]);
	});
	$("#내-여자친구와-소꿉친구가-완전-수라장 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Girlish Lover",
				mp3:"music/내-여자친구와-소꿉친구가-완전-수라장/OP-Girlish Lover.mp3"
			},
			{
				title:"Wonder tale",
				mp3:"music/내-여자친구와-소꿉친구가-완전-수라장/ED-Wonder tale.mp3"
			}
		]);
	});
	$("#농림 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"秘密の扉から會いにきて(비밀의 문에서 만나러 와서)",
				mp3:"music/농림/OP-秘密の扉から會いにきて(비밀의 문에서 만나러 와서).mp3"
			},
			{
				title:"も・ぎ・た・て♡フルーツガールズ",
				mp3:"music/농림/ED1-も・ぎ・た・て♡フルーツガールズ.mp3"
			}
		]);
	});
	$("#메카쿠시티-엑터즈 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Daze",
				mp3:"music/메카쿠시티-엑터즈/OP1-Daze.mp3"
			},
			{
				title:"Headphone Actor",
				mp3:"music/메카쿠시티-엑터즈/OP2-ヘッドフォンアクター(Headphone Actor).mp3"
			},
			{
				title:"アヤノの幸福理論(아야노의 행복이론)",
				mp3:"music/메카쿠시티-엑터즈/OP3-アヤノの幸福理論(아야노의 행복이론).mp3"
			},
			{
				title:"Loss Time Memory",
				mp3:"music/메카쿠시티-엑터즈/OST-ロスタイムメモリー(Loss Time Memory).mp3"
			},
			{
				title:"夕景イエスタデイ(해질녘 에스터데이)",
				mp3:"music/메카쿠시티-엑터즈/OST-夕景イエスタデイ(해질녘 에스터데이).mp3"
			}
		]);
	});
	$("#미확인으로-진행형 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"とまどい→レシピ (망설임 → 레시피)",
				mp3:"music/미확인으로-진행형/OP-とまどい→レシピ (망설임 → 레시피).mp3"
			},
			{
				title:"Masshiro World",
				mp3:"music/미확인으로-진행형/ED-Masshiro World.mp3"
			}
		]);
	});
	$("#빙과 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"(未完成ストライド)미완성 스트라이드",
				mp3:"music/빙과/ED-(未完成ストライド)미완성 스트라이드.mp3"
			},
			{
				title:"君にまつわるミステリ-(너에 관한 미스테리)",
				mp3:"music/빙과/OP-君にまつわるミステリ-(너에 관한 미스테리).mp3"
			}
		]);
	});
	$("#월간소녀-노자키-군 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"君じゃなきゃダメみたい(네가 아니면 안되나봐)",
				mp3:"music/월간소녀-노자키-군/OP-君じゃなきゃダメみたい(네가 아니면 안되나봐).mp3"
			},
			{
				title:"ウラオモテ・フォーチュン(표리안밖 행운)",
				mp3:"music/월간소녀-노자키-군/ED-ウラオモテ・フォーチュン(표리안밖 행운).mp3"
			}
		]);
	});
	$("#블랙-불릿 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"black bullet",
				mp3:"music/블랙-불릿/OP-black bullet.mp3"
			},
			{
				title:"トコハナ(토코하나)",
				mp3:"music/블랙-불릿/ED-トコハナ(토코하나).mp3"
			}
		]);
	});
	$("#SHIRO-BAKO h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"COLORFUL BOX",
				mp3:"music/SHIRO-BAKO/OP-COLORFUL BOX.mp3"
			},
			{
				title:"プラチナジェット(플래티나 제트)",
				mp3:"music/SHIRO-BAKO/ED-プラチナジェット(플래티나 제트).mp3"
			}
		]);
	});
	$("#아마기-브릴리언트-파크 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Extra Magic Hour",
				mp3:"music/아마기-브릴리언트-파크/OP-Extra Magic Hour.mp3"
			},
			{
				title:"엘리멘탈리오에서 만나요!",
				mp3:"music/아마기-브릴리언트-파크/ED-엘리멘탈리오에서 만나요!.mp3"
			}
		]);
	});
	$("#시원찮은-그녀를-위한-육성방법 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"君色シグナル(너의 색 시그널)",
				mp3:"music/시원찮은-그녀를-위한-육성방법/OP-하루나 루나(春奈るな) - 君色シグナル(너의 색 시그널).mp3"
			},
			{
				title:"カラフル(컬러풀.)",
				mp3:"music/시원찮은-그녀를-위한-육성방법/ED-사와이 미쿠(沢井美空) - カラフル。(컬러풀.).mp3"
			}
		]);
	});
	$("#논논비요리 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"なないろびより(일곱빛깔비요리)",
				mp3:"music/논논비요리/OP-なないろびより(일곱빛깔비요리).mp3"
			},
			{

				title:"のんのん日和(논논 좋은 날)",
				mp3:"music/논논비요리/ED-のんのん日和(논논 좋은 날).mp3"
			}
		]);
	});
	$("#나만이-없는-거리 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Re:Re:",
				mp3:"music/나만이-없는-거리/OP-Re;Re;.mp3"
			},
			{
				title:"それは小さな光のような(그것은 작은 빛과 같은)",
				mp3:"music/나만이-없는-거리/ED-それは小さな光のような(그것은 작은 빛과 같은).mp3"
			}
		]);
	});
	$("#학교생활 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"ふれんどしたい(친・구・하・고・싶・어)",
				mp3:"music/학교생활/OP-ふれんどしたい(친・구・하・고・싶・어).mp3"
			},
			{
				title:"ハーモナイズ・クローバー(하모나이즈 클로버)",
				mp3:"music//ED-ハーモナイズ・クローバー(하모나이즈 클로버).mp3"
			}
		]);
	});
	$("#건어물-여동생-우마루-짱 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"かくしん的☆めたまるふぉ～ぜっ!(혁신적☆메타마루포~젯!)",
				mp3:"music/건어물-여동생-우마루-짱/OP-かくしん的☆めたまるふぉ～ぜっ!(혁신적☆메타마루포~젯!).mp3"
			},
			{
				title:"ひだまりデイズ(히다마리 데이즈)",
				mp3:"music/건어물-여동생-우마루-짱/ED-ひだまりデイズ(히다마리 데이즈).mp3"
			}
		]);
	});
	$("#데스-퍼레이드 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"Flyers",
				mp3:"music/데스-퍼레이드/OP-Flyers.mp3"
			},
			{
				title:"Last Theater",
				mp3:"music/데스-퍼레이드/ED-Last Theater.mp3"
			}
		]);
	});$("#페이트-제로 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"oath sign",
				mp3:"music/페이트-제로/OP1-oath sign.mp3"
			},
			{
				title:"to the beginning",
				mp3:"music/페이트-제로/OP2-to the beginning.mp3"
			},
			{
				title:"MEMORIA",
				mp3:"music/페이트-제로/ED1-MEMORIA.mp3"
			},
			{
				title:"空は高く風は歌う(하늘은 높고 바람은 노래한다)",
				mp3:"music/페이트-제로/ED2- 空は高く風は歌う(하늘은 높고 바람은 노래한다).mp3"
			},
			{
				title:"満天(만천)",
				mp3:"music/페이트-제로/ED3-満天(만천).mp3"
			}
		]);
	});
	$("#페이트-스테이-나이트-Unlimited-Blade-Works h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"ideal white",
				mp3:"music/페이트-스테이-나이트-Unlimited-Blade-Works/OP1-ideal white.mp3"
			},
			{
				title:"Brave Shine",
				mp3:"music/페이트-스테이-나이트-Unlimited-Blade-Works/OP2-Brave Shine.mp3"
			},
			{
				title:"believe",
				mp3:"music/페이트-스테이-나이트-Unlimited-Blade-Works/ED1-believe.mp3"
			},
			{
				title:"THIS ILLUSION",
				mp3:"music/페이트-스테이-나이트-Unlimited-Blade-Works/ED2-THIS ILLUSION.mp3"
			},
			{
				title:"ring your bell",
				mp3:"music/페이트-스테이-나이트-Unlimited-Blade-Works/ED3-ring your bell.mp3"
			},
			{
				title:"LAST STARDUST",
				mp3:"music/페이트-스테이-나이트-Unlimited-Blade-Works/ED4-LAST STARDUST.mp3"
			}

		]);
	});
	$("#아이돌-마스터 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"READY!!",
				mp3:"music/The-Idolm@ster/OP1-READY!!.mp3"
			},
			{
				title:"CHANGE!!!!",
				mp3:"music/The-Idolm@ster/OP2-CHANGE!!!!.mp3"
			}
		]);
	});
	$("#오레모노가타리 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"未來形 Answer(미래형 대답)",
				mp3:"music/오레모노가타리/OP-未來形 Answer(미래형 대답).mp3"
			},
			{
				title:"행복이 있는 곳",
				mp3:"music/오레모노가타리/ED-幸せのありか(행복이 있는 곳).mp3"
			}
		]);
	});
	$("#신만이-아는-세계 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"God only knows",
				mp3:"music/신만이-아는-세계/OP1-God only knows.mp3"
			},
			{
				title:"A Whole New World God Only Knows",
				mp3:"music/신만이-아는-세계/OP2-A Whole New World God Only Knows.mp3"
			},
			{
				title:"God only knows -Secrets of the Goddess-",
				mp3:"music/신만이-아는-세계/OP3-God only knows -Secrets of the Goddess-.mp3"
			},
			{
				title:"コイノシルシ(사랑의 증표)",
				mp3:"music/신만이-아는-세계/ED1-コイノシルシ(사랑의 증표).mp3"
			},
			{
				title:"アイノヨカン(사랑의 예감)",
				mp3:"music/신만이-아는-세계/ED2-アイノヨカン(사랑의 예감).mp3"
			},
			{
				title:"With…you…",
				mp3:"music/신만이-아는-세계/ED3-With…you….mp3"
			}
		]);
	});
	$("#4월은-너의-거짓말 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"光るなら (빛을 밝히면)",
				mp3:"music/4월은-너의-거짓말/OP1-光るなら (빛을 밝히면).mp3"
			},
			{
				title:"'七色シンフォニー' (일곱 빛깔 심포니)",
				mp3:"music/4월은-너의-거짓말/OP2-'七色シンフォニー' (일곱 빛깔 심포니).mp3"
			},
			{
				title:"'キラメキ' (반짝임)",
				mp3:"music/4월은-너의-거짓말/ED1-'キラメキ' (반짝임).mp3"
			},
			{
				title:"'オレンジ' (오렌지)",
				mp3:"music/4월은-너의-거짓말/ED2-'オレンジ' (오렌지).mp3"
			}
		]);
	});
	$("#아노하나 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"青い栞(푸른 책갈피)",
				mp3:"music/아노하나/OP-青い栞(푸른 책갈피).mp3"
			},
			{
				title:"secret base 〜君がくれたもの〜",
				mp3:"music/아노하나/ED-secret base 〜君がくれたもの〜.mp3"
			}
		]);
	});
	$("#충사 h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"The Sore Feet Song",
				mp3:"music/충사/OP-The Sore Feet Song.mp3"
			}
		]);
	});
	/*$("# h6").click(function(){
		myPlaylist.setPlaylist([
			{
				title:"",
				mp3:"music//.mp3"
			}
		]);
	});*/
});