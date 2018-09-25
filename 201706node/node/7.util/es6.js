class Person {
   constructor(name,age){
       this.name = name;
       this.age = age;
   }
   eat(){ //原形上的方法
       console.log('会吃')
   }
}
class Girl extends Person{
    constructor(name,age){
        super(name,age);//调用父类并且this就是girl实例
    }
}
let girl = new Girl('lily',18);
console.log(girl.name,girl.age);
girl.eat();