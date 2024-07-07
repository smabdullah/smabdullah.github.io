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
  countryName.innerHTML = "";
}
