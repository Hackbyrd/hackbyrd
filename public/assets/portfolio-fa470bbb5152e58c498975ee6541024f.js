function setHeights(){$(".window-height").css("height",$(window).height()),$(".intro").css({"margin-top":-($(".intro").height()/2)}),$("#jcrocket").css("top",$(window).height()/2-parseInt($("#jcrocket").css("height"))/2),$("#jcrocket").css("left",$(window).width()/2-parseInt($("#jcrocket").css("width"))/2)}function scrollToElement(t){var o=1e3,i=jQuery(t).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:i},o,function(){window.location.hash=t}),!1}function switchRocket(){var t=Math.floor(3*Math.random()+1),o="jcrocket-"+t;$("#jcrocket").attr("class",o)}function verticalRocket(){var t=40,o=Math.floor(Math.random()*t+1),i=$(window).height()/2-parseInt($("#jcrocket").css("height"))/2-t/2+o;$("#jcrocket").css("top",i)}function horizontalRocket(){var t=40,o=Math.floor(Math.random()*t+1),i=$(window).width()/2-parseInt($("#jcrocket").css("width"))/2-t/2+o;$("#jcrocket").css("left",i)}function animateSun(){var t=$(window).scrollTop()/($(document).height()-$(window).height()),o=($(window).width()+2*parseInt($("#sun").css("width")))*t,i=50*t;$("#sun").css("right",-parseInt($("#sun").css("width"))+o),$("#sun").css("top",50+i)}function animateAsteroids(){for(var t=$(window).scrollTop()/($(document).height()-$(window).height()),o=($(window).width()+6800)*t,i=0;i<$(".asteroid").length;i++)$("#asteroid-"+i).css("right",parseInt($("#asteroid-"+i).attr("name"),10)+o)}function positionAsteroids(){for(var t=0;t<$(".asteroid").length;t++){var o=Math.floor(Math.random()*$(window).height()-parseInt($("#asteroid-"+t).css("height"),10)+1);$("#asteroid-"+t).css("top",o)}}function generateBackgroundStars(){for(var t=$(window).height()*$(window).width()/1e4,o="",i=0;t>i;i++){var e=Math.floor(4*Math.random())+2,n=Math.floor(Math.random()*$(window).height())+5,r=Math.floor(Math.random()*$(window).width())+5;o=o+"<div class='background-star' style='height:"+e+"px; width:"+e+"px; top: "+n+"px; right: "+r+"px;'></div>"}$(o).insertAfter("#star-1")}$(document).ready(function(){setHeights(),positionAsteroids(),generateBackgroundStars(),$(window).resize(function(){setHeights(),animateSun(),animateAsteroids()}),$(window).scroll(function(){switchRocket(),animateSun(),animateAsteroids(),parseInt($("#asteroid-1").css("right"))>=$(window).width()/2&&parseInt($("#asteroid-0").css("right"))<$(window).width()/2&&(verticalRocket(),horizontalRocket())}),$("#particles").particleground({dotColor:"#E6E6E6",lineColor:"#E6E6E6",density:12e3,particleRadius:10,curvedLines:!1,parallax:!0,parallaxMultiplier:4}),$(document).on("click","#see-portfolio",function(){scrollToElement("#portfolio-1")})});