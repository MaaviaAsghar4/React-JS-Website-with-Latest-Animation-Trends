import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Box, Typography } from '@material-ui/core'
import fiverr from '../../images/fiverr.png'
import guru from '../../images/guru.png'
import facebook from '../../images/facebook.png'
import linkedIn from '../../images/linkedin.png'
import github from '../../images/github.svg'

const useStyles = makeStyles({
    container: {
        backgroundColor: '#00539CFF',
        color: '#f7f7f7',
        padding: '20px 20px'
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '30px'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '40px'
    },
})
const Connect = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography className={classes.title}>
                Connect Now
            </Typography>
            <Box component='div' className={classes.flex}>
                <a href='https://www.facebook.com/maaviaasghar/'><Avatar src={facebook} alt='' /></a>
                <a href='https://github.com/MaaviaAsghar4'><Avatar src={github} alt='' /></a>
                <a href='https://www.linkedin.com/in/maaviaasghar/'><Avatar src={linkedIn} alt='' /></a>
                <a href='https://www.fiverr.com/maaviasghar4?up_rollout=true'><Avatar src={fiverr} alt='' /></a>
                <a href='https://www.guru.com/freelancers/maavia-asghar'><Avatar src={guru} alt='' /></a>
            </Box>
        </div>
    )
}

export default Connect
