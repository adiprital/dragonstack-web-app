import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DragonAvater from './DragonAvatar';
import { fetchDragon } from '../action/dragon';
import fetchStates from '../reducers/fetchStates';

class Dragon extends Component {
get DragonView() {
    const { dragon } = this.props;

    if(this.props.dragon.status === fetchStates.error) return <span>{this.props.dragon.message}</span>;

    return <DragonAvater dragon = { this.props.dragon } />;
}

    render() {
        return(
            <div>
                <Button onClick={this.props.fetchDragon}>New Dragon</Button>
                <br />
                { this.DragonView }
            </div>
        )
    }
}

export default connect(
    ({ dragon }) => ({ dragon }),
    { fetchDragon }
)(Dragon);