import Head from 'next/head'
import React from 'react'
import logo from '../../assets/img/landingPage/logo.png'
import Image from 'next/image'


const Footer = () => {
    return (
        <>
            <Head>

            </Head>

            <footer
                style={{
                    backgroundColor: "#5E50A1",
                    width: "100%",
                    height: 401,
                    marginTop: 100
                }}
            >
                <div className="container" style={{ paddingTop: 80 }}>
                    <div className="logo-footer">
                        <Image
                        src={logo}
                        />
                            {/* <img src="../assetes/img/landingPage/logo.png" /> */}
                    </div>
                    <div
                        className="par-footer"
                        style={{ marginTop: 30, color: "white", width: 290, height: 75 }}
                    >
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sint
                            libero non voluptate velit.
                        </p>    
                    </div>
                    <div style={{ marginTop: 70, color: "grey" }}>
                        <hr style={{ backgroundColor: "white" }} />
                    </div>
                    <div className="row" style={{ color: "white" }}>
                        <div className="col-md-10">
                            <p>2020 Pewworld. All right reserved</p>
                        </div>
                        <div className="col-md-1">
                            <p>Telepon</p>
                        </div>
                        <div className="col-md-1">
                            <p>email</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer