import React from 'react';
import PropTypes from 'prop-types';

import HeaderInfo from './headers/HeaderInfo';
import Styles from './Headers.styles.scss';
import { getHeader } from './headers/utils';
import GatewayGeneral from './headers/GatewayGeneral';

const GatewayHeaders = ({ data }) => (!data ? null : (
    <section className={Styles['headers-container']}>
        {(data.headers.response && getHeader(data.headers.response, 'cf-team')) ? (
            <HeaderInfo
                component={GatewayGeneral}
                data={data}
                eventKey="general"
            />
        ) : null}
    </section>
));
GatewayHeaders.propTypes = {
    data: PropTypes.object,
};

GatewayHeaders.defaultProps = {
    data: null,
};

export default GatewayHeaders;