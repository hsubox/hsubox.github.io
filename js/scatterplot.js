d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json", function(error, data) {

  if (error) return console.log("error loading the data:" + error);

  // setup canvas
  var svg_width = 500;
  var svg_height = 300;
  var svg = d3.select("#d3").append("svg")
    .attr("width", svg_width)
    .attr("height", svg_height);
  var margin = {top: 20, right: 60, bottom: 30, left: 50};
  var chart_width = svg_width - margin.left - margin.right;
  var chart_height = svg_height - margin.top - margin.bottom;

  var chart_area = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var fastest = d3.min(data, function(d) { return d.Seconds; });
  // x-scale
  var x = d3.scaleLinear()
    .domain([d3.max(data, function(d) { return d.Seconds; })-fastest + 5,0])
    .rangeRound([0, chart_width]);

  // y-scale
  var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.Place; }) + 1])
    .rangeRound([0, chart_height]);

  // title
  chart_area.append("text")
    .attr("x", "10px")
    .attr("y", "0.7em")
    .attr("font-size", "1.2em")
    .text("Doping in Professional Bicycle Racing")
  // subtitle
  chart_area.append("text")
    .attr("x", "10px")
    .attr("y", "2.7em")
    .attr("font-size", "0.8em")
    .text("Fastest times up Alpe d'Huez")

  // x-axis
  chart_area.append("g")
      .attr("class", "axis axis--x")
      .attr("transform","translate(0," + chart_height + ")")
      .call(d3.axisBottom(x))
    .append("text")
      .attr("class", "label")
      .attr("fill", "#000")
      .attr("x", chart_width)
      .attr("y", "3em")
      .style("text-anchor", "end")
      .text("Seconds Behind Fastest Time");

  // y-axis
  chart_area.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
    // y-axis label
    .append("text")
      .attr("class", "label")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Ranking");

  // set up tooltip on hover
  var dots = chart_area.append("g").selectAll("g")
      .data(data)
      .enter().append("g")
      .attr("class", "unselected")
      .on("mouseover", function(d) {
        thisElement = d3.select(this);
        thisElement.attr("class", "selected");
        tooltip.style("visibility", "visible")
        tooltip.html("<strong>" + d.Name + "</strong><br/>"
                   + "Nationality: " + d.Nationality + "<br/>"
                   + "Time: " + d.Time + "<br/>"
                   + "Year: " + d.Year + "<br/>"
                   + "<p>" + d.Doping + "</p>");
      })
      .on("mouseout", function() {
        var rect = d3.select(this)
        d3.select(this).attr("class", "unselected");
        tooltip.style("visibility", "hidden")
        tooltip.html("")
      })

  // display dot in scatterplot
  dots.append("circle")
        .attr("class", "dot")
        .attr("r", 2.5)
        .attr("cx", function(d) { return x(d.Seconds-fastest); })
        .attr("cy", function(d) { return y(d.Place); })
        .attr("fill", function(d) {
          if (d.Doping == "") {
            return "green"
          } else {
            return "red"
          }
        });

  // display name
  dots.append("text")
      .attr("class", "name")
      .attr("x", function(d) { return x(d.Seconds-fastest) + 5; })
      .attr("y", function(d) { return y(d.Place) + 2; })
      .attr("font-size", "0.5em")
      .text(function(d) {
        return d.Name;
      })

  var tooltip = d3.select("#d3").append("div")
      .attr("class", "tooltip");
});
