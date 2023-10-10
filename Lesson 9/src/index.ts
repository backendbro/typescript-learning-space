const echo = <T> (arg:T):T => arg 

const isObj = <T> (arg:T):boolean => {
    return (typeof arg === "object")
}
// console.log(isObj ({name:"Ade"}))
// console.log(isObj("string"))


interface HasId {
id:number 
}

const processUser = <T extends HasId> (prop:T) :T => {
    return prop 
}
console.log(processUser({id:20}))

const getUsersProperty = <T extends HasId, K extends keyof T> (
    user:T[], key:K 
):T[K][] => {
    return user.map(u => u[key])
}

const userArray = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
]

console.log(getUsersProperty(userArray, "address"))
console.log(getUsersProperty(userArray, "email")) 

////////////////////////////////////////////////
class StateObject<T> {
    private data:T 

    constructor (value:T) {
        this.data = value 
    }

    set state (value:T) {
        this.data = value 
    }

    get state ():T {
        return this.data 
    }
}

const store = new StateObject<string | number | boolean >("John")
console.log(store.state)
store.state = 12 
console.log(store.state)