var LoginAction = require('../actions/LoginAction'),
    LoginStore = require('../stores/LoginStore');

var getStateFromStore = function () {
    return LoginStore.getUserInfo();
};


var TopLogin = React.createClass({
    getInitialState: function () {
        return getStateFromStore();
    },
    componentDidMount: function () {
        LoginStore.addLoginLisener(this.change);
    },
    componentWillUnmout: function () {
        LoginStore.removeLoginLisener(this.change);
    },
    onLoginOut: function () {
        LoginAction.onLoginout();
    },
    change: function () {
        this.setState(getStateFromStore());
    },
    render: function () {
        var html = this.state.logined ? <div>{this.state.name}
            <button onClick={this.onLoginOut}>loginout</button>
        </div> : '你还没有登录';
        return (
            <div>
                {html}
            </div>
        )
    }
});

module.exports = TopLogin;