const url='https://api.openweathermap.org/data/2.5/'; //API url
const key='52a29e69af10ed1f9e1d1373025b3d53'//API key

const searchBar=document.getElementById("searchBar");
//setQuey fonk.
const setQuery = (e) => {

        if(e.keyCode=="13"){
            getResult(searchBar.value);
        }
}

const getResult= (cityName)=>{
    //API den url çağırmak için fonk.
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
   .then(weather=>{
    return weather.json()

   })
   .then(displayResult)

}

const displayResult = (result)=>{
  let city = document.querySelector(".city");
  city.innerText = `${result.name},${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C/
  ${Math.round(result.main.temp_max)}°C`;

  let wind = document.querySelector(".wind");
  wind.innerText = `${Math.round(result.wind.speed)}`
}


searchBar.addEventListener("keypress",setQuery);