import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';

import Box from '../../box/box.jsx';
import {STAGE_DISPLAY_SIZES} from '../../../lib/layout-constants.js';
import StageHeader from '../../../containers/stage-header.jsx';
import Stage from '../../../containers/stage.jsx';

import styles from './robobo-monitor-wrapper.css';

const RoboboMonitorWrapperComponent = function (props) {
    const {
        isRendererSupported,
        stageSize,
        vm
    } = props;

    return (
        <Box className={styles.stageWrapper}>
            <Box className={styles.stageMenuWrapper}>
                <StageHeader
                    stageSize={stageSize}
                    vm={vm}
                />
            </Box>
            <Box className={styles.stageCanvasWrapper}>
                <div>PRUEBA</div>
            </Box>
        </Box>
    );    
};

RoboboMonitorWrapperComponent.propTypes = {
    isRendererSupported: PropTypes.bool.isRequired,
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default RoboboMonitorWrapperComponent;
