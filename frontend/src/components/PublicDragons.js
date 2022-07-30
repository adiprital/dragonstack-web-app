import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicDragons } from '../action/publicDragons';
import { fetchAccountDragons } from '../action/accountDragons';
import PublicDragonRow from './PublicDragonRow';

class PublicDragons extends Component {
    componentDidMount() {
        this.props.fetchPublicDragons();
        this.props.fetchAccountDragons();
    }

    render() {
        return (
            <div>
                <h3>Public Dragons</h3>
                {
                    this.props.publicDragons.dragons.map(dragon => {
                        return (
                            <div key={dragon.dragonId}>
                                <PublicDragonRow dragon={dragon} />
                                <hr />
                            </div>
                        )
                    })
                }
                <a href='/'>Home</a>
            </div>
        )
    }
}

export default connect(
    ({ publicDragons }) => ({ publicDragons }),
    { fetchPublicDragons, fetchAccountDragons }
)(PublicDragons);