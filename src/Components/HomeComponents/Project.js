import React, {useEffect} from 'react'
import { Typography, Grid, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import NearMeIcon from '@material-ui/icons/NearMe';
import classified from '../../images/olx.png'
import quiz from '../../images/quiz.jpg'
import mutify from '../../images/mutify.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#f7f7f7',
        padding: '20px 20px',
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        color: '#00539CFF',
        textAlign: 'center',
        margin: '100px auto 30px auto',
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
    linkBtn: {
        border: '2px solid #00539CFF',
        width: '150px',
        margin: '40px auto',
        placeItems: 'center',
        background: 'linear-gradient(180deg, #00539CFF, #0063B2FF)'
    },
    link: {
        textDecoration: 'none',
        color: '#f7f7f7',
        fontWeight: 'bold'
    },
    btnContainer: {
        textAlign: 'center'
    }
}))

const Project = () => {

    useEffect(()=>{
        AOS.init({})
    },[])
    const classes = useStyles()
    return (
        <Box maxWidth='lg' className={classes.container} data-aos='zoom-in'>
            <Typography className={classes.title}>
                Projects
            </Typography>
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={6} md={4} data-aos='zoom-in' data-aos-delay='150'>
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
                <Grid item xs={12} sm={6} md={4} data-aos='zoom-in' data-aos-delay='250'>
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
                <Grid item xs={12} sm={6} md={4} data-aos='zoom-in' data-aos-delay='150'>
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
            </Grid>
            <Box className={classes.btnContainer} data-aos='flip-down'>
                <Button className={classes.linkBtn} variant='contained' endIcon={<NearMeIcon className={classes.icon} />}><Link className={classes.link} to='/portfolio'>More</Link></Button>
            </Box>
        </Box>
    )
}

export default Project
