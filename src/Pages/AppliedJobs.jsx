import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import ReactPDF from '@react-pdf/renderer';
import MyDocument from "./MyDocument";
import ReactToPdf from "react-to-pdf";







const AppliedJobs = () => {
    // const downloadPdf = () =>{
    //     ReactPDF.render(<MyDocument />, `example.pdf`);
    // }
    const { user } = useContext(AuthContext)
    const [appliedJob, setAppliedJob] = useState([])
    // console.log(appliedJob)
    // const [loading, setLoading] = useState(false)

    const { data: jobs = [], isLoading, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['apliedjobs'],
        // onSuccess: () => setLoading(false), 
        // onError: () => setLoading(false)
    })
    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/appliedJobs/${user?.email}`, { withCredentials: true })
        setAppliedJob(data)
        // setLoading(true)
        return data
    }
    // console.log(appliedJob)
    const handleFilter = async (fil) => {
        if (fil === 'all job') {
            setAppliedJob(jobs)
        }
        else {
            const filteredJob = await jobs.filter(j => j.job_category === fil)

            setAppliedJob(filteredJob)
        }
    }


    // const componentRef = useRef()



    // console.log(jobs)
    // const { job_banner,
    //     job_title,
    //     employer_name,
    //     employer_email,
    //     job_category,
    //     job_description,
    //     min_salary,
    //     max_salary,
    //     job_posting_date,
    //     application_deadline,
    //     job_applicants_number } = jobs;
    return (
        <div>
            {/* Filter system */}
            <div className="flex justify-center items-center gap-4">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-info m-1">Filter Jobs by Category</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter("all job")}><button>All Jobs</button></li>
                        <li onClick={() => handleFilter("Onsite Job")}><button>Onsite Job</button></li>
                        <li onClick={() => handleFilter("Remote Job")}><button>Remote Job</button></li>
                        <li onClick={() => handleFilter("Hybrid Job")}><button>Hybrid Job</button></li>
                        <li onClick={() => handleFilter("Part Time Job")}><button>Part Time Job</button></li>
                    </ul>
                </div>
                <PDFDownloadLink document={<MyDocument appliedJob={appliedJob}/>} fileName="applied jobs.pdf">
                    {({ loading }) =>
                        loading ? 'Loading document...' : <button className="btn btn-success">Download Summary</button>
                    }
                </PDFDownloadLink>
                {/* {loading && (<button>
                    <ReactToPdf targetRef={componentRef} filename="applied-jobs.pdf">
                        {({ toPdf }) => (
                            <button onClick={toPdf} className="btn">Download as PDF</button>
                        )}
                    </ReactToPdf>
                </button>)} */}
            </div>

            <div   className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className="text-[14px] font-bold text-black bg-green-300">
                            <th>
                                Sl. No
                            </th>
                            <th>Job Title</th>
                            <th>Job Category</th>
                            <th>Salary Range</th>
                            <th>Job Posted By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            appliedJob.map((j, index) => <tr key={j._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={j.job_banner} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{j.job_title}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {j.job_category}
                                </td>
                                <td>${j.min_salary} - ${j.max_salary}</td>
                                <th>
                                    {j.employer_name}
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;