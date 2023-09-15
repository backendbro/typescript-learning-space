// TYPESCRIPT ARRAYS  

let stringArr = ["Hey", "Dave", "One"]
let guitars = ["Les Paul", "Strat", 5150]
let mixedData = ["EVH", 1984, true]

stringArr[0] = "53" 
guitars.push(1984)
mixedData.push(false)


// TYPESCRIPT TUPLES 
let myTuple: [string, number, boolean ] = ["Dave", 51, true]
let mixed = ['John', 1, false]


// TYPESCRIPT OBJECTS 
let myObj: object = {
    name:"John Doe",
    age:32
}

type Guitarist = {
    name?:string,
    active:boolean,
    albums:(string | number)[]
}

let evh: Guitarist = {
    name:"John Doe",
    active:false,
    albums:["The Jiggy Boo", 12]
}


const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return `Hello world`
}

const result: string = greetGuitarist(evh)
console.log(result)



// ENUM 

