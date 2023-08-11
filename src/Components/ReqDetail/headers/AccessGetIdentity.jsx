import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';

const AccessGetIdentity = ({ data }) => {
  const rawBody = data.body;
  let decoded;
  try {
    decoded = JSON.parse(Buffer.from(decodeURIComponent(rawBody), 'base64'));
  } catch (err) {
    console.log(err);
  }

  return decoded ? (
    <div className={Styles['header-detail']}>
      {Object.keys(decoded).map((key, index) => (
        <p
          key={`${key}-${index}`}
          className={Styles['info-row']}
        >
          <span className={Styles['info-caption']}>
            {`${key}:`}
          </span>
          <span className={Styles['info-value']}>
            {`${JSON.stringify(decoded[key])}`}
          </span>
        </p>
      ))}
    </div>
  ) : <p>Failed to decode identity</p>;
};

AccessGetIdentity.propTypes = {
  data: PropTypes.object,
};

AccessGetIdentity.defaultProps = {
  data: null,
};

export default AccessGetIdentity;
