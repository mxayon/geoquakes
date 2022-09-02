$(document).ready(function () {
  console.log("Loading!");
});

const list = document.createDocumentFragment();
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let quakes = data.features;
    alert(data.metadata.title);
    quakes.map(function(quake) {
      let li = document.createElement("li");
      let title = document.createElement("h2")
      let place = document.createElement("h3");
      let time = document.createElement("p");
      let status = document.createElement("p");
      let link = document.createElement("a");
      let hours_since = Math.round(( Date.now() - quake.properties.time ) / (60*60*1000));
      // let hoursSince = originalTime.getHours();
      // let minutesSince = "0" + originalTime.getMinutes();
      // let secondsSince = "0" + originalTime.getSeconds();
      // let formatTime = hoursSince + ":" + minutesSince.substr(-2) + ":" + secondsSince.substr(-2)

      title.innerHTML = `${quake.properties.title}`;
      place.innerHTML = `${quake.properties.place}`;
      time.innerHTML = `${hours_since}` + " hours ago.";
      status.innerHTML = `${quake.properties.status}`;
      link.innerHTML = `${quake.properties.url}`;

      li.appendChild(title);
      li.appendChild(place);
      li.appendChild(time);
      li.appendChild(status); 
      li.appendChild(link);
      list.appendChild(li);
      document.getElementById("anchor").appendChild(list);
    });
  })
  .catch(function (error) {
    console.log(error);
  });


