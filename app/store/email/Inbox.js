Ext.define('App.store.email.Inbox', {
    extend: 'Ext.data.Store',

    alias: 'store.inbox',

    model: 'App.model.email.Email',

    pageSize: 20,

    autoLoad: true,

    proxy: {
        type: 'api',
        url: '~api/email/inbox'
    }
});
