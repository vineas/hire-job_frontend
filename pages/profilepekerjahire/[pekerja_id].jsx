import Head from 'next/head'
import Link from 'next/link'
import defaultProfile from '../../assets/img/user_default.jpeg'
import mail from '../../assets/img/profilepekerja/mail.png'
import React, { useEffect, useState } from 'react'
import NavbarLogin from '../../components/navbarlogin'
import Image from 'next/image'
import Footer from '../../components/footer'
import axios from 'axios'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ModalHiring from '../../components/modalhiring'

const ProfilePekerjaHire = () => {
    const router = useRouter();
    const { pekerja_id } = router.query;
    const [users, setUsers] = useState(null);
    const [skill, setSkill] = useState([]);
    const [pengalaman, setPengalaman] = useState([]);
    const [portofolio, setPortofolio] = useState([]);
    const [getid, setGetId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [pengalamanKerja, setPengalamanKerja] = useState({
        posisi: "",
        nama_perusahaan: "",
        dari: "",
        sampai: "",
        deskripsi: "",
        pekerja_id: "",
    });

    useEffect(() => {
        if (pekerja_id) {
            axios.get(`http://hire-job-backend.vercel.app/pengalaman/pekerja/${pekerja_id}`)
                .then((res) => {
                    setPengalaman(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [pekerja_id]);

    useEffect(() => {
        if (pekerja_id) {
            axios.get(`https://hire-job-backend.vercel.app/skill/${pekerja_id}`)
                .then((res) => {
                    setSkill(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [pekerja_id]);

    useEffect(() => {
        if (pekerja_id) {
            axios.get(`https://hire-job-backend.vercel.app/pekerja/profile/${pekerja_id}`)
                .then((res) => {
                    setUsers(res.data.data[0]);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [pekerja_id]);

    useEffect(() => {
        if (pekerja_id !== null) {
            axios.get(`https://hire-job-backend.vercel.app/portofolio/pekerja/${pekerja_id}`)
                .then((res) => {
                    setPortofolio(res.data.data);
                    setIsLoading(false);
                }, [])
                .catch((err) => {
                    console.log(err);
                });

        }
    }, [pekerja_id]);

    if (!users) {
        return
    }


    return (
        <>
            <NavbarLogin />
            {/* <TopJobs pekerja_id={pekerja_id}/> */}
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
                    <title>Profile Pekerja</title>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n        .background-purple {\n            width: 100vw;\n            height: 60vh;\n            background-color: #5E50A1;\n        }\n    "
                        }}
                    />
                    <style>
                        .profile-photo{"{"}
                        width: "130%"
                        {"}"}
                        @media screen and (max-width: 576px){"{"}
                        width: "100%"
                        {"}"}

                    </style>
                </>
            </Head>

            <div className="background-purple">
                <main className="container">
                    <div className="row">
                        <section className="col-md-4" style={{ marginTop: 40 }}>
                            <div
                                className="border"
                                style={{
                                    borderRadius: 10,
                                    width: "100%",
                                    padding: "20px 15px 20px 15px",
                                    backgroundColor: "white"
                                }}
                            >
                                <div className="row">
                                    <div className="col-md-4 " />
                                    <div
                                        className="col-md-4 "
                                        style={{ display: "flex", justifyContent: "center" }}
                                    >
                                        <div
                                            className="row"
                                            style={{ display: "flex", justifyContent: "center" }}
                                        >
                                            <div>
                                                <Image
                                                    className='profile-photo'
                                                    src={isLoading ? (
                                                        <Skeleton />
                                                        // <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
                                                        // </div>
                                                    ) : (users.pekerja_photo == "null" || users.pekerja_photo == null || users.pekerja_photo == "undefined" || users.pekerja_photo == undefined
                                                        ? defaultProfile
                                                        : users.pekerja_photo
                                                    )}
                                                    alt="Pekerja Photo"
                                                    width={150}
                                                    height={150}
                                                    style={{ marginTop: 10, borderRadius: 100 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: 45, display: "flex", justifyContent: "center" }}>
                                        <h4 style={{ textAlign: "center" }}>{users.pekerja_name}</h4>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
                                        <p style={{ textAlign: 'center' }}>{users.pekerja_jobdesk == "null" || users.pekerja_jobdesk == null || users.pekerja_jobdesk == "undefined" || users.pekerja_jobdesk == undefined
                                            ? "Jobdesk"
                                            : users.pekerja_jobdesk}</p>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: -16, display: "flex", justifyContent: "center" }}>
                                        <p style={{ color: "grey" }}>
                                            {users.pekerja_domisili == "null" || users.pekerja_domisili == null || users.pekerja_domisili == "undefined" || users.pekerja_domisili == undefined
                                                ? "Domisili"
                                                : users.pekerja_domisili}
                                        </p>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: 1, display: "flex", justifyContent: "center" }}>
                                        <p style={{ textAlign: 'justify' }}>
                                            {users.pekerja_deskripsi == "null" || users.pekerja_deskripsi == null || users.pekerja_deskripsi == "undefined" || users.pekerja_deskripsi == undefined
                                                ? "Deskripsi"
                                                : users.pekerja_deskripsi}
                                        </p>
                                    </div>
                                    <div className="col-md-4 " />
                                    <div className="col-md-12 " style={{ marginTop: 20, }}>
                                        <h5 style={{ textAlign: "center" }}>Skill</h5>
                                        <div style={{ display: "flex", justifyContent: "center", flexWrap: 'wrap' }} className=''>
                                            {skill.map((skills, index) => (
                                                <div
                                                    className="skill-item"
                                                    key={index}
                                                    style={{
                                                        width: 'auto',
                                                        backgroundColor: "#FFA07A",
                                                        color: 'white',
                                                        borderRadius: 15,
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: 'center',
                                                        margin: '6px 6px',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <p style={{ margin: 0 }}>{skills.skill_name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-md-12" style={{ marginTop: 40 }}>
                                        <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
                                            <div>
                                                <Image
                                                    src={mail}
                                                />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <p>{users.pekerja_email}</p>
                                            </div>
                                        </div>

                                        {/* <div style={{ display: "flex", marginTop: 20 }}>
                                            <div>
                                                <img
                                                    src="../assetes/img/profilepekerja/instagram.png"
                                                    alt="photo"
                                                />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <p>@markomat_mamat</p>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div>
                                                <img src="../assetes/img/profilepekerja/github.png" alt="photo" />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <p>@markomatdev</p>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div>
                                                <img src="../assetes/img/profilepekerja/gitlab.png" alt="photo" />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <p>@markomat_dev</p>
                                            </div>
                                        </div> */}
                                    </div>
                                    <ModalHiring
                                        pekerja_id={users.pekerja_id}
                                        pekerja_name={users.pekerja_name}
                                        pekerja_email={users.pekerja_email}
                                    />
                                    {/* <div className="col-md-12" style={{ marginTop: 30 }}>
                                        <Link href='#'>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                style={{
                                                    color: "white",
                                                    width: "100%"
                                                }}
                                            >
                                                Hire
                                            </button>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </section>
                        <section className="col-md-8 " style={{ marginTop: 40 }}>
                            <div
                                className="border"
                                style={{
                                    borderRadius: 10,
                                    width: "100%",
                                    paddingTop: 30,
                                    paddingLeft: 20,
                                    paddingRight: 30,
                                    backgroundColor: "white"
                                }}
                            >
                                <div className="col-md-12">
                                    <h3>Portofolio</h3>
                                    <hr />
                                    <div className="row">
                                        {portofolio.map((porto) => (
                                            <div key={porto.portofolio_id} className="col-md-4 mb-3">
                                                <Link href={porto.link_repository}>
                                                    <div>
                                                        <Image src={porto.portofolio_image} width={215} height={140} />
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            marginTop: 10,
                                                        }}
                                                    >
                                                        <p>{porto.portofolio_name}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-md-12" style={{ paddingBottom: '24px' }}>
                                    <h3>Pengalaman kerja</h3>
                                    <hr />
                                    {Array.isArray(pengalaman) && pengalaman.map((exp) => (
                                        <div className='border' style={{ padding: '20px 20px 4px 20px', borderRadius: 10, marginTop: 10 }}>
                                            <div className="row">
                                                <div className="col-md-7 ">
                                                    <h5>{exp.posisi}</h5>
                                                    <p>{exp.nama_perusahaan}</p>
                                                    <p>{exp.dari} - {exp.sampai}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    {exp.deskripsi}
                                                </p>
                                            </div>
                                            {/* <hr /> */}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></Script>

        </>
    )
}

export default ProfilePekerjaHire