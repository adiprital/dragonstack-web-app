import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DragonAvater from './DragonAvatar';
import { fetchDragon } from '../action/dragon';

class Dragon extends Component {
    render() {
        return(
            <div>
                <Button onClick={this.props.fetchDragon}>New Dragon</Button>
                <DragonAvater dragon = { this.props.dragon } />
            </div>
        )
    }
}

export default connect(
    ({ dragon }) => ({ dragon }),
    { fetchDragon }
)(Dragon);