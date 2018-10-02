window.onload = function () {
    var tablePessoas = document.getElementById('tablePessoas');
    pessoasController.getAll().forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td>' + item.nome + '</td>';
        row += '<td>' + item.sobreNome + '</td>';
        row += '<td>';
        row += '<a href="Editar?id=' + item.id + '">Editar</a>';
        row += ' | ';
        row += '<a>Deletar</a>';
        row += '</td>';
        row += '</tr>';
        tablePessoas.innerHTML += row;
    }
}