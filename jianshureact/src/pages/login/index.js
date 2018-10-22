import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {
        return(
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号'/>
                    <Input placeholder='密码'/>
                    <Button>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Login);