import React from 'react'
import { Typography, Grid, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import NearMeIcon from '@material-ui/icons/NearMe';
import classified from '../../images/classified.png'
import quiz from '../../images/quiz.png'
import mutify from '../../images/mutify.png'

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 300,

    },
    media: {
        height: 200,
    }
}))

const Project = () => {
    const classes = useStyles()
    return (
        <Box>
            <Typography className={classes.title}>
                Projects
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia component='img' image={classified} title='Classified Ad website' className={classes.media}/>
                            <CardContent>
                                <Typography className={classes.project}>
                                    OLX
                                </Typography>
                                <Typography  className={classes.detail}>
                                    OLX is a classified Ad website that allow users to display their product ads and get buyers instantly.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                <a className={classes.ahref} href='http://maaviasghar-olx.surge.sh'>OLX</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia  className={classes.media} component='img' image={mutify} title='Mutify Website' />
                            <CardContent>
                                <Typography className={classes.project}>
                                    Mutify
                                </Typography>
                                <Typography className={classes.detail}>
                                    Mutify is a product that helps apple user to control their microphone from anywhere.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                <a className={classes.ahref} href='http://maaviasghar-mutify.surge.sh'>Mutify</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                            <CardContent>
                                <Typography className={classes.project}>
                                    Quiz App
                                </Typography>
                                <Typography className={classes.detail}>
                                    Quiz Application developed in JavaScript.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                <a className={classes.ahref} href='https://maaviaportfolio.web.app/WebandMobile/quizApplication/quiz.html'>Quiz App</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Button className={classes.linkBtn} variant='container' endIcon={<NearMeIcon />}><Link className={classes.link} to='/portfolio'>More</Link></Button>
        </Box>
    )
}

export default Project
