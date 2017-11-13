import React from 'react';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import Logo from '../../component/logo/logo';
import {connect} from 'react-redux';
import {login} from '../../redux/user.redux';
import {Redirect} from 'react-router-dom';


@connect(
  state => state.user,
  {login}
)

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd:''
        }
    }

  handleLogin(){
      this.props.login(this.state);
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
    register() {
        this.props.history.push('/register');
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
              {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo />
                <WingBlank>
                  {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}

                    <List>
                        <InputItem
                          onChange={v => this.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                          type='password'
                          onChange={v => this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick={this.handleLogin.bind(this)} type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register.bind(this)} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login