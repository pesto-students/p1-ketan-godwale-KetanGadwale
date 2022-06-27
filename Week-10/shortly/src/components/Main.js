import React, { useState } from 'react';
import Form from './Form';
import List from './List';

function Main() {
    const [url, setUrl] = useState('');
    const [list, setList] = useState([]);

    return (
        <div className='Form'>
            <Form url={url} setUrl={setUrl} list={list} setList={setList} />
            <List list={list} />
        </div>
    );
}

export default Main;
