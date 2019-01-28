import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './index';
import styled from "styled-components";



function saveTodo() {
    let str = JSON.stringify(TodoList);
    localStorage.setItem("", str);
}

function getTodo() {
    let str = localStorage.getItem("TodoList");
    TodoList = JSON.parse(str);
    if (!TodoList){
        TodoList= [];
    }
}

getTodo();
saveTodo();


//styles
const AllForm = styled.div`
     color: #000;
     text-align: center;
     margin-top: 30px;
`;

const FormInput = styled.input`
      cursor: pointer;
      height: 29px;
      width: 180px;
      border: 2px solid #F2F2F2;
      border-radius: 2px;
      outline: none;
      padding-left: 13px;
      background-color: #19b494;
      color: #000;
      ::placeholder { color: #000; }

`;

const CreateBtn = styled.button`
      height: 34px;
      width: 80px;
      padding: 0 15px;
      margin-left: 20px;
      font-size: 14px;
      text-align: center;
      vertical-align: center;
      color: #000;
      border-radius: 2px;
      border: 2px solid #F2F2F2;
      outline: none ;
      box-shadow: none;
      cursor: pointer;
      background-color: #19b494;
`;

const Title = styled.h1`
    color: #19b494;
`;

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
// create items
    addItem(e){
        if (this._inputElement.value !== ""){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value ="";

        console.log(this.state.items);

        e.preventDefault();
    }

// delete items
    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return(item.key !== key)

        });

        this.setState({
            items: filteredItems
        });
    }

    render(){
        return(
            <AllForm className="todoListMain" >
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <Title>ToDo Application</Title>
                        <FormInput ref={(a) => this._inputElement = a}
                               placeholder="Enter task"
                               value={this.props.changeList}
                               onChange={(event)=> ((event.target.value))}
                        >
                        </FormInput>
                        <CreateBtn type="submit">
                            create</CreateBtn>
                    </form>

                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}/>
            </AllForm>
        );
    }
}

export default TodoList;