var GraphNode = function(value){
  this.value = value;
  this.edges = {};
};

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  var newNode = new GraphNode(node);
  this.nodes[node] = newNode;
};

Graph.prototype.contains = function(node){
  if(node in this.nodes)
    return true;

  return false;
};

Graph.prototype.removeNode = function(node){
  if(this.contains(node))
    delete this.nodes[node];

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode))
  {
    var fromNodeEdges = this.nodes[fromNode].edges;
    if(fromNodeEdges[toNode])
      return true;
  }

  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode))
  {
    this.nodes[fromNode].edges[this.nodes[toNode].value] = this.nodes[toNode];
    this.nodes[toNode].edges[this.nodes[fromNode].value] = this.nodes[fromNode];
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode))
  {
    delete this.nodes[fromNode].edges[this.nodes[toNode].value];
    delete this.nodes[toNode].edges[this.nodes[fromNode].value];
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(item){
    cb(item.value);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



