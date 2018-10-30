Ext.define('App.view.admin.employees.Dialog', {
    extend: 'Ext.window.Window',
    alias : 'widget.employee-dialog',

    layout     : 'fit',
    width      : 390,
    bodyPadding: 10,
    autoShow   : true,
    modal      : true,

    record  : null,
    onSubmit: Ext.emptyFn,

    sChangeFormat: '{name} ({start:date("H:i")} - {end:date("H:i")})',

    initComponent: function () {
        var me = this,
            oRec = me.record,
            bEditMode = !!oRec,
            oDefaults,
            oData;

        oDefaults = {
            anchor    : "100%",
            allowBlank: false,
            labelWidth: 70,
        };

        Ext.apply(me, {
            title       : App.tr(bEditMode ? "Employee_Dialog_Edit" : "Employee_Dialog_Add"),
            defaultFocus: "[name=fullname]",
            items       : [
                {
                    xtype   : "form",
                    defaults: Ext.applyIf({labelWidth: 140,}, oDefaults),
                    // defaultFocus: "[name=fullname]",
                    items   : [
                        {
                            name      : 'fullname',
                            fieldLabel: App.tr("Common_Field_Name"),
                            xtype     : "textfield"
                        },
                        {
                            name          : 'department',
                            fieldLabel    : App.tr("Common_Field_Department"),
                            xtype         : "combo",
                            store         : "departments",
                            queryMode     : 'local',
                            displayField  : 'name',
                            valueField    : 'id',
                            forceSelection: true
                            // matchFieldWidth: false,
                            // listConfig: {
                            //     itemTpl: [
                            //         '<div data-qtip="Period: {period}">{name} ({start:date("H:i")} - {end:date("H:i")})</div>'
                            //     ]
                            // },

                            // valueField: 'abbr',
                            // store: {
                            //     type: "employees-changes"
                            // }
                        },
                        {
                            name      : 'cabinet',
                            fieldLabel: App.tr("Common_Field_Cabinet"),
                            xtype     : 'numberfield',
                            value     : 1,
                            maxValue  : 1000,
                            minValue  : 1
                        },
                        {
                            name      : 'isActive',
                            fieldLabel: App.tr("Employee_Field_ShowInSchedule"),
                            xtype     : 'checkbox',
                            value     : true
                        },

                        // {
                        //     xtype: 'multiselector',
                        //     title: 'Selected Employees',
                        //
                        //     // hideHeaders: true,
                        //     // columns: [
                        //     //     {xtype: 'rownumberer'},
                        //     //     {
                        //     //         dataIndex: "name"
                        //     //     }
                        //     // ],
                        //     fieldName: 'name',
                        // // {xtype: 'rownumberer'},
                        //
                        //     viewConfig: {
                        //         deferEmptyText: false,
                        //         emptyText: 'No employees selected',
                        //         plugins: {
                        //             ptype: 'gridviewdragdrop',
                        //             dragText: 'Drag and drop to reorganize'
                        //         }
                        //     },
                        //
                        //     search: {
                        //         field: 'name',
                        //         store : "employees-changes",
                        //     }
                        // },
                        {
                            xtype   : "fieldset",
                            title   : "Changes",
                            defaults: oDefaults,
                            items   : [
                                {
                                    name          : 'changeFirst',
                                    // fieldLabel  : App.tr("Common_Field_Department"),
                                    fieldLabel    : "Main",
                                    xtype         : "combo",
                                    store         : "employees-changes",
                                    queryMode     : 'local',
                                    displayField  : 'name',
                                    valueField    : 'id',
                                    forceSelection: true,
                                    editable      : false,
                                    displayTpl    : Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                        me.sChangeFormat,
                                        '</tpl>'
                                    ),
                                    listConfig    : {
                                        itemTpl: [
                                            '<div data-qtip="Period: {period}">' + me.sChangeFormat + '</div>'
                                        ]
                                    },
                                    listeners     : {
                                        "select": function (combo, record) {
                                            var store = combo.getStore(),
                                                index;

                                            if (store.getCount() === 2) {
                                                index = store.indexOf(record) + 1;
                                                record = store.getAt(index < 2 ? index : 0);

                                                me.down("form").getForm().findField("changeSecond").setValue(record.get(combo.valueField));
                                            }
                                        }
                                    }
                                },
                                {
                                    name          : 'autoSwitchChanges',
                                    reference     : "autochange",
                                    boxLabel      : "Automatically switch the change for the next week to",
                                    // fieldLabel: App.tr("Employee_Field_ShowInSchedule"),
                                    xtype         : 'checkbox',
                                    inputValue    : 1,
                                    uncheckedValue: 0,
                                    value         : true
                                },
                                {
                                    name          : 'changeSecond',
                                    itemId        : "changeSecond",
                                    // fieldLabel  : App.tr("Common_Field_Department"),
                                    // fieldLabel    : "Change",
                                    xtype         : "combo",
                                    store         : "employees-changes",
                                    queryMode     : 'local',
                                    displayField  : 'name',
                                    valueField    : 'id',
                                    forceSelection: true,
                                    editable      : false,
                                    displayTpl    : Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                        me.sChangeFormat,
                                        '</tpl>'
                                    ),
                                    listConfig    : {
                                        itemTpl: [
                                            '<div data-qtip="Period: {period}">' + me.sChangeFormat + '</div>'
                                        ]
                                    },


                                    hideLabel: true,
                                    bind     : {
                                        disabled: '{!autochange.checked}',
                                        hidden  : '{!autochange.checked}'
                                    }
                                },

                                //TODO: VK - EXTRA add example of week calc?
                                //TODO: VK - EXTRA in edit mode show - recalculate curr graph?

                            ]
                        }
                    ]
                }
            ],
            // buttonsAlign: "left",
            buttons     : [
                // {
                //     // name     : 'autochange',
                //     reference: "autochange",
                //     boxLabel : "Add next",
                //     // fieldLabel: App.tr("Employee_Field_ShowInSchedule"),
                //     xtype    : 'checkbox',
                //     value    : true
                // },
                // "->",
                {
                    text   : App.tr("Common_Button_Cancel"),
                    handler: me.close,
                    scope  : me
                },
                {
                    text   : App.tr(bEditMode ? "Common_Button_Apply" : "Common_Button_Add"),
                    handler: me.trySubmit,
                    scope  : me
                }
            ]
        });

        me.callParent();

        if (oRec) {
            oData = oRec.data;

            oData.changeFirst = oData.changes[0];
            oData.changeSecond = oData.changes[1];

            me.down("form").loadRecord(oRec);
        }
    },

    trySubmit: function () {
        var me = this,
            form = me.down("form"),
            data;

        if (form.isValid()) {
            data = form.getValues();

            data.changes = [data.changeFirst];
            if (data.changeSecond) {
                data.changes.push(data.changeSecond);
            }

            me.onSubmit(data);
            me.close();
        }
    }

    // afterRender: function () {
    //     var me = this;
    //
    //     me.callParent(arguments);
    //
    //     me.syncSize();
    //
    //     // Since we want to always be a %age of the viewport, we have to watch for
    //     // resize events.
    //     Ext.on(me.resizeListeners = {
    //         resize: me.onViewportResize,
    //         scope: me,
    //         buffer: 50
    //     });
    // },
    //
    // doDestroy: function () {
    //     Ext.un(this.resizeListeners);
    //
    //     this.callParent();
    // },
    //
    // onViewportResize: function () {
    //     this.syncSize();
    // },
    //
    // syncSize: function () {
    //     var width = Ext.Element.getViewportWidth(),
    //         height = Ext.Element.getViewportHeight();
    //
    //     // We use percentage sizes so we'll never overflow the screen (potentially
    //     // clipping buttons and locking the user in to the dialog).
    //
    //     this.setSize(Math.floor(width * 0.9), Math.floor(height * 0.9));
    //     this.setXY([ Math.floor(width * 0.05), Math.floor(height * 0.05) ]);
    // }
});
