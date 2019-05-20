class Person{
    constructor(name="Anonymous",age=0){
        this.name = name;
        this.age=age;
    }
    getGretting(){
        // return 'Hi! '+this.name;
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person{

    constructor(name,age, major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        return this.hasMajor() ? description+= ` and their major is ${this.major}` : description;
    }
}

class Traveller extends Person{
    constructor(name = 'Anonymous',age=0 ,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        let gretting = this.homeLocation ? (super.getGretting()+= `I am visiting from ${this.homeLocation}`) : super.getGretting();
        return gretting;
    }
}
const me = new Student("Andre", 23, 'Computer Science');

const other = new Traveller("Jony Fonsi", 34, 'Luanda');

console.log(me.getDescription());

console.log(other.getDescription());

