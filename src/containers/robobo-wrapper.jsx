import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {injectIntl, intlShape, defineMessages} from 'react-intl';
import {STAGE_DISPLAY_SIZES} from '../lib/layout-constants.js';
import RoboboMonitorWrapperComponent from '../components/robobo/robobo-monitor-wrapper/robobo-monitor-wrapper.jsx';

/*
const RoboboWrapper = props => <RoboboMonitorWrapperComponent {...props} />;
*/

class RoboboWrapper extends React.PureComponent {
    constructor (props) {
        super(props);
        console.log('RoboboWrapper props: ')
        console.log(props);
        bindAll(this, [
            'handleRoboboConnectionEstablished',
            'handleRoboboDisconnectButtonClick'
        ]);

        if ((this.props.vm.runtime.roboboIP == undefined)||(!this.props.vm.runtime.roboboConnected)) {
            this.state = {
                roboboMonitorUrl: 'static/robobo-monitor/robobo-monitor.html?status=disconnected' 
            };       
        } else {
            this.state = {
                roboboMonitorUrl: 'static/robobo-monitor/robobo-monitor.html?ip='+ this.props.vm.runtime.roboboIP
            };       
        }
        this.props.vm.on('ROBOBO_CONNECTION_ESTABLISHED', this.handleRoboboConnectionEstablished);           
        this.props.vm.on('ROBOBO_DISCONNECT_BUTTON_CLICK', this.handleRoboboDisconnectButtonClick);           
    }        

    handleRoboboConnectionEstablished() {
        this.setState({
            roboboMonitorUrl: 'static/robobo-monitor/robobo-monitor.html?ip='+ this.props.vm.runtime.roboboIP
        });     
    }

    handleRoboboDisconnectButtonClick() {
        this.setState({
            roboboMonitorUrl: 'static/robobo-monitor/robobo-monitor.html?status=disconnected'
        }); 
    }    

    render () {
        console.log('desde render!');
        console.log('state: '+this.state.roboboMonitorUrl);
        return (
            <RoboboMonitorWrapperComponent 
                stageSize={this.props.stageSize}
                vm={this.props.vm}
                roboboMonitorUrl={this.state.roboboMonitorUrl}
             /> 
        )
    }
}    

RoboboWrapper.propTypes = {
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired,
    roboboMonitorUrl: PropTypes.string
};

//export default RoboboWrapper;

export default injectIntl(RoboboWrapper);
