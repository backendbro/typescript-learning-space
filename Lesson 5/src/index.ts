type one = string 
type two = string | number 
type three = "Hello"

// convert to more or less specific 
let a: one = "Hello"
let b = a as two // less specific 
let c = a as three // more specific 


const addOrConcat = (a:number, b:number, c: "add" | "concat"): number | string => {
    if (c==="add") return a + b 
    return "" + a + b 
}

let myVal:string = addOrConcat(2,2,'concat') as string 
let myVal1:number = addOrConcat(2,2,'concat') as number  

console.log(myVal)
console.log(myVal1)


// THE DOM 
const image = document.querySelector("img") as HTMLImageElement 
image.src = ""