function setBackground(){$(".background-height").css("height",$(window).height()),$(window).height()>600?($("#jc-quote").css("display","block"),$("#jc-quote").css("fontSize","1.5em"),$("#jc-quote").css("marginBottom","60px"),$("#learnmore-box").css("top",.4*$(window).height())):$(window).height()>540?($("#jc-quote").css("display","block"),$("#jc-quote").css("fontSize","20px"),$("#jc-quote").css("marginBottom","40px"),$("#learnmore-box").css("top",.5*$(window).height())):($("#jc-quote").css("display","none"),$("#learnmore-box").css("top",.7*$(window).height())),$(window).width()>=1200?($("#about-background-left").css("width","25%"),$("#about-background-right").css("width","75%")):$(window).width()>=992?($("#about-background-left").css("width","33%"),$("#about-background-right").css("width","67%")):$(window).width()>=768?($("#about-background-left").css("width","40%"),$("#about-background-right").css("width","60%")):($("#about-background-left").css("width","100%"),$("#about-background-right").css("width","0%"))}function setDiagonalPosition(){var i=1.45;$("#about-content-diagonal").css("left",$(window).width()/i+tanDeg(15)*$(window).height()/i-$(this).scrollTop()*tanDeg(15))}function setSocialLinksPosition(){$(window).scrollTop()<=0?($(window).width()>1299||$(window).width()<768?($(".social-link").css("height",40),$(".social-link").css("width",40),$(".social-link-box").css("height",40),$(".social-link-box").css("marginLeft",(parseInt($("#about-background-left").css("width"),10)-290)/2+"px")):($(".social-link").css("height",35),$(".social-link").css("width",35),$(".social-link-box").css("height",35),$(".social-link-box").css("marginLeft",(parseInt($("#about-background-left").css("width"),10)-260)/2+"px")),$(".visible-xs-lg").css("display","block"),$(".visible-md").css("display","none"),$(".visible-sm").css("display","none")):($(".social-link-box").css("marginLeft",10),$(".social-link").css("height",35),$(".social-link").css("width",35),$(".social-link-box").css("height",35),$(window).width()>1199?($(".visible-xs-lg").css("display","block"),$(".visible-md").css("display","none"),$(".visible-sm").css("display","none")):$(window).width()>991?($(".visible-xs-lg").css("display","none"),$(".visible-md").css("display","block"),$(".visible-sm").css("display","none")):$(window).width()>767&&($(".visible-xs-lg").css("display","none"),$(".visible-md").css("display","none"),$(".visible-sm").css("display","block")))}function tanDeg(i){var s=i*Math.PI/180;return Math.tan(s)}function scrollToElement(i){var s=1e3,o=jQuery(i).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:o},s,function(){window.location.hash=i}),!1}$(document).ready(function(){$(window).bind("mousewheel",function(i){0!=i.originalEvent.wheelDeltaX&&i.preventDefault()}),$(document).keydown(function(i){(37==i.keyCode||39==i.keyCode)&&i.preventDefault()}),setBackground(),setDiagonalPosition(),setSocialLinksPosition(),$(window).resize(function(){setBackground(),setDiagonalPosition(),setSocialLinksPosition()}),$(window).scroll(function(){var i=$("#about-background-right").css("backgroundPosition").split(" "),s=i[0],o=.5*$(window).scrollTop();$("#about-background-right").css("backgroundPosition",s+" "+o+"px"),setDiagonalPosition(),setSocialLinksPosition()}),$("#learnmore-btn").click(function(){scrollToElement("#about-content-container")})});