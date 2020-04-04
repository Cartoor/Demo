/**
 * 
 * param {Object} obj 要拷贝的对象
 */

function deepClone(obj = {}) {
  if(typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if(obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      // 保证key不是从原型中获得的属性
      result[key] = deepClone(obj.key)
    }
  }

  return result
}

let obj1 = {
  name: "小明",
  age: 16,
  ismale: true,
  address: {
    city: 'Guiyang',
    district: 'Baiyun' 
  }
}

let obj2 = deepClone(obj1)

obj2.address.city = 'Zunyi'

console.log(obj1.address.city)