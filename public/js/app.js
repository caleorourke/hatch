/* 
 * Copyright © 2015 SoftLayer, an IBM Company
 * 
 * Urban, Build 2015.06.30
 * Code and documentation licensed under the MIT license
 * 
 */

!function(a){a.fn.contents=function(){headings=a("h1").filter(function(){return this.id}),output=a(this),!headings.length||headings.length<1||!output.length||(get_level=function(a){return parseInt(a.nodeName.replace("H",""),10)},level=get_level(headings[0]),this_level=void 0,html="",headings.on("click",function(){window.location.hash=this.id}).each(function(a,b){this_level=get_level(b),this_level===level&&(html+='<li><a href="#'+b.id+'">'+b.innerHTML+"</a>"),level=this_level}),output.html(html))}}(jQuery),jQuery(document).ready(function(a){var b=1170;if(a(window).width()>b){var c=a(".metabar").height();a(window).on("scroll",{previousTop:0},function(){var b=a(window).scrollTop();b<this.previousTop?b>0&&a(".metabar").hasClass("affixed")?a(".metabar").addClass("visible"):a(".metabar").removeClass("visible affixed"):(a(".metabar").removeClass("visible"),b>c&&!a(".metabar").hasClass("affixed")&&a(".metabar").addClass("affixed")),this.previousTop=b})}}),pageOffset=document.documentElement.scrollTop||document.body.scrollTop,scrollTo=function(a,b,c){start=a.scrollTop,change=b-start,currentTime=0,increment=20,animateScroll=function(){currentTime+=increment,val=Math.easeInOutQuad(currentTime,start,change,c),a.scrollTop=val,currentTime<c&&setTimeout(animateScroll,increment)},Math.easeInOutQuad=function(a,b,c,d){return a/=d/2,1>a?c/2*a*a+b:(a--,-c/2*(a*(a-2)-1)+b)},animateScroll()},window.onscroll=function(){return pageYOffset>=200?(document.getElementById("icon-scroll-up").style.visibility="visible",void(document.getElementById("icon-scroll-up").onclick=function(){scrollTo(document.body,0,0)})):void(document.getElementById("icon-scroll-up").style.visibility="hidden")},$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1500),!1}});