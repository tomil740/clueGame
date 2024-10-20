class Util{
    constructor(){

    }

    getPepolesName(pepoles){
        return pepoles.map((obj)=>obj.name);
    }
}

export const util = new Util();