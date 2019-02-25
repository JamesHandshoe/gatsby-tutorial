import React from 'react';
import PropTypes from 'prop-types'


const Greeting = ({ username }) => (
    <div style={{ color: `white`, marginTop: `8px` }}>
        <h3>{`Welcome ${ username }`}</h3>
    </div>
);

Greeting.propTypes = {
    username: PropTypes.string,
}
  
Greeting.defaultProps = {
    username: `our favorite user!`,
}

export default Greeting;