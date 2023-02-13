setInterval(ActivarReloj, 1000);

function ActivarReloj(){
    
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" + min + ":" + sec;
  
    document.getElementById("reloj")
            .innerHTML = currentTime;
}
ActivarReloj();