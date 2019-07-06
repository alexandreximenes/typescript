class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    get paraArray() {
        return [].concat(this._negociacoes);
    }
}
