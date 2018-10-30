Ext.define('App.view.admin.settings.Panel', {
    extend: 'Ext.panel.Panel',
    xtype : "admin-settings",

    requires: [
        'App.view.widgets.WidgetA',
        'App.view.widgets.WidgetB',
        'App.view.widgets.WidgetC',
        'App.view.widgets.WidgetD',
        'App.view.widgets.WidgetE',
        'App.view.widgets.WidgetF',
        'Ext.slider.Single',
        'Ext.form.field.Display'
    ],

    layout: 'responsivecolumn',

    defaults: {
        xtype: 'container'
    },

    items: [
        {
            xtype  : 'admin-settings-departments',
            userCls: 'big-50 small-100',
            cls    : 'admin-widget shadow',
            height : 500
        },
        {
            xtype  : 'admin-settings-changes',
            userCls: 'big-50 small-100',
            cls    : 'admin-widget shadow',
            height : 500
        },
        //TODO: VK - EXTRA add backups to file and drive!
        {
            xtype  : 'widget-b',
            userCls: 'big-50 small-100'
        },
        {
            xtype  : 'widget-c',
            userCls: 'big-50 small-100'
        },
        {
            xtype  : 'widget-d',
            userCls: 'big-50 small-100'
        }
    ]

});