import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
}))

const Cards = ({ type, time, title, content, name, image, button }) => {

  const classes = useStyle();

  return (
    <Card style={{ height: '500px', borderRadius: '7px' }}>
      <CardMedia
        component='img'
        alt='image'
        height='300'
        image={image}
        title='this is an image'
      />
      <Grid container>
        <Grid item md={8} style={{ paddingTop: '5px' }}>
          <Typography style={{ paddingLeft: '15px' }} variant='caption'>
            {type}
          </Typography>
        </Grid>
        <Grid item md={4} style={{ paddingTop: '9px' }}>
          
          <Typography variant='h3'>- {time}</Typography>
        </Grid>
      </Grid>
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {title}
        </Typography>
        <Typography color='textSecondary' variant='body3'>
          {content}
        </Typography>
      </CardContent>

      <Grid container spacing={2} alignContent='center'>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item md={5}>
          <Typography variant='caption'>{name}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Cards;
