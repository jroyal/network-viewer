import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';
import { getHeader, getJWTClaims } from './utils';

const AccessMeta = ({ data }) => {
    const metaRaw = getHeader(data.headers.queryString, 'meta');
    const claims = getJWTClaims(metaRaw);
    return (
        <div className={Styles['header-detail']}>
            {Object.keys(claims).map((key, index) => (
                <p
                    key={`${key}-${index}`}
                    className={Styles['info-row']}
                >
                    <span className={Styles['info-caption']}>
                        {`${key}:`}
                    </span>
                    <span className={Styles['info-value']}>
                        {`${JSON.stringify(claims[key])}`}
                    </span>
                </p>
            ))}
        </div>
    );
};

AccessMeta.propTypes = {
    data: PropTypes.object,
};

AccessMeta.defaultProps = {
    data: null,
};

export default AccessMeta;