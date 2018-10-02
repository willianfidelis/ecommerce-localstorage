var Produto = (function () {
    var id = 1
    return function Produto(o) {
        this.id = id++;
        o = o || {};
        this.nome = o.nome;
        this.sobreNome = o.sobreNome;
        this.dataNascimento = o.dataNascimento;
    }    
})();

var produtosController = controller('produtos', Produto);