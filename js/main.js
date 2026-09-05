let balance=500;
const symbols= [ "🍍", "🍒", "🍌", "🍉", "🍋" ];
const minButton=document.querySelector(".minBet");
const maxButton=document.querySelector(".maxBet");
function spin(bet){
  let reels=document.querySelectorAll(".reel");
  let message=document.querySelector(".message");
  if(bet>balance){
    message.innerText="Not Enough Balance!";
  }
  else{
    balance-=bet;
    let reelOne=symbols[Math.floor(Math.random()*symbols.length)];
    let reelTwo=symbols[Math.floor(Math.random()*symbols.length)];
    let reelThree=symbols[Math.floor(Math.random()*symbols.length)];
    reels[0].innerText=reelOne;
    reels[1].innerText=reelTwo;
    reels[2].innerText=reelThree;
    if((reelOne===reelTwo) && (reelTwo===reelThree)){
      message.innerText="Congratulations, Winner!"
      let earnings=bet*10;
      balance+=earnings;
    }
    else{
      message.innerText="You Lose!"
    }
    document.querySelector(".remainingBalance").innerText=`Balance: $${balance}`;
  }
  }
minButton.addEventListener('click', function(){spin(5)});
maxButton.addEventListener('click', function(){spin(50)});
