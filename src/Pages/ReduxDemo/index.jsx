import React, { Component } from 'react';
import { ADD_TODO, REMOVE_TODO, FILTER_TODO } from '../../Store/actionTypes.jsx';
import './index.less';

console.log(ADD_TODO, 'action type')
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
            <div className="redux-wrapper">测试数据</div>
        )
    }
    
} 

export default ReduxDemo;