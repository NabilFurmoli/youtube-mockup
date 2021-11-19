import React from 'react';
import { useState, useEffect } from 'react';
import { div, Row, Col, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

const defaultList = [
    { name: 'hola', key: '0', src: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" }
    , { name: 'hey', key: '1', src: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" }
    , { name: 'Yoo', key: '2', src: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" }
]

const Youtube = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videosList, setVideosList] = useState([]);

    const onUpdateVideoList = (videoList) => {
        if (videoList) {
            setVideosList(videoList);
        }
    }

    const onSelectVideoItem = (videoItem) => {
        if (videoItem) {
            setSelectedVideo(videoItem);
        }
    }

    return (
        <div>
            <Row>
                <Col className="bg-dark">
                    <Navbar
                        color="dark"
                        expand="md"
                        dark
                    >
                        <NavbarBrand className="header-title" style={{ color: 'red' }} href="/">
                            Youtube
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck() { }} />
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col className="bg-dark">
                    <SearchBar onUpdateVideoList={onUpdateVideoList} onSelectVideoItem={onSelectVideoItem} />
                </Col>
            </Row>
            <Row>
                <Col className="bg-dark border" xs="8">
                    <VideoPlayer videoItem={selectedVideo} />
                </Col>
                <Col className="bg-dark border" xs="4">
                    <VideoList onSelectVideoItem={onSelectVideoItem} videosList={videosList} />
                </Col>
            </Row>
        </div>
    );
}

export default Youtube;