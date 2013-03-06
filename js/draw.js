"use strict"

var wW=window.innerWidth;
var wH=window.innerHeight;
var canvasHTML=document.getElementById("canvas");
canvasHTML.width=wW;
canvasHTML.height=wH;
var ctx=canvasHTML.getContext("2d");
var ix;
var iy;
var x=50;
var y=50;
var d;
var dx;
var dy;

function buttonHandler() {
    var polynomial = document.getElementById("polynomial").value;
    var polyArray = polynomial.split("+");

    var n=polyArray.length;
    for(var i=0;i<n;i++) {
        if (polyArray[i]=="1") 
            polyArray[i]=0;
        else if (polyArray[i]=="x")
            polyArray[i]=1;
        else
            polyArray[i]=polyArray[i].replace(/(x|\^)/g,"");
    }
    drawRec(polyArray);
    drawArrowLine(50,50,50,100,d);

}

function drawRec(polyArray) {
    var n = polyArray[0];
    ctx.font="40px Verdana";
    for(var i=0;i<n;i++) {
        ctx.strokeRect(x+i*100,y,50,50);
        drawLine(x+50+i*100,y+25,x+100+i*100,y+25);
    }
}

function drawNum(numString) {
    ctx.font="20px Open Sans";
    ctx.fillStyle = '808080';
    for(var i=0;i<n;i++) 

        ctx.fillText(i+1,x+25+i*50,y-10);
}

function drawXor(x,y) {
    ctx.arc(x,y,20,0,2*Math.PI); 
    ctx.moveTo(x-20,y);
    ctx.lineTo(x+20,y);
    ctx.moveTo(x,y-20);
    ctx.lineTo(x,y+20);
    ctx.stroke();
}

function drawLine(x0,y0,x1,y1) {
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.stroke();
}

function drawArrowLine(x0,y0,x1,y1,D) {
    var a,b,c,d;
    drawLine(x0,y0,x1,y1);
    
    switch(D) {
        case 'u':
            a=-5;
            b=5;
            c=5;
            b=5;
        case 'd':
            a=-5;
            b=-5;
            c=5;
            d=-5;
        case 'l':
            a=5;
            b=5;
            c=5;
            d=-5;
        case 'r':
            a=-5;
            b=-5;
            c=-5;
            d=5;
    }
        

    ctx.moveTo(x1,y1);
    ctx.beginPath();
    ctx.lineTo(x1+a,y1+b);
    ctx.lineTo(x1+c,y1+d);
    ctx.lineTo(x1,y1);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
        
