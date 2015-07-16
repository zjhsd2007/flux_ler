var LoginAction = require('../actions/LoginAction'),
    LoginStore = require('../stores/LoginStore');

var getUserInfoFromStore = function () {
    return LoginStore.getUserInfo();
};

var MiddleLogin = React.createClass({
    getInitialState: function () {
        return getUserInfoFromStore();
    },
    componentDidMount: function () {
        LoginStore.addLoginLisener(this.change);
    },
    componentWillUnmout: function () {
        LoginStore.removeLoginLisener(this.change);
    },
    onLogin: function () {
        var userName = this.refs.userName.getDOMNode().value;
        LoginAction.onLogin(userName);
        this.setState({name: ''});
    },
    change: function () {
        this.setState(getUserInfoFromStore());
    },
    handleChange: function (e) {
        this.setState({name: e.target.value});
    },
    render: function () {
        var form = this.state.logined ? '你已经登录了' :
            (<form>
                <input type="text" ref="userName" value={this.state.name} onChange={this.handleChange}/>
                <input type="button" onClick={this.onLogin} value="Login"/>
            </form>);
        return (
            <div>{form}</div>
        )
    }
});

module.exports = MiddleLogin;