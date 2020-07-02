
// Option 1. import multiply, { multiplyByTwo } from "./multiple"; (imports default as multiple and also multiplyByTwo)
// Option 2. import * as multiplyModule from "./multiple";  (its possible import all exports as module)

// Option 3. import * as multiplyModule from "./multiple"; (imports everything as module)
// Option 4. import multiply, { multiplyByTwo as myB2} from "./multiple";
import multiply, { multiplyByTwo as myB2, HellowWorld} from "./multiple";


const a=5;
const b=2;

console.log(`${a} * ${b} = ${multiply(a,b)}`);
myB2(2);

// template strings
const helloworld = `${2+2}`

// test we are working with string and not null
function someFunc(str: string | null){
    if(str){
        //do something if str not null
    }
}
someFunc(null);

// interfaces/optional attributes

interface Profile {
    name:   string;
    age?:   number;
}

let profile: Profile = {
    name: 'MayForSam'
}
profile.name = "Maguire"

// create dynamic object
interface A {
    someProp:   string
    [key:string]:   number | string;
}
const random: A = { someProp: "some prop"}
random.a = 1;
random.b = 2;

// call signature
interface Calc {
    (a: number, b:number):number;
    prop1:string
}
const calc:Calc = (a, b) => a+b;
calc.prop1 = 'some prop';

// extend interface ( multiple interfaces if required)
interface Root 
{
    x:string
}

interface Branch extends Root {}
let branch: Branch = {x:'some prop'}

// functions and arrow functions 
function x(a:number, b?:number):number{ // b can be optional
    return a+(b||0); //if b does not exist 0 is used instead
}

type Arrow = (a: number, b?:number)=> number;
const arrow: Arrow = (a, b)=> a+ (b||0);

// rest parameters
function sumVals(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num , 0)
}

// method overloading

function calcArea(width: number, height:number):number;
function calcArea(lebgth: number):number;
function calcArea(...args: number[]):number{
    if(args.length ===2){
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2)
}