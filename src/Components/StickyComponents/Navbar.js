import React from 'react'
import { AppBar, Toolbar, Avatar, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import HomeIcon from '@material-ui/icons/Home';
import Profile from '../../images/profile.png'

const Navbar = () => {
    const [value, setValue] = React.useState('home');
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Avatar alt='Logo' src={Profile} />
                    <BottomNavigation value={value} showLabels onChange={handleChange}>
                        <BottomNavigationAction label='Home' value='home' icon={<HomeIcon />} />
                        <BottomNavigationAction label='About' value='about' icon={<RecentActorsIcon />} />
                        <BottomNavigationAction label='Contact' value='contact' icon={<PermContactCalendarIcon />} />
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
