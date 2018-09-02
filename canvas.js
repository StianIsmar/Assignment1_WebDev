

var canvas=document.getElementById("canvas");
   color=document.getElementById("color");
    c=canvas.getContext("2d");
    canvas.setAttribute('width','1000');
    canvas.setAttribute('height','470');




var i;

c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(255,0,0,0.5)';

c.fillRect(400,100,100,100);
c.fillRect(300,100,100,100);
c.fillRect(300,300,100,100);

//Circle animations
function Circle(x,y,dx,dy,radius){
    this.color="#00b3ff";
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        if(this.x+this.radius>1000 || this.x- this.radius <0){
            this.dx=-this.dx
        }
        if(this.y+this.radius > 470 || this.y-this.radius <0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}
//Array containing all circle objects
var circleArray=[];
//For-loop creating random objects and pushing them into the array.
for (var i=0;i<100; i++){
    var radius = 30;
    var x=Math.random()*(1000-radius*2)+ radius ;
    var y=Math.random()*(470-radius*2)+radius;
    var dy=(4*Math.random()-0.5)*1;
    var dx=(4*Math.random()-0.5)*1;
    circleArray.push(new Circle(x,y,dx,dy,radius));  
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1000,470);
   
   for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
   }

}

animate();

//Change colour of circles by clicking button
$('#myButton').click(() => {
    console.log("gsdgdsg");
    for(var x in circleArray){
        circleArray[x].color=`hsl(${Math.random()*360}, 50%, 70%)`;
        console.log(x);
    }
});


//Legge til tekst under
$(".box").click(() => {
    $("h1").html("Well done ");
    $(box).css("background-color", "#75b3f4");
});

$(function(){
    $('#box').hover(function(){
        $(this).height(1.25*$(this).height());
    },function(){
        $(this).height(0.8*$(this).height());
 
    });
});

$("#canvas").click(function(){
    $("h1").html("Well done ");
    $(canvas).css("background-color", "#598234");
});
//Show documentation by clicking button
$("#docButton").click(function(){
    $("#myDocumentation").css("display","block");
});
