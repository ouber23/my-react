import { createStore } from 'redux';
import { combineReducers } from 'redux';
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
  } from './actions';

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function counter(state = 0, action) {
    switch(action.type){
        case 'INCREAMENT':
            return state + 1;
        case 'DECREAMENT':
            return state - 1;
        default:
            return state;
    }
}

function visibilityFilter( state = 'SHOW_ACTIVE', action ) {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default: 
            return state;
    }
}

function todos(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat([{ text: action.text, completed: false }]);
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
            action.index === index ?
              { text: todo.text, completed: !todo.completed } :
              todo
        )
        default:
            return state;
    }
}




// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。

const todoAppOther = combineReducers({
  visibilityFilter,
  todos
})
// 可以手动订阅更新，也可以事件绑定到视图层。

// 1
export default todoAppOther;
