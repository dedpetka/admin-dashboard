Ext.define('App.store.search.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.searchusers',

    model: 'App.model.search.User',

    proxy: {
        type: 'api',
        url: '~api/search/users'
    },

    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'fullname'
    }
});
