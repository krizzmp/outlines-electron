var React = require('react');
var cx = require('../node_modules/react-ui-tree/node_modules/classnames/index');
var Tree = require('react-ui-tree');
var fileStore = require('../stores/files-compiled');
var Popover = require('react-bootstrap').Popover;
var TreeItem = require('./tree-item-compiled.js');

var App = React.createClass({
    getInitialState(){
        return {
            tree: fileStore.getAll(),
            active: null,
            show: null
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
    renderNode(node){
        return (
            <div>
                <TreeItem node={node} active={node === this.state.active} onCreateFile={this.onCreateFile} onClickNode={this.onClickNode} onContextNode={this.onContextNode.bind(null, node)} show={this.state.show === node} onHide={() => this.setState({ show: null })}></TreeItem>
            </div>

        );
    },
    onContextNode(node){
        //fileStore.createUnder(node);
        this.setState({show: node});
    },
    onCreateFile(node){
        fileStore.createUnder(node);
        this.setState({show: null});
    },
    onClickNode(node, e){
        //console.log('click', e.button);
        this.setState({
            active: node
        });
    },
    render(){
        return (
            <div className="tree">
                <Tree
                    paddingLeft={20}
                    tree={this.state.tree}
                    onChange={this._onChange}
                    renderNode={this.renderNode}/>
            </div>
        );
    },
    _onChange(tree){
        fileStore.setAll(tree);
    }
});
module.exports = App;