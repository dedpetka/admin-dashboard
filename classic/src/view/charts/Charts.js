Ext.define('App.view.charts.Charts', {
    extend: 'Ext.container.Container',
    xtype: 'charts',

    requires: [
        'App.view.charts.Area',
        'App.view.charts.Bar',
        'App.view.charts.ChartsModel',
        'App.view.charts.Gauge',
        'App.view.charts.Pie3D',
        'App.view.charts.Polar',
        'App.view.charts.Stacked',
        'Ext.ux.layout.ResponsiveColumn'
    ],

    viewModel: {
        type: 'charts'
    },

    layout: 'responsivecolumn',

    defaults: {
        defaults: {
            animation : !Ext.isIE9m && Ext.os.is.Desktop
        }
    },

    items: [
        {
            xtype: 'chartsareapanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartspie3dpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartspolarpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsstackedpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsbarpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsgaugepanel',
            userCls: 'big-50 small-100'
        }
    ]
});
