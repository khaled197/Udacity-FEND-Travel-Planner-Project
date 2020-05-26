const GEO_BASE_URL = 'http://api.geonames.org/searchJSON?q=city&maxRows=1&username={un}'
const GEO_USER_NAME = 'khaled_N'
const CURR_WEATHER_URL = 'https://api.weatherbit.io/v2.0/current?city={city}&key={api}'
const FUT_WEATHER_URL = 'https://api.weatherbit.io/v2.0/forecast/daily/days={days}?city={city}&key={api}'
const WEATHER_API_KEY = '07350895619f406cb145eea1f45a26cc'
const PIXABAY_URL = 'https://pixabay.com/api/?key={api}&category=places&q={city}&image_type=photo&pretty=true'
const PIXABAY_API_KEY = '16738849-0b85338957004177a866bb1c5'

let endPoint = {}


function handleSubmit(event) {
    event.preventDefault();

    let city_name = document.getElementById('location').value;
    let date = document.getElementById('date').value;
    let diffDays = getDateDiff(date);
    getGeoData(city_name).then(function(){getWeatherData(city_name,diffDays)}).then(function(){getPixabayPhoto(city_name)}).then(function(){updateUI()});

}
const getGeoData = async (city) => {

    let url = GEO_BASE_URL.replace('city', city).replace('{un}', GEO_USER_NAME);

    const response = await fetch(url)

    try {
        const data = await response.json();
        console.log(data);
        console.log(data.geonames[0]['countryName']);
        endPoint = {
            "city": city,
            "countryName": data.geonames[0]['countryName'],
            "lat": data.geonames[0]["lat"],
            "lng": data.geonames[0]["lng"]
        }
        return city;
    } catch (e) {
        console.log('error getting the data from geonames')
    }
}

const getWeatherData = async (city,days) => {
    let url = "";
    let index = 0;
    if (days < 7){
         url = CURR_WEATHER_URL.replace("{city}", 'cairo').replace("{api}", WEATHER_API_KEY);
    }else{
         url = FUT_WEATHER_URL.replace("{city}", 'cairo').replace("{api}", WEATHER_API_KEY).replace('{days}', days);
         let index = days <= 16 ? days - 1 : 15;
    }
    const response = await fetch(url)

    try {
        const data = await response.json()
        console.log(data);
        endPoint['temp'] = data['data'][index]['temp'];
        endPoint['description'] = data[data][index]['weather']['description'];
        return city;
    } catch (event) {
        console.log("Error getting the  weather data")
    }
}

const getPixabayPhoto = async (city) => {

    let c = encodeURI(city);
    let url = PIXABAY_URL.replace("{city}", c).replace("{api}", PIXABAY_API_KEY);
    const response = await fetch(url)
    try {
        const data = await response.json()
        console.log(data);
        console.log(data['hits'][0]["webformatURL"]);
        let imgURL = data['hits'][0]["webformatURL"].replace('_640','_340');
        endPoint['imgURL'] = imgURL;
    } catch (event) {
        console.log("Error getting the img")
    }
}

const getDateDiff = (fDate) => {

    let a = new Date();
    let currDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    let dateArray = fDate.split('-');
    console.log(dateArray);
    const futDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    console.log(currDate);
    console.log(futDate);
    console.log(futDate - currDate);
    const diffTime = Math.abs(futDate - currDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");
    endPoint["diffDays"] = diffDays;
    return diffDays;


}

function setDateStartLimit() {
    let a = new Date();
    let d = {
        year: a.getFullYear(),
        month: (a.getMonth() + 1) >= 10 ? (a.getMonth() + 1) : "0" + (a.getMonth() + 1),
        day: a.getDate() >= 10 ? a.getDate() : ('0' + a.getDate())
    }
    let startDate = d.year + "-" + d.month + "-" + d.day;
    console.log(startDate);
    document.getElementById('date').setAttribute("min", startDate);
}

const updateUI = async () => {

    document.getElementById('img').setAttribute('src', endPoint['imgURL']);
    document.getElementById('result-div').innerHTML = `<p>${endPoint['city']}, ${endPoint['countryName']} is ${endPoint['diffDays']} away.</p><p>Typical weather for then is:\nTemperature: ${endPoint['temp']}\n${endPoint['description']}</p>`

}

function removeTrip(){
    document.getElementById('img').setAttribute('src', '../media/pyramids.jpg');
    document.getElementById('result-div').innerHTML = "";
}

export{handleSubmit,removeTrip,setDateStartLimit}
