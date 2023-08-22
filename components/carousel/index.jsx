import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../../components/carousel/index.css';
import { Pagination } from 'swiper/modules';
import Head from 'next/head';
import Image from 'next/image';
import harry from '../../assets/img/landingPage/harry.png'
import niall from '../../assets/img/landingPage/niall.png'
import louis from '../../assets/img/landingPage/louis.png'
const Carousel = () => {
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
                            spaceBetween: 10
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


                    <SwiperSlide>
                        <div className='border' style={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <div className='row' style={{marginTop: 14}}>
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <Image
                                        src={harry}
                                        style={{ width: '100px', height: '100px', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
                                    />
                                    <div>
                                        <h4>Harry Styles</h4>
                                    </div>
                                    <div>
                                        <p>Web Developer</p>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio!</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border' style={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <div className='row' style={{marginTop: 14}}>
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <Image
                                        src={louis}
                                        style={{ width: '100px', height: '100px', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
                                    />
                                    <div>
                                        <h4>Louis Styles</h4>
                                    </div>
                                    <div>
                                        <p>Mobile Developer</p>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio!</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border' style={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <div className='row' style={{marginTop: 14}}>
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <Image
                                        src={niall}
                                        style={{ width: '100px', height: '100px', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
                                    />
                                    <div>
                                        <h4>Niall Styles</h4>
                                    </div>
                                    <div>
                                        <p>Web Developer</p>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio!</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border' style={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <div className='row' style={{marginTop: 14}}>
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <Image
                                        src={louis}
                                        style={{ width: '100px', height: '100px', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
                                    />
                                    <div>
                                        <h4>Louis Styles</h4>
                                    </div>
                                    <div>
                                        <p>Web Developer</p>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio!</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border' style={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <div className='row' style={{marginTop: 14}}>
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <Image
                                        src={harry}
                                        style={{ width: '100px', height: '100px', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
                                    />
                                    <div>
                                        <h4>Harry Styles</h4>
                                    </div>
                                    <div>
                                        <p>Web Developer</p>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio!</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border' style={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <div className='row' style={{marginTop: 14}}>
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <Image
                                        src={harry}
                                        style={{ width: '100px', height: '100px', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
                                    />
                                    <div>
                                        <h4>Harry Styles</h4>
                                    </div>
                                    <div>
                                        <p>Web Developer</p>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio!</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border' style={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <div className='row' style={{marginTop: 14}}>
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <Image
                                        src={harry}
                                        style={{ width: '100px', height: '100px', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
                                    />
                                    <div>
                                        <h4>Harry Styles</h4>
                                    </div>
                                    <div>
                                        <p>Web Developer</p>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio!</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </>
    )
}

export default Carousel