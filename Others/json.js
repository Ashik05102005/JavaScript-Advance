const whether="{\"location\":{\"name\":\"Vadakara\",\"region\":\"Kerala\",\"country\":\"India\",\"lat\":11.61,\"lon\":75.58,\"timezone\":\"Asia/Kolkata\"},\"current\":{\"temperature_c\":29,\"temperature_f\":84.2,\"condition\":{\"text\":\"Partly cloudy\",\"icon\":\"//cdn.weatherapi.com/weather/64x64/day/116.png\"},\"wind_kph\":12,\"humidity\":70,\"cloud\":50,\"feelslike_c\":31,\"uv_index\":7},\"forecast\":{\"date\":\"2026-06-06\",\"maxtemp_c\":32,\"mintemp_c\":26,\"avgtemp_c\":28,\"daily_chance_of_rain\":\"60%\",\"condition\":{\"text\":\"Light rain showers\",\"icon\":\"//cdn.weatherapi.com/weather/64x64/day/353.png\"}}}"
const whetherObj=JSON.parse(whether);
// console.log(whetherObj);
console.log(`place : ${whetherObj.location.name},${whetherObj.location.region},${whetherObj.location.country}`)
console.log(`temperature : ${whetherObj.current.temperature_c} C ,${whetherObj.current.condition.text}`)
let response={succes:true};
let stringifyJSON=JSON.stringify(response);
console.log(stringifyJSON);