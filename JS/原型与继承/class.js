class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log('eat something...');
  }
}

class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(
      `姓名 ${this.name}, 学号${this.number}`
    );
  }
  study() {
    console.log('Studying...');
  }
}

const XIALUO = new Student('夏洛', '13')
XIALUO.sayHi()
XIALUO.study()
XIALUO.eat()