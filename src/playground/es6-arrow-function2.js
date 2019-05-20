/*const add = (a,b) => {
    console.log(arguments);
    return a+b;
}*/
//console.log(add(55,1,1000));

const user = {
    name: 'Andre',
    Cities: ['Porto', 'Lisboa','Coimbra'],
    printPlacesLived(){
        
        return  this.Cities.map((city)=> this.name + ' has lived in '+ city+'!');
        
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((elem)=> elem*this.multiplyBy);
    }
};

console.log(multiplier.multiply());