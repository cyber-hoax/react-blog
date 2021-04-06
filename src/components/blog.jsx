
import React, { useState , useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img from '../assets/img.jpg';
import Avatar from '@material-ui/core/Avatar';
import Cards from './card';
import {db} from '../firebase'
import {Container} from '@material-ui/core'


const Blog = () => {


  const [blog , setBlog] = useState([])
  const [ loading, setLoading] = useState(false)

  const blogs = db.collection('Blog')


  function GetBlog(){
    setLoading(true)
    blogs.onSnapshot((snapshot) =>{
      const items = []
      snapshot.forEach((doc) =>{
        items.push(doc.data())
      })
      setBlog(items);
      console.log(items)
      setLoading(false)
    })
  }

  useEffect(() =>{
    GetBlog()
  },[])


  
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2} justify="space-evenly">
          {blog.map((item , i ) => (
            <Grid key={i}item md={4}>
              <Cards
                type={item.type}
                time={item.time}
                title={item.title}
                content={item.content}
                name={item.name}
                image = {item.image}
              />
              <br />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}

export default Blog
