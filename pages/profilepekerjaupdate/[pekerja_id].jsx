import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import defaultProfile from '../../assets/img/user_default.jpeg'
import edit from '../../assets/img/editprofilecompany/edit.png'
import Image from 'next/image'
import NavbarLogin from '../../components/navbarlogin'
import Footer from '../../components/footer'
import Link from 'next/link'
import axios from 'axios'
import Script from 'next/script'
import { createPengalaman } from '../../config/redux/actions/pengalamanAction'
import { useDispatch } from 'react-redux'
import Swal from "sweetalert";
import { createSkill } from '../../config/redux/actions/skillAction'
import { v4 as uuidv4 } from 'uuid';
import { createPortofolio } from '../../config/redux/actions/portofolioAction'
import ModalUpdate from '../../components/modalupdatepengalaman'
import { useRouter } from 'next/router'


const ProfilePekerjaUpdate = (props) => {

    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [getid, setGetId] = useState(null);
    const [data, setData] = useState({
        pekerja_name: props.pekerja_name,
        pekerja_jobdesk: props.pekerja_jobdesk,
        pekerja_domisili: props.pekerja_domisili,
        pekerja_tempat_kerja: props.pekerja_tempat_kerja,
        pekerja_deskripsi: props.pekerja_deskripsi
    });
    const [image, setImage] = useState(null);
    const handleUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const handleChange = (e) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value,
        });
    };


    useEffect(() => {
        const storedId = localStorage.getItem("pekerja_id");

        if (!storedId) {
            const newId = uuidv4();
            localStorage.setItem("pekerja_id", newId);
            setGetId(newId);
        } else {
            setGetId(storedId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [pengalaman, setPengalaman] = useState({
        posisi: "",
        nama_perusahaan: "",
        dari: "",
        sampai: "",
        deskripsi: "",
        pekerja_id: getid
    });

    useEffect(() => {
        if (getid !== null) {
            axios.get(`${process.env.NEXT_PUBLIC_API}/pengalaman/pekerja/${getid}`)
                .then((res) => {
                    setPengalaman(res.data.data);
                }, [])
                .catch((err) => {
                    console.log(err);
                });

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getid]);


    const [skill, setSkill] = useState({
        skill_name: '',
        pekerja_id: getid
    });

    const handleSubmitSkill = (e) => {
        e.preventDefault();
        const skillsArray = skill.skill_name.split(',').map((skill_name) => skill_name.trim());
        skillsArray.forEach((skill_name) => {
            const newSkill = { skill_name, pekerja_id: getid };
            dispatch(createSkill(newSkill));
        });
        setSkill({ ...skill, skill_name: '' });
    };

    useEffect(() => {
        if (getid !== null) {
            axios.get(`${process.env.NEXT_PUBLIC_API}/pekerja/profile/${getid}`)
                .then((res) => {
                    setUsers(res.data.data[0]);
                    // console.log(res.data.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [getid]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (getid !== null) {
            axios.get(`${process.env.NEXT_PUBLIC_API}/skill/${getid}`)
                .then((res) => {
                    setSkill(res.data.data);
                }, [])
                .catch((err) => {
                    console.log(err);
                });

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getid]);

    const handleSubmitPengalaman = (e) => {
        e.preventDefault();
        const updatedPengalaman = { ...pengalaman, pekerja_id: getid };
        console.log(updatedPengalaman);
        dispatch(createPengalaman(updatedPengalaman));
    };

    const [portofolio_image, setPortofolioImage] = useState(null);

    const handleUploadPorto = (e) => {
        const selectedImage = e.target.files[0];
        setPortofolioImage(selectedImage);
    };


    const handleSubmitPortofolio = (e) => {
        e.preventDefault();
        const updatedPortofolio = { ...portofolio, pekerja_id: getid };
        console.log(updatedPortofolio);

        dispatch(createPortofolio(updatedPortofolio, portofolio_image));
    };




    // profile uodate
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("pekerja_photo", image);
        formData.append("pekerja_name", users.pekerja_name);
        formData.append("pekerja_jobdesk", users.pekerja_jobdesk);
        formData.append("pekerja_domisili", users.pekerja_domisili);
        formData.append("pekerja_tempat_kerja", users.pekerja_tempat_kerja);
        formData.append("pekerja_deskripsi", users.pekerja_deskripsi);
        axios.put(`${process.env.NEXT_PUBLIC_API}/pekerja/profile/${getid}`,
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

    const handleDelete = (pengalaman_kerja_id) => {
        axios.delete(`${process.env.NEXT_PUBLIC_API}/pengalaman/${pengalaman_kerja_id}`)
            .then((res) => {
                Swal({
                    title: "Apakah Anda yakin?",
                    text: "Pengalaman kerja akan dihapus ",
                    icon: "warning",
                    buttons: ["Batal", "Ya, hapus"],
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        axios.delete(`${process.env.NEXT_PUBLIC_API}/pengalaman_kerja/${pengalaman_kerja_id}`)
                            .then((res) => {
                                setPengalaman((prevPengalaman) =>
                                    prevPengalaman.filter(
                                        (pengalaman) => pengalaman.pengalaman_kerja_id !== pengalaman_kerja_id
                                    )
                                );
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    } else {
                        console.log("Delete operation canceled by user.");
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteSkill = (skill_id) => {
        const updatedSkills = skill.filter((s) => s.skill_id !== skill_id);
        setSkill(updatedSkills);

        axios.delete(`${process.env.NEXT_PUBLIC_API}/skill/${skill_id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [portofolio, setPortofolio] = useState({
        portofolio_name: "",
        link_repository: "",
        pekerja_id: getid
    });

    useEffect(() => {
        if (getid !== null) {
            axios.get(`${process.env.NEXT_PUBLIC_API}/portofolio/pekerja/${getid}`)
                .then((res) => {
                    setPortofolio(res.data.data);
                }, [])
                .catch((err) => {
                    console.log(err);
                });

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getid]);

    const handleDeletePortofolio = (portofolio_id) => {
        axios.delete(`${process.env.NEXT_PUBLIC_API}/portofolio/${portofolio_id}`)
            .then((res) => {
                Swal({
                    title: "Apakah Anda yakin?",
                    text: "Portofolio akan dihapus ",
                    icon: "warning",
                    buttons: ["Batal", "Ya, hapus"],
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        axios.delete(`${process.env.NEXT_PUBLIC_API}/portofolio/${portofolio_id}`)
                            .then((res) => {
                                setPortofolio((prevPortofolio) =>
                                    prevPortofolio.filter(
                                        (portofolio) => portofolio.portofolio_id !== portofolio_id
                                    )
                                );
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    } else {
                        console.log("Delete operation canceled by user.");
                    }
                });
            })
            .catch((err) => {
                console.log(err);
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
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js" async></script>
                    <title>Profile Pekerja</title>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n        .background-purple {\n            width: 100vw;\n            height: 60vh;\n            background-color: #5E50A1;\n        }\n    "
                        }}

                    />
                    <style>
                        .profile-photo{"{"}
                        width: &ldquo;130%&rdquo;
                        {"}"}
                        @media screen and (max-width: 576px){"{"}
                        width: &ldquo;100%&rdquo;
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
                                            >
                                                <center>
                                            <div>
                                                <input
                                                    type='file'
                                                    name="pekerja_photo"
                                                    value={data.pekerja_photo}
                                                    onChange={handleUpload}
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    className='profile-photo'
                                                    src={users.pekerja_photo == "undefined" || users.pekerja_photo == undefined || users.pekerja_photo == "null" || users.pekerja_photo == null
                                                        ? defaultProfile
                                                        : users.pekerja_photo
                                                    }
                                                    alt="Pekerja Photo"
                                                    width={150}
                                                    height={150}
                                                    style={{ marginTop: 10, borderRadius: 100 }}
                                                />
                                            </div>
                                            </center>
                                        </div>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: 25 }}>
                                        <h4>{users.pekerja_name}</h4>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: 12 }}>
                                        <p>{users.pekerja_jobdesk == "null" || users.pekerja_jobdesk == null || users.pekerja_jobdesk == "undefined" || users.pekerja_jobdesk == undefined
                                            ? "Jobdesk"
                                            : users.pekerja_jobdesk}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p style={{ color: "grey" }}>
                                            {users.pekerja_domisili == "null" || users.pekerja_domisili == null || users.pekerja_domisili == "undefined" || users.pekerja_domisili == undefined
                                                ? "Domisili"
                                                : users.pekerja_domisili}
                                        </p>
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
                                        <Link href={`/profilepekerja/${getid}`}>
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
                                {/* 
                                {Array.isArray(data) ? (
                                    data.map((worker) => (
 */}
                                <div key={getid}
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
                                        <label htmlFor="">Nama lengkap</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan nama lengkap"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="pekerja_name"
                                                value={users.pekerja_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Job desk</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan job desk anda"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="pekerja_jobdesk"
                                                value={users.pekerja_jobdesk}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Domisili</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan domisili"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="pekerja_domisili"
                                                value={users.pekerja_domisili}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Tempat kerja</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan tempat kerja"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="pekerja_tempat_kerja"
                                                defaultValue={users.pekerja_tempat_kerja}
                                                value={users.pekerja_tempat_kerja}
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
                                                defaultValue={users.pekerja_deskripsi}
                                                name="pekerja_deskripsi"
                                                value={users.pekerja_deskripsi}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* //     )) */}
                                {/* // ) : ( */}
                                {/* //     <p>Loading data...</p> // Display a loading message or handle the non-array case */}
                                {/* // )} */}

                            </form>

                            <form onSubmit={handleSubmitSkill}>
                                <div
                                    className="border"
                                    style={{
                                        borderRadius: 10,
                                        width: "100%",
                                        paddingTop: 30,
                                        paddingLeft: 20,
                                        paddingRight: 30,
                                        backgroundColor: "white",
                                        marginTop: 40
                                    }}
                                >
                                    <h3>Skill</h3>
                                    <hr />

                                    <div style={{ paddingBottom: 15 }}>

                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Javascript, HTML, CSS"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name='skill_name'
                                                value={skill.skill_name}
                                                onChange={(e) => setSkill({ ...skill, skill_name: e.target.value })}
                                            />
                                            <button
                                                type="submit"
                                                className="btn btn-warning"
                                                style={{ marginLeft: 10, color: "white" }}
                                            // onClick={handleSaveSkill}
                                            >
                                                Simpan
                                            </button>
                                        </div>


                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {Array.isArray(skill) &&
                                                skill.map((skills) => (
                                                    <div
                                                        key={skills.skill_id}
                                                        className="skill-item"
                                                        style={{
                                                            marginTop: 20,
                                                            backgroundColor: "orange",
                                                            color: 'white',
                                                            borderRadius: 15,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            padding: '10px 15px',
                                                            marginRight: 6,
                                                        }}
                                                    >
                                                        <div style={{ flex: 1 }}>
                                                            <p style={{ margin: 0 }}>{skills.skill_name}</p>
                                                        </div>
                                                        <button
                                                            className="btn"
                                                            style={{ borderRadius: '50%', padding: 5 }}
                                                            onClick={() => handleDeleteSkill(skills.skill_id)}
                                                        >
                                                            <i className="bi bi-x-circle"></i>
                                                        </button>
                                                    </div>
                                                ))}
                                        </div>

                                    </div>
                                    {/* ))} */}
                                </div>
                            </form>

                            <form onSubmit={handleSubmitPengalaman}>
                                <div
                                    className="border"
                                    style={{
                                        borderRadius: 10,
                                        width: "100%",
                                        paddingTop: 30,
                                        paddingLeft: 20,
                                        paddingRight: 30,
                                        paddingBottom: 30,
                                        backgroundColor: "white",
                                        marginTop: 40
                                    }}
                                >
                                    <h3>Pengalaman kerja</h3>
                                    <hr />
                                    {Array.isArray(pengalaman) &&
                                        pengalaman.map((exp) => (
                                            <div
                                                key={exp.pengalaman_kerja_id}
                                                className="col-md-12 border"
                                                style={{
                                                    padding: "30px 30px 10px 30px",
                                                    borderRadius: 10,
                                                    marginTop: 13,
                                                }}
                                            >
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <h5>{exp.posisi}</h5>
                                                        <p>{exp.nama_perusahaan}</p>
                                                        <p>
                                                            {exp.dari} - {exp.sampai}
                                                        </p>
                                                    </div>
                                                    <div className="col-md-5" style={{ display: "flex", justifyContent: "end" }}>
                                                        <div>
                                                            <ModalUpdate
                                                                pengalaman_kerja_id={exp.pengalaman_kerja_id}
                                                                posisi={exp.posisi}
                                                                nama_perusahaan={exp.nama_perusahaan}
                                                                dari={exp.dari}
                                                                sampai={exp.sampai}
                                                                deskripsi={exp.deskripsi}
                                                            // pekerja_id={exp.pekerja_id}
                                                            />
                                                        </div>
                                                        <div>
                                                            <button type="button" className="btn btn-danger" style={{ marginLeft: 10, color: "white" }} onClick={() => handleDelete(exp.pengalaman_kerja_id)}>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{exp.deskripsi}</p>
                                                </div>
                                            </div>
                                        ))}
                                    <hr />


                                    <div>
                                        <label htmlFor="">Posisi</label>
                                        <div className="input-group mb-3">
                                            <input
                                                className="form-control"
                                                placeholder="Web developer"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                name="posisi"
                                                value={pengalaman.posisi} onChange={(e) => setPengalaman({ ...pengalaman, posisi: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label htmlFor="">Nama Perusahaan</label>
                                                <div className="input-group mb-3">
                                                    <input
                                                        required
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="PT Harus Bisa"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        name="nama_perusahaan"
                                                        value={pengalaman.nama_perusahaan} onChange={(e) => setPengalaman({ ...pengalaman, nama_perusahaan: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="">Dari</label>
                                            <div className="input-group mb-3">
                                                <input
                                                    required
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Agustus 2022"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    name="dari"
                                                    value={pengalaman.dari} onChange={(e) => setPengalaman({ ...pengalaman, dari: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="">Sampai</label>
                                            <div className="input-group mb-3">
                                                <input
                                                    required
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="September 2022"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    name="sampai"
                                                    value={pengalaman.sampai} onChange={(e) => setPengalaman({ ...pengalaman, sampai: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Deskripsi</label>
                                        <div className="input-group mb-3">
                                            <textarea
                                                required
                                                className="form-control"
                                                aria-label="With textarea"
                                                placeholder="Tuliskan deskipsi singkat"
                                                defaultValue={""}
                                                name="deskripsi"
                                                value={pengalaman.deskripsi} onChange={(e) => setPengalaman({ ...pengalaman, deskripsi: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <button
                                        type="submit"
                                        className="btn btn-warning"
                                        style={{ marginLeft: 10, color: "white", width: "100%" }}
                                    >
                                        Tambah Pengalaman Kerja
                                    </button>
                                </div>
                            </form>
                            <form onSubmit={handleSubmitPortofolio}>
                                <div
                                    className="border"
                                    style={{
                                        borderRadius: 10,
                                        width: "100%",
                                        paddingTop: 30,
                                        paddingLeft: 20,
                                        paddingRight: 30,
                                        paddingBottom: 30,
                                        backgroundColor: "white",
                                        marginTop: 40
                                    }}
                                >
                                    <h3>Portofolio</h3>
                                    <hr />
                                    {Array.isArray(portofolio) && portofolio.map((porto) => (
                                        <div key={porto.portofolio_id} className="col-md-12" style={{ marginTop: 25 }}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <Image
                                                        src={porto.portofolio_image}
                                                        width={215}
                                                        height={140}
                                                        alt="photo"
                                                    />
                                                </div>
                                                <div className="col-md-5">
                                                    <div style={{ marginLeft: 10 }}>
                                                        <div>
                                                            <p>{porto.portofolio_name}</p>
                                                        </div>
                                                        <div>
                                                            <p>{porto.link_repository}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-md-3"
                                                    style={{ display: "flex", justifyContent: "end" }}
                                                >
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            style={{ marginLeft: 10, color: "white" }}
                                                            onClick={() => handleDeletePortofolio(porto.portofolio_id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <hr />
                                    <div>
                                        <label htmlFor="">Nama</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan nama aplikasi"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="portofolio_name"
                                                value={portofolio.portofolio_name} onChange={(e) => setPortofolio({ ...portofolio, portofolio_name: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Link Repository</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan link repository"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="link_repository"
                                                value={portofolio.link_repository} onChange={(e) => setPortofolio({ ...portofolio, link_repository: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginTop: 20 }}>
                                        <label htmlFor="">Upload Gambar</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="file"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="portofolio_image"
                                                onChange={handleUploadPorto}

                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <button
                                        type="submit"
                                        className="btn btn-warning"
                                        style={{ marginLeft: 10, color: "white", width: "100%" }}
                                    >
                                        Tambah Portofolio
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
            <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" async></Script>
            <Script src="https://code.jquery.com/jquery-3.6.0.min.js" async></Script>
            <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" async></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" async></Script>
        </>

    )
}

export default ProfilePekerjaUpdate