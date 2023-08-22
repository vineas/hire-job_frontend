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


    if (!loginTrue) {
        return (
            <>
                <Navbar />

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
                        <section className="col-md-12">
                            <div className="row">
                                <div
                                    className="col-md-6"
                                    style={{ display: "flex", alignItems: "center" }}
                                >
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
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="title-sect-1">
                                                <h1>Kenapa harus mencari tallent di peworld</h1>
                                            </div>
                                            <div className="par-sect-1" style={{ marginTop: 20 }}>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Corporis sit deserunt quo accusamus quasi.
                                                </p>
                                            </div>
                                            <div className="skill-check" style={{ marginTop: 5 }}>
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-2">

                                                                <Image
                                                                    src={checkBlue}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-2">
                                                                <Image
                                                                    src={checkBlue}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-2">
                                                                <Image
                                                                    src={checkBlue}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-2">
                                                                <Image
                                                                    src={checkBlue}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-12" style={{ marginTop: 102 }}>
                            <div className="row">
                                <div
                                    className="col-md-6"
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="title-sect-1">
                                                <h1>Skill talent</h1>
                                            </div>
                                            <div className="par-sect-1" style={{ marginTop: 20 }}>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Corporis sit deserunt quo accusamus quasi.
                                                </p>
                                            </div>
                                            <div className="skill-check" style={{ marginTop: 5 }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">

                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Java</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Kotlin</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>PHP</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Javascript</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Python</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Python</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Python</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Python</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <Image
                                        src={image3}
                                        style={{ width: '100%', height: '100%' }}
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
                        <section className="col-md-12" style={{ marginTop: 100 }}>
                            <div
                                className="border"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "180%",
                                    borderRadius: "40px 8px 40px 8px",
                                    backgroundColor: "#5E50A1"
                                }}
                            >
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-7">
                                            <h3 style={{ color: "white" }}>Lorem ipsum dolor sit amet.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3" />
                                <div className="col-md-3">
                                    <div className="col-md-12">
                                        <button
                                            style={{
                                                padding: "15px 30px 15px 30px",
                                                borderRadius: 10,
                                                border: 1,
                                                backgroundColor: "white",
                                                color: "#5E50A1"
                                            }}
                                        >
                                            Mulai dari sekarang
                                        </button>
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

    else {
        return (
            <>
                <NavbarLogin />

                <Head>
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
                        <section className="col-md-12">
                            <div className="row">
                                <div
                                    className="col-md-6"
                                    style={{ display: "flex", alignItems: "center" }}
                                >
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
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="title-sect-1">
                                                <h1>Kenapa harus mencari tallent di peworld</h1>
                                            </div>
                                            <div className="par-sect-1" style={{ marginTop: 20 }}>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Corporis sit deserunt quo accusamus quasi.
                                                </p>
                                            </div>
                                            <div className="skill-check" style={{ marginTop: 5 }}>
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-2">

                                                                <Image
                                                                    src={checkBlue}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-2">
                                                                <Image
                                                                    src={checkBlue}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-2">
                                                                <Image
                                                                    src={checkBlue}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-2">
                                                                <Image
                                                                    src={checkBlue}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-12" style={{ marginTop: 102 }}>
                            <div className="row">
                                <div
                                    className="col-md-6"
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="title-sect-1">
                                                <h1>Skill talent</h1>
                                            </div>
                                            <div className="par-sect-1" style={{ marginTop: 20 }}>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Corporis sit deserunt quo accusamus quasi.
                                                </p>
                                            </div>
                                            <div className="skill-check" style={{ marginTop: 5 }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">

                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Java</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Kotlin</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>PHP</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Javascript</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Python</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Python</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Python</p>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="col-md-3">
                                                                <Image
                                                                    src={check}
                                                                />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>Python</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <Image
                                        src={image3}
                                        style={{ width: '100%', height: '100%' }}
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
                            <Carousel/>
                        </section>
                        <section className="col-md-12" style={{ marginTop: 100 }}>
                            <div
                                className="border"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "180%",
                                    borderRadius: "40px 8px 40px 8px",
                                    backgroundColor: "#5E50A1"
                                }}
                            >
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-7">
                                            <h3 style={{ color: "white" }}>Lorem ipsum dolor sit amet.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3" />
                                <div className="col-md-3">
                                    <div className="col-md-12">
                                        <button
                                            style={{
                                                padding: "15px 30px 15px 30px",
                                                borderRadius: 10,
                                                border: 1,
                                                backgroundColor: "white",
                                                color: "#5E50A1"
                                            }}
                                        >
                                            Mulai dari sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>


                <Footer />

                {/* <Script src="js/jquery-1.11.0.min.js"></Script>
                <Script src="js/bootstrap.min.js"></Script>
                <Script src="js/wow.min.js"></Script> */}

                <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></Script>
            </>
        )
    }

}

export default Home