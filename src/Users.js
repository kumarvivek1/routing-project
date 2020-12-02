import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    return (
        <div>
            <h2>Listing Users - {users.length}</h2>
            <ul>
                {
                    users.map((u, i) => {
                        return <li key={i}><Link to={`/users/${u.id}`}>{u.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users