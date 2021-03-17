// from data.js
var tableData = data;

// Build Table for sightings
var tbody = d3.select("tbody");

console.log(tableData);


//  Make one cell per UFO sighting
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td"); // Append a cell to the row for each value
      cell.text(value);
    });
  });
  


  // Event Listener - filter by date
var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue); // filter by date
  console.log(filteredData);

  //  Hide Full Table
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");

  for (n = 1; n < tr.length; n++) {
        tr[n].style.display = "none";
  }

  //  Print date-filtered results
  filteredData.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td"); // Append a cell to the row for each value
      cell.text(value);
    });
  });

}


