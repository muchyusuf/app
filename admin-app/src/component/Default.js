import React from 'react'
import {BrowseRouter as Router, Route, Link} from 'react-router-dom'

const BasicExample = ()=> (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                {/* <li>
                    <Link to ="/Topic">Topic</Link>
                </li> */}
            </ul>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            {/* <Route exact path="/topic" component={Topic}/> */}

        </div>
    </Router>
);

const Home =()=>(
    <div>
        <h2>
            Home
        </h2>
    </div>
)
const About =()=>(
    <div>
        <h2>
            About
        </h2>
    </div>
)
