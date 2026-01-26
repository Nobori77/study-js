// 이름 : 여러분들의 성함 // 변수 또는 상수
// 국어: 80점
// 수학: 70점
// 영어: 90점
// 과학: 20점
const name = "홍길동"
let kor = 80;
let math = 70;
let eng = 90;
let sc = 20;

// 평균, 학점, 구하기
let total = kor + math + eng + sc
let average = total / 4
let cutline = average >= 60
let pass = ""
let result = ""

// if문을 사용해서 평균 60점 이상은 합격, 60점 미만은 불합격 출력하기
if(cutline){
  pass = "합격"
} else {
  pass = "불합격"
}

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.
result = `${name}님의 이번 총점은 ${total}점, 평균은 ${average}점으로 ${pass}입니다`
console.log(result)