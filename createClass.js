// create class in Javascript 
// javascript inherit properties from parent to child by copying them

function mixin( source, target) {
  for (var key in source) {
    // only copy if not already present
    if (!(key in target)) {
      target[key] = source[key];
    }
  }

  return target;
}

// parent class
var Vehicle = {
  engines: 1,
  ignition: function() {
    console.log("Turning on my engine.");
  },
  drive: function() {
    this.ignition();
    console.log("steering and moving forward");
  }
};

var target = {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this);
    console.log("Rolling on all ", this.wheels, "wheels!")
  }
}

var Car = mixin(Vehicle, target)
console.log(Car)