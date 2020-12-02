import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserShow = (props) => {
    const [name, setName] = useState('')
    const [post, setPost] = useState([])
    const { id } = props.match.params

    useEffect(() => {
        const url1 = `https://jsonplaceholder.typicode.com/users/${id}`
        const url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`

        axios.get(url1)
            .then((res) => {
                const n = res.data.name
                setName(n)
            })
            .catch((err) => {
                alert(err.message)
            })

        axios.get(url2)
            .then((res) => {
                const p = res.data
                setPost(p)
            })
            .catch((err) => {
                alert(err.message)
            })

    }, [])

    return (
        <div>
            <h1>UserName:-{name}</h1>
            <h2>Posts written by user</h2>
            <ul>
                {
                    post.map((p, i) => {
                        return <li key={i}><Link to={`/posts/${p.id}`}>{p.title}</Link></li>
                    })
                }
            </ul>

        </div>
    )
}
export default UserShow