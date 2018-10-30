Ext.define('App.store.Employees', {
    extend: 'Ext.data.Store',

    // requires: [
    //     // 'App.store.test.Proxy',
    //     'Ext.data.identifier.Uuid'
    // ],
    requires: [
        //TODO: VK - EXTRA
        'App.ux.data.proxy.IndexedDB'
    ],

    alias: 'store.employees',
    model: 'App.model.Employee',
    groupField: 'department',

    autoSync: true,
    // autoLoad: true,

    proxy: {
        type           : 'indexeddb',
        // dbName         : 'dentist-dashboard',
        // objectStoreName: "Employees",
        indices        : ["id"]
    },

    sorters: {
        direction: 'ASC',
        property : 'fullname'
    }
});