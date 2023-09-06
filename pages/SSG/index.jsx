import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import axios from 'axios'
import profilephoto from '../../assets/img/editprofilecompany/profilepic.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer'
import NavbarLogin from '../../components/navbarlogin'
import Link from 'next/link'
import defaultProfile from '../../assets/img/user_default.jpeg'
import { useSelector } from 'react-redux'

export async function getStaticProps() {
    const res = await axios.get(`https://hire-job-backend.vercel.app/pekerja/profieprofile`);
  return {
    props: { pekerja: res.data.data },
  };
}

function SSG({ pekerja }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const [search, setSearch] = useState("");
    return (
        <>
            <NavbarLogin />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
                    crossOrigin="anonymous"
                />
                <title>TopJobs</title>
            </Head>

            <div
                className="border"
                style={{
                    width: "98.93vw",
                    height: "14vh",
                    backgroundColor: "#5E50A1",
                    display: "flex"
                }}
            >
                <h3
                    className="container"
                    style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        color: "white",
                        fontStyle: "inherit"
                    }}
                >
                    Top Jobs
                </h3>
            </div>


            <main className="container" style={{ marginTop: 50 }}>
                <section className="col-md-12" style={{ marginTop: 50 }}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control border"
                            placeholder="Search for any skill"
                            aria-label="Recipient's username with two button addons"
                            aria-describedby="button-addon4"
                            style={{ height: 60 }}
                            onChange={(e) => setSearch(e.target.value)}

                        />
                        <div className="input-group-append" id="button-addon4">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                data-toggle="dropdown"
                                style={{ padding: "0px 35px 0px 35px" }}
                            >
                                Kategori
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Sort by name
                                </a>
                                <a className="dropdown-item" href="#">
                                    Sort by skill
                                </a>
                                <a className="dropdown-item" href="#">
                                    Sort by location
                                </a>
                                <a className="dropdown-item" href="#">
                                    Sort by freelance
                                </a>
                                <a className="dropdown-item" href="#">
                                    Sort by fulltime
                                </a>
                            </div>
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                style={{
                                    height: "100%",
                                    width: "200%",
                                    padding: "0px 30px 0px 30px",
                                    backgroundColor: "#5E50A1",
                                    color: "white"
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </section>
                <section
                    className="col-md-12"
                    style={{ marginTop: 2, borderRadius: 10, padding: "20px 10px 20px 10px" }}
                >
                    <div className="col-md-12 " style={{ borderRadius: 15, padding: "0px 30px 20px 30px" }}>
                        {pekerja
                            .filter((user) => {
                                return search.toLowerCase() === ""
                                    ? user
                                    : user.pekerja_name.toLowerCase().includes(search);
                            })
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((user) => (
                                <div className="row border" key={user.pekerja_id} style={{ marginTop: 10, padding: "20px 10px 20px 10px" }}>
                                    <div
                                        className="col-md-2"
                                        style={{ display: "flex", alignItems: "center" }}
                                    >
                                        <Image
                                            className='profile-photo'
                                            src={user.pekerja_photo == "null" || user.pekerja_photo == null || user.pekerja_photo == "undefined" || user.pekerja_photo == undefined
                                                ? defaultProfile
                                                : user.pekerja_photo
                                            }
                                            alt="Pekerja Photo"
                                            width={140}
                                            height={140}
                                            style={{ marginTop: 10, borderRadius: 100 }}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <div>
                                            <h4>{user.pekerja_name}</h4>
                                        </div>
                                        <div>
                                            <p>{user.pekerja_domisili == "null" || user.pekerja_jobdesk == null || user.pekerja_jobdesk == "undefined" || user.pekerja_jobdesk == undefined
                                                ? "Jobdesk"
                                                : user.pekerja_jobdesk}</p>
                                        </div>
                                        <div>
                                            <p>{user.pekerja_domisili == "null" || user.pekerja_domisili == null || user.pekerja_domisili == "undefined" || user.pekerja_domisili == undefined
                                                ? "Domisili"
                                                : user.pekerja_domisili}</p>
                                        </div>
                                        <div>
                                            <strong>Skills:</strong>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-4"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "end"
                                        }}
                                    >
                                        <Link key={user.pekerja_id} href={`/profilepekerjahire/${user.pekerja_id}`}>
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                style={{
                                                    height: "30%",
                                                    width: "100%",
                                                    padding: "0px 30px 0px 30px",
                                                    backgroundColor: "#5E50A1",
                                                    color: "white",
                                                }}
                                            >
                                                Lihat profile
                                            </button>
                                        </Link>
                                    </div>
                                    <hr />
                                </div>

                            ))}

                    </div>
                    <div className="pagination" style={{ marginTop: 12, marginLeft: 15 }}>
                        {Array.from({ length: Math.ceil(pekerja.length / itemsPerPage) }, (_, index) => index + 1).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                style={{
                                    margin: '5px',
                                    padding: '5px 10px',
                                    background: pageNumber === currentPage ? '#f0f0f0' : '#ffffff',
                                    border: '1px solid #ccc',
                                    cursor: 'pointer',
                                }}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>

                </section>

            </main>
            <Footer />

            <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></Script>

        </>

    );
  }

export default SSG