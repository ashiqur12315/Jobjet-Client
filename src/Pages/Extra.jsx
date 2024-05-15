import React from 'react';

const Extra = () => {
    return (
        <div>
            {/* 1st part */}
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://i.ibb.co/T1CCCCx/empower.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Bridge to Your Next Opportunity</a>
                            
                        </div>
                        <div className="dark:text-gray-800">
                            <p>At Jobjet, we understand the importance of a seamless connection between job seekers and employers. Our platform is designed to facilitate effortless networking and provide you with the tools and resources you need to land your dream job. Whether you're a recent graduate exploring career options or a seasoned professional seeking new opportunities for career advancement, Jobjet offers a comprehensive range of features to support your journey.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd part */}
        </div>
    );
};

export default Extra;