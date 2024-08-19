import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';
import { getHeader, parseState } from './utils';

const AccessGeneral = ({ data }) => {
    const teamDomain = data.url.includes('/cdn-cgi/access/authorized') ? parseState(getHeader(data.headers.queryString, 'state')).authDomain : data.domain;
    const aud = getHeader(data.headers.queryString, 'kid');
    const version = getHeader(data.headers.response, 'cf-version');
    return (
        <div className={Styles['header-detail']}>
            <p
                key="authdomain"
                className={Styles['info-row']}
            >
                <span className={Styles['info-caption']}>
                    Team Domain
                </span>
                <span className={Styles['info-value']}>
                    {teamDomain}
                </span>
            </p>
            {version && (
                <p
                    key="version"
                    className={Styles['info-row']}
                >
                    <span className={Styles['info-caption']}>
                        Version
                    </span>
                    <span className={Styles['info-value']}>
                        {version}
                    </span>
                </p>
            )}

            {aud && (
                <p
                    key="aud"
                    className={Styles['info-row']}
                >
                    <span className={Styles['info-caption']}>
                        Audience Tag
                    </span>
                    <span className={Styles['info-value']}>
                        {aud}
                    </span>
                </p>
            )}

        </div>
    );
};

AccessGeneral.propTypes = {
    data: PropTypes.object,
};

AccessGeneral.defaultProps = {
    data: null,
};

export default AccessGeneral;