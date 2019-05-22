import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';

import Box from '../../box/box.jsx';
import {STAGE_DISPLAY_SIZES} from '../../../lib/layout-constants.js';
import StageHeader from '../../../containers/stage-header.jsx';
import {getStageDimensions} from '../../../lib/screen-utils.js';

import styles from './robobo-monitor-wrapper.css';


const RoboboMonitorWrapperComponent = function (props) {
    const {
        stageSize,
        vm,
        roboboMonitorUrl
    } = props;


    const stageDimensions = getStageDimensions(stageSize, false);

    return (
        <Box className={styles.stageWrapper}>
            <Box className={styles.stageMenuWrapper} >
                <StageHeader
                    stageSize={stageSize}
                    vm={vm}
                />
            </Box>
            
            <Box             
            className={styles.stageCanvasWrapper}            
            style={{
                    minHeight: stageDimensions.height,
                    minWidth: stageDimensions.width
                }}                  
            >
                <div className={styles.mydiv}>
                    <iframe className={styles.roboboIframe} src={roboboMonitorUrl}></iframe>
                </div>
            </Box>
        </Box>
    );    
};


RoboboMonitorWrapperComponent.propTypes = {
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default RoboboMonitorWrapperComponent;


