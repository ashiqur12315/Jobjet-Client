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
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-jobs/${user?.email}`, {withCredentials: true})
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
                text: "Your posted has been deleted.",
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
                    <tr>
                        <th>
                            Sl. No
                        </th>
                        <th>Job Title</th>


                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myJobs.map((j, index) => <tr key={j._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                {j.job_title}
                            </td>

                            <th>
                                {/* <button className="btn  btn-accent"><Update></Update></button> */}
                                {/* <Update j={j}/> */}
                                <Link to={`/update/${j._id}`}>Update</Link>
                            </th>
                            <th>
                                <button onClick={() => handleDelete(j._id)} className="btn btn-warning">Delete</button>
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