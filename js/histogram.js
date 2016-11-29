d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(error, full_data) {

  if (error) return console.log("error loading the data:" + error);
  var data = full_data.data;

  var svg_width = 500;
  var svg_height = 300;
  var svg = d3.select("#d3").append("svg")
    .attr("width", svg_width)
    .attr("height", svg_height);
  var margin = {top: 20, right: 30, bottom: 30, left: 50};
  var chart_width = svg_width - margin.left - margin.right;
  var chart_height = svg_height - margin.top - margin.bottom;
  var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // x-scale
  var x = d3.scaleTime()
    .domain([new Date(data[0][0]), new Date(data[data.length-1][0])])
    .rangeRound([0, chart_width]);

  // y-scale
  var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d[1]; })])
    .rangeRound([chart_height, 0]);

  // x-axis
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform","translate(0," + chart_height + ")")
      .call(d3.axisBottom(x));

  // y-axis
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
    // y-axis label
    .append("text")
      .attr("class", "y-label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("US Gross Domestic Product, billions");

  var bar = g.append("g").selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "unselected")
      .on("mouseover", function() {
        thisElement = d3.select(this);
        thisElement.attr("class", "selected");
        thisElement.moveToFront();
      })
      .on("mouseout", function() {
        var rect = d3.select(this)
        d3.select(this).attr("class", "unselected");
      })

  bar.append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(new Date(d[0])); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("width", Math.ceil(chart_width / data.length))
        .attr("height", function(d) { return chart_height - y(d[1]); })

  var tooltip = bar.append("g")
      .attr("class", "tooltip-g")

  tooltip.append("rect")
      .attr("x", function(d) { return x(new Date(d[0])) - 30; })
      .attr("y", function(d) { return y(d[1]) - 15; })
      .attr("width", 60)
      .attr("height", 12)

  tooltip.append("text")
      .attr("class", "tooltip")
      .attr("x", function(d) { return x(new Date(d[0])); })
      .attr("y", function(d) { return y(d[1]) - 6; })
      .attr("text-anchor", "middle")
      .text(function(d) { return d[0].substr(0,7) + ", " + d[1]; })
});
