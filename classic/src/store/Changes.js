Ext.define('App.store.Changes', {
    extend: 'Ext.data.Store',

    // requires: [
    //     // 'App.store.test.Proxy',
    //     'Ext.data.identifier.Uuid'
    // ],

    storeId: "employees-changes",
    alias: 'store.employees-changes',
    model: 'App.model.Change',

    autoSync: true,
    autoLoad: true,
    autoSort: true,

    proxy: {
        type: 'indexeddb'
    },

    sorters: [
        {
            property: "start",
            direction: "ASC"
        }
    ],

    listeners: {
        load: {
            fn    : function (store) {
                var data;

                if (!store.getCount()) {                  
                    //TODO: VK - EXTRA !
                    data = [{
                        name  : "1 First",
                        start : "08:00",
                        end   : "13:00",
                        period: 20
                    }, {
                        name  : "2 Second",
                        start : "14:00",
                        end   : "19:00",
                        period: 20
                    }];

                    store.add(data);
                }
            },
            single: true
        }
    }
});