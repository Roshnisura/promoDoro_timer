let worktittle = document.getElementById('work');
let breaktittle = document.getElementById('break');

let worktime = 25;
let breaktime = 5;
let seconds ="00";

window.onload =() =>{
    document.getElementById('minutes').innerHTML = worktime;
    document.getElementById('seconds').innerHTML = seconds;

    worktittle.classList.add('active');
}

function start(){
    document.getElementById('start').style.display="none";
    document.getElementById('reset').style.display="block";
    seconds =59;
    let workMinutes = worktime-1;
    let breakMinutes = breaktime -1;

    breakCount = 0;

    let timefunction =() =>{
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds-1;

        if(seconds === 0){
            workMinutes = workMinutes-1; 
            if (workMinutes === -1) {
                if(breakCount % 2 === 0){
                    workMinutes = breakMinutes;
                    breakCount++
                    worktittle.classList.remove('active');
                    breaktittle.classList.add('active');
                }else{
                    workMinutes =worktime;
                    breakCount++;
                    worktittle.classList.remove('active');
                    breaktittle.classList.add('active');
                }
                
            }
            seconds =59;
               }
    }
    setInterval(timefunction , 1000);
}