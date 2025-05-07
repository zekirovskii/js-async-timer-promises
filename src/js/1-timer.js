import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate = null;
let timerId = null;

const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const dateTimePicker = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
      iziToast.error({
          title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
          backgroundColor: `red`,
      });
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
      iziToast.success({
        title: 'Success',
        message: 'The Date You Selected Is Valid',
        position: 'topRight',
      });
    }
  },
};

flatpickr("#datetime-picker", options);


startBtn.addEventListener('click', () => {
  if (!userSelectedDate) return;

  startBtn.disabled = true;
  dateTimePicker.disabled = true;

  timerId = setInterval(() => {
    const now = new Date();
    const diff = userSelectedDate - now;

    if (diff <= 0) {
      clearInterval(timerId);
      updateTimer(0);
      iziToast.info({
        title: 'Done',
        message: 'Countdown finished!',
        position: 'topRight',
      });
      return;
    }

    updateTimer(diff);
  }, 1000);
});

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
      return String(value).padStart(2, '0');
}