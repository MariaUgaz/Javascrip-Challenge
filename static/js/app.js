// from data.js
var tableData = data;

// YOUR CODE HERE!
body = d3.select("body")

//Get data in the table and loop it to add to html
function displayData(data){ 
    body.text("")
    data.forEach(function(sight){
    newtr = body.append("tr")
    Object.entries(sight).forEach(function([key, value]){
        newtd = newtr.append("td").text(value)	
    })
})}

displayData(tableData)

var date = d3.select("datetime")
var button = d3.select("filter-bottom")

// filter data by date
function clickSelect(){
    console.log(date.property("value"));
    var newtable = tableData.filter(sight => sight.datetime===date.property("value"))
    displayData(newtable);
}

// change date
date.on("change", clickSelect)