// import { response } from 'express'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { loginUser} from '../../../_actions/user.action'
import { withRouter } from 'react-router-dom'

function LoginPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 안하면 페이지가 계속 refresh 됨

        let body = {
            email: Email,
            password: Password
        }
        
        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess){
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })

    }

    return (
        <div style = {{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>

            <from style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                
                <label>Email</label>
                <input type = "email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <br />
                <button> 
                    Login 
                </button>
            </from>
            
        </div>
    )
}

export default withRouter(LoginPage)
