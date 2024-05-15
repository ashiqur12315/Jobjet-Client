
import JobByCategory from "./JobByCategory";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import '../../../src/styles/styles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Extra from "../../Pages/Extra";


const Home = () => {

    // const { data: jobs = [], isLoading } = useQuery({
    //     queryFn: () => getData(),
    //     queryKey: ['home']
    // })


    // const getData = async () => {
    //     const { data } = await axios.get('${import.meta.env.VITE_API_URL}/jobs')
    //     return data
    // }





    // const jobs = useLoaderData();
    // console.log(jobs)
    return (
        <div>
            <div className=" ">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div>
                        <SwiperSlide >
                            <div className="bg-[url('https://i.ibb.co/Fwrykb6/job1.jpg')]   bg-cover bg-no-repeat lg:h-[580px] md:h-[480px] w-full ">
                                <div className="bg-gradient-to-r from-black to-transparent h-full ">
                                    <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-orange-400 font-extrabold px-10 pt-20">Unlock Your Career Potential with Jobjet</h2>
                                    <h2 className="lg:text-3xl md:text-2xl sm:text-xl sm:pt-5 text-white font-bold px-10 pt-10 ">Join Jobjet, where professionals like you  thrive in a dynamic network designed to foster growth and opportunity.</h2>
                                    <button className="btn btn-success m-12">Join Us Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="bg-[url('https://i.ibb.co/jJ1GCTc/happy.jpg')]   bg-cover bg-no-repeat lg:h-[580px] md:h-[480px] w-full ">
                                <div className="bg-gradient-to-r from-black to-transparent h-full ">
                                    <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-orange-400 font-extrabold px-10 pt-20">Your Future Starts Here</h2>
                                    <h2 className="lg:text-3xl md:text-2xl sm:text-xl sm:pt-5 text-white font-bold px-10 pt-10 ">Find the perfect job that matches your skills and aspirations. Join Jobjet today and connect with employers who are looking for talent like you.</h2>
                                    <button className="btn btn-success m-12">Create an Account in Jobjet</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="bg-[url('https://i.ibb.co/T1CCCCx/empower.jpg')]   bg-cover bg-no-repeat lg:h-[580px] md:h-[480px] w-full ">
                                <div className="bg-gradient-to-r from-black to-transparent h-full ">
                                    <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-orange-400 font-extrabold px-10 pt-20">Empower Your Career Path</h2>
                                    <h2 className="lg:text-3xl md:text-2xl sm:text-xl sm:pt-5 text-white font-bold px-10 pt-10 ">Explore endless job possibilities across various industries. With Jobjet, your career growth is just a click away</h2>
                                    <button className="btn btn-success m-12">Explore Us</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </div>


                </Swiper>
            </div>
            <JobByCategory></JobByCategory>
            <Extra></Extra>

        </div>
    );
};

export default Home;