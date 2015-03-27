var BinarySearchTree = function(value){
  var instance = Object.create(BinarySearchTree.prototype);
  instance.right = null;
  instance.left = null;
  instance.value = value;
  return instance;
};

BinarySearchTree.prototype.insert = function(value)
{
  var node = BinarySearchTree(value);
  if(value > this.value && this.right!== null)
  {
    this.right.insert(value);
  }
  else if(value <= this.value && this.left !== null)
  {
    this.left.insert(value);
  }
  else if(value > this.value)
  {
    this.right = node;
  }
  else
  {
    this.left = node;
  }
};

BinarySearchTree.prototype.contains = function (value)
{
  var node = this;
  while(node)
  {
    if(value > node.value)
    {
      node = node.right;
    }
    else if(value < node.left)
    {
      node = node.left;
    }
    else
    {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback)
{
  callback(this.value);
  if(this.left !== null)
  {
    this.left.depthFirstLog(callback);
  }
  if(this.right !== null)
  {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
