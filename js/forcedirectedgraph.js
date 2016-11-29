// strength of forces
const many_body_strength = -3;
const link_distance = 30;

// setup canvas
const canvas_width = 700;
const canvas_height = 500;
const canvas = d3.select("#d3").append("svg")
  .attr("width", canvas_width)
  .attr("height", canvas_height);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink())
    .force("charge", d3.forceManyBody().strength(many_body_strength))
    .force("center", d3.forceCenter(canvas_width/2, canvas_height/2));

d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function(error, graph) {
  if (error) throw error;

  // create tooltip div - when node is hovered
  var tooltip = d3.select(".container").append("div")
      .attr("class", "tooltip");

  // draw links
  var link = canvas.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line");

  // draw nodes
  var node = canvas.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
      .attr("r", 2)
    // display tooltip on hover
    .on("mouseover", function(d) {
        // show tooltip where cursor is
        tooltip.style("visibility", "visible");
        tooltip.style("left", d3.event.pageX + "px");
        tooltip.style("top", d3.event.pageY + "px");
        // tooltip displays node's country
        tooltip.html(d.country);
      })
      .on("mouseout", function() {
        tooltip.style("visibility", "hidden");
        tooltip.html("");
      })
  // add draggability
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  // nodes and links into simulation
  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);
  simulation.force("link")
      .links(graph.links)
      .distance(link_distance);

  // updates drawing when "time increments"
  function ticked() {
    link
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });
    node
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
