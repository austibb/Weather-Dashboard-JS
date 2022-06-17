// dom elements
body = $('#body');
hero = $('hero');
searchEntry = $('#searchEntry');
submitButton = $('#submitButton');
searchHistory = $('searchHistory');
todayBox = $('#todayBox');
fiveDaysBox = $('#fiveDaysBox');

// consts
const url = 'api.openweathermap.org/';
// data/2.5/
const key = '1d9471fd03c19d7e6f53a7bb96a4f2fa';


// data variables
var city = 'berkeley';
var excludes;



var testObject = {
    "coord": { "lon": -122.2728, "lat": 37.8716 },
    "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
    }],
    "base": "stations",
    "main": {
        "temp": 286.64,
        "feels_like": 286.11,
        "temp_min": 284.76,
        "temp_max": 288.82,
        "pressure": 1012,
        "humidity": 79
    },
    "visibility": 10000,
    "wind": { "speed": 4.63, "deg": 290 },
    "clouds": { "all": 75 },
    "dt": 1655481262,
    "sys": {
        "type": 2,
        "id": 2037811,
        "country": "US",
        "sunrise": 1655469994,
        "sunset": 1655523214
    },
    "timezone": -25200,
    "id": 5327684,
    "name": "Berkeley",
    "cod": 200 // response code
};

var test5 = {
    "cod": "200",
    "message": 0,
    "cnt": 5,
    "list": [{
        "dt": 1655488800,
        "main": {
            "temp": 288.53,
            "feels_like": 288.06,
            "temp_min": 288.53,
            "temp_max": 288.55,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1006,
            "humidity": 74,
            "temp_kf": -0.02
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "clouds": { "all": 81 },
        "wind": {
            "speed": 4.46,
            "deg": 243,
            "gust": 5.44
        },
        "visibility": 10000,
        "pop": 0,
        "sys": { "pod": "d" },
        "dt_txt": "2022-06-17 18:00:00"
    },
    {
        "dt": 1655499600,
        "main": {
            "temp": 288.9,
            "feels_like": 288.28,
            "temp_min": 288.9,
            "temp_max": 289.65,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1006,
            "humidity": 67,
            "temp_kf": -0.75
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "clouds": { "all": 54 },
        "wind": {
            "speed": 6.01,
            "deg": 246,
            "gust": 7.01
        },
        "visibility": 10000,
        "pop": 0,
        "sys": { "pod": "d" },
        "dt_txt": "2022-06-17 21:00:00"
    },
    {
        "dt": 1655510400,
        "main": {
            "temp": 288.85,
            "feels_like": 288.15,
            "temp_min": 288.85,
            "temp_max": 289.01,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1006,
            "humidity": 64,
            "temp_kf": -0.16
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }],
        "clouds": { "all": 29 },
        "wind": {
            "speed": 6.22,
            "deg": 248,
            "gust": 8.02
        },
        "visibility": 10000,
        "pop": 0,
        "sys": { "pod": "d" },
        "dt_txt": "2022-06-18 00:00:00"
    },
    {
        "dt": 1655521200,
        "main": {
            "temp": 286.96,
            "feels_like": 286.33,
            "temp_min": 286.96,
            "temp_max": 286.96,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1006,
            "humidity": 74,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "clouds": { "all": 4 },
        "wind": {
            "speed": 4.38,
            "deg": 247,
            "gust": 6.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": { "pod": "d" },
        "dt_txt": "2022-06-18 03:00:00"
    },
    {
        "dt": 1655532000,
        "main": {
            "temp": 285.15,
            "feels_like": 284.57,
            "temp_min": 285.15,
            "temp_max": 285.15,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 1007,
            "humidity": 83,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }],
        "clouds": { "all": 3 },
        "wind": {
            "speed": 3.08,
            "deg": 231,
            "gust": 4.06
        },
        "visibility": 10000,
        "pop": 0,
        "sys": { "pod": "n" },
        "dt_txt": "2022-06-18 06:00:00"
    }],
    "city": {
        "id": 5327684,
        "name": "Berkeley",
        "coord": {
            "lat": 37.8716,
            "lon": -122.2728
        },
        "country": "US",
        "population": 112580,
        "timezone": -25200,
        "sunrise": 1655469994,
        "sunset": 1655523214
    }
}