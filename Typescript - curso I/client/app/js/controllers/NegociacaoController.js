class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        let negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        console.log(negociacao);
        this._negociacoes.paraArray().forEach(n => {
            console.log(n.data);
            console.log(n.quantidade);
            console.log(n.valor);
            console.log(n.volume);
        });
    }
}
