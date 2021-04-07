
import React, { useState , useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Cards from './card';
import {db} from '../firebase'
import {Container} from '@material-ui/core'
import BlogPage from './BlogPage'
import FirbaseLooper from '../tools'



const Blog = () => {


  const [blog , setBlog] = useState([])
  const [ loading, setLoading] = useState(false)
  const [block , setBlock] = useState(true)
  const [uid , setUid] = useState("")

  const blogs = db.collection('Blog')


  function GetBlog(){
    setLoading(true)
    blogs.onSnapshot((snapshot) =>{
      const data = FirbaseLooper(snapshot)
      setBlog(data);
      console.log(data)
      setLoading(false)
    })
  }
  

  useEffect(() =>{
    GetBlog()
  },[])

 
  
  const submitHandler = (i) =>{
    console.log(block)
    
    blogs.doc(i.target.value)
    .onSnapshot((snapshot) =>{
      console.log(snapshot.data())
       setUid(i.target.value)
    })
   
    console.log(uid)

    


   
  }
  
    return (
      <Container maxWidth='lg'>
        <Grid container spacing={2} justify='space-evenly'>
          {blog.map((item, i) => (
            <Grid key={i} item md={4}>
              <Cards
                image={item.image}
                type={item.type}
                time={item.time}
                title={item.id}
                content={item.content}
                name={item.name}
              />
              <br />

              <button onClick={submitHandler} value={item.id}>
                click me
              </button>
              <Link to='/blog'>
                <button name={item.name} value={item.id}>
                  
                  click here
                </button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}




export default Blog