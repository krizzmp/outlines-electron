var React = require('react');
var TreeView = require('./components/tree-view-compiled');

var App = React.createClass({
    render(){
        var actionsShow = false;
        return (

            <div className="app" ref='app'>
                <TreeView></TreeView>

                <div className="inspector">
                    hello
                </div>
                {actionsShow ? <div className="modal-container">
                    <div className="modal-top well">
                        <input type="text" className="form-control" placeholder="Text input"/>
                        <ul className="list-group">
                            <li className="list-group-item active">Pictures</li>
                            <li className="list-group-item">Documents</li>
                            <li className="list-group-item">Music</li>
                            <li className="list-group-item">Videos</li>
                        </ul>
                    </div>
                </div> : null}
            </div>
        );
    }
});
React.render(<App/>, document.getElementById('app'));