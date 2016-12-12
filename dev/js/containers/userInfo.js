import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserInfo extends Component {
    render() {
        if (!this.props.activeUser) {
            return <div>Select some user</div>;
        }

        return (
            <div>User: <span>{this.props.activeUser.firstName} {this.props.activeUser.lastName}</span></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeUser: state.activeUser
    }
}

export default connect(mapStateToProps)(UserInfo);
