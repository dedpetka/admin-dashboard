Ext.define('App.model.Department', {
    extend: 'App.model.Base',

    requires  : ['Ext.data.identifier.Uuid'],
    identifier: 'uuid',

    fields: [
        "name",
        // {name: "start", type: "date", dateFormat: "H:i"},
        // {name: "end", type: "date", dateFormat: "H:i"},
        // // "start",
        // // "end",
        // "period"
    ]
});
