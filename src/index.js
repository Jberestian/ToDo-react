import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoList from './TodoList';

const initialState = {
   task: ''
};

const ACTION_CHANGE_STATE = 'ACTION_CHANGE_STATE';

const rootReducer = (state = initialState, action) =>{
    switch (action.type){
        case ACTION_CHANGE_STATE:
            return{...state, changeList: action.payload}
    }
        return state;
};

const store = createStore(rootReducer);
console.log(store.getState());

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        actionChangeList: state.actionChangeList
    };
};

const changeList = (newList ) =>{
        return {
            type: ACTION_CHANGE_STATE,
            payload: null
        };
};

// i know, what i have only one component, and connect don't need here.
const WrappedMainComponent = connect(mapStateToProps)(TodoList);


ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
            <Route path="/" component={WrappedMainComponent}/>
            </Router>
        </div>
    </Provider>,
    document.querySelector('#root')
);