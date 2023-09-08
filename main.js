const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getDay()];

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;

const currentUTC = new Date().toUTCString();
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTC;