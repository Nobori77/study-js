const animal1 = {
  cat: "야옹이",
  dog: "누렁이",
  cow: "얼룩이",
  tiger: "어흥이"
}

// 깊은 복사 
// spread + destrictiring
const {cat, ...animal2} = animal1

const user = {
  email: "test123@gmail.com",
  password: "test123!2",
  name: "홍길동",
  address: "서울시 강남구",
  phone: "010-1234-1234"
}

const {password, ...removedPasswordUser} = user
console.log(removedPasswordUser)