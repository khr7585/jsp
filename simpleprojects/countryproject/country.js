const input = document.getElementById("countryInput");
const button = document.getElementById("searchBtn");

const countryInfo = document.getElementById("countryInfo");
const countryName = document.getElementById("countryName");
const capital = document.getElementById("capital");
const population = document.getElementById("population");
const currency = document.getElementById("currency");
const region = document.getElementById("region");
const area = document.getElementById("area");

function callApi(cname = "India") {
  fetch(`https://restcountries.com/v3.1/name/${cname}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const countryData = data[0];

      countryName.textContent = countryData.name.common;
      capital.textContent = countryData.capital
        ? countryData.capital[0]
        : "N/A";
      population.textContent = countryData.population.toLocaleString();
      region.textContent = countryData.region;

      const currencyCode = Object.keys(countryData.currencies)[0];
      currency.textContent = countryData.currencies[currencyCode].name;
      area.textContent = countryData.area.toLocaleString() + " km²";

      countryInfo.style.display = "block";
    })
    .catch((error) => {
      alert("Country not found ❌");
      countryInfo.style.display = "none";
    });
}

button.addEventListener("click", () => {
  const country = input.value.trim();

  if (country === "") {
    alert("Please enter a country name");
    return;
  }

  callApi(country);
});

callApi();
