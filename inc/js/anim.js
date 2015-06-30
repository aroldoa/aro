jQuery(document).ready(function(){
    jQuery('.load').addClass('loaded');
});
TweenMax.to(".showcase", .5, {height: 960});
TweenMax.to(".back", .5, {opacity: 1, delay:.8});
TweenMax.to(".tesoro,.alpha", .6, {opacity: 1, height:960, delay:.8});
TweenMax.to(".introtext", .6, {top: 420,opacity: 1, delay:1.2});
TweenMax.to("main", .8, {opacity: 1, delay:1.4});
$('.tesoro,.alpha').waypoint(function(direction) {
    TweenMax.to(".portfolio-context h1", 1, {top: 0,opacity: 1,ease:Power2.easeInOut}); 
    TweenMax.to(".portfolio-context ul#project-details", 1, {opacity: 1,delay:.5,ease:Power2.easeInOut}); 
    TweenMax.to(".portfolio-context p", 1, {top: 0,opacity: 1,delay:.5,ease:Power2.easeInOut}); 
},
{ offset: '-1%' });
$('.portfolio-context').waypoint(function(direction) {
    TweenMax.to(".up", 1, {top: 0,opacity: 1,ease:Power2.easeInOut});    
},
{ offset: '-26%' });
$('.white').waypoint(function(direction) {
    TweenMax.to(".fade", 1, {opacity: 1});
},
{ offset: '-50%' });
$('.gray').waypoint(function(direction) {
    TweenMax.to(".left", 1, {right: 0,opacity:1,ease:Power2.easeInOut});
    TweenMax.to(".right", 1, {left: 0,opacity:1,ease:Power2.easeInOut});
},
{ offset: '-60%' });
$('.gray').waypoint(function(direction) {
 TweenMax.to(".up2", 1, {top: 0,opacity:1,ease:Power2.easeInOut});
},
{ offset: '-70%' });
//TweenMax.to(".up", .7, {top:0,opacity:1});
