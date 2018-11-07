$(document).ready(function(){

    $('ul.nav.navbar-nav').append('<div id="weather"></div>');

    if ($(window).width() < 780){
        $('#weather').css({
            "display": "none",
        });
    }
    else {
        $('#weather').css({
            "display": "inline",
            "position": "absolute",
            "right": "3%",
            "top": "35%",
            "color": "#9d9d9d",
            "font-size": "10px"
        });
    }

    const city = "Cluj-Napoca,RO";


    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=0e12b3577c1276a0503e7faa9d825a0b',
        method: 'get',
        success: function (data) {
            console.log(data);
            const temp = Math.floor(data.main.temp);
            $('#weather').html("Weather " + data.name + ": " + data.weather[0].description + ", Temp: " + temp + " &deg;C" + ", Wind: " + data.wind.speed + " m/s");
        },
        error: function (error) {
            $('#weather').html("Weather Not Found");
        }
    })

});