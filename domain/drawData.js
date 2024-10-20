//const util = require('Util.js')
import {util} from "./Util.js";

class DrawData{
    #questionElement;
    #peoples;
    

    constructor(){
        this.#questionElement = document.querySelector("main section.questionSec");
        this.#peoples = [];
    }

    get peoples(){
        return this.#peoples;
    }

    initPepole(peopleLst){
        this.#peoples = peopleLst;
        const pepole = util.getPepolesName(this.peoples);
        //draw the list
        const menuEle = this.#questionElement.querySelector("select.people");
        pepole.array.forEach(element => {
            const optionele = document.createElement("option");
            optionele.innerHTML = `<option value="${element}">${element}</option>`;
            menuEle.appendChild(optionele);
        });
        
    }
}
export const drawData = new DrawData();