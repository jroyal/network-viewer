import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';
import { getHeader, getJWTClaims } from './utils';

function parseCookieString(rawCookieStr, isSetCookie = false) {
  let data = rawCookieStr;

  const cookies = {};
  if (!data) {
    return cookies;
  }
  if (isSetCookie) {
    if (data && !Array.isArray(data)) {
      data = [data];
    }
    data = data.map((cookieStr) => {
      const parts = cookieStr.split(';');
      if (parts.length < 1) {
        return null;
      }
      return parts[0];
    })
      .filter(Boolean)
      .join(';');
  }
  data.split(';').forEach((cookie) => {
    const parts = cookie.trim().split('=');
    const name = decodeURIComponent(parts[0]);
    let value = decodeURIComponent(parts.slice(1).join('=')); // In case there are '=' in the value
    if (!name.includes('CF_')) {
      return;
    }
    if (name.toLowerCase() === 'cf_authorization' || name.toLowerCase() === 'cf_device') {
      value = getJWTClaims(value);
    }
    cookies[name] = value;
  });

  return cookies;
}

const AccessCookies = ({ data }) => {
  const setCookieRaw = getHeader(data, 'set-cookie');
  const setCookies = parseCookieString(setCookieRaw, true);
  const cookieRaw = getHeader(data, 'cookie');
  const cookies = parseCookieString(cookieRaw);

  return (
    <div className={Styles['header-detail']}>
      {setCookies && Object.keys(setCookies).map((key, index) => (
        <p
          key={`${key}-${index}`}
          className={Styles['info-row']}
        >
          <span className={Styles['info-caption']}>
            {`${key}:`}
          </span>
          <span className={Styles['info-value']}>
            <pre id="json">{`${JSON.stringify(setCookies[key], undefined, 2)}`}</pre>
          </span>
        </p>
      ))}
      {cookies && Object.keys(cookies).map((key, index) => (
        <p
          key={`${key}-${index}`}
          className={Styles['info-row']}
        >
          <span className={Styles['info-caption']}>
            {`${key}:`}
          </span>
          <span className={Styles['info-value']}>
            <pre id="json">{`${JSON.stringify(cookies[key], undefined, 2)}`}</pre>
          </span>
        </p>
      ))}
    </div>
  );
};

AccessCookies.propTypes = {
  data: PropTypes.object,
};

AccessCookies.defaultProps = {
  data: null,
};

export default AccessCookies;
