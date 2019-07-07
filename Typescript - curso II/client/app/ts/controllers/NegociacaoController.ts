import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negociacao';

export class NegociacaoController{

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    
    adiciona(event: Event){
        event.preventDefault();
        let negociacao = new Negociacao(
            new Date(this._inputData.value.toString().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value),
            );
            
            this._negociacoes.adiciona(negociacao);
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update("Dados salvo com sucesso!!!");
        }
    }