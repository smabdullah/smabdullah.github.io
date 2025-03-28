function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

async function fetchCountryInfo() {
  const countryName = document.getElementById('countryInput').value;
  const countryInfoDiv = document.getElementById('countryInfo');

  if (countryName === "") {
    countryInfoDiv.innerHTML = "Please enter a country name.";
    return;
  }

  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  if (response.status !== 200) {
      countryInfoDiv.innerHTML = "Country not found.";
      return;
  }

  const countryData = await response.json();
  const country = countryData[0];

  countryInfoDiv.innerHTML = `
      <h3>${country.name.common}</h3>
      <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Area:</strong> ${country.area} km²</p>
      <p><strong>Population:</strong> ${country.population}</p>
      <p><strong>Driving Side:</strong> ${country.car.side}</p>
      <p><strong>Week Start:</strong> ${country.startOfWeek}</p>
  `;
  document.getElementById('countryInput').innerHTML = "";
}

function areYouBored() {
  const category = document.getElementById('categorySelect').value;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let url;

  if (category) {
    url = `${proxyUrl}https://bored-api.appbrewery.com/filter?type=${category}`;
  } else {
    url = `${proxyUrl}https://bored-api.appbrewery.com/random`;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const activities = Array.isArray(data) ? data : [data];
      let resultHTML = '';

      activities.forEach(activity => {
        const { activity: name, kidFriendly, link } = activity;
        const kidFriendlyText = kidFriendly ? 'Kid-friendly' : 'Not kid-friendly';
        if (link) {
          resultHTML += `<div class="activity"><p><a href="${link}" target="_blank">${name}</a> - ${kidFriendlyText}</div></p>`;
        } else {
          resultHTML += `<div class="activity"><p>${name} - ${kidFriendlyText}</div></p>`;
        }
      });

      document.getElementById('activityResult').innerHTML = resultHTML;
    })
    .catch(error => {
      console.error('Error fetching activity:', error);
      document.getElementById('activityResult').innerText = 'Sorry, something went wrong. Please try again.';
    });
}

function sendEmail(){
  window.location.href = "mailto:sma.csedu@gmail.com?subject=Say Hello&body=Hi there!";
}
