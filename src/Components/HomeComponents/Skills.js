import { Typography, Box } from '@material-ui/core'
import html from '../../images/html2.png'
import css from '../../images/css2.png'
import js from '../../images/js2.png'
import react from '../../images/react2.png'
import redux from '../../images/redux.png'
import firebase from '../../images/firebase.png'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#f7f7f7',
        padding: '100px 20px 10px 20px'
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        color: '#00539CFF',
        textAlign: 'center',
    },
    info: {
        fontSize: '1.4rem',
        color: '#0063B2FF',
        marginTop: '20px',
        textAlign: 'center'
    },
    skills: {
        fontSize: '1.1rem',
        color: '#0063B2FF',
        marginTop: '20px',
        textAlign: 'center'
    },
    img: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    avatar: {
        height: '120px',
        width: '120px',
        marginTop: '50px'
    }
}))

const Skills = () => {

    const classes = useStyles()
    return (
        <Box component='div'>
            <Box className={classes.container}>
                <Box>
                    <Typography className={classes.title}>
                        Skills
                </Typography>
                    <Typography className={classes.info}>
                        I am vastly skilled in frontend web development with expertise in Firebase for backend integration
                </Typography>
                    <Typography className={classes.skills}>
                        Following are the technologies in which I have strong command,
                </Typography>
                    <Box className={classes.img}>
                        <img className={classes.avatar} src={html} alt='HTMLS' />
                        <img className={classes.avatar} src={css} alt='CSS3' />
                        <img className={classes.avatar} src={js} alt='JS' />
                        <img className={classes.avatar} src={react} alt='React JS' />
                        <img className={classes.avatar} src={redux} alt='React Redux' />
                        <img className={classes.avatar} src={firebase} alt='Firebase' />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills
