var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.storage = {};
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


