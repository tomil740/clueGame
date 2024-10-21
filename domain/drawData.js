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

    set peoples(input){
        this.#peoples = input;
    }

    get peoples(){
        return this.#peoples;
    }

    getPlayerId(name){
        let res = 0;
        for(let someInd = 0; someInd < this.#peoples.length; someInd++){
            if(name == this.#peoples[someInd].name){
                res = this.#peoples[someInd].id;
            }
        }
        return res;
    }

    initPepole(peopleLst,quetionCallBack){
        this.#peoples = peopleLst;
        const pepole = util.getPepolesName(this.peoples);
        //draw the list
        const menuEle = this.#questionElement.querySelector("select#people");
        for(let item of pepole){
            const optionele = document.createElement("option");
            optionele.innerHTML = `<option value="${item}">${item}</option>`;
            menuEle.appendChild(optionele);
        }
        const timeInput = this.#questionElement.querySelector('input[type="time"]');
        timeInput.value = '13:12';
        const questionBut = this.#questionElement.querySelector('form button.submit');
        questionBut.addEventListener("click",(e)=>{
            e.preventDefault();
            const theId = this.getPlayerId(menuEle.value);
            const hour = timeInput.value.slice(0,timeInput.value.indexOf(':'));
            quetionCallBack(theId,hour);
            })
        
    }
}
export const drawData = new DrawData();