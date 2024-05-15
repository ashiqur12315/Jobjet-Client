import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { IoAlertCircleOutline } from "react-icons/io5";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";


const JobCard = ({ job }) => {
    const {job_banner, employer_name, job_title, job_posting_date, _id, application_deadline, min_salary, max_salary,
        job_applicants_number } = job
    return (
        <motion.div whileHover={{ scale: 1.1 }}
         className="border-2 rounded-xl shadow-lg">
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex space-x-4">

                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold flex gap-3 items-center"><FaUser />Job Posted By: {employer_name}</a>
                        <span className="text-xs dark:text-gray-600 flex gap-2 items-center"><CiCalendarDate className="text-xl"/>Job Posted On: {new Date(job_posting_date).toLocaleDateString()}</span>
                        <span className="text-xs text-red-400 font-semibold bg-red-100 p-1 rounded-md dark:text-gray-600 flex gap-2 items-center"><IoAlertCircleOutline className="text-xl"/>Job Application Deadline: {new Date(application_deadline).toLocaleDateString()}</span>
                    </div>
                </div>
                <div>
                    <img src={job_banner} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{job_title}</h2>
                    <p className="text-sm dark:text-gray-600 flex gap-2 items-center bg-green-200 p-1 rounded-md"><RiMoneyDollarBoxFill />Salary Range: ${min_salary} to ${max_salary}</p>
                    <p className=" dark:text-gray-600 flex gap-2 items-center bg-orange-100"><MdSwitchAccount />Job Applicants: {job_applicants_number} </p>
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