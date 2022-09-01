let weekly_quakes_endpoint =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function () {
  console.log("Loading!");
});

fetch(
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
)
  .then((response) => response.json())
  .then((commits) => alert(commits.metadata.title));
