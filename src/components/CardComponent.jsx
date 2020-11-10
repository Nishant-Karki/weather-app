import React from "react";
import { Grid,Card, makeStyles, CardActionArea, CardMedia, CardHeader, CardContent, Typography,Container, createMuiTheme} from "@material-ui/core";
import {FiWind} from 'react-icons/fi'
import {BsDropletHalf} from 'react-icons/bs'
import {BiSun} from 'react-icons/bi'
import {GiTornado} from 'react-icons/gi'
import {ImLocation} from 'react-icons/im'



import './card.css';



const useStyles=makeStyles({
  root:{
    minHeight:240,
    minWidth:250,
  },header:{alignItems:'center',
  display:'flex',
  height:32,
  justifyContent:'space-between',
  paddingTop:4},
  location:{
    height:20,minWidth:100
  },
  media:{
    height:110,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:80
  }
  ,
  details:{
    display:'flex',
    alignItems:'center'
    ,justifyContent:'space-between',
    marginLeft:10,
    marginRight:10
  },

})

function CardComponent() {
const classes = useStyles();
  
  return <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{minHeight:"100vh"}}

>
  <Grid item > 
  <Card className={classes.root}>
      <Container className={classes.header}>
        <Card className={classes.location} >
        
        <Typography style={{fontSize:13}}><ImLocation/>time</Typography>

        </Card>
        <Typography>time</Typography>
       </Container>
       <CardActionArea>
      <CardMedia
      className={classes.media}>
      <GiTornado/>
      </CardMedia>
    <CardContent className={classes.details}>
      <div>
      <div style={{fontSize:13}}>

        <Typography><FiWind/> wind</Typography>
        <Typography><BsDropletHalf/> water</Typography>
        <Typography><BiSun/>sun</Typography>
      </div>
      </div>
      <div>
        <Typography variant='h2' component="h1">36</Typography>

      </div>
    </CardContent>
    </CardActionArea>
  </Card>
  </Grid>
</Grid>
}

export default CardComponent;
