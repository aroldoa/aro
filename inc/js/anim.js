jQuery(document).ready(function(){
    jQuery('.load').addClass('loaded');
});
TweenMax.to(".introtext", .5, {top: 420,opacity: 1});

$('.showcase').waypoint(function(direction) {
    TweenMax.to(".portfolio-context h1", 1, {top: 0,opacity: 1,ease:Power2.easeInOut}); 
    TweenMax.to(".portfolio-context ul#project-details", 1, {opacity: 1,delay:.5,ease:Power2.easeInOut}); 
    TweenMax.to(".portfolio-context p", 1, {top: 0,opacity: 1,delay:.5,ease:Power2.easeInOut}); 
},
{ offset: '-1%' });
$('.portfolio-context').waypoint(function(direction) {
    TweenMax.to(".up", 1, {top: 0,opacity: 1,ease:Power2.easeInOut});    
},
{ offset: '40%' });
$('.white').waypoint(function(direction) {
    TweenMax.to(".fade", 1, {opacity: 1});
},
{ offset: '30%' });
$('.gray').waypoint(function(direction) {
    TweenMax.to(".left", 1, {right: 0,opacity:1,ease:Power2.easeInOut});
    TweenMax.to(".right", 1, {left: 0,opacity:1,ease:Power2.easeInOut});
},
{ offset: '30%' });
$('.gray').waypoint(function(direction) {
 TweenMax.to(".up2", 2, {top: 0,opacity:1,ease:Power2.easeInOut});
},
{ offset: '10%' });
//TweenMax.to(".up", .7, {top:0,opacity:1});