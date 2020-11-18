import React from 'react';

const Spinner = props => {
    
    return (
        <div className='ui active dimmer'>
            <div className='ui big text loader'>{props.message}</div>
        </div>
    )
};

Spinner.defaultProps = { // impostazioni di default se non personalizziamo il componente
    message: 'Loading'
   
};

export default Spinner;