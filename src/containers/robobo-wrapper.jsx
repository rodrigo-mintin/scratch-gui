import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {STAGE_DISPLAY_SIZES} from '../lib/layout-constants.js';
import RoboboMonitorWrapperComponent from '../components/robobo/robobo-monitor-wrapper/robobo-monitor-wrapper.jsx';

const RoboboWrapper = props => <RoboboMonitorWrapperComponent {...props} />;

RoboboWrapper.propTypes = {
    isRendererSupported: PropTypes.bool.isRequired,
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default RoboboWrapper;
