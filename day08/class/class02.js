// static

class Data {
  data = 10
  static data_s = 10

  increase(){
    this.data++
  }
  
  increaseS(){
    Data.data_s++
  }
}

// console.log(Data.data)
// console.log(Data.data_s)


// let staticTest = new Data();
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest = new Data();
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// console.log(staticTest.data)


let staticTest = new Data();
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest = new Data();
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
console.log(Data.data_s)
