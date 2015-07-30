var React = require('react');
var Overlay = require('react-bootstrap').Overlay;
var Popover = require('react-bootstrap').Popover;
var cx = require('../node_modules/react-ui-tree/node_modules/classnames/index');

var App = React.createClass({
    render(){
        var rename = true;
        //todo: use react-inline-edit to implement rename
        return (
            <div>
                <span className={cx({'node': true,'is-active': this.props.active})}
                      onClick={this.props.onClickNode.bind(null, this.props.node)}
                      onContextMenu={this.props.onContextNode.bind(null, this.props.node)}
                      ref='target'>
                    <span contentEditable={rename}>{this.props.node.module}</span>
                </span>
                <Overlay show={this.props.show}
                         onHide={this.props.onHide}
                         rootClose
                         placement="right"
                         container={React.findDOMNode(this.refs.app)}
                         target={ props => React.findDOMNode(this.refs.target)}>
                    <Popover>
                        <div className="t" onClick={this.props.onCreateFile.bind(null, this.props.node)}>New File</div>
                        <div className="t">Rename</div>
                        <div className="t">Delete</div>
                    </Popover>
                </Overlay>
            </div>
        );
    }
});
module.exports = App;