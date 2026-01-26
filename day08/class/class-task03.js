// 학생의 클래스를 만들고
// 수학, 국어, 영어 점수를 입력 받아 학생의 총점과 평균을 출력하시오.

class Student {
  
  static {
    console.log("시험종료 고생하셨습니다.")
  }

  constructor(id, name, math, kor, eng){
    this.id = id;
    this.name = name;
    this.math = math;
    this.kor = kor;
    this.eng = eng;
    this.total = math + kor + eng;
    this.avg = (this.total / 3).toFixed(2)
  }
 
  introduce(){
    console.log(`${this.name} 님의 성적\n총 점 : ${this.total}점 \n평 균 :${this.avg}점`)
  }

}

const user = new Student(1, "노민균", 100, 40, 50)

user.introduce()