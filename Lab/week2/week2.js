console.log("test");
// Ex 1
console.log("Ex 1");
const greeter = (myArray, counter) => {
  const greetText = "Hello ";

  let i = 0;
  for (const name of myArray) {
    if (i++ >= counter) break;
    console.log(`${greetText}${name}`);
  }
};

greeter(['CM Punk', 'Kenny Omega', 'Cody Rhodes'], 3)
// Ex 2
console.log("Ex 2");
function capitalize(string){
    let [first, ...rest] = string;
    return first.toUpperCase()+rest.join('').toLowerCase();
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
// Ex 3
console.log("Ex 3");
const colors = ['red', 'green', 'blue'];
let capitalizedColors = colors.map(capitalize);
console.log(capitalizedColors);
// Ex 4
console.log("Ex 4");
let values = [1, 60, 34, 30, 20, 5];
let filterLessThan20 = values.filter(x => x < 20);
console.log(filterLessThan20);
// Ex 5
console.log("Ex 5");
let array = [1, 2, 3, 4];
let calculateSum = array.reduce((acc, curr) => acc + curr);
let calculateProduct = array.reduce((acc, curr) => acc * curr);
console.log(calculateSum);
console.log(calculateProduct);
// Ex 6
console.log("Ex 6");
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model} Engine ${this.year}`;
    }
}
class Sedan extends Car{
    constructor(model, year, balance){
        super(model,year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());