var _ = require('lodash');

/**
 * Object.create()
 * 
 * Creates a new object with the specified prototype object and properties
 */

var vehicle = Object.create(null);// o dont have any prototype
vehicle.is = 'moving';

var car = Object.create(vehicle); // vehicle is the prototype of car and car inherited methods from vehicle
car.is // return 'moving'

car.wheels = 4 // add a new method car

Object.getPrototypeOf(car) === vehicle // return true
car.prototype === vehicle // return false. prototype is a method that belong to Object.prototype, which mean that
// if you not inherited Object.prototype, you cannot use it.

var animals = Object.create(Object.prototype); // inherited all object methods
animals.is = 'creature';

var cow = Object.create(animals); // vehicle is the prototype of car and car inherited methods from vehicle
cow.is // return 'creature'

cow.legs = 4 // add a new method for cow

Object.getPrototypeOf(cow) === animals // return true

Object.getPrototypeOf(cow) === Object.prototype // return false because you add property is
// if you done do animals.is = 'create' then
console.log(_.isEqual(Object.getPrototypeOf(cow), Object.prototype)) // will return true



// What is cow.prototype? prototype are properties that inherited from animals which inherited from Object. Is that correct?
// If i block the inheritance flow by adding animals.property = false, is cow still have Object.property method?

// Object.prototype are simply a object with multiple function that all new object inherited from.

// It seem that only class have .prototype property

