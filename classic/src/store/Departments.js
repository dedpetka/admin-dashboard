Ext.define('App.store.Departments', {
    extend: 'Ext.data.Store',

    // requires: [
    //     // 'App.store.test.Proxy',
    //     'Ext.data.identifier.Uuid'
    // ],

    storeId: "departments",
    alias: 'store.employees-departments',
    model: 'App.model.Department',

    autoSync: true,
    autoLoad: true,

    proxy: {
        type: 'indexeddb'
    },

    listeners: {
        load: {
            fn    : function (store) {
                var data;

                if (!store.getCount()) {                  
                    //TODO: VK - EXTRA !   "Terapevt", "Hirurg", "Dantist"
                    data = [{
                        name  : "Terapevt"
                    }, {
                        name  : "Hirurg"
                    }, {
                        name  : "Dantist"
                    }];

                    store.add(data);
                }
            },
            single: true
        }
    }
});