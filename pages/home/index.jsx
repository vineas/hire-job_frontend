import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import image1 from '../../assets/img/landingPage/pict-sect-1.png'
import image2 from '../../assets/img/landingPage/pict-sect-2.png'
import image3 from '../../assets/img/landingPage/pict-sect-3.png'
import checkBlue from '../../assets/img/landingPage/check-blue.png'
import check from '../../assets/img/landingPage/check.png'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '../../components/footer'
import NavbarLogin from '../../components/navbarlogin'
import Link from 'next/link'
import Carousel from '../../components/carousel'
import Script from 'next/script'

const Home = () => {

    const [loginTrue, setLoginTrue] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        setLoginTrue(!!token);
    }, []);
    return (
        <>
            {loginTrue ? <NavbarLogin /> : <Navbar />}

            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
                    crossOrigin="anonymous"
                />
                <title>Home</title>
                <style>
                    @media screen and (max-width: 576px){"{"}
                    #content2{"{"}
                    display: flex; flex-direction: column-reverse;
                    {"}"}
                    {"}"}
                </style>
            </Head>

            <main className="container">
                <div className="row">
                    <section className="col-md-12" style={{ marginTop: 30 }}>
                        <div className="row">
                            <div
                                className="col-md-6"
                                style={{ display: "flex", alignItems: "center" }}>
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="title-sect-1">
                                            <h1>Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
                                        </div>
                                        <div className="par-sect-1" style={{ marginTop: 20 }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                                            obcaecati. Culpa, unde id sit commodi nesciunt atque quod
                                            necessitatibus veniam?
                                        </div>
                                        <div className="btn-sect-1" style={{ marginTop: 50 }}>
                                            <Link href="/topjobs">
                                                <button
                                                    style={{
                                                        padding: "15px 30px 15px 30px",
                                                        borderRadius: 10,
                                                        border: 1,
                                                        backgroundColor: "#5E50A1",
                                                        color: "white"
                                                    }}
                                                >
                                                    Mulai dari sekarang
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Image
                                    src={image1}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="col-md-12" style={{ marginTop: 102 }} >
                        <div className="row" id='content2'
                        // style={{display: 'flex', flexDirection:'column-reverse'}}
                        >
                            <div className="col-md-6">
                                <Image
                                    src={image2}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="title-sect-1">
                                    <h1>Kenapa harus mencari talent di peworld</h1>
                                </div>
                                <div className="par-sect-1" style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.5' }}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Corporis sit deserunt quo accusamus quasi.
                                    </p>
                                </div>
                                <div className="skill-check" style={{ marginTop: '5px' }}>
                                    <div className="row">
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <Image src={checkBlue} />
                                        </div>
                                        <div className="col-10">
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <Image src={checkBlue} />
                                        </div>
                                        <div className="col-10">
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <Image src={checkBlue} />
                                        </div>
                                        <div className="col-10">
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <Image src={checkBlue} />
                                        </div>
                                        <div className="col-10">
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="col-md-12" style={{ marginTop: '102px' }}>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="col-md-10">
                                    <div className="title-sect-1">
                                        <h1>Skill talent</h1>
                                    </div>
                                    <div className="par-sect-1" style={{ marginTop: '20px' }}>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Corporis sit deserunt quo accusamus quasi.
                                        </p>
                                    </div>
                                    <div className="skill-check" style={{ marginTop: '5px' }}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="d-flex flex-wrap">
                                                    {['Java', 'Kotlin', 'PHP', 'Javascript'].map(skill => (
                                                        <div className="d-flex align-items-center" key={skill} style={{ marginRight: '15px', marginBottom: '10px', flexBasis: '50%' }}>
                                                            <div style={{ marginRight: '10px' }}>
                                                                <Image src={check} style={{ maxWidth: '20px', height: 'auto' }} />
                                                            </div>
                                                            <div>
                                                                <p style={{marginTop:18}}>{skill}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-flex flex-wrap">
                                                    {['Golang', 'Ruby', 'Swift', 'Python'].map(skill => (
                                                        <div className="d-flex align-items-center" key={skill} style={{ marginRight: '15px', marginBottom: '10px', flexBasis: '50%' }}>
                                                            <div style={{ marginRight: '10px' }}>
                                                                <Image src={check} style={{ maxWidth: '20px', height: 'auto' }} />
                                                            </div>
                                                            <div >
                                                                <p style={{marginTop:18}}>{skill}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Image
                                    src={image3}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="col-md-12">
                        <div
                            className="col-md-12"
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <h3>Their opinion about peworld</h3>
                        </div>

                        <Carousel />

                    </section>

                    <section className="col-md-12" style={{ marginTop: "100px" }}>
                        <div className="border" style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "20px",
                            borderRadius: "40px 8px 40px 8px",
                            backgroundColor: "#5E50A1"
                        }}>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 style={{ color: "white" }}>Lorem ipsum dolor sit amet.</h3>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-5 d-flex justify-content-center">
                                    <Link href="/topjobs">
                                        <button
                                            style={{
                                                padding: "9px 15px 9px 15px",
                                                borderRadius: "10px",
                                                border: "none",
                                                backgroundColor: "white",
                                                color: "#5E50A1"
                                            }}
                                        >
                                            Mulai dari sekarang
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />

        </>
    )
}
export default Home