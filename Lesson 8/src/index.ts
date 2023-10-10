// INDEX SIGNATURES 
interface TransactionObj1 {
        [index:string]:number, 
        Pizza:number, 
        Books:number, 
        Job:number 
}

const todaysTransaction1: TransactionObj1 = {
        Pizza:20,
        Books:21,
        Job:12 
}

let prop:string = 'Pizza'

console.log(todaysTransaction1['Pizza'])
console.log(todaysTransaction1[prop])



const netsTransaction = (transactions:TransactionObj1):number => {
        let total = 0 
        for (const transaction in transactions){
                total += transactions[transaction] 
        }

        return total
}

console.log(netsTransaction(todaysTransaction1))


// interface for new users 
interface UserObj {
        //[index:string]:number | string | boolean,
        name:string,
        age:number,
        isEmployed:boolean 
}


const newUser:UserObj = { 
        name:"John Doe",
        age:32,
        isEmployed:true
}

for (const user in newUser) {
        console.log(newUser[ user as keyof UserObj ])
}


Object.keys(newUser).map(key => {
        console.log(newUser[key as keyof typeof newUser])
})

const getFullDetails = (user:UserObj):string => {
        return `${user.name} is ${user.age} years old and employment status is ${user.isEmployed}`       
}

const logUserKey = (newUser:UserObj, key: keyof UserObj):void => {
        console.log(`Student ${key}: ${newUser[key]}`)
}

logUserKey(newUser, "name")

const result = getFullDetails(newUser)
console.log(result)


//////////////////////////////////////////////////////////
interface Incomes {
        [key:string]:number
}

type Streams = 'salary' | 'bonus' | 'side-hustle'




