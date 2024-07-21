function GUESSING(){
    const minNumber=1;
    const maxNumber=100;
    var correctNumber=Math.floor(Math.random() * 100) + 1;
    console.log(correctNumber);
    var numberGuess=document.getElementById('1').value;
    
        numberGuess=Number(numberGuess);
        if(isNaN(numberGuess) ||numberGuess<minNumber|| numberGuess>maxNumber)
        {
            document.querySelector('h3').innerHTML="please enter valied number";
    
        }
            
          else  if(numberGuess >correctNumber){
            document.querySelector('h3').innerHTML='NUMBER IS HIGH ,TRY AGAIN';
    
        }
        else if (numberGuess<correctNumber){
            document.querySelector('h3').innerHTML='NUMBER IS LOW ,TRY AGAIN';
        }
        else{
            document.querySelector('h3').innerHTML='Congratulations';
           
        }
        
    }   
          
    