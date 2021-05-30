import React from 'react';


type ErrorMessageProps = {
    name?: string,
    message?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({name,message}) => {
    return (
        <div>
            <h1>:(</h1>
            <h2>Oooops....</h2>

            <h3>I found error...</h3>

            <h6>He has{name ? '' : 'n\'t'} name {name || ''}...</h6>
            <h6>And description "{message || "Ooops..."}"...</h6>
        </div>
    );
};

export default ErrorMessage;