// Object.create(proto, [propertiesObject])
/*****
 * 原理：Object.create方法的实质是新建一个空的构造函数F，然后让F.prototype属性指向参数对象obj，最后返回一个F的实例，从而实现让该实例继承obj的属性
 */
function create (obj) {
  // 生成构造函数
  function F() {}
  // 将构造函数原型指向obj
  F.prototype = obj
  return new F()
}

// 或者
function create (obj) {
  var B = {};
  Object.setPrototypeOf(B, obj)
  return B;  
}

// 或者
function create (obj) {
  var B = {};
  B.__proto__=obj;
  return B;  
}