
var fetchWeather = function(lat, lon) {
    console.log('ooga');
    // gets information based on location name
    https://api.openweathermap.org/data/3.0/onecall?lat=37.8716&lon=-122.2728&appid=1d9471fd03c19d7e6f53a7bb96a4f2fa
    fetch(url + 'data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key, {
        method: 'GET', //GET is the default.
        credentials: 'omit', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
    })
        .then(function (response) {
            console.log(response.json());
        })
        .then(function (data) {
            console.log(data);
        });
};

function buildURL(url, loca, coordinates, excludes) {
    let callURL = url;
    // callURL = callURL.concat(url, '?lat=', latitude, '&lon=', longitude);
    if (loca !== '') {
        callURL = callURL.concat('direct?q=', loca);
    }
    if (coordinates[0] !== '') {
        callURL = callURL.concat('?lat=', coordinates[0], '?lon=', coordinates[1]);
    }
    if (excludes !== '') {
        callURL = callURL.concat('&exclude=', excludes);
        // excluded category in plain text separated by comma. 
        // ex. &exclude=hourly,daily,weekly&appid=...etc.
    }
    callURL = callURL.concat('&appid=', key);
    console.log(callURL);
    return callURL;
};

getCoords = function(city) {
    let i = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + key;
    // fetch(i, {
    //     method: 'GET', //GET is the default.
    //     credentials: 'include', // include, *same-origin, omit
    //     redirect: 'follow', // manual, *follow, error
    // })
    //     .then(function (response) {
    //         // console.log(response);
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //     });
    fetch('https://api.openweathermap.org/geo/1.0/direct?q=berkeley&limit=1&appid=1d9471fd03c19d7e6f53a7bb96a4f2fa')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      if (data.length === 0) {
        // showError();
        return;
      }
    //   getWeather(city, data);
    //   toStorage(city);
    })
}

function getCity(city) {
    let requestGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
  
    fetch(requestGeo)
      .then((response) => {
        if (response.ok) {
          let x = response.json();
          console.log(x);
          return x;
        }
      })
      .then(function (data) {
        if (data.length === 0) {
          showError();
          return;
        }
        // getWeather(city, data);
        // toStorage(city);
      })
  }