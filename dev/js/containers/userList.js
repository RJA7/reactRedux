import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../actions';

class UserList extends Component {
    render() {
        return (
            <ul>
                {this.props.users.map((user, i) => (
                    <li onClick={() => this.props.selectUser(user)} key={i}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchActionsToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchActionsToProps)(UserList);
