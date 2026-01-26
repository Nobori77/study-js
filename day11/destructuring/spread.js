const animal1 = {
  cat: "야옹이",
  dog: "누렁이",
  cow: "얼룩이",
  tiger: "어흥이"
}

const animal2 = {
  rabbit: "토깽이",
  pig: "꿀꿀이",
  sheep: "양양이",
  chick: "삐약이"
}

// animal1, animal2 합치기

const animal3 = {
  cat: animal1.cat,
  dog: animal1.dog,
  cow: animal1.cow,
  tiger: animal1.tiger,
  rabbit: animal2.rabbit,
  pig: animal2.pig,
  sheep: animal2.sheep,
  chick: animal2.chick
}

const animal5 = {
  ...animal1,
  ...animal2
}
// Object.assign({}, 객체1, 객체2)
// 여러 개의 객체를 하나로 합쳐서 [새로운 객체]로 반환하는 메서드 
const animal4 = Object.assign({}, animal1, animal2)
console.log(animal3)
console.log(animal4)
console.log(animal5)

// 배열
const arr1 = Array.of(1, 2, 3, 4)
const arr2 = new Array(4).fill(0).map((_, i) => i + 1)
const arr3 = [...arr1, ...arr2] // ES6 문법
const arr4 = arr1.concat(arr2) // ES5 문법

// rest parameter : 가변 매개변수와 다르다
const myFunc = (...number) => {}

console.log(arr3)
console.log(arr4)