const greeting:string= "Hello, TypeScript!";
console.log(greeting);

function mult(a:number,b:number):number{
    return a*b;
};
console.log(`Product is ${mult(512,2)}`);

function isEven(a:number):boolean{
    let isEven= a%2===0? true:false;
    return isEven;
};
console.log(`Number is even: ${isEven(0)}`);

function greetUser(a:string){
    console.log(`Hello, dear friend ${a}!`);
}; 
greetUser("Galina");  

function filterPositivNumber(arr:number[]):number[]{
    let res = arr.filter(e=>e>0);
    return res;
};
console.log(`Array of positiv numbers is ${filterPositivNumber([-7, 0, 512, 2, -1908, 78, -65, 59, 7, 7])}`);