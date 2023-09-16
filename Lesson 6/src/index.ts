class Coder {


    constructor (
    public name:string, 
    public music:string, 
    private age:number, // This property can only be accessed inside this CLASS
    protected lang:string = "TypeScript" //can be accessed this prop from a subclass
        ) {
        this.name = name 
        this.music = music 
        this.age = age 
        this.lang = lang 
    }

    public getAge () {
        return `Hello, I'm ${this.age}` 
    }
}

class Coders {
    constructor (
        public name:string 
    ){
        this.name = name 
    }

}


//const Dave = new Coder ("Dave", "Rock", 42)
//console.log(Dave)
//console.log(Dave.getAge())

class WebDev extends Coder {
    constructor (
        public computer:string,
        name:string, 
        music:string, 
        age:number 
        ) {
        super (name, music, age)
        this.computer = computer 
    }

    public getLang () {
        return `I write ${this.lang}`
    }
} 

// const Sara = new WebDev ("Linux", "Sara", "RnB", 23)
// console.log(Sara.getLang())

interface Musician {
    name:string,
    instrument:string,
    play(action:string):string 
}

class Guitarist implements Musician {
    constructor (
        public name:string, 
        public instrument:string
        ){
            this.name = name 
            this.instrument = instrument
        }

        public play (action:string):string {
            return `My name is ${this.name} I play the ${this.instrument}. ${action}`
        }
}

// const artist = new Guitarist ("Los Palos", "Guitar")
// console.log(artist.play("Hell Yeah!"))

class Peeps {
    static count: number = 0 

    static getCount () : number {
        return Peeps.count
    }

    public id:number; 
    constructor (public name:string){
        this.name = name 
        this.id = ++Peeps.count
    }
}

// const John = new Peeps("John")
// const Sara = new Peeps("Sara")
// const Thereson = new Peeps ("Thereson")

// console.log(Thereson.id)

class Bands {
    private dataState:string[]
     
    constructor() {
        this.dataState = []
    }

    public get data (): string [] {
        return this.dataState
    }

    public set data (value:string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")){
            this.dataState = value
            return          
        }else {
            throw new Error("Param is not an array of strings")
        }
    }
}

const MyBands = new Bands ()
MyBands.data = ['Niel Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)