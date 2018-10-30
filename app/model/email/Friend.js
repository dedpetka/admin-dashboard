Ext.define('App.model.email.Friend', {
    extend: 'App.model.Base',

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'string',
            name: 'thumbnail'
        },
        {
            type: 'boolean',
            name: 'online'
        }
    ]
});
