import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, value, percents }) => (
  <div>
    <span>
      {label}: {value}
      {percents && <span>%</span>}
    </span>
  </div>
);

Statistic.defaultProps = {
  percents: false,
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  percents: PropTypes.bool,
};

export default Statistic;
