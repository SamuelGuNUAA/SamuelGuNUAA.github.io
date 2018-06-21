import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import HomePageView from './Home'
import ResumeView from './Resume';
import ProjectView from './Project';
import ContactView from './Contact';


export default () => ((
    <div>
        <Route exact path="/" component={ HomePageView } />
        <Route exact path="/resume" component={ ResumeView } />
        <Route exact path="/project" component={ ProjectView } />
        <Route exact path="/contact" component={ ContactView } />

    </div>
));