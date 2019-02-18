import React, { Component } from 'react';
import data from '../../../mock/mockdata';
import { Table, message } from 'antd';
import Mock from 'mockjs';
import Fetch from '../../utils/fetch';
import BASE from '../../utils/Base';

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];
  
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'cname',
  }, {
    title: '年龄',
    dataIndex: 'ctitle',
    key: 'ctitle',
  }, {
    title: '住址',
    dataIndex: 'add',
    key: 'add',
  }, {
      title: 'URL网址',
      dataIndex: 'url',
      key: 'url'
  }, {
      title: '预览图片',
      dataIndex: 'image',
      key: 'image',
      render: (text, record, index) => (
          <div> <img src={record.image} alt={record.image} /> </div>
      )
  }];
export default class ListCom extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: [],
            initialState: {

            }
        }
    }
    componentDidMount () {
        Fetch.get({
            url: BASE.API.GET_PROJECT_LIST
        }).then( res => {
            if(res.errno === 0) { //数据请求成功
                console.log(res, '请求的mock数据SSSSSS')
                this.setState({
                    dataSource: res.data.list
                })
            } else {
                message.warn(res.errno)
            }
            
        } )
    }
    render () {
        return (<div>
            <h1>测试标题22222</h1>
            <Table dataSource={this.state.dataSource} columns={columns} />
        </div>)
    }
}