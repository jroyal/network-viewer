import React from 'react';
import PropTypes from 'prop-types';

import General from './headers/General';
import Response from './headers/Response';
import Request from './headers/Request';
import QueryString from './headers/QueryString';
import FormData from './headers/FormData';
import HeaderInfo from './headers/HeaderInfo';
import Styles from './Headers.styles.scss';
import RequestPayload from './headers/RequestPayload';

const Headers = ({ data }) => (!data ? null : (
  <section className={Styles['headers-container']}>
    <HeaderInfo
      component={General}
      data={data}
      eventKey="general"
      isVisible
    />
    <HeaderInfo
      component={Request}
      data={data}
      eventKey="request"
      isVisible
    />
    <HeaderInfo
      component={Response}
      data={data}
      eventKey="response"
      isVisible
    />
    {(data.headers.queryString && data.headers.queryString.length) ? (
      <HeaderInfo
        component={QueryString}
        data={data}
        eventKey="queryString"
        isEncodeEnabled
        isVisible
      />
    ) : null}
    {data.headers.postData && data.headers.postData.params && (
      <HeaderInfo
        component={FormData}
        data={data}
        eventKey="formData"
        isEncodeEnabled
        isVisible
      />
    )}
    {data.headers.postData && data.headers.postData.text && (
      <HeaderInfo
        component={RequestPayload}
        data={data}
        eventKey="requestPayload"
        isParseEnabled
        isVisible
      />
    )}
  </section>
));

Headers.propTypes = {
  data: PropTypes.object,
};

Headers.defaultProps = {
  data: null,
};

export default Headers;
