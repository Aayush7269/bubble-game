var timer= 6;
var Score= 0;
var hitnum ;

function increaseScore(){
    Score += 10;
    document.querySelector("#getscore").textContent = Score;
}


function getNewHit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#gethit").textContent = hitnum;
    console.log(hitnum)

}
function makeBubble(){

    
    var clutter=""
    
    for(var i= 1; i<105; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += ` <div class="bubble"> ${rn}</div>`;
        console.log (clutter)
    }
    document.querySelector(".pbottom").innerHTML= clutter;
}
function runTimer(){

    var time = setInterval(function(){
        if(timer> 0){
            
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }
        else{
            clearInterval(time)
            document.querySelector(".pbottom").innerHTML=`<h1> Game Over</h1>`
            document.querySelector(".pbottom").innerHTML=`<p> Highest score ${Score}</p>`

        }
    
    },1000)
}
document.querySelector(".pbottom").addEventListener("click", function(dets){
    var clicked = Number(dets.target.textContent);
     console.log(clicked)
    
    if(clicked === hitnum){ 
       increaseScore();S
        makeBubble();
        getNewHit();
    }
    else({

    })
})
 
runTimer();
makeBubble();
getNewHit();

