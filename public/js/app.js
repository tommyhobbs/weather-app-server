const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

const getForecast = input => {
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch(`/weather?address=${input}`).then(response => {
    response.json().then(({ error, location, forecastData }) => {
      if (error) {
        messageOne.textContent = error;
      } else {
        messageOne.textContent = location;
        messageTwo.textContent = forecastData;
      }
    });
  });
};

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const location = searchInput.value;
  getForecast(location);
});
