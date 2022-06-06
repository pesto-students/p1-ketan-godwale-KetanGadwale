import React, { useState } from 'react';

function Form() {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl('');
    };

    return (
        <div className='Form' onSubmit={handleSubmit}>
            <form>
                <input
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value);
                    }}
                    placeholder='Enter an URL'
                />
                <button type='submit'>Shorten URL</button>
            </form>
        </div>
    );
}

export default Form;
