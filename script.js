$(function () {
    // dom elements
    // main categories: hero, searchBar, cityList, todayBox, fiveDaysBox


    // vars

    // functions

    function runSearch() {
        // calls function to display today's forecase, as well as the 5 day forecast
        return 5
        // if code is not 200, display error message and dont upload page
        // 
    };

    function showToday() {
        return 3;
    };

    function showFiveDay() {
        return 3;
    };

    function init() {
        // console.log('sdfs');
        console.log(callToday());
    };

    // event handlers
    $('#searchBar').on('click', '#searchButton', runSearch);
    $('#searchHistory').on('click', '.cityButton', runSearch);

    init();
});