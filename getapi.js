
function fetchWeather() {
    console.log('ooga');
    // gets information based on location name
    fetch(buildURL(url + 'geo/1.0/', loc, coords, ''), {
        method: 'GET', //GET is the default.
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
    })
        .then(function (response) {
            console.log(response.json());
        })
        .then(function (data) {
            console.log(data);
        });
        //data/2.5/
    // gets todays weather forecast data
    // fetch(buildURL(url + 'data/2.5/', '', '', '', ''), {
    //     method: 'GET', //GET is the default.
    //     // credentials: 'same-origin', // include, *same-origin, omit
    //     // redirect: 'follow', // manual, *follow, error
    // })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //     });
    // // gets 5 day forecast data 
    // fetch(buildURL(url + 'data/2.5/', '', '', '', ''), {
    //     method: 'GET', //GET is the default.
    //     // credentials: 'same-origin', // include, *same-origin, omit
    //     // redirect: 'follow', // manual, *follow, error
    // })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //     });
};

function buildURL(url, loca, coordinates, excludes) {
    let callURL = url;
    // callURL = callURL.concat(url, '?lat=', latitude, '&lon=', longitude);
    if (loca !== '') {
        callURL = callURL.concat('direct?q=', loca);
    }
    if (coordinates !== '') {
        callURL = callURL.concat('?lat=', coordinates[0], '?lon=', coordinates[1]);
    }
    if (excludes !== '') {
        callURL = callURL.concat('&exclude=', excludes);
        // excluded category in plain text separated by comma. 
        // ex. &exclude=hourly,daily,weekly&appid=...etc.
    }
    callURL = callURL.concat('&appid=', key);
    return callURL;
};