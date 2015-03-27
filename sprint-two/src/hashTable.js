var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket)
  {
    bucket = [];
    this._storage.set(i,bucket);
  }
  bucket.push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket)
  {
    for(var i = 0;i < bucket.length; i++)
    {
      if(bucket[i][0] === k)
      {
        return bucket[i][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket)
  {
    for(var i = 0; i < bucket.length; i++)
    {
      if(bucket[i][0] === k)
      {
        bucket.splice(i, 1);
        break;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
