var React = require('react');
var TreeView = require('./components/tree-view-compiled');
var fileStore = require('./stores/files-compiled');

var App = React.createClass({
    getInitialState(){
        return {
            tree: fileStore.getAll()
        };
    },
    componentDidMount(){
        fileStore.addChangeListener(()=> {
            this.forceUpdate()
        });
    },
    componentWillUnmount(){
        fileStore.removeChangeListener();
    },
    render(){
        return (
            <div className="app" ref='app'>
                <TreeView></TreeView>

                <div className="inspector">
                    {this.state.tree}
                </div>
            </div>
        );
    }
});
React.render(<App/>, document.getElementById('app'));