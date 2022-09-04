const API_KEY = `9acfe2825e7b00426652fb1b15a8e621`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const displayTemperature = data => {
    const temperature = document.getElementById('temperature');
    console.log(data.main.temp);
    temperature.innerText = data.main.temp;
}

loadTemperature('dhaka');