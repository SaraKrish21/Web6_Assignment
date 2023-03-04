const timeElement = document.querySelector('.timer .time');
const Start_btn = document.getElementById('Start');
const Stop_btn = document.getElementById('Stop');
const Reset_btn = document.getElementById('Reset');
var  count= 0;
let seconds = 0;
let interval = null;
Start_btn.addEventListener('click', start);
Stop_btn.addEventListener('click', stop);
Reset_btn.addEventListener('click', reset);

function stopWatch() {
   
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;
    timeElement.innerText = `${hrs}:${mins}:${secs}`;
  
}


/* set interval method will call  function at every 1 sec  */
 function start() {
  if (count == 0) {
    interval = setInterval(stopWatch, 1000);
    count = 1;
  }
  
}


 /* Clear  interval method will clear everything */

 function stop() {
  clearInterval(interval);
  interval = null;
  count = 0;
  
}

 function reset() {
  stop();
  seconds = 0;
  timeElement.innerText = '00:00:00';
  
}
