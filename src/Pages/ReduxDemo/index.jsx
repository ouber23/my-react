import React, { Component } from 'react';
import { ADD_TODO, REMOVE_TODO, FILTER_TODO } from '../../Store/actionTypes.jsx';
import { Provider } from 'react-redux'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
  } from './actions';
import './index.less';
import TodoApp  from './Reducers';
import { createStore } from 'redux';
import Footer from '../../Component/Footer/Footer'
import AddTodo from '../../Component/AddTodo/AddTodo'
import VisibleTodoList from '../../Component/containers/VisibleTodoList'

console.log(TodoApp, 'reducer')
let store = createStore(TodoApp)

// console.log(addTodo('测试ssdsd'), 'action type')
class ReduxDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            initialState: {
                notice: '测试demo数据'
            }
        }
    }
    render () {
        return (
            <Provider store={store} className="redux-wrapper">
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </Provider>
        )
    }
    
} 

export default ReduxDemo;