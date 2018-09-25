window.onload = function () {
    var txtNome = document.getElementById('txtNome');
    var txtSobreNome = document.getElementById('txtSobreNome');
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var pessoa = new Pessoa(txtNome.value, txtSobreNome.value);
            pessoaControllers.add(pessoa);
        });
}