const arr1 = Array.of (10, 20, 30, 40, 50)
const arr2 = Array.of (10, 20, 30, 40, 50, 60, 70, 80, 90)

// 값을 몇개나 전달할 지 모를 때, 전달한 값들을 모두 출력
const print = (...datas) => {
  for(let data of datas){
    console.log(data)
  }
}

print(...arr1)

// 몇 개를 전달할지 모르지만 그 중 최댓값과 최솟값을 구해주는 메서드

const randomMumbers = new Array(1000).fill(0).map((_) => Math.floor(Math.random() * 10000))
console.log(randomMumbers)

const getMinAndMax = (...number) => {
  return {
    min: Math.min(...number),
    max: Math.max(...number)
  }
}

const {min, max} = getMinAndMax(...randomMumbers)
console.log(min)
console.log(max)