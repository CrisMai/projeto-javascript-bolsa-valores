
class Negociacao {

    constructor(data, quantidade, valor) {  //O underline evidencia que essas propriedades só podem ser acessadas pelos próprios métodos da classe.

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}