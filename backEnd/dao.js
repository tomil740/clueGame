
/*
the dao object will be used as a single connection between our app and the server
*/
class Dao{
    #mainRoute
    constructor(){
        this.#mainRoute = "http://localhost:3100";
    }

    get mainRoute(){
        return this.#mainRoute;
    }

    getPlayersList(){
       return new Promise((resolve,reject)=>{
            fetch(`${this.mainRoute}/people`).then(
                (response)=> {response.json().then((data)=>
                    resolve(data)
                )
                }
            )
        })
    }
}

export const dao = new Dao();
//dao.getPlayersList().then((data)=>console.log(data));