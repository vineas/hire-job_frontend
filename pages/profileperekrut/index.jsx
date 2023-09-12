import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import NavbarLogin from '../../components/navbarlogin'
import Footer from '../../components/footer'
import Script from 'next/script'
import Image from 'next/image'
import mail from '../../assets/img/profilepekerja/mail.png'
import instagram from '../../assets/img/profileperekrut/instagram.png'
import linkedin from '../../assets/img/profileperekrut/linkedin.png'
import phone from '../../assets/img/profileperekrut/phone.png'
import { v4 as uuidv4 } from 'uuid';
import defaultProfile from '../../assets/img/user_default.jpeg'
import Link from 'next/link'
import axios from 'axios'


const ProfilePerekrut = () => {
    const [perekrut, setPerekrut] = useState([]);
    const [getid, setGetId] = useState(null);

    useEffect(() => {
        const storedId = localStorage.getItem("perekrut_id");

        if (!storedId) {
            const newId = uuidv4();
            localStorage.setItem("perekrut_id", newId);
            setGetId(newId);
        } else {
            setGetId(storedId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (getid !== null) {
            axios.get(`https://hire-job-backend.vercel.app/perekrut/profile/${getid}`)
                .then((res) => {
                    setPerekrut(res.data.data[0]);
                    console.log(res.data.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getid]);

    return (
        <>
            <NavbarLogin />
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
                    <title>Profile</title>
                </>
            </Head>

            <main className="container" style={{ marginTop: 40, }}>
                <div className="row">
                    <div className="col-md-2" />
                    <div
                        className="col-md-8 border"
                        style={{ borderRadius: 5, paddingBottom: 20 }}
                    >
                        <div style={{ height: "24%", width: "100%", backgroundColor: "#5E50A1" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                {/* Provide width and height properties for the image */}
                                <Image
                                    src={perekrut.perekrut_photo == "undefined" || perekrut.perekrut_photo == undefined || perekrut.perekrut_photo == "null" || perekrut.perekrut_photo == null
                                    ? defaultProfile
                                    : perekrut.perekrut_photo
                                    }
                                    alt="Perekrut Photo"
                                    width={150} // Set the actual width of the image
                                    height={150} // Set the actual height of the 10mage
                                    style={{ marginTop: 50, borderRadius:100 }}
                                />
                            </div>
                            <div
                                style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
                            >
                                <h4>{perekrut.perekrut_perusahaan}</h4>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <h6>{perekrut.perekrut_bidang}</h6>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <h6 style={{ color: "grey" }}>{perekrut.perekrut_kota}</h6>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: 20,
                                    padding: "0px 16px 0px 16px"
                                }}
                            >
                                <h6 style={{ color: "grey", textAlign: "center" }}>
                                    {perekrut.perekrut_deskripsi}
                                </h6>
                            </div>
                            <div
                                className="col-md-12"
                                style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
                            >
                                <Link href='/profileperekrutupdate'>
                                    <button
                                    perekrut_id={perekrut.perekrut_id}
                                    perekrut_perusahaan={perekrut.perekrut_perusahaan}
                                    perekrut_photo={perekrut.perekrut_photo}
                                    perekrut_bidang={perekrut.perekrut_bidang}
                                    perekrut_kota={perekrut.perekrut_kota}
                                    perekrut_deskripsi={perekrut.perekrut_deskripsi}
                                    perekrut_instagram={perekrut.perekrut_instagram}
                                    perekrut_phone={perekrut.perekrut_phone}
                                    perekrut_linkedin={perekrut.perekrut_linkedin}
                                        type="button"
                                        className="btn btn-warning"
                                        style={{ color: "white", width: "100%" }}
                                    >
                                        Edit
                                    </button>
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col-md-2" />
                                <div className="col-md-8" style={{ marginTop: 20 }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginTop: 20
                                        }}
                                    >
                                        <div>
                                            <Image
                                                src={mail}
                                                alt='mail'
                                            />
                                        </div>
                                        <div style={{ marginLeft: 10 }}>
                                            <p>{perekrut.perekrut_email}</p>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginTop: 20
                                        }}
                                    >
                                        <div>
                                            <Image
                                                src={instagram}
                                            />                                        </div>
                                        <div style={{ marginLeft: 10 }}>
                                            <p>@{perekrut.perekrut_instagram}</p>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginTop: 20
                                        }}
                                    >
                                        <div>
                                            <Image
                                                src={phone}
                                            />
                                        </div>
                                        <div style={{ marginLeft: 10 }}>
                                            <p>{perekrut.perekrut_phone}</p>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginTop: 20
                                        }}
                                    >
                                        <div>
                                            <Image
                                                src={linkedin}
                                            />
                                        </div>
                                        <div style={{ marginLeft: 10 }}>
                                            <p>{perekrut.perekrut_linkedin}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2" />
                </div>
            </main>

            <Footer />

            <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
                crossorigin="anonymous"></Script>
        </>
    )
}

export default ProfilePerekrut