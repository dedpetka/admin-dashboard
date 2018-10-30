Ext.define('App.model.Employee', {
    extend: 'App.model.Base',

    requires: ['Ext.data.identifier.Uuid'],
    identifier: 'uuid',
    hasOne: 'Department',

    fields: [
        {
            type: 'int',
            name: 'cabinet'
        },
        {
            type: 'string',
            name: 'fullname'
        },
        {
            name: 'department'
        },
        {
            type: 'boolean',
            name: 'isActive'
        },
        // {
        //     name: 'changeFirst'
        // },
        // {
        //     name: 'changeSecond'
        // },
        {
            name: 'changes',
            // depends: ['changeFirst', 'changeSecond'],
            // calculate: function (data) {
            //     console.log("calculate", data.changeFirst, data.changeSecond);
            //     return data;
            // }
        },
        {
            name: 'autoSwitchChanges'
        }
    ]
});
