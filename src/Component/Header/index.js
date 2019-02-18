import React, { Component } from 'react';
import './index.less';

export default class HeaderCom extends Component {
    constructor(props){
        super(props);
        this.state = {
            HeaderText: '头部文本'
        }
    }
    render () {
        return (
            <div className="header-wrapper">
                <h1>测试头部</h1>
                <div className="title">
                    标题一
                </div>
            </div>
        )
    }
}
