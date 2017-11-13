import React from 'react';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import Logo from '../../component/logo/logo';

class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    register() {
        this.props.history.push('/register');
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <InputItem type='password'>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register.bind(this)} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login