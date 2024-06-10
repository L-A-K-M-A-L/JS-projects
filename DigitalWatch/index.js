

function updateClock(){
    
    const now = new Date();
    //To get current hour
    let hours = now.getHours();
    hours = hours % 12 || 12; 
    const meridium = hours <= 12? "PM":"AM";
    //Method Chaing 
    //padStart() for start fisrt digit with 0
    hours = hours.toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2 ,0);
    const second = now.getSeconds().toString().padStart(2 ,0);

    const timeString = `${hours}:${minute}:${second} ${meridium}`

    document.getElementById("clock").textContent = timeString;
}


updateClock();
setInterval(updateClock, 10000)