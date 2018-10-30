Ext.define('App.store.email.Friends', {
    extend: 'Ext.data.Store',

    alias: 'store.emailfriends',

    model: 'App.model.email.Friend',

    autoLoad: true,

    proxy: {
        type: 'api',
        url: '~api/email/friends'
    },

    sorters: {
        direction: 'DESC',
        property: 'online'
    }
});
