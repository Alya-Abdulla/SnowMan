const words = [
      ["M", "A", "N", "G", "O"],
      ["B","A","N","A","N","A"],
      ["O","R","A","N","G","E"],
      ["A","P","P","L","E"]
    ]
  
    let chooseWord = Math.floor((Math.random()*(words.length-1))); 
    
    let isWord= words[chooseWord]; // the word to guess will be chosen from the array above
    let GWord = new Array(isWord.length);
    let wrong = 0;
    let userChosenLetters = []
    // every letter in the word is symboliuserGuessed by an underscore in the guessfield
    for (let i = 0; i < GWord.length; i++)
    {
        GWord[i] = "_ ";
    }
    function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
    // prints the guessfield
    function printGuessesWord()
    {
        for (let i = 0; i < GWord.length; i++)
        {
        let ratefeld = document.getElementById("ratefeld");
        let letter = document.createTextNode(GWord[i]);
        ratefeld.appendChild(letter);
        }
    }

    //check if the letter procided by the use match one or more of the letter in the word
    let testMatch= function()
    {

        let f = document.querySelector('.wordForm'); 
        let b = f.elements["inputField"]; 
        let userGuess = b.value; // the letter provided by the user
        userGuess = userGuess.toUpperCase();
        console.log(userGuess)
        let goal;
        if (userChosenLetters.includes(userGuess)){
            console.log('you already chose that letter!')
        } else {
            userChosenLetters.push(userGuess)
            for (let i = 0; i < isWord.length; i++)
            {
                if(isWord[i]===userGuess)
                {
                    GWord[i]=userGuess+"";
                    goal=true;
                }
                b.value=" "
    
            }
            //deletes the guessfield and replaces it with the new one
    
            let ratefeld=document.getElementById("ratefeld");
            ratefeld.innerHTML = "";
            printGuessesWord();
    
            // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
           if(!goal&& wrong<4)
           {
            // console.log('not goal')
           // selecting the span that will hold the wrong letters
            let wrongLetter=document.getElementById("span")
            // change the innerText of wrongLetter
            wrongLetter.innerText = wrongLetter.innerText + " \n  " +userGuess + "\n"
            wrong++;
            switch(wrong)
            {
                case 1:
                    hat.style.visibility="hidden"
                    break;
                case 2:
                    scarf.style.visibility="hidden"
                    break;
                case 3:
                    head.style.visibility="hidden"
                    break;
                case 4:
                    body.style.visibility="hidden"
                    
                    demo.style.visibility="visible"  
                break;
    
            }
    
           }
    //checks if all letters have been found
            let isDone=false;
            for (let i = 0; i < isWord.length; i++)
            {
                if (GWord[i]==="_")
                {
                    isDone=false;
                }
            }
            if(isDone)
            {
                
                console.log("win")
                demo.style.visibility="visible"
                document.getElementById("win").innerHTML= "You Win"  
            }
    
            //once you got six wrong letters, you lose
            if(!isDone)
            {
               
              
              document.getElementById("demo").innerHTML = "Uh..I guess you're"+ "\n" +"ded now!! "; 
  
            }

        }    
    }


    

    print=printGuessesWord();
    console.log(print);


