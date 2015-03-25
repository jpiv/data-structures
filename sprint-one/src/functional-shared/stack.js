var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var count =0;
  var storage = {};
  var instance = {
    count: count,
    storage: storage,
    push : stackMethods.push,
    pop : stackMethods.pop,
    size : stackMethods.size
  };

  return instance;
};

var stackMethods = {
  push: function (value)
  {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function()
  {
    if(this.count > 0)
    {
      this.count--;
      return this.storage[this.count];
    }
    return null;
  },
  size: function()
  {
    return this.count;
  }
};


