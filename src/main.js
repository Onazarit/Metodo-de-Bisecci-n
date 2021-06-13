import Iteration from "./iteration.js";
import Method from "./method.js";

class App{
    constructor(){
       this._iteration = new Iteration();
       let btnAdd = document.querySelector("#btnAdd");
       btnAdd.addEventListener("click",this._addMethod);
   }
   _addMethod= () =>{
       
       let method = Method.readForm();

       let added=this._iteration.add(method);
       
   }
}

new App();