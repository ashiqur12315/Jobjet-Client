import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Update from "./Update";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const MyJobs = () => {
    const { user } = useContext(AuthContext)
    const { data: myJobs = [], isLoading, refetch } = useQuery({
        queryFn: () => getData(),
        queryKey: ['myjobs']
    })
    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-jobs/${user?.email}`, { withCredentials: true })
        return data
    }

    // Delete
    const { mutateAsync } = useMutation({
        mutationFn: async ({ id }) => {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`, { id })
            // console.log(data)
        },
        onSuccess: () => {
            // toast.success('data deleted successfully')
            refetch()
            Swal.fire({
                title: "Deleted!",
                text: "Your posted Job has been deleted.",
                icon: "success"
            });
        }
    })

    const handleDelete = id => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                mutateAsync({ id })


            }
        });

        // mutateAsync({ id })
    }
    // const {job_banner,
    //     job_title,
    //     employer_name,
    //     employer_email,
    //     job_category,
    //     job_description,
    //     min_salary,
    //     max_salary,
    //     job_posting_date: startDate,
    //     application_deadline: deadlineDate,
    //     job_applicants_number} = myJobs
    // const handleModal= (j)=>{
    //     return <Update j={j}></Update>
    // }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-[14px] font-bold text-black bg-green-300">
                        <th>
                            Sl. No
                        </th>
                        <th>Job Title</th>
                        <th>Application Deadline</th>
                        <th>No of Applicants</th>


                        <th>Job Category</th>
                        <th>Salary Range</th>
                        <th>Update Job</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myJobs.map((j, index) => <tr className="border-1 border-green-300" key={j._id}>
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
                                        <h2>Job posted on: {new Date(j.job_posting_date).toLocaleDateString()} </h2>
                                    </div>
                                </div>
                            </td>
                            <td>{new Date(j.application_deadline).toLocaleDateString()}</td>
                            <td>{j.
                                job_applicants_number}</td>
                            <td>
                                {j.job_category}
                            </td>
                            <td>
                                ${j.min_salary} - ${j.max_salary}
                            </td>

                            <th>
                                {/* <button className="btn  btn-accent"><Update></Update></button> */}
                                {/* <Update j={j}/> */}
                                <Link className="btn btn-outline" to={`/update/${j._id}`}>Update</Link>
                            </th>
                            <th>
                                <button onClick={() => handleDelete(j._id)} className="btn btn-error">Delete</button>
                            </th>
                        </tr>)
                    }

                </tbody>
                {/* foot */}


            </table>
        </div>
    );
};

export default MyJobs;