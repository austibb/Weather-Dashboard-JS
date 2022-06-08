$(function() {
    // dom elements
    // main categories: hero, searchBar, cityList, todayBox, fiveDaysBox


    // vars

    // functions


    function runSearch() {
        return 5;
    };

    function showStats() {
        return 3;
    };

    function init() {
        // console.log('sdfs');
        fetchWeather();
    };

    // event handlers
    $('#searchBar').on('click', '#searchButton', runSearch);
    $('#cityList').on('click', '.cityButton', showStats);

    init();
});