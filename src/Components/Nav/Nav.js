import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser, logoutUser } from '../../ducks/authReducer'
import { Link, withRouter } from 'react-router-dom'


function Nav(props) {
    const { getUser, logoutUser } = props

    const handleLogout = () => axios.delete('/auth/api/logout').then(res => props.logoutUser())
    useEffect(() => {
        axios.get('/api/auth/user').then(res => {
            getUser(res.data)
        }).catch(err => {
            alert(err.response.request.response)
            props.history.push('/')
        })
    })


    return (
        <div>Navbar.js

            <Link onClick={() => handleLogout()} to='/' >Logout</Link>
        </div>
    )

}
const mapStateToProps = reduxState => reduxState
export default withRouter(connect(mapStateToProps, { getUser, logoutUser })(Nav))