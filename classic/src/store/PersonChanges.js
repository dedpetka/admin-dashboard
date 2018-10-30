Ext.define('App.store.PersonChanges', {
    extend: 'Ext.data.Store',

    // alias: 'store.teststore',

    model: 'App.model.Model',

    // sorters: {
    //     direction: 'ASC',
    //     property: 'fullname'
    // },


    autoSync: true,
    autoLoad: true,

    proxy: {
        // type: 'idb',
        // dbName: 'dentist-dashboard',
        // objectStoreName: 'company',
        // dbVersion: '1.19',

        type: 'indexeddb',

        indices: ["id"],
        objectStoreName: "Person"


        // writer: {
        //     type: 'json'
        //     // writeAllFields: false
        // },
        // url: '~api/search/users'
    }
});