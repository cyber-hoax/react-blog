import React, {useEffect} from 'react'
import {db} from '../firebase'
import Typography  from '@material-ui/core/Typography'

const BlogPage = ({name }) => {


    useEffect(() => {
        
        return (name) => {
            console.log(name);
            
        }
    }, [])
    
    
    
    

    return (
        <div>
         <Typography>{name}
         </Typography>
        </div>
    )
}

export default BlogPage
