/**
 * 原型模式
 */
const Employee = function (name, age) {
  this.name = name;
  this.age = age;
};

Employee.prototype.say = () => {
  console.log(`${this.name} ${this.age}`);
};

const e1 = new Employee('k1', 100);
const e2 = new Employee('k2', 100);
