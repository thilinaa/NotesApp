Ext.define("Keep.store.Notes", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "Keep.model.Note",
        proxy: {
            type: 'localstorage',
            id: 'notes-app-store'
        },
        sorters: [{ property: 'dateCreated', direction: 'DESC'}]
    }
});