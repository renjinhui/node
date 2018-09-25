function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.eat = function () {
    console.log('会吃')
};
function Girl(name,age) {
    Person.call(this,name,age)
    
}
Girl.prototype = Object.create(Person.prototype);
let girl = new Girl('lily',18);
console.log(girl.name,girl.age);