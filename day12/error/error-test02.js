// try ~ catch문 안에 비동기코드가 작업 되었다면,
// 해당코드는 예외를 잡을 수 없다
// try {
//   console.log("코드 실행1")
//   setTimeout(() => {
//     name
//   }, 5000)
//   console.log("코드 실행2")
// } catch (error) {
//   console.log("catch로 잡음!")
// }

// 해결 방법

// try {
//   console.log("코드 실행1")
//   setTimeout(() => {
//     try {
//       name
//     } catch (error) {
//       console.log("비동기 코드 오류 잡기")
//     }
//   }, 5000)
//   console.log("코드 실행2")
// } catch (error) {
//   console.log("catch로 잡음!")
// }

// try {
//   const getDatas = async () => {
//     const response = await fetch("블라")
//     const datas = await response.json
//   }
// } catch (err) {
  
// }

try {
  name
} catch (error) {
  console.log("예외 발생")
}finally{
  // 외부의 리소를 해제할 때 사용
  console.log("예외가 발생해도, 발생하지 않아도 반드시 실행되는 코드!")
}