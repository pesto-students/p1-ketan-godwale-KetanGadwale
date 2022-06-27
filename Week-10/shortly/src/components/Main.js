import React, { useState } from 'react';
import Form from './Form';
import List from './List';

function Main() {
    const initialState = JSON.parse(localStorage.getItem('list')) || [];
    const [url, setUrl] = useState('');
    const [list, setList] = useState(initialState);

    return (
        <div className='Main'>
            <Form url={url} setUrl={setUrl} list={list} setList={setList} />
            <List list={list} />
        </div>
    );
}

export default Main;
