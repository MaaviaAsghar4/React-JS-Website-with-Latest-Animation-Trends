import React from 'react'
import {Route,Switch} from 'react-router-dom'
import About from '../Container/About'
import Contact from '../Container/Contact'
import Home from '../Container/Home'

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </div>
    )
}

export default Routing
