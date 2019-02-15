console.log("普通for循环")
let arr = [1,2,3,4,5]
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
console.log('forEach,不能中断')
arr.forEach(item => console.log(item))


Array.prototype.method = function () {
  console.log(this.length)
}
arr.name = "数组"
for (var index in arr) {
  console.log(arr[index])
}
console.log('for of')
for (let value of arr) {
  console.log(value)
}

let obj = {
  name: 'sanfeng',
  age: 18
}

Object.prototype.method = function () {
  console.log('hello');
}
for (let key in obj) {
  console.log(key)
}

console.log('对象的属性 key')
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key)
  }
}
console.log('结合for of 遍历对象属性的值')

// 
for (let key of Object.keys(obj)) {
  console.log(obj[key]);
}
console.log('使用for in遍历对象, 但是会遍历出原型和可枚举的属性')
for (let key in obj) {
  console.log(key, " --> ", obj[key]);
}