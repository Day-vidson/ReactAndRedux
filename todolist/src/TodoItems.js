import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        // ta funkcja zwraca <li> dla każdego pojedynczego el. tablicy 
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        
        // tutaj używamy createTasks() aby przekonwertować tekst na <li> z HTML, 
        // a metoda .map() wykonuje to dla właściwości entries = czyli każdego el. tablicy "TodoItems.state.items" 
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;