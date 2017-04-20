$(document).ready(function(){

//Setting variables for commonly used selectors
var box = $('.box');
var color = 'white';
var allColors = 'red green blue yellow white';

//Click updates box's color, double click removes any/all colors from box (only for the 
//box you are on (using the 'this' selector))
box.click(function(){
    $(this).addClass(color);
});

box.dblclick(function(){
    $(this).removeClass(allColors);
});

//setting click to false by default for the click and drag function. The mousedown 
//and mouseup functions will change click to true/false. If true (mouse is down),
//then the 'mouseover' function will work to color boxes. As soon as you let the mouse
//up, click is set to false, and the mouseover function won't update the boxes' colors
//anymore.
var click = false;

box.mousedown(function(){
    click = true;
});

box.mouseup(function(){
    click = false;
});

box.mouseover(function(){
    if (click){
        $(this).addClass(color);
    }
});

//Reset button removes any/all colors from all boxes.
$('#reset').click(function(){
  box.removeClass(allColors);
});

//If you click these boxes, it will update the color according to what
//box you clicked on!
$('#red').click(function(){
  color = 'red';
});

$('#green').click(function(){
  color = 'green';
});

$('#blue').click(function(){
  color = 'blue';
});

$('#yellow').click(function(){
  color = 'yellow';
});

$('#white').click(function(){
  color = 'white';
});








});//document.ready end