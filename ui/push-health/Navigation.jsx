import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'reactstrap';

import LogoMenu from '../shared/LogoMenu';
import Login from '../shared/auth/Login';

export default class Navigation extends React.PureComponent {
  render() {
    const { user, setUser, notify, children } = this.props;

    return (
      <React.Fragment>
        <Navbar dark color="dark" sticky="top" className="flex-column">
          <Nav className="w-100 justify-content-between">
            <LogoMenu menuText="Push Health" />
            <Login user={user} setUser={setUser} notify={notify} />
          </Nav>
          {children}
        </Navbar>
      </React.Fragment>
    );
  }
}

Navigation.propTypes = {
  user: PropTypes.shape({}).isRequired,
  setUser: PropTypes.func.isRequired,
  children: PropTypes.element,
};

Navigation.defaultProps = {
  children: null,
};
