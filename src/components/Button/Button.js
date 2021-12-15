import React from 'react';

import './Button.css';

// Functional Component
function Button( props ) {
    const { variant = 'primary', children, ...rest } = props;

    return (
        <button
            className={ `btn ${ variant }` }
            { ...rest }
        >
            { children }
        </button>
    )
}

export default Button
