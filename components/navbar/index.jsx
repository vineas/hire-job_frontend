import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import logo from '../../assets/img/landingPage/logo-blue.png'
import Link from 'next/link'
import Script from 'next/script'


const Navbar = () => {
    return (
        <>
            <Head>
                <>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
                        crossOrigin="anonymous"
                    />
                </>

            </Head>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className='container'>
                    <Link href='/home'>
                            {/* <a className="navbar-brand" href="#"> */}
                                <Image
                                    src={logo}
                                    alt=""
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
                                <Link href="/loginpekerja">
                                    <button
                                        type="button"
                                        className="btn btn-light border"
                                        style={{
                                            marginRight: 16,
                                            color: "#5E50A1",
                                            borderStyle: "solid",
                                            borderColor: "#5E50A1",
                                            borderRadius: 10
                                        }}
                                    >
                                        Masuk untuk Pekerja
                                    </button>
                                </Link>
                                <Link href="/loginperekrut">
                                <button
                                    type="button"
                                    className="btn-perekrut"
                                    style={{
                                        backgroundColor: "#5E50A1",
                                        color: "white",
                                        borderRadius: 10
                                    }}
                                >
                                    Masuk untuk Perekrut
                                </button>
                                </Link>

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

export default Navbar