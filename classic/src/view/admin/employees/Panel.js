Ext.define('App.view.admin.employees.Panel', {
    extend: 'Ext.grid.Panel',
    xtype : 'admin-employees',

    requires: [
        //TODO: VK - EXTRA
        // 'DBProxies.data.proxy.IndexedDB',
        // 'App.store.test.Person',

        'App.view.admin.ux.WeekColumn',

        // "Ext.grid.plugin.RowEditing",
        // 'Ext.grid.RowNumberer',

        'Ext.grid.feature.Grouping',

        // 'Ext.grid.Panel',
        // 'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],

    controller: 'employees',
    // viewModel: {
    //     type: 'searchresults'
    // },

    features: [{
        ftype         : 'grouping',
        // startCollapsed: true,
        groupHeaderTpl: [
            '{columnName}: {name:this.formatName} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
            {
                formatName: function (name) {
                    // return Ext.String.trim(name);
                    return Ext.getStore("departments").getById(name).get("name");
                }
            }
        ]
    }],
    // collapsible: true,
    // collapseFirst: false,

    cls   : 'shadow',
    // activeTab: 0,
    margin: 1,


    // xtype: 'gridpanel',
    // cls: 'user-grid',
    // title: 'User Results',
    // routeId: 'user',
    // bind: '{usersResults}',

    store: {type: "employees"},

    // selModel: 'rowmodel',
    // plugins: {
    //     ptype: 'rowediting',
    //     clicksToEdit: 1
    // },

    // plugins: [{
    //     ptype             : 'rowediting',
    //     clicksToMoveEditor: 1,
    //     autoCancel        : false
    // }],


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


    columnLines: true,
    // There is no asymmetric data, we do not need to go to the expense of synching row heights
    // syncRowHeight: false,
    // enableLocking: false,

    // autoLoad: true,

    // scrollable: false,
    columns: [
        // {xtype: 'rownumberer'},
        {
            xtype    : 'gridcolumn',
            width    : 70,
            locked   : true,
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
            // flex     : 1,
            width    : 240,
            locked   : true,
            editor   : {
                // defaults to textfield if no xtype is supplied
                allowBlank: false
            }
        },
        //TODO: VK - EXTRA  join with name and do composit editor?
        {
            xtype    : 'gridcolumn',
            cls      : 'content-column',
            dataIndex: 'department',
            text     : 'Department',
            // flex     : 1,
            //TODO: VK - EXTRA !
            // hidden   : true,
            width    : 100,
            renderer : function (value) {
                return Ext.getStore("departments").getById(value).get("name");
            },
            // locked: true,
            editor: {
                xtype: "combo",
                store: "departments",
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                matchFieldWidth: false,
                // listConfig: {
                //     itemTpl: [
                //         '<div data-qtip="Period: {period}">{name} ({start:date("H:i")} - {end:date("H:i")})</div>'
                //     ]
                // },
                allowBlank: false
                // valueField: 'abbr',
                // store: {
                //     type: "employees-changes"
                // }
            }
        },
        {
            xtype: "admin-ux-week-col"
        },
        //TODO: VK - EXTRA 
        // {
        //     xtype : "admin-ux-week-col"
        // },

        // {
        //     xtype    : 'gridcolumn',
        //     cls      : 'content-column',
        //     dataIndex: 'email',
        //     lockable: false,
        //     // text     : 'Week',
        //     flex     : 1,
        //     // items: [{
        //     //     xtype: 'trigger',
        //     //     autoSearch: true
        //     // }],
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },
        // {
        //     xtype    : 'gridcolumn',
        //     cls      : 'content-column',
        //     dataIndex: 'email',
        //     text     : 'Change',
        //     flex     : 1,
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },


        // {
        //     // xtype    : 'datecolumn',
        //     cls      : 'content-column',
        //     width    : 60,
        //     dataIndex: 'joinDate',
        //     text     : '26.09',
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },
        // {
        //     // xtype    : 'datecolumn',
        //     cls      : 'content-column',
        //     width    : 60,
        //     dataIndex: 'joinDate',
        //     text     : '27.09',
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },
        // {
        //     // xtype    : 'datecolumn',
        //     cls      : 'content-column',
        //     width    : 60,
        //     dataIndex: 'joinDate',
        //     text     : '28.09',
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },
        // {
        //     // xtype    : 'datecolumn',
        //     cls      : 'content-column',
        //     width    : 60,
        //     dataIndex: 'joinDate',
        //     text     : '29.09',
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },
        // {
        //     // xtype    : 'datecolumn',
        //     cls      : 'content-column',
        //     width    : 60,
        //     dataIndex: 'joinDate',
        //     text     : '30.09',
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },
        // {
        //     xtype    : 'gridcolumn',
        //     cls      : 'content-column',
        //     dataIndex: 'subscription',
        //     text     : 'Vacation',
        //     flex     : 1,
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },
        // {
        //     xtype    : 'gridcolumn',
        //     cls      : 'content-column',
        //     dataIndex: 'email',
        //     text     : 'Department',
        //     flex     : 1,
        //     editor   : {
        //         // defaults to textfield if no xtype is supplied
        //         // allowBlank: false
        //     }
        // },

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
        //TODO: VK - EXTRA add ability to hide from view?
        {
            xtype: 'actioncolumn',
            align: 'center',
            items: [
                {
                    xtype  : 'button',
                    iconCls: 'x-fa fa-pencil'
                },
                {
                    xtype  : 'button',
                    iconCls: 'x-fa fa-close'
                },
                {
                    xtype  : 'button',
                    iconCls: 'x-fa fa-ban'
                }
            ],

            cls  : 'content-column',
            width: 120,

            dataIndex: 'bool',
            text     : 'Actions',
            tooltip  : 'edit '
        }
    ],

    // viewModel: {
    //     data: {
    //         groupBy: null
    //     },
    //     // stores: {
    //     //     restaurants: {
    //     //         type: 'restaurants',
    //     //         autoLoad: false,
    //     //         listeners: {
    //     //             groupchange: 'onGroupChange',
    //     //             buffer: 100
    //     //         }
    //     //     }
    //     // }
    // },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock : 'top',
            // itemId: 'userPaginationToolbar',
            // displayInfo: true,
            // bind: '{usersResults}'
            items: [

                {
                    xtype    : "textfield",
                    emptyText: "Type to filter",
                    width    : 300
                },
                {
                    // type: 'minus',
                    enableToggle: true,
                    handler     : 'onToggleAll',
                    tooltip     : 'Toggle Group',
                    iconCls     : 'x-fa fa-eye',
                    pressed     : true,
                    reference   : "enableGroups"
                    // bind: {
                    //     hidden: '{!groupBy}'
                    // }
                },
                //TODO: VK - EXTRA do one btn!
                {
                    // type: 'minus',
                    handler: 'onCollapseAll',
                    tooltip: 'Collapse all groups',
                    iconCls: 'x-fa fa-minus',
                    bind   : {
                        disabled: '{!enableGroups.pressed}'
                    }
                },
                {
                    // type: 'plus',
                    handler: 'onExpandAll',
                    tooltip: 'Expand all groups',
                    iconCls: 'x-fa fa-plus',
                    bind   : {
                        disabled: '{!enableGroups.pressed}'
                    }
                },
                "->",
                {
                    text   : "Add",
                    handler: "onAddClick",
                    iconCls: 'x-fa fa-plus'
                },
                {
                    text   : "Edit",
                    iconCls: 'x-fa fa-pencil',
                    handler: "onEditClick"
                },
                {
                    text   : "Remove",
                    handler: "onRemoveClick",
                    iconCls: 'x-fa fa-minus'
                }
            ]
        },
        // {
        //     xtype: 'toolbar',
        //     dock : 'left',
        //     // itemId: 'userPaginationToolbar',
        //     // displayInfo: true,
        //     // bind: '{usersResults}'
        //     items: [
        //         {
        //             // type: 'minus',
        //             enableToggle: true,
        //             handler: 'onToggleAll',
        //             tooltip: 'Toggle Group',
        //             iconCls: 'x-fa fa-eye',
        //             pressed: true,
        //             reference: "enableGroups"
        //             // bind: {
        //             //     hidden: '{!groupBy}'
        //             // }
        //         },
        //         {
        //             // type: 'minus',
        //             handler: 'onCollapseAll',
        //             tooltip: 'Collapse all groups',
        //             iconCls: 'x-fa fa-minus',
        //             bind: {
        //                 disabled: '{!enableGroups.pressed}'
        //             }
        //         },
        //         {
        //             // type: 'plus',
        //             handler: 'onExpandAll',
        //             tooltip: 'Expand all groups',
        //             iconCls: 'x-fa fa-plus',
        //             bind: {
        //                 disabled: '{!enableGroups.pressed}'
        //             }
        //         },
        //
        //
        //     ]
        // },
        {
            xtype      : 'pagingtoolbar',
            dock       : 'bottom',
            // itemId     : 'userPaginationToolbar',
            displayInfo: true
            // bind       : '{usersResults}'
        }
    ],

    listeners: {
        viewready: "onViewReady"
    }

});