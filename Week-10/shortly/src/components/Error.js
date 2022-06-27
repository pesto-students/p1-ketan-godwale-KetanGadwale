import { Alert } from 'react-bootstrap';

function Error({ error }) {
    return (
        <Alert key='danger' variant='danger'>
            {error}
        </Alert>
    );
}

export default Error;
