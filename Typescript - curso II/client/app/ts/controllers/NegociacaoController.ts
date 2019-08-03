//import { MensagemView } from '../views/MensagemView';
//import { NegociacoesView } from '../views/NegociacoesView';

class NegociacaoController{

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    
    importaDados(event: Event){
        
        function isOk(res: Response){
            if(res.ok){
                return res;
            }else{
                throw new Error('Algo ocorreu de errado na requisição');
            }
        }

        fetch('http://localhost:8080/dados')
        .then(res => isOk(res))
        .then(res => res.json)
        .then((dados : NegociacaoParcial[]) => {
                .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                .forEach(negociacao => this._negociacoes.adiciona(negociacao))
                this._mensagemView.update(this._negociacoes);
        }).catch(err => console.log(err));
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