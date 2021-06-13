export default class Iteration {
    constructor(){
        this._iterations = [];
        this._table = document.querySelector("#table");
        this._contador = 1;
        this._aux = 0;
        this._aux2 = 1000;
    }

    add(method){
        let xi = this._getXi(method);
        let xu = this._getXu(method);
        this._show(method,xi,xu);
    }

    _show(method,xi,xu,ea){
        let row = this._table.insertRow(-1);
        let colIteration = row.insertCell(0);
        let colXr = row.insertCell(1);
        let colFXr = row.insertCell(2);
        let colEa=row.insertCell(3)

        colIteration.innerHTML = this._contador;
        let Xr = (xi+xu)/2;
        colXr.innerHTML = Xr;
        colFXr.innerHTML = method._getFxConverted(Xr);
        this._iterations.push(Xr);
        if(this._contador > 1){
            colEa.innerHTML = this._getEa(Xr) + "%";
        }

        this._contador++;
        if(this._aux2 > method.getEs()){
            this.aux = Xr;
            this.add(method);
        }

    }

    _getEa(xr){
        let ea = ((xr - this.aux)/xr)*100;
        ea = Number(ea.toFixed(2));
        ea = Math.abs(ea);
        this._aux2 = ea;
        return(ea);
    }

    _getXi(method){
        let xi = method.getXi();
        let fxi = method._getFxConverted(xi);
        this._iterations.forEach(element => {
            let x = element;
            let fxi2 = eval(method._getFxConverted(x));
            if((fxi2 > fxi) && (fxi2<0)){
                xi = x;
            }
            
        });
        return(xi);
    }

    _getXu(method){
        let xu = method.getXu();
        let fxu = method._getFxConverted(xu);
        this._iterations.forEach(element => {
            let x = element;
            let fxu2 = eval(method._getFxConverted(x));
            if((fxu2 < fxu) && (fxu2>0)){
                xu = x;
            }
        });
        return(xu);
    }
    
}