import React from 'react';

export const Video = () => {
  return (
    <div>
        <img src='src\assets\image.png'/>
        <div className='grid grid-cols-12'>
            <img src='src\assets\thumb.png' className='rounded-full w-20 h-20 mr-4' />
            <div className='col-span-10'>
                Rust Tutorial for Beginners - <br></br>
                Full Course (With Notes and Project Ideas)
                
                <div className='col-span-12 pl-0 text-gray-100 text-base'>
                    Harkirat Singh
                </div>
                
                <div className='col-span-12 pl-0 text-gray-100 text-base'>
                    21k views . 1 day ago
                </div>
            </div> 
        </div>
    </div>
  )
}


