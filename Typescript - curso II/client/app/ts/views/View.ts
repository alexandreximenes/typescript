export abstract class View<T>{

        protected _element : JQuery;
    
        constructor(seletor: string){
            this._element = $(seletor);
        }
     
        abstract template(model: T): string;
    
        update(model : T): void{
            this._element.html(this.template(model));
        }
    }