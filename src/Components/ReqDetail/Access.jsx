import React from 'react';
import PropTypes from 'prop-types';

import AccessGeneral from './headers/AccessGeneral';
import HeaderInfo from './headers/HeaderInfo';
import Styles from './Headers.styles.scss';
import AccessMeta from './headers/AccessMeta';
import AccessState from './headers/AccessState';
import AccessCookies from './headers/AccessCookies';
import { getHeader } from './headers/utils';

const AccessHeaders = ({ data }) => (!data ? null : (
  <section className={Styles['headers-container']}>
    {(data.headers.response && getHeader(data.headers.response, 'cf-version')) ? (
      <HeaderInfo
        component={AccessGeneral}
        data={data}
        eventKey="general"
      />
    ) : null}
    {(data.headers.queryString && getHeader(data.headers.queryString, 'meta')) ? (
      <HeaderInfo
        component={AccessMeta}
        data={data}
        eventKey="meta"
      />
    ) : null}
    {(data.headers.queryString && getHeader(data.headers.queryString, 'state')) ? (
      <HeaderInfo
        component={AccessState}
        data={data}
        eventKey="state"
      />
    ) : null}
    {(data.headers.response && getHeader(data.headers.response, 'set-cookie')) ? (
      <HeaderInfo
        component={AccessCookies}
        data={data.headers.response}
        eventKey="accessResponseCookies"
      />
    ) : null}
    {(data.headers.request && getHeader(data.headers.request, 'cookie')) ? (
      <HeaderInfo
        component={AccessCookies}
        data={data.headers.request}
        eventKey="accessRequestCookies"
      />
    ) : null}
  </section>
));
AccessHeaders.propTypes = {
  data: PropTypes.object,
};

AccessHeaders.defaultProps = {
  data: null,
};

export default AccessHeaders;
