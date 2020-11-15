import { Typography, Grid, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NearMeIcon from '@material-ui/icons/NearMe'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import {Link} from 'react-router-dom'
import classified from '../../images/olx.png'
import quiz from '../../images/quiz.jpg'
import mutify from '../../images/mutify.png'
import restaraunt from '../../images/restaraunt.jpeg'
import shoestore from '../../images/shoestore.png'
import expense from '../../images/expense.png'
import covid from '../../images/covid.jpg'
import todo2 from '../../images/todo2.png'
import chat from '../../images/chat.png'
import chatreact from '../../images/chatreact.png'
import totoreact from '../../images/totoreact.png'
import stopwatch from '../../images/stopwatch.png'
import calculator from '../../images/calculator.jpeg'
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
        margin: '70px auto 50px auto',
        color: '#00539CFF',
        boxShadow: '0 0 10px gray',
        width: '60vw',
        padding: '20px 20px',
        borderRadius: '0.4rem'
    },

    linkBtn: {
        border: '2px solid #00539CFF',
        width: '150px',
        margin: '20px auto',
        placeItems: 'center',
        background: 'linear-gradient(180deg, #00539CFF, #0063B2FF)'
    },
    link: {
        textDecoration: 'none',
        color: '#f7f7f7',
        fontWeight: 'bold'
    },
    btnContainer: {
        textAlign: 'center',
        boxShadow: '0 0 10px gray',
        borderRadius: '0.4rem'
    },
    contact: {
        marginTop: '40px',
        color: '#00539CFF',
        fontWeight: 'bold',
        fontSize: '2rem',
        paddingTop: '30px'
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
                                <CardMedia className={classes.media} component='img' image={expense} title='Expense Tracker App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Expense Tracker App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Expense tracker app developed in react with the help of context api and useReducer hooks.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='http://maaviasghar-expensetracker.surge.sh/'>Expense Tracker App</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={covid} title='Covid Tracker App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Covid19 App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Covid19 tracker app built with material UI and react that tracks updates of Covid19 around the globe.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='http://maaviasghar-covid19-tracker.surge.sh/'>Covid19 App</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={chat} title='Chat App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Chat App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Chat application developed in JavaScript with google and facebook authentication using firebase.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='https://maaviaportfolio.web.app/WebandMobile/Chat-App/login.html?'>Chat App</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={todo2} title='Todo App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Todo App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Todo application developed in JavaScript with different DOM manipulation techniques in JavaScript.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='https://maaviaportfolio.web.app/WebandMobile/todo-app/todo.html?'>Todo App</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={chatreact} title='Chat App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Chat App firebase
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Chat application developed in React that manages state using Redux with one to one chat feature.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='http://maaviasghar-reactchatapp.surge.sh/'>Chat App</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={totoreact} title='Todo App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        todo App firebase
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Todo app developed in Javascript with backend integration of firebase for storing the todos.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='https://maaviaportfolio.web.app/WebandMobile/todo-app2/todo.html?'>Todo App</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={calculator} title='Calculator App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Calculator App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        Simple calculator app with JavaScript with basic functionality of add, subtract, divide, and multiply.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='https://maaviaportfolio.web.app/WebandMobile/Calculator/calc.html?'>Calculator App</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={stopwatch} title='stopwatch App' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        StopWatch App
                                </Typography>
                                    <Typography className={classes.detail}>
                                        A simple stopwatch application with JavaScript with start, pause, and reset functions.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='https://maaviaportfolio.web.app/WebandMobile/Stopwatch/index.html?'>Stopwatch App</a>
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
                                <CardMedia className={classes.media} component='img' image={shoestore} title='Shoe Store' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Shoe Store
                                </Typography>
                                    <Typography className={classes.detail}>
                                        A simple shoe store developed in React that uses the react router for changing its route.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='http://maaviasghar-shoe-store.surge.sh/'>Shoe Store</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} component='img' image={restaraunt} title='Restaurant' />
                                <CardContent>
                                    <Typography className={classes.project}>
                                        Restaurant Website
                                </Typography>
                                    <Typography className={classes.detail}>
                                        A simple static restaurant website developed with Bootsrap components and classes.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' >
                                    <a className={classes.ahref} href='https://maaviaportfolio.web.app/WebandMobile/RestarauntWebsite/home.html?'>Restaurant Website</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.btnContainer}>
                <Typography className={classes.contact}>
                    Connect Now
                </Typography>
                <Button className={classes.linkBtn} variant='contained' endIcon={<PhoneIphoneIcon className={classes.icon} />}><Link className={classes.link} to='/contact'>Contact</Link></Button>
            </Box>
        </div>
    )
}

export default Cards
