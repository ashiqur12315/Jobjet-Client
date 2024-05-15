
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
            <div className="px-10 py-8 border-2 border-red-500">
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
                            <div className="bg-[url('https://i.ibb.co/Fwrykb6/job1.jpg')]   bg-cover bg-no-repeat h-[580px] w-full border-2 border-red-500">
                                <div className="bg-gradient-to-r from-black to-transparent h-full">
                                    <h2 className="text-3xl text-white font-bold">Unlock Your Career Potential with Jobjet</h2>
                                    <h2 className="text-2xl text-white">Join Jobjet, where professionals like you <br /> thrive in a dynamic network designed to foster growth and opportunity.</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[url('https://i.ibb.co/tZhBpBY/ai-generated-7790635-1280.webp')] bg-cover bg-no-repeat h-[580px] w-full border-2 border-red-500">
                                <div className="bg-gradient-to-r from-black to-transparent h-full">
                                    <h2 className="text-3xl text-white font-extrabold">Unlock Your Career Potential with Jobjet</h2>
                                    <h2 className="text-3xl">Join Jobjet, where professionals like you thrive in a dynamic network designed to foster growth and opportunity.</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[url('https://i.ibb.co/KqkjfWB/painting-3995999-1280.webp')] bg-cover bg-no-repeat h-[580px] w-full border-2 border-red-500">
                                <div className="bg-gradient-to-r from-black to-transparent h-full">
                                    <h2 className="text-3xl">Unlock Your Career Potential with Jobjet</h2>
                                    <h2 className="text-3xl">Join Jobjet, where professionals like you thrive in a dynamic network designed to foster growth and opportunity.</h2>
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