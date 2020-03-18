/****** 原型链继承 
 * 思路：子类的原型指向超类实例
 * 缺陷：子类共用一个属性，互相影响，无法初始化超类属性
 * ********/
// 父类
function SuperType (name) {
  this.name = name
}
SuperType.prototype.getName = function () {
  return this.name
}
// 子类
function SubType () {}
SubType.prototype = new SuperType('哈哈')
SubType.prototype.constructor = SubType

let ins1 = new SubType()
let ins2 = new SubType()

console.log(ins1.name) // 哈哈
console.log(ins3.name) // 哈哈

/****** 借用构造函数继承 
 * 思路：将this指向实例
 * 缺陷：只继承了超类的属性，未继承超类的方法
 * ********/ 
function SubType (...arges) {
  SuperType.apply(this, arges)
  this.age = '22'
}

/****** 组合继承
 * 思路就是：原型链继承+借用构造函数继承
 * 缺陷：调用两次超类构造函数
 */

function SuperType () {
  this.name = '1111'
}

SuperType.prototype.getName = function () {
  return this.name
}

function SubType (...arges) {
  Super.apply(this, arges)
  this.type = 'sub'
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType

let ins1 = new SubType('哈哈1')
let ins2 = new SubType('哈哈2')

console.log(ins1.getName()) // 哈哈1
console.log(ins2.getName()) // 哈哈2

/*******寄生继承
 * 原理：创建一个新的对象，将该对象的__proto__指向超类的原型
 * 将该新对象constructor指向子类构造函数，并将其赋值给子类的原型
 */
function _inherit (SubType, SuperType) {
  let prototype
  prototype = Object.create(SuperType.prototype)
  prototype.constructor = SubType
  SubType.prototype = prototype
}