import React, {useEffect} from 'react'
import { Typography, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NearMeIcon from '@material-ui/icons/NearMe';
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme)=>({
    landing: {
        margin: '40px 20px 10px 40px',
        width: '50vw',
        [theme.breakpoints.down('sm')]: {
            margin: '20px 10px 10px 20px',
            width: '80vw',
            textAlign: 'center',
        }
    },
    salutation: {
        fontSize: '2.4rem',
        color: '#00539CFF',
        fontWeight: 'bold'
    },
    title: {
        fontSize: '2rem',
        color: '#0063B2FF'
    },
    name: {
        fontWeight: 'bold'
    },
    skills: {
        fontSize: '1.6rem',
        color: '#0063B2FF',
    },
    btn: {
        marginTop: '10px',
        background: 'linear-gradient(180deg, #0063B2FF, #00539CFF)'
    },
    link: {
        color: '#f7f7f7',
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    icon: {
        color: '#f7f7f7'
    }
}))

const LandingPage = () => {

    useEffect(()=>{
        AOS.init({})
    },[])
    const classes = useStyles();
    return (
        <Box data-aos='slide-right' data-aos-easing="ease-in-out" data-aos-delay="50">
            <Box component='div' className={classes.landing}>
                <Typography className={classes.salutation}>
                    Hi!
                    </Typography>
                <Typography className={classes.title}>
                    I am <span className={classes.name}>Maavia Asghar</span>
                </Typography>
                <Typography className={classes.skills}>
                    A Passionate Freelancer and <br />A Web Developer...
                    </Typography>
                <Button endIcon={<NearMeIcon className={classes.icon} />} className={classes.btn} variant='contained' ><Link className={classes.link} to='/portfolio'>Visit Portfolio</Link></Button>
            </Box>
        </Box>
    )
}

export default LandingPage
