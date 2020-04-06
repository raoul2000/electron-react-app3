import React from 'react';
import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
    return (
        <button onClick={(ev) => onClick(ev)}>{text}</button>
    );
};

Button.propTypes = {
    text:PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;