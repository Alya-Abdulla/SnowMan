const words = [
    ["R", "A", "D", "I", "O"],
      ["T","E","A","M","S","P","E","A","K"],
      ["W","E","B","D","E","S","I","G","N"],
      ["E","D","U","C","A","T","I","O","N"],
      ["C","H","O","C","O","L","A","T","E"],
      ["G","E","R","M","A","N","Y"]
    ]
    let chooseWord = Math.floor((Math.random()*(words.length-1))); 
    
    let isWord= words[chooseWord]; // the word to guess will be chosen from the array above
    let GWord = new Array(isWord.length);
    let wrong = 0;
    
    // every letter in the word is symbolized by an underscore in the guessfield
    for (let i = 0; i < GWord.length; i++)
    {
        GWord[i] = "_ ";
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

    
    let testMatch= function()
    {

        let f = document.wordForm; 
        let b = f.elements["inputFeild"]; 
        let z = b.value; // the letter provided by the user
        z = z.toUpperCase();

        for (let i = 0; i < isWord.length; i++)
        {
            if(isWord[i]===z)
            {
                GWord[i]=z+"";
                let goal=true;
            }
            b.value=" "

        }

        let ratefeld=document.getElementById("ratefeld");
        ratefeld.innerHTML("");
        printGuessesWord();

       if(!goal)
       {
        let wrongLatter=document.getElementById("wrongLatter")
        let letter=document.createTextNode(" ",z)
        wrongLatter.appendChild(letter)
        wrong++;
       }

        let isDone=true;
        for (let i = 0; i < isWord.length; i++)
        {
            if (GWord[i]==="_")
            {
                isDone=false;
            }
        }
        if(isDone)
        {
            window.alert("You Win")
        }
        if(isDone===6)
        {
            window.alert("X")
        }

    }


    

    print=printGuessesWord();
    console.log(print);