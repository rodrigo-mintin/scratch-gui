import classNames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import React from 'react';

import {intlShape, injectIntl} from 'react-intl';

import Input from '../forms/input.jsx';
import Button from '../button/button.jsx';

import styles from './robobo-connection-form.css';
import menuBarStyles from './menu-bar.css';

class RoboboConnectionForm extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'updateRoboboIPAddress',                       
            'handleConnectRobobo',
            'handleDisconnectRobobo'
        ]);


        this.state = {
            roboboIP: ''
        };        
    }

    updateRoboboIPAddress(event) {
        this.setState({roboboIP: event.target.value});
    }

    handleConnectRobobo() {
        this.props.onClickRoboboConnectButton(this.state.roboboIP);
    }

    handleDisconnectRobobo() {
        console.log('disconnect');
        this.props.onClickRoboboDisconnectButton();
    }

    render () {
        return (
            <div className={classNames(menuBarStyles.menuBarItem, menuBarStyles.feedbackButtonWrapper)}>  
                <Input
                    value={this.state.roboboIP}
                    className={styles.titleField}
                    onChange={this.updateRoboboIPAddress}
                />                            
                <Button                                        
                    className={styles.connectionButton}
                    onClick={this.handleConnectRobobo}
                >
                    Connect
                </Button>
                <Button                                        
                    className={styles.connectionButton}
                    onClick={this.handleDisconnectRobobo}
                >
                    Disconnect
                </Button>                
            </div>   
       );
    }
}

RoboboConnectionForm.propTypes = {
    className: PropTypes.string,
    intl: intlShape.isRequired,
    onClickRoboboConnectButton: PropTypes.func,
    onClickRoboboDisconnectButton: PropTypes.func
};

const mapDispatchToProps = () => ({});

export default injectIntl(connect(
    mapDispatchToProps
)(RoboboConnectionForm));
