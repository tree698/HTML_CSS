'use strict';


// class
// - template 
// - declare once 
// - no data in 

// object
// - instance of a class 
// - created many times 
// - data in




// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // method
    speak() {
        console.log(`${this.name}: hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak()



// 2. Getter and setters (초기화가 필요한 곳에 private로 설정)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // getter
    get age() {
        // 변수 이름을 다른 것으로..
        return this._age;
    }
    // setter
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        // this._age = value;

        // 변수 이름을 다른 것으로..
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steven', 'job', -1);
console.log(user1.age);



// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);



// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor (articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();



// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
    draw() {
        // 부모의 draw도 호출됨 (super)
        super.draw();
        console.log('TTTTTTT');
    }
    getArea() {
        return this.width * this.height * 0.5;
    }
}
const triangle = new Triangle(20, 20, 'red');
console.log(triangle.getArea());
triangle.draw();



// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

console.log(triangle.toString());

