import React, {useEffect} from 'react'
import Photo from '../../images/development-4536630.svg'
import {makeStyles} from '@material-ui/core/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

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

    useEffect(()=>{
        AOS.init({})
    },[])
    const classes = useStyles()
    return (
        <div className={classes.container} data-aos="slide-left" data-aos-easing='ease-in-out' data-aos-delay='100'>
            <img className={classes.avatar} src={Photo} alt='' />
        </div>
    )
}

export default LandingPhoto
