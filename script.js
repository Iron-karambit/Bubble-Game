var timer = 60;
var score= 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble(){
    var clutter = "";
    for(var i = 1; i<=102; i++){
        var RN = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${RN}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter 
}

function runTimer(){
    var timeerimt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timeerimt)
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`
        }
    },1000)
     
}


document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewHit();   
    }
})

runTimer();
makebubble();
getNewHit();
