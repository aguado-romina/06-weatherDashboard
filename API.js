let APIKey = "201eb0ee5ccf4e9d19410ecb6a7d9eba";


// $("button").on("click", function() {
//   let cityName = document.querySelector("#city-input").value;
//   let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&appid=" + APIKey;
//   console.log(cityName);
// $.ajax({
//     url: queryURL,
//     method: "GET",
//     dataType: "json",
//     success: function(data) {
//       console.log(data);
//       $("#city-name").text(data.name);
//       console.log(data.name);
//       $("#temperature").text(data.main.temp);
//       console.log(data.main.temp);
//       console.log(data.weather[0].description);
//     }
  
//   })

// });

$("button").on("click", function() {
  let cityName = document.querySelector("#city-input").value;
  let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
  console.log(cityName);
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data);
    }
  
  })

});