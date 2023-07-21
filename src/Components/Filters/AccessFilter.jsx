import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Common/Checkbox';

const AccessFilter = ({ isAccess, onChange }) => {
  const handleChange = () => {
    onChange(!isAccess);
  };

  return (
    <Checkbox
      isChecked={isAccess}
      onChange={handleChange}
      title="access"
    >
      Access Only
    </Checkbox>
  );
};

AccessFilter.propTypes = {
  isAccess: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AccessFilter;
