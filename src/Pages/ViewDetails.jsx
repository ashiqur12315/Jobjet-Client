import { useLoaderData, useParams } from "react-router-dom";

import Modal1 from "./Modal1";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const ViewDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    // const job = useLoaderData();
    const { data: job = [], isLoading } = useQuery({
        queryFn: () => getData(),
        queryKey: ['view']
    })


    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/singleJob/${id}`)
        return data
    }


    const { employer_email, job_title, application_deadline, job_banner, job_description, job_applicants_number, min_salary, max_salary } = job;

    const deadline = new Date(application_deadline)
    const currentDate = new Date();

    const isDeadlinePassed = deadline < currentDate;
    const isSameEmail = employer_email === user?.email
    // console.log(isSameEmail)
    const handleDeadline = () => {
        if (isDeadlinePassed) {
            // console.log('same job')
            return toast.error('You can not apply on your own job.')
        }
    }
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover border-2 shadow-2xl object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={job_banner} />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">


                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                            {job_title}
                        </h1>

                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                            {job_description}
                        </p>

                        <h3 className="mt-6 text-lg font-extrabold text-blue-500">Salary Range: ${min_salary} - ${max_salary}</h3>
                        <p className="text-gray-600 dark:text-gray-300">No of Job Applicants: {job_applicants_number}</p>

                        <div>
                            {
                                isSameEmail ? <h2>You cant apply on your own posted job.</h2> : ''
                            }
                           { isDeadlinePassed ? <h2>Sorry, The job application deadline is over.</h2> : ''}
                            <button disabled={isSameEmail || isDeadlinePassed} className="btn btn-accent">
                                {
                                    isSameEmail || isDeadlinePassed ?  "Apply" : <Modal1 job={job}></Modal1> 
                                }
                            </button>
                            {/* <Modal1 disabled={isSameEmail || isDeadlinePassed} className='btn' job={job}></Modal1> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewDetails;