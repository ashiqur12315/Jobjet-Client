import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img src="/404.png" alt="" />
            <Link to='/' className='btn btn-secondary absolute top-2/3 left-[45%]'>Back To Homepage</Link>
        </div>
    );
};

export default ErrorPage;