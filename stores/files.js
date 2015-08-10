var store = require('../utils/store-creator-compiled');

var _files = {
    module: 'Drafts',
    children: []
};

var FileStore = store({
    getAll: function () {
        return _files;
    },
    setAll(tree){
        _files = tree;
        this.emitChange();
    },
    createUnder(node){
        node.children.unshift({
            module: 'Untitsled',
            children: []
        });
        this.emitChange();
    }
});

FileStore.createUnder(_files);
module.exports = FileStore;