Ext.define('App.store.search.Results', {
    extend: 'Ext.data.Store',

    alias: 'store.searchresults',

    model: 'App.model.search.Result',

    proxy: {
        type: 'api',
        url: '~api/search/results'
    },

    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'title'
    }
});
