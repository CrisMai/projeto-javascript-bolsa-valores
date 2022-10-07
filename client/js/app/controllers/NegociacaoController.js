
class NegociacaoController {

    adiciona(event) {
        event.preventDefault();
        
        let $ = document.querySelector.bind(document); //método bind mantém a associação do querySelector com o document .
        let inputData = $("#data");
        let inputQuantidade = $("#quantidade");
        let inputValor = $("#valor");

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
    }
}