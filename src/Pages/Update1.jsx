import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";


const Update1 = () => {
    const { id } = useParams()

    const { data: job = [], isLoading, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['update']
    })
    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/singleJob/${id}`)
        // console.log(data)
        return data
    }
    const { user } = useContext(AuthContext)
    
    const { job_banner,
        job_title,
        job_category,
        job_description,
        min_salary,
        max_salary,
        // application_deadline,
        job_applicants_number } = job;
        

        const [deadlineDate, setDeadlineDate] = useState('');

        useEffect(()=>{
            setDeadlineDate(job?.application_deadline)

        },[job?.application_deadline])

        // console.log(job.application_deadline, typeof application_deadline)
        // console.log(deadlineDate, typeof deadlineDate) 
    
    // Update 
    const { mutateAsync } = useMutation({
        mutationFn: async( {updatedInfo}) => { 
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/update/${id}`, updatedInfo)
            // console.log(data)
         },
        onSuccess: ()=>{
            toast.success('Your Job Information has been updated successfully')
        }
    })
    const handleUpdate = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const job_banner = form.get('job_banner');
        const job_title = form.get('job_title');
        const job_category = form.get('job_banner');
        const job_description = form.get('job_description');
        const min_salary = form.get('min_salary');
        const max_salary = form.get('max_salary');
        // const job_banner = form.get('job_banner');
        const updatedInfo = {id, job_title, job_banner, job_category,job_description,min_salary,max_salary, application_deadline: deadlineDate }

         mutateAsync({updatedInfo})
    }





    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add a Job</h2>

            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Job Banner URL</label>
                        <input type="text" required name="job_banner" defaultValue={job_banner} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Job Title</label>
                        <input type="text" required name="job_title" defaultValue={job_title} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Name</label>
                        <input type="text" name="employer_name" readOnly defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">E-mail</label>
                        <input type="text" name="employer_email" readOnly defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Job Category</label>
                        <select className=" border-2 m-3 p-2" name="job_category" defaultValue={job_category}>
                            <option value="Onsite Job">Onsite Job</option>
                            <option value="Remote Job">Remote Job</option>
                            <option value="Hybrid Job">Hybrid Job</option>
                            <option value="Part Time Job">Part Time Job</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="address" className="text-sm">Job Description </label>
                        <textarea id="address" name="job_description" defaultValue={job_description} placeholder="Enter a Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>

                    <div className=" col-span-full">
                        <label className="text-center text-gray-700 dark:text-gray-200">Salary Range</label>
                        <div className="flex items-center gap-3">
                            <label className="text-gray-700 dark:text-gray-200">Minimum</label>
                            <input type="number" name="min_salary" defaultValue={min_salary} required className=" w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            <label className="text-gray-700 dark:text-gray-200">Maximum</label>
                            <input type="number" name="max_salary" defaultValue={max_salary} required className="w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <label className="text-gray-700 dark:text-gray-200">Application Deadline </label>
                        <DatePicker name="application_deadline"   selected={deadlineDate} onChange={(date) => setDeadlineDate(date)} />
                    </div>

                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Job Applicants Number:</label>
                    <input type="number" name="job_applicants_number" readOnly defaultValue={job_applicants_number} className=" px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                </div>
            </form>
        </section>
    );
};

export default Update1;