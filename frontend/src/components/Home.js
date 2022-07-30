import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Generation from './Generation';
import Dragon from './Dragon';
import AccountInfo from './AccountInfo';
import { logout } from '../action/account';

class Home extends Component {
    render() {
        return (
            <div>
                <AccountInfo />
                <Button onClick={this.props.logout} className='logout-button'>
                    Log Out
                </Button>
                <h2>Dragon Stack</h2>
                <Generation/>
                <Dragon/>
                <hr />
                <a href='/account-dragons'>Account Dragons</a> {/* <Link to='/account-dragons'>Account Dragons</Link> */}
                <br />
                <a href='/public-dragons'>Public Dragons</a>
            </div>
        );
    }
}

export default connect(null, { logout })(Home);