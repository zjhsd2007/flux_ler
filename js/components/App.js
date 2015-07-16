var TopLogin = require('./TopLogin'),
    MiddleLogin = require('./MiddleLogin');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <TopLogin />
                <MiddleLogin />
            </div>
        );
    }
});

module.exports = App;