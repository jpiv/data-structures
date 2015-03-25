var Queue = function(){
  var instance =
  {
    count : 0,
    storage : {},
    size : queueMethods.size,
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue
  };

  return instance;
};

var queueMethods = {
  size : function()
  {
    return this.count;
  },
  enqueue: function(value)
  {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function()
  {
    if(this.count > 0)
    {
      var result = this.storage[0];
      for(var key in this.storage)
      {
        this.storage[key-1] = this.storage[key];
      }
      this.count--;
      delete this.storage[this.count];
      return result;
    }
  }
};



