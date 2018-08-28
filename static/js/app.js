// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO dataset from data.js
console.log(data);


// Getting a reference to the button on the page with the id property
var button = d3.select("#filter-btn");


// This function is triggered when the button is clicked
button.on("click", function() {
    d3.event.preventDefault();
    var inputField = d3.select("#datetime"); 
    var inputValue = inputField.property("value");
    console.log(inputValue);
    //console.log(data);

    var filteredData = data.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(UFO){
        console.log(UFO);
        var row = tbody.append("tr");
        // Use 'Object.entries' to console.log each value
        Object.entries(UFO).forEach(function([key,value]){
            console.log(key, value);
            // Use d3 to append a cell to the row for each UFO value
            var cell = tbody.append("td");
            // Use d3 to update each cell's text with UFO values
            cell.text(value);
        });
    });
});
  