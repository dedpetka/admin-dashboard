Ext.define('App.view.admin.Employees2', {
    extend: 'Ext.grid.Panel',
    xtype : 'admin-employees2',

    requires: [
        //TODO: VK - EXTRA
        // 'DBProxies.data.proxy.IndexedDB',
        // 'App.store.test.Person',

        "Ext.grid.plugin.RowEditing",

        'Ext.grid.Panel',
        // 'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],

    controller: 'test',
    // viewModel: {
    //     type: 'searchresults'
    // },

    cls      : 'shadow',
    activeTab: 0,
    margin   : 20,

    // xtype: 'gridpanel',
    // cls: 'user-grid',
    title: 'User Results',
    // routeId: 'user',
    // bind: '{usersResults}',

    store: {type: "teststore"},

    // selModel: 'rowmodel',
    // plugins: {
    //     ptype: 'rowediting',
    //     clicksToEdit: 1
    // },

    plugins: [{
        ptype             : 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel        : false
    }],


    // store: {
    //     // extend: 'Ext.data.Model',
    //
    //     proxy: {
    //         type     : 'indexeddb',
    //         // allConfig: {
    //         //     cloud: false
    //         // },
    //         // proxies  : [
    //         //     {
    //         //         type: 'indexeddb'
    //         //     }
    //         // ]
    //     },
    //
    //     fields: [
    //         "fullname",
    //         "email"
    //     ]
    // },

    // autoLoad: true,

    // scrollable: false,
    columns    : [
        {xtype: 'rownumberer'},
        {
            xtype    : 'gridcolumn',
            width    : 60,
            dataIndex: 'cabinet',
            align    : 'center',
            text     : '#',
            editor   : {
                xtype   : 'numberfield',
                value   : 1,
                maxValue: 1000,
                minValue: 0
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        // {
        //     xtype    : 'gridcolumn',
        //     // renderer: function(value) {
        //     //     return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
        //     // },
        //     width    : 75,
        //     dataIndex: 'profile_pic',
        //     text     : 'User',
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false     /**/
        //     }
        // },
        {
            xtype    : 'gridcolumn',
            cls      : 'content-column',
            dataIndex: 'fullname',
            text     : 'Name',
            flex     : 1,
            editor   : {
                // defaults to textfield if no xtype is supplied
                allowBlank: false
            }
        },



        {
            // xtype    : 'datecolumn',
            cls      : 'content-column',
            width    : 60,
            dataIndex: 'joinDate',
            text     : '26.09',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            // xtype    : 'datecolumn',
            cls      : 'content-column',
            width    : 60,
            dataIndex: 'joinDate',
            text     : '27.09',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            // xtype    : 'datecolumn',
            cls      : 'content-column',
            width    : 60,
            dataIndex: 'joinDate',
            text     : '28.09',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            // xtype    : 'datecolumn',
            cls      : 'content-column',
            width    : 60,
            dataIndex: 'joinDate',
            text     : '29.09',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            // xtype    : 'datecolumn',
            cls      : 'content-column',
            width    : 60,
            dataIndex: 'joinDate',
            text     : '30.09',
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            xtype    : 'gridcolumn',
            cls      : 'content-column',
            dataIndex: 'subscription',
            text     : 'Vacation',
            flex     : 1,
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        {
            xtype    : 'gridcolumn',
            cls      : 'content-column',
            dataIndex: 'email',
            text     : 'Department',
            flex     : 1,
            editor   : {
                // defaults to textfield if no xtype is supplied
                // allowBlank: false
            }
        },
        // {
        //     // xtype    : 'datecolumn',
        //     cls      : 'content-column',
        //     width    : 120,
        //     dataIndex: 'id',
        //     text     : 'identifier',
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },


        // {
        //     xtype: 'actioncolumn',
        //     items: [
        //         {
        //             xtype: 'button',
        //             iconCls: 'x-fa fa-pencil'
        //         },
        //         {
        //             xtype: 'button',
        //             iconCls: 'x-fa fa-close'
        //         },
        //         {
        //             xtype: 'button',
        //             iconCls: 'x-fa fa-ban'
        //         }
        //     ],
        //
        //     cls: 'content-column',
        //     width: 120,
        //     dataIndex: 'bool',
        //     text: 'Actions',
        //     tooltip: 'edit '
        // }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock : 'top',
            // itemId: 'userPaginationToolbar',
            // displayInfo: true,
            // bind: '{usersResults}'
            items: [
                {
                    xtype   : "textfield",
                    emptyText: "Type to filter"
                },
                "->",
                {
                    text   : "Add",
                    handler: "onAddClick"
                },
                {
                    text: "Edit",
                    // handler: "onRemoveClick"
                },
                {
                    text   : "Remove",
                    handler: "onRemoveClick"
                }
            ]
        },
        // {
        //     xtype      : 'pagingtoolbar',
        //     dock       : 'bottom',
        //     itemId     : 'userPaginationToolbar',
        //     displayInfo: true,
        //     bind       : '{usersResults}'
        // }
    ],

    listeners: {
        afterrender: "onAfterRender"
    }

});