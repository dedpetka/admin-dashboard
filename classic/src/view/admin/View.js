Ext.define('App.view.admin.View', {
    extend: 'Ext.tab.Panel',
    xtype: 'admin-preview',

    // requires: [
    //     'Ext.grid.Panel',
    //     'Ext.toolbar.Paging',
    //     'Ext.grid.column.Date'
    // ],
    //
    // controller: 'searchresults',
    // viewModel: {
    //     type: 'searchresults'
    // },

    // cls: 'shadow',
    activeTab: 0,
    margin: 20,
    height: "50%",
    maxHeight: "50%",

    // anchor: "100%",
    // scrollable: "y",

    // autoScroll: true,

    // listeners: {
    //     beforetabchange: function (tabPanel, newCard, oldCard, eOpts) {
    //         console.log("tabPanel.getHeight()", tabPanel.getHeight());
    //
    //         newCard.setMaxHeight(tabPanel.getHeight());
    //         newCard.setHeight(tabPanel.getHeight());
    //     },
    //     tabchange: function (tabPanel, newCard, oldCard, eOpts) {
    //         console.log("tabPanel.getHeight()", tabPanel.getHeight());
    //
    //         newCard.setMaxHeight(tabPanel.getHeight());
    //         newCard.setHeight(tabPanel.getHeight());
    //     }
    // },

    items: [
        {
            xtype: 'admin-employees',
            // cls: 'allRecordsCls',
            // scrollable: false,
            // hideHeaders: true,
            border: false,
            // autoScroll: true,
            // scrollable: "y",
            scrollable: true,
            // maxHeight: "100%",
            // height: 700,
            title: 'Employees',
            routeId: 'employees',
            // bind: '{allResults}',
            viewConfig: {
                preserveScrollOnRefresh: true,
                stripeRows: false
            },
            // dockedItems: [
            //     {
            //         xtype: 'pagingtoolbar',
            //         dock: 'bottom',
            //         displayInfo: true,
            //         bind: '{allResults}'
            //     }
            // ]
            listeners: {
                activate: function (tabPanel, newCard, oldCard, eOpts) {
                    // console.log("tabPanel.getHeight()", tabPanel.getHeight());

                    // tabPanel.setMaxHeight(tabPanel.ownerCt.getHeight());
                    tabPanel.setHeight(tabPanel.getHeight());
                    // newCard.setHeight(tabPanel.getHeight());
                }
                // tabchange: function (tabPanel, newCard, oldCard, eOpts) {
                //     console.log("tabPanel.getHeight()", tabPanel.getHeight());
                //
                //     newCard.setMaxHeight(tabPanel.getHeight());
                //     newCard.setHeight(tabPanel.getHeight());
                // }
            }
        },
        {
            xtype: 'admin-settings',
            // cls: 'allRecordsCls',
            // scrollable: false,
            // hideHeaders: true,
            border: false,
            title: 'Settings',
            //TODO: VK - EXTRA fix
            routeId: 'settings',
            // bind: '{allResults}',
            // viewConfig: {
            //     preserveScrollOnRefresh: true,
            //     stripeRows: false
            // },
            // dockedItems: [
            //     {
            //         xtype: 'pagingtoolbar',
            //         dock: 'bottom',
            //         displayInfo: true,
            //         bind: '{allResults}'
            //     }
            // ]
        },

        {
            xtype: 'panel',
            // cls: 'user-grid',
            title: 'User Results',
            // routeId: 'user',
            // bind: '{usersResults}',
            scrollable: false,
            // dockedItems: [
            //     {
            //         xtype: 'pagingtoolbar',
            //         dock: 'bottom',
            //         itemId: 'userPaginationToolbar',
            //         displayInfo: true,
            //         bind: '{usersResults}'
            //     }
            // ]
        }
        // {
        //     xtype: 'gridpanel',
        //     cls: 'email-inbox-panel',
        //     itemId: 'messagesGrid',
        //     hideHeaders: true,
        //     title: 'Messages',
        //     routeId: 'messages',
        //     bind: '{inboxResults}',
        //     scrollable: false,
        //     columns: [
        //         {
        //             xtype: 'gridcolumn',
        //             renderer: function(value) {
        //                 if(value) {
        //                     return '<span class="x-fa fa-heart"></span>';
        //                 }
        //                 return '<span class="x-fa fa-heart-o"></span>';
        //
        //             },
        //             width: 45,
        //             dataIndex: 'favorite'
        //         },
        //         {
        //             xtype: 'gridcolumn',
        //             dataIndex: 'from',
        //             flex: 1
        //         },
        //         {
        //             xtype: 'gridcolumn',
        //             dataIndex: 'title',
        //             flex: 2
        //         },
        //         {
        //             xtype: 'gridcolumn',
        //             renderer: function(value) {
        //                 return value ? '<span class="x-fa fa-paperclip"></span>' : '';
        //             },
        //             dataIndex: 'has_attachments'
        //         },
        //         {
        //             xtype: 'datecolumn',
        //             dataIndex: 'received_on'
        //         }
        //     ],
        //     dockedItems: [
        //         {
        //             xtype: 'pagingtoolbar',
        //             dock: 'bottom',
        //             itemId: 'pagingToolbar',
        //             prependButtons: true,
        //             bind: '{inboxResults}'
        //         }
        //     ]
        // }
    ]
});
