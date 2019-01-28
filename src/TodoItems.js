import React, { Component } from 'react';
import styled from "styled-components";

// styles
const ListItem = styled.li`
    list-style: none;
    color: #000;
    font-size: 20px;
    text-align: center;
`;

class TodoItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

// create task items
    createTasks(item) {
        return <ListItem
                   className="listItem"
                   onClick={() => this.delete(item.key)} key={item.key}>{item.text}
                   </ListItem>
    }

// delete items
    delete(key){
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
          <ul className="theList">
              {listItems}
          </ul>
        );
    }
}

export default TodoItems;
