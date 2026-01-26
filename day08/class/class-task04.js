// 은행(Bank) 클래스가 존재한다. 
// 회원(Member)들에게 관리비를 5만원 가져가야하는 경우
// 1. 회원이 가진 돈에서 5만원을 빼야한다.
// 2. 은행에 5만원을 추가해야한다.
class Bank {
  constructor(bankName, bankMoney){
    this.bankName = bankName
    this.bankMoney = bankMoney
  }

  withdraw(member){
    if(member.memberMoney < 50000){
      console.log(`관리비 미납! ${member.memberName} 경찰 신고!`)
      return;
    }

    member.memberMoney -= 50000
    this.bankMoney += 50000
  }
}

class Member {
  constructor(memberName, memberMoney){
    this.memberName = memberName
    this.memberMoney = memberMoney
  }
}

const kb = new Bank("국민은행", 1000000000);
const lee = new Member("이규혁", 500)
const yu = new Member("김유중", 120000000)

kb.withdraw(lee)
console.log(lee.memberMoney)
kb.withdraw(yu)
console.log(yu.memberMoney)