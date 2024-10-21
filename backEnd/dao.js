
/*
the dao object will be used as a single connection between our app and the server
*/
class Dao{
    #mainRoute
    constructor(){
        this.#mainRoute = "http://localhost:3000";
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

    async makeAQuestion(playerName,time){
        //get the matcehd player room at the time
        const request = new Request(`${this.mainRoute}/question/1`, {
            method: "POST",
            body: JSON.stringify({
                hour:time 
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            });
          const response =  await fetch(request);
          const data = await response.json()
          console.log(data);
         
        //get the victim room at the tiem
    }
}

export const dao = new Dao();
dao.makeAQuestion("dsfs",12);
//dao.getPlayersList().then((data)=>console.log(data));