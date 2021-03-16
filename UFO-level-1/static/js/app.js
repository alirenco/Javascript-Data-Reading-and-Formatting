// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(sighting) {
    console.log(sighting);
  });


//   Append tr to each  
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
  });

//  print each sighting to console
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
  
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
    });
  });

//  Make one cell per UFO sighting
// data.forEach(function(sighting) {
//     console.log(sighting);
//     var row = tbody.append("tr");
  
//     Object.entries(sighting).forEach(function([key, value]) {
//       console.log(key, value);      
//       var cell = row.append("td"); // Append a cell to the row for each value
//     });
//   });


// Update text in each cell
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td"); // Append a cell to the row for each value
      cell.text(value);
    });
  });
  