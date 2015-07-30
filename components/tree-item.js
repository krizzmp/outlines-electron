var React = require('react');
var Overlay = require('react-bootstrap').Overlay;
var Popover = require('react-bootstrap').Popover;
var cx = require('../node_modules/react-ui-tree/node_modules/classnames/index');


var App = React.createClass({

    render(){
        const style = {
            position: 'absolute',
            backgroundColor: '#EEE',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
            border: '1px solid #CCC',
            borderRadius: 3,
            marginLeft: 5,
            marginTop: 5,
            padding: 10
        };
        return (
            <div>
                <span className={cx({'node': true,'is-active': this.props.active})}
                      onClick={this.props.onClickNode.bind(null, this.props.node)}
                      onContextMenu={this.props.onContextNode.bind(null, this.props.node)}
                      ref='target'>
                    {this.props.node.module}

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