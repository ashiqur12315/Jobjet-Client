import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';

const JobByCategory = () => {

    const { data: jobs = [], isLoading } = useQuery({
        queryFn: () => getData(),
        queryKey: ['home']
    })


    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
        return data
    }

    return (
        <div className='mt-20'>
            <Tabs>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>All Jobs</Tab>
                        <Tab>Onsite Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid Job</Tab>
                        <Tab>Part Time Job</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-12'>
                        {
                            jobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-12'>
                        {
                            jobs.filter(j => j.job_category === 'Onsite Job').map(job => <JobCard job={job} key={job._id}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-12'>
                        {
                            jobs.filter(j => j.job_category === 'Remote Job').map(job => <JobCard job={job} key={job._id}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-12'>
                        {
                            jobs.filter(j => j.job_category === 'Hybrid Job').map(job => <JobCard job={job} key={job._id}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-12'>
                        {
                            jobs.filter(j => j.job_category === 'Part Time Job').map(job => <JobCard job={job} key={job._id}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobByCategory;