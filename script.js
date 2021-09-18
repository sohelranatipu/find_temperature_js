const API_KEY = `fd73ecbdef359ac63bd83cf97b0bccd2`;

const loadWeather = () => {
    const city_name = document.getElementById('city_name').value ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data =>displayWeather(data));
}



const displayWeather = temperature => {
    console.log(temperature);
    setinnerText('city' , temperature.name);
    setinnerText('temperature' , temperature.main.temp);
    setinnerText('condition' , temperature.weather[0].main);

    // setIcon 
    // const url = 
    const icon = document.getElementById('icon_img');
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`)
}
const setinnerText = (id,text) => {
    document.getElementById(id).innerText = text ;
}