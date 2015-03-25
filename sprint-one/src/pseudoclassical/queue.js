var Queue = function(){
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function(){
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
};

Queue.prototype.size = function(){
  return this.count;
};
