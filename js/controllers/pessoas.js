var pessoaControllers = (function () {
    var pessoas = localStorage.getItem('pessoas');
    if (pessoas) pessoas = JSON.parse(pessoas);
    pessoas = pessoas || [];

    function updateStorage() {
        var strPessoas = JSON.stringify(pessoas);
        localStorage.setItem('pessoas', strPessoas);
    }

    function change(item, action) {
        if (!(item instanceof Pessoa)) {
            alert('Ação não permitida');
            return;
        }
        action();
        updateStorage();
    }

    return {
        get: function (prop, value) {
            if (prop && value)
                return pessoas.find(p => p[prop] === value);
            return pessoas;
        },
        add: function (item) {
            change(item, function () {
                pessoas.push(item);
            });
        },
        remove: function (item) {
            change(item, function () {
                var index = pessoas.findIndex(p => p.id === item.id);
                pessoas = pessoas.splice(index);
            });
        },
        update: function (item) {
            change(item, function () {
                var p = pessoas.find(p => p.id === item.id);
                Object.assign(p, item);
            });
        }
    }
})();