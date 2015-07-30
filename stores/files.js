var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {
    module: 'Drafts',
    children: []
}; // collection of todo items
function find(nodeId, node) {

    if (node.id == nodeId) {
        return node;
    } else {
        for (var i = 0; i < node.children.length; i++) {
            var g = find(nodeId, node.children[i]);
            if (g) {
                return g
            }
        }
    }
}

var TodoStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return _todos;
    },
    setAll(tree){
        _todos = tree;
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
TodoStore.createUnder(_todos);
module.exports = TodoStore;