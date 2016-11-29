const width = 700;
const height = 500;

var svg = d3.select("#d3")
  .append( "svg" )
  .attr( "width", width )
  .attr( "height", height );

var g = svg.append( "g" );

var projection = d3.geoMercator()
    .center([30, 20])
    .scale(180)
    .rotate([0, 0]);

d3.json("https://gist.githubusercontent.com/hsubox/58121014d2447aa241847cdb8398725a/raw/b5711f87b74f84639fb6aae4f7bb750c526de12d/worldmap-geo.json", function(error, basemap_data) {
  if (error) throw error;

  var basemap_path = d3.geoPath()
    .projection(projection);

  // base map is drawn first; shows up as bottom layer
  var basemap = svg.append( "g" ).attr( "id", "basemap" );
  basemap.selectAll("path")
    .data(basemap_data.features)
    .enter()
    .append("path")
      .attr("class", "basemap-path")
      .attr( "d", basemap_path);

  var graticule = d3.geoGraticule();
  svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", basemap_path);

  d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json", function(error, data) {
    if (error) throw error;

    var const_factor = 10; // use this constant factor so that points appear more uniform in size
    var scale = d3.scaleLog()
    .domain([1, d3.max(data.features, function(d) { return d.properties.mass; })])
    .range([0, 3]);

    var display_data = svg.append( "g" ).attr( "id", "display-data" )
    .selectAll( "path" )
    .data( data.features )
    .enter()
    .append( "path" )
    .attr("class", "display-data-path")
    .attr( "d", d3.geoPath()
          .projection(projection)
          .pointRadius(function(d) { return scale(d.properties.mass + const_factor); }))
    .on("mouseover", function(d) {
      // show tooltip where cursor is
      tooltip.style("visibility", "visible");
      tooltip.style("left", d3.event.pageX + "px");
      tooltip.style("top", d3.event.pageY + "px");
      // tooltip displays data about node
      tooltip.html("<strong>Name:</strong> " + d.properties.name + "<br/>"
                   + "<strong>Coordinates:</strong> " + Math.abs(d3.format(".2f")(d.properties.reclat)) + "&deg;" + (d.properties.reclat >= 0 ? "N" : "S") + ", " + Math.abs(d3.format(".2f")(d.properties.reclong)) + "&deg;" + (d.properties.reclong >= 0 ? "E" : "W") + "<br/>"
                   + "<strong>Mass:</strong> " + d.properties.mass + "<br/>"
                   + "<strong>Year:</strong> " + (new Date(d.properties.year)).getFullYear()

                  );
    })
    .on("mouseout", function() {
      tooltip.style("visibility", "hidden");
      tooltip.html("");
    })

    // create tooltip div
    var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip");
  });
});
