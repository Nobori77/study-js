const animal1 = {
  cat: "야옹이",
  dog: "누렁이",
  cow: "얼룩이",
  tiger: "어흥이",
  rabbit: {
    rabbit1: "토깽이",
    rabbit2: "토실이",
    rabbit3: "토박이"
  }
}

// const animal2 = animal1
// animal2.cat = "치즈"

// console.log(animal1)
// console.log(animal2)

// 얕은 복사
// 객체를 복사할 때 참조 주소값도 같이 복사하는 것 

// 깊은 복사
// 객체를 복사할 때 참조 주소도 새롭운 객체를 만드는 것

// 1. 깊은 복사 (1depth)
// Object.assign({}, 객체)
const animal3 = Object.assign({}, animal1)

// animal3.dog = "규학이"
// animal3.rabbit.rabbit1 = "토목이"
// console.log(animal1)
// console.log(animal3)

// 2. spread(1depth)
const animal4 = {...animal1}
animal4.tiger = "타이어"
// console.log(animal1)
// console.log(animal4)

// 배열
const arr1 = Array.of("토깽이", "어흥이", "점박이", "얼룩이")
const arr2 = arr1

// arr2[0]  = "토실이"

// console.log(arr1)
// console.log(arr2)

// spread, slice, map, concat, filter

const arr3 = [].concat(arr1)
arr3[0] = "토실이"

console.log(arr1)
console.log(arr3)
