function getWeather() {
    var apiKey = '';
    var city = document.getElementById('city-input').value;
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod && data.message) {
          document.getElementById('result').innerHTML = 'Error: ' + data.message;
        } else {
          var cityName = data.name;
          var temperature = (data.main.temp - 273.15).toFixed(2);
          var weatherCondition = data.weather[0].main;
  
          var cityImage = document.getElementById('city-image');
          cityImage.innerHTML = `<img src="https://source.unsplash.com/400x300/?${cityName}" alt="${cityName}">`;
  
          var weatherInfo = document.getElementById('weather-info');
          weatherInfo.innerHTML = `<span>${temperature}°C</span>`;
  
          var weatherEmoji = '';
          if (weatherCondition.includes('Cloud')) {
            weatherEmoji = '☁️';
          } else if (weatherCondition.includes('Rain')) {
            weatherEmoji = '🌧️';
          } else if (weatherCondition.includes('Snow')) {
            weatherEmoji = '❄️';
          } else {
            weatherEmoji = '☀️';
          }
  
          weatherInfo.innerHTML += `<p>${weatherEmoji} ${weatherCondition}</p>`;
        }
      })
      .catch(error => {
        console.log('Error:', error);
        document.getElementById('result').innerText = 'An error occurred while fetching weather data.';
      });
  }
  