/**
 * 类模式
 */

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`${this.name} ${this.age}`);
  }
}
 
const e1 = new Employee('k1', 100);
const e2 = new Employee('k2', 100);
