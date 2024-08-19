import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Common/Checkbox';

const GatewayFilter = ({ isGateway, onChange }) => {
    const handleChange = () => {
        onChange({ value: !isGateway });
    };

    return (
        <Checkbox
            isChecked={isGateway}
            onChange={handleChange}
            title="access"
        >
            Gateway Only
        </Checkbox>
    );
};

GatewayFilter.propTypes = {
    isGateway: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default GatewayFilter;