import React from 'react';
import { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import YoutubeApi from './YoutubeApi';

// AIzaSyC7xeO1EZrWeQM_08zo8zu72jkFP9AO1cc

const SearchBar = ({ onUpdateVideoList, onSelectVideoItem }) => {

    const [text, setText] = useState('The Sky is blue');

    const onChangeText = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        if (text) {
            const timeoutId = setTimeout(async () => {
                const response = await YoutubeApi.get('/search', {
                    params: {
                        q: text
                    }
                });

                if (response.status === 200) {
                    onUpdateVideoList(response.data.items)
                    onSelectVideoItem(response.data.items[0])
                }
                console.log(response);

            }, 500);

            return (() => {
                clearTimeout(timeoutId);
            })
        }
    }, [text]);

    return (
        <>
            <Form onSubmit={(e) => {e.preventDefault()}}>
                <FormGroup className="mt-3">
                    <Input
                        id="searchLabel"
                        name="searchInput"
                        value={text}
                        placeholder="Search a Video"
                        type="text"
                        onChange={onChangeText}
                    />
                </FormGroup>
            </Form>
        </>
    );
}

export default SearchBar;