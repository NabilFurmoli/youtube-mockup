import React from 'react';
import { useState, useEffect } from 'react';
import { div, Row, Col, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

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
                <Col className="bg-dark border video-player-cont" md="8" sm="12">
                    <VideoPlayer videoItem={selectedVideo} />
                </Col>
                <Col className="bg-dark border video-list-cont" md="4" sm="12">
                    <VideoList onSelectVideoItem={onSelectVideoItem} videosList={videosList} />
                </Col>
            </Row>
        </div>
    );
}

export default Youtube;