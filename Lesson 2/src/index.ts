// TYPESCRIPT TYPES 

let myName:string = "Dave"
let meaningOfLife:number
let isLoading: boolean
let album:any 

myName = "32" 
meaningOfLife = 32 
isLoading = true 
album = "Flawless"

const sum = (a:number, b:number): number => {
    return a+b 
}

const result:number = sum(1,3)
console.log(result)

// union type 
let postId: number | string 
let isActive: number | boolean | string 

let re: RegExp = /\w+/g