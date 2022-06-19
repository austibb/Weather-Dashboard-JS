$(function () {
    // dom elements
    // main categories: hero, searchBar, cityList, todayBox, fiveDaysBox


    // vars

    // functions

    function runSearch() {
        // calls function to display today's forecase, as well as the 5 day forecast
        // callToday
        let x = getCoords(city);
        console.log(x);
        let lat= x.lat;
        let lon = x.lon;
        cityData = fetchWeather(lat, lon);
        showToday(testObject);
        showForecast(test5);
        // if code is not 200, display error message and dont upload page
        // 
    };

    showToday = function(entry) {
        // todays date is Date(entry.dt)
        todayBox.append($('<h1>').text(getDate(entry.dt, entry.name)));
        todayBox.append($('<p>').text(getTemp(entry))); // also need to add icon for cloudiness
        todayBox.append($('<p>').text('Humidity: ' + entry.main.humidity + '%'));
        todayBox.append($('<p>').text('UV Index: need to fix this'));
        // (((entry.main.temp)-273.15)*1.8)+32
    };

    showForecast = function(entry) {
        
        fiveDaysBox.append($('<h1>').text(getDate(entry.dt, entry.name)));
        fiveDaysBox.append($('<p>').text(getTemp(entry))); // also need to add icon for cloudiness
        fiveDaysBox.append($('<p>').text('Humidity: ' + entry.main.humidity + '%'));
        fiveDaysBox.append($('<p>').text('UV Index: need to fix this'));
        // (((entry.main.temp)-273.15)*1.8)+32
    };

    getDate = function(timeCode, name = '') {
        let date = Date(timeCode).split(' ').slice(0, 4).join(' ');
        if (name !== '') {
            date = name + ' (' + date + ')';
        }
        return date;
    };

    getTemp = function(entry) {
        return 'Temp: ' + Math.round(((entry.main.temp - 273.15) * 1.8) + 32) + ' ºF';
    }

    function init() {
        // console.log('sdfs');
        // console.log(callToday());
        runSearch();
    };

    // event handlers
    $('#searchBar').on('click', '#searchButton', runSearch);
    $('#searchHistory').on('click', '.cityButton', runSearch);

    init();
});

// on load: initialize page with today's data in berkeley, and 5 day forecast.empty the search history buttons.
//  on search: parent function calls api for todays weather, as well as 5day

