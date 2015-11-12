let React = require('react');

/*
props would look like:
[
    {name: 'something', id: 0},
    {name: 'something else', id: 1}
]
 */
class ListNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lists: props.lists};
    }
    getList() {
        return this.state.lists.map((item) => {
            return <li>{item.name}</li>;
        })
    }
    render() {
        return (
            <nav>
                <h2>Lists</h2>
                <ul>
                    {this.getList()}
                </ul>
            </nav>
        );
    }
}

module.exports = ListNav;