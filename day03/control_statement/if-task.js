// 평균이 90점 이상이라면 A등급,
// 80점 이상이라면 B등급,
// 70점 이상이라면 C등급,
// 70점 미만이라면 F등급

// * 모든 값을 변수
// 시험 성적 문제 구하기
// 국어, 영어, 수학 점수를 받아서(직접 입력)
const gradeA = "A등급"
const gradeB = "B등급"
const gradeC = "C등급"
const gradeF = "F등급"
const name = "홍길동"

// 총점과 평균을 구하고
let kor = 100
let eng = 90
let math = 90
let grade = ""
let total = kor + eng + math
let average = total / 3

if(average >= 90){
  grade = "A"
 }else if(average >=80){
    grade = "B"
  }else if (average >= 70){
    grade = "C"
  } else {
    grade = "F"
  }

  console.log(grade)