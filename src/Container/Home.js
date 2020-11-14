import { makeStyles } from '@material-ui/core'
import React from 'react'
import Connect from '../Components/HomeComponents/Connect';
import ContactMe from '../Components/HomeComponents/ContactMe';
import LandingPage from '../Components/HomeComponents/LandingPage'
import LandingPhoto from '../Components/HomeComponents/LandingPhoto'
import Project from '../Components/HomeComponents/Project';
import Skills from '../Components/HomeComponents/Skills';

const useStyles = makeStyles((theme) => ({
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '90vh',
        background: 'linear-gradient(180deg, #dad2d2, #f7f7f7)',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    footer: {
        backgroundColor: '#101820ff',
        color: '#f7f7f7',
        padding: '20px 20px',
        textAlign: 'center'
    }
}));

const Home = () => {

    const classes = useStyles();
    return (
        <div>
            <div className={classes.flex}>
                <LandingPage />
                <LandingPhoto />
            </div>
            <Skills />
            <Project />
            <ContactMe />
            <Connect />
            <div className={classes.footer}>
                CopyRights Reserved
            </div>
        </div>
    )
}

export default Home
