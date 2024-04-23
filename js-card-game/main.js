
let cardElement = document.querySelectorAll("img");
// console.log(cardElement);
let ranNum = Math.ceil(Math.random() * 3);
// console.log(ranNum);
let  mesg = document.querySelector("#mesg");

function randomNum(clicked_id){
    // console.log(clicked_id);
    if(ranNum === 1){
        cardElement[0].src = "./img/king.png";
        cardElement[1].src = "./img/queen.png";
        cardElement[2].src = "./img/jack.png";
    }
    else if(ranNum === 2){
        cardElement[0].src = "./img/queen.png";
        cardElement[1].src = "./img/king.png";
        cardElement[2].src = "./img/jack.png";
    }
    else if(ranNum === 3){
        cardElement[0].src = "./img/queen.png";
        cardElement[1].src = "./img/jack.png";
        cardElement[2].src = "./img/king.png";
    }
    for(i = 0; i < cardElement.length; i++){
    cardElement[i].classList.toggle('is-flipped');
    cardElement[i].onclick="";
}

if(clicked_id == ranNum){
        showMesg = "You Win!";
}
else{
    showMesg = "You Lose!";
}
mesg.innerHTML = '<div class="bg-overly"><div class="centext">'+ showMesg +'</div></div>';

setTimeout(function(){
    window.location.reload(1);
 }, 3000)
}

