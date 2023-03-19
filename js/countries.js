const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = (countries) => {
    const countriesHtml = countries.map(country => getCountryHtml(country));
    console.log(countries);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
}

const getCountryHtml = ({name, flags,area, region}) => {
    // option 2
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Continent: ${region}</p>
            <img src="${flags.png}">
        </div>
    `
}
// const getCountryHtml = country => {
//     // option 1
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// const getCountryHtml = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }

loadCountries();