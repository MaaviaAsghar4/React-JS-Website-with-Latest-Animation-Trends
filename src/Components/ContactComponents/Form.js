import { TextField, Box, Typography, Button } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';
import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
    },
    text: {
        width: '80vw',
        marginTop: '30px'
    },
    comment: {
        width: '80vw',
        marginTop: '30px'
    },

    linkBtn: {
        border: '2px solid #00539CFF',
        color: '#f7f7f7',
        fontWeight: 'bold',
        width: '150px',
        margin: '40px auto',
        placeItems: 'center',
        background: 'linear-gradient(180deg, #00539CFF, #0063B2FF)'
    },
    btnContainer: {
        textAlign: 'center'
    },
    icon: {
        color: '#f7f7f7'
    },
    msg: {
        margin: '20px 20px',
        textAlign: 'center',
        color: '#00539CFF',
        fontSize: '1.8rem',
        fontWeight: 'bold'
    },
    msg2: {
        textAlign: 'center',
        color: '#00539CFF',
        fontSize: '1.4rem',
        fontWeight: 'bold'
    }
})
const Form = () => {

    useEffect(()=>{
        AOS.init({})
    },[])
    const classes = useStyles()
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [comment, setComment] = useState('') 

    let handleName = e => {
        setName(e.target.value)
    }
    let handleEmail = e => {
        setEmail(e.target.value)
    }
    let handleComment = e => {
        setComment(e.target.value)
    }
    let submit = () => {
        console.log(name,comment,email)
        setName('')
        setEmail('')
        setComment('')
    }

    return (
        <div className={classes.container}>
            <Box>
                <Typography className={classes.msg} data-aos='slide-left'>
                    I am ready to help you in Your Project
                </Typography>
                <Typography className={classes.msg2} data-aos='slide-right'>
                    Get in touch with me Now
                </Typography>
                <form noValidate autoComplete="off" className={classes.form}>
                    <TextField data-aos='slide-left' value={name} name='name' onChange={handleName} className={classes.text} required id="name" label="Name" variant="outlined" helperText='Please Insert Your FullName' /><br />
                    <TextField data-aos='slide-right' value={email} name='email' onChange={handleEmail} className={classes.text} required id="name" label="Email" variant="outlined" helperText='e.g. abc@abc.com' /><br />
                    <TextField data-aos='slide-left' value={comment} name='comments' onChange={handleComment} className={classes.comment} required id="Comment" label="Comments" multiline rows={4} variant="outlined" />
                </form>
            </Box>
            <Box className={classes.btnContainer} data-aos='flip-down'>
                <Button className={classes.linkBtn} onClick={submit} variant='contained' endIcon={<DoneIcon className={classes.icon} />}>Submit</Button>
            </Box>
        </div>
    )
}

export default Form
