'use strict';
let React = require('react'),
    ReactDOM = require('react-dom'),
    socket = io.connect(),
    ListNav = require('./ListNav'),
    List = require('./List');

class App extends React.Component {
    constructor(props) {
        super(props);
        props.data.currentList = 0;
        this.state = props.data;
    }

    render() {
        let currentList = this.state.lists[this.state.currentList];

        return(
            <div>
                <ListNav lists={this.state.lists} />
                <List items={currentList.items} name={currentList.name} />
            </div>
        )
    }
}

socket.on('data', (data) => {
    ReactDOM.render(<App data={data}/>, document.querySelector('#app'));
});