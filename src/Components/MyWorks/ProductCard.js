import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core"
import {useStyles} from "./ProductCardStyle.js"
import Fade from "react-reveal/Fade"


export default function ProductCard({ photo, xs, sm, md, lg}) {
  const classes = useStyles();


  return (
      
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <Fade left>
            <Card className={classes.root}>
                <CardActionArea classes={{
                root: classes.actionArea,
                focusHighlight: classes.focusHighlight
                }} >
                    <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Contemplative Reptile"
                    height="280"
                    image={photo}
                    title="image-title"
                    />
                    <CardContent className={classes.cardContent}>
                        <div className={classes.contentHeader}>
                            <Typography className={classes.title} variant="subtitle1" align="center" component="p">
                                Product
                            </Typography>
                            <p className={classes.price}>19.99 $</p>
                        </div>
                        <p style={{margin : "8px 0px"}}>Product example</p>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions>
                        <Button  className={classes.cardBtn} size="small" >
                        See in store
                        </Button>
                        <Button  className={classes.cardBtn} size="small" >
                        Order now
                        </Button>
                </CardActions>
            </Card>
            </Fade>
        </Grid>
        
  );
}