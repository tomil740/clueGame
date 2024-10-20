import {dao} from "../backEnd/dao.js";
import {drawData} from "../domain/drawData.js";

 
class Game{
    #drawObj;
    #serverDaoObj;
    constructor(){
        this.#serverDaoObj = dao;
        this.#drawObj = drawData;
        this.#initalizeDrawDataObj();
    }

    #initalizeDrawDataObj(){
        console.log(this.#serverDaoObj.mainRoute);

        this.#serverDaoObj.getPlayersList().then((data)=>this.#drawObj.initPepole(data));
    }

}

export const game = new Game();