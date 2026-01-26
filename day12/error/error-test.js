
// try{
//   // SyntaxError  문법적인 오류가 발생하면
//   // 컴파일러는 코드를 번역하지 않는다. 따라서
//   // try ~ catch문이 실행되지 않는다.
//   let number = 10;
// }catch (error) {
//   console.log("오류")
//   console.log(error)
// }

try {
  let num = 10
  // console.log("오류가 아님", num / 0) 
  // console.log(num2)
  // const data = {
  //   name: "홍길동"
  // }

  // data.test.replace("")
  
  throw new RangeError()
} catch (error) {
  // 타입비교 instanceof
  if(error instanceof ReferenceError){
    console.log("변수를 찾지 못했습니다")
  } else if(error instanceof TypeError){
    console.log("잘못된 타입으로 접근했습니다.")
  }else {
    console.log("알 수 없는 오류 발생")
  }
}