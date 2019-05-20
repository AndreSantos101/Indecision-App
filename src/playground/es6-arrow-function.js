const square = function(number){
    return number*number;
};
console.log(square(5));

/*const squareArrow = (x) => {
    return x*x;
};*/

const squareArrow = (x) => x*x;

console.log(squareArrow(4));

const getFirstName = (fullName) => {
    return fullName ? fullName.split(' ')[0] : '';

}

const getFirstNameShort = (fullName) => fullName ? fullName.split(' ')[0] : '';


console.log(getFirstName('André Santos'));

console.log(getFirstNameShort('André Santos'));