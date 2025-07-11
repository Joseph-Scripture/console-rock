// console.log('hellow')
 let result = ''
function getComputerMove(result) {
    const value = Math.floor(Math.random() * 3); 
    // console.log(value);
   
  
    if (value === 0) {
        result = 'rock'
        return result;
    } else if (value === 1) {
        result = 'paper'
        return result;
    } else { 
        result = 'scissors'
        return result;
    }
  }
function playerMove(result){
    let userMove = prompt('Enter Your Move: ').trim().toLocaleLowerCase();
    if(userMove){
        if(userMove === 'rock'){
            if (result === 'scissors'){
                console.log(`You chosed ${userMove} and computer chosed ${result} You win`);
            }else if(result == 'paper'){
                console.log(`Computer chosed ${result} You losed`);
            }else{
                console.log('Tie')
            }
        }else if(userMove === 'paper'){
            if(result == 'paper'){
                console.log('Tie')
            }else if(result == 'scissors'){
                console.log(`computer chosed ${result} You win`);
            }else{
                console.log(`computer chosed ${result} You lose`);
            }
        }else{
            if (result == 'scissors'){
                console.log(`Tie`)
            }else if(result === 'paper'){
                console.log(`You chosed ${userMove} and computer chosed ${result} you win `);
            }else {
                console.log(`Computer chosed ${result} You lose`);
            }
        }
        
    }else{
        console.log('Enter a move');
    }
}


getComputerMove(result)
playerMove(getComputerMove())