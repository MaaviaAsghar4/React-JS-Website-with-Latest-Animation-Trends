import React from 'react'
import Photo from '../../images/development-4536630.svg'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '80vw'
        }
    },
    avatar: {
        height: '400px',
        margin: '30px 20px 20px 10px',
        [theme.breakpoints.down('sm')]: {
            height: '200px'
        }
    }
}))

const LandingPhoto = () => {

    const classes = useStyles()
    return (
        <div className={classes.container}>
            <img className={classes.avatar} src={Photo} alt='' />
        </div>
    )
}

export default LandingPhoto
