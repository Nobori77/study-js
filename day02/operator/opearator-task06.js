// 1번 문제 
// 배송비 구하기
// 1. 기본 배송비는 3,000원
// const defaultDeliveryFee = 3000
// const productPrice = 45000
// let deliveryFee = 0
// let totalFee = 0
// let totalPrice = 0
// const isMember = true
// const memberMessage = isMember ? "회원" : "비회원"
// let result = ""
// 2. 상품 금액이 50,000원 이상이면 배송비 무료 
// deliveryFee = productPrice >= 50000 ? 0 : defaultDeliveryFee

// 3. 회원이면 배송비 20% 할인 적용
// isMember && (deliveryFee *= 0.8)
// totalFee = productPrice + deliveryFee

// 4. 최종 배송비를 계산하여 출력한다
// totalPrice = productPrice + deliveryFee
// result = `홍길동님의 구매 가격은 ${productPrice}원 이고,\n${memberMessage}이므로 배송비는 ${deliveryFee}원입니다.\n총 가격은: ${totalFee}원 입니다.`
// console.log(result)


// 2번 문제(형변환을 같이 사용해야함.)
// 사용자의 거스름돈의 최소 동전 개수 구하기
// 동전의 종류 500, 100, 10
// 4790원


let money = 4790;
let defaultMoney = money
const coin500 = 500;
const coin100 = 100;
const coin10 = 10;

// 실수 -> 정수
// parseInt()
let countCoin500 = parseInt(money / coin500)
// money = money - coin500 * countCount500
money %= coin500

let countCoin100 = parseInt(money / coin100)
money %= coin100

let countCoin10 = parseInt(money / coin10)
money %= coin10

let totalCoin = countCoin500 + countCoin100 + countCoin10
let result = `${defaultMoney}원의 최소 동전 개수는\n${coin500}원: ${countCoin500}개\n${coin100}원: ${countCoin100}개\n${coin10}원: ${countCoin10}개\n총 동전의 개수: ${totalCoin}개`
console.log(result)
