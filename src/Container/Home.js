import { makeStyles } from '@material-ui/core'
import React from 'react'
import LandingPage from '../Components/HomeComponents/LandingPage'
import LandingPhoto from '../Components/HomeComponents/LandingPhoto'
import Project from '../Components/HomeComponents/Project';
import Skills from '../Components/HomeComponents/Skills';

const useStyles = makeStyles((theme) => ({
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: 'linear-gradient(180deg, #dad2d2, #f7f7f7)',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
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
        </div>
    )
}

export default Home
