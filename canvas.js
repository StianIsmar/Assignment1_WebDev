

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


//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(600,300);
c.strokeStyle="lightblue";
c.stroke();

//arc
c.beginPath();
c.arc(300,300,30,0,Math.PI*2,true);
c.strokeStyle = "#blue"
c.stroke();

/*
//Drawing random circles
for(var i = 0; i<100;i++){
    var x=Math.random() * 1000;
    var y=Math.random() * 470;
    c.beginPath();
    c.arc(x,y,30,0,Math.PI*2,true);
    c.closePath();
    c.fillStyle = "lightblue";
    c.fill();
    //c.strokeStyle = "#blue"
   // c.stroke();
}
*/

//3
/* RANDOMIZED VALUES
var x=Math.random()*1000;
var y=Math.random()*470;
var dy=(4*Math.random()-0.5)*4;
var dx=(4*Math.random()-0.5)*4;
var radius = 30;
*/



function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = '#3D9970';
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


/* RANDOMIZED VALUES
var x=Math.random()*1000;
var y=Math.random()*470;
var dy=(4*Math.random()-0.5)*4;
var dx=(4*Math.random()-0.5)*4;
var radius = 30;
*/
var circleArray=[];

for (var i=0;i<100; i++){
    var radius = 30;
    var x=Math.random()*(1000-radius*2)+ radius ;
    var y=Math.random()*(470-radius*2)+radius;
    var dy=(4*Math.random()-0.5)*1;
    var dx=(4*Math.random()-0.5)*1;
    circleArray.push(new Circle(x,y,dx,dy,radius));  
}
console.log(circleArray);

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1000,470);
   
   for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
   }

}

//for (var j = 0; j<10;j++){
    animate();

//}


/*for (i  = 0; i<100; i++){
    c.beginPath();
    c.arc(100+i,150,10,0,Math.PI*2,true);
    c.closePath();
    c.fill();
}*/

    
    
    /*sirkel=new Sirkel();

update()

function update(){
    c.clearRect(0,0,1000,1000)
    sirkel.update()


    requestAnimationFrame(update)
}


class Sirkel{
    constructor(){
        this.x=0
        this.y=0
        this.phase=0
        this.amp=200
        this.r=50
        
        c.fillStyle="lightgreen"
    }
    update(){
        c.fillStyle=color.value
        this.phase+=.1
        this.x=500+this.amp*Math.cos(this.phase)
        this.y=300+this.amp*Math.sin(this.phase)
        c.beginPath()
        c.arc(this.x,this.y,this.r,0,Math.PI*2)
        c.fill()
    }
}*/




//create circles by clicking!
$(".box").click(function(){
    $("h1").html("Well done ");
    $("p").css("c.fillStyle", "yellow");//ENDRE FARGEN FUNKER IKKE?
    //ENDRE FONTEN PÅ DETTE?
});