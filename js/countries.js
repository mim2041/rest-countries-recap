const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = (countries) => {
    const countriesHtml = countries.map(country => getCountryHtml(country));
    console.log(countriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
}

const getCountryHtml = country => {
    return `
        <div>
            <h2>${country.name.common}</h2>
            <img class="country" src="${country.flags.png}"
        </div>
    `
}

loadCountries();