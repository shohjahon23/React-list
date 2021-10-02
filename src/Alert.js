import React, {useEffect} from 'react';

const Alert =({type, msg, removeAlert, list}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 2000)
        return () => clearInterval(timeout)
    })
    return <p className={`alert alert-${type}`}>{msg}</p>
}
export default Alert