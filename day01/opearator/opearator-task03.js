// 동물
// 강아지, 고양이, 고라니, 호랑이

// ** 모든 값을 변수에 담기
// 강아지라면 "멍멍"을 출력
// 고양이라면 "야옹"을 출력
// 고라니라면 "빼앵"을 출력
// 호랑이라면 "어흥"을 출력

const animal = "강이지"
const dog = "강아지"
const dogSound = "멍멍"
const cat = "고양이"
const catSound = "야옹"
const deer = "고라니"
const deerSound = "빼앵"
const tiger = "호랑이"
const tigerSound = "어흥"
const notSound = ""
const isDog = animal === dog
const isCat = animal === cat
const isDeer = animal === deer
const isTiger = animal === tiger

const result = isDog ? dogSound 
  : isCat ? catSound
    : isDeer ? deerSound
      : isTiger ? tigerSound
        : notSound

console.log(result)