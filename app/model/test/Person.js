Ext.define('App.model.test.Person', {
    extend: 'App.model.Base',

    requires: ['Ext.data.identifier.Uuid'],
    identifier: 'uuid',

    fields: [
        {
            type: 'int',
            name: 'cabinet'
        },
        {
            type: 'string',
            name: 'fullname'
        },
        {
            type: 'string',
            name: 'email'
        },
        {
            name: 'subscription'
        },
        {
            type: 'date',
            name: 'joinDate'
        },
        {
            type: 'boolean',
            name: 'isActive'
        },
        {
            name: 'profile_pic'
        }
    ],

    // proxy: {
    //     type: 'indexeddb',
    //     // url: '~api/search/users'
    // }
});
