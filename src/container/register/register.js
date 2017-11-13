import React from 'react';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from "../../redux/user.redux";
import Logo from '../../component/logo/logo';

const RadioItem = Radio.RadioItem;

@connect(
    state => state.user,
    {register}
)

class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd:'',
            repeatpwd:'',
            type: 'genius'
        }
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleRegister() {
        this.props.register(this.state);
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Logo />
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}

                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v => this.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                            type='password'
                            onChange={v => this.handleChange('pwd', v)}
                        >密码</InputItem>
                        <InputItem
                            type='password'
                            onChange={v => this.handleChange('repeatpwd', v)}
                        >确认密码</InputItem>

                    </List>
                    <RadioItem checked={this.state.type === 'genius'} onClick={() => this.handleChange('type', 'genius')}>
                        牛人
                    </RadioItem>
                    <RadioItem checked={this.state.type === 'boss'}
                               onClick={() => this.handleChange('type', 'boss')}>
                        BOSS
                    </RadioItem>
                    <WhiteSpace />

                    <Button type="primary" onClick={this.handleRegister.bind(this)}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register