Ext.define('App.view.admin.settings.Departments', {
    extend: 'Ext.panel.Panel',
    xtype : "admin-settings-departments",

    requires: [
        'App.store.Departments'
    ],

    layout: 'fit',
    title : "Departments",

    items: [
        {
            xtype: 'gridpanel',
            store: "departments",
            plugins: [{
                ptype             : 'rowediting',
                clicksToMoveEditor: 1,
                autoCancel        : false
            }],
            columnLines: true,
            columns: [
                {
                    dataIndex: 'name',
                    text     : 'Name',
                    flex     : 1,
                    editor   : {
                        allowBlank: false
                    }
                }
            ],
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
            ]
        }
    ]

});