// INDEX SIGNATURE 

// interface TransactionObj {
//     [index:string]:number // This indicates an index/key of string 
//                           // and returns a number
// }

interface TransactionObj {
    readonly [index:string]:number 
    Pizza:number,
    Books:number,
    Job:number
}


const todaysTransactions: TransactionObj = {
    Pizza:-10,
    Books:-30,
    Job:22
}


const todaysNet = (transactions: TransactionObj) :number => {
    let total = 0 
    for (const transaction in transactions ){
        total+=transactions[transaction]
    }
    return total
} 

/////////////////////////////////////////////
interface Student {
    [key:string]:number | string | number[] | undefined
    name:string 

    GPA:number, 
    classes?:number[]
}

const student: Student = {
    name:"John Doe",
    GPA:12, 
    classes:[200, 300]
}


for (const key in student) {
    console.log(`${key}:  ${student[key]}`)
}

// ITERATING WITHOUT SPECIFYING AN INDEX SIGNATURE 
for (const key in student ) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}


for (const key in student) {
    console.log(`${key}: ${student[key as keyof typeof student]}`)
}

const logStudentKey = (student:Student, key: keyof Student) : void  => {
    console.log(`Student: ${student[key]}`)
}

