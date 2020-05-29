import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Inicial from './pages/Inicial';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Inicial} />
            </Switch>
        </BrowserRouter>
    )
}