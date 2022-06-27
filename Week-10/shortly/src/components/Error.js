import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function Error({ error, setError }) {
    useEffect(() => {
        setTimeout(() => {
            setError('');
        }, 5000);
    }, []);

    return (
        <Alert key='danger' variant='danger'>
            {error}
        </Alert>
    );
}

export default Error;
