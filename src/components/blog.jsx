import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Cards from './card';
import { db } from '../firebase';
import { Container, Typography , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FirbaseLooper from '../tools';
const useStyle = makeStyles((theme) => ({}))

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  const blogs = db.collection('Blog');

  function GetBlog() {
    setLoading(true);
    blogs.onSnapshot((snapshot) => {
      const data = FirbaseLooper(snapshot);
      setBlog(data);
      console.log(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    GetBlog();
  }, []);

    const classes = useStyle();


  return (
    <Container style={{ marginTop: '10vh', marginBottom: '10vh' }}>
      <Typography
        variant='h2'
        style={{ textAlign: 'center', paddingBottom: '150px' }}
      >
        My Blogs
      </Typography>
      <Grid container spacing={2} justify='space-evenly'>
        {blog.map((item, i) => (
          <Grid key={i} item md={4}>
            <Cards
              image={item.image}
              type={item.type}
              time={item.time}
              title={item.title}
              content={item.content}
              name={item.name}
            />
            <Link
              to={{ pathname: `/blog/${item.name}` }}
              style={{ textDecoration: 'none' }}
            >
              <Button
                style={{ position: 'relative', bottom: '50px', left: '255px' }}
                color='color= "secondary"'
                variant='outlined'
                value={item.id}
              >
                click here
              </Button>
            </Link>

            <br />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
