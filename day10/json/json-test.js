const file = require('fs')

// JSON 파일 읽어오기
// file.readFile("./user.json", 'utf-8', (error, data) => {
//   // console.log(data)
//   // JSON -> JS
//   const users = JSON.parse(data)
//   console.log(users)
// })

// const usersJSON = file.readFileSync("./user.json", 'utf-8')
// const users = JSON.parse(usersJSON)
// console.log(users)

// users 데이터에서 이름만 출력하기
// users.map((user) => user.name).forEach((name) => console.log(name))

// JSON 파일 생성

const user = {
  name: "홍길동",
  age: 20,
  phone: "010-1234-5678",
  address: "경기도 구리시",
  email: "test123@gmail.com"
}

const userJSON = JSON.stringify(user)

// writeFile(경로, 데이터, 인코딩, 콜백함수)
file.writeFile('./user2.json', userJSON, 'utf-8', (err) => {
  if(err){
    console.error(err)
  }else{
    console.log("userJSON 파일 생성 완료 ")
  }
})