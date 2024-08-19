import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';
import { getHeader } from './utils';

const GatewayGeneral = ({ data }) => {
    const { status } = data;
    const cfteam = getHeader(data.headers.response, 'cf-team');
    const proxystatus = getHeader(data.headers.response, 'proxy-status');
    return (
        <div className={Styles['header-detail']}>
            <p
                key="authdomain"
                className={Styles['info-row']}
            >
                <span className={Styles['info-caption']}>
                    Status
                </span>
                <span className={Styles['info-value']}>
                    {status}
                </span>
            </p>
            {cfteam && (
                <p
                    key="cfteam"
                    className={Styles['info-row']}
                >
                    <span className={Styles['info-caption']}>
                        cf-team
                    </span>
                    <span className={Styles['info-value']}>
                        {cfteam}
                    </span>
                </p>
            )}

            {proxystatus && (
                <p
                    key="proxystatus"
                    className={Styles['info-row']}
                >
                    <span className={Styles['info-caption']}>
                        proxy-status
                    </span>
                    <span className={Styles['info-value']}>
                        {proxystatus}
                    </span>
                </p>
            )}

        </div>
    );
};

GatewayGeneral.propTypes = {
    data: PropTypes.object,
};

GatewayGeneral.defaultProps = {
    data: null,
};

export default GatewayGeneral;
