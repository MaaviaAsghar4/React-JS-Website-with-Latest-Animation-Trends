import { Typography, Grid, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NearMeIcon from '@material-ui/icons/NearMe'
import classified from '../../images/olx.png'
import quiz from '../../images/quiz.jpg'
import mutify from '../../images/mutify.png'
import React from 'react'

const useStyles = makeStyles({
    container: {
        padding: '20px 20px',
        background: 'linear-gradient(180deg, #dad2d2, #f7f7f7)',
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 200,
    },
    project: {
        fontWeight: 'bold',
        color: '#00539CFF',
        fontSize: '1.4rem',
        marginBottom: '5px'
    },
    detail: {
        color: '#0063B2FF',
        fontSize: '0.8rem'
    },
    icon: {
        color: '#f7f7f7'
    },
    btn: {
        background: 'linear-gradient(180deg, #00539CFF, #0063B2FF)'
    },
    ahref: {
        textDecoration: 'none',
        color: '#f7f7f7',
        fontWeight: 'bold'
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '50px',
        color: '#f7f7f7',
        border: '2px solid #00539CFF',
        backgroundColor: '#00539CFF',
        boxShadow: '0 0 10px grey',
        borderRadius: '0.5rem'
    },
    heading: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '70px auto 50px auto'
    }
})
const Cards = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Box>
                <Typography className={classes.title}>
                    Portfolio
                </Typography>
            </Box>
            <Box>
                <Typography className={classes.heading}>
                    Web Applications
                </Typography>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Quiz App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        ExpenseTracker App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Covid19 App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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

                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Chat App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Todo App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Chat App firebase
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        todo App firebase
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Calculator App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        StopWatch App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
            </Box>
            <Box>
                <Typography className={classes.heading}>
                    Websites
                </Typography>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia component='img' image={classified} title='Classified Ad website' className={classes.media} />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        OLX
                                </Typography>
                                    <Typography className={classes.detail}>
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={mutify} title='Mutify Website' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Mutify
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Mutify is a product that helps apple user to control their microphone from anywhere at their comfort.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Shoe Store App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={quiz} title='Quiz App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Restaurant Website
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Quiz Application developed in Vanilla JS with operations of object oriented programming.
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
            </Box>
        </div>
    )
}

export default Cards
