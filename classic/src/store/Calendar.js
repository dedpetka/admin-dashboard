Ext.define('App.store.Calendar', {
    extend: 'Ext.data.Store',

    // requires: [
    //     // 'App.store.test.Proxy',
    //     'Ext.data.identifier.Uuid'
    // ],

    alias: 'store.Calendar',
    // model: 'App.model.test.Changes',

    fields: [
        {
            type: 'int',
            name: 'week'
        },
        {
            type: 'string',
            name: 'type'  // change | vacation
        },
        {
            type: 'string',
            name: 'date'
        },
        // {
        //     name: 'subscription'
        // },
        {
            type: 'string',
            name: 'personId',
            reference: 'App.model.test.Person'
        },
        // {
        //     type: 'boolean',
        //     name: 'isActive'
        // },
        // {
        //     name: 'profile_pic'
        // }
    ],

    autoSync: true,
    autoLoad: true,

    //TODO: VK - EXTRA failed creation!
    proxy: {
        type: 'indexeddb',
        // dbName: 'dentist-dashboard',
        objectStoreName: "Calendar",
        indices: ["week"]
    }
});