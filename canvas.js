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
      /*  c.fillStyle=color.value*/
        this.phase+=.1
        this.x=500+this.amp*Math.cos(this.phase)
        this.y=300+this.amp*Math.sin(this.phase)
        
        c.beginPath()
        c.arc(this.x,this.y,this.r,0,Math.PI*2)
        c.fill()
    }
}

let canvas=document.getElementById("canvas"),
    color=document.getElementById("color"),
    c=canvas.getContext("2d"),
    sirkel=new Sirkel();
update()
function update(){
    c.clearRect(0,0,1000,1000)
    sirkel.update()


    requestAnimationFrame(update)
}