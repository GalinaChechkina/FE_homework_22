const greeting:string= "Hello, TypeScript!";
console.log(greeting);

function mult(a:number,b:number):number{
    return a * b;
};
console.log(`Product is ${mult(512, 2)}`);

function isEven(a:number):boolean{
    return a % 2 === 0;
};
console.log(`Number is even: ${isEven(-17)}`);

function greetUser(a:string):void{
    console.log(`Hello, dear friend ${a}!`);
}; 
greetUser("Galina");  

function filterPositivNumber(arr:number[]):number[]{
    return arr.filter((e:number):boolean => e > 0);
};
console.log(`Array of positiv numbers is ${filterPositivNumber([-7, 0, 512, 2, -1908, 78, -65, 59, 7, 7])}`);