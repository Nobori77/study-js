// 은행(Bank)
// 이름(name), 계좌(account)

// 입금(deposit)
// 은행에서 관리하는 유저의 돈(account)이 증가
// 유저의 돈(moeny)이 감소

// 출금(withdraw), 
// 은행에서 관리하는 유저의 돈(account)이 감소
// 유저의 돈(money)이 증가

// 계좌이체(transferMoney)
// 은행을 통해 유저1 -> 유저2 입금
// 유저1 돈(account) 감소
// 유저2 돈(account) 증가

// user1(User)
// 이름(name), 돈(money)

// user2(User)
// 이름(name), 돈(money)

function Bank(name){
  // 유저들의 계좌 정보
  this.account = null

  // 입금
  this.deposit = (user, money) => {
    if(user.money < money){
      return console.log("잔액 부족!😥");
    }
    
    // 잔액이 이상이 없고, 
    if(this.account === null){
      this.account = new Object()

      // 은행이 만들어지고 첫 회원
      this.account[user.name] = new User(user.name, money)
      user.money -= money
      
    }else{
      // 이미 은행에 회원들이 있는 상태
      for(let key in this.account){
        if(this.account[key].name === user.name){
          this.account[key].money += money
          user.money -= money
        }else {
          this.account[user.name] = new User(user.name, money)
          user.money -= money
        }
      }
    }
  }

  // 출금
  this.withdraw = (user, money) => {
    if(this.account === null){
      return console.log("알 수 없는 오류 발생!")
    }

    for(let key in this.account){
      // 회원인지
      if(this.account[key].name === user.name){
        this.account[key].money -= money
        user.money += money
        break;
      }else {
        continue;
      }
    }
  }

  // 계좌이체
  this.transferMoney = (fromUser, toUser, money) => {
    if(this.account === null){
      return console.log("알 수 없는 오류 발생!")
    }

    let isAccountFromUser = false;
    let isAccountToUser = false;
    
    for(let key in this.account){
      // 보내는 사람이 회원인지의 여부를 확인
      if(this.account[key].name === fromUser.name){
        isAccountFromUser = true;
      }

      if(this.account[key].name === toUser.name){
        isAccountToUser = true;
      }

      if(isAccountFromUser && isAccountToUser){
        break;
      }
    }

    // 둘 중 하나라도 회원이라면
    if(!(isAccountFromUser && isAccountToUser)){
      return console.log("회원을 찾을 수 없습니다.")
    }

    // 보내는 사람이 가지고 있는 잔고 금액이 더 작으면
    if(this.account[fromUser.name].money < money){
      return console.log("잔고 부족 보낼 수 없습니다.")
    }

    this.account[fromUser.name].money -= money
    this.account[toUser.name].money += money

  }

}

function User(name, money){
  this.name = name
  this.money = money
}

const KB = new Bank()
const user1 = new User("홍길동", 100_000)
const user2 = new User("장보고", 50_000)

KB.deposit(user1, 50000)
KB.deposit(user2, 30000)
KB.withdraw(user2, 10000)
KB.transferMoney(user1, user2, 10000)
console.log("현재 은행 정보", KB)