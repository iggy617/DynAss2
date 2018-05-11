/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

var dispDiv = document.getElementById("display");
var selectedCol = document.getElementById("colSelec");
var hairup = 60;

document.getElementById("colSelec").addEventListener("change", function(){
    document.getElementById("preview").style.backgroundColor = document.getElementById("colSelec").value;
});

document.getElementById("number").addEventListener("click", function(){
   document.getElementsByClassName("inputs").type = "number";
});


document.getElementById("range").addEventListener("click", function(){
   document.getElementsByClassName("inputs").type = "range"; 
});

document.getElementById("hairCont").addEventListener("change", function(){
    hairup = hairup + 1;
   document.getElementById("hair").style.width = hairup+"%";
        if 
        (hairup <= 60){
        hairup = 100;
        }
    
});

document.getElementById("eyesCont").addEventListener("change", function(){
   document.getElementById("eyes").style.width = "";
   document.getElementById("eyes").style.top = ""
});

document.getElementById("noseCont").addEventListener("change", function(){
   document.getElementById("nose").style.width = "";
   document.getElementById("nose").style.top = "";
});

document.getElementById("mouthCont").addEventListener("change", function(){
  document.getElementById("mouth").style.width = "";
  document.getElementById("mouth").style.top = "";
});

document.getElementById("hair").addEventListener("click", function(){
   document.getElementById("hair").src = "img/hair2.png"; 
});

document.getElementById("eyes").addEventListener("click", function(){
   document.getElementById("eyes").src = "img/eyes2.png";
});

document.getElementById("nose").addEventListener("click", function(){
    document.getElementById("nose").src = "img/nose2.png";
});

document.getElementById("mouth").addEventListener("click", function(){
    document.getElementById("mouth").src = "img/mouth2.png";
});


document.getElementById("plus").addEventListener("click",function (){
    var newDiv = document.createElement("div");
    dispDiv.appendChild(newDiv);
    
    newDiv.className = "copyBox";
    newDiv.id = "copBox"+num;
    newDiv.style.height = "100px";
    newDiv.style.width = "100px";
    
    
})
