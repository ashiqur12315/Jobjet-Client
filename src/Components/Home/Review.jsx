

const Review = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://i.ibb.co/wK6MGsh/r2.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Pat Cummnis</h4>
                            <span className="text-xs dark:text-gray-600">2 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.3</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>As a seasoned professional navigating the ever-evolving job market, I've had my fair share of experiences with job search platforms. However, none have quite matched the seamless experience and comprehensive features offered by Jobjet.</p>
                    <p>From the moment I landed on the website, I was greeted with a sleek and intuitive interface that made navigating through job listings a breeze. The search functionality allowed me to filter through thousands of opportunities effortlessly, ensuring that I could tailor my job hunt to my specific preferences and career goals.</p>
                </div>
            </div>
            {/* --------------------------- */}
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://i.ibb.co/bdGyyX8/r1.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Leroy Jenkins</h4>
                            <span className="text-xs dark:text-gray-600">1 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.7</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>Jobjet has completely transformed the way I approach job searching. As someone who values efficiency and effectiveness, I was blown away by the platform's intuitive design and robust features.From the moment I signed up, I was greeted with a user-friendly interface that made navigating through job listings a seamless experience. </p>
                    <p>The ability to customize my search criteria allowed me to hone in on opportunities that truly aligned with my skills and aspirations.

                        What truly sets Jobjet apart is its commitment to not just finding a job, but finding the right job. The platform's emphasis on matching candidates with employers who share their values and culture has been instrumental in helping me find a role where I can thrive and grow.</p>
                </div>
            </div>
            {/* ___________________ */}
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://i.ibb.co/S5PCXPN/r3.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Ayman sheikh</h4>
                            <span className="text-xs dark:text-gray-600">4 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.5</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>Navigating the job market can often feel like a daunting task, but Jobjet has made the process not only manageable but enjoyable. From the moment I created my account, I was impressed by the platform's user-friendly interface and extensive job listings.</p>
                    <p> What sets Jobjet apart is its commitment to fostering genuine connections between job seekers and employers. The platform's emphasis on networking and community-building has been invaluable in helping me expand my professional network and uncover new opportunities.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;