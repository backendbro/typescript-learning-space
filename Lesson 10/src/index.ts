// UTILITY TYPES 

// Partial 
interface Assignment {
    studentId:string, 
    title:string,
    grade:number,
    verified?:boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>):Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1:Assignment = {
    studentId:"One",
    title:"Undergraduate",
    grade:100
}


console.log(updateAssignment(assign1, {verified:true}))
const assignGraded:Assignment = updateAssignment(assign1, {verified:false})
console.log(assignGraded)


// Required and Readonly 
const recordAssignment = (assign:Required<Assignment>):Assignment => {
    return assign  
}


recordAssignment({...assignGraded, verified:true})

// Record 
const hexColorMap: Record<string, string> = {
    red:"FF0000",
    green:"00FF00",
    blue:"0000FF"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "E"

const finalGrades: Record <Students, LetterGrades> = {
    Sara:"B",
    Kelly: "E"
}

console.log(finalGrades.Kelly)

interface Grades {
    assign1:number, 
    assign2:number 
}

const gradeData: Record <Students, Grades> = {
    Sara:{assign1:85, assign2:90},
    Kelly:{assign1:98, assign2:70}
}
console.log(gradeData.Sara.assign1)



// PICK AND OMIT 
type AssignResult = Pick <Assignment, "studentId" | "grade">
const score:AssignResult = {
    studentId:"Stu1",
    grade:100 
}
console.log(score)


type AssignPreview = Omit <Assignment, "verified" | "studentId">
const preview:AssignPreview = {
    title:"Big man",    
    grade:300
}
console.log(preview)


// Exclude and Extract => They work with type literals 
type adjustedGrade = Exclude <LetterGrades, "E">
type highGrades = Extract <LetterGrades, "B" | "D">


// // Nonullable 
// type AllPossibleGrades = 'Dave' | 'John' | null | undefined 
// type NamesOnly = NonNullable <AllPossibleGrades>

// // I guess we can use the exclude to perform 
// type NamesOnlyExtract = Exclude <AllPossibleGrades, null | undefined>


// Nonullable
type NameList = 'MIke' | 'Cena' | null | undefined
type NamesOnly = NonNullable <NameList>
// I guess we can use the exclude here
type NamesOnlyExtract = Exclude <NameList, null | undefined>


// ReturnType 
//type newAssign = {title:string, points:number }
const createNewAssign = (title:string, points:number) => {
    return {title, points}
}

console.log(createNewAssign("Namaste", 12))
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign:NewAssign = createNewAssign("Fellas", 12)
console.log(tsAssign)
 

// Parameters 
type AssignParams = Parameters <typeof createNewAssign> 
const assignArgs: AssignParams = ["Generic", 200]
const tsAssign2: NewAssign = createNewAssign (...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise 

