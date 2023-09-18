import React, { useEffect, useState } from 'react'
import bell from '../../assets/img/navbar/bell.png'
import mail from '../../assets/img/navbar/mail.png'
import profile from '../../assets/img/navbar/profile.png'
import logo from '../../assets/img/landingPage/logo-blue.png'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from 'next/router'

const NavbarLogin = () => {

    const router = useRouter();
    const [loginWrk, setLoginWrk] = useState();
    const [loginRec, setLoginRec] = useState();

    useEffect(() => {
        const isLoginPekerja = localStorage.getItem("pekerja_id");
        const isLoginPerekrut = localStorage.getItem("perekrut_id");
        setLoginWrk(isLoginPekerja);
        setLoginRec(isLoginPerekrut);
    }, []);

    // const handleLogout = () => {
    //     localStorage.clear();
    //     router.push("/home");
    //     // window.location.reload();
    // }; 

    return (
        <>
            <Head>
                <>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
                        crossOrigin="anonymous"
                    />
                </>

            </Head>
            <header>
                {/* Image and text */}
                {/* <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className="col-md-6">
                            <a className="navbar-brand" href="#">
                                <Image
                                    src={logo}
                                    alt="photo"
                                />
                            </a>
                        </div>
                        <div className="col-md-1" />
                        <div
                            className="col-md-5"
                            style={{ display: "flex", justifyContent: "end" }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "end",
                                    margin: "0px 26px 0px 26px"
                                }}
                            >
                                <Image
                                    src={bell}
                                    style={{ width: 24, height: 24 }}
                                />

                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "end",
                                    margin: "0px 26px 0px 26px"
                                }}
                            >
                                <Image
                                    src={mail}
                                    style={{ width: 24, height: 24 }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "end",
                                    margin: "0px 26px 0px 26px"
                                }}
                            >
                                <Link href="/profilepekerja">
                                    <Image
                                        src={profile}
                                        style={{ width: 24, height: 24 }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className='container'>
                        <Link href='/home'>
                            {/* <a className="navbar-brand" href="#"> */}
                            <Image
                                src={logo}
                                alt="photo"
                            />
                            {/* </a> */}
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div
                                    className="col-md-5  "
                                    style={{ display: "flex" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "end",
                                            margin: "0px 26px 0px 26px"
                                        }}
                                    >
                                        <Image
                                            src={bell}
                                            style={{ width: 24, height: 24 }}
                                        />

                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "end",
                                            margin: "0px 26px 0px 26px"
                                        }}
                                    >
                                        <Image
                                            src={mail}
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </div>
                                    {/* <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "end",
                                            margin: "0px 26px 0px 26px"
                                        }}>
                                        <Link href="/profile">
                                            <Image
                                                src={profile}
                                                style={{ width: 24, height: 24 }}
                                            />
                                        </Link>
                                    </div> */}

                                    <div className="btn-group">
                                        <div
                                            className="ms-md-5 ms-4"
                                            data-bs-toggle="dropdown"
                                            data-bs-display="static"
                                            aria-expanded="false"
                                        >
                                            <Image
                                                src={profile}
                                                height={32}
                                                style={{ borderRadius: "50%" }}
                                                alt="photo"
                                            />
                                        </div>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    type="button"
                                                    onClick={(e) => {
                                                        if (loginRec) {
                                                            router.push(`/profileperekrut/${loginRec}`);
                                                        } else {
                                                            router.push(`/profilepekerja/${loginWrk}`);
                                                        }
                                                    }}
                                                    style={{ display: "inline-block" }}
                                                >
                                                    Profile
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    type="button"
                                                    onClick={(e) => {
                                                        localStorage.clear();
                                                        router.push("/home");
                                                        setTimeout(function () {
                                                            window.location.reload();
                                                        }, 1000);
                                                    }}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>


                                    {/* <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "end",
                                            margin: "0px 26px 0px 26px"
                                        }}>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={handleLogout}
                                            style={{ color: "white", width: "75px", height:'35px'}}
                                        >
                                            Logout
                                        </button>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></Script>

        </>
    )
}

export default NavbarLogin