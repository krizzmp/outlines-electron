var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var store = (obj)=> {
    var CHANGE_EVENT = 'change';
    return assign({}, EventEmitter.prototype, {
        emitChange: function () {
            this.emit(CHANGE_EVENT);
        },
        addChangeListener: function (callback) {
            this.on(CHANGE_EVENT, callback);
        },
        removeChangeListener: function (callback) {
            this.removeListener(CHANGE_EVENT, callback);
        }
    }, obj)
};
module.exports = store;