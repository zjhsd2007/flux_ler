var Dispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/Constants'),
    actionTypes = Constants.actionTypes;

module.exports = {
    onLogin: function (userName) {
        Dispatcher.dispatch({
            type: actionTypes.LOGIN,
            data: {
                name: userName,
                logined: true
            }
        });
    },
    onLoginout: function () {
        Dispatcher.dispatch({
            type: actionTypes.LOGINOUT,
            data: {
                name: null,
                logined: false
            }
        });
    }
};