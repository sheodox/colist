let React = require('react'),
    Task = require('./Task');

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
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    getList() {
        return this.state.items.map((item) => {
            return (
                <Task name={item.name} details={item.details} />
            );
        })
    }
    render() {
        return (
            <section>
                <h1>{this.props.name}</h1>
                <ul>
                    {this.getList()}
                </ul>
            </section>
        );
    }
}

module.exports = List;