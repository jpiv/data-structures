var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target, subTree, accumulator){
  accumulator = accumulator || false;
  subTree = subTree || this;

  for(var i = 0; i < subTree.children.length; i++)
  {
    if(subTree.children[i].value === target)
      accumulator = true;

    accumulator = subTree.contains(target, subTree.children[i], accumulator);
    if(accumulator)
      return true;
  }

  return accumulator;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
//addChild: constant
//contains: n
