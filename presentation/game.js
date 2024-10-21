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
        this.#serverDaoObj.getPlayersList().then((data)=>this.#drawObj.initPepole(data,this.#makeQuestion));
    }

    //Actions callBack functions:
    #makeQuestion(playerName,time){
              
    }

}

export const game = new Game();