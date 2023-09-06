import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import defaultProfile from '../../assets/img/user_default.jpeg'
import edit from '../../assets/img/editprofilecompany/edit.png'
import porto from '../../assets/img/pekerjaprofileupdate/porto.png'
import Image from 'next/image'
import NavbarLogin from '../../components/navbarlogin'
import Footer from '../../components/footer'
import Link from 'next/link'
import ProfilePerekrut from '../profileperekrut'
import axios from 'axios'
import Script from 'next/script'
import { createPengalaman } from '../../config/redux/actions/pengalamanAction'
import { useDispatch } from 'react-redux'
import Swal from "sweetalert";
import { createSkill } from '../../config/redux/actions/skillAction'

const ProfilePerekrutUpdate = ({ perekrut_id, perekrut_perusahaan, perekrut_photo, perekrut_bidang, perekrut_kota, perekrut_deskripsi, perekrut_instagram, perekrut_phone, perekrut_linkedin }) => {
    const [getid, setGetId] = useState(null);
    const [users, setUsers] = useState([]);

    const [data, setData] = useState({
        perekrut_id,
        perekrut_perusahaan,
        perekrut_photo,
        perekrut_bidang,
        perekrut_kota,
        perekrut_deskripsi,
        perekrut_instagram,
        perekrut_phone,
        perekrut_linkedin
    });

    const [image, setImage] = useState(null);
    const handleUpload = (e) => {
        setImage(e.target.files[0]);
    };
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const storedId = localStorage.getItem("perekrut_id");

        if (!storedId) {
            const newId = uuidv4();
            localStorage.setItem("perekrut_id", newId);
            setGetId(newId);
        } else {
            setGetId(storedId);
        }
    }, []);

    useEffect(() => {
        if (getid !== null) {
            axios.get(`https://hire-job-backend.vercel.app/perekrut/profile/${getid}`)
                .then((res) => {
                    setUsers(res.data.data[0]);
                    console.log(res.data.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [getid]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("perekrut_perusahaan", data.perekrut_perusahaan);
        formData.append("perekrut_photo", image);
        formData.append("perekrut_bidang", data.perekrut_bidang);
        formData.append("perekrut_kota", data.perekrut_kota);
        formData.append("perekrut_deskripsi", data.perekrut_deskripsi);
        formData.append("perekrut_instagram", data.perekrut_instagram);
        formData.append("perekrut_phone", data.perekrut_phone);
        formData.append("perekrut_linkedin", data.perekrut_linkedin);

        axios.put(`https://hire-job-backend.vercel.app/perekrut/profile/${getid}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                alert("Profile Updated");
                window.location.reload();
            })
            .catch((err) => {
                alert(err);
            });
    };

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
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
                    <title>Profile Perekrut</title>
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
                                            <div style={{ display: "flex" }}>
                                                <input
                                                    type='file'
                                                    name="perekrut_photo"
                                                    value={data.perekrut_photo}
                                                    onChange={handleUpload}
                                                />

                                                {/* <Image
                                                    src={edit}
                                                    style={{ width: 16, height: 16 }}
                                                />
                                                <h5 style={{ marginLeft: 5 }}>Edit</h5> */}
                                            </div>
                                            <div>
                                                <Image
                                                    // src={profilephoto}
                                                    src={users.perekrut_photo == "undefined" || users.perekrut_photo == undefined || users.perekrut_photo == "null" || users.perekrut_photo == null
                                                        ? defaultProfile
                                                        : users.perekrut_photo
                                                    }
                                                    alt="Perekrut Photo"
                                                    width={150}
                                                    height={150}
                                                    style={{ marginTop: 50, borderRadius: 100 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: 45 }}>
                                        <h4>{users.perekrut_perusahaan}</h4>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: 12 }}>
                                        <p>{users.perekrut_bidang}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p style={{ color: "grey" }}>{users.perekrut_kota}</p>
                                    </div>
                                    <div className="col-md-4 " />
                                    <form onSubmit={handleSubmit} style={{
                                        width: "100%"
                                    }}>
                                        <div className="col-md-12" style={{ marginTop: 20 }}>
                                            <button
                                                type="submit"
                                                className="btn"
                                                style={{
                                                    backgroundColor: "#5E50A1",
                                                    color: "white",
                                                    width: "100%"
                                                }}
                                            >
                                                Simpan
                                            </button>
                                        </div>
                                    </form>
                                    <div className="col-md-12">
                                        <Link href="/profileperekrut">
                                            <button
                                                type="button"
                                                className="btn border"
                                                style={{
                                                    width: "100%",
                                                    marginTop: 10,
                                                    backgroundColor: "white"
                                                }}
                                            >
                                                Batal
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-8 " style={{ marginTop: 40 }}>

                            <form onSubmit={handleSubmit}>
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
                                    <h3>Data diri</h3>
                                    <hr />
                                    <div>
                                        <label htmlFor="">Nama perusahaan</label>

                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan nama perusahaan"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="perekrut_perusahaan"
                                                value={data.perekrut_perusahaan}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Bidang</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan bidang perusahaan ex: Financial"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="perekrut_bidang"
                                                value={data.perekrut_bidang}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Kota</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan kota"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="perekrut_kota"
                                                value={data.perekrut_kota}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="">Deskripsi</label>
                                        <div className="input-group mb-3">
                                            <textarea
                                                className="form-control"
                                                aria-label="With textarea"
                                                placeholder="Tuliskan deskipsi singkat"
                                                defaultValue={"Deskripsi"}
                                                name="perekrut_deskripsi"
                                                value={data.perekrut_deskripsi}
                                                onChange={handleChange}
                                                required

                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Instagram</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan nama instagram"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="perekrut_instagram"
                                                value={data.perekrut_instagram}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">No telepon</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan no telepon"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="perekrut_phone"
                                                value={data.perekrut_phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Linkedin</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan nama linkedin"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="perekrut_linkedin"
                                                value={data.perekrut_linkedin}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>


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

export default ProfilePerekrutUpdate