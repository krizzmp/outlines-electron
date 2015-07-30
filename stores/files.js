var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _files = {
    module: 'Drafts',
    children: []
}; 

var FileStore = assign({}, EventEmitter.prototype, {

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
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});
FileStore.createUnder(_files);
module.exports = FileStore;