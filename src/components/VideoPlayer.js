import React from 'react';
import { useState, useEffect } from 'react';
import { div, Col } from 'reactstrap';

const VideoPlayer = ({ videoItem }) => {

    const renderContent = () => {
        if (videoItem) {
            const src = `https://www.youtube.com/embed/${videoItem.id.videoId}?autoplay=1`;
            return (
                <div className="d-flex-col h-100p">
                    <div className="h-100p">
                        <iframe
                            title='video-player'
                            width='100%'
                            height='100%'
                            frameBorder='0'
                            allow='autoplay'
                            src={src}
                        ></iframe>
                    </div>
                    <div>
                        <h4>{videoItem.snippet.title}</h4>
                        <p>{videoItem.snippet.description}</p>
                    </div>
                </div>
            )
        } else {
            return <p></p>
        }
    }

    return (renderContent());
}

export default VideoPlayer;