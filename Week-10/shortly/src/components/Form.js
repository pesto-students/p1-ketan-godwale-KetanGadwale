import { Form as FormBS, Button } from 'react-bootstrap';

export default function Form({ url, setUrl, list, setList }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        addShortURL(url);
        setUrl('');
    };

    const addShortURL = (url) => {
        let fetchURL = `https://api.shrtco.de/v2/shorten?url=${url}`;
        fetch(fetchURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setList([
                    ...list,
                    { link: url, short_link: data.result.short_link },
                ]);
            });
    };

    return (
        <FormBS>
            <FormBS.Control
                type='text'
                placeholder='Shorten your link'
                value={url}
                onChange={(e) => {
                    setUrl(e.target.value);
                }}
            />
            <div className='d-grid gap-2'>
                <Button variant='primary' size='lg' onClick={handleSubmit}>
                    Shorten
                </Button>
            </div>
            <FormBS.Text muted>
                By clicking SHORTEN, you are agreeing to Shortly's Terms of
                Service, Privacy Policy, and Acceptable Use Policy
            </FormBS.Text>
        </FormBS>
    );
}
