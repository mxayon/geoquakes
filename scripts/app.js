$(document).ready(function () {
  console.log("Loading!");

});

const ul = document.getElementById("anchor");
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
      let place = document.createElement("h2");
      let mag = document.createElement("h3");
      let time = document.createElement("p");

      place.innerHTML = `${array_feature.properties.place}`;
      mag.innerHTML = `${array_feature.properties.mag}`;
      time.innerHTML = `${array_feature.properties.time}`;

      li.appendChild(place);
      li.appendChild(mag);
      li.appendChild(time);
      list.appendChild(li);
      document.getElementById("anchor").appendChild(list);
    });
  })
  .catch(function (error) {
    console.log(error);
  });


