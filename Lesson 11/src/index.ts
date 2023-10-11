interface User {
    id:number, 
    name:string,
    username:string,
    email:string 
}

const fetchUsers = async (): Promise <User[]> => {
    const data = await fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => { 
        return res.json()
    })
    .catch(err => {
        if(err instanceof Error) console.log(err.message)
    })

    return data 
}



//type assignType = Awaited<ReturnType <typeof fetchUsers>>
fetchUsers().then(users => console.log(users))
//console.log(result)