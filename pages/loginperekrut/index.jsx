import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import imagelogin from '../../assets/img/login/picture.png'
import logo from '../../assets/img/landingPage/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import Swal from "sweetalert2";

const LoginPerekrut = () => {
    let [data, setData] = useState({
        perekrut_email: "",
        perekrut_confirmpassword: ""
    })

    let onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    console.log(data);

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:7474/perekrut/login`, data)
          .then((res) => {
            if (res.data.status === "success") {
              if (res.data.data.verify != "true") {
                Swal.fire("Login Error", "Please verify your email first", "error");
              } else {
                Swal.fire("Login Success", "Your account Success Login", "success")
                  .then((result) => {
                    localStorage.setItem("perekrut_id", res.data.data.perekrut_id);
                    localStorage.setItem('token', res.data.data.token);
                    router.push("/");
                  })
                  .catch((err) => {
                    console.log(res.data);
                  });
              }
            } else {
              console.log(res.data.message);
              Swal.fire("Login Error", res.data.message, "error");
            }
          })
          .catch((err) => {
            alert(err);
          })
      }


    return (
        <>
            <Head>
                <>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
                        crossOrigin="anonymous"
                    />
                    <title>Login Perekrut</title>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n    .image{\n      display: flex;\n      justify-content: center;\n    }\n    @media screen and (max-width: 576px){\n      .image{\n        display: none;\n      }\n\n    }\n  "
                        }}
                    />
                </>
            </Head>

            <main>
                <div className="row">
                    <secttion className="col-md-6">
                        <div className="image">
                            <div style={{ width: "90%" }}>
                                <Image
                                    src={imagelogin}
                                    style={{ width: "100%", height: "100%", marginTop: 15 }}
                                />
                                <div
                                    className="centered"
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "86.56%",
                                        height: "100%",
                                        backgroundColor: "#5E50A1",
                                        opacity: "0.6",
                                        marginTop: 15
                                    }}
                                ></div>
                                <Image
                                    src={logo}
                                    style={{
                                        position: "absolute",
                                        top: 30,
                                        left: 56,
                                        width: 86,
                                        height: 24
                                    }}

                                />
                                <div
                                    className="centered"
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        color: "white"
                                    }}
                                >
                                    {" "}
                                    <h1>
                                        Temukan developer berbakat &amp; terbaik di berbagai bidang
                                        keahlian
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </secttion>
                    <secttion className="col-md-5">
                        <div className="container" style={{ marginTop: 90 }}>
                            <h2>Halo, Pewpeople</h2>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                                    maiores sunt harum cumque ducimus?
                                </p>
                                <form onSubmit={handleSubmit} >
                                    <div>
                                        <label htmlFor="">Email</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Masukan email anda"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name='perekrut_email'
                                                value={data.perekrut_email}
                                                onChange={onChange}
                                                required

                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Kata sandi</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Masukan kata sandi"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name='perekrut_confirmpassword'
                                                value={data.perekrut_confirmpassword}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "end" }}>
                                        <p>Lupa kata sandi?</p>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-warning"
                                            style={{ color: "white", width: "100%" }}
                                        >
                                            Masuk
                                        </button>
                                    </div>
                                </form>
                                <div
                                    style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
                                >
                                    <p>Anda belum punya akun?</p>{" "}
                                    <Link href="/registerperekrut">
                                        <p className="text-warning" style={{ marginLeft: 5 }}>
                                            Daftar disini
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </secttion>
                </div>
            </main>
        </>
    )
}

export default LoginPerekrut