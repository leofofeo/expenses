import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expenses App</h1>
        <nav>
            <NavLink
                to="/"
                className="link"
                activeClassName="is-active"
                exact={true}
            >
                Home
            </NavLink>
            <NavLink
                to="/create"
                className="link"
                activeClassName="is-active"
                exact={true}
            >
                Add Expense
            </NavLink>
            <NavLink
                to="/help"
                className="link"
                activeClassName="is-active"
                exact={true}
            >
                Help
            </NavLink>
        </nav>
    </header>
);
export default Header;
