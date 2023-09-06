import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalUpdate = ({ pengalaman_kerja_id, posisi, nama_perusahaan, dari, sampai, deskripsi }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [data, setData] = useState({
        posisi,
        nama_perusahaan,
        dari,
        sampai,
        deskripsi,
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const experiences = await axios.put(`http://hire-job-backend-14io6stvb-alvienasyandika-gmailcom.vercel.app/pengalaman/${pengalaman_kerja_id}`,
                data
            );
            const result = experiences.data.data;
            setShow(false);
            window.location.reload();
        } catch (err) {
            console.log(err.message);
        }
    };


    return (
        <>
            <button type="button" className="btn btn-warning" style={{ marginLeft: 10, color: "white" }} onClick={handleShow}
            >
                Edit
            </button>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Pengalaman Kerja</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>

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
                                    value={data.posisi}
                                    onChange={handleChange}
                                // required
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
                                            value={data.nama_perusahaan}
                                            onChange={handleChange}
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
                                        value={data.dari}
                                        onChange={handleChange}
                                    // value={pengalaman.dari} 
                                    // onChange={(e) => setPengalaman({ ...pengalaman, dari: e.target.value })}
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
                                        value={data.sampai}
                                        onChange={handleChange}
                                    // value={pengalaman.sampai} 
                                    // onChange={(e) => setPengalaman({ ...pengalaman, sampai: e.target.value })}
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
                                    value={data.deskripsi}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type="button"  onClick={handleSubmit}className="btn btn-warning">
                            Update
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>


        </>
    )
}

export default ModalUpdate