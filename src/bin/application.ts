import Framework from "./framework";

export default class Application extends Framework {

    constructor(){
        super()
        this.config('dev');
        console.clear()
    }
       
}