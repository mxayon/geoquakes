$(document).ready(function () {
  console.log("Loading!");
});

const list = document.createDocumentFragment();
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let commits = data;
    let array_features = commits.features;
    alert(commits.metadata.title);
    array_features.map(function(array_feature) {
      let li = document.createElement("li");
      let title = document.createElement("h2")
      let place = document.createElement("h3");
      let unixTime = document.createElement("p");
      let status = document.createElement("p");
      let link = document.createElement("a");
      let originalTime = new Date(array_feature.properties.time * 1000);
      let hoursSince = originalTime.getHours();
      let minutesSince = "0" + originalTime.getMinutes();
      let secondsSince = "0" + originalTime.getSeconds();
      let formatTime = hoursSince + ":" + minutesSince.substr(-2) + ":" + secondsSince.substr(-2)

      title.innerHTML = `${array_feature.properties.title}`;
      place.innerHTML = `${array_feature.properties.place}`;
      unixTime.innerHTML = `${formatTime}`;
      status.innerHTML = `${array_feature.properties.status}`;
      link.innerHTML = `${array_feature.properties.url}`;

      li.appendChild(title);
      li.appendChild(place);
      li.appendChild(unixTime);
      li.appendChild(status); 
      li.appendChild(link);
      list.appendChild(li);
      document.getElementById("anchor").appendChild(list);
    });
  })
  .catch(function (error) {
    console.log(error);
  });


