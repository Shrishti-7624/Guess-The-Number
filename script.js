let secret_number = Math.trunc(Math.random() * 20 + 1);
let score= 20;
let high_score = 0;
console.log(secret_number);
const again = document.querySelector('.again').addEventListener('click' , function(){
score =20;
    document.querySelector('.score').textContent= score;
    secret_number = Math.trunc(Math.random()* 20 + 1)
    document.querySelector('.number').textContent='?'
    document.querySelector('.message').textContent='start guessing...'
    document.querySelector('.guess').value=""
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
})

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secret_number) {
    document.querySelector(".message").textContent =
      "Correct guess !!! You win :)";
      document.querySelector(".number").textContent = secret_number;
      high_score= score;
      document.querySelector('.highscore').textContent=high_score
      document.querySelector('body').style.backgroundColor='#117A65'
      document.querySelector('.number').style.width='35rem'

  }else if(guess> secret_number){
    if(score>0){
        document.querySelector('.message').textContent = "Too High";
        score--
        document.querySelector('.score').textContent= score;

    }else{
        document.querySelector('.message').textContent='You Loose !!! Play again'
    }
   
  }
  else if(guess< secret_number) {
    if(score>0){
        document.querySelector('.message').textContent = "Too low";
        score--
        document.querySelector('.score').textContent= score;
    }else{
        document.querySelector('.message').textContent='You Loose !!! Play again'
    }
   
  }
});
