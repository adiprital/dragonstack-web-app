import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo } from '../action/accountInfo';

class AccountInfo extends Component {
    componentDidMount() {
        this.props.fetchAccountInfo();
    }

    render() {
        return (
            <div className='account-info'>
                <h3>Account Info</h3>
                <div>Username: {this.props.accountInfo.username}</div>
                <div>Balance: {this.props.accountInfo.balance}</div>
            </div>
        );
    }
}

export default connect(
   ({ accountInfo }) => ({ accountInfo }),
   { fetchAccountInfo } 
)(AccountInfo);