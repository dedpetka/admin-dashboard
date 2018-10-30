Ext.define('App.view.admin.ux.WeekColumn', {
    extend: 'Ext.grid.column.Column',
    xtype : "admin-ux-week-col",

    text        : 'Today <>  26.09 - 30.09  Week   | This Week | Next Week |',
    menuDisabled: true,
    items       : [{
        xtype     : 'trigger',
        autoSearch: true
    }],

    defaults: {
        menuDisabled: true,
        resizable   : false,
        width       : 76,
        xtype       : 'actioncolumn',
        align       : 'center',
        cls         : "content-column",
        tdCls       : "admin-ux-week-col-day",
        items       : [
            {
                xtype  : 'button',
                iconCls: 'x-fa fa-edit',
                width  : "100%",
                flex   : 1
            },
            // {
            //     xtype: 'button',
            //     iconCls: 'x-fa fa-plus-square'
            // },
            {
                xtype  : 'button',
                iconCls: 'x-fa fa-plus-circle'
            }
        ]

        //TODO: VK - EXTRA add tip with free time
    },
    columns : [{
        xtype    : "gridcolumn",
        text     : 'Change',
        dataIndex: 'email',
        cls      : "",

        width   : 75,
        sortable: true,
        items   : null,
        editor: {
            xtype: "combo",
            store: "employees-changes",
            queryMode: 'local',
            displayField: 'name',
            matchFieldWidth: false,
            listConfig: {
                itemTpl: [
                    '<div data-qtip="Period: {period}">{name} ({start:date("H:i")} - {end:date("H:i")})</div>'
                ]
            }
            // valueField: 'abbr',
            // store: {
            //     type: "employees-changes"
            // }
        }
        // formatter: 'usMoney'
    },
        {
            // xtype    : 'datecolumn',
            // cls      : 'content-column',
            // width    : 76,
            dataIndex: 'joinDate',
            text     : 'Пн 26<span style="opacity: 0.5;">.09</span>',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            // xtype    : 'datecolumn',
            // cls      : 'content-column',
            // width    : 60,
            dataIndex: 'joinDate',
            text     : 'Вт 27',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            // xtype    : 'datecolumn',
            // cls      : 'content-column',
            // width    : 60,
            dataIndex: 'joinDate',
            text     : 'Ср 28.09',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            // xtype    : 'datecolumn',
            // cls      : 'content-column',
            // width    : 60,
            dataIndex: 'joinDate',
            text     : 'Чт 29.09',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            // xtype    : 'datecolumn',
            // cls      : 'content-column',
            // width    : 60,
            dataIndex: 'joinDate',
            text     : 'Пт 30.09',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        //
        //     {
        //     text: 'Change',
        //     dataIndex: 'email',
        //
        //     width: 80,
        //     sortable: true,
        //     // renderer: 'renderChange'
        // }, {
        //     text: '% Change',
        //     dataIndex: 'email',
        //
        //     width: 100,
        //     sortable: true,
        //     // renderer: 'renderPercent'
        // }
    ]
});