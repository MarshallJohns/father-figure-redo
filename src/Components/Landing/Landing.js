import axios from 'axios'
import React, { useState } from 'react'
import { loginUser } from '../../ducks/authReducer'
import { connect } from 'react-redux'

function Landing(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (email && password) {
            axios.post('/api/auth/login', { email, password }).then(res => {
                props.loginUser(res.data)
                props.history.push('/home')
            }).catch(err => {
                alert(err.response.request.response)
            })
        } else (alert('Please fill out both fields'))
    }

    return (
        <div>
            <div>
                email:
                <input value={email} type='text' onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                password:
                <input value={password} type='password' onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={() => handleLogin()} >Submit</button>
        </div>
    )
}

export default connect(null, { loginUser })(Landing)