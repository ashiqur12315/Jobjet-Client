import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const JobCard = ({ job }) => {
    const { employer_name, job_title, job_posting_date, _id, application_deadline, min_salary, max_salary,
        job_applicants_number } = job
    return (
        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className="border border-red-500">
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex space-x-4">

                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Job Posted By: {employer_name}</a>
                        <span className="text-xs dark:text-gray-600">Job Posted On: {new Date(job_posting_date).toLocaleDateString()}</span>
                        <span className="text-xs dark:text-gray-600">Job Application Deadline: {new Date(application_deadline).toLocaleDateString()}</span>
                    </div>
                </div>
                <div>
                    <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{job_title}</h2>
                    <p className="text-sm dark:text-gray-600">Salary Range: ${min_salary}k to ${max_salary}k</p>
                    <p className="text-sm dark:text-gray-600">Job Applicants: {job_applicants_number} </p>
                </div>
                <div className=" justify-between">
                    <Link to={`/viewDetails/${_id}`} className="btn btn-accent flex items-center p-1 space-x-1.5">
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCard;