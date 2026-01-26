// * 모든 값을 변수
// 시험 성적 문제 구하기
// 국어, 영어, 수학 점수를 받아서(직접 입력)
const gradeA = "A등급"
const gradeB = "B등급"
const gradeC = "C등급"
const gradeF = "F등급"
const name = "홍길동"

let kor = 100
let eng = 90
let math = 77
let grade = ""
// 총점과 평균을 구하고
let total = kor + eng + math
let average = total / 3

// 평균이 90점 이상이라면 A등급,
grade = average >= 90 ? gradeA
  // 80점 이상이라면 B등급,
  : average >= 80 ? gradeB
    // 70점 이상이라면 C등급,
    : average >= 70 ? gradeC 
      // 70점 미만이라면 F등급
      : gradeF

// 등급을 출력하기
const result = `${name}님의 점수\n국어 점수: ${kor}점\n영어 점수: ${eng}점\n수학 점수: ${math}점\n총 점: ${total}점\n평 균: ${average}점\n등급: ${grade}`
console.log(result)




