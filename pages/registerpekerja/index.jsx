import Head from 'next/head'
import React, { useState } from 'react'
import imagelogin from '../../assets/img/login/picture.png'
import logo from '../../assets/img/landingPage/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

const RegisterPekerja = () => {
 
  let [data, setData] = useState({
    pekerja_email: "",
    pekerja_name: "",
    pekerja_phone: "",
    pekerja_password: "",
    pekerja_confirmpassword: ""
  })


  let onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:7474/pekerja/register`, data)
        .then((res) => {
          console.log(res);
            alert("Register success")
            router.push("/loginpekerja");
            localStorage.setItem('token', res.data.data.token)
            // console.log(res.data);
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
          <title>Register Pekerja</title>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .image{\n        width: 48.7%;\n      display: flex;\n      justify-content: center;\n      position: fixed;\n    }\n    @media screen and (max-width: 576px){\n      .image{\n        display: none;\n      }\n\n    }\n  "
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
                    width: "90%",
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
            <div className="container" style={{ marginTop: 20 }}>
              <h2>Halo, Pewpeople</h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                  maiores sunt harum cumque ducimus?
                </p>
                <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="">Nama</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukan nama lengkap"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="pekerja_name"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukan email anda"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="pekerja_email"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">No Handphone</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukan no handphone anda"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="pekerja_phone"
                      onChange={onChange}
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
                      name="pekerja_password"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Konfirmasi kata sandi</label>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Konfirmasi kata sandi"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="pekerja_confirmpassword"
                      onChange={onChange}
                    />
                  </div>
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
                <div
                  style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
                >
                  <p>Anda sudah punya akun?</p>{" "}
                  <Link href="/loginpekerja">
                    <p className="text-warning" style={{ marginLeft: 5 }}>
                      Masuk disini
                    </p>
                  </Link>
                </div>
                </form>
              </div>
            </div>
          </secttion>
        </div>
      </main>

    </>
  )
}

export default RegisterPekerja