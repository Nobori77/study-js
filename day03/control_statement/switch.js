// switch (값){}

//전화상담
//1. 카드 문의
//2. 통장 문의
//3. 잔고 확인
//4. 상담 확인

let choice = 1
switch(choice){
  case 1:
    console.log("카드 문의")
    break
  case 2: 
  break
    console.log("통장 문의") // 데드 코드
  case 3: 
    console.log("잔고 확인")
    break
  case 0: 
    console.log("상담 확인")
    break
  default:
    console.log("카드 문의")
    break
}