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
        image.attr("src","template/A-1 Pictures1.jpg");
        $("#Production_Display div .thumbnail h3").text("A-1-Pictures");
        $("#Production_Description h3").html("<strong>회사명:</strong>A-1 Pictures");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 2005");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 일본 도쿄도 스기나미구 나리타히가시 4가 38번 18호");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 2005년 소니의 계열사인 애니플랙스의 안정적인 컨텐츠 공급을 위하여 만들어진 제작사로 2006년부터 TVA 제작을 본격적으로 시작하여 현재의 위치에 이르었다. 소니의 계열사에 속하는 만큼 음악관련 상품은 소니 레이블로 나오거나 PlayStation으로 게임화가 되는 경우도 있다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 첫번째 재작특징은 재작진이 고정되어있지 않아 일반적으로 제작보다는 제작진행을 담당한다. 그러기 때문에 작품마다 참여한 스테프에 따라서 스타일이나 작풍이 달라지기도 한다. 2012년을 분기점으로 작화와 작품의 전반 퀄리티에서 차이가 난다. 2012년을 전후로 다작동시제작을 하여 원작파괴가 많아졌다. 특히 마기와 흑짐사 2기는 원작 팬들에게 흑역사 취급을 받고 있을 정도로 원작 팬들의 반발이 많다. 반면 확실한 수작과 흥행작을 만드는 회사이기도 하다. 제작한 작품 중 유명한 것으로는 소드 아트 온라인, 아이돌 마스터, WORKING!, 일곱 개의 대죄 등이 있다. 그날 본 꽃의 이름을 우리는 아직 모른다는 A-1의 명실부이한 대표작이며 특히 노이타미나 작품을 많이 제작하면서 4월은 너의 거짓말, 시원찮은 그녀의 육성방법, 나만이 없는 거리 등 수작을 만들어 냈다.");
    });
    $("#J-C-Staff").click(function(){
        image.attr("src","template/J.C.Staff1.jpg");
        $("#Production_Display div .thumbnail h3").text("J.C.Staff");
        $("#Production_Description h3").html("<strong>회사명:</strong>J.C.Staff Japan. Creative. STAFF");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 1986");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 일본 도쿄도 무사시노 시");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 타츠노코 프로덕션 출신의 미야타 토모유키가 창업한 것으로 시작한 애니메이션 제작사다. 원래는 OVA제작에 주력하다가 1994년 첫 TVA 제작 이후로 TVA 쪽에 주력하게 된다. 2002년 제작한 아즈망가 대왕은 역대 최고의 상업적인 결과을 냈고 이를 기반으로 2005년 부터 작안의 샤나와 같은 인기 라이트 노벨을 애니화하는 방향으로 나아가 중견 제작사에서 대형 제작사로 탈바꿈한다. 2008년에는 토라도라와 어떤 마술의 금서목록의 애니를 제작하여 주목을 받지만 2011년 어떤 마술의 금서목록 2기 2쿨의 지나치게 압축한 스토리, 잦은 작붕으로 상당한 비판을 받는다. 2013년 후로는 원작 파괴를 없에고 원작 재현에 중점을 두는 호전된 모습을 보이고 있으며, 2015년에는 식극의 소마, 야한 이야기라는 개념이 존재하지 않는 지루한 세계 그리고 감옥한원 등 에로한 장르를 주력으로 제작한 행보를 보였다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 대표적인 특징으로는 고퀄리티의 작화나 연출 보다는 일정수준 적당한 질을 유지하는 점이다. 그러나 1년간 무리할 정도로 많은 작품을 제작하여 작화 퀄리티의 하향 도는 과도한 오리니널 요소의 가미로 비판을 받았다. 하지만 무리하게 제작하는 경향은 2012 이후 상당히 사라졌다. 대표적으로 어떤 과학의 초전자포 2기는 완전히 원작과 다른 작품을 만들어 놔서 원작 팬들에게 원자단위로 까인 반면 이 후 작품인 식극의 소마 등의 작품은 오히려 호평을 받았다. 이런 단점들도 있지만 가장 큰 문제는 액션을 잘 못만든다는 점인데, 작안의 샤나, 어떤마술의 금서목록 그리고 오오카미 시와 7명의 동료들에서는 박력없는 액션과 임팩트 없는 움직임으로 많은 팬들의 실망을 자아냈다. 반면 특화된 장르는 드라마로 노다메 칸타빌레, 토라도라, 푸른꽃, 바쿠만 같은 수작들을 제작했고 개그물의 퀄리티도 상당하다.  한편 최근에는 식극의 소마와 감옥학원 등등 의외로(?) 애로 장르에서도 선방을 하는 성적을 보인 여러모로 재밌는 회사다.");
    });
    $("#Lerche").click(function(){
        image.attr("src","template/Lerche1.jpg");
        $("#Production_Display div .thumbnail h3").text("Lerche");
        $("#Production_Description h3").html("<strong>회사명:</strong>Lerche");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 2011");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 일본");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 2011년에 스튜디오 히바리의 자회사로 만들어 져서 2011년 카니발 판타즘같은 게임을 바탕으로 둔 애니을 시작으로 2012년에는 페르소나 4 the Animation 등의 하청작업을 했지만 2013년 단간론파 -희망의 학교와 절망의 고교생- The Animation과 기교소녀는 상처 받지않아의 작품을 제작하여 본격적으로 부상하여 다음 해 암살교실 그리고 화제작인 학교생활!의 제작으로 다크호스로 존재감을 부각했다. 현재, 2016년 암살교실 2기를 제작하고 단간론파 3-The End of 키보가미네 학원-을 제작할 계획을 발표하여 기대를 모으고 있다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 작붕이 거의 없는 준수한 작화 퀄리티와 원작의 캐릭터 재현을 자연스럽게 한다는 장점이 있다. 그러나 이 제작사의 가장 부각되는 점은 현재까지 작업한 애니마다 화제를 끌어모으는 이슈 메이커란 사실로 다음 행보가 기대될 수 밖에 없는 회사다.");
    });
    $("#Production-I-G").click(function(){
        image.attr("src","template/Production I.G.jpg");
        $("#Production_Display div .thumbnail h3").text("Production I.G.");
        $("#Production_Description h3").html("<strong>회사명:</strong> Production I.G.");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 1987");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 고쿠분지");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 1987년 타츠노코 프로덕션에서 자회사로 나와 1993년 Production I.G. 라는 이름으로 완전히 독립했다. 2001년부터 본격 TVA 제작에 들어가 쿠로노코의 농구, 하이큐!!, 동쪽의 에덴 등의 수작을 제작하였다. 2011년 4분기에는 오리지널 작품 길티 크라운을 야심차게 제작했으나 스토리, 전개, 분량조절면에서 많이 실망스런 모습을 보였지만 PSYCHO-PASS의 2012년 제작으로 다시 수작 메이커라는 위상을 회복하고 취성의 가르간티아, 진격의 거인등의 작품으로 안정세를 탄다. 2016년 신작으로는 조커 게임을 제작하여 방영 중이다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 수작이란 무었인지 제대로 보여주는 제작사. 탄탄한 구성, 몰입감 있는 음악, 좋은 작화를 바탕으로한 수작을 만들어내는 것이 가장 큰 장점이다. 주로 드라마물같은 진지한 스토리나 확실한 주제의식을 가진 작품들을 제작하고 개그물이나 모에물은 한번도 만든 적이 없는 회사다. 다른 특징으로는 사회비판적이거나 좌익 성향의 우익비판 애니를 만드는 경향이 있어 대표적으로 동쪽의 에덴, PSYCHO-PASS, 취성의 가르간티아, 조커 게임 등의 작품에서 이런 모습을 보이기도 했다. 일반적으로 만화를 원작으로한 작품과 상성이 좋아 하이큐!, 쿠로노코의 농구, 진격의 거인과 같은 수준급의 작품들을 만들어내는 회사이다.");
    });
    $("#TRIGGER").click(function(){
        image.attr("src","template/TRIGGER1.jpg");
        $("#Production_Display div .thumbnail h3").text("TRIGGER");
        $("#Production_Description h3").html("<strong>회사명:</strong>TRIGGER");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 2011");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 도교");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 가이낙스에서 퇴사한 이마이시 히로유키와 스텝들이 설립한 애니매이션 제젝사다. 타사의 하청활동을 하다 2013년, 리틀 위치 아카데미아를 고개, 10월, 첫 시리즈 킬라킬을 방영한다. 7월 8일, 리틀 위치 아카데미아 후속편을 위해 킥 스타터 프로잭트를 마련, 5시간만에 150,000 달러를 모금하였으며, 성공적으로 625,518 달러를 모으게 된다. 킬라킬의 성공적인 시작으로 2014년에는 이능배틀은 일상계 속에서 판매량이 저조했고, 킬라킬 시절부터 자금적 난항을 거친 것으로 보여 아직은 확실한 입지를 확보해야 하는 회사이다. 2016년 현재, 새로운 시리즈 키즈나이버를 방영 중이다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 가이낙스출신 스테프가 만든 회사인 만큼, 작화적인 면에서는 킬라킬 기준으로 천원돌파 그렌라간과 유사점이 많다. 본사의 장점은 착실하고 적절한 복선의 회수, 시원한 시나리오의 전개 같은 다른 애니매이션들이 충족하지 못하는 부분을 만족시켜주었고 특유의 연출과 복고풍 감각 역시 뛰어나다. 음악의 사용과 역시 연출은 매우 독보적이다. 현재 다시 오리지널 시리즈인 키즈나버를 제작하면서 무엇을 보여줄지가 기대되는 제작사다.");
    });
    $("#ufotable").click(function(){
        image.attr("src","template/ufotable1.jpg");
        $("#Production_Display div .thumbnail h3").text("ufotable");
        $("#Production_Description h3").html("<strong>회사명:</strong>ufotable");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 2001");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong>  ");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 2007년 공의 경계 7부작 극장판 전에는 전혀 인지도가 없었던 회사이었지만 2007년에 만들었다고는 생각 할 수 없을 정도의 뛰어난 작화와 훌륭한 원작재현과 액션을 통해 호평을 받았다. 공의 경계의 성공 뒤, Fate/Zero의 애니화로 더 유명세를 타고 그 분기에서 가장 높은 판매치를 기록한다. 2014년에는 다시 Fate 시리즈의 UBW 루트를 제작, 분할 2쿨로 방영 종료했으며 이 역시 원작 팬들에게 엄청난 호평을 받았다. 그러나 ufotable의 커리어는 갓이터를 제작하면서 무너뜨려 진다. 처음부터 1화 바영일을 일 주일 미루고 대신 15분짜리 특전 영상을 재상영하고 그나마 방영된 1화 역시 부자연스러운 연출, 각본, 편집이 비판를 받고 시작부터 시청자들에게 불안감을 주었다. 그리고 연속으로 4화, 6화, 8화가 평크나고 9화로 종방될 것이라는 소식이 들리자 완전히 폭삭 망했다. 갓이터의 실패로 명성이 곤두박칠쳐 당분간 ufotable이 당분간은 옛날의 신용을 회복할 정도의 작품을 성공적으로 제작하지 않는 이상 힘들 것으로 보인다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> ufotable은 일단 외주나 하청 작업이 전혀 없다. 즉, 모든 제작진형과 제작을 내부적으로 한다는 말인데 이런 환경이 마련되어 높은 퀄리티의 작품을 만들 수 있다. 3D CG 역시 적극적으로 사용하며 현대적이고 시대상에 맞는 영상을 제작할려고 노력한다. 원작 팬들의 열정 역시 충실하게 존중하고 열정적으로 만들기 때문에 많은 원작의 재현도와 팬들의 만족도가 매우 높다. ufotable의 연출 특징은 대표적으로 3D를 조화 롭게 사용해 질감을 사실적으로 표현하고 특히 빛과 조명 활용 역시 강한 회사이다. 슬로우 모션으로 액션을 연출하여 액션의 생동감을 높이는 등 이런 기법을 일관성 있게 긴 시간 동안 잘 유지한다는 점이 강점인 회사다.");
    });
    $("#WIT-Studio").click(function(){
        image.attr("src","template/WIT Studio.jpg");
        $("#Production_Display div .thumbnail h3").text("WIT Studio");
        $("#Production_Description h3").html("<strong>회사명:</strong>WIT Studio");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 2012");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 일본 도쿄도 무사시노 시");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> Production I.G.에서 분사한 IG port의 자회사이며 2013년 진격의 거인 제작으로 위명해지고 이 후 호오즈키의 냉철, 종맣의 세라프 등을 제작하고 현제 방영 중인 갑철성의 카바네리 그리고 진격의 거인 2기를 제작 예정이다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 전채적으로 칙칙한 색감을 사용하고 강조하고 싶은 부분에는 밝은 색채를 이용하여 집중시키는 기법을 사용하고 명암의 사용이 위어나다. 액션면에서는 인물의 움직임이 매우 자연스럽고 역동적이어서 진격의 거인 방영 이후 좋은 평을 받았다. 그래서 그런지 현재까지는 액션물을 중심으로 제작하온 회사다.");
    });
    $("#Gainax").click(function(){
        image.attr("src","template/Gainax1.jpg");
        $("#Production_Display div .thumbnail h3").text("가이낙스");
        $("#Production_Description h3").html("<strong>회사명:</strong>가이낙스");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 1934");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 도쿄구 미타카 시");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 1934년 본래 왕립우주군 제작을 위해 투자받은 동인집단이었지만 제작과정에서 남은 가이낙스 명의의 빚을 청산하기 위해 계속 애니메이션 제작을 해야 했다. 이 때문에 처음부터 독촉이나 자금적인 난항을 많이 격었고, 그 후에도 하청이나 직접제작 그리고 게임쪽 원화 등의 방향으로 겨우 연명하다가 1995년 전설의 신세기 에반게리온을 제작하면서 대부분의 부채를 갚았지만 얼마 지나지 않아 탈세 스켄들에 빠지면서 다시 휘청거리기 시작한다. 그러나 안정적인 추세로 제작을 하다 2007년 천원돌파 그렌라간을 제작하면서 제2의 전성기를 맞는다. 그러나 그렌라간이후 스폰서을간의 마찰으로 이마이시 히로유키와 같은 주요 애니메이터가 빠져나가기도 했다 (이후 트리거를 설립). 현재는 특별히 굵직한 작품을 내지 않아서 퇴색한 면이 좀 있다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 대표작인 에반게리온과 그렌라간이 메카물인 만큼 메카물을 잘 제작한다. 왕립우주군을 시초로 시작해서인지 기계나 메카적인 면에서 좋은 모습을 보였다. 그리고 특히 SF같은 장르에도 특화된 모습을 보였지만 메카물에 구연되지 않고 다양한 장르를 네작해온 회사이다. 기본적으로 오타쿠들의 동인 집단으로 시작해서 회사 분위기가 자유롭고 오타쿠적인 느낌이 풍기는 특징도 있다. ");
    });
    $("#Doga-Kobo").click(function(){
        image.attr("src","template/Doga Kobo1.jpg");
        $("#Production_Display div .thumbnail h3").text("동화공방");
        $("#Production_Description h3").html("<strong>회사명:</strong>동화공방");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> ");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> ");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 토에이에서 독립한 후루사와 히데오가 1973년 많은 노력끝에 자리잡아 창립한 회사로 상당한 역사를 가녔지만 주로 하청작업을 주력으로 한 제작사다. 하지만 그만큼 참여한 작품의 폭도 넓다. 자체제작으로는  2007년의 Myself; Yourself가 최초이지만 실패적인 결과들 내었고  11eyes -죄와 벌과 속죄의 소녀-를 제작했지만 제대로 망해 한 때 회사가 크게 휘청거렸다. 하지만 유루유리 시리즈의 대박으로 다시 안정세에 들어갔고 최근 미확인형으로 진행형, 월간소녀 노자키 군의 성공으로 일상물 제작사라는 이미지가 생겼다. 플라스틱 메모리즈와 미카구라 학원조곡를 2015년 제작하고 주력 장르인 건어물 여동생 우마루 짱!을 방영했다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 하청제작에 특화된 회사였던 만큼 많은 작품의 제작에 참여했다. 극장판으로는 신세기 에반게리온, 나루토, 이누야샤, 도라에몽 등등 유명작 제작 하청을 맏았고, 강철의 연금술사, 니세모노가타리, 그렌라간, 마범소녀 마도카 마기카 같은 초 히트작의 하청을 담당했다. 둥글둥글한 작화와 귀여운 캐릭터를 잘 살리고 일반적으로 잘 만드는 장르는 일상물으로 제작한 작품은 모두 호평을 받았다.");
    });
    $("#Mad-House").click(function(){
        image.attr("src","template/Mad House.jpg");
        $("#Production_Display div .thumbnail h3").text("매드하우스");
        $("#Production_Description h3").html("<strong>회사명:</strong>MADHOUSE Inc.");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 1972");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 도쿄 도 나카노 구 혼쵸");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 1972년 무시 프로덕션 출신의 제작진들의 중심으로 설립된 회사로 70년대에는 데자키 오사무 감독의 에이스를 노려라! 같은 걸작을 만들었고, 90년대에는 카드캡터 사쿠라로 히트를 제대로 쳤다. 미국방면의 애니매이션도 많이 제작하는데 아이언맨과 블래이드 같은 작품도 만들었다. 2010년에 들어 라노벨 사업에 손을 대어 마법전쟁과 신이 없는 월요일을 애니화 했지만 좋은 성적을 내지 못했지만 반면 노 게임 노 라이프, 헌터X헌터, 치하야후루 같이 원작재현을 훌륭히한 작품역시 만들었다. 2015년에는 원펀맨, 오버로드의 애니화로 대박을 쳤고 좋은 작품을 만들어 냈다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 매드하우스는 선명한 작화와 특이한 분위기 그리고 고퀄리티의 작품이 특징이다. 원작재현에 충신한 제작사로 몬스터, 역경무회 카이지, 카드캡터 사쿠라, 데스노트, 기생수, 원펀맨 등 많은 수작과 명작을 만들어낸 회사이다. 아쉬운 점은 이런 작품을 다수 보유했음에도 불구하고 히트를 친 작품이 크게 없다.");
    });
    $("#Bones").click(function(){
        image.attr("src","template/Bones1.jpg");
        $("#Production_Display div .thumbnail h3").text("Bones");
        $("#Production_Description h3").html("<strong>회사명:</strong>Bones");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 1998");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 도쿄 스기나미구 이구사 3가 1번지 12호");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 선라이즈의 프로듀서 미나미 하사히코가 뼈대있는 작품을 만들겠다는 포부로 독립하여 만든 회사로 1998년 회사를 설립했다. 강철의 연금술사, 소울 이터, DARKER THAN BLACK 등의 메이저한 작품을 제작하고 액션 쪽에서 대호평을 받았지만 2010년 이후 괴멸적인 상업적인 결과로 2015년까지 큰 곤란을 겼는다. 그러나 혈계전선, SHOW BY ROCK으로 힘든 시기는 종결되고 2016년 나의 히어로 아카데미아를 만들면서 선방하고 있다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 액션. 액션이란 단어로 요약할 수 있다. 이런 면모가 제대로 보여진 작품은 대표적으로 강철의 연금술사, DARKER THAN BLACK, 소울 이터 등이 있다. 예전에는 무겁고 무게 있는 액션을 선보였다면 최근에는 앎은 선으로 스피드감과 역동성을 살린 동세로 빠른 액션을 선보이고 있다. 본즈의 액션은 인물 간의 액션이든 폭팔이든 메카물으든 추종을 불허한다. 현재 대부분의 제작사가 3D 메카 체제로 옮긴 상황에 아직까지 3D 메카물 제작하지 않은 회사이기도 하며 여전히 액션 명가의 모습을 보여주고 있다.");
    });

    $("#Shaft").click(function(){
        image.attr("src","template/Shaft1.jpg");
        $("#Production_Display div .thumbnail h3").text("Shaft");
        $("#Production_Description h3").html("<strong>회사명:</strong>Shaft");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 1975");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 도쿄 도 스기나미 구");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 1975년에 설립되어 오랜 역사를 자랑하자만 20년동안 주로 하청작업을 주업으로 했다. 2009년 이전에는 히다마리 스케치, 안녕 절망선생 둥의 특유의 장르를 계척했지만 상업적인 성과는 크게 올리지 못했다. 그러나 2009년 바케모노가타리의 애니화로 역대 역대 TV 애니메이션 부분 DVD/BD 판매량 2위를 기록하고 2011년 오리지널 애니메이션 마법소녀 마도카 미기카로 그 명성을 더욱 높였다. 2016년까지는 모노가타리 시리즈의 애니화와 마법소녀 마도카 마기카 극장판 제작에 주력을 하고, 니세코이 같은 러브코미디 장르 역시 제작해 괜찮은 성적을 냈다. 그리고 올해 4년동안이나 연기해왔던 키즈모노가타리 3부작을 극장판으로 개봉했다!");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 샤프트의 가장 큰 특징은 연출기법이다. 화면이 빠르게 지나가고 텍스트를 영상에 적극적으로 쓰고 거의 엑스트라나 배경인물을 집어넣지 않거나 간략히 생략한다. 콜라지 같은 기법을 극단 이누카레와 함께 적극적으로 사용하는 경향이 있고 특유의 괴이함과 기이한 연출에 특화되어 있다. 매화 마지막 부분에 앤드 카드인 일러스트를 넣는 것이 전통으로 끝가지 보는 묘미도 제공한다. 특이한 점은 샤프트 각도라는 목을 꺽는 연출이 쓰이는데, 아케미 호무라와 센죠가하라 히타기가 주로 샤프트 각도를 선보인다. 이런 특색이 강한 연출과 제작사 특징 때문에 장르의 선정과 원작의 스타일에 따라 작품이 크게 달라진다. 하지만 가장 큰 문제인 것은 작화와 타이트한 스케줄이다. 작화의 경우는 작붕이 TVA에서 잦은 걸로 유명하고 문제는 이걸 연출로 때우는 경향이 있다. 대표적으로 정지화면에 텍트트를 채워서 장면을 때운다던가(모노가타리 시리즈) 등장인물을 고정시키고 입만 움직여서(니세코이) 컷수를 줄일려고 한다. 무었보다 스케줄 관리는 심각하여 1분기 다작병행을 하는 방침 때문에 작붕이나 퀄리티의 저하시키기로 유명하다. TVA에서 이러니 DVD/BD에서 거의 재제작을 한다. 이러한 문제 때문에 키즈모노가타리는 4년이나 계획이 미뤄졌고 메카쿠시티 엑터즈의 9화는 오프닝을 3D 작화로 때워 부자연스러움을 넘어 괴기한 장면으로 심각한 혹평을 받았다. 예외적인 케이스는 니세코이 1기로 작화붕괴 같은 고질병도 없었다. 총평을 하자면 확실한 특색으로 확실한 시너지를 발휘하지만 그만큼 상성이 중요하여 호불호가 확실히 가리는 제작사라 할 수 있다.");
    });
    $("#Sunrise").click(function(){
        image.attr("src","template/Sunrise1.jpg");
        $("#Production_Display div .thumbnail h3").text("선라이즈");
        $("#Production_Description h3").html("<strong>회사명:</strong>선라이즈");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 1972");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 도쿄도 스기나미구 카미이구사");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 1972년 무시 프로덕션의 경영난으로 도산하자 스테프들이 빠져나와 만든 것이 선라이즈다. 처음에는 자금난과 경영적이 어려움으로 인해 어려운 시간을 보냈다. 이런 경험 때문에 선라이즈는 완구 같은 사업과 병행하여 자금적인 안정성을 추구하는 쪽으로 정책을 정하였다. 그 후 1970년대 발 기동전사 건담을 시작으로 히트를 쳐 메카 전문 회사로 거듭나 건담 시리즈를 중점으로 코드 기어스 같은 메카물을 제작하여 현재에 이르었다. 최근에는 러브 라이브와 같은 아이돌물에도 투자하여 상당한 성과를 보여 이쪽 장르에도 빠딘 듯하다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 메카물을 주력으로 하는 회사로 대표작은 기동전사 건담 프렌차이즈와 코드 기아스가 있다. 큰 강점은 일단 대형 제작사란 점이다. 수익 중심으로 일하는 만큼 집중하면 퀄리티 높은 작품을 만들러낼 수 있고 현재 3D 메카가 주류이지만 2D작화로 메카물을 만들 정도로 건재한 회사다. 물론 3D메카물 역시 간간히 만드며 그 쪽역시 퀄리티가 뛰어나다.");
        //$("#Production_Display ul li").text("");
    });
    $("#KyoAni").click(function(){
        image.attr("src","template/KyoAni1.jpg");
        $("#Production_Display div .thumbnail h3").html("쿄토 애니메이션");
        $("#Production_Description h3").html("<strong>회사명:</strong> 주식회사 교토 애니메이션");
        $("#Production_Description h5:nth-child(3)").html("<strong>설립:</strong> 1981");
        $("#Production_Description h5:nth-child(4)").html("<strong>본사:</strong> 일본 교토부 우지시 코바오세토 32");
        $("#Production_Description p:nth-child(5)").html("<strong>역사:</strong> 1981년 무시 프로덕션 출신의 핫타 히데야키가 주변 주부들을 모아서 만든 작은 하청업체로 시작하여 90년대까지는 하청과 합작을 주로 하고 있었으나, 2003년 풀 매탈 페닉 후못후로 단독제작을 시작하게된다. 그리고 2006년에는 희대의 화제작인 스즈미야 하루히의 우울 1기로 그 명성은 정점을 찍었다. 수려한 작화 퀄리티와 (10년이 지난 지금기준으로도 상당한 퀄리티다.) 원작에서 더욱 매력을 끌어낸 캐릭터 그리고 특유의 연출을 통해 하루히는 세계적인 관심을 받게 되고, 쿄애니를 최전성기로 이끈다. 그러나 2009년 앤들리스 에이트 사태로 그 명성이 추락한다. 스즈미야 하루히의 우울 2기의 두번째 에피소드인 엔들리스 에이트을 똑같은 내용으로 8화 연속 방영하는 이해가 안되는 기행으로 엄청난 악평을 받았다. 하지만 이런 결정적인 실패에서 쿄애니의 위상은 희대의 화제작 케이온!과 2010년 개봉한 스즈미야 하루히의 소실 극장판의 압도적인 흥행과 성공은 다시 쿄애니를 안정권에 들어서게 했다. 그리고 2012년의 빙과와 중2병이라도 사랑이 하고 싶어! 역시 작화적인 면과 상업적인 성공으로 부활한 쿄애니의 명성을 굳히고 '믿고보는 쿄애니'라는 수식어가 붙게 되었다. 2013년에는 실질적인 오리지널 TVA인 타마코 마켓과 처음의 여성향 작품인 Free!을 방영했다. Free는 타겟 계층을 바꿨음에도 불구하고 최근 쿄애니의 작품중에서 가장 독보적이 판매량을 뽑아냈다. 2014년 쿄애니는 중2병이라도 사랑이하고 싶어! 2기와 아마기 브릴리언트 파크는 그저 그런 성적을 냈지만  Free 2기와 타마코 러브 스토리 극장판은 비평과 흥행 두 면을 모두 성취했다. 2015년의 울려라! 유포니엄은 쿄애니의 고퀄리티 작화와 아웃포커싱 등의 새로운 연출을 선보이며 선방했다. 2016년 현재, 무채한의 팬텀 월드의 방영이후, 유명 만화 '목소리의 형태' 극장판 제작 중이다.");
        $("#Production_Description p:nth-child(6)").html("<strong>특징:</strong> 작화라는 단어로 요약할 수 있다. 현재는 업계의 전체적인 작화 퀄리티의 상향으로 예전만큼은 독보적이지는 아니지만, 여전히 뛰어난 작화를 언제나 선보이고 있다. 이런 작화를 더욱 돗보이게 하는 점은 뛰어난 캐릭터 디자인으로 깔끔한 색채와 부드러운 선이 특징으로 캐릭터의 매력과 개성을 잘 살린다. 잘 만드는 장르로는 일상물과 학원물로 폭력이나 에로 요소가 없는 편이다. 특이한 점으로는 일반적으로는 지명도가 있는 원작을 애니화 하는 것이 보통이지만, 쿄애니는 오히려 마이너한 작품들을 제작하는 경우가 많다. 자사 KA애스마 문고를 통하여 애니화을 위한 원작풀을 확보하는 방침으로 나아가고 있다. 이런 정책에 빛을 본 작품들로는 애니 방영 후 선풍적인 인기를 보인 러키스타, 케이온!으로 쿄애니의 메이저 메이커로의 저력을 잘 보인 사례다. 연출적인 면에서는 일상적인 움직임과 개그씬이 뛰어나지만 조금 심심한 면이 있기에 작화로 커버하는 경향이 있다. 높은 배경음악 퀄리티로도 유명한데 직접 현악기로 녹음하고 클래식을 은근히 효과적으로 사용하여 잔잔한 분위기를 잘 살리며 이런 특징들이 어우려져 훌륭한 작품들을 만들어 왔다.")
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
    });





    
});