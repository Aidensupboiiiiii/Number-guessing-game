const BackgroundColor="#0099ff"
let score=0
let playagain
let devpassword
let devpassnum
let devtrue
let BetaPrompt
let Betatrue = false
function TesterClicked(){
    BetaPrompt=prompt("enter your beta testing password given by aiden")
    
    if(BetaPrompt=="sd9f8712!3jk1238"){
        document.body.style.backgroundColor=BackgroundColor
    }
}
function DevClicked(){
    if (devtrue){
        devtrue=false
    }else{
        devtrue=true
    }
}
function game(){
    let randomnum=(Math.floor(Math.random()*100)+1);
    console.log(randomnum)

    if(devtrue==true){
       devpassword=prompt("enter your password given by aiden");
       if (devpassword == "aidenc434"){
        alert("the code is " + randomnum);
       }else if(devpassword=="chey452"){
        alert("the code is " + randomnum)
       }
    }

    while(true){
        let guess=prompt("guess the number");
        if(guess === null){
            alert("you canceled")
            alert("the number was " + randomnum)
            console.log("you scored " + score + " times")
            break;
        } else {
            let int=parseInt(guess);
            if(int == randomnum){
                alert("You guessed correctly");
                score+=1
                alert("you have scored " + score + " times")
               playagain=confirm("would you like to play again? Your score of " + score + " will reset if no.")
               if(playagain==true){
                game()
               } else{
                console.log("you scored "+score+" times")
               }
                break;
            }
            else if(int < randomnum){
                alert("Higher, guess again");
            }
            else if(int > randomnum){
                alert("Lower, guess again")
            }
        }
    }
}
