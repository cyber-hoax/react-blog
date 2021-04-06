import React from 'react'
import {db} from '../firebase'

const BlogPage = () => {

    db.collection('Blog')
    .get()
    .then(snapshot =>{
        const blogs = []
        snapshot.forEach(doc =>{
            const data = doc.data()
            blogs.push(data)
            console.log(blogs)
        })
    })
    .catch(error => 
        console.log(error)
        
    )


    return (
        <div>
          
        </div>
    )
}

export default BlogPage
