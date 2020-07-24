var animateBird=document.getElementById('bird');
var animate=animateBird.animate([
{transform:'translate(0,0'},
{transform:'translate(800px,0)'}
],
{duration:7000,
iterations:Infinity,
playbackRate:-4,
});

var animateHelli=document.getElementById('helli');
var animate1=animateHelli.animate([
{transform:'translate(0,0'},
{transform:'translate(-800px,-100px)'}
],
{duration:5000,
iterations:Infinity,
playbackRate:-4,
});

var animateBoat=document.getElementById('boat');
var animate2=animateBoat.animate([

{transform:'translate(-800px,0)'}
],
{duration:12000,
iterations:Infinity,

});