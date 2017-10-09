var _ = require('lodash');

/**
 * Create an object with no prototype
 */

// Using Object.create
var obj1 = Object.create(null);

/**
 * Given an object a, assuming that the object may not have a current prototype.
 * Given another object b, how do you make object b become prototype of object a
 * 
 * Notice: prototype is only a reference, which mean you can add more to it
 */

var obj2 = _.assign(Object.create(b), a);

/**
 * Object.create()
 * 
 * Creates a new object with the specified prototype object and properties
 */

var vehicle = Object.create(null);// vehicle dont have any prototype
vehicle.is = 'moving';

var car = Object.create(vehicle); // vehicle is the prototype of car and car inherited methods from vehicle
car.is // return 'moving'

car.wheels = 4 // add a new method car

Object.getPrototypeOf(car) === vehicle // return true
car.prototype === vehicle // return false. prototype is a method that belong to Object.prototype, which mean that
// if you not inherited Object.prototype, you cannot use it.

