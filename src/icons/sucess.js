import React from 'react';
import PropTypes from 'prop-types';

const Sucess = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11C0 4.925 4.925 0 11 0s11 4.925 11 11-4.925 11-11 11S0 17.075 0 11zm16.635-2.378a1.134 1.134 0 10-1.599-1.609L9.44 12.609 6.88 10.048a1.14 1.14 0 10-1.601 1.622l4.112 4.008a.07.07 0 00.098 0l7.147-7.056z"
      ></path>
    </svg>
  );
};

Sucess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sucess.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Sucess;
