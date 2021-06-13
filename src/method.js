export default class Method {
    constructor(fx, xi, xu, es){
        this._fx = fx;
        this._xi = xi;
        this._xu = xu;
        this._es = es;
    }

    getEs(){
        return(this._es);
    }

    getXi(){
        return(this._xi);
    }

    getXu(){
        return(this._xu);
    }

    _getXr(xi,xu){
        let xr = (xi+xu)/2;
        return(xr);
    }

    _getFxConverted(x){
        return(eval(this._fx));
    }

    static readForm(){
        let inpFx = document.querySelector('#Fx');
        let inpXi = document.querySelector('#Xi');
        let inpXu = document.querySelector('#Xu');
        let inpEs = document.querySelector('#Es');

        let fx = inpFx.value;
        let xi = Number(inpXi.value);
        let xu = Number(inpXu.value);
        let es = Number(inpEs.value);
        if(fx && xi && xu && es){
            inpFx.value="";
            inpXi.value="";
            inpXu.value="";
            inpEs.value="";
            return new Method(fx, xi, xu, es);
        }
        return false; 
    }
}