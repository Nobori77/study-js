// 문자열 메서드
// 문자열에서 문자를 찾아서 포함되어 있다면 true, 아니라면 false를 반환
// "문자열".includes("문자")

// 유저1
// 이름: "홍길동"
// 나이: 20
// 지역: "경기도 하남"
// 전화번호: "010-7856-1547"

// 이름: "장보고"
// 나이: 30
// 지역: "경기도 안산"
// 전화번호: "010-2467-8663"

// 이름: "이순신"
// 나이: 45
// 지역: "서울시 종로"
// 전화번호: "010-1762-4872"

// 이름: "김철수"
// 나이: 25
// 지역: "서울시 강남"
// 전화번호: "010-7521-4874"

// 이름: "김영희"
// 나이: 35
// 지역: "경기도 오산"
// 전화번호: "010-8784-1875"

// 1. users 프로토타입
// ex)
// function Users(...user){}
// ex)
// users.user1 = user1
// users.user2 = user2

// 2. users 배열
// const users = [user1, user2, user3]

// 3. 함수로 처리
// const myFunc = (...users) => {}

// 1. 경기도에 거주하는 사람의 이름을 출력하기
function User(name, age, area, phone) {
  this.name = name
  this.age = age
  this.area = area
  this.phone = phone
}

// 유저 생성
const users = [
  new User("홍길동", 20, "경기도 하남", "010-7856-1547"),
  new User("장보고", 30, "경기도 안산", "010-2467-8663"),
  new User("이순신", 45, "서울시 종로", "010-1762-4872"),
  new User("김철수", 35, "서울시 강남", "010-7521-4874"),
  new User("김영희", 35, "경기도 오산", "010-8784-1875")
]

// 경기도 거주자 이름 출력
for (const user of users) {
  if (user.area.includes("경기도")) {
    console.log(`${user.name}님은 경기도에 거주중`)
  }else{console.log(`${user.name}님은 경기도에 거주중이지 않습니다`)
  }
}
// 2. 30대 유저만 출력하기
for (const user of users){
  if(user.age === 30){
    console.log(`${user.name}님은 30살 입니다.`)
  }else if(user.age >= 30) {console.log(`${user.name}님은 30살 이상입니다.`)
  }else if(user.age < 30) {console.log(`${user.name}님은 30살 미만입니다.`)
  }else{""}
}
// 3. 모든 유저의 정보 출력하기
for(const user of users){
  console.log(`${user.name}님은\n 나이는${user.age}살\n 만나이${(user.age - 1)}살\n 사는곳은 ${user.area}이며\n전화번호는${user.phone}입니다. `)
}

//===============================================================
// 출력 결과
// ex) 이름은 김영희, 나이는 35살, 만나이 34살, 사는 곳 경기도 오산
// ...


// 문자열 메서드
// 문자열에서 문자를 찾아서 포함되어 있다면 true, 아니라면 false를 반환
// "문자열".includes("문자")

// function User(name, age, address, phone){
//   this.name = name;
//   this.age = age;
//   this.address = address;
//   this.phone = phone;
// }

// const getUsers = (...users) => users

// const user1 = new User("홍길동", 20, "경기도 하남", "010-2467-8663")
// const user2 = new User("장보고", 30, "경기도 안산", "010-7856-1547")
// const user3 = new User("이순신", 45, "서울시 종로", "010-1762-4872")
// const user4 = new User("김철수", 25, "서울시 강남", "010-7521-4874")
// const user5 = new User("김영희", 35, "경기도 오산", "010-8784-1875")

// const users = getUsers(user1, user2, user3, user4, user5)
// console.log(users)


// 1. 경기도에 거주하는 사람의 이름을 출력하기
// for(let user of users){
//   if(user.address.includes("경기도")){
//     console.log(user)
//   }
// }
// 2. 30대 유저만 출력하기
// for(let user of users){
//   if(user.age >= 30 && user.age <= 39){
//     console.log(user)
//   }
// }

// 3. 모든 유저의 정보 출력하기
// 출력 결과
// ex) 이름은 김영희, 나이는 35살, 만나이 34살, 사는 곳 경기도 오산
// ...
// for(let user of users){
//   console.log(`이름은 ${user.name}, 나이는 ${user.age}, 사는 곳: ${user.address}`)
// }


