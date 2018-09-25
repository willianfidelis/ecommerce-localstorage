var Pessoa = (function () {
    var id = 1
    return function Pessoa(nome, sobreNome) {
        this.id = id++;
        this.nome = nome;
        this.sobreNome = sobreNome;
    }    
})();

