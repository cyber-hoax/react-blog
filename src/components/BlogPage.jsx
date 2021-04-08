import React, { useState ,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { db } from '../firebase';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:25,
  },

  imageContainer: {
      marginTop:40,
    height: 447,
    width: 696,
  },
  img: {
      marginTop:20,
    width: '100%',
    height: ' 100%',
    borderRadius: '.25rem',
  },
  main:{
      marginTop:25
  }
}));


const BlogPage = () => {
  const {id}= useParams() 

  const [blog, setBlock] = useState('');

  useEffect(() => {
    db.collection('Blog')
      .where('name', '==', `${id}`)
      .onSnapshot((snapshot) => {
        snapshot.forEach((res) => {
          setBlock(res.data());
        });
      });
   
  }, [id
  ])
  


const classes = useStyle();

  return (
    <div>

      <div>
        <div className={classes.container}>
          <Avatar>w</Avatar>
          <Typography variant='subtitle1'>{blog.name}</Typography>
          <Typography variant='subtitle2'>{blog.time}</Typography>

          <div className={classes.imageContainer}>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              {blog.title}
            </Typography>
            <Typography variant='h6' style={{ textAlign: 'center', marginTop:'15px' }}>
              {blog.subheader}
            </Typography>
            <img className={classes.img} src={blog.image} alt='' />

            <div className={classes.main}>
              <Typography variant='body2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                expedita corporis, ex odio rerum recusandae adipisci dolor minus
                sapiente facilis quod nam est eum eos, perspiciatis, debitis
                officiis aliquam nesciunt. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Maxime expedita corporis, ex odio
                rerum recusandae adipisci dolor minus sapiente facilis quod nam
                est eum eos, perspiciatis, debitis officiis aliquam nesciunt.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                expedita corporis, ex odio rerum recusandae adipisci dolor minus
                sapiente facilis quod nam est eum eos, perspiciatis, debitis
                officiis aliquam nesciunt. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Maxime expedita corporis, ex odio
                rerum recusandae adipisci dolor minus sapiente facilis quod nam
                est eum eos, perspiciatis, debitis officiis aliquam nesciunt.
                <br />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
