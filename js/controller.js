function controller(key, obj) {
    var lista = localStorage.getItem(key);
    if (lista) lista = JSON.parse(lista);
    lista = lista || [];

    lista = lista.map(i => new obj(i));

    function updateStorage() {
        var str = JSON.stringify(lista);
        localStorage.setItem(key, str);
    }

    function change(item, action) {
        if (!(item instanceof obj)) {
            alert('Ação não permitida');
            return;
        }
        action();
        updateStorage();
    }

    return {
        getAll: function (prop, value) {
            if (prop && value)
                return lista.filter(p => p[prop] === value);
            return lista;
        },
        get: function (prop, value) {
            if (prop && value)
                return lista.find(p => p[prop] === value);
        },
        add: function (item) {
            change(item, function () {
                lista.push(item);
            });
        },
        remove: function (item) {
            change(item, function () {
                var index = lista.findIndex(p => p.id === item.id);
                lista = lista.splice(index);
            });
        },
        update: function (item) {
            change(item, function () {
                var p = lista.find(p => p.id === item.id);
                Object.assign(p, item);
            });
        }
    }
};