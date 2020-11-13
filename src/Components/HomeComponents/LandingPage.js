import React from 'react'
import { Paper,Box, Typography, Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (
        <Box>
            <Box component='div'>
                <Paper>
                    <Typography>
                        Hi! 
                    </Typography>
                    <Typography>
                        I am Maavia Asghar
                    </Typography>
                    <Typography>
                       a passionate freelancer and web development enthusiast.
                    </Typography>
                </Paper>
            </Box>
            <Button variant='contained' color='secondary'><Link to='/portfolio'>Visit Portfolio</Link></Button>
        </Box>
    )
}

export default LandingPage
