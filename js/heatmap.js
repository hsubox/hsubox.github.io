d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

const monthToText = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json", function(error, full_data) {

  if (error) return console.log("error loading the data:" + error);

  var base = full_data.baseTemperature;
  var data = full_data.monthlyVariance.slice(2244);

  // setup canvas
  var svg_width = 500;
  var svg_height = 300;
  var svg = d3.select("#d3").append("svg")
    .attr("width", svg_width)
    .attr("height", svg_height);
  var margin = {top: 20, right: 70, bottom: 30, left: 60};
  var chart_width = svg_width - margin.left - margin.right;
  var chart_height = svg_height - margin.top - margin.bottom;

  var chart_area = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // x-scale
  var x = d3.scaleTime()
    .domain([new Date(data[0].year, 6), new Date(data[data.length-1].year, 6)])  // month is set to 6 for alignment on x-axis
    .range([0, chart_width]);

  // y-scale
  var y = d3.scaleBand()
    .domain(monthToText)
    .range([0, chart_height])

  // color scale
  var color = d3.scaleLinear()
    .domain([-2, 0, 2])
    .range(["lightgreen", "lightyellow", "gold"]);

  // x-axis
  chart_area.append("g")
      .attr("class", "axis axis--x")
      .attr("transform","translate(0," + chart_height + ")")
      .call(d3.axisBottom(x))
    // x-axis label
    .append("text")
      .attr("class", "label")
      .attr("fill", "#000")
      .attr("x", chart_width/2)
      .attr("y", "4em")
      .style("text-anchor", "middle")
      .text("Year");

  // y-axis
  chart_area.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
    // y-axis label
    .append("text")
      .attr("class", "label")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("x", -chart_height/2)
      .attr("y", "-5em")
      .attr("text-anchor", "middle")
      .text("Month");

  // set up tooltip on hover
  var rects = chart_area.append("g").selectAll("g")
      .data(data)
      .enter().append("g")
      .on("mouseover", function(d) {
        // moves element to front so that border shows up correctly
        thisElement = d3.select(this);
        thisElement.moveToFront();
        // show tooltip where cursor is
        tooltip.style("visibility", "visible");
        tooltip.style("left", d3.event.pageX + "px");
        tooltip.style("top", d3.event.pageY + "px");
        tooltip.html("<p>" + monthToText[d.month-1] + " " + d.year + "<\p>"
                     + "<p>" + d3.format(".2f")(base + d.variance) + " &deg;C</p>");
        tooltip.moveToFront();
      })
      .on("mouseout", function() {
        tooltip.style("visibility", "hidden");
        tooltip.html("");
      })

  // display rect in heat map
  rects.append("rect")
        .attr("class", "rect")
        .attr("x", function(d) { return x(new Date(d.year, 6)); }) // month is set to 6 for alignment on x-axis
        .attr("y", function(d) { return y.step()*(d.month-1); })
        .attr("width", Math.ceil(chart_width / data.length * 12))
        .attr("height", y.bandwidth())
        .attr("fill", function(d) { return color(d.variance); });

  var tooltip = d3.select("#d3").append("div")
      .attr("class", "tooltip");
});
