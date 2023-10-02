import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../../components/carousel/index.css';
import { Pagination } from 'swiper/modules';
import Head from 'next/head';
import Image from 'next/image';
import defaultProfile from '../../assets/img/user_default.jpeg'
import axios from 'axios';
const Carousel = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API}/pekerja/profile`)
            .then((res) => {
                setUsers(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Head>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n  .swiper {\n    width: 100%;\n    height: 100%;\n  }\n  \n  .swiper-slide {\n    text-align: center;\n    font-size: 18px;\n    background: #fff;\n  \n    /* Center slide text vertically */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .swiper-slide img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  , height: '300px'\n"
                    }}
                />

            </Head>
            <div className="container" style={{ marginTop: 30 }}>
                <Swiper
                    // slidesPerView={5}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            centeredSlides: true

                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {users.map((item) => (
                        <SwiperSlide key={item.pekerja_id}>
                            <div className='border' style={{ width: '100%', display: 'flex', justifyContent: 'center', borderRadius: '5%', overflow: 'hidden', padding: '5px 10px' }}>
                                <div className='row' style={{ marginTop: 14 }}>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-10">
                                        <div style={{ width: '100px', height: '100px', overflow: 'hidden', borderRadius: '50%', margin: 'auto' }}>
                                            <Image
                                                className='profile-photo'
                                                src={item.pekerja_photo == "null" || item.pekerja_photo == null || item.pekerja_photo == "undefined" || item.pekerja_photo == undefined
                                                    ? defaultProfile
                                                    : item.pekerja_photo
                                                }
                                                width={100}
                                                height={100}
                                                alt="Pekerja Photo"
                                                // layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div style={{ marginTop: 20 }}>
                                            <h4>{item.pekerja_name}</h4>
                                        </div>
                                        <div>
                                            <p>{item.pekerja_jobdesk == "null" || item.pekerja_jobdesk == null || item.pekerja_jobdesk == "undefined" || item.pekerja_jobdesk == undefined
                                                ? "Jobdesk"
                                                : item.pekerja_jobdesk}</p>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    )
}

export default Carousel