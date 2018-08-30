const url =
  "https://forecast.weather.gov/MapClick.php?lat=38.42447247341&lon=-86.9624086&FcstType=json";

function getText() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      let output = "";
      let items = [];
      items.push(data);
      items.forEach(function(item) {
        console.log(item);
        let temp = item.data["temperature"];
        let days = item.time["startPeriodName"];
        let tempLabel = item.time["tempLabel"];
        console.log(days);
        console.log(temp);
        console.log(tempLabel);
        output += `
        <ul class="list-group mb-3">
        <li class="list-group-item"><strong>Date:</strong> ${item.creationDate}
          <li class="list-group-item"><strong>Location: </strong> ${
            item.productionCenter
          }</li>
          <li class="list-group-item"> ${days} </li>
          <li class="list-group-item"> ${temp} </li>
          <li class="list-group-item"> ${tempLabel} </li>
        </ul>
      `;
      });
      document.getElementById("weatherInfo").innerHTML = output;
    });
}
