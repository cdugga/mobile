
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
    [key:string]:   number;
}
const random: A = {}
random.a = 1;
random.b = 2;