Ext.define('App.store.faq.FAQ', {
    extend: 'Ext.data.Store',
    alias: 'store.faq',

    model: 'App.model.faq.Category',

    proxy: {
        type: 'api',
        url: '~api/faq/faq'
    }
});
