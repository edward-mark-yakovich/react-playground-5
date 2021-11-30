import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

import { Counter } from '../counter';
import { Post } from '../post';
import { Home } from '../home';

export class App extends React.Component {
    constructor() {
        super();
    }

    outputNav() {
        return (
            <div className='ui-app__navigation'>
                <Link
                    className='ui-app__navigation__link'
                    activeClassName='ui-app__navigation__link--active'
                    to='/'
                    exact={ true }
                >Counter</Link>

                <Link
                    className='ui-app__navigation__link'
                    activeClassName='ui-app__navigation__link--active'
                    to='/post'
                    exact={ true }
                >Post</Link>

                <Link
                    className='ui-app__navigation__link'
                    activeClassName='ui-app__navigation__link--active'
                    to='/home'
                    exact={ true }
                >Home</Link>
            </div>
        );
    }

    render() {
        return (
            <div className='ui-app'>
                
                {this.outputNav()}

                <Switch>
                    <Route
                        path='/'
                        exact={ true }
                        render={ () => <Counter name='Monica Geller'/> }
                    />

                    <Route
                        path='/post'
                        exact={ true }
                        component={ Post }
                    />

                    <Route
                        path='/home'
                        exact={ true }
                        component={ Home }
                    />
                </Switch>
                
            </div>
        );
    }
}