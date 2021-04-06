import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img from '../assets/img.jpg'
import Avatar from '@material-ui/core/Avatar'




const Cards = ({type , time , title, content , name, image}) =>{

    return (
      
        <Card>
          <CardMedia
            component='img'
            alt='image'
            height='300'
            image={image}
            title='this is an image'
          />
          <Grid container>
            <Grid item md={6}>
              <Typography variant='h5'>{type}</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant='h6'>{time}</Typography>
            </Grid>
          </Grid>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {content}
            </Typography>
          </CardContent>

          <Grid container spacing={2} alignContent='center'>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item>
              <Typography>{name}</Typography>
            </Grid>
          </Grid>
        </Card>
      
    );
}


export default Cards