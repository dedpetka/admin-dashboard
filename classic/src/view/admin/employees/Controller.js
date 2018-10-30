Ext.define('App.view.admin.employees.Controller', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.employees',

    init: function (grid) {
        var me = this;

        grid = grid.lockedGrid || grid;
        me.groupingFeature = grid.view.findFeature('grouping');

        grid.on("rowdblclick", me.onEditClick, me);
    },

    // TODO - Add control logic or remove is not needed

    onAddClick: function () {
        var grid, plugin, record, store,
            win;

        grid = this.getView();
        store = grid.getStore();
        // plugin = grid.findPlugin('rowediting');

        win = Ext.widget("employee-dialog", {
            onSubmit: function (data) {
                store.add(data);
            }
        });

        win.show();

        return;


        plugin.cancelEdit();

        // record = new App.model.test.Model({
        //     // fullname: 'New',
        //     // profile_pic: 'Guy',
        //     // subscription: 'Guy',
        //     // email: 'new@sencha-test.com',
        //     // joinDate: Ext.Date.clearTime(new Date()),
        //     // salary: 50000,
        //     // active: true
        // });

        store.suspendAutoSync();
        record = store.insert(0, {})[0];
        record.isFake = true;

        plugin.startEdit(record, 0);

        grid.on({
            'canceledit': function (editor, e) {
                var rec = e.record,
                    store = this.getStore();

                if (rec.isFake) {
                    store.remove(rec);
                }

                store.resumeAutoSync();
            },
            'edit'      : function (editor, e) {
                var store = this.getStore();

                store.resumeAutoSync(true);
                // store.sync();
            },
            single      : true
        });

        // record.save();

        // grid.getStore().commitChanges();
    },

    onEditClick: function () {
        var grid = this.getView(),
            store = grid.getStore(),
            selModel = grid.getSelectionModel(),
            record = selModel.getSelection()[0],
            win;


        if (!!record) {
            win = Ext.widget("employee-dialog", {
                record  : record,
                onSubmit: function (data) {
                    record.set(data);
                }
            });

            win.show();
        }
    },

    onRemoveClick: function () {
        var grid = this.getView(),
            store,
            selModel;

        Ext.Msg.confirm(App.tr("Employee_Dialog_Remove"), App.tr("Confirm_RemoveSelected"),
            function (choice) {
                if (choice === 'yes') {
                    store = grid.getStore();
                    selModel = grid.getSelectionModel();

                    store.remove(selModel.getSelection());

                    // if (store.getCount() > 0) {
                    //     selModel.select(0);
                    // }
                }
            }
        );


    },

    onSelectionChange: function (view, records) {
        var button = this.lookupReference('removeEmployee');

        button.setDisabled(!records.length);
    },

    onCollapseAll: function () {
        this.groupingFeature.collapseAll();
    },

    onExpandAll: function () {
        this.groupingFeature.expandAll();
    },

    onToggleAll: function () {
        var groupingFeature = this.groupingFeature;

        groupingFeature.disabled ? groupingFeature.enable() : groupingFeature.disable();
    },

    onViewReady: function (grid) {
        grid.getStore().on("load", function (store) {

            if (!store.getCount()) {
                var list = [
                    "Johnny	Richardson",
                    "Clyde	Goodwin",
                    "Desiree	Silva",
                    "Kelly	Quinn",
                    "Julius	Mckinney",
                    "Jana	Brewer",
                    "Arthur	Young",
                    "Brad	Gordon",
                    "Ken	Douglas",
                    "Shawna	Peterson",
                    "Erik	Mathis",
                    // "Bennie	Craig",
                    // "Lance	Nelson",
                    // "Sammy	Carson",
                    // "Rita	Jordan",
                    // "Arlene	Mason",
                    // "Don	Lawrence",
                    // "Vernon	Watson",
                    // "Patty	Pope",
                    // "Alma	Ramsey",
                    // "Andre	Gonzales",
                    // "Kelli	Johnson",
                    // "Alfonso	Robbins",
                    // "Francis	Johnston",
                    // "Lawrence	Dean",
                    // "Esther	Ramos",
                    // "Ida	Padilla",
                    // "Darrin	Boyd",
                    // "Lela	Phelps",
                    // "Judith	Fernandez",
                    // "Lorenzo	Parks",
                    // "Anthony	Hammond",
                    // "Brandon	Watts",
                    // "Rosie	Chapman",
                    // "Courtney	Steele",
                    // "Rolando	Jackson",
                    // "Tony	Holt",
                    // "Toni	Owensv",
                    // "Maria	Lynch",
                    // "Duane	Rivera",
                    // "Phyllis	Rhodes",
                    // "Alberto	Warner",
                    // "Heather	Hunt",
                    // "Roosevelt	Strickland",
                    // "Kim	Carr",
                    // "Shawn	Hale",
                    // "Antonia	Cruz",
                    // "Garrett	Carlson",
                    // "Alberta	Perry",
                    "Marshall	Carpenter"
                ];

                var recs = [];

                var departments = Ext.getStore("departments");
                var max = departments.getCount();

                Ext.each(list, function (name) {
                    recs.push({
                        fullname  : name,
                        department: departments.getAt(Math.floor(Math.random() * max)).get("id")
                    });
                });

                store.add(recs);
            }

        }, grid, {single: true});

        grid.getStore().load();
    }
});
