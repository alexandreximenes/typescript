class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    importaDados(event) {
        function isOk(res) {
            if (res.ok) {
                return res;
            }
            else {
                throw new Error('Algo ocorreu de errado na requisição');
            }
        }
        fetch('http://localhost:8080/dados')
            .then(res => isOk(res))
            .then(res => console.log(res.json));
    }
    adiciona(event) {
        event.preventDefault();
        let negociacao = new Negociacao(new Date(this._inputData.value.toString().replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Dados salvo com sucesso!!!");
    }
}
