import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url)
            .then((res) => {
                const result = res.data
                setPosts(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    return (
        <div>
            <h1>Listing Posts -{posts.length}</h1>
            <ul>
                {
                    posts.map((post, i) => {
                        return <li key={i}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Posts