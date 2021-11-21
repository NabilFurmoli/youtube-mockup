import React from 'react';
import { useState, useEffect } from 'react';
import {Row, Col} from 'reactstrap';

const VideoItem = ({item, onSelectVideoItem}) => {
    return (
        <Row className="video-item-cont" key={item.id.videoId} onClick={(event) => {onSelectVideoItem(item)}}>
            <Col>
                <img alt={item.id.videoId} src={item.snippet.thumbnails.medium.url}></img>
            </Col>
            <Col>
                <b>{item.snippet.title.slice(0, 30)}...</b>
            </Col>
        </Row>
    );
}

export default VideoItem;