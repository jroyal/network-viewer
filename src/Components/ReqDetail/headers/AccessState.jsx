import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';
import { getHeader, parseState } from './utils';

const AccessState = ({ data }) => {
  const state = parseState(getHeader(data.headers.queryString, 'state'));
  return (
    <div className={Styles['header-detail']}>
      {Object.keys(state).map((key, index) => (
        <p
          key={`${key}-${index}`}
          className={Styles['info-row']}
        >
          <span className={Styles['info-caption']}>
            {`${key}:`}
          </span>
          <span className={Styles['info-value']}>
            {`${JSON.stringify(state[key])}`}
          </span>
        </p>
      ))}
    </div>
  );
};

AccessState.propTypes = {
  data: PropTypes.object,
};

AccessState.defaultProps = {
  data: null,
};

export default AccessState;
