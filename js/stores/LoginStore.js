var Dispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/Constants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    actionTypes = Constants.actionTypes;

var LOGIN_EVENT = 'login';
var user = {
    name: null,
    logined: false
};

var LoginStore = assign({}, EventEmitter.prototype, {
    emitLogin: function () {
        this.emit(LOGIN_EVENT);
    },
    addLoginLisener: function (callback) {
        this.on(LOGIN_EVENT, callback);
    },
    removeLoginLisener: function (callback) {
        this.removeLisner(LOGIN_EVENT, callback);
    },
    getUserInfo: function () {
        return user;
    }
});

LoginStore.dispacthToken = Dispatcher.register(function (action) {
    switch (action.type) {
        case actionTypes.LOGIN :
            var data = action.data;
            user = {
                name: data.name,
                logined: data.logined
            };
            LoginStore.emitLogin();
            break;

        case actionTypes.LOGINOUT :
            var data = action.data;
            user = {
                name: data.name,
                logined: data.logined
            };
            LoginStore.emitLogin();
            break;
    }
});

module.exports = LoginStore;