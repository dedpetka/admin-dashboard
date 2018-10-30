Ext.define('App.view.admin.settings.Changes', {
    extend: 'Ext.panel.Panel',
    xtype : "admin-settings-changes",

    requires: [
        'App.store.Changes'
        // 'Ext.slider.Single',
        // 'Ext.form.field.Display'
    ],

    // bodyPadding: 10,

    layout: 'fit',
    title : "Charges",

    items: [

        {
            xtype: 'gridpanel',
            // controller: 'test',
            // viewModel: {
            //     type: 'searchresults'
            // },

            plugins: [{
                ptype             : 'rowediting',
                clicksToMoveEditor: 1,
                autoCancel        : false
            }],


            // store: {
            //     type: "employees-changes"
            // },

            store: "employees-changes",


            columnLines: true,
            // There is no asymmetric data, we do not need to go to the expense of synching row heights
            // syncRowHeight: false,
            // enableLocking: false,

            // autoLoad: true,

            // scrollable: false,
            columns: [
                {
                    // xtype    : 'gridcolumn',
                    // cls      : 'content-column',
                    dataIndex: 'name',
                    text     : 'Name',
                    // flex     : 1,
                    // width    : 240,
                    flex     : 1,
                    editor   : {
                        // defaults to textfield if no xtype is supplied
                        allowBlank: false
                    }
                },
                {
                    // xtype    : 'gridcolumn',
                    // cls      : 'content-column',
                    dataIndex: 'period',
                    text     : 'period',
                    align    : 'center',
                    width    : 100,
                    editor   : {
                        xtype        : 'numberfield',
                        name         : 'receiptTime',
                        allowDecimals: false,
                        width        : 70,
                        value        : 20,
                        maxValue     : 60,
                        minValue     : 0,
                        allowBlank   : false

                        //TODO: VK - EXTRA on change update 'increment' in next editors!
                    }
                },
                {
                    // xtype    : 'gridcolumn',
                    // cls      : 'content-column',
                    xtype : 'datecolumn',
                    format: 'H:i',

                    dataIndex: 'start',
                    text     : 'start',
                    align    : 'center',
                    width    : 100,
                    editor   : {
                        xtype     : 'timefield',
                        format    : 'H:i',
                        // submitFormat : 'H:i',
                        allowBlank: false,
                        increment : 20,
                        getValue2 : function () {
                            return this.getRawValue();
                        }
                    }
                },
                {
                    // xtype    : 'gridcolumn',
                    // cls      : 'content-column',
                    xtype : 'datecolumn',
                    format: 'H:i',

                    dataIndex: 'end',
                    text     : 'end',
                    align    : 'center',
                    width    : 100,
                    editor   : {
                        xtype     : 'timefield',
                        format    : 'H:i',
                        allowBlank: false,
                        increment : 20
                    }
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
                    //TODO: VK - EXTRA !
                    xtype: 'toolbar',
                    dock : 'top',
                    items: [
                        {
                            text   : "Add",
                            iconCls: 'x-fa fa-plus',
                            // handler: "onAddClick",
                        },
                        {
                            text   : "Edit",
                            iconCls: 'x-fa fa-pencil',
                            // handler: "onRemoveClick"
                        },
                        {
                            text   : "Remove",
                            iconCls: 'x-fa fa-minus',
                            // handler: "onRemoveClick"
                        }
                    ]
                }
            ],

            // listeners: {
            //     viewready: "onViewReady"
            // }
        }
    ]

});