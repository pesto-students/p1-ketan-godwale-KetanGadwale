import { useEffect, useState } from 'react';
import { Form as FormBS, Button } from 'react-bootstrap';
import Error from './Error';

export default function Form({ url, setUrl, list, setList }) {
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addShortURL(url);
    };

    const addShortURL = (url) => {
        if (url === '') {
            setError('Please enter valid URL');
            return;
        }
        let fetchURL = `https://api.shrtco.de/v2/shorten?url=${url}`;
        fetch(fetchURL)
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    setError('');
                    setList([
                        { link: url, short_link: data.result.short_link },
                        ...list,
                    ]);
                } else {
                    setError(data.error);
                }
            });
    };

    useEffect(() => {
        list[0] && setUrl(list[0].short_link);
    }, [list]);

    return (
        <>
            <FormBS onSubmit={handleSubmit}>
                <FormBS.Control
                    type='text'
                    placeholder='Shorten your link'
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value);
                    }}
                />
                <div className='d-grid gap-2'>
                    <Button variant='primary' size='lg' type='submit'>
                        Shorten
                    </Button>
                </div>
                <FormBS.Text muted>
                    By clicking SHORTEN, you are agreeing to Shortly's Terms of
                    Service, Privacy Policy, and Acceptable Use Policy
                </FormBS.Text>
            </FormBS>
            {error != '' && <Error error={error} />}
        </>
    );
}
