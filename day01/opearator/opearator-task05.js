// * 모든 값을 변수로 선언

// 1번 문제
// 1. 키, 나이를 입력
// 2. 놀이공원에서 어린이 놀이기구 탑승 여부 확인하기
// 3. 130cm 이하 그리고 성인은 탑승 불가
// 4. 나머지는 탑승 가능
// 사람의 정보에 따라 탑승 여부를 출력하기

// 기본변수값
const pass = "탑승가능"
const notPass = "탑승불가"
const baseAge = 10
const baseHeight = 130
const name = "노민균"
//  내정보
let height = 173
let age = 30
// 나이 탑승가능 여부
const isAdult = baseAge > age
const passResult = isAdult ? pass : notPass
//  키 탑승 가능 여부
const isHeight = baseHeight <= height
const heightResult = isHeight ? pass : notPass
//  탑승 가능 여부
let boarding = ""

boarding = heightResult && passResult

const result = [`${name}님은 키 ${height} 나이는 ${age}이므로 ${boarding} 입니다`]

console.log(result)


// * 모든 값을 변수로 선언

// 1번 문제
// 1. 키, 나이를 입력
//const name = "홍길동"
//const age = 15
//const height = 120

// 2. 놀이공원에서 어린이 놀이기구 탑승 여부 확인하기
// 3. 130cm 이하 그리고 성인은 탑승 불가
//const isHeightPass = height <= 130
//const isAdultPass = age <= 19
//const pass = isHeightPass && isAdultPass

// 4. 나머지는 탑승 가능
//const Result = pass ? "탑승 가능" : "탑승 불가"
// 사람의 정보에 따라 탑승 여부를 출력하기
//console.log(Result)




// 2번 문제
// 1. 주차 시간, 요일 여부 입력(월, 화, 수, 목, 금, 토, 일)
const day = "목"
const isWeekend = day === "토" || day === "일"
const hours = 7
const isOverFiveHours = hours > 5

// 2. 기본 주차 요금은 시간당 1,000원
const pay = 1000
let total = hours * pay

// 3. 주말이면 총 요금의 20% 추가 요금이 붙는다
isWeekend && (total *= 1.2)

// 4. 이용 시간이 5시간 초과이면 총 요금에서 10% 할인
isOverFiveHours && (total *= 0.9)

// 5. 최종 요금을 계산
// 최종 주차 요금 출력하기
console.log(total)


