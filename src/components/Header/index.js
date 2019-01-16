import React, { Component } from 'react';

import Logo from '../Logo';
import NavBar from '../NavBar';
import SiteName from './SiteName';
import Wrapper from './Wrapper';

class Header extends Component {

    render() {
        return <div><Wrapper><Logo/><SiteName/></Wrapper><NavBar/></div>
    }

}

export default Header;
