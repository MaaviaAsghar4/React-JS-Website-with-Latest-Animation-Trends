import React from 'react'
import {Route,Switch} from 'react-router-dom'
import About from '../Container/About'
import Contact from '../Container/Contact'
import Home from '../Container/Home'
import Portfolio from '../Container/Portfolio'

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/portfolio' component={Portfolio} />
            </Switch>
        </div>
    )
}

export default Routing
