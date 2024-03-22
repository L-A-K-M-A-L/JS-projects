

function rollDice(){
    // Get Values
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImg");


    //to store dice numbers and images
    const values = [];
    const images = [];

    for(let i=0; i < numOfDice; i++){
        //to get random number between 1 and 6
        const value = Math.floor(Math.random() * 6)+1;
        
        //push values to array
        values.push(value);

        //Here store images in array
        //read value from image folder using img element in html.
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(" - ")}`;
    diceImage.innerHTML = images.join(' ');
}


