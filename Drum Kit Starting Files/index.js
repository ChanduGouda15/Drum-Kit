// var i;
// for(i=0;i<document.querySelectorAll(".drum").length;i++)
//     {
//         document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         this.style.color="white";
//         var element = this.innerHTML;
//         switch (element) {
//             case "w":
//             var audio = new Audio('./sounds/tom-1.mp3');
//             audio.play();
//                 break;
//             case "a":
//             var audio = new Audio('./sounds/tom-2.mp3');
//             audio.play();
//                 break;
//             case "s":
//             var audio = new Audio('./sounds/tom-3.mp3');
//             audio.play();
//                 break;
//             case "d":
//             var audio = new Audio('./sounds/tom-4.mp3');
//             audio.play();
//                 break;
//                 case "j":
//             var audio = new Audio('./sounds/snare.mp3');
//             audio.play();
//                 break;
//             case "k":
//             var audio = new Audio('./sounds/kick-bass.mp3');
//             audio.play();
//                 break;
//             case "l":
//             var audio = new Audio('./sounds/crash.mp3');
//             audio.play();
//                 break;
//             default:
//                 break;
//     } 
// });
//     }
// var i;
// for(i=0;i<document.querySelectorAll(".drum").length;i++)
//     {
//         document.querySelectorAll(".drum")[i];
        
//     }


var i;
for(i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var element = this.innerHTML;
        MakeSound(element);
        Animination(element);
        ColorChanger(element);
    });
    }
document.addEventListener("keypress",function(event){
    MakeSound(event.key);
    Animination(event.key);
    ColorChanger(event.key);
    });
    function MakeSound(key){
    switch (key) {
    case "w":
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
        break;
    case "a":
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
        break;
    case "s":
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
        break;
    case "d":
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
        break;
        case "j":
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
        break;
    case "k":
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
        break;
    case "l":
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
        break;
    default:
        break;
    }
} 

function Animination(CurrentKey){
    var ActivationButton = document.querySelector("."+CurrentKey);
    ActivationButton.classList.add("pressed");
    setTimeout(function(){
        ActivationButton.classList.remove("pressed");},100);
}

function ColorChanger(CurrentKey){
    var ActivationButton = document.querySelector("."+CurrentKey);
    ActivationButton.classList.add("paint");
    setTimeout(function(){
        ActivationButton.classList.remove("paint");},200);
}