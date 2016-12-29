/**
 * Created by blue on 2016/12/28.
 */
export default class Util {
    constructor() {
    }

    static isEmptyObject(obj) {
        for(let n in obj){
            return false;
        }
        return true;
    }
}