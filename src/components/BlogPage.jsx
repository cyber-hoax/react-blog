import React, {useState} from 'react'
import {db} from '../firebase'
import Typography  from '@material-ui/core/Typography'

const BlogPage = ({location : {state} }) => {
    const  cardId = state && state.cardId
    const [blog , setBlock] = useState("")


    db.collection('Blog')
    .doc(cardId)
    .onSnapshot(snapshot =>{
        setBlock(snapshot.data())
    })
    
   
    
    
    
    

    return (
      <div>
        <Typography>
          {cardId === '8JSUuaCTxLUbWA8ZjgwC'}
          <img src={blog.image} alt=""/> 
          <h1>{blog.name}</h1>
          
        </Typography>
        
      </div>
    );
}

export default BlogPage
