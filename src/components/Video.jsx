import React from 'react';

export function Video({ title, author, views, timestamp }) {
  return (
    <div>
        <img src='src\assets\image.png' alt="Video Thumbnail" />
        <div className='grid grid-cols-12'>
            <img src='src\assets\thumb.png' alt="Author Thumbnail" className='rounded-full w-18 h-18 mr-4' />
            <div className='col-span-10'>
                <h3>{title}</h3>
                
                <div className='col-span-12 pl-0 text-gray-100 text-base'>
                    {author}
                </div>
                
                <div className='col-span-12 pl-0 text-gray-100 text-base'>
                    {views} | {timestamp}
                </div>
            </div> 
        </div>
    </div>
  );
}



