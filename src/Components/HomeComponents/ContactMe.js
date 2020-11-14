import { Grid, Paper, Typography, Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import React from 'react'

const useStyles = makeStyles((theme)=>({
    container: {
        backgroundColor: '#f7f7f7',
        padding: '20px 20px',
        textAlign: 'center'
    },
    main: {
        padding: '20px 20px',
    },
    query: {
        fontSize: '2.4rem',
        color: '#00539CFF',
        fontWeight: 'bold',
        marginTop: '30px'
    },
    query2: {
        fontSize: '1.2rem',
        marginTop: '30px',
        color: '#0063B2FF'
    },
    btn: {
        marginTop: '20px',
        background: 'linear-gradient(180deg, #0063B2FF, #00539CFF)',
    },
    link: {
        color: '#f7f7f7',
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    icon: {
        color: '#f7f7f7',
    }
}))

const ContactMe = () => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Paper elevation={3} className={classes.main}>
                        <Typography className={classes.query}>
                            Got a Project?
                        </Typography>
                        <Typography  className={classes.query2}>
                            Get in <strong>Touch Now</strong> to get high quality products and avail valuable discounts
                        </Typography>
                        <Button variant='contained' endIcon={<PhoneIphoneIcon className={classes.icon}/>} className={classes.btn}><Link className={classes.link} to='/contact'>Contact Now</Link></Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactMe
