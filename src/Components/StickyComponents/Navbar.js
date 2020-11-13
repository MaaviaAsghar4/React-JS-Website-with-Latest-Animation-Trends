import React from 'react'
import { AppBar, Toolbar, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Profile from '../../images/profile.png'

const useStyles = makeStyles((theme) => ({
    navbarFlex: {
        display: 'flex',
        marginLeft: 'auto',
    },
    navbarList: {
        marginLeft: 30,
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: '#f7f7f7',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        }
    },
    appBar: {
        backgroundColor: '#101820ff',
        color: '#f7f7f7',
    }
}));


const Navbar = () => {

    const classes = useStyles();
    return (
        <div>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar >
                    <Link to='/'><Avatar alt='Logo' src={Profile} /></Link>
                    <div className={classes.navbarFlex}>
                        <Typography className={classes.navbarList}>
                            <Link className={classes.link} to='/'>Home</Link>
                        </Typography>
                        <Typography className={classes.navbarList}>
                            <Link className={classes.link} to='/portfolio'>Portfolio</Link>
                        </Typography>
                        <Typography className={classes.navbarList}>
                            <Link className={classes.link} to='/about'>About</Link>
                        </Typography>
                        <Typography className={classes.navbarList}>
                            <Link className={classes.link} to='/contact'>Contact</Link>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
