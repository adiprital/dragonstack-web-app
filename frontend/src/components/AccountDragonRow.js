import React, { Component } from 'react';
import DragonAvater from './DragonAvatar';

class AccountDragonRow extends Component {
    render() {
        return(
            <div>
                <div>{this.props.dragon.nickname}</div>
                <br />
                <DragonAvater dragon={this.props.dragon} />
            </div>
        );
    }
}

export default AccountDragonRow;
