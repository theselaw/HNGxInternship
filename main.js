const daysOfWeek=['sunday', 'Monday','Tuesday','Wednesday','Thursday', 'Friday' , 'Saturday'];
const currentDate = new Date ();
const currentDay=daysOfWeek[currentDate.getDay()];
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML= currentDay;
const currentUTCTime= Date.now();

document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;

updateCurrentTime()
setInterval(updateCurrentTime, 1000);
