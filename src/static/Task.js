let React = require('react');
vex.defaultOptions.className = 'vex-theme-os';

/*
 props would look like:
 {
 id: 0,
 name: 'something',
 items: [
 {name: 'this is an item', details: 'i need to work on this'}
 {name: 'another item', details: 'this is almost done'}
 ]
 }
 */
class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name, details: props.details};
    }
    editDetails(item) {
        vex.dialog.open({
            message: 'Edit details',
            input: `
            <input type=text name=name id=name>
            <textarea name=details id=details></textarea>
            `,
            afterOpen: ($vex) => {
                $vex.find('#name').val(this.state.name);
                $vex.find('#details').val(this.state.details);
            },
            buttons: [
                $.extend({}, vex.dialog.buttons.YES, {text: 'Save'}),
                $.extend({}, vex.dialog.buttons.NO, {text: 'Cancel'})
            ],
            callback: (data) => {
                if (data) {
                    this.setState({name: data.name, details: data.details});
                }
            }
        })
    }
    render() {
        return (
            <li>
                {this.state.name}
                <button onClick={this.editDetails.bind(this)}>Details</button>
            </li>
        );
    }
}

module.exports = Task;