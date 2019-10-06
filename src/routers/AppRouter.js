import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route
                    path="/create"
                    component={CreateExpensePage}
                    exact={true}
                />
                <Route
                    path="/edit/:id"
                    component={EditExpensePage}
                    exact={true}
                />
                <Route path="/help" component={HelpPage} exact={true} />
                <Route component={NotFoundPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
