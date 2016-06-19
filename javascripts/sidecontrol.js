$(document).ready(function(){
	function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
    }
	var width = (screen.width-getScrollbarWidth()) + 'px';
	$("body").css("width",width);
	var controller = new ScrollMagic.Controller();
	new ScrollMagic.Scene({triggerElement:"#slide01",reverse:true, triggerHook:'onEnter',offset: 100}).on("enter",function(){$("#slide01 header, #slide01 section h3").addClass("is-active");}).on("leave",function(){$("#slide01 header, #slide01 section h3").removeClass("is-active");}).addTo(controller);
	new ScrollMagic.Scene({triggerElement:"#slide02",reverse:true, triggerHook:'onEnter',offset: 100}).on("enter",function(){$("#slide02 header, #slide02 section h3").addClass("is-active");}).on("leave",function(){$("#slide02 header, #slide02 section h3").removeClass("is-active");}).addTo(controller);
	new ScrollMagic.Scene({triggerElement:"#slide03",reverse:true, triggerHook:'onEnter',offset: 400}).on("enter",function(){$("#slide03 header, #slide03 section h3").addClass("is-active");}).on("leave",function(){$("#slide03 header, #slide03 section h3").removeClass("is-active");}).addTo(controller);
	new ScrollMagic.Scene({triggerElement:"#slide04",reverse:true, triggerHook:'onEnter',offset: 100}).on("enter",function(){$("#slide04 header, #slide04 section h3").addClass("is-active");}).on("leave",function(){$("#slide04 header, #slide04 section h3").removeClass("is-active");}).addTo(controller);
	new ScrollMagic.Scene({triggerElement:"#slide05",reverse:true, triggerHook:'onEnter',offset: 100}).on("enter",function(){$("#slide05 header, #slide05 section h3").addClass("is-active");}).on("leave",function(){$("#slide05 header, #slide05 section h3").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#slide06",reverse:true, triggerHook:'onEnter',offset: 100}).on("enter",function(){$("#slide06 header, #slide06 section h3").addClass("is-active");}).on("leave",function(){$("#slide06 header, #slide06 section h3").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#slide07",reverse:true, triggerHook:'onEnter',offset: 100}).on("enter",function(){$("#slide07 header, #slide07 section h3").addClass("is-active");}).on("leave",function(){$("#slide07 header, #slide07 section h3").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#slide08",reverse:true, triggerHook:'onEnter',offset: 400}).on("enter",function(){$("#slide08 header, #slide08 section h3").addClass("is-active");}).on("leave",function(){$("#slide08 header, #slide08 section h3").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#slide09",reverse:true, triggerHook:'onEnter',offset: 100}).on("enter",function(){$("#slide09 header, #slide09 section h3").addClass("is-active");}).on("leave",function(){$("#slide09 header, #slide09 section h3").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#slide010",reverse:true, triggerHook:'onEnter',offset: 400}).on("enter",function(){$("#slide010 header, #slide010 section h3").addClass("is-active");}).on("leave",function(){$("#slide010 header, #slide010 section h3").removeClass("is-active");}).addTo(controller);



    new ScrollMagic.Scene({triggerElement:"#cb01",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb01 header").addClass("is-active");}).on("leave",function(){$("#cb01 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb02",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb02 header").addClass("is-active");}).on("leave",function(){$("#cb02 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb03",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb03 header").addClass("is-active");}).on("leave",function(){$("#cb03 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb04",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb04 header").addClass("is-active");}).on("leave",function(){$("#cb04 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb05",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb05 header").addClass("is-active");}).on("leave",function(){$("#cb05 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb06",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb06 header").addClass("is-active");}).on("leave",function(){$("#cb06 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb07",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb07 header").addClass("is-active");}).on("leave",function(){$("#cb07 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb08",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb08 header").addClass("is-active");}).on("leave",function(){$("#cb08 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb09",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb09 header").addClass("is-active");}).on("leave",function(){$("#cb09 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb010",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb010 header").addClass("is-active");}).on("leave",function(){$("#cb010 header").removeClass("is-active");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb011",reverse:true,triggerHook:'onEnter',offset:200}).on("enter",function(){$("#cb011 header").addClass("is-active");}).on("leave",function(){$("#cb011 header").removeClass("is-active");}).addTo(controller);

    new ScrollMagic.Scene({triggerElement:"#cb04",reverse:true,triggerHook:'onEnter',offset:700}).on("enter",function(){$("nav").removeClass("is-light");}).on("leave",function(){$("nav").addClass("is-light");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb05",reverse:true,triggerHook:'onEnter',offset:450}).on("enter",function(){$("nav").addClass("is-light");}).on("leave",function(){$("nav").removeClass("is-light");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb06",reverse:true,triggerHook:'onEnter',offset:700}).on("enter",function(){$("nav").removeClass("is-light");}).on("leave",function(){$("nav").addClass("is-light");}).addTo(controller);
    new ScrollMagic.Scene({triggerElement:"#cb07",reverse:true,triggerHook:'onEnter',offset:450}).on("enter",function(){$("nav").addClass("is-light");}).on("leave",function(){$("nav").removeClass("is-light");}).addTo(controller);
	// build scenes

});