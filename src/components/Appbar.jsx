import React from 'react';
import { Searchbar } from './Searchbar';

export const Appbar = () => {
    return (
        <div className="flex justify-between">
            <div className="p-5">
                <img src='src\assets\image copy.png' />
            </div>
            <div className="p-5">
                <Searchbar />
            </div>
            <div className="p-5">
                <img src='src\assets\image copy 2.png' />
            </div>
        </div>
    );
};

