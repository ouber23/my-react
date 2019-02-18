import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Button, Breadcrumb } from 'antd';
// import Header from './Component/Header';
import HomeComForm from './Pages/Home';
import ListCom from './Pages/ListProject';
import ReduxDemo from './Pages/ReduxDemo';
import './app.less';

const {
    Header, Footer, Sider, Content,
  } = Layout;
const { SubMenu } = Menu;

class Error extends Component {
    constructor(props){
        super(props);
        this.state = {
            initialState: {

            }
        }
    }
    render () {
        return (<div>没有相关页面</div>)
    }
}
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            collapsed: false
        }
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    add () {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <Router>
                    <Layout>
                        <Header className="header" style={{color: 'white'}}>
                            逍遥行Logo
                        </Header>
                        <Layout>
                            <Sider
                                collapsible
                                collapsed={this.state.collapsed}
                                onCollapse={this.onCollapse} >
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    theme="dark"
                                    style={{ height: '100%', borderRight: 0 }}
                                    >
                                    <SubMenu key="sub1" title={<span><Icon type="user" /><span>subnav 1</span></span>}>
                                        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to="/List">列表页测试</Link></Menu.Item>
                                        <Menu.Item key="reduxdemo"><Link to="/ReduxDemo">ReduxDemo</Link></Menu.Item>
                                        <Menu.Item key="3">option3</Menu.Item>
                                        <Menu.Item key="4">option4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="user" /><span>subnav 2</span></span>}>
                                        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                                        <Menu.Item key="6"><Link to="/List">列表页</Link></Menu.Item>
                                        <Menu.Item key="7">option3</Menu.Item>
                                        <Menu.Item key="8">option4</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content className="ant-content">
                                <Breadcrumb className="bread-crumb" style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                                <Switch>
                                    <Route exact path="/" component={HomeComForm} />
                                    <Route path="/List" component={ListCom} />
                                    <Route path="/ReduxDemo" component={ReduxDemo} />
                                    <Route component={Error} />
                                </Switch>
                            </Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>
                </Router>
            </div>
        );
    }
}