// TYPESCRIPT ALIASES 

type stringOrNumber = string | number
type stringOrNumberArray = stringOrNumber[]

type Guitarist = {
    name:string,
    active:boolean, 
    albums: stringOrNumberArray
}

// LITERAL TYPES 
let username:"Dave" | "John" | "Amy";

const sum = (a:number, b:number): any => {
    return a+b.toString()
} 

const logMsg = (message: any ): void => {
    console.log(message)
}

logMsg(sum(1,2))    

type mathFunc = (a:number, b:number) => number 
interface mathFunc1 {(a:number, b:number):number}

const multiply:mathFunc = function (a,b) {
    return a+b 
}
logMsg(multiply(1,2))

//optional parameters 
const addAll = (a:number, b:number, c?:number):number => {
    if(typeof(c) !== "undefined"){
        return a+b+c
    }

    return a+b 
}

logMsg(addAll(1,2))
logMsg(addAll(1,2,3))


// REST PARAMETERS 
const total = (a:number, ...nums: number[]):number => {
    return nums.reduce((prev, curr) => prev + curr)
}


logMsg(total(1,2,3,4,5))


// NEVER TYPE 
const createError = (errMsg: string): never => {
    throw new Error (errMsg)
}

