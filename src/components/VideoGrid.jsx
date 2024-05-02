import React from 'react';
import { Video } from './Video';

const vid = [{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},{
    title : "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)",
    image : "src/assets/thumb.png",
    author : "Harkirat Singh",
    views : "21k views . 1 day ago",
    timestamp : "1 day ago"
},];

export const VideoGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {vid.map(video => {
                return <div className='p-3'>
                    <Video title={video.title} author={video.author} views={video.views} timestamp={video.timestamp} />
                </div>
            })}
        </div>
    );
};
