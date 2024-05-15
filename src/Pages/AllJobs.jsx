import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllJobs = () => {
    // const allJobs = useLoaderData()

    //get all the jobs
    const { data: allJobs = [], isLoading: allJobsLoading } = useQuery({
        queryFn: () => axios.get(`${import.meta.env.VITE_API_URL}/jobs`).then(res => res.data),
        queryKey: "allJobs",
    });


    // get searched jobs
    const [search, setSearch] = useState('')

    const { data: searchJob = [], isLoading: searchJobLoading, refetch } = useQuery({
        queryFn: () => getData(),
        queryKey: ['search', search],
        // enabled: false
    })
    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/search-job?search=${search}`)
        return data
    }
    console.log(searchJob.length)

    const handleSearch = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const search = form.get('search')
        setSearch(search)
        await refetch();
    };



    // console.log(searchJob)

    // const handleSearch=e=>{
    //     e.preventDefault()
    //     console.log(search)

    //     const { data: searchJob = [], isLoading, refetch } = useQuery({
    //         queryFn: () => getData(),
    //         queryKey: ['search']
    //     })
    //     const getData = async () => {
    //         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/search-job?search=${search}`)
    //         return data
    //     }
    // }
    // const { posted_by, job_title, posting_date, application_deadline, salary_range } = allJobs;
    return (
        <div>

            <div className="flex items-center  justify-center p-5">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        name="search"

                    />
                    <button type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    // onClick={handleSearch}
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-[14px] font-bold text-black bg-green-300">
                            <th>
                                Sl. No
                            </th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {

                            searchJob.length > 0 && !searchJobLoading ? (

                                searchJob.map((j, index) => (
                                    <tr key={j._id}>
                                        <th >
                                            {index + 1}
                                        </th>
                                        <td>
                                            <span className="font-bold">{j.job_title}</span>
                                        </td>
                                        <td>
                                            {new Date(j.job_posting_date).toLocaleDateString()}
                                        </td>
                                        <td><span className="bg-red-200 p-2 rounded-md">{new Date(j.application_deadline).toLocaleDateString()}</span></td>
                                        <td><span className="bg-green-200 p-2 rounded-md">${j.min_salary} - ${j.max_salary}</span></td>
                                        <th>
                                            <Link to={`/viewDetails/${j._id}`} className="btn btn-accent flex items-center p-1 space-x-1.5">
                                                View Details
                                            </Link>
                                        </th>
                                    </tr>
                                ))

                            ) :
                                allJobs.map((j, index) => <tr key={j._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <span className="font-bold">{j.job_title}</span>
                                    </td>
                                    <td>
                                        {new Date(j.job_posting_date).toLocaleDateString()}
                                    </td>
                                    <td><span className="bg-red-200 p-2 rounded-md">{new Date(j.application_deadline).toLocaleDateString()}</span></td>
                                    <td><span className="bg-green-200 p-2 rounded-md">${j.min_salary} - ${j.max_salary}</span></td>
                                    <th>
                                        <Link to={`/viewDetails/${j._id}`} className="btn btn-accent flex items-center p-1 space-x-1.5">
                                            View Details
                                        </Link>
                                    </th>
                                </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AllJobs;