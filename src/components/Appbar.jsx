import React from 'react';
import { Searchbar } from './Searchbar';

export const Appbar = () => {
    return (
        <div className="flex justify-between">
            <div className="p-5">
                LOGO
            </div>
            <div className="p-5">
                <Searchbar />
            </div>
            <div className="p-5">
                Sign In
            </div>
        </div>
    );
};

