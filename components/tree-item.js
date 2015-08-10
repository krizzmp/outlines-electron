var React = require('react');
var Overlay = require('react-bootstrap').Overlay;
var Popover = require('react-bootstrap').Popover;
var cx = require('../node_modules/react-ui-tree/node_modules/classnames/index');
var InlineEdit = require('react-inline-edit');

var App = React.createClass({
    getInitialState(){
        return { editing: false }
    },
    render(){
        var rename = true;
        //todo: use react-inline-edit to implement rename
        return (
            <div>
                <span className={cx({'node': true,'is-active': this.props.active})}
                      onClick={this.props.onClickNode.bind(null, this.props.node)}
                      onContextMenu={this.props.onContextNode.bind(null, this.props.node)}
                      ref='target'>
                    <InlineEdit
                        tagName='div'
                        className='name-field'
                        text={this.props.node.module}
                        placeholder='Your Name'
                        autoFocus={true}
                        maxLength={200}
                        editing={this.state.editing}
                        />
                </span>
                <Overlay show={this.props.show}
                         onHide={this.props.onHide}
                         rootClose
                         placement="right"
                         container={React.findDOMNode(this.refs.app)}
                         target={ props => React.findDOMNode(this.refs.target)}>
                    <Popover>
                        <div className="t" onClick={this.props.onCreateFile.bind(null, this.props.node)}>New File</div>
                        <div className="t" onClick={()=>{
                        this.props.onHide();
                        this.enableEditing();}}>Rename</div>
                        <div className="t">Delete</div>
                    </Popover>
                </Overlay>
            </div>
        );
    },
    enableEditing: function(){
        // contenteditable field set to edit mode.
        this.setState({ editing: true });
    }
});
module.exports = App;