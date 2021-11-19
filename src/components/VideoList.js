import React from 'react';
import { useState, useEffect } from 'react';
import VideoItem from './VideoItem';

import { div } from 'reactstrap';

const VideoList = ({ videosList, onSelectVideoItem }) => {

    const renderVideoList = () => {
        const elementList = videosList.map((item) => {
            return <VideoItem key={item.id.videoId} item={item} onSelectVideoItem={onSelectVideoItem}/>
        })

        return elementList;
    }

    return (
        <div>
            {renderVideoList()}
        </div>

    );
}

export default VideoList;