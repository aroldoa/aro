
jQuery(document).ready(function(){
    jQuery('.load').addClass('loaded');
    jQuery(".menu").click(function(){
	   TweenMax.to(".main",.5,{right:1,opacity:1});	   
    }); 
});