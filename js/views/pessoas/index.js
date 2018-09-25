window.onload = function () {
    var pessoas = pessoaControllers.get();
    var tablePessoas = document.getElementById('tablePessoas');

    pessoas.forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td>' + item.nome + '</td>';
        row += '<td>' + item.sobreNome + '</td>';
        row += '<td>';
        row += '<a>Editar</a>';
        row += ' | ';
        row += '<a>Deletar</a>';
        row += '</td>';
        row += '</tr>';
        tablePessoas.innerHTML += row;
    }
}