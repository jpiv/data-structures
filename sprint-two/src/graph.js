_.findIndex = function(array, predicate) {
  var position = -1;
  _.each(array, function(item, index)
  {
    if(predicate(item))
      position = index;
  });
  return position;
};

var GraphNode = function(value){
  this.value = value;
  this.edges = [];
};

var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  var newNode = new GraphNode(node);
  this.nodes.push(newNode);
};

Graph.prototype.contains = function(node){
  for(var i = 0 ; i < this.nodes.length; i++)
  {
    if(this.nodes[i].value === node)
      return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var i = 0; i < this.nodes.length; i++)
  {
    if(this.nodes[i].value === node)
    {
      this.nodes.splice(i,1);
      return;
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var fromNodeIndex = _.findIndex(this.nodes, function(item)
  {
    return item.value === fromNode;
  });

  if(fromNodeIndex === -1)
    return false;

  var toNodeIndex = _.findIndex(this.nodes[fromNodeIndex].edges, function(item)
  {
    return item.value === toNode;
  });

  if(toNodeIndex === -1)
    return false;

  return true;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromNodeIndex = _.findIndex(this.nodes, function(item)
  {
    return item.value === fromNode;
  });

  var toNodeIndex = _.findIndex(this.nodes, function(item)
  {
    return item.value === toNode;
  });

  if(fromNodeIndex !== -1 && toNodeIndex !== -1)
  {
    this.nodes[fromNodeIndex].edges.push(this.nodes[toNodeIndex]);
    this.nodes[toNodeIndex].edges.push(this.nodes[fromNodeIndex]);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(item){
    cb(item.value);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



