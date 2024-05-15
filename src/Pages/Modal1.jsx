import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";


const Modal1 = ({ job }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    // const check = () => {
    //     const isSameEmail = job?.employer_email === user?.email
    //     if (isSameEmail) return toast.error('not permitted')
    // }
    const {
        _id, job_banner, job_title, employer_name, employer_email, job_category, job_description, min_salary, max_salary, job_posting_date, application_deadline, job_applicants_number
    } = job;

    const handleAppliedJobs = e => {
        e.preventDefault()

        const isSameEmail = job?.employer_email === user?.email
        if (isSameEmail) return toast.error('not permitted')

        const form = new FormData(e.currentTarget);
        const applicant_name = form.get('name')
        const applicant_email = form.get('email')
        const applicant_resume = form.get('resume')

        const applied_job = {
            jobId: _id, job_banner, job_title, employer_name, employer_email, job_category, job_description, min_salary, max_salary, job_posting_date, application_deadline, job_applicants_number
            , applicant_name, applicant_email, applicant_resume
        }
        // console.log(applicant_name, applicant_email, applicant_resume)
        // console.log(applied_job)
        axios.post(`${import.meta.env.VITE_API_URL}/applied-jobs`, applied_job)
            .then(res => {
                if (res.data.insertedId) {
                    navigate('/appliedJobs')
                    toast.success('Your application has been submitted.')

                    // update the no of job applicants
                    mutateAsync({_id})


                }
            })
            .catch(error => console.error(error))
    }
   
        const { mutateAsync } = useMutation({
            mutationFn: async ({ _id }) => {
                const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/job-count/${_id}`)
                // console.log(data)
            },
            onSuccess: () => {
                toast.success('data incremented successfully')
            }
        })

    
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Apply</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    {/* form */}
                    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                        <form onSubmit={handleAppliedJobs} className="container flex flex-col mx-auto space-y-12">

                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 border">

                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="username" className="text-sm">Name</label>
                                        <input type="text" name="name" readOnly defaultValue={user?.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label className="text-sm">E-mail</label>
                                        <input type="text" name='email' readOnly defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full">
                                        <label className="text-sm">Resume Link</label>
                                        <textarea name='resume' placeholder="Enter your resume link here." className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                                    </div>
                                    <div className="col-span-full">
                                        <input type="submit" className="btn btn-success" value="Submit Application" />
                                    </div>

                                </div>
                            </fieldset>
                        </form>
                    </section>



                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal1;