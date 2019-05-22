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
            'handleRoboboConnectButtonClick',
            'handleRoboboDisconnectButtonClick'
        ]);

        if (this.props.vm.runtime.roboboIP == undefined) {
            this.state = {
                roboboMonitorUrl: 'static/robobo-monitor/robobo-monitor.html?status=disconnected' 
            };       
        } else {
            this.state = {
                roboboMonitorUrl: 'static/robobo-monitor/robobo-monitor.html?ip='+ this.props.vm.runtime.roboboIP
            };       
        }
        this.props.vm.on('ROBOBO_CONNECT_BUTTON_CLICK', this.handleRoboboConnectButtonClick);           
        this.props.vm.on('ROBOBO_DISCONNECT_BUTTON_CLICK', this.handleRoboboDisconnectButtonClick);           
    }        

    handleRoboboConnectButtonClick() {
        console.log('connection button clicked !! - IP:');
        console.log(this.props.vm.runtime.roboboIP);     
        this.setState({
            roboboMonitorUrl: 'static/robobo-monitor/robobo-monitor.html?ip='+ this.props.vm.runtime.roboboIP
        }); 
        //this.render();          
    }

    handleRoboboDisconnectButtonClick() {
        console.log('disconnection button clicked !! - IP:');
        console.log(this.props.vm.runtime.roboboIP);     
        this.setState({
            roboboMonitorUrl: 'static/robobo-monitor/robobo-monitor.html?status=disconnected'
        }); 
        //this.render();          
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
