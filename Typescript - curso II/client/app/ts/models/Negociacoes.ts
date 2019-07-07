import { Negociacao } from '../models/Negociacao';
export class Negociacoes{

    // private _negociacoes : Array<Negociacao> = [];
    private _negociacoes : Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    get paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}