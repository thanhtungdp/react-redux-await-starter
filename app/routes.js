import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import AppMaster from './components/layouts/master/AppMaster';
import {HomeContainer} from './redux/containers/index';

export default () => {
    return (
        <Route path="/" component={AppMaster}>
            <IndexRoute component={HomeContainer}/>
        </Route>
    )
}