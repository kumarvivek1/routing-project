import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'

const ShowPost = (props) => {
    const [name, setName] = useState('')
    const [post, setPost] = useState([])
    const [userId, setUserId] = useState('')
    const [comments, setComments] = useState([])
    const { id } = props.match.params

    useEffect(() => {
        const url3 = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        const url2 = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get(url2)
            .then((res) => {
                const p = res.data
                setPost(p)
                setUserId(res.data.userId)
            })
            .catch((err) => {
                alert(err.message)
            })

        axios.get(url3)
            .then((res) => {
                const c = res.data
                setComments(c)
            })
            .catch((err) => {
                alert(err.message)
            })

    }, [])

    useEffect(() => {
        const url1 = `https://jsonplaceholder.typicode.com/users/${userId}`
        axios.get(url1)
            .then((res) => {
                const n = res.data.name
                setName(n)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [userId])

    return (
        <div>
            <div>
                <h1>UserName:-{name}</h1>
                <h2>Title:-{post.title}</h2>
                <h3>Body:-{post.body}</h3>
            </div>
            <div id='comments'>
                <ul>
                    {
                        comments.map((c, i) => {
                            return <li key={i}>{c.body}</li>
                        })
                    }
                </ul>
            </div>
            <p><Link to={`/users/${userId}`}>more posts of author: {name}</Link></p>
        </div>
    )
}
export default ShowPost